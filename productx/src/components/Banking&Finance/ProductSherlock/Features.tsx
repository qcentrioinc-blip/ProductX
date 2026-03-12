"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { H2, H3, P } from "../../../styles/Typography";

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Policy Configuration Engine",
    title: "Zero code policy configuration engine",
    p1: "Configure all due diligence parameters without coding. Changes to regulations or policies can be made in minutes with version control and checker functionality. No training required for frontline staff when policies update. ",
    
    imageSrc: "/ProductDetails4/PD4_img1(2).webp",
  },
  {
    id: "feature_b",
    buttonLabel: "Smart Data Capture",
    title: "Smart forms for data capture",
    p1: "Client-specific smart forms automatically generate requirements based on entity type, jurisdiction, and risk profile. Captures data for customers and connected parties with built-in validations for accuracy. ",
    
    imageSrc: "/ProductDetails4/PD4_img2(2).webp",
  },
  {
    id: "feature_c",
    buttonLabel: "Automated Screening",
    title: "Automated name screening integration",
    p1: "Seamlessly screen customers and connected parties against sanctions, PEP lists, and watchlists. Integrates with leading screening engines during onboarding and ongoing monitoring.  ",
   
    imageSrc: "/ProductDetails4/PD4_img3.webp",
  },
  {
    id: "feature_d",
    buttonLabel: "Risk Assessment",
    title: "Risk assessment and decisioning",
    p1: "Automatically compute risk ratings based on configured attributes and rules. Workflow rules drive consistent decisioning with options for approval routing and case management. ",
  
    imageSrc: "/ProductDetails4/PD4_img4.webp",
  },
  {
    id: "feature_e",
    buttonLabel: "Lifecycle Management",
    title: "Full client lifecycle management",
    p1: "System automatically moves profiles to periodic and trigger event queues. Applies current policy standards and enables refresh of KYC profiles with version control for audit readiness.  ",
    
    imageSrc: "/ProductDetails4/PD4_img5.webp",
  },
];

const Feature: React.FC<FeatureSwitcherProps> = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileTabsContainerRef = useRef<HTMLDivElement>(null);
  const desktopTextRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  const handleTabClick = (id: string, index: number) => {
    if (window.innerWidth < 768 && sectionRef.current) {
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = sectionHeight - viewportHeight;
      
      // Safety check to avoid division by zero or negative distance
      if (scrollableDistance <= 0) return;

      const targetProgress = index / (FEATURES.length - 1);
      const targetScrollY = sectionTop + targetProgress * scrollableDistance;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    } else {
      setActiveFeatureId(id);
    }
  };

  /* ============================= */
  /* 🔥 SMOOTH SCROLL OPTIMIZATION */
  /* ============================= */
  useLayoutEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!sectionRef.current || window.innerWidth >= 768) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate the total scrollable distance of the section
      const endOffset = rect.height - viewportHeight;
      const currentScroll = -rect.top;

      let progress = 0;

      // Safety: Only calculate if we have valid positive dimensions
      if (endOffset > 0) {
        if (currentScroll <= 0) progress = 0;
        else if (currentScroll >= endOffset) progress = 1;
        else progress = currentScroll / endOffset;
      }

      setMobileScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    const handleResize = () => {
        // Force update on resize
        updateScroll();
    }

    // Attach listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Initial calculation
    updateScroll();

    // Use ResizeObserver to catch layout shifts
    const resizeObserver = new ResizeObserver(() => {
        updateScroll();
    });

    if (sectionRef.current) {
        resizeObserver.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (sectionRef.current) {
          resizeObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  /* ============================= */
  /* 🔥 STABLE TAB SWITCHING FIX  */
  /* ============================= */
  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      const index = Math.min(
        FEATURES.length - 1,
        Math.max(
          0,
          Math.floor(mobileScrollProgress * FEATURES.length)
        )
      );
      setActiveFeatureId(FEATURES[index].id);
    }
  }, [mobileScrollProgress]);

  /* ============================= */
  /* AUTO CENTER ACTIVE TAB       */
  /* ============================= */
  useEffect(() => {
    if (mobileTabsContainerRef.current && window.innerWidth < 768) {
      const container = mobileTabsContainerRef.current;
      const activeElement = container.querySelector(
        `[data-active="true"]`
      ) as HTMLElement;

      if (activeElement) {
        const scrollPos =
          activeElement.offsetLeft -
          container.offsetWidth / 2 +
          activeElement.offsetWidth / 2;

        container.scrollTo({
          left: scrollPos,
          behavior: "smooth",
        });
      }
    }
  }, [activeFeatureId]);

  /* ============================= */
  /* RESET DESKTOP SCROLL ON TAB CHANGE */
  /* ============================= */
  useEffect(() => {
    if (desktopTextRef.current && window.innerWidth >= 768) {
      desktopTextRef.current.scrollTop = 0;
    }
  }, [activeFeatureId]);

  useEffect(() => {
  if (isMobile) {
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 50);
  }
}, [isMobile]);

  const activeContent =
    FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section
  ref={sectionRef}
  className="w-full bg-white relative md:h-auto md:pb-5 md:px-5"
  style={{
    height: isMobile ? `${FEATURES.length * window.innerHeight}px` : "auto",
  }}
