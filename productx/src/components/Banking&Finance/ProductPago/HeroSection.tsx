import React, { useState, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { H1, P } from '../../../styles/Typography';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Mock images - replace with your actual images
  const images = [
    "/ProductDetailsThree/image67.png",
    "/ProductDetailsThree/image67.png",
    "/ProductDetailsThree/image67.png"
     
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const slideWidth = container.offsetWidth * 0.8;
    const newSlide = Math.round(container.scrollLeft / slideWidth);
    setCurrentSlide(newSlide);
  };

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const slideWidth = container.offsetWidth * 0.8;
      container.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full text-center">
      {/* Top Section */}
      <div className="bg-blue-600 pt-20 pb-10 md:mt-16 px-4 text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <H1 className="  font-bold text-white">
            Lorem ipsum dolor, <br /> consectetur adipiscing elit
          </H1>

          <P className="text-white mt-4 ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit.
          </P>

          {/* Centered Button */}
          <div className="mt-8 flex justify-center">
            <button
              className="
                group 
                flex items-center justify-center
                
                h-12 px-6 py-3
                rounded-md
                font-bold
                text-[14px]
                border-2 border-[#141414]
                bg-black text-white
                shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
                transition-all duration-300 ease-in-out
                hover:bg-white hover:text-black
              "
            >
               {/* w-[185px] h-[48px] */}
                 {/* px-[24px] py-[12px] */}
              BOOK A DEMO
              <span className="flex items-center gap-2 ml-2">
                <span className="relative flex items-center h-5 w-5"> 
                  {/* h-[20px] w-[20px] */}
                  <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                  <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="w-full bg-linear-to-b from-transparent via-(--secondary-color) to-(--secondary-color) pb-10 md:pb-20">
        {/* Mobile Slider (visible only on small screens) */}
        <div className="md:hidden mt-6 px-4">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="shrink-0 w-[80vw] snap-center"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout (hidden on mobile, visible md and up) - ORIGINAL LAYOUT */}
        <div className="hidden md:block relative max-w-8xl mx-auto mt-6">
          <div className="relative flex justify-center items-center">
            <img
              src={images[0]}
              alt="Left"
              className="w-60 h-52 lg:w-lg lg:h-80 rounded-lg shadow-md absolute left-1/2 -translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
            />
            <img
              src={images[1]}
              alt="Center"
              className="w-80 h-64 lg:w-2xl lg:h-96 rounded-lg shadow-2xl relative z-10"
            />
            <img
              src={images[2]}
              alt="Right"
              className="w-60 h-52 lg:w-lg lg:h-80 rounded-lg shadow-md absolute right-1/2 translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
            />
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;