"use client"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSlides = 4 // 0: Landing, 1: Banking, 2: EHS, 3: High Tech

  const sectorsData = [
    {
      id: 1,
      name: "Banking",
      image: "/LandingPage/Landing1.png",
      backgroundImage: "/LandingPage/Landing1.png",
      buttonText: "VIEW BANKING SOLUTIONS",
    },
    {
      id: 2,
      name: "EHS and PMS",
      image: "/LandingPage/Landing2.png",
      backgroundImage: "/LandingPage/Landing2.png",
      buttonText: "VIEW EHS AND PMS SOLUTIONS",
    },
    {
      id: 3,
      name: "High Tech",
      image: "/LandingPage/Landing3.png",
      backgroundImage: "/LandingPage/Landing3.png",
      buttonText: "VIEW HIGH TECH SOLUTIONS",
    },
  ]

  const getCurrentBackgroundImage = () => {
    if (currentSlide === 0) {
      return "/LandingPage/Landing0.png"
    } else {
      return sectorsData[currentSlide - 1].backgroundImage
    }
  }

  const getCurrentButtonText = () => {
    if (currentSlide === 0) {
      return "EXPLORE OUR SOLUTIONS"
    } else {
      return sectorsData[currentSlide - 1].buttonText
    }
  }

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
      }, 200)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1)
      }, 200)
    }
  }

  const handleSectorClick = (sectorIndex: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(sectorIndex + 1)
      }, 200)
    }
  }

  const handleDotClick = (slideIndex: number) => {
    if (!isTransitioning && slideIndex !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(slideIndex)
      }, 200)
    }
  }

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentSlide, isTransitioning])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with smoother transitions */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${getCurrentBackgroundImage()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: isTransitioning ? 0.3 : 1,
          transform: isTransitioning ? "scale(1.05)" : "scale(1)",
          filter: isTransitioning ? "blur(2px)" : "blur(0px)",
          transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)"
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content with fade transitions */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateY(40px)" : "translateY(0)",
                  transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
                  transitionDelay: isTransitioning ? "0s" : "0.3s"
                }}
              >
                Shaping the Future
                <br />
                <span className="block">Across Every Sector.</span>
              </h1>

              <button 
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-300 group mb-6 md:mb-8"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateY(30px)" : "translateY(0)",
                  transition: "all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
                  transitionDelay: isTransitioning ? "0s" : "0.4s"
                }}
              >
                <span className="hidden sm:inline">{getCurrentButtonText()}</span>
                <span className="sm:hidden">EXPLORE SOLUTIONS</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>

              {/* Navigation Arrows - Only show on larger screens */}
              <div 
                className="hidden md:flex gap-4"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                  transition: "all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
                  transitionDelay: isTransitioning ? "0s" : "0.5s"
                }}
              >
                <button
                  onClick={handlePrevSlide}
                  disabled={currentSlide === 0 || isTransitioning}
                  className={`w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
                    currentSlide === 0 || isTransitioning 
                      ? "opacity-40 cursor-not-allowed" 
                      : "hover:bg-white/10 hover:border-white/60"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={handleNextSlide}
                  disabled={currentSlide === totalSlides - 1 || isTransitioning}
                  className={`w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
                    currentSlide === totalSlides - 1 || isTransitioning
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-white/10 hover:border-white/60"
                  }`}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="border-t border-white/20 bg-black/20 backdrop-blur-sm"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "translateY(30px)" : "translateY(0)",
            transition: "all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
            transitionDelay: isTransitioning ? "0s" : "0.6s"
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
            {/* Mobile Layout */}
            <div className="block md:hidden">
              <div className="flex flex-col items-center space-y-4">
                {/* Mobile Navigation Arrows */}
                <div className="flex gap-4 order-1">
                  <button
                    onClick={handlePrevSlide}
                    disabled={currentSlide === 0 || isTransitioning}
                    className={`w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
                      currentSlide === 0 || isTransitioning 
                        ? "opacity-40 cursor-not-allowed" 
                        : "hover:bg-white/10 hover:border-white/60"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    disabled={currentSlide === totalSlides - 1 || isTransitioning}
                    className={`w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
                      currentSlide === totalSlides - 1 || isTransitioning
                        ? "opacity-40 cursor-not-allowed"
                        : "hover:bg-white/10 hover:border-white/60"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Mobile Counter and Dots */}
                <div className="flex flex-col items-center space-y-3 order-2">
                  <div className="text-2xl font-bold text-white">
                    {String(currentSlide).padStart(2, "0")}
                  </div>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        disabled={isTransitioning}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? "bg-blue-500" 
                            : "bg-white/30 hover:bg-white/50"
                        } ${isTransitioning ? "cursor-not-allowed" : ""}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile Sectors - Horizontal Scroll */}
                <div className="w-full overflow-x-auto order-3">
                  <div className="flex gap-4 pb-2 px-2" style={{ width: 'max-content' }}>
                    {sectorsData.map((sector, index) => (
                      <div
                        key={sector.id}
                        className={`group flex-shrink-0 ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}`}
                        onClick={() => !isTransitioning && handleSectorClick(index)}
                      >
                        <div className="text-center">
                          <p className="text-white/80 text-xs font-medium mb-2 whitespace-nowrap">{sector.name}</p>
                          <div
                            className={`w-20 h-12 sm:w-24 sm:h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                              currentSlide === index + 1 ? "ring-2 ring-blue-500" : ""
                            }`}
                          >
                            <img
                              src={sector.image || "/placeholder.svg"}
                              alt={sector.name}
                              className={`w-full h-full object-cover transition-transform duration-300 ${
                                !isTransitioning ? "group-hover:scale-105" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-start gap-8 lg:gap-12">
              {/* Left side - Slide Counter and Dots */}
              <div className="flex flex-col items-start">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {String(currentSlide).padStart(2, "0")}
                </div>

                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      disabled={isTransitioning}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? "bg-blue-500" 
                          : "bg-white/30 hover:bg-white/50"
                      } ${isTransitioning ? "cursor-not-allowed" : ""}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right side - Sectors Row */}
              <div className="flex-1">
                <div className="flex gap-6 lg:gap-8 justify-start">
                  {sectorsData.map((sector, index) => (
                    <div
                      key={sector.id}
                      className={`group ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}`}
                      onClick={() => !isTransitioning && handleSectorClick(index)}
                    >
                      <div className="mb-3">
                        <p className="text-white/80 text-sm font-medium mb-2">{sector.name}</p>
                        <div
                          className={`w-24 h-16 lg:w-32 lg:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                            currentSlide === index + 1 ? "ring-2 ring-blue-500" : ""
                          }`}
                        >
                          <img
                            src={sector.image || "/placeholder.svg"}
                            alt={sector.name}
                            className={`w-full h-full object-cover transition-transform duration-300 ${
                              !isTransitioning ? "group-hover:scale-105" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
