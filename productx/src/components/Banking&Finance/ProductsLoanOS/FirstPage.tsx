"use client"

import { useState, useEffect, useRef } from "react";
import { ContactUs } from "../../../styles/Button";

const FirstPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const carouselImages = [
    { id: 1, src: "/Products/Products7/MainImage.png", alt: "Dashboard 1" },
    { id: 2, src: "/Products/Products7/MainImage.png", alt: "Dashboard 2" },
    { id: 3, src: "/Products/Products7/MainImage.png", alt: "Dashboard 3" },
    { id: 4, src: "/Products/Products7/MainImage.png", alt: "Dashboard 4" },
    { id: 5, src: "/Products/Products7/MainImage.png", alt: "Dashboard 5" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const startAutoScroll = () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = window.setInterval(() => {
        setCurrentSlide(prev => {
          const nextSlide = (prev + 1) % carouselImages.length;
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              left: scrollContainerRef.current.clientWidth * nextSlide,
              behavior: 'smooth'
            });
          }
          return nextSlide;
        });
      }, 3000);
    };
    startAutoScroll();
    const container = scrollContainerRef.current;
    const pauseAutoScroll = () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
    const resumeAutoScroll = () => {
      setTimeout(startAutoScroll, 1000);
    };
    if (container) {
      container.addEventListener('mouseenter', pauseAutoScroll);
      container.addEventListener('mouseleave', resumeAutoScroll);
      container.addEventListener('touchstart', pauseAutoScroll);
      container.addEventListener('touchend', resumeAutoScroll);
    }
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
      if (container) {
        container.removeEventListener('mouseenter', pauseAutoScroll);
        container.removeEventListener('mouseleave', resumeAutoScroll);
        container.removeEventListener('touchstart', pauseAutoScroll);
        container.removeEventListener('touchend', resumeAutoScroll);
      }
    };
  }, [isMobile, carouselImages.length]);

  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.clientWidth;
      const slideIndex = Math.round(scrollLeft / slideWidth);
      if (slideIndex !== currentSlide) {
        setCurrentSlide(slideIndex);
      }
    }
  };

  return (
    <main
      className="bg-[#2B68C3] pt-16 sm:pt-24 md:pt-32 lg:pt-44 relative overflow-hidden w-full"
      style={{
        minHeight: 'auto',
        margin: '0 auto',
      }}
    >

      {/* RIGHT Decorative Sphere - Desktop Only */}
      <div
        className="hidden lg:block absolute w-[250px] h-[410px] lg:top-[400px] lg:-right-[40px] xl:top-[250px] z-[6] pointer-events-none"
      >
        <img
          src="/Products/Products7/Circle7.png"
          alt="Decorative Sphere"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '50%'
          }}
        />
      </div>

      {/* LEFT Decorative Circles - Desktop Only */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          width: '226.68px',
          height: '205.60px',
          top: '970px',
          left: '15.5px',
          border: '5px solid #0C4BA8',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          width: '154.30px',
          height: '145.81px',
          top: '1005px',
          left: '46.69px',
          border: '2px solid #FBFBFB',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

      {/* Yellow Title Band - Fully Responsive */}
      <div
        className="w-full bg-[#FED600] relative z-5"
        style={{
          minHeight: 'auto',
          height: 'auto'
        }}
      >
        <div className="max-w-8xl mx-10 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center justify-between relative z-2">

          {/* Left: Title */}
          <h1
            className="max-w-full md:max-w-[620px] lg:max-w-[500px] xl:max-w-[750px] font-bold text-[28px] xs:text-[32px] sm:text-[40px] md:text-[52px] lg:text-[48px] xl:text-[66px] leading-[110%] sm:leading-[120%] text-[#2A2A2A] m-0"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '-0.5px',
            }}
          >
            Lorem ipsum dolor, consectetur adipis
          </h1>

          {/* Right: Description + Button */}
          <div className="max-w-full md:max-w-[400px] lg:max-w-[420px] xl:max-w-[600px] w-full lg:w-auto flex flex-col gap-4 sm:gap-6 lg:gap-8">
            <p
              className="text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-xl leading-[140%] sm:leading-[150%]"
              style={{
                fontFamily: "'Schibsted Grotesk', sans-serif",
                color: "#141414"
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>

            {/* Contact Button */}
            <div className="w-full sm:w-auto">
              <ContactUs>Contact Us</ContactUs>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Images Grid/Carousel */}
      <div className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20">

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {carouselImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full snap-center px-2"
              >
                <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[200px] xs:h-[250px] sm:h-[320px] md:h-[400px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: scrollContainerRef.current.clientWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${currentSlide === index
                  ? "w-8 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Dashboard Grid */}
        <div className="hidden lg:grid relative gap-6 lg:gap-8 xl:gap-10 grid-cols-[1fr_2fr_1fr] max-w-8xl mx-10 z-6">

          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02]">
              <img
                src="/Products/Products7/MainImage.png"
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02]">
              <img
                src="/Products/Products7/MainImage.png"
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Center Column */}
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02]">
            <img
              src="/Products/Products7/MainImage.png"
              alt="Main dashboard"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02]">
              <img
                src="/Products/Products7/MainImage.png"
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02]">
              <img
                src="/Products/Products7/MainImage.png"
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
};

export default FirstPage;
