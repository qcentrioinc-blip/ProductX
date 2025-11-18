import React, { useRef, useState, useEffect } from "react";
import { H3 } from "../../../styles/Typography";

const OurWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
const [sectionInView, setSectionInView] = useState(true);



  const [visibleImages, setVisibleImages] = useState<number[]>([0]);  

  const cards = [
    {
      id: 1,
      title: "Route Planning and Research",
      text: "Choose a trail suited to your fitness level, study the terrain, and check the weather. Use maps and online resources for detailed trail information. Proper planning ensures a safe hike.",
      ImageUrl:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Physical Conditioning and Training",
      text: "Build endurance and strength through regular exercise like walking and running. Practice with a loaded backpack. Conditioning reduces injury risk and improves performance.",
      ImageUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Gear Selection and Packing",
      text: "Pack essential gear: backpack, clothing, boots, navigation tools, first aid, food, water, and shelter. Test gear and use a checklist to ensure nothing is forgotten. Proper packing ensures a comfortable hike.",
      ImageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    },
  ];

  useEffect(() => {
    // create observer once
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // We'll build a new set each time from previous (ensures first stays)
        setVisibleImages((prev) => {
          // start with first always visible
          const next = new Set(prev.includes(0) ? prev : [0]);

          entries.forEach((entry) => {
            const target = entry.target as HTMLDivElement;
            const idx = imageRefs.current.findIndex((el) => el === target);
            if (idx === -1) return;

            const ratio = entry.intersectionRatio; // 0..1

            if (ratio >= 0.3) {
              next.add(idx);
            } else {
              // remove if present (but keep index 0)
              if (idx !== 0 && next.has(idx)) next.delete(idx);
            }
          });

          // convert to sorted array
          return Array.from(next).sort((a, b) => a - b);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.3, 0.5, 1],
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
    const obs = observerRef.current;
    if (!obs) return;
    imageRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => {
      if (obs) obs.disconnect();
    };
  }, [imageRefs.current.length]);


  useEffect(() => {
  if (!sectionRef.current) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      setSectionInView(entry.isIntersecting); // true when in view, false when scrolled out
    },
    {
      threshold: 0.3, // adjust sensitivity
    }
  );

  sectionObserver.observe(sectionRef.current);

  return () => sectionObserver.disconnect();
}, []);



  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center bg-gray-50 py-20 px-4"
    >
      <div className="w-full max-w-8xl lg:mx-10">
        {/* Header */}
        <div className="text-left mb-16">
          <H3>
            <span className="text-green-700">Sed ut perspiciatis </span>
            <span className="text-yellow-500">Unde</span>
            <br />
            <span className="text-green-700">Seduo ut perspiciatis</span>
          </H3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Text Column */}
          <div className="w-full lg:w-[45%] relative">
            <div className="sticky top-32">
              {cards.map((card, index) => {
              const isVisible = visibleImages.includes(index) && sectionInView;

                return (
                  <div
                    key={`text-${card.id}`}
                    className="mb-8 transition-all duration-700 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(30px)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                      maxHeight: isVisible ? "500px" : "0px",
                      overflow: "hidden",
                    }}
                  >
                    <H3 className="text-2xl font-semibold text-gray-800 mb-4 leading-snug">
                      {card.title}
                    </H3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Column - stacked */}
          <div className="w-full lg:w-[50%] relative">
            {cards.map((card, index) => (
              <div
                key={`image-${card.id}`}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="sticky rounded-xl overflow-hidden shadow-lg mb-[700px] bg-white"
                style={{
                  top: `${120 + index * 100}px`,
                  marginLeft: `${index * 30}px`,
                  width: `calc(100% - ${index * 30}px)`,
                  height: "500px",
                  zIndex: index + 1,
                }}
              >
                <img
                  src={card.ImageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* spacer to allow scroll */}
            <div className="h-[1000px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
