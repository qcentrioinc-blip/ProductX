import { useState, useEffect, useRef, useContext, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollContext } from "../../../context/ScrollContext";
import { H2 } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
 
const PRIMARY_COLOR = "#2B68C3";
// const LIGHT_BLUE_BG = "#C1D7F3";


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
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollableContainerRef = useContext(ScrollContext);
 
  useEffect(() => {
    const lenis = scrollableContainerRef;
    if (!lenis) return;
 
    const handleScroll = () => {
      if (!sectionRef.current) return;
 
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
 
      const sectionProgress = (viewportCenter - sectionRect.top) / sectionRect.height;
 
      setScrollProgress(sectionProgress);
 
      // Map progress to step (1 to 5)
      const stepProgress = Math.min(
        Math.max(sectionProgress * steps.length, 0),
        steps.length - 0.01
      );
      const newActiveStep = Math.floor(stepProgress) + 1;
 
      setActiveStep(newActiveStep);
    };
 
    lenis.on("scroll", handleScroll);
    handleScroll();
 
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [scrollableContainerRef]);
 
 
  const backgroundGradient = useMemo(() => {
    const progress = scrollProgress;
 
    const start = { r: 193, g: 215, b: 243 };
 
    const end = { r: 100, g: 100, b: 255 };
 
    const r = Math.round(start.r + (end.r - start.r) * progress);
    const g = Math.round(start.g + (end.g - start.g) * progress);
    const b = Math.round(start.b + (end.b - start.b) * progress);
 
    return `rgb(${r}, ${g}, ${b})`;
  }, [scrollProgress]);
 
  return (
    <motion.div
      ref={sectionRef}
      style={{
        backgroundColor: backgroundGradient,
        transition: 'background-color 0.1s ease-out'
      }}
      className="w-full relative pb-20 min-h-[400vh]"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center  pt-16 pb-10 lg:pb-16 px-6 md:px-20">
        <H2
 
          className="  text-[#2B68C3]  mb-6 leading-snug"
        >
          Lorem ipsum dolor gamis consecte ipsum
        </H2>
        <motion.p
          style={{
            color: scrollProgress > 0.3 ? '#374151' : '#141414'
          }}
          className="text-sm   md:text-base leading-relaxed max-w-4xl transition-colors duration-300"
        >
          Duis aute irure dolor in voluptate velit esse voluptate velit essereprehenderit in voluptate velit esse voluptate velit esse Duis aute irure dolor in voluptate velit esse voluptate velit essereprehenderit in voluptate velit esse voluptate
        </motion.p>
      </div>
 
      {/* Sticky Content Container */}
      <div className="sticky top-10 lg:h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center px-6 lg:px-10">
 
          {/* LEFT SIDE - Sticky Image */}
          <div className="h-[400px] md:h-[600px] order-1 md:order-0">
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
                  transition={{ duration: 0, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
          {/* RIGHT SIDE - All 5 Steps in View */}
          <div className="flex flex-col relative space-y-4 lg:space-y-8 mt-6">
            {/* Connecting line */}
            <div
              style={{ backgroundColor: "black" }}
              className="absolute left-8 md:top-8 lg:top-2 bottom-30 w-[2px] rounded-full   hidden md:block"
            />
 
            {steps.map((step, index) => {
              const isActive = step.id === activeStep;
              return (
                <motion.div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="flex items-center gap-4 xl:mb-10    text-[16px] font-bricolage md:gap-8 relative z-10"
                >
                  {/* Circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 0.8,
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
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg shrink-0"
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
                    className={`
    flex-1 rounded-lg flex items-center
    ${isActive ? "shadow-md" : ""}
   
    /* Responsive padding */
    ${isActive
                        ? "px-3 py-2 sm:px-4 sm:py-3 md:px-2 md:py-2 lg:px-8 lg:py-5"
                        : "px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-5 lg:py-3"
                      }`}
                  >
                    <motion.h3
                      style={{
                        color: isActive
                          ? '#111827'
                          : scrollProgress > 0.4 ? 'text-[#4B5563]' : 'text-[#4B5563]'
                      }}
                      className={`  leading-tight  lg:text-[18px]   transition-colors duration-300 ${isActive ? "font-bricolage" : ""
                        }`}
                    >
                      {step.title}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Book A Demo Button */}
            <div className=" md:pl-4  pt-4">
 
 
              <ContactUs>Book A Demo</ContactUs>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}