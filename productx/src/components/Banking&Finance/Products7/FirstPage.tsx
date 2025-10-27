"use client"

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FirstPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // All 5 images for the carousel
  const carouselImages = [
    { id: 1, src: "/Products/Products7/MainImage.png", alt: "Dashboard 1" },
    { id: 2, src: "/Products/Products7/MainImage.png", alt: "Dashboard 2" },
    { id: 3, src: "/Products/Products7/MainImage.png", alt: "Dashboard 3" },
    { id: 4, src: "/Products/Products7/MainImage.png", alt: "Dashboard 4" },
    { id: 5, src: "/Products/Products7/MainImage.png", alt: "Dashboard 5" },
  ];

  // Detect if mobile on mount and resize
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

      autoScrollInterval.current = setInterval(() => {
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

    // Pause on user interaction
    const container = scrollContainerRef.current;
    const pauseAutoScroll = () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
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

  // Handle manual scroll to update dots
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
    <main className="min-h-screen bg-background">
      <div className="py-12 md:py-20 px-8 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Lorem ipsum dolor, consectetur adipis
            </h1>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div>
              <button className="group bg-black px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors items-center inline-flex">
                CONTACT US
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Carousel - Auto Scroll with Dots */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' // Add smooth scrolling for iOS
            }}
          >
            {carouselImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full snap-center px-2"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[300px] sm:h-[400px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${currentSlide === index
                    ? "w-8 h-3 bg-black"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Dashboard Grid Section - Unchanged */}
        <div className="hidden lg:grid relative gap-6 lg:grid-cols-[1fr_2fr_1fr] lg:gap-8">
          {/* Left Column - 2 Small Dashboards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Center Column - Large Dashboard */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <img
              src="/Products/Products7/MainImage.png"
              alt="Main dashboard with revenue analytics"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Column - 2 Small Dashboards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={"/Products/Products7/MainImage.png"}
                alt="Dashboard analytics view"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
};

export default FirstPage;
