import { useState, useEffect } from "react";

const healthFeatures = [
  {
    id: 1,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    image: "/EHRandPMS/Docter1.png",
  },
  {
    id: 2,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis  ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    image: "/EHRandPMS/Docter2.png",
  },
  {
    id: 3,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis  ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    image: "/EHRandPMS/Docter1.png",
  },
  {
    id: 4,
    date: "8 Sep 2025",
    title: "Sed ut perspiciatis Unde Seduo ut perspiciatis  ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    image: "/EHRandPMS/Docter2.png",
  },
];

const HealthFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 1;
      return 2;
    }
    return 2;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const maxIndex = Math.max(0, healthFeatures.length - cardsPerView);

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#EDE4CA',
        minHeight: '770px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Left background - White */}
      <div className="absolute inset-0 w-full lg:w-5/11 bg-white z-0"></div>
      {/* Right background - Beige */}
      <div className="absolute inset-0 left-auto w-full lg:w-7/10 bg-[#EDE4CA] z-0"></div>

      <div className="container p-6 lg:p-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-top relative z-10">
          {/* Left side - Title and navigation */}
          <div className="lg:col-span-4 relative z-10">
            {/* Title - Updated Typography */}
            <h1
              className="leading-tight mb-6 sm:mb-8"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#166D48',
                maxWidth: '381.61px'
              }}
            >
              Sed ut persp
              <br />
              iciatis Unde Se
            </h1>

            {/* Description - Updated Typography */}
            <p
              className="mb-8 sm:mb-10 leading-relaxed"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#141414',
                maxWidth: '381.61px'
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa
            </p>

            {/* Navigation buttons */}
            <div className="flex gap-4 sm:gap-5 mb-8 lg:mb-0">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center bg-[#FF9A3D] hover:bg-[#FF8C1F] text-white rounded-full transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                aria-label="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="sm:w-7 sm:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center bg-[#FF9A3D] hover:bg-[#FF8C1F] text-white rounded-full transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                aria-label="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="sm:w-7 sm:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Carousel - CENTERED VERTICALLY */}
          <div
            className="lg:col-span-8"
            style={{ overflow: 'visible' }}
          >
            <div
              className="relative"
              style={{
                overflow: 'visible',
                width: '120%',
                maxWidth: 'none',
              }}
            >
              {/* Apply mask that's wider than container */}
              <div
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 0%, black 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 0%, black 100%)',
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                }}
              >
                <div
                  className="flex gap-8 transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex *25}%)`,
                    width: 'max-content',
                  }}
                >
                  {healthFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex-shrink-0"
                      style={{
                        width: '450px',
                        maxWidth: '450px'
                      }}
                    >
                      {/* Your card content here */}
                      <p className="text-xs sm:text-sm font-medium text-[#6B8A7A] mb-3 sm:mb-4 tracking-wide">
                        {feature.date}
                      </p>

                      <h3
                        className="mb-3 sm:mb-4 leading-snug"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: '24px',
                          lineHeight: '100%',
                          color: '#2A2A2A'
                        }}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="mb-5 sm:mb-6 leading-relaxed line-clamp-2"
                        style={{
                          fontFamily: "'Quicksand', sans-serif",
                          fontWeight: 400,
                          fontSize: '18px',
                          color: '#141414'
                        }}
                      >
                        {feature.description}
                      </p>

                      <div
                        className="overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        style={{
                          width: '405px',
                          height: '317.56px',
                          borderRadius: '8px'
                        }}
                      >
                        <img
                          src={feature.image || "/placeholder.svg"}
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
      </div>
    </section>
  );
};

export default HealthFeatures;
