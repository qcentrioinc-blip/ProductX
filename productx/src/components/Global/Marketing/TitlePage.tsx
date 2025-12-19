import { useState, useRef, useEffect } from "react";
import { H1, H4 } from "../../../styles/Typography";

export default function MarketplaceHero() {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen bg-[#E7EFFF] py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-200 rounded-full opacity-50 animate-float-slow" />
      </div>

      {/* Decorative Left Image */}
      <img
        src="/MarketPlace/img1.png"
        alt="Decorative left"
        className="
          absolute z-0
          top-[60px] left-0
          w-[220px] sm:w-[220px] md:w-[300px]
          h-auto
          transform transition-all duration-1000 ease-out
        "
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) rotate(0deg)' : 'translateX(-100px) rotate(-5deg)',
          transitionDelay: isVisible ? '0.2s' : '0s'
        }}
      />

      {/* Decorative Right Image */}
      <img
  src="/MarketPlace/img2.png"
  alt="Decorative right"
  className="
    absolute z-0
    bottom-0 right-0
    w-[220px] sm:w-[220px] md:w-[300px]
    h-auto
    transform transition-all duration-1000 ease-out
  "
  style={{
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateX(0) rotate(0deg) scaleX(-1)'
      : 'translateX(100px) rotate(5deg) scaleX(-1)',
    transitionDelay: isVisible ? '0.2s' : '0s'
  }}
/>


      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <H1 
          className="text-[#2B68C3] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug transform transition-all duration-800 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
            transitionDelay: isVisible ? '0.4s' : '0s'
          }}
        >
          Lorem ipsum dolor sit amet
        </H1>

        <H4 
          className="text-black text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl transform transition-all duration-800 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: isVisible ? '0.6s' : '0s'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        </H4>

        {/* Search Input */}
        <div 
          className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform transition-all duration-800 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
            transitionDelay: isVisible ? '0.8s' : '0s'
          }}
        >
          <input
            type="text"
            placeholder="Search for products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full px-5 py-4 sm:py-5 rounded-lg bg-white border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
              shadow-lg text-sm sm:text-base
              transform transition-all duration-300 ease-out
              hover:shadow-xl hover:scale-105
              focus:scale-105
            "
          />
          <button 
            className="
              absolute right-3 top-1/2 transform -translate-y-1/2 
              text-gray-500 hover:text-gray-700 
              transition-all duration-300 ease-out
              hover:scale-125
            "
          >
            🔍
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}