import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

const text =
  "On average, CloudDIET customers save 30% of their Azure spend beyond existing Reserved Instances.";

const images = [
  "/AI-CloudFinOps/HomePage/Img1.webp",
  "/AI-CloudFinOps/HomePage/Img2.webp",
  "/AI-CloudFinOps/HomePage/Img3.webp",
  "/AI-CloudFinOps/HomePage/Img4.webp",
];

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.15"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });
  /* ------------------------------
     Image transforms (DESKTOP ONLY)
  ------------------------------- */
  const transforms = [
    {
      x: useTransform(smoothProgress, [0, 1], [0, -490]),
      y: useTransform(smoothProgress, [0, 1], [0, -200]),
      r: -10,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, 490]),
      y: useTransform(smoothProgress, [0, 1], [0, -200]),
      r: 10,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, -450]),
      y: useTransform(smoothProgress, [0, 1], [0, 180]),
      r: 8,
    },
    {
      x: useTransform(smoothProgress, [0, 1], [0, 450]),
      y: useTransform(smoothProgress, [0, 1], [0, 180]),
      r: -8,
    },
  ];

  const words = text.split(" ");
  const highlightStart = text.indexOf("30%");
  const highlightEnd = highlightStart + 3;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-white
        xl:h-screen
        overflow-hidden
        px-6
        py-30
        flex
        items-center
        justify-center
      "
    >
      {/* ================= IMAGES (DESKTOP ONLY) ================= */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
        {images.map((src, i) => (
          <motion.div
            key={i}
            style={{
              x: transforms[i].x,
              y: transforms[i].y,
              rotate: transforms[i].r,
            }}
            className="
              absolute
              w-32 h-32
              xl:w-48 xl:h-48
              rounded-xl
              overflow-hidden
              border border-black/5
              shadow-2xl
            "
          >
            <img
              src={src}
              alt="Work"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>
 
      {/* ================= TEXT (ALL SCREENS) ================= */}
      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="
          text-[24px]
          sm:text-[28px]
          md:text-[42px]
          lg:text-[64px]
          font-bricolage
          font-semibold
          leading-[115%]
          tracking-tight
        ">
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-flex whitespace-nowrap mr-[0.25em]"
            >
              {word.split("").map((char, charIndex) => {
                const globalIndex =
                  text.indexOf(word) + charIndex;

                const start = globalIndex / text.length;
                const end = start + 1 / text.length;

                const isHighlight =
                  globalIndex >= highlightStart &&
                  globalIndex < highlightEnd;

                return (
                  <Character
                    key={charIndex}
                    progress={smoothProgress}
                    range={[start, end]}
                    highlight={isHighlight}
                  >
                    {char}
                  </Character>
                );
              })}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}

/* ------------------------------
   Character component
-------------------------------- */
function Character({
  children,
  progress,
  range,
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight?: boolean;
}) {
  const color = useTransform(
    progress,
    highlight
      ? [range[0], range[1], 1]
      : range,
    highlight
      ? ["#9ca3af", "#000000", "#2563eb"]
      : ["#9ca3af", "#000000"]
  );

  const scale = useTransform(
    progress,
    [0.9, 1],
    highlight ? [1, 1.15] : [1, 1]
  );

  return (
    <motion.span
      style={{ color, scale }}
      className={`inline-block ${
        highlight ? "font-bold tracking-tight" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}
