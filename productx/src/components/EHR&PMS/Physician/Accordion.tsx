import { useState, useEffect, useRef } from 'react';
import { H3, P } from '../../../styles/Typography';

interface AccordionItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "Duis aute irure",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in ",
      image: "/Physician/AccordionImage1.svg"
    },
    {
      id: 2,
      title: "Duis aute irure",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in ",
      image: "/Physician/AccordionImage2.svg"
    },
    {
      id: 3,
      title: "Duis aute irure",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in ",
      image: "/Physician/AccordionImage3.svg"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const windowHeight = window.innerHeight;
      const scrollTriggerPoint = windowHeight / 2;

      // Only activate scroll behavior on desktop/tablet
      if (window.innerWidth >= 768) {
        let closestIndex = 0;
        let closestDistance = Infinity;

        itemRefs.current.forEach((item, index) => {
          if (item) {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(itemCenter - scrollTriggerPoint);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        });

        setActiveIndex(closestIndex);
      }
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-stone-100 py-16 px-4 sm:px-6">
      <div className="max-w-8xl xl:mx-10"> 
        
        {/* Desktop & Tablet Layout - Sticky Scroll Wrapper */}
        <div
          className="relative h-auto md:h-[calc(var(--accordion-height))] hidden md:block"
          style={
            {
              "--accordion-height": `${accordionData.length * 100}vh`,
            } as React.CSSProperties
          }
        >
          {/* STICKY CONTENT */}
          <div className="md:sticky md:top-0 md:h-screen flex items-center">
            <div ref={containerRef} className="grid md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16 w-full">
        
              {/* Left Side - Scrollable Content */}
              <div className="space-y-20 lg:space-y-20 py-12">
                {accordionData.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      if (el) itemRefs.current[index] = el;
                    }}
                    className={`transition-all duration-700 ease-out ${
                      activeIndex === index 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-30 translate-y-4 scale-95'
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Title with Arrow */}
                      <div className="flex items-center gap-3 group cursor-pointer">
                        <H3 className={`text-2xl lg:text-3xl font-semibold transition-colors duration-500 ${
                          activeIndex === index ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {item.title}
                        </H3>
                        <span className={`text-2xl transition-all duration-500 ${
                          activeIndex === index 
                            ? 'text-gray-900 opacity-100 group-hover:translate-x-2' 
                            : 'text-gray-500 opacity-0'
                        }`}>
                          →
                        </span>
                      </div>

                      {/* Description */}
                      <div className={`transition-all duration-700 ease-in-out ${
                        activeIndex === index 
                          ? 'max-h-96 opacity-100 translate-y-0' 
                          : 'max-h-0 opacity-0 translate-y-4 overflow-hidden'
                      }`}>
                        <P className="text-gray-700 leading-relaxed mb-4 transition-all duration-500">
                          {item.description}
                        </P>
                        <P className="text-gray-600 leading-relaxed transition-all duration-500">
                          {item.description}
                        </P>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        
              {/* Right Side - Image Container (stays in place) */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full h-[400px] xl:h-[600px]">
                  <div className="relative w-full h-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                    {accordionData.map((item) => (
                      <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                          accordionData.indexOf(item) === activeIndex 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-105'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
        
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {accordionData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-64 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title with Arrow */}
                <div className="flex items-center gap-3">
                  <H3 className="text-xl font-semibold">
                    {item.title}
                  </H3>
                  <span className="text-xl">→</span>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <P className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </P>
                  <P className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </P>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Accordion;