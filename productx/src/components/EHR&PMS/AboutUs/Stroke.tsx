import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Stroke = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Controls drawing progress
  const draw = useTransform(scrollYProgress, [0.15, 0.9], [1, 0]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none z-[10]]"
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill="none"
        preserveAspectRatio="none"
      >
    <motion.path
  d="
    M 52 8
    C 48 18, 62 26, 70 38
    C 78 50, 68 66, 58 78
  "
  stroke="#166D48"
  strokeWidth="0.1"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
  pathLength={1}
  style={{
    strokeDasharray: 1,
    strokeDashoffset: draw,
  }}
/>

      </svg>
    </div>
  );
};

export default Stroke;
