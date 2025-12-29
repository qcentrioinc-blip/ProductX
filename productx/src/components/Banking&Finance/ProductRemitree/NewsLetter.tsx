import { useState, useEffect, useRef } from "react";

const NewsLetter = () => {
  const [activeSteps, setActiveSteps] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.01 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);


  useEffect(() => {
    if (!startAnimation) return;

    const sequence = setInterval(() => {
      setActiveSteps((prev) => (prev < 5 ? prev + 1 : 5));
    }, 1000);

    return () => clearInterval(sequence);
  }, [startAnimation]);


  useEffect(() => {
    if (!startAnimation) return;

    if (activeSteps > 0) {
      const timer = setTimeout(() => {
        setLineProgress(activeSteps);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeSteps, startAnimation]);

  const items = [
    "Consecte",
    "Adipiscing",
    "Adipiscing",
    "Consecte",
    "Consecte",
    "Consecte"
  ];

  return (
    <div
      ref={sectionRef}
      className="max-w-[1920px] mx-auto relative w-full flex items-center justify-center bg-[#FAFAFA] lg:h-[400px] xl:h-[460px] 2xl:h-[517px]"
    >
      {/* Desktop layout (Hidden on mobile, visible and scaled on large screens) */}
      <div
        className="hidden lg:flex flex-col absolute top-[60px] left-1/2 -translate-x-1/2 gap-[90px] w-[1550px] origin-top 
                   lg:scale-[0.65] xl:scale-[0.8] 2xl:scale-100"
      >
        <h1 className="w-full h-[107px] font-['Bricolage_Grotesque',_sans-serif] font-semibold text-[48px] leading-[120%] text-center">
          <span className="text-[#2B68C3]">Subscribe to our newsletter</span>
          <br />
          <span className="text-[#2B68C3]">to </span>
          <span className="text-[#141414]">
            stay in touch with the latest.
          </span>
        </h1>

        {/* Circles */}
        <div className="flex justify-between items-end w-full">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-[20px]">
              <div className="w-[120px] h-[120px] bg-[#D9D9D9] rounded-full" />
              <div className="w-[12px] h-[12px] bg-[#2B68C3] rounded-full" />
              <p className="w-[139.35px] h-[31px] font-['Space_Grotesk',_sans-serif] font-bold text-[24px] text-black text-center">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Blue gradient animated underline */}
        <div className="absolute bottom-[55px] left-[60px] right-[60px] h-[2px] bg-[#E5E7EB55] z-0 overflow-hidden">
          <div
            style={{
              height: "100%",
              width: `${(lineProgress / 5) * 100}%`,
              background:
                "linear-gradient(90deg, rgba(43,104,195,1) 50%, rgba(43,104,195,1) 50%, rgba(43,104,195,1) 50%)",
              transition: "width 0.22s ease"
            }}
          />
        </div>
      </div>

      {/* Mobile/Tablet Layout (Visible below lg/1024px) */}
      <div className="lg:hidden w-full h-auto flex flex-col items-center justify-center p-6 bg-[#FAFAFA]">
        <h1 className="font-bold text-center mb-12 font-['Bricolage_Grotesque',_sans-serif] text-[32px] text-[#2B68C3] leading-[120%]">
          <span className="text-[#2B68C3]">Subscribe to our newsletter</span>
          <br />
          <span className="text-[#141414]">
            to stay in touch with the latest.
          </span>
        </h1>

        <div className="overflow-x-auto scrollbar-hide w-full relative">
          <div className="relative min-w-max px-4 pb-4">
            {/* Blue Line for Mobile */}
            <div className="absolute h-[2px] bg-[#E5E7EB55] z-0 top-[102px] left-[56px] right-[56px]">
              <div
                style={{
                  height: "100%",
                  width: `${(lineProgress / 5) * 100}%`,
                  background: "linear-gradient(90deg, rgba(43,104,195,1) 50%, rgba(43,104,195,1) 50%, rgba(43,104,195,1) 50%)",
                  transition: "width 0.22s ease"
                }}
              />
            </div>

            <div className="flex gap-12 z-10 relative">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-4 w-20">
                  <div className="w-20 h-20 bg-[#D9D9D9] rounded-full shrink-0" />
                  <div className="w-3 h-3 rounded-full shrink-0 bg-[#2B68C3]" />
                  <p className="text-base font-bold text-center whitespace-nowrap font-['Space_Grotesk',_sans-serif] text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
    </div>
  );
};

export default NewsLetter;
