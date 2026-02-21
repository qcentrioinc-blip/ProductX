import { useState, useEffect, useRef } from "react";

const NewsLetter = () => {
  const [activeSteps, setActiveSteps] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const sectionRef = useRef(null);
  const items = [
    "Configure ",
    "Assess ",
    "Decide ",
    "Review ",
    "Conclude"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const sequence = setInterval(() => {
      setActiveSteps((prev) => (prev < items.length - 1 ? prev + 1 : items.length - 1));
    }, 800);

    return () => clearInterval(sequence);
  }, [startAnimation, items.length]);

  useEffect(() => {
    if (!startAnimation) return;

    if (activeSteps > 0) {
      const timer = setTimeout(() => {
        setLineProgress(activeSteps);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [activeSteps, startAnimation]);


  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center bg-white py-16 px-4 md:px-8 overflow-hidden"
    >
      <h1 className="w-full font-['Bricolage_Grotesque',_sans-serif] font-semibold text-3xl md:text-5xl leading-tight text-center mb-16 md:mb-24">
        <span className="text-[#2B68C3]">How Diligent automates due </span>
        <br />
        
        <span className="text-[#141414]">
          diligence from start to finish
        </span>
      </h1>

      <div className="w-full overflow-x-auto hide-scrollbar px-4 pb-4">
        <div className="relative min-w-[600px] md:min-w-0 md:w-full max-w-5xl mx-auto flex items-start justify-between">
          {/* Background Line */}
          <div className="absolute top-[102px] md:top-[150px] left-10 md:left-[60px] right-10 md:right-[60px] h-[2px] bg-gray-200 z-0">
            {/* Animated Progress Line */}
            <div
              className="h-full bg-[#2B68C3] transition-all duration-700 ease-out"
              style={{
                width: `${(lineProgress / (items.length - 1)) * 100}%`
              }}
            />
          </div>

          {/* Steps */}
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-start z-10 relative">
              {/* Circle Container */}
              <div className="relative flex flex-col items-center">
                {/* Large Grey Circle */}
                <div className="w-20 h-20 md:w-[120px] md:h-[120px] bg-[#D9D9D9] rounded-full mb-4 md:mb-6" />

                {/* Blue Dot */}
                <div className="w-3 h-3 bg-[#2B68C3] rounded-full" />
              </div>

              {/* Text */}
              <p className="mt-4 font-['Space_Grotesk',_sans-serif] font-bold text-lg md:text-2xl text-black text-center whitespace-nowrap">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Hint or alternative layout if needed for very small screens? 
          The above flex layout might get squished on very small screens (320px). 
          Let's make it scrollable on mobile if it doesn't fit?
          Or just let it wrap? No, a timeline usually doesn't wrap well.
          I'll add overflow-x-auto for small screens just in case.
      */}
      <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default NewsLetter;
