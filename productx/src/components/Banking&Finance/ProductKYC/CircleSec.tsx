"use client";
 
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Added import
import { H1, H4, P } from "../../../styles/Typography";
 
type Feature = {
  icon: string;
  title: string;
  text: string;
};
 
type ProductTab = {
  label: string;
  description: string;
  para?: string;
  image?: string;
mobileImage?: string; // 👈 add this
  features?: Feature[];
  intro?: string;
};
 
const products: ProductTab[] = [
  {
    label: "Enterprise CDD",
    para: "Automate and streamline your customer due diligence processes with our comprehensive Enterprise CDD solution. Our platform offers a fully configurable policy engine that allows you to set up and manage your KYC and CDD requirements without any coding. With real-time data capture and seamless integration with external and internal systems, you can ensure compliance with evolving regulations while providing a frictionless onboarding experience for your customers.",
    description:
      "Re-configure on the GO! No more expensive, time consuming system change requests.",
    image: "/ProductDetails4/KYC1.webp",
    mobileImage: "/ProductDetails4/KYC1_mobile.png", // 👈 Mobile image
  },
  {
    label: "ID and V Monitor",
    description:
      "Real-time identity verification with intelligent monitoring and adaptive workflows.",
    intro:
      "A 100% configurable rule engine that enables generation of Identification (ID), Verification (V) & Due Diligence requirements for ANY Client in ANY Country across ANY jurisdictions.",
    features: [
      {
        icon: "/ProductDetails4/icon7.svg",
        title: "Requirement Generator",
        text: "Single click generation of data and documents required  data and documents.",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Configuration Studio",
        text: "Re-configure ID&V policy changes to Entities, Countrien of data and documents required .",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "API Integration",
        text: "Seamless data exchange with external and internal systems.ration of data and documents required for Clients.",
      },
    ],
  },
  {
    label: "BO Unwrapper",
    description:
      "Unwrap complex ownership structures with automated beneficial ownership mapping.",
    intro:
      "Gain complete transparency into multi-layered ownership structures and identify ultimate beneficial owners across global jurisdictions with automated intelligence.",
    features: [
      {
        icon: "/ProductDetails4/icon7.svg",
        title: "Ownership Mapping",
        text: "Seamless data exchange with external and internal systems to clicknd docfor dwef frg ger ger vreg gregg .",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Risk Evaluation",
        text: "Seamless data exchange with external and internal systems.Single Clients.",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "Global Coverage",
        text: "Access cross-border data sources for comprehensive ownership analysis.Single of data and documents ",
      },
    ],
  },
];
 
