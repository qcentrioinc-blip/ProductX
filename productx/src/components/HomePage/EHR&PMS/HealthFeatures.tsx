import { useState, useEffect } from "react";
import { H1, H3, P } from "../../../styles/Typography";

const healthFeatures = [
  {
    id: 1,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis",
    description: "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa",
    image: "/Products/healthcare-1.jpg",
  },
  {
    id: 2,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis",
    description: "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec",
    image: "/Products/healthcare-1.jpg",
  },
  {
    id: 3,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis",
    description: "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa",
    image: "/Products/healthcare-1.jpg",
  },
  {
    id: 4,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis",
    description: "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec",
    image: "/Products/healthcare-1.jpg",
  },
];

const HealthFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Dynamic cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 1; // Tablet
      return 2; // Desktop
    }
    return 2;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const maxIndex = Math.max(0, healthFeatures.length - cardsPerView);

  // Update cards per view on window resize
  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="relative min-h-screen bg-[#E8F5F1] overflow-hidden">
      {/* Wave decoration - bottom left */}
      <img
        src="/Products/wave-decoration.png"
        alt="wave-decoration"
        className="absolute top-80 left-0 w-1/2 max-w-md opacity-80 pointer-events-none z-0 hidden md:block"
      />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left side - Title and navigation */}
          <div className="lg:col-span-4 relative z-10">
            <H1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F5A47] leading-tight mb-4 sm:mb-6">
              Sed ut persp<br />iciatis Unde Se
            </H1>
            <P className="text-sm sm:text-base text-[#4A7565] mb-6 sm:mb-8 max-w-md">
              Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa
            </P>

            {/* Navigation buttons */}
            <div className="flex gap-3 sm:gap-4 mb-8 lg:mb-0">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-[#C8E6DE] text-[#0F5A47] rounded-full hover:bg-[#A5D9CC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-[#C8E6DE] text-[#0F5A47] rounded-full hover:bg-[#A5D9CC] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <div
                className="flex gap-4 sm:gap-6 lg:gap-10 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView + (cardsPerView === 1 ? 4 : 4))}%)`,
                }}
              >
                {healthFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex-shrink-0 w-full sm:w-full lg:w-[calc(50%-0px)]"
                  >
                    <P className="text-xs sm:text-sm text-[#4A7565] mb-3 sm:mb-4">{feature.date}</P>
                    <H3 className="text-lg sm:text-xl font-semibold text-[#0F5A47] mb-3 sm:mb-4 leading-snug">
                      {feature.title}
                    </H3>
                    <P className="text-xs sm:text-sm text-[#4A7565] mb-4 sm:mb-6 leading-relaxed">
                      {feature.description}
                    </P>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthFeatures;
