import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
// Assuming you have these imported from a local styles file
import { H1, P } from '../../../styles/Typography'; 



const images = [
  "https://picsum.photos/id/1011/600/600",
  "https://picsum.photos/id/1015/600/600",
  "https://picsum.photos/id/1016/600/600",
  "https://picsum.photos/id/1021/600/600",
  "https://picsum.photos/id/1025/600/600",
];

const steps = [
  "Duis aute irure dolor in voluptate velit esse reprehenderit in voluptate velit esse",
  "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris",
  "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
];

// Helper to determine circle size based on screen width for responsive design
const getCircleSize = (width: number) => {
  if (width >= 1024) return 40;
  if (width >= 768) return 34;
  return 28;
};

// Helper to determine the line's left position (centered under the circle)
const getLineLeftPosition = (width: number) => {
  const circleSize = getCircleSize(width);
  return circleSize / 2;
};

const NewWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number; display: string; left: string | number }>({ top: 0, height: 0, display: 'none', left: 0 });
  
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const updateLinePosition = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const firstStepEl = stepsRef.current[0];
    const lastStepEl = stepsRef.current[steps.length - 1];

    if (firstStepEl && lastStepEl) {
      const circleSize = getCircleSize(window.innerWidth);
      const circleRadius = circleSize / 2;
      
      const firstStepTop = firstStepEl.offsetTop;
      const lastStepTop = lastStepEl.offsetTop;

      // Line starts at the center of the first circle
      const newTop = firstStepTop + circleRadius;
      
      // Line ends at the center of the last circle. 
      // Adjustment of 4px is added to prevent line overhang on mobile.
      const adjustment = 4; 
      const newHeight = (lastStepTop + circleRadius) - newTop - adjustment;

      const newLeft = getLineLeftPosition(window.innerWidth);
      
      setLineStyle({
        top: newTop,
        height: newHeight,
        display: 'block',
        // The line is 0.5 wide. Center is (newLeft - 0.25)
        left: `calc(${newLeft}px - 0.125rem)`, 
      });
    } else {
      setLineStyle(prev => ({ ...prev, display: 'none' })); 
    }
  }, []);

  // Update line position on mount and resize
  useEffect(() => {
    updateLinePosition();
    window.addEventListener('resize', updateLinePosition);
    return () => window.removeEventListener('resize', updateLinePosition);
  }, [updateLinePosition]);


  // Intersection Observer for step highlighting (Corrected margins from previous step)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleIndex = -1;
        let maxRatio = 0;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleIndex = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          }
        });
        if (mostVisibleIndex !== -1) {
          setActiveStep(mostVisibleIndex);
        }
      },
      {
        threshold: 0,
        root: null,
        // This margin ensures all steps, including the last one, can be highlighted
        rootMargin: '-20% 0px -60% 0px', 
      }
    );

    stepsRef.current.forEach((stepEl, index) => {
      if (stepEl) {
        stepEl.setAttribute('data-index', index.toString());
        observer.observe(stepEl);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#C41E5B]">
      <div className="py-16 px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <H1 className="text-white mb-4 ">
            Lorem ipsum  consecte ipsum
          </H1>
          <P className="text-white opacity-90 max-w-3xl text-xs sm:text-sm md:text-base">
            Duis aute irure dolor in voluptate velit esse voluptate velit esse reprehenderit in voluptate velit esse.
          </P>
        </div>

        {/* Main Content: Layout starts side-by-side from SM breakpoint (640px) */}
        <div
          className="
            max-w-7xl mx-auto
            flex flex-col sm:flex-row 
            gap-6 md:gap-8 lg:gap-12
          "
        >
          {/* Left - Image */}
          <div className="w-full lg:w-[48%] xl:w-[45%] 2xl:w-[42%]">
            <div className="md:sticky md:top-24"> 
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={images[activeStep]}
                    alt={`Step ${activeStep + 1}`}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right - Steps + Button: Removed justify-between for fit-tight content */}
          <div
            className="
              w-full lg:w-[48%] xl:w-[50%] 2xl:w-[55%]
              relative flex flex-col justify-between
            "
          >
            {/* Vertical Line */}
            <div
              ref={lineRef}
              className="absolute w-0.5 bg-white/30 z-0"
              style={{
                top: lineStyle.top,
                height: lineStyle.height,
                display: lineStyle.display,
                left: lineStyle.left, 
              }}
            />

            {/* Steps container: Removed flexGrow and marginBottom for fit-tight content */}
            <div
              className="
                flex flex-col justify-start
                gap-1.5 pt-2 pb-2
                sm:gap-2
              "
              // Removed inline styles: flexGrow: 1, marginBottom: '5px'
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  ref={(el: HTMLDivElement | null) => {
                    stepsRef.current[index] = el;
                    if (index === steps.length - 1) { 
                       setTimeout(updateLinePosition, 0); 
                    }
                  }}
                  className="flex items-start" 
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: activeStep === index ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    // Removed minHeight. Only small margin for mobile retained.
                    marginBottom: window.innerWidth < 678 ? '4px' : 0, 
                  }}
                >
                  {/* Number Circle */}
                  <motion.div
                    className="
                      flex-shrink-0 rounded-full 
                      flex items-center justify-center font-bold 
                      relative bg-white text-[#C41E5B] z-10
                    "
                    animate={{
                      scale: activeStep === index ? 1.3 : 1, 
                      backgroundColor: '#fff', 
                      color: '#C41E5B', 
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      width: getCircleSize(window.innerWidth),
                      height: getCircleSize(window.innerWidth),
                      fontSize: window.innerWidth >= 1024 ? 16 : window.innerWidth >= 768 ? 14 : 12,
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Step Text */}
                  <motion.div
                    className="flex-1 ml-1 sm:ml-2 lg:ml-3 rounded-md p-1 sm:p-1.5"
                    animate={{
                      backgroundColor: activeStep === index ? 'rgba(255,255,255,0.1)' : 'transparent',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: activeStep === index ? 1 : 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Button aligned left */}
            <div className="mt-2 flex justify-start w-full px-1 sm:px-2 md:px-4">
              <button className="bg-black text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded flex items-center gap-1 sm:gap-1.5 md:gap-2 max-w-[180px] justify-start text-xs sm:text-sm md:text-base">
                CONTACT US
                <ArrowUpRight
                  size={window.innerWidth >= 1024 ? 18 : window.innerWidth >= 768 ? 16 : 14}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWorkflow;