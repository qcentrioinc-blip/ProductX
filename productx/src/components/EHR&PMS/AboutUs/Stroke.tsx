import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Stroke = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth delayed growth
  const grow = useTransform(scrollYProgress, [0.2, 0.85], [0, 1]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-[999]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ================= GUIDE (WHITE) ================= */}

        <path
          d="
            M 90 20
            C 30 10, 20 90, 70 95
            C 95 98, 100 75, 80 65
            S 55 75, 60 105
            C 62 130, 70 145, 78 155
          "
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.2"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="
            M 92 20
            C 32 12, 22 92, 72 97
            C 97 100, 102 77, 82 67
            S 57 77, 62 107
            C 64 132, 72 147, 80 157
          "
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* ================= ANIMATED (GREEN) ================= */}

        <motion.path
          d="
            M 90 20
            C 30 10, 20 90, 70 95
            C 95 98, 100 75, 80 65
            S 55 75, 60 105
            C 62 130, 70 145, 78 155
          "
          stroke="#9FE7C1"
          strokeWidth="0.2"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: grow }}
        />

        <motion.path
          d="
            M 92 20
            C 32 12, 22 92, 72 97
            C 97 100, 102 77, 82 67
            S 57 77, 62 107
            C 64 132, 72 147, 80 157
          "
          stroke="#9FE7C1"
          strokeWidth="0.2"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: grow }}
        />
      </svg>
    </div>
  );
};

export default Stroke;
