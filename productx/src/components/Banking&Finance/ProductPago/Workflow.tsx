import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRIMARY_COLOR = "#4285F4";
const LIGHT_BLUE_BG = "#C1D7F3";
const BUTTON_COLOR = "#000000";

const steps = [
  {
    id: 1,
    title:
      "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title:
      "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title:
      "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title:
      "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title:
      "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(1);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsContainerRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which step is currently in view
      let newActiveStep = 1;
      let minDistance = Infinity;

      stepRefs.current.forEach((stepEl, index) => {
        if (stepEl) {
          const rect = stepEl.getBoundingClientRect();
          const stepTop = rect.top + window.scrollY;
          const stepCenter = stepTop + rect.height / 2;
          const distance = Math.abs(scrollPosition - stepCenter);

          // Debug: Uncomment to see values in console
          // console.log(`Step ${index + 1}: distance=${distance}, active=${distance < minDistance}`);

          if (distance < minDistance) {
            minDistance = distance;
            newActiveStep = index + 1;
          }
        }
      });

      setActiveStep(newActiveStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: LIGHT_BLUE_BG }} className="w-full relative pb-20">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center text-center pt-16 pb-16 px-6 md:px-20">
        <h1 
          style={{ color: PRIMARY_COLOR }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug"
        >
          Lorem ipsum dolor gamis consecte ipsum
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl">
          Duis aute irure dolor in voluptate velit esse voluptate velit esse
          essereprehenderit in voluptate velit esse voluptate velit esse Duis
          aute irure dolor in voluptate velit esse voluptate velit esse
          reprehenderit in voluptate velit esse voluptate
        </p>
      </div>

      <div
        ref={stepsContainerRef}
        className="relative flex justify-center items-start"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start px-6 lg:px-16">
          {/* LEFT SIDE - Sticky Image */}
          <div className="sticky top-24 h-[400px] md:h-[600px] order-1 md:order-none">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep - 1]?.image}
                  alt={`Step ${activeStep}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE - Steps */}
          <div className="flex flex-col space-y-16 md:space-y-24 relative py-10">
            {/* Connecting line */}
            <div
              style={{ backgroundColor: PRIMARY_COLOR }}
              className="absolute left-5 top-0 bottom-0 w-[3px] rounded-full opacity-30"
            />

            {steps.map((step, index) => {
              const isActive = step.id === activeStep;
              return (
                <motion.div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="flex items-start gap-6 relative z-10 min-h-[120px]"
                >
                  {/* Circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.3 : 1,
                      backgroundColor: isActive ? PRIMARY_COLOR : "white",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      color: isActive ? "white" : PRIMARY_COLOR,
                      boxShadow: isActive 
                        ? "0 4px 20px rgba(66, 133, 244, 0.4)" 
                        : "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                  >
                    {step.id}
                  </motion.div>

                  {/* Step Content */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? "white" : "transparent",
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 rounded-lg"
                    style={{
                      padding: isActive ? "20px" : "0px",
                      boxShadow: isActive ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none",
                    }}
                  >
                    <h3
                      className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-gray-900 font-medium" : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Book A Demo Button */}
            <div className="pl-16 pt-8">
              <button
                style={{ backgroundColor: BUTTON_COLOR }}
                className="flex items-center gap-2 px-6 py-3 text-white rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg font-semibold text-sm"
              >
                BOOK A DEMO
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.3 5.092a.75.75 0 011.082-1.082l5.5 5.75a.75.75 0 010 1.082l-5.5 5.75a.75.75 0 11-1.082-1.082l4.18-4.18H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
