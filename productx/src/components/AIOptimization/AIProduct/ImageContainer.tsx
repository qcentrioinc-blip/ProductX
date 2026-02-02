import { useEffect, useRef, memo } from "react";
import Partners from "./Partners";

const ImageContainer = memo(() => {
  const containerRef = useRef(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isIntersectingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { isIntersectingRef.current = entry.isIntersecting; },
      { rootMargin: "100px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = -1;

    const handleScroll = () => {
      if (!isIntersectingRef.current) return;
      if (window.scrollY === lastScrollY) return;
      lastScrollY = window.scrollY;

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        if (!imgRef.current) return;
        const maxScroll = window.innerWidth >= 1280 ? 400 : window.innerWidth >= 768 ? 300 : 250;
        const progress = Math.min(window.scrollY / maxScroll, 1);
        imgRef.current.style.transform = `translateY(${-progress * 10}px)`;
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
        <div ref={containerRef} className="flex justify-center items-center py-8 md:py-12" style={{ minHeight: "300px" }}>
          <div className="relative w-[90%] xl:w-[90%]">
            <img ref={imgRef} src="/AIOptimization/dashboardfinal.webp" alt="Analytics dashboard" fetchPriority="high" className="relative z-10 w-full will-change-transform transform-gpu" />
          </div>
        </div>
      </section>
      <div className="relative z-40"><Partners /></div>
    </>
  );
});

export default ImageContainer;