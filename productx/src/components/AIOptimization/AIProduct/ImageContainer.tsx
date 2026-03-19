import { useEffect, useRef, useState } from "react";
import Partners from "./Partners";
import ContactModal from "../Navbar/ContactModal";
import { P } from "../../../styles/Typography";
import { HoverExpand } from "./HoverExpand";

const ArrowUpRightIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 7h10v10" /><path d="M7 17L17 7" />
  </svg>
);

const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ImageContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
            <HoverExpand
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
      <P className="mb-8 px-4 mx-auto md:max-w-3xl text-center text-white/90 relative z-40">
        CloudDIET profiles, analyzes, and optimizes your Azure, AWS, and Google Cloud spend, ensuring faster ROI with guaranteed savings and no data access. Our performance-based pricing means you only pay for the savings we deliver.
      </P>

      <div className="flex flex-row-reverse sm:flex-row items-center gap-4 justify-center relative z-40 pb-12">
        <button className="group flex items-center justify-center w-52 h-[48px] px-[24px] py-[12px] rounded-[8px] font-quicksand text-[16px] bg-transparent text-white border-white border-2 shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] transition-all duration-300 hover:bg-white hover:text-black" onClick={() => setModalOpen(true)}>
          Request A Demo
          <span className="flex items-center gap-4 ml-2">
            <span className="relative flex items-center w-[20px] h-[20px]">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </span>
        </button>
        <a href="https://login.clouddiet.app/..." target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-44 h-[48px] px-[24px] py-[12px] rounded-[8px] font-quicksand font-bold text-[16px] bg-white text-black shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] transition-all duration-300 hover:bg-white hover:text-[#254D70]">
          Login
          <span className="flex items-center gap-2 ml-2">
            <span className="relative flex items-center w-[20px] h-[20px]">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </span>
        </a>
      </div>
      {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}

      <div className="relative z-40">
        <Partners />
      </div>
    </>
  );
};

export default ImageContainer;