>
      {/* MOBILE VIEW */}
      <div className="md:hidden sticky top-20 xl:top-0  w-full overflow-hidden flex flex-col z-10 bg-white pt-2 pb-2">
        <div className="px-4 mb-8 shrink-0">
            <H2 className="text-center text-[#2B68C3] tracking-tight leading-snug text-[18px]">
                Key features of Diligent platform
            </H2>
        </div>

        <div
          ref={mobileTabsContainerRef}
          className="w-full overflow-x-auto scrollbar-hide shrink-0 mb-2"
        >
          <div className="flex gap-3 px-4 snap-x snap-mandatory pb-1">
            {FEATURES.map((item, index) => {
              const isActive = item.id === activeFeatureId;
              return (
                <button
                  key={item.id}
                  data-active={isActive.toString()}
                  onClick={() => handleTabClick(item.id, index)}
                  className={`flex-shrink-0 snap-start whitespace-nowrap
                  py-2 px-4 rounded-full text-[12px] font-semibold transition-colors
                  ${
                    isActive
                      ? "bg-[#2B68C3] text-white shadow-md"
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                >
                  {item.buttonLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* 🔥 FIXED SLIDER */}
        <div
          className="flex w-[500%] will-change-transform"
          style={{
            transform: `translate3d(-${mobileScrollProgress * 80}%, 0, 0)`,
          }}
        >
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className="w-1/5 h-full flex flex-col justify-start items-start px-4 pb-4"
            >
              {/* Reduced image height to 25vh for better text visibility */}
              <div className="w-full flex justify-center items-center mb-2 shrink-0">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full my-10  h-[40vh] md:h-full object-fill"
                />
              </div>

              {/* Text container with overflow-y-auto */}
              <div className="w-full text-center flex flex-col gap-3 max-w-lg overflow-y-auto custom-scrollbar">
                <H3 className="text-gray-900 tracking-tight leading-tight text-[18px]">
                  {item.title}
                </H3>
                <div className="flex flex-col gap-3 text-center">
                    <P className="text-sm leading-relaxed">
                    {item.p1}
                    </P>
                    {/* <P className="text-sm leading-relaxed">
                    {item.p2}
                    </P> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      {/* DESKTOP VIEW */}
<div className="hidden md:block max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

  {/* Heading */}
  <H2 className="text-center text-[#2B68C3] tracking-tight leading-snug mb-8">
    Key features of Diligent platform
  </H2>

  {/* Tabs BELOW heading */}
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {FEATURES.map((item, index) => {
      const isActive = item.id === activeFeatureId;

      return (
        <button
          key={item.id}
          onClick={() => handleTabClick(item.id, index)}
          className={`px-6 py-4 rounded-full text-sm font-semibold transition-all
          ${
            isActive
              ? "bg-[#2B68C3] text-white shadow-md"
              : "border border-gray-300 text-gray-700"
          }`}
        >
          {item.buttonLabel}
        </button>
      );
    })}
  </div>

  {/* Image LEFT + Content RIGHT */}
  <div className="grid grid-cols-12 gap-10 items-center">

    {/* Image */}
    <div className="col-span-6 flex justify-center">
      <img
        src={activeContent.imageSrc}
        alt={activeContent.title}
        className="w-full max-h-[450px] object-contain"
      />
    </div>

    {/* Content */}
    <div
      ref={desktopTextRef}
      className="col-span-6 flex flex-col gap-6 max-h-[450px] overflow-y-auto custom-scrollbar"
    >
      <H3 className="text-gray-900 text-2xl leading-tight">
        {activeContent.title}
      </H3>

      <P className="text-gray-600 leading-relaxed">
        {activeContent.p1}
      </P>
    </div>

  </div>
</div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        
        /* Custom scrollbar for the text area */
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #94a3b8;
            border-radius: 4px;
            border: 2px solid #f1f5f9;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background-color: #64748b;
        }
        
        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
};

export default Feature;