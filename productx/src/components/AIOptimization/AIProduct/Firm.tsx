import { H2, H3, H4, P } from "../../../styles/Typography";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
 
 
const GlobalSpotlight = ({ containerRef, enabled = true, spotlightRadius = 590 }: { containerRef: React.RefObject<HTMLDivElement | null>; enabled?: boolean; spotlightRadius?: number }) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);
  const isVisibleRef = useRef(false);
 
  // Cache layout measurements to avoid thrashing
  const layoutRef = useRef<{
    container: DOMRect;
    cards: { el: HTMLElement; rect: DOMRect }[];
  } | null>(null);
 
  const updateLayout = () => {
    if (!containerRef.current) return;
    // We use viewport-relative rects so we must re-measure on scroll.
    // Ideally we'd use page-relative, but this is simpler to drop-in.
    // To minimize cost, we ONLY measure if we are visible.
    if (!isVisibleRef.current) return;
 
    layoutRef.current = {
      container: containerRef.current.getBoundingClientRect(),
      cards: Array.from(containerRef.current.querySelectorAll('.animated-card')).map(el => ({
        el: el as HTMLElement,
        rect: el.getBoundingClientRect()
      }))
    };
  };
 
  useEffect(() => {
    if (!containerRef?.current || !enabled) return;
 
    // INTERSECTION OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        isVisibleRef.current = isVisible;
        if (isVisible) {
          updateLayout();
        } else if (spotlightRef.current) {
          gsap.set(spotlightRef.current, { opacity: 0 });
        }
      },
      { threshold: 0, rootMargin: '100px' }
    );
    observer.observe(containerRef.current);
 
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(132, 0, 255, 0.15) 0%,
        rgba(132, 0, 255, 0.08) 15%,
        rgba(132, 0, 255, 0.04) 25%,
        rgba(132, 0, 255, 0.02) 40%,
        rgba(132, 0, 255, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;
 
    let ticking = false;
 
    // Update layout cache on scroll/resize (throttled)
    const handleLayoutUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateLayout();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleLayoutUpdate, { passive: true });
    window.addEventListener('resize', handleLayoutUpdate, { passive: true });
 
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) return;
 
      // Use cached layout if available, else fall back (safety)
      // Note: Layout is updated on scroll, so this cache is fresh enough for 60fps
      if (!layoutRef.current) updateLayout();
      if (!layoutRef.current || !spotlightRef.current) return;
 
      const { container, cards } = layoutRef.current;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
 
      const mouseInside =
        mouseX >= container.left && mouseX <= container.right &&
        mouseY >= container.top && mouseY <= container.bottom;
 
      isInsideSection.current = mouseInside;
 
      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        cards.forEach(({ el }) => {
          el.style.setProperty('--glow-intensity', '0');
        });
        return;
      }
 
      const proximity = spotlightRadius * 0.5;
      const fadeDistance = spotlightRadius * 0.75;
      let minDistance = Infinity;
 
      // Heavy loop - Optimized by using cached rects
      for (let i = 0; i < cards.length; i++) {
        const { el, rect } = cards[i];
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
 
        const distance = Math.hypot(mouseX - centerX, mouseY - centerY) -
          Math.max(rect.width, rect.height) / 2;
        const effectiveDistance = Math.max(0, distance);
 
        minDistance = Math.min(minDistance, effectiveDistance);
 
        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }
 
        const relativeX = ((mouseX - rect.left) / rect.width) * 100;
        const relativeY = ((mouseY - rect.top) / rect.height) * 100;
 
        el.style.setProperty('--glow-x', `${relativeX}%`);
        el.style.setProperty('--glow-y', `${relativeY}%`);
        el.style.setProperty('--glow-intensity', glowIntensity.toString());
        el.style.setProperty('--glow-radius', `${spotlightRadius}px`);
      }
 
      gsap.set(spotlightRef.current, {
        left: mouseX,
        top: mouseY
      });
 
      const targetOpacity =
        minDistance <= proximity ? 0.8 :
          minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
 
      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.15 : 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };
 
    const handleMouseLeave = () => {
      isInsideSection.current = false;
      // Clear glow on leave
      layoutRef.current?.cards.forEach(({ el }) => el.style.setProperty('--glow-intensity', '0'));
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
      }
    };
 
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
 
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleLayoutUpdate);
      window.removeEventListener('resize', handleLayoutUpdate);
      observer.disconnect();
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [containerRef, enabled, spotlightRadius]);
 
  return null;
};
 
 
export default function Firm() {
 
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
 
  const cloudDietFeatures = [
    {
      id: 1,
      title: "Reserved Instance ",
      desc: "Optimizes reserved instances across full Azure ecosystem with deep billing model analysis for maximum guaranteed savings every month. ",
    },
    {
      id: 2,
      title: "Kubernetes Costs ",
      desc: "Manages Kubernetes clusters safely with zero downtime risks and full compliance during all Azure cost optimization processes. ",
    },
    {
      id: 3,
      title: "Microsoft Fabric ",
      desc: "Supports Microsoft Fabric workloads completely for comprehensive Azure cost management across all modern data platforms reliably",
    },
  ];
 
  const withoutCloudDietFeatures = [
    {
      id: 1,
      title: "Reserved Instances ",
      desc: "Provides limited reserved instance optimization without complete understanding of Azure billing ecosystem and resource relationships. ",
    },
    {
      id: 2,
      title: "Kubernetes Costs ",
      desc: "Often creates Kubernetes downtime risks and compliance violations when attempting Azure cost optimization across clusters. ",
    },
    {
      id: 3,
      title: "Microsoft Fabric ",
      desc: "Lacks proper Microsoft Fabric support causing incomplete cost optimization across Azure's modern data and analytics platforms. ",
    },
  ];
 
  return (
    <>
      <style>
        {`
          .animated-card {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            position: relative;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
         
          .animated-card::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 4px;
             background: radial-gradient(
    var(--glow-radius) circle at var(--glow-x) var(--glow-y),
    rgba(59, 130, 246, calc(var(--glow-intensity) * 1)) 0%,
    rgba(59, 130, 246, calc(var(--glow-intensity) * 0.6)) 30%,
    transparent 60%
  );
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
         
          .animated-card:hover {
             
            box-shadow: 0 8px 30px rgba(132, 0, 255, 0.2);
          }
        `}
      </style>
 
      <GlobalSpotlight
        containerRef={containerRef}
        enabled={!isMobile}
        spotlightRadius={590}
      />
      <section className="w-full pt-4 px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <H2 className="text-[#254D70]">
              How CloudDIET Compares Better To Other Tools & Platforms
            </H2>
 
            <P className="my-4 max-w-3xl mx-auto">
              See why CloudDIET delivers better Azure savings and functionality reliably
            </P>
          </div>
 
          {/* Outer White Container */}
          <div className="bg-white  rounded-3xl my-14 p-4 sm:p-6 md:p-8">
            <div className="grid bg-gray-100 rounded-4xl grid-cols-1 lg:grid-cols-2 gap-6">
 
              {/* Other Firms */}
              <div className="rounded-4xl animated-card my-10 p-6 ml-4 sm:p-8 text-left">
                <H3>Other Platforms </H3>
                <ul className="mt-8 space-y-12">
                  {withoutCloudDietFeatures.map((item) => (
                    <li key={item.id} className="flex items-start gap-4">
                      <img
                        src="/Check.png"
                        alt="check"
                        className="mt-1 h-7 w-7 shrink-0"
                      />
                      <div>
                        <H4>{item.title}</H4>
                        <P className="mt-4">{item.desc}</P>
                      </div>
                    </li>
                  ))}
                </ul>
 
              </div>
 
              {/* With CloudDiet */}
              <div
                className="
                relative bg-white animated-card rounded-4xl mx-4 ring-gray-400 shadow-gray-600 my-10 p-6 sm:p-8 text-left
                shadow-2xl
               
                md:-ml-4
              "
              >
                <H3 className="">CloudDiet</H3>
 
                <ul className="mt-8 space-y-12">
                  {cloudDietFeatures.map((item) => (
                    <li key={item.id} className="flex items-start gap-4">
                      <img
                        src="/CheckCircle.png"
                        alt="check"
                        className="mt-1 h-7 w-7 shrink-0"
                      />
                      <div>
                        <H4 className="my-1">{item.title}</H4>
                        <P className="mt-4">{item.desc}</P>
                      </div>
                    </li>
                  ))}
                </ul>
 
              </div>
 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}