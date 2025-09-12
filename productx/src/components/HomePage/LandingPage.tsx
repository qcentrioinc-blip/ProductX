"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [bgTransition, setBgTransition] = useState(false)
  const totalSlides = 4 // 0: Landing, 1: Banking, 2: EHS, 3: High Tech

  const sectorsData = [
    {
      id: 1,
      name: "Banking",
      image: "/LandingPage/Landing1.png", // Updated to use correct image path
      backgroundImage: "/LandingPage/Landing1.png", // Updated to use correct image path
      buttonText: "VIEW BANKING SOLUTIONS",
    },
    {
      id: 2,
      name: "EHS and PMS",
      image: "/LandingPage/Landing2.png", // Updated to use correct image path
      backgroundImage: "/LandingPage/Landing2.png", // Updated to use correct image path
      buttonText: "VIEW EHS AND PMS SOLUTIONS",
    },
    {
      id: 3,
      name: "High Tech",
      image: "/LandingPage/Landing3.png", // Updated to use correct image path
      backgroundImage: "/LandingPage/Landing3.png", // Updated to use correct image path
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
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleSectorClick = (sectorIndex: number) => {
    setCurrentSlide(sectorIndex + 1) // +1 because slide 0 is the main landing
  }

  useEffect(() => {
  setBgTransition(true)
  const timer = setTimeout(() => setBgTransition(false), 300)
  return () => clearTimeout(timer)
}, [currentSlide])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out"
        style={{
          backgroundImage: `url(${getCurrentBackgroundImage()})`, // Fixed duplicate backgroundImage property
          backgroundSize: "cover    ",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: bgTransition ? 0 : 1, // Fade effect
          transform: bgTransition ? "translateX(50px)" : "translateX(0)", // Slide effect
          transition: "opacity 0.5s, transform 0.5s"
        }}
      >
        {/* Fallback gradient if image doesn't load */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-700 to-purple-900"></div> */}
      </div>

      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-screen">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className={`text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 transition-all duration-500`}
                style={{
                  opacity: bgTransition ? 0 : 1,
                  transform: bgTransition ? "translateY(30px)" : "translateY(0)",
                  transition: "opacity 0.5s, transform 0.5s"
                }}
              >
                Shaping the Future
                <br />
                Across Every Sector.
              </h1>

              <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-300 group mb-8">
                {getCurrentButtonText()}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>

              {/* Navigation Arrows - Positioned below the button */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrevSlide}
                  disabled={currentSlide === 0}
                  className={`w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${currentSlide === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-white/10 hover:border-white/60"
                    }`}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={handleNextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className={`w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${currentSlide === totalSlides - 1
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
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 lg:px-8 py-8">
            <div className="flex items-start gap-12">
              {/* Left side - Slide Counter and Dots */}
              <div className="flex flex-col items-start">
                <div className="text-4xl font-bold text-white mb-4">{String(currentSlide).padStart(2, "0")}</div>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-blue-500" : "bg-white/30 hover:bg-white/50"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right side - Sectors Row */}
              <div className="flex-1">
                <div className="flex gap-8 justify-start">
                  {sectorsData.map((sector, index) => (
                    <div
                      key={sector.id}
                      className="group cursor-pointer"
                      onClick={() => handleSectorClick(index)} // Added click handler to show sector background
                    >
                      <div className="mb-3">
                        <p className="text-white/80 text-sm font-medium mb-2">{sector.name}</p>
                        <div
                          className={`w-32 h-20 rounded-lg overflow-hidden transition-all duration-300 ${currentSlide === index + 1 ? "ring-2 ring-blue-500" : ""
                            }`}
                        >
                          {" "}
                          <img
                            src={sector.image || "/placeholder.svg"}
                            alt={sector.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

export default LandingPage
