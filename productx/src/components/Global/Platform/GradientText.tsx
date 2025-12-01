import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GradientText() {
  const ref = useRef(null);

  // Track scroll *within only this section*
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Animate gradient colors
 const gradient = useTransform(
  scrollYProgress,
  [0, 1],
  [
    "linear-gradient(90deg, #2B68C3 0%, #2B68C3 100%)",
    "linear-gradient(90deg, #ff00ff, #ff8800, #ffee00)" // TEST COLORS
  ]
);


  // Make gradient SHIFT horizontally
  const bgSize = useTransform(scrollYProgress, [0, 1], ["100%", "300%"]);
  const bgPos = useTransform(scrollYProgress, [0, 1], ["0% 50%", "100% 50%"]);

  return (
    <div ref={ref} className="relative h-[200vh] bg-[#ACCAEF]">
      {/* STICKY SECTION */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-8">
        <motion.h3
          style={{
            backgroundImage: gradient,
            backgroundSize: bgSize,
            backgroundPosition: bgPos,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="max-w-5xl text-center text-5xl leading-snug font-bold font-bricolage"
        >
          Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor , consectetur
          adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor ,
          consectetur adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum
          dolor , consectetur adipis
        </motion.h3>
      </div>
    </div>
  );
}
