import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/EHR-PMS/LandingPage/img1.jpg";
import img2 from "/EHR-PMS/LandingPage/img2.png";
import img3 from "/EHR-PMS/LandingPage/img1.jpg";
import { H2EHR, H4EHR, P } from "../../../styles/Typography";

const Benefits = () => {
  const points = [
    {
      title: "Consolidated Insurance and Benefits Overview",
      desc: "View patient coverage, copays, deductibles, and active authorizations in one clean, scrollable profile to verify eligibility quickly.",
      image: img1,
    },
    {
      title: "End-to-End Claims Submission and Tracking ",
      desc: "Submit electronic claims directly and monitor their real-time status from sent to paid or denied on a single dashboard. ",
      image: img2,
    },
    {
      title: "Integrated Prior Authorization Request Management ",
      desc: "Initiate, document, and track the complete authorization workflow with built-in status updates and provider alerts for timely approvals. ",
      image: img3,
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll logic to update active index based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // Logic to calculate progress within the 300vh container
      const startOffset = vh * 0.2; 
      const endOffset = rect.height - vh;
      
      const rawProgress = (startOffset - rect.top) / endOffset;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      const index = Math.floor(progress * points.length);
      setActiveIndex(Math.min(index, points.length - 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [points.length]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[150vh] xl:min-h-[300vh] py-10 px-6 lg:px-0"
    >
      <div className="xl:sticky xl:top-0 xl:h-screen flex flex-col justify-center items-center">
        
        {/* Section Heading */}
        <div className="w-full max-w-8xl mb-10 xl:mb-12">
          <H2EHR className="text-center  text-[#008280]">
            Access All Payer Data Instantly
            
          </H2EHR>
        </div>

        {/* --- DESKTOP VIEW (xl and up) --- */}
        <div className="hidden xl:flex w-[90%] max-w-7xl items-center gap-12">
          {/* Interactive Cards */}
          <div className="flex flex-col w-[40%] gap-4">
            {points.map((point, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    py-8 px-6 cursor-pointer transition-all duration-500 ease-out border-l-4
                    ${isActive 
                      ? "bg-[#F1F1F1] border-[#008280] opacity-100" 
                      : "bg-transparent border-transparent opacity-50 hover:opacity-80"
                    }
                  `}
                  style={{ borderRadius: "6px" }}
                >
                  <H4EHR className="font-bold text-xl text-gray-900">
                    {point.title}
                  </H4EHR>
                  <P className="mt-3 max-w-md text-gray-700">
                    {point.desc}
                  </P>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Image Display */}
          <div className="w-[60%] flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={points[activeIndex].image}
                alt={points[activeIndex].title}
                className="w-full max-w-2xl rounded-2xl shadow-2xl object-cover"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE/TABLET VIEW (Below xl) --- */}
        <div className="xl:hidden flex flex-col gap-12 w-full max-w-2xl">
          {points.map((point, i) => (
            <div key={i} className="flex flex-col gap-6">
              {/* Text Top */}
              <div className="p-6 rounded-xl bg-[#F1F1F1] border-t-4 border-[#008280]">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {point.title}
                </h3>
                <P className="text-gray-700">{point.desc}</P>
              </div>
              {/* Image Bottom */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={point.image} 
                  alt={point.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;