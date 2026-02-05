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
 
        const maxScroll = window.innerWidth >= 1280 ? 400 : window.innerWidth >= 768 ? 300 : 250;
        const progress = Math.min(currentScrollY / maxScroll, 1);
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
      {/* Preload critical image */}
      <link
        rel="preload"
        as="image"
        href="/AIOptimization/dashboardfinal.webp"
        fetchPriority="high"
      />
 
      <section className="relative overflow-hidden">
        <div className="flex justify-center items-center py-8 md:py-12 min-h-[250px]">
          <div className="relative w-[80%] xl:w-[80%]">
            <img
              ref={imgRef}
              src="/AIOptimization/dashboardfinal.webp"
              alt="Analytics dashboard showing cloud cost optimization metrics"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              width="1920"
              height="1080"
              className="relative z-10 w-full h-auto will-change-transform"
              style={{
                transform: 'translateY(0)',
                imageRendering: 'crisp-edges'
              }}
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