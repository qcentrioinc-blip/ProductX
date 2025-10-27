import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controlsThick = useAnimation();
  const controlsThin = useAnimation();

  useEffect(() => {
    if (inView) {
      controlsThick.start({
        x: ["-100%", "100%"],
        scaleY: [1, 1.3, 1],
        opacity: [0, 1, 1],
        transition: {
          x: { duration: 3, repeat: Infinity, ease: "linear" },
          scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          opacity: { duration: 1, ease: "easeInOut" },
        },
      });
      controlsThin.start({
        x: ["-100%", "100%"],
        scaleY: [1, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          x: { duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 },
          scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.5 },
          opacity: { duration: 1, ease: "easeInOut", delay: 0.5 },
        },
      });
    }
  }, [inView, controlsThick, controlsThin]);

  return (
    <section
      ref={ref}
      className="relative w-full h-auto bg-green-50 flex flex-col justify-center px-[clamp(1rem,6vw,8rem)] py-[clamp(2rem,6vw,5rem)] overflow-hidden"
    >
      {/* ====== TEXT CONTENT ====== */}
      <div className="max-w-4xl z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-[24px] md:text-[32px] lg:text-[40px]
        font-bricolage
        font-semibold
        leading-[120%]"
        >
          <span className="bg-gradient-to-r from-green-700 via-green-600 to-amber-500 bg-clip-text text-transparent">
            Sed ut perspiciatis Unde Seduo ut perspiciatis
          </span>{" "}
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-[14px] md:text-[16px] lg:text-[16px]
        font-quicksand
        leading-[120%] max-w-3xl"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. occaecat cupidatat non.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-[14px] md:text-[16px] lg:text-[16px]
        font-quicksand
        leading-[120%] max-w-3xl"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. occaecat cupidatat non.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 group
        flex items-center justify-center
        w-[185px] h-[48px]
        px-[24px] py-[12px]
        rounded-[8px]
        font-quicksand font-bold
        text-[16px] 
        border-2 border-[#141414]
        bg-white text-[#141414]
        shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
        transition-all duration-300 ease-in-out
        hover:bg-[#141414] hover:text-white"
        >
          CONTACT US
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* ====== BACKGROUND SHAPE ====== */}
      <motion.img
        src="/EHR-PMS/Careers/shape1.png"
        alt="decorative shape"
        className="absolute object-contain pointer-events-none select-none"
        style={{
          width: "clamp(280px, 53vw, 1030px)",
          height: "auto",
          bottom: "clamp(-320px, -20vw, -200px)",
          right: "clamp(-100px, 4vw, -10px)",
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />

    </section>
  );
};

export default ContactSection;
