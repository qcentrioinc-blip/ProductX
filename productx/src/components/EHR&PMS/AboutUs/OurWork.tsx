import   { useRef, useState, useEffect } from "react";
import { H2, H4, P } from "../../../styles/Typography";

const OurWork = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionInView, setSectionInView] = useState(true);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const cards = [
    {
      id: 1,
      title: "Duis aute irure dolor in reprehenderit in ",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure ",
      ImageUrl: "/EHR-PMS/Blogs/img1.png",
    },
    {
      id: 2,
      title: "Duis aute irure dolor in reprehenderit in ",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure ",
      ImageUrl: "/EHR-PMS/Blogs/img2.png",
    },
    {
      id: 3,
      title: "Duis aute irure dolor in reprehenderit in ",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure ",
      ImageUrl: "/EHR-PMS/Blogs/img3.png",
    },
  ];

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleImages((prev) => {
          const next = new Set(prev);

          entries.forEach((entry) => {
            const target = entry.target;
            const idx = imageRefs.current.findIndex((el) => el === target);
            if (idx === -1) return;

            const ratio = entry.intersectionRatio;

            // Add when intersecting significantly
            if (ratio >= 0.25) {
              next.add(idx);
            } else {
              // Remove ALL indices when they leave viewport (no special case for index 0)
              if (next.has(idx)) next.delete(idx);
            }
          });

          return Array.from(next).sort((a, b) => a - b);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    imageRefs.current.forEach((el) => {
      if (el && observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setSectionInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    sectionObserver.observe(sectionRef.current);

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
  ref={containerRef}
  className="flex flex-col items-center justify-center py-20 px-4 relative bg-gray-50"
>
  {/* Background ClipPath Image */}
  <img
    src="/AboutUs/EHRClipPath.png"
    alt="background shape"
    className="
      absolute top-0 left-0 
      w-full opacity-20 
      pointer-events-none select-none 
      z-1
    "
  />
      <div ref={sectionRef} className="w-full max-w-8xl px-2">
        {/* Header */}
        <div className="text-left mb-16 lg:mx-10 ">
          <H2 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-700">Sed ut perspiciatis </span>
            <span className="text-yellow-500">Unde</span>
            <br />
            <span className="text-green-700">Seduo ut perspiciatis</span>
          </H2>
        </div>

        <div className="flex flex-col z-20  lg:flex-row gap-20 lg:gap-16 relative lg:px-10">
          {/* Text Column */}
          <div className="w-full lg:w-[45%]  relative">
            <div className="lg:sticky lg:top-24 space-y-12">
              {cards.map((card, index) => {
                const isVisible = visibleImages.includes(index) && sectionInView;

                return (
                  <div
                    key={`text-${card.id}`}
                    className=" transition-all duration-700 ease-in-out
    bg-gray-100 rounded-sm p-6 shadow-md"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      maxHeight: isVisible ? "500px" : "100px",
                      overflow: "hidden",
                    }}
                  >
                    <H4 className="text-2xl font-semibold my-4 leading-snug text-gray-800">
                      {card.title}
                    </H4>
                    <P className=" lg:pr-10  leading-relaxed">
                      {card.text}
                    </P>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Column - stacked */}
         <div className="w-full lg:w-[60%] relative">
  {cards.map((card, index) => (
    <div
      key={`image-${card.id}`}
      ref={(el) => {
        imageRefs.current[index] = el;
      }}
      className="sticky rounded-xl overflow-hidden shadow-2xl bg-white transition-all duration-500 ease-out"
      style={{
        top: `${100 + index * 60}px`,
        marginLeft: `${index * 20}px`,
        width: `calc(100% - ${index * 20}px)`,
        zIndex: index + 1,
      }}
    >
      <img
        src={card.ImageUrl}
        alt={card.title}
        className="
          w-full
          h-[220px]       
          sm:h-[280px]    
          md:h-[350px]   
          lg:h-[450px]    
          object-cover
          transition-transform duration-700 ease-out hover:scale-105
        "
      />
    </div>
  ))}

  <div className="h-[200px]" />
</div>

        </div>
      </div>
    </div>
  );
};

export default OurWork;