import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import Image1 from "/AML/image64.png";
import { useState,useRef } from "react";
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
    <div  className="w-full bg-linear-to-b from-[#C1D7F3]  to-[#ffd900d0] mt-16 mb-12">
-

      <div className=" px-8 sm:px-12 md:px-16  lg:px-20 xl:px-24 flex flex-col lg:flex-row justify-between lg:pt-12 pt-4 items-center gap-8">

        {/* Left Text */}
        <div className="w-full text-(--primary-color) text-center lg:text-left">
          <H1>Lorem ipsum dolor , consectetur adipis</H1>
        </div>

        
        <div className="w-full bg-(--secondary-color) rounded-lg lg:w-3/5 flex flex-col  lg:pt-4 text-center  lg:text-left">
          <P className="px-4 lg:pt-2 pt-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia
          </P>
          <div className="flex justify-center my-4 px-4 lg:justify-start">
            <ContactUs>Contact Us</ContactUs>
          </div>
        </div>
      </div>

 {/* Mobile Slider (visible only on small screens) */}
        <div className="lg:hidden mt-6 px-4 pb-10">
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
        
      <div className="relative hidden mx-auto mt-20 lg:flex justify-center  md:px-10 lg:pb-12 pb-4 items-center">
             
                <img
                    src={Image1}
                    alt="Left"
                    className="w-40 h-40 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-lg lg:h-80  rounded-lg  absolute left-1/2 -translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
                />

              
                <img
                    src={Image1}
                    alt="Center"
                    className=" w-52 h-52 sm:w-52 sm:h-52 md:w-80  md:h-64 lg:w-2xl lg:h-96 rounded-lg  relative z-10"
                />

               
                <img
                    src={Image1}
                    alt="Right"
                    className="w-40 h-40 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-lg lg:h-80 rounded-lg  absolute right-1/2 translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
                />
        </div>
    </div>
  );
};

export default HeroSection;