export default function CircleSec() {
  const [activeTab, setActiveTab] = useState(products[0]);
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
 
  // Handle Click for Desktop AND Mobile
  const handleTabClick = (product: ProductTab, index: number) => {
    setActiveTab(product);

    // Mobile specific logic: Scroll to the tab's position
    if (isMobile && sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const scrollableDistance = sectionHeight - viewportHeight;
      const targetProgress = index / (products.length - 1); 
      
      const targetScrollY = sectionTop + (targetProgress * scrollableDistance);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'auto'
      });
    }
  };
 
  // Handle Mobile Scroll Mapping with RequestAnimationFrame for smoothness
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!sectionRef.current || !isMobile) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const endOffset = rect.height - viewportHeight;
      const currentScroll = -rect.top; 

      if (currentScroll >= 0 && currentScroll <= endOffset) {
        const progress = currentScroll / endOffset;
        setMobileScrollProgress(Math.min(1, Math.max(0, progress)));
      } else if (currentScroll < 0) {
        setMobileScrollProgress(0);
      } else {
        setMobileScrollProgress(1);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    // Initial calculation
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  // Determine which tab is active on mobile based on scroll progress
  useEffect(() => {
    if (isMobile) {
      const index = Math.min(
        products.length - 1,
        Math.floor(mobileScrollProgress * products.length)
      );
      setActiveTab(products[index]);
    }
  }, [mobileScrollProgress, isMobile]);

  return (
    <section 
      ref={sectionRef}
      className={`
        w-full xl:bg-gradient-to-b from-[#E1EDFF] to-[#FFFFFF]
        text-center relative
        ${isMobile ? 'h-[250vh]' : 'py-8 px-4 sm:px-6 xl:px-20'} 
      `}
    >
      
      {/* MOBILE STICKY WRAPPER */}
      <div className="md:hidden sticky top-15 xl:top-0 w-full overflow-hidden flex flex-col z-10">
        
        {/* Mobile Header & Tabs */}
        <div className="pt-4 pb-2 px-4 shrink-0  z-20">
          <H1 className="text-[#2f5fb3] mb-2 text-lg font-bold leading-tight">Solution Components</H1>
          
          {/* Tabs */}
          <div className="flex justify-center gap-2 overflow-x-auto scrollbar-hide px-1">
            {products.map((product, index) => {
              const isActive = activeTab.label === product.label;
              return (
                <button
                  key={product.label}
                  onClick={() => handleTabClick(product, index)}
                  className={`
                    relative whitespace-nowrap px-3 py-1.5 text-[10px] rounded-full transition-colors duration-300 border
                    ${isActive ? "text-white border-transparent" : "text-gray-600 border-gray-200 bg-white/80"}
                  `}
                >
                  {/* Animated Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#2f5fb3] rounded-full shadow-md z-[-1]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {product.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Slider Wrapper */}
        <div className="relative overflow-hidden min-h-0 bg-white">
          <div 
            className="flex h-full w-[300%] will-change-transform" 
            style={{ transform: `translateX(-${mobileScrollProgress * (200 / 3)}%)` }}
          >
            {products.map((product) => (
              <div key={product.label} className="w-1/3 h-full flex flex-col justify-start px-8 shrink-0">
                 
                {/* Description */}
                <div className="shrink-0">
                  <H4 className="text-[#2f5fb3] mb-6 mt-4 text-xs font-bold leading-tight">
                    {product.description}
                  </H4>
                </div>

                {/* SCROLLABLE CONTENT AREA */}
                <div className="overflow-y-auto custom-scrollbar flex flex-col items-center w-full">
                  
                  {/* TAB 1: Para + Image */}
                  {product.para && (
                    <>
                      {/* <P className="text-[10px] leading-relaxed mb-12 text-center w-full text-gray-700">
                        {product.para}
                      </P> */}
                      <div className="w-full flex items-center justify-center min-h-[200px]">
                        <img
                          src={product.mobileImage || product.image}
                          alt={product.label}
                          className="w-full h-auto object-cover max-w-full"
                        />
                      </div>
                    </>
                  )}
                  
                  {/* TABS 2 & 3: Intro + Features in Individual Boxes */}
                  {product.features && (
                    <>
                      {product.intro && (
                        <P className="text-[10px] mb-4 leading-relaxed text-center text-gray-700 font-medium">
                          {product.intro}
                        </P>
                      )}
                      
                      {/* Grid of Individual Boxes */}
                      <div className="w-full flex flex-col gap-4">
                        {product.features.map((feature, i) => (
                          <div key={i} className="border border-blue-200 bg-white rounded-xl p-4 shadow-sm flex flex-col items-center text-center">
                            {/* Icon Top */}
                            <img src={feature.icon} alt={feature.title} className="h-8 w-8 mb-2 object-contain" />
                            
                            {/* Title */}
                            <H4 className="font-bold text-[11px] mb-1 text-gray-900 leading-tight w-full">{feature.title}</H4>
                            
                            {/* Para */}
                            <P className="text-gray-600 text-[10px] leading-snug">{feature.text}</P>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* DESKTOP VIEW */}
      <div className="hidden md:block">
        <H1 className="text-[#2f5fb3] mb-6">
           Solution Components
        </H1>
 
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex w-max min-w-full lg:w-full lg:min-w-0 justify-start md:justify-center gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6">
            {products.map((product, index) => {
              const isActive = activeTab.label === product.label;
 
              return (
                <button
                  key={product.label}
                  onClick={() => handleTabClick(product, index)}
                  className={`
                    whitespace-nowrap
                    px-6 sm:px-10 lg:px-16 xl:px-20
                    py-3 sm:py-4
                    text-sm sm:text-base lg:text-lg
                    rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#2f5fb3] text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                    }
                  `}
                >
                  {product.label}
                </button>
              );
            })}
          </div>
        </div>
 
        <H4 className="text-[#2f5fb3] mb-8 max-w-3xl mx-auto transition-all duration-300 px-2">
          {activeTab.description}
        </H4>
 
        <div className="w-full flex justify-center">
          {activeTab.image && (
            <img
              src={activeTab.image}
              alt={activeTab.label}
              className="w-full max-w-5xl lg:max-w-6xl object-contain transition-opacity duration-300"
            />
          )}
 
          {activeTab.features && (
            <div className="w-full max-w-6xl mx-auto">
              {activeTab.intro && (
                <P className="text-gray-700 text-sm sm:text-base mb-8 max-w-4xl mx-auto">
                  {activeTab.intro}
                </P>
              )}
 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start text-center">
                {activeTab.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center px-6 md:border-l md:border-blue-300 first:md:border-l-0"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-16 mb-6"
                    />
                    <H4 className="font-semibold text-lg mb-3">
                      {feature.title}
                    </H4>
                    <P className="text-gray-600 text-sm">
                      {feature.text}
                    </P>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }
      `}</style>
    </section>
  );
}