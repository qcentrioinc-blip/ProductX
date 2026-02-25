"use client";
 
import { useState, useEffect, useRef } from "react";
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
  features?: Feature[];
  intro?: string;
};
 
const products: ProductTab[] = [
  {
    label: "Enterprise CDD",
    para: "Automate and streamline your customer due diligence processes with our comprehensive Enterprise CDD solution. Our platform offers a fully configurable policy engine that allows you to set up and manage your KYC and CDD requirements without any coding. With real-time data capture",
    description:
      "Re-configure on the GO! No more expensive, time consuming system change requests.",
    image: "/ProductDetails4/KYC1.webp",
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
        text: "Single click generation of data and documents required for Clients.",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Configuration Studio",
        text: "Re-configure ID&V policy changes to Entities, Countries, Data points.",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "API Integration",
        text: "Seamless data exchange with external and internal systems.",
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
        text: "Seamless data exchange with external and internal systems to capture.",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Risk Evaluation",
        text: "Seamless data exchange with external and internal systems.",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "Global Coverage",
        text: "Access cross-border data sources for comprehensive ownership analysis.",
      },
    ],
  },
];
 
export default function CircleSec() {
  const [activeTab, setActiveTab] = useState(products[0]);
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
 
  // Handle Click for Desktop AND Mobile
  const handleTabClick = (product: ProductTab, index: number) => {
    setActiveTab(product);

    // Mobile specific logic: Scroll to the tab's position
    if (window.innerWidth < 768 && sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const scrollableDistance = sectionHeight - viewportHeight;
      const targetProgress = index / (products.length - 1); 
      
      const targetScrollY = sectionTop + (targetProgress * scrollableDistance);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  };
 
  // Handle Mobile Scroll Mapping
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth >= 768) return;

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
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Determine which tab is active on mobile based on scroll progress
  useEffect(() => {
    if (window.innerWidth < 768) {
      const index = Math.min(
        products.length - 1,
        Math.floor(mobileScrollProgress * products.length)
      );
      setActiveTab(products[index]);
    }
  }, [mobileScrollProgress]);

  return (
    <section 
      ref={sectionRef}
      className={`
        w-full bg-gradient-to-b from-[#E1EDFF] to-[#FFFFFF]
        text-center relative
        ${window.innerWidth < 768 ? 'h-[250vh]' : 'py-8 px-4 sm:px-6 xl:px-20'} 
      `}
    >
      
      {/* MOBILE STICKY WRAPPER */}
      <div className="md:hidden sticky top-10 xl:top-0 h-[70vh] w-full overflow-hidden flex flex-col bg-gradient-to-b from-[#E1EDFF] to-[#FFFFFF] z-10">
        
        {/* Mobile Header & Tabs */}
        <div className="pt-6 pb-2 px-4 shrink-0 bg-gradient-to-b from-[#E1EDFF] to-[#E1EDFF]/90 backdrop-blur-sm z-20">
          <H1 className="text-[#2f5fb3] mb-3 text-xl font-bold leading-tight">Solution Components</H1>
          
          {/* Tabs - Clickable on Mobile now */}
          <div className="flex justify-center gap-2 overflow-x-auto scrollbar-hide px-1">
            {products.map((product, index) => {
              const isActive = activeTab.label === product.label;
              return (
                <button
                  key={product.label}
                  onClick={() => handleTabClick(product, index)}
                  className={`
                    whitespace-nowrap px-3 py-1.5 text-[10px] rounded-full transition-all duration-300 border
                    ${isActive 
                      ? "bg-[#2f5fb3] text-white border-[#2f5fb3] shadow-md" 
                      : "bg-white/80 text-gray-600 border-gray-200"
                    }
                  `}
                >
                  {product.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Slider Track */}
        <div 
          className="flex h-full w-[300%] will-change-transform" // CHANGED: Fixed typo h-ful to h-full
          style={{ transform: `translateX(-${mobileScrollProgress * (200 / 3)}%)` }}
        >
          {products.map((product, index) => (
            <div key={product.label} className="w-1/3 h-full flex flex-col justify-start px-3">
               
              {/* Description */}
              <H4 className="text-[#2f5fb3] mb-2 mt-6 text-xs font-bold leading-tight">
                {product.description}
              </H4>

              {/* Para with conditional margin */}
              {product.para && (
                <P className={`
                  text-[10px] leading-snug mb-2 text-center
                  ${index === 0 ? "mb-0" : "mb-2"}
                `}>
                  {product.para}
                </P>
              )}

              {/* Content Area */}
              <div className={`
                flex-1 overflow-y-hidden overflow-x-hidden scrollbar-hide flex flex-col w-full
                ${index === 0 ? "items-start" : "items-center"}
              `}>
                {product.image && (
                  <div className="w-full flex items-center justify-center h-full max-h-[35vh]">
                    <img
                      src={product.image}
                      alt={product.label}
                      className="w-full h-full object-contain max-w-full"
                    />
                  </div>
                )}
                
                {product.features && (
                  <div className="w-full max-w-xs pb-4">
                    {product.intro && (
                      <P className=" text-[10px] mb-3 leading-relaxed text-center">
                        {product.intro}
                      </P>
                    )}
                    
                    <div className="grid grid-cols-1 gap-3 text-center">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <img src={feature.icon} alt={feature.title} className="h-8 w-8 mb-1 object-contain" />
                          <H4 className="font-bold text-[10px] mb-0.5 text-gray-800">{feature.title}</H4>
                          <P className="text-gray-600 text-[9px] leading-tight px-1">{feature.text}</P>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* DESKTOP VIEW */}
      <div className="hidden md:block">
        <H1 className="text-[#2f5fb3] mb-6"> {/* CHANGED: Reduced margin from mb-8/10 to mb-6 */}
           Solution Components
        </H1>
 
        <div className="mb-8 overflow-x-auto scrollbar-hide"> {/* CHANGED: Reduced margin from mb-12/14 to mb-8 */}
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
          {/* CHANGED: Reduced margin from mb-12/16/20 to mb-8 */}
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
                  {/* CHANGED: Reduced margin from mb-12 to mb-8 */}
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
    </section>
  );
}