import { useEffect, useRef } from "react";
import Partners from "./Partners";

const ImageContainer = () => {
  // const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const imgRef = useRef<HTMLImageElement>(null);

  /* Optimization: Track intersection to disable scroll listener */
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
      },
      { rootMargin: "100px" } // Pre-activate slightly before view
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = -1;

    const handleScroll = () => {
      // Optimization: Stop if not visible
      if (!isIntersectingRef.current) return;

      // Skip if scroll position hasn't changed
      if (window.scrollY === lastScrollY) return;
      lastScrollY = window.scrollY;

      // Cancel any pending frame to avoid stacking
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        if (!imgRef.current) return;

        const maxScroll =
          window.innerWidth >= 1280 ? 400 :
            window.innerWidth >= 768 ? 300 : 250;

        const progress = Math.min(window.scrollY / maxScroll, 1);
        const translateY = -progress * 10;

        imgRef.current.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);


  // Responsive scale: less dramatic on smaller screens
  // const getMaxScale = () => {
  //   if (typeof window === 'undefined') return 0.3;
  //   if (window.innerWidth >= 1280) return 0.15; // xl: 30% growth
  //   if (window.innerWidth >= 768) return 0.2; // md: 40% growth
  //   return 0.3; // mobile: 30% growth
  // };

  // const scale = 1 + (scrollProgress * getMaxScale());

  // Calculate translateY: moves up as you scroll (negative Y value)
  // const translateY = -(scrollProgress * 80);  
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex justify-center items-center py-8 md:py-12"
          style={{ minHeight: "300px" }}
        >
          {/* Frame wrapper */}
          <div className="relative w-[90%] xl:w-[90%]">

            {/* Background frame */}


            {/* Animated image */}
            <img
              ref={imgRef}
              src="/AIOptimization/dashboardfinal-transformed.webp"
              alt="Analytics dashboard"
              fetchPriority="high"
              className="
          relative
          z-10
          w-full
        
        
          will-change-transform
          transform-gpu
        "
            />
          </div>
        </div>
      </section>

      <div className="relative z-40">
        <Partners />
      </div>
    </>
  );
};

export default ImageContainer;