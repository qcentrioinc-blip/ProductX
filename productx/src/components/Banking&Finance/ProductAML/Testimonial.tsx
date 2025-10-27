import { useState, useEffect, useRef } from 'react';
import { H2, H3,P } from '../../../styles/Typography';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 2,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 3,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 4,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 5,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 6,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 7,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    }
  ];

  // Auto-scroll for desktop only
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle mobile scroll detection
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollPosition = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.offsetWidth * 0.85; // 85% card width
    const newIndex = Math.round(scrollPosition / cardWidth);
    setCurrentIndex(newIndex);
  };

   

  return (
    <div className="bg-white py-20">
      <div className=" max-w-8xl">
        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="  font-bold text-gray-900">
            Lorem ipsum dolor, consectetur adipis
          </H2>
        </div>

        {/* Desktop Slider (md and up) */}
        <div className="hidden md:block relative overflow-hidden mb-10">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3.2)}%)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{ width: 'calc(33.333% - 16px)' }}
              >
                <div className="bg-gray-200 rounded-lg p-6 h-[200px]">
                  {/* Avatar */}
                  <div className="flex justify-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-white"></div>
                  </div>

                  {/* Name */}
                  <H3 className=" font-semibold mb-2 text-gray-900">
                    {testimonial.name}
                  </H3>

                  {/* Text */}
                  <P className="  text-gray-600 leading-relaxed">
                    {testimonial.text}
                  </P>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          {/* <div className="flex md:hidden justify-center gap-2 mt-6">
            {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

        {/* Mobile Slider (below md) */}
        <div className="md:hidden mx-2">
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <div className="bg-white border-2 border-gray-200 shadow-gray-500 shadow-sm rounded-lg p-6 h-[200px]">
                  {/* Avatar */}
                  <div className="flex justify-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-white"></div>
                  </div>

                  {/* Name */}
                  <H3 className="  font-semibold mb-2 text-gray-900">
                    {testimonial.name}
                  </H3>

                  {/* Text */}
                  <P className="text-sm text-gray-600 leading-relaxed">
                    {testimonial.text}
                  </P>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = sliderRef.current.offsetWidth * 0.85;
                    sliderRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}