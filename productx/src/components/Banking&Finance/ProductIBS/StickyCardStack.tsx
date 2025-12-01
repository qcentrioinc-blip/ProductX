import React, { useRef, useEffect } from "react";
// import { H4, P } from "../../../styles/Typography";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

// --- Data Structure ---
interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  { title: "Modular Architecture", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Neural Processing", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Secure Encryption", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
  { title: "Global Latency", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
];

// --- Animation Variants ---

// Fixed: Explicitly typed as Variants to resolve TypeScript error 2322
const titleVariants: Variants = { 
    hidden: { 
        opacity: 0, 
        scale: 0.8 
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        }
    }
};

// Corner Convergence Logic
const cornerVariants: Variants = {
  // 'custom' prop (index) is passed here to determine the starting corner
  hidden: (index: number) => {
    // Define the 4 corners based on the index of the card
    const cornerOffsets = [
      { x: "-100vw", y: "-100vh" }, // Index 0: Top-Left
      { x: "100vw",  y: "-100vh" }, // Index 1: Top-Right
      { x: "-100vw", y: "100vh"  }, // Index 2: Bottom-Left
      { x: "100vw",  y: "100vh"  }, // Index 3: Bottom-Right
    ];

    return {
      ...cornerOffsets[index],
      opacity: 0,
      scale: 1.5, // Start larger for dramatic effect
      rotate: index % 2 === 0 ? -45 : 45, // Add initial rotation
    };
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0, // Snaps into final position
    transition: {
      type: "spring",
      stiffness: 40, // Controls speed and "snap"
      damping: 15,   // Controls bounciness
      mass: 1.2,
      delay: 0.2,
    }
  },
};

// --- Component ---
const CornerConvergence: React.FC = () => {
  const containerRef = useRef(null);
  
  // Trigger animation when 40% of the element is in view (once: true)
  const inView = useInView(containerRef, { margin: "-40% 0px -40% 0px", once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      
      {/* --- Background Decoration (Optional) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />
      </div>

      {/* --- Central Text Section --- */}
      <div className="relative z-30 text-center max-w-2xl mb-16 px-6">
        <motion.div 
            initial="hidden" 
            animate={inView ? "visible" : "hidden"} 
            variants={titleVariants}
        >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
                Core System <br/> Architecture
            </h2>
            <p className="text-gray-500 text-lg">
                Our system aggregates data from multiple endpoints, ensuring real-time synchronization.
            </p>
        </motion.div>
      </div>

      {/* --- The Grid of 4 Converging Cards --- */}
      <div className="relative z-20 w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index} // Passed to 'cornerVariants' to select the starting corner
              variants={cornerVariants}
              initial="hidden"
              animate={controls}
              className="
                bg-white p-8 rounded-2xl shadow-xl border border-gray-100 
                h-[280px] flex flex-col justify-center items-start
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
              "
            >
              {/* Icon Placeholder */}
              <div className="w-12 h-12 bg-blue-50 rounded-lg mb-6 flex items-center justify-center">
                 <div className="w-6 h-6 bg-blue-500 rounded-full opacity-80" />
              </div>

              {/* Using standard HTML tags, replace with H4 and P if needed */}
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4> 
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CornerConvergence;