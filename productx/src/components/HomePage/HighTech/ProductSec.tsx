// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ContactUs } from "../../../styles/Button";
// import { H2, H4, P } from "../../../styles/Typography";
 
// /* ---------- Content ---------- */
// const scrollSteps = [
//   {
//     heading: "Duis aute iru dolor: Step 1",
//     paragraph:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in (Content for step 1).",
//     image: "/HighTech/ProductDetails/img1.png",
//   },
//   {
//     heading: "Duis aute iru dolor: Step 2",
//     paragraph:
//       "Second step content. Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Content for step 2).",
//     image: "/HighTech/ProductDetails/img2.png",
//   },
//   {
//     heading: "Duis aute iru dolor: Step 3",
//     paragraph:
//       "Third step content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. (Content for step 3).",
//     image: "/HighTech/ProductDetails/img1.png",
//   },
//   {
//     heading: "Duis aute iru dolor: Step 4",
//     paragraph:
//       "Final step content. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. (Content for step 4).",
//     image: "/HighTech/ProductDetails/img2.png",
//   },
// ];
 
// const DESKTOP_BREAKPOINT = 1024;
// const DESKTOP_SCROLL_HEIGHT_VH = 400;
 
// const ProductSec: React.FC = () => {
//   const [isDesktop, setIsDesktop] = useState<boolean>(
//     typeof window !== "undefined" ? window.innerWidth >= DESKTOP_BREAKPOINT : false
//   );
//   const [activeStep, setActiveStep] = useState<number>(0);
//   const sectionRef = useRef<HTMLDivElement | null>(null);
 
//   useEffect(() => {
//     const onResize = () => {
//       setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
//     };
//     window.addEventListener("resize", onResize, { passive: true });
//     return () => window.removeEventListener("resize", onResize);
//   }, []);
 
//   /* -------- Scroll logic for Desktop -------- */
//   useEffect(() => {
//     if (!isDesktop) return setActiveStep(0);
 
//     let rafId: number | null = null;
 
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const { top, height } = rect;
//       const viewportH = window.innerHeight;
 
//       if (top <= 0 && top > -height + viewportH) {
//         const scrollOffset = -top;
//         const scrollable = Math.max(height - viewportH, 1);
//         const stepHeight = scrollable / scrollSteps.length;
//         const newStep = Math.min(
//           scrollSteps.length - 1,
//           Math.floor(scrollOffset / stepHeight)
//         );
//         if (newStep !== activeStep) setActiveStep(newStep);
//       } else if (top > 0) {
//         if (activeStep !== 0) setActiveStep(0);
//       } else {
//         const last = scrollSteps.length - 1;
//         if (activeStep !== last) setActiveStep(last);
//       }
//     };
 
//     const onScroll = () => {
//       if (rafId) cancelAnimationFrame(rafId);
//       rafId = requestAnimationFrame(handleScroll);
//     };
 
//     window.addEventListener("scroll", onScroll, { passive: true });
//     handleScroll();
 
//     return () => {
//       if (rafId) cancelAnimationFrame(rafId);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, [isDesktop, activeStep]);
 
//   /* -------- Animations -------- */
//   const paraVariant = {
//     hidden: { opacity: 0, y: 8 },
//     visible: { opacity: 1, y: 0 },
//   };
 
//   return (
//     <div
//       ref={sectionRef}
//       className={`relative ${isDesktop ? `lg:h-[${DESKTOP_SCROLL_HEIGHT_VH}vh]` : ""}`}
//       style={isDesktop ? { height: `${DESKTOP_SCROLL_HEIGHT_VH}vh` } : undefined}
//     >
//       <section className="relative w-full bg-[#F99526]  overflow-hidden lg:sticky lg:top-0 lg:min-h-screen">
//         <div className="max-w-7xl mx-auto flex flex-col gap-16 px-6 md:px-12 lg:px-0 py-20">
//           {/* -------- Header -------- */}
//           <div className="flex flex-col md:flex-row items-start justify-between gap-8">
//             <div className="flex-1 space-y-5 text-black">
//               <div className="space-y-2">
//                 <H2 className="text-white">Sed ut perspiciatis</H2>
//                 <H2 className="text-black">Unde Seduo ut perspiciatis</H2>
//               </div>
//               <P className="max-w-xl text-black/80 leading-relaxed">
//                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//               </P>
//             </div>
//             <div className="w-full md:w-auto flex-shrink-0 lg:mt-2">
//               <ContactUs>Contact Us</ContactUs>
//             </div>
//           </div>
 
//           <hr className="border-t border-black/20" />
 
//           {/* -------- Mobile / Tablet -------- */}
//           {!isDesktop ? (
//             <>
//               {scrollSteps.map((step, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="flex flex-col gap-8 py-8 border-b border-black/10 last:border-b-0"
//                   initial={{ opacity: 0, y: 8 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <div className="text-black space-y-4">
//                     <H4 className="text-[#8338EC] font-semibold mb-2">{step.heading}</H4>
//                     <P className="text-black max-w-sm">{step.paragraph}</P>
//                   </div>
//                   <div className="w-full flex justify-center">
//                     <img
//                       src={step.image}
//                       alt={`Step ${idx + 1}`}
//                       className="w-full h-[310px] object-cover rounded-lg border-[3px] border-[#8338EC]"
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </>
//           ) : (
//             /* -------- Desktop: Scroll Steps -------- */
//             <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-10 min-h-[50vh]">
//               {/* LEFT: Step list (each heading with conditional paragraph) */}
//               <div className="w-full lg:w-1/3 text-black space-y-10">
//                 {scrollSteps.map((step, index) => {
//                   const isActive = index === activeStep;
//                   return (
//                     <div key={index} className="space-y-3">
//                       <H4
//                         className={`cursor-pointer transition-colors duration-300 ${
//                           isActive ? "text-[#8338EC] font-semibold" : "text-black/50"
//                         }`}
//                       >
//                         {step.heading}
//                       </H4>
 
