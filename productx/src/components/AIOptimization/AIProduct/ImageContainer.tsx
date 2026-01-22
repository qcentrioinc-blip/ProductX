import { useEffect,  useRef } from "react";
import Partners from "./Partners";

const ImageContainer = () => {
  // const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const imgRef = useRef<HTMLImageElement>(null);

useEffect(() => {
  let rafId: number;

  const handleScroll = () => {
    if (!imgRef.current) return;

    rafId = requestAnimationFrame(() => {
      const maxScroll =
        window.innerWidth >= 1280 ? 400 :
        window.innerWidth >= 768 ? 300 : 250;

      const progress = Math.min(window.scrollY / maxScroll, 1);
      const scale = 1 + progress * 0.1;
      const translateY = -progress * 80;

      imgRef.current!.style.transform =
        `scale(${scale}) translateY(${translateY}px)`;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(rafId);
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
    style={{ minHeight: "400px" }}
  >
    {/* Frame wrapper */}
    <div className="relative w-[70%] xl:w-[90%]">
      
      {/* Background frame */}
     

      {/* Animated image */}
      <img
        ref={imgRef}
        src="/AIProduct/Dash.png"
        alt="Analytics dashboard"
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