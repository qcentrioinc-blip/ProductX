"use client";

import { H3, P } from "../../../styles/Typography";
import { useRef, useEffect, useState } from "react";

export default function InfoCards() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = cardRefs.current[0]?.parentElement?.parentElement;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => observer.disconnect();
  }, []);

  // Fixed ref callback functions - no return value
  const setCardRef0 = (el: HTMLDivElement | null) => {
    cardRefs.current[0] = el;
  };

  const setCardRef1 = (el: HTMLDivElement | null) => {
    cardRefs.current[1] = el;
  };

  const setCardRef2 = (el: HTMLDivElement | null) => {
    cardRefs.current[2] = el;
  };

  return (
    <section className="max-w-8xl mx-10 px-6 md:px-12 lg:px-20 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* CARD 1 */}
        <div 
          ref={setCardRef0}
          className="
            bg-[#E7F7FA] rounded-md p-8 flex flex-col items-start
            transform transition-all duration-700 ease-out
            hover:scale-105 hover:-translate-y-2
            group cursor-pointer
            relative overflow-hidden
          "
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transitionDelay: isVisible ? '0ms' : '0ms'
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="w-full flex justify-center relative z-10">
            <img
              src="/MarketPlace/img10.png"
              alt="Card Image 1"
              width={350}
              height={350}
              className="
                rounded-md object-cover 
                transform transition-all duration-500 ease-out
                group-hover:scale-110
              "
              style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transitionDelay: isVisible ? '100ms' : '0ms'
              }}
            />
          </div>

          <H3 
            className="mt-18 relative z-10 transform transition-all duration-500 group-hover:translate-x-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: isVisible ? '200ms' : '0ms'
            }}
          >
            Lorem ipsum
          </H3>

          <P 
            className="text-gray-700 mt-4 leading-relaxed relative z-10 transform transition-all duration-500 group-hover:translate-x-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: isVisible ? '300ms' : '0ms'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
            irure dolor in reprehenderit in voluptate aute irure
          </P>
        </div>

        {/* CARD 2 */}
        <div 
          ref={setCardRef1}
          className="
            bg-[#FFE4E9] rounded-md p-8 flex flex-col items-start
            transform transition-all duration-700 ease-out
            hover:scale-105 hover:-translate-y-2
            group cursor-pointer
            relative overflow-hidden
          "
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transitionDelay: isVisible ? '100ms' : '0ms'
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="w-full flex justify-center relative z-10">
            <img
              src="/MarketPlace/img11.png"
              alt="Card Image 2"
              width={350}
              height={350}
              className="
                rounded-md object-cover
                transform transition-all duration-500 ease-out
                group-hover:scale-110
              "
              style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transitionDelay: isVisible ? '200ms' : '0ms'
              }}
            />
          </div>

          <H3 
            className="text-2xl font-semibold mt-6 relative z-10 transform transition-all duration-500 group-hover:translate-x-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: isVisible ? '300ms' : '0ms'
            }}
          >
            Lorem ipsum
          </H3>

          <P 
            className="text-gray-700 mt-4 leading-relaxed relative z-10 transform transition-all duration-500 group-hover:translate-x-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: isVisible ? '400ms' : '0ms'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
            irure dolor in reprehenderit in voluptate aute irure
          </P>
        </div>

        {/* CARD 3 */}
        <div 
          ref={setCardRef2}
          className="
            bg-[#FFF1D6] rounded-md p-8 flex flex-col items-start
            transform transition-all duration-700 ease-out
            hover:scale-105 hover:-translate-y-2
            group cursor-pointer
            relative overflow-hidden
          "
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transitionDelay: isVisible ? '200ms' : '0ms'
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-yellow-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="w-full flex justify-center relative z-10">
            <img
              src="/MarketPlace/img12.png"
              alt="Card Image 3"
              width={350}
              height={350}
              className="
                rounded-md object-cover
                transform transition-all duration-500 ease-out
                group-hover:scale-110
              "
              style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                transitionDelay: isVisible ? '300ms' : '0ms'
              }}
            />
          </div>

          <H3 
            className="text-2xl font-semibold mt-6 relative z-10 transform transition-all duration-500 group-hover:translate-x-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: isVisible ? '400ms' : '0ms'
            }}
          >
            Lorem ipsum
          </H3>

          <P 
            className="text-gray-700 mt-4 leading-relaxed relative z-10 transform transition-all duration-500 group-hover:translate-x-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transitionDelay: isVisible ? '500ms' : '0ms'
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
            irure dolor in reprehenderit in voluptate aute irure
          </P>
        </div>
      </div>
    </section>
  );
}