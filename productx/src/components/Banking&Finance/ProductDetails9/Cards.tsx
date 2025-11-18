import React, { useRef, useEffect } from "react";
import { H4, P } from "../../../styles/Typography";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Duis aute irure dolor in", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
];

// Card entry/exit from 4 screen corners
const cornerVariants: Variants = {
  hidden: (index: number) => {
    const cornerOffsets = [
      { x: "-140vw", y: "-140vh" }, // top-left
      { x: "140vw",  y: "-140vh" }, // top-right
      { x: "-140vw", y: "140vh"  }, // bottom-left
      { x: "140vw",  y: "140vh"  }, // bottom-right
    ];

    return {
      ...cornerOffsets[index],
      opacity: 0,
      scale: 0.85
    };
  },

  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 55,     // ↓ lower = smoother
      damping: 18,       // ↑ higher = less bounce
      mass: 1.4,         // ↑ heavier = slower movement
      duration: 1.9,     // ↑ slower
      ease: [0.22, 1, 0.36, 1] // premium iOS-like curve
    }
  },

  exit: (index: number) => {
    const cornerOffsets = [
      { x: "-140vw", y: "-140vh" },
      { x: "140vw",  y: "-140vh" },
      { x: "-140vw", y: "140vh" },
      { x: "140vw",  y: "140vh" },
    ];

    return {
      ...cornerOffsets[index],
      opacity: 0,
      scale: 0.85,
      transition: {
        type: "tween",
        duration: 1.2, // slow exit also
        ease: [0.4, 0, 0.2, 1] // smooth ease-out
      }
    };
  }
};

const BorderZoomCards: React.FC = () => {
  const containerRef = useRef(null);

  const inView = useInView(containerRef, {
    margin: "-40% 0px -40% 0px",
    once: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("exit");
  }, [inView, controls]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F5DDA9] py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      {/* Shape behind (same as before) */}
      <div className="hidden md:flex absolute inset-0 justify-center items-center mt-20 z-10">
        <img
          src="/ProductPage9/img2.png"
          alt="decorative shape"
          className="w-[90%] h-full object-cover pointer-events-none select-none"
        />
      </div>

      {/* Cards */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cornerVariants}
            initial="hidden"
            animate={controls}
            className="
              bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg
              w-full max-w-[560px]
              h-[360px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[440px]
              flex flex-col justify-between
              border border-gray-200
            "
          >
            <div>
              <H4 className="text-gray-900 mb-3">{item.title}</H4>
              <P className="text-gray-700 leading-relaxed xl:max-w-[350px]">
                {item.description}
              </P>
            </div>

            <div className="w-full h-[55%] bg-gradient-to-br from-[#E9E9E9] to-[#F0F0F0] rounded-lg mt-5 shadow-inner"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BorderZoomCards;
