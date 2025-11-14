import { useState, useEffect } from "react";
// import { H1, H3, P } from "../../../styles/Typography";

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
  const [currentIndex, setCurrentIndex] = useState(0)

  // Dynamic cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1 // Mobile
      if (window.innerWidth < 1024) return 1 // Tablet
      return 2 // Desktop
    }
    return 2
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
  const maxIndex = Math.max(0, healthFeatures.length - cardsPerView)

  // Update cards per view on window resize
  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Left background - White */}
      <div className="absolute inset-0 w-full lg:w-5/11 bg-white z-0"></div>
      {/* Right background - Beige */}
      <div className="absolute inset-0 left-auto w-full lg:w-7/10 bg-[#E8DCC8] z-0"></div>

      {/* Wave decoration - top right */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none z-0 hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,20 Q150,40 150,100 T100,180 T50,100 T100,20 Z" fill="#0F5A47" />
        </svg>
      </div>

      <div className="container p-6 lg:p-12  relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          {/* Left side - Title and navigation */}
          <div className="lg:col-span-4 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F5A47] leading-tight mb-6 sm:mb-8">
              Sed ut persp
              <br />
              iciatis Unde Se
            </h1>
            <p className="text-sm sm:text-base text-[#6B8A7A] mb-8 sm:mb-10 max-w-md leading-relaxed">
              Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occa
            </p>

            {/* Navigation buttons - ORANGE/GOLDEN */}
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

          {/* Right side - Carousel */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <div
                className="flex gap-8 lg:gap-16 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView + 4)}%)`,
                }}
              >
                {healthFeatures.map((feature) => (
                  <div key={feature.id} className="flex-shrink-0 w-full sm:w-full lg:w-[calc(50%-0.75rem)]">
                    <p className="text-xs sm:text-sm font-medium text-[#6B8A7A] mb-3 sm:mb-4 tracking-wide">
                      {feature.date}
                    </p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0F5A47] mb-3 sm:mb-4 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B8A7A] mb-5 sm:mb-6 leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>
                    <div className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
    </section>
  )
}

export default HealthFeatures
