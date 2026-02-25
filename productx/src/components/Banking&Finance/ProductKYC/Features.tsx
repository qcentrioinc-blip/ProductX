"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { H2, H3, P } from "../../../styles/Typography";

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Policy Configuration Engine",
    title: "Zero code policy configuration engine",
    p1: "Configure all due diligence parameters without coding. Changes to regulations or.",
    p2: "No training required for frontline staff when policies update jcbew  jhwbv cwj .",
    imageSrc: "/ProductDetails4/PD4_img1(2).webp",
  },
  {
    id: "feature_b",
    buttonLabel: "Smart Data Capture",
    title: "Smart forms for data capture",
    p1: "Client-specific smart forms automatically generate requirements based on entity type, jurisdiction, and risk profile.",
    p2: "Captures data for customers and connected parties with built-in validations for accuracy.",
    imageSrc: "/ProductDetails4/PD4_img2(2).webp",
  },
  {
    id: "feature_c",
    buttonLabel: "Automated Screening",
    title: "Automated name screening integration",
    p1: "Seamlessly screen customers and connected parties against sanctions, PEP lists, and watchlists.",
    p2: "Integrates with leading screening engines during onboarding and ongoing monitoring.",
    imageSrc: "/ProductDetails4/PD4_img3.webp",
  },
  {
    id: "feature_d",
    buttonLabel: "Risk Assessment",
    title: "Risk assessment and decisioning",
    p1: "Automatically compute risk ratings based on configured attributes and rules.",
    p2: "Workflow rules drive consistent decisioning with options for approval routing and case management.",
    imageSrc: "/ProductDetails4/PD4_img4.webp",
  },
  {
    id: "feature_e",
    buttonLabel: "Lifecycle Management",
    title: "Full client lifecycle management",
    p1: "System automatically moves profiles to periodic and trigger event queues.",
    p2: "Applies current policy standards and enables refresh of KYC profiles with version control for audit readiness.",
    imageSrc: "/ProductDetails4/PD4_img5.webp",
  },
];

const Feature: React.FC<FeatureSwitcherProps> = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileTabsContainerRef = useRef<HTMLDivElement>(null);

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

    // Use ResizeObserver to catch layout shifts (common on page navigation)
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

  const activeContent =
    FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white relative h-[350vh] md:h-auto md:pb-5 md:px-5"
    >
      {/* MOBILE VIEW */}
      <div className="md:hidden sticky top-10 h-[70dvh] w-full overflow-hidden flex flex-col z-10 bg-white pt-6 pb-4 touch-pan-y">
        <H2 className="px-4 text-center text-[#2B68C3] tracking-tight leading-snug mb-6 shrink-0">
          Key features of Diligent platform
        </H2>

        <div
          ref={mobileTabsContainerRef}
          className="w-full overflow-x-auto scrollbar-hide shrink-0"
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
                  py-2 px-4 rounded-full text-[13px] font-semibold transition-all
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

        {/* 🔥 SMOOTHER SLIDER */}
        <div
          className="flex flex-1 w-[500%] will-change-transform transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(-${mobileScrollProgress * 80}%, 0, 0)`,
          }}
        >
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className="w-1/5 h-full flex flex-col justify-start items-center px-6 pb-6"
            >
              <div className="w-full flex justify-center items-center h-[35vh] mb-4">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-full text-center flex flex-col space-y-3 max-w-lg">
                <H3 className="text-gray-900 tracking-tight leading-tight">
                  {item.title}
                </H3>
                <P className="">
                  {item.p1}
                </P>
                <P className="">
                  {item.p2}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <H2 className=" text-center text-[#2B68C3] tracking-tight leading-snug">
          Key features of Diligent platform
        </H2>

        <div className="grid grid-cols-12 items-stretch gap-x-6 lg:gap-x-10">
          <div className="col-span-4 lg:col-span-3 flex flex-col justify-center space-y-4">
            {FEATURES.map((item, index) => {
              const isActive = item.id === activeFeatureId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id, index)}
                  className={`py-4 px-6 rounded-full text-base font-semibold transition-all text-center
                  ${
                    isActive
                      ? "bg-[#2B68C3] text-white shadow-md"
                      : "border border-gray-400 text-black"
                  }`}
                >
                  {item.buttonLabel}
                </button>
              );
            })}
          </div>

          <div className="col-span-4 lg:col-span-6 flex justify-center items-center">
            <img
              src={activeContent.imageSrc}
              alt={activeContent.title}
              className="w-full object-contain rounded-xl max-h-[500px] transition-opacity duration-300"
            />
          </div>

          <div className="col-span-4 lg:col-span-3 flex flex-col justify-center space-y-6">
            <H3 className="text-gray-900 tracking-tight leading-tight text-2xl">
              {activeContent.title}
            </H3>
            <P className="text-gray-600">{activeContent.p1}</P>
            <P className="text-gray-600">{activeContent.p2}</P>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
};

export default Feature;