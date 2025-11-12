import { useRef, useState, useEffect } from "react";

 import {H3 } from "../../../styles/Typography";
const OurWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([0]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((imgRef, index) => {
        if (imgRef) {
          const rect = imgRef.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Check if image is 10% visible from bottom
          const visiblePercentage = (windowHeight - rect.top) / rect.height;
          
          if (visiblePercentage >= 0.1 && !visibleCards.includes(index)) {
            setVisibleCards(prev => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  const cards = [
    {
      id: 1,
      title: "Route Planning and Research",
      text: "Choose a trail suited to your fitness level, study the terrain, and check the weather. Use maps and online resources for detailed trail information. Proper planning ensures a safe hike.",
      ImageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Physical Conditioning and Training",
      text: "Build endurance and strength through regular exercise like walking and running. Practice with a loaded backpack. Conditioning reduces injury risk and improves performance.",
      ImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Gear Selection and Packing",
      text: "Pack essential gear: backpack, clothing, boots, navigation tools, first aid, food, water, and shelter. Test gear and use a checklist to ensure nothing is forgotten. Proper packing ensures a comfortable hike.",
      ImageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center bg-gray-50 py-20 px-6 lg:px-12"
    >
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-left mb-16">
          <H3 className="text-3xl sm:text-4xl font-semibold leading-snug">
            <span className="text-green-700">Sed ut perspiciatis </span>
            <span className="text-yellow-500">Unde</span>
            <br />
            <span className="text-green-700">Seduo ut perspiciatis</span>
          </H3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Text Column - Left Side */}
        <div className="w-full lg:w-[45%] relative">
  {cards.map((card, index) => (
    <div
      key={`text-${card.id}`}
      className="p-8   transition-all duration-1000 ease-out"
      style={{ 
        
        transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(20px)',
      }}
    >

                <H3 className="text-sm  font-semibold text-gray-800 mb-4 leading-snug">
                  {card.title}
                </H3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
            {/* Spacer to allow last card to be visible */}
            <div className="h-[300px]"></div>
          </div>


          {/* Image Column - Right Side */}
          <div className="w-full lg:w-[50%] relative">
            {cards.map((card, index) => (
              <div
                key={`image-${card.id}`}
                ref={(el) => { imageRefs.current[index] = el; }}
                className="sticky rounded-xl overflow-hidden shadow-lg mb-32"
                style={{ 
                  top: `${120 + index * 100}px`,
                  marginLeft: `${index * 30}px`,
                  width: `calc(100% - ${index * 30}px)`,
                  height: '500px',
                  zIndex: index + 1
                }}
              >
                <img 
                  src={card.ImageUrl} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Spacer to allow last image to be visible */}
            <div className="h-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;