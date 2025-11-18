"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FirstPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className="min-h-screen w-full bg-[#2B68C3]">
      {/* Top Simple Bar */}
      <div className="w-full border-b border-white/30">
        <div className="max-w-[1600px] mx-auto h-[40px] flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center">
            <div className="bg-white px-4 py-1 rounded-md">
              <span className="text-black text-[12px] font-bold">LOGO</span>
            </div>
          </div>
          <div className="flex items-center gap-5 sm:gap-10">
            <a href="#platform" className="text-white text-xs sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
              Platform
            </a>
            <a href="#marketplace" className="text-white text-xs sm:text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
              Marketplace
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <header className="w-full bg-transparent pt-4 pb-4">
        <div className="max-w-[1540px] mx-auto px-4 sm:px-8">
          <nav className="relative w-full max-w-[1480px] h-[64px] sm:h-[80px] mx-auto bg-white rounded-[32px] sm:rounded-[60px] px-2 sm:px-4 flex items-center justify-between shadow-lg z-50">
            <div className="flex items-center">
              <div className="bg-[#2A2A2A] w-[44px] sm:w-[60px] h-[44px] sm:h-[60px] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                LOGO
              </div>
            </div>
            <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex gap-[18px] sm:gap-[36px] list-none items-center">
                <li><a href="#products" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">Products</a></li>
                <li><a href="#about" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">About Us</a></li>
                <li><a href="#resources" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">Resources</a></li>
                <li><a href="#careers" className="text-[#2A2A2A] text-[13px] sm:text-[15px] font-semibold hover:text-black transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
            <div className="hidden lg:flex items-center ml-auto">
              <button className="bg-black text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-[8px] text-xs sm:text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
                CONTACT US <ArrowUpRight size={16} />
              </button>
            </div>
            <button onClick={toggleMobileMenu} className="lg:hidden flex flex-col gap-1.5 focus:outline-none">
              <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white mx-4 rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col px-5 py-4 space-y-4">
            <li className="border-b border-gray-300 pb-3"><a href="#products" className="text-gray-800 text-base font-medium hover:text-black">Products</a></li>
            <li className="border-b border-gray-300 pb-3"><a href="#about" className="text-gray-800 text-base font-medium hover:text-black">About Us</a></li>
            <li className="border-b border-gray-300 pb-3"><a href="#resources" className="text-gray-800 text-base font-medium hover:text-black">Resources</a></li>
            <li className="border-b border-gray-300 pb-3"><a href="#careers" className="text-gray-800 text-base font-medium hover:text-black">Careers</a></li>
            <li className="pt-2">
              <button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800">
                CONTACT US <span className="text-lg">↗</span>
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Yellow Title Band with Responsive Layout */}
      <div className="w-full bg-[#FED600] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col sm:flex-row gap-6 sm:gap-0 items-start sm:items-center justify-between relative z-2">
          {/* Left: Title */}
          <h1 className="max-w-full sm:max-w-[520px] font-bold text-[32px] sm:text-[56px] leading-[120%] text-[#2A2A2A] m-0" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-1px' }}>
            Lorem ipsum dolor , consectetur adipis
          </h1>
          {/* Right: Description + Button */}
          <div className="max-w-full sm:max-w-[450px] flex flex-col gap-6 sm:gap-8">
            <p className="text-sm sm:text-base" style={{ fontFamily: "'Schibsted Grotesk', sans-serif", color: "#141414", lineHeight: "140%" }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <button
              className="bg-black text-white px-5 sm:px-7 py-3 rounded-[8px] font-bold text-xs sm:text-[14px] flex items-center gap-2 hover:brightness-90"
              style={{ fontFamily: "'Space Grotesk', sans-serif", alignSelf: 'flex-start' }}
            >
              CONTACT US
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Images Grid/Carousel */}
      <div className="px-2 sm:px-8 py-10 sm:py-20">
        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {carouselImages.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-full snap-center px-2">
                <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[220px] xs:h-[300px] sm:h-[380px] w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-6">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${currentSlide === index ? "w-8 h-3 bg-white" : "w-3 h-3 bg-white/40 hover:bg-white/60"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Dashboard Grid */}
        <div className="hidden lg:grid relative gap-6 lg:grid-cols-[1fr_2fr_1fr] lg:gap-8 max-w-[1280px] mx-auto">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <img src="/Products/Products7/MainImage.png" alt="Dashboard analytics view" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <img src="/Products/Products7/MainImage.png" alt="Dashboard analytics view" className="h-full w-full object-cover" />
            </div>
          </div>
          {/* Center Column */}
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
            <img src="/Products/Products7/MainImage.png" alt="Main dashboard" className="h-full w-full object-cover" />
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <img src="/Products/Products7/MainImage.png" alt="Dashboard analytics view" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <img src="/Products/Products7/MainImage.png" alt="Dashboard analytics view" className="h-full w-full object-cover" />
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
