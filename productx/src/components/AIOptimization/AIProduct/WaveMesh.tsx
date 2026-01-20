import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export default function WaveMesh() {
  const x = useMotionValue(0);

  useAnimationFrame(() => {
    x.set(x.get() - 0.15); // very slow, premium feel
  });

  return (
    <div className="absolute bottom-0 left-0 w-full h-[30%] overflow-hidden pointer-events-none">
      <motion.svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ x }}
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1ED4A7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1ED4A7" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="waveGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4AA3FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4AA3FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* BACK WAVE */}
        <path
          d="M0,200
             C200,180 400,210 600,200
             C800,190 1000,220 1200,210
             C1320,205 1440,195 1440,195"
          fill="none"
          stroke="url(#waveGradient2)"
          strokeWidth="2"
          strokeDasharray="1 8"
        />

        {/* MID WAVE */}
        <path
          d="M0,230
             C240,210 480,240 720,230
             C960,220 1200,250 1440,240"
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="2.5"
          strokeDasharray="1 6"
        />

        {/* FRONT WAVE */}
        <path
          d="M0,260
             C300,240 600,270 900,260
             C1140,250 1320,270 1440,260"
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="3"
          strokeDasharray="1 5"
        />
      </motion.svg>
    </div>
  );
}
