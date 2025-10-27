import React, { useRef } from "react";
import { H3, P } from "../../../styles/Typography";
import { motion, type Variants, useInView, useAnimation } from "framer-motion";

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

const borderZoomVariant: Variants = {
  hidden: (custom: number) => {
    const positions = [
      { x: -600, y: 0, scale: 0.2, opacity: 0 },    // Left with scale
      { x: 600, y: 0, scale: 0.2, opacity: 0 },     // Right with scale
      { x: 0, y: -400, scale: 0.2, opacity: 0 },    // Top with scale
      { x: 0, y: 400, scale: 0.2, opacity: 0 }      // Bottom with scale
    ];
    return positions[custom];
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 90,
      damping: 13
    }
  },
  exit: (custom: number) => {
    const positions = [
      { x: -600, y: 0, scale: 0.2, opacity: 0 },
      { x: 600, y: 0, scale: 0.2, opacity: 0 },
      { x: 0, y: -400, scale: 0.2, opacity: 0 },
      { x: 0, y: 400, scale: 0.2, opacity: 0 }
    ];
    return {
      ...positions[custom],
      transition: {
        duration: 0.7,
        ease: "easeIn"
      }
    };
  }
};

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1
    }
  }
};

const BorderZoomCards: React.FC = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { 
    margin: "-100px 0px -100px 0px",
    once: false
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [inView, controls]);

  return (
    <section className="relative w-full bg-[#F5DDA9] py-16 px-6 md:px-12 lg:px-20 overflow-hidden" ref={containerRef}>

      {/* Shape Image (Hidden on mobile) */}
      <div className="hidden md:flex absolute inset-0 justify-center items-center mt-20 z-10">
        <img
          src="/ProductPage9/img2.png"
          alt="decorative shape"
          className="w-[90%] h-full object-cover top-1/2 left-1/2 pointer-events-none select-none"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            if (target) {
              target.onerror = null;
              target.src = "https://placehold.co/1000x800/F5DDA9/999999?text=Shape+Fallback";
            }
          }}
        />
      </div>

      {/* Cards Container */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center"
        variants={containerVariant}
        initial="hidden"
        animate={controls}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={borderZoomVariant}
            whileHover={{ 
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
            className="
              bg-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg hover:shadow-2xl
              w-full max-w-[550px] sm:max-w-[500px] md:max-w-[530px] lg:max-w-[560px] xl:max-w-[580px]
              h-[360px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[440px]
              flex flex-col justify-between
              cursor-pointer
              border border-gray-100
            "
          >
            {/* Text Section */}
            <div>
              <H3 className="text-gray-900 mb-3 text-base sm:text-lg md:text-xl">{item.title}</H3>
              <P className="text-gray-700 mb-5 leading-relaxed text-sm sm:text-base">{item.description}</P>
            </div>

            {/* Placeholder Rectangle */}
            <div className="w-full h-[55%] bg-gradient-to-br from-[#E9E9E9] to-[#F0F0F0] rounded-lg mt-5 shadow-inner"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BorderZoomCards;