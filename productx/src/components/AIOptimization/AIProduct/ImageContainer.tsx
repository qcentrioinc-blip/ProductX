import { useEffect, useRef } from "react";
import Partners from "./Partners";

const ImageContainer = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isIntersectingRef = useRef(false);

  // Track intersection to optimize scroll listener
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
      },
      { rootMargin: "100px" }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  // Optimized scroll handler with RAF
  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!isIntersectingRef.current || !imgRef.current) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY === lastScrollY) return;
      lastScrollY = currentScrollY;

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        if (!imgRef.current) return;

        // Optimization: Disable animation on mobile to save GPU/CPU
        if (window.innerWidth < 768) return;

        const maxScroll = window.innerWidth >= 1280 ? 400 : 300;

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

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="flex justify-center items-center py-8 md:py-12 min-h-[250px]">
          <div className="relative w-[80%] xl:w-[80%]">
            <img
              ref={imgRef}
              src="/AIOptimization/dashboardfinal-transformed.webp"
              srcSet="/AIOptimization/dashboardfinal-mobile.webp 768w, /AIOptimization/dashboardfinal-transformed.webp 2400w"
              sizes="(max-width: 768px) 90vw, 90vw"
              alt="Analytics dashboard"
              fetchPriority="high"
              className="
          relative
          z-10
          w-full
        
        
          md:will-change-transform
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