"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { H2, H3, P } from "../../../styles/Typography";

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Transaction monitoring ",
    title: "Real-Time Transaction Monitoring System ",
    p1: "SHERLOCK integrates with core banking systems to extract transaction data continuously. Configurable rules detect anomalies in customer transaction patterns automatically. ",
    p2: "The system generates alerts for transactions that deviate from set rules. Historical data analysis identifies long-term trends and suspicious patterns over time. ",
    imageSrc: "/ProductSherlock/1.webp",
  },
  {
    id: "feature_b",
    buttonLabel: "Message screening ",
    title: "Financial Message Screening Module ",
    p1: "The module scrutinizes incoming and outgoing SWIFT messages for AML compliance. Real-time analysis detects and prevents suspicious activities before processing. ",
    p2: "Seamless integration intercepts financial messages automatically. Violations are highlighted with detailed information about the nature of each issue. ",
    
    imageSrc: "/ProductSherlock/2.webp",
  },
  {
    id: "feature_c",
    buttonLabel: "Watch list checking ",
    title: "Automated Watch List Checking",
    p1: "Web crawlers update banned entity lists regularly from UN, OFAC, and Federal Reserve sources. Institutions can create and manage their own custom watch lists. ",
    p2: "New transactions are checked instantly against updated lists. Alerts are generated immediately for any matches found with banned entities. ",
   
    imageSrc: "/ProductSherlock/3.webp",
  },
  {
    id: "feature_d",
    buttonLabel: "KYC verification ",
    title: "Complete KYC Verification Module ",
    p1: "Customer profiles are managed with detailed personal information, financial data, and transaction history. Risk profiles are assigned based on predefined criteria and customer data.  ",
    p2: "Ongoing monitoring tracks customer activity for any changes in risk status. KYC documents are stored and managed with automated renewal tracking. ",
  
    imageSrc: "/ProductSherlock/4.webp",
  },
  {
    id: "feature_e",
    buttonLabel: "Risk profiling ",
    title: "Full client lifecycle management",
    p1: "The module assesses and categorizes customers for money laundering risk systematically. Risk attributes and rating outcomes drive workflow rules and decisioning.  ",
    p2: "Customer risk profiles are updated continuously based on transaction behavior. Alerts are triggered when customer activity exceeds defined risk thresholds. ",
    
    imageSrc: "/ProductSherlock/5.webp",
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
  className="w-full bg-white relative md:h-auto md:px-5"
  style={{
    height: isMobile ? `${FEATURES.length * window.innerHeight}px` : "auto",
  }}
>
      {/* MOBILE VIEW */}
      <div className="md:hidden sticky top-20 xl:top-0  w-full overflow-hidden flex flex-col z-10 bg-white pt-2 pb-2">
        <div className="px-4 mb-8 shrink-0">
            <H2 className="text-center text-[#2B68C3] tracking-tight leading-snug text-[18px]">
                Key features of SHERLOCK AML System 
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
                    <P className="leading-relaxed">
                    {item.p1}
                    </P>
                    <P className="leading-relaxed">
                    {item.p2}
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
    Key features of SHERLOCK AML System 
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

      <P className=" leading-relaxed">
        {activeContent.p1}
      </P>
      <P className=" leading-relaxed">
        {activeContent.p2}
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