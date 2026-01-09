import { useEffect, useState, useRef } from "react";
import Partners from "./Partners";

const ImageContainer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          // Responsive maxScroll based on screen size
          const maxScroll = window.innerWidth >= 1280 ? 400 : window.innerWidth >= 768 ? 300 : 250;
          const progress = Math.min(scrollPosition / maxScroll, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive scale: less dramatic on smaller screens
  const getMaxScale = () => {
    if (typeof window === 'undefined') return 0.3;
    if (window.innerWidth >= 1280) return 0.15; // xl: 30% growth
    if (window.innerWidth >= 768) return 0.2; // md: 40% growth
    return 0.3; // mobile: 30% growth
  };

  const scale = 1 + (scrollProgress * getMaxScale());
  
  // Calculate translateY: moves up as you scroll (negative Y value)
  const translateY = -(scrollProgress * 80);  
  return (
    <>
      <section className="relative overflow-hidden">
        <div 
          ref={containerRef}
          className="flex justify-center items-center py-8 md:py-12"
          style={{
            // Reserve space to prevent layout shift
            minHeight: '400px'
          }}
        >
          <img 
            src="/AIProduct/DataImage.png" 
            alt="Analytics dashboard" 
            className="w-[70%] xl:w-[60%] relative will-change-transform object-contain"
            style={{
              transform: `scale(${scale}) translateY(${translateY}px)`,
              transformOrigin: 'center center',
              transition: 'transform 0.1s ease-out',
              height: 'auto'
            }}
          />
        </div>
      </section>
      <div className="relative z-40">
        <Partners />
      </div>
    </>
  );
};

export default ImageContainer;