//                       <AnimatePresence mode="wait">
//                         {isActive && (
//                           <motion.div
//                             key={`para-${index}`}
//                             initial="hidden"
//                             animate="visible"
//                             exit="hidden"
//                             variants={paraVariant}
//                             transition={{ duration: 0.8 }}
//                           >
//                             <P className="text-black max-w-sm">{step.paragraph}</P>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
 
//                       <div
//                         className={`border-b-[2px] mt-2 transition-all duration-500 ${
//                           isActive ? "border-[#8338EC] w-24" : "border-black/20 w-10"
//                         }`}
//                       ></div>
//                     </div>
//                   );
//                 })}
//               </div>
 
//               {/* RIGHT: Crossfading Images */}
//               <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
//                 <div className="relative w-full md:w-[85%] lg:w-full h-[420px] md:h-[520px] lg:h-[620px]">
//                   <AnimatePresence mode="wait">
//                     {scrollSteps.map((s, idx) =>
//                       idx === activeStep ? (
//                         <motion.img
//                           key={s.image + idx}
//                           src={s.image}
//                           alt={`Step ${idx + 1}`}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.8, ease: "easeInOut" }}
//                           className="absolute inset-0 w-full h-[350px] object-cover rounded-lg border-[3px] border-[#8338EC] pointer-events-none"
//                         />
//                       ) : null
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };
 
// export default ProductSec;

import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";
import { ScrollContext } from "../../../context/ScrollContext";

/* ---------- Content ---------- */
const scrollSteps = [
  {
    heading: "Duis aute iru dolor: Step 1",
    paragraph:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in (Content for step 1).",
    image: "/HighTech/ProductDetails/img1.png",
  },
  {
    heading: "Duis aute iru dolor: Step 2",
    paragraph:
      "Second step content. Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Content for step 2).",
    image: "/HighTech/ProductDetails/img2.png",
  },
  {
    heading: "Duis aute iru dolor: Step 3",
    paragraph:
      "Third step content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. (Content for step 3).",
    image: "/HighTech/ProductDetails/img1.png",
  },
  {
    heading: "Duis aute iru dolor: Step 4",
    paragraph:
      "Final step content. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. (Content for step 4).",
    image: "/HighTech/ProductDetails/img1.png",
  },
];

const ProductSec: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollableContainerRef = useContext(ScrollContext);

  /* -------- Exact TargetAudience scroll logic -------- */
  useEffect(() => {
    const scrollableElement = scrollableContainerRef?.current;
    
    const handleScroll = () => {
      if (!scrollableElement) return; // Guard clause

      const containerRect = scrollableElement.getBoundingClientRect();
      const viewportCenter = containerRect.height / 2;

      let newIndex = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        if (distance < minDistance) {
          minDistance = distance;
          newIndex = idx;
        }
      });
      
      setActiveStep(newIndex);
    };

    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    // Cleanup function
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollableContainerRef]); // Rerun effect if the ref changes

  /* -------- Animations -------- */
  const paraVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full bg-[#F99526] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 px-6 md:px-12 lg:px-0 py-8">
        {/* -------- Header -------- */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1 space-y-5 text-black">
            <div className="space-y-2">
              <H2 className="text-white">Sed ut perspiciatis</H2>
              <H2 className="text-black">Unde Seduo ut perspiciatis</H2>
            </div>
            <P className="max-w-xl text-black/80 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </P>
          </div>
          <div className="w-full md:w-auto flex-shrink-0 lg:mt-2">
            <ContactUs>Contact Us</ContactUs>
          </div>
        </div>

        <hr className="border-t border-black/20" />

        {/* -------- Main Content Grid -------- */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-10">
          {/* LEFT: Step list with scroll detection */}
          <div className="w-full lg:w-1/3 text-black space-y-0">
            {scrollSteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="py-8 px-2 border-b border-black/10 last:border-b-0"
                >
                  <div className="space-y-3">
                    <H4
                      className={`cursor-pointer transition-colors duration-300 ${
                        isActive ? "text-[#8338EC] font-semibold" : "text-black/50"
                      }`}
                    >
                      {step.heading}
                    </H4>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`para-${index}`}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={paraVariant}
                          transition={{ duration: 0.8 }}
                        >
                          <P className="text-black max-w-sm">{step.paragraph}</P>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      className={`border-b-[2px] mt-2 transition-all duration-500 ${
                        isActive ? "border-[#8338EC] w-24" : "border-black/20 w-10"
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Crossfading Images */}
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-end lg:sticky">
            <div className="relative w-full md:w-[85%] lg:w-full h-[420px] md:h-[520px] lg:h-[520px] ">
              <AnimatePresence mode="wait">
                {scrollSteps.map((s, idx) =>
                  idx === activeStep ? (
                    <motion.img
                      key={s.image + idx}
                      src={s.image}
                      alt={`Step ${idx + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-[500px] object-cover rounded-lg border-[3px] border-[#8338EC] pointer-events-none"
                    />
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSec;
