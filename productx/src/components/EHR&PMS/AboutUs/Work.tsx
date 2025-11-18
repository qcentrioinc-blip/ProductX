import React, { useState, useEffect, useRef } from 'react';

// Images array with placeholder sources (replace with your actual image paths)
const IMAGE_SOURCES = [
  'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&q=80&fit=crop&auto=format', // Main image (Visible by default)
  'https://images.unsplash.com/photo-1504285870094-aa2ab125e171?w=800&h=600&q=80&fit=crop&auto=format', // Stacked image 2
  'https://images.unsplash.com/photo-1517594422361-5eab2be77ce7?w=800&h=600&q=80&fit=crop&auto=format', // Stacked image 3
];

interface SectionProps {
  title: string;
  content: string;
}

const HikingSection: React.FC<SectionProps> = ({ title, content }) => (
  <div className="mb-10 max-w-lg md:max-w-xl">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-2 md:text-4xl">
      {title}
    </h2>
    <p className="text-lg leading-relaxed text-gray-600">
      {content}
    </p>
  </div>
);

const Work: React.FC = () => {
  // Array to hold the scroll progress for each image (0 to 1)
  const [scrollProgress, setScrollProgress] = useState([0, 0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: 'Route Planning and Research',
      content: 'Choose a trail suited to your fitness level, study the terrain, and check the weather. Use maps and online resources for detailed trail information. Proper planning ensures a safe hike.',
    },
    {
      title: 'Physical Conditioning and Training',
      content: 'Build endurance and strength through regular exercise like walking and running. Practice with a loaded backpack. Conditioning reduces injury risk and improves performance.',
    },
    {
      title: 'Gear Selection and Packing',
      content: 'Pack essential gear: backpack, clothing, boots, navigation tools, first aid, food, water, and shelter. Test gear and use a checklist to ensure nothing is forgotten. Proper packing ensures a comfortable hike.',
    },
  ];

  // Logic for tracking scroll position and calculating progress for opacity/transform
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const elementRect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Calculate the document scroll position where the component starts
      const componentStartScroll = scrollY + elementRect.top;
      const windowHeight = window.innerHeight;

      const newProgress: number[] = [];
      const animationRange = 400; // Each animation step takes 400px of scroll

      sections.forEach((_, index) => {
        // Stagger the starting point for each image's animation
        // Animation starts when scroll passes the component's top + (index * 250px)
        const startPoint = componentStartScroll + (index * 250) - (windowHeight * 0.5); 
        const endPoint = startPoint + animationRange;

        let progress = 0;
        if (scrollY > startPoint) {
          progress = Math.min(1, (scrollY - startPoint) / (endPoint - startPoint));
        }
        
        // Ensure the first image's progress is always 1 for immediate visibility
        if (index === 0) {
            progress = 1;
        }
        newProgress.push(progress);
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  // Helper function to get dynamic styles for images based on scroll progress
  const getImageStyle = (index: number) => {
    const progress = scrollProgress[index] || 0;
    
    // Opacity fades in from 0 to 1
    const opacity = progress;

    // Stacking offset and Parallax effect
    // Images stack slightly offset from each other.
    const verticalOffset = index * 20; // 0px, 20px, 40px static stack offset
    const translateY = verticalOffset + (1 - progress) * 80; // Parallax movement (moves up 80px as progress goes from 0 to 1)

    return {
      opacity: opacity,
      // Use CSS variables for a smoother transformation if possible, but inline will work
      transform: `translateY(${translateY}px) scale(1)`, 
      zIndex: 10 - index, // Ensure higher index images stack on top of lower ones
      transition: 'opacity 0.2s, transform 0.2s', // Smoother updates
    };
  };

  return (
    <div
      ref={containerRef}
      // Added min-h-[200vh] to force scrolling and make the effect work properly
      className="bg-neutral-50 py-16 px-4 md:py-24 max-w-8xl lg:mx-10 rounded-lg min-h-[200vh]"
    >
      {/* Main Content Grid: Text on left, Images on right (reverses on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mx-auto">
        
        {/* === Left Column: Text Content (Sticky) === */}
        <div className="lg:sticky lg:top-16 pt-4 space-y-12">
          {sections.map((section, index) => (
            <HikingSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>

        {/* === Right Column: Image Stacking Area (Relative container for absolute images) === */}
        <div className="relative min-h-[150vh] flex justify-center lg:pt-0 pt-16">
          {IMAGE_SOURCES.map((src, index) => (
            <div
              key={index}
              // Set all images to the same top position (0) to allow transform to control stacking
              className={`absolute top-0 w-full max-w-lg shadow-2xl rounded-xl overflow-hidden`}
              style={{
                ...getImageStyle(index),
              }}
            >
              <img
                src={src}
                alt={`Hiking Scene ${index + 1}`}
                className="w-full h-auto object-cover min-h-[500px]"
                // Fallback using placeholder color on error
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.backgroundColor = '#ccc';
                  e.currentTarget.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Transparent 1x1 GIF
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;