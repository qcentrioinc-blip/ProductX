import { useEffect, useRef, useState } from "react";

export default function StickyBackgroundSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Scroll progress through section
      const progress =
        (viewportHeight - rect.top) / (rect.height + viewportHeight);

      const clamped = Math.min(Math.max(progress, 0), 1);

      // Fade out near the end
      setOpacity(1 - clamped);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[250vh]">
      
      {/* Sticky background image */}
      <div className="sticky top-0 h-screen w-full ">
        <img
          src="/EHR-PMS/EHRFIX.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity, transition: "opacity 0.2s linear" }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10  -mt-[100vh]">
        {children}
      </div>

    </section>
  );
}
