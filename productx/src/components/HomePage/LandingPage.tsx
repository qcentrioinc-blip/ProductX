"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false)

  // ✅ Detect screen size and update on resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const BackgroundSlider = ({ currentImage }: { currentImage: string }) => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 1, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
      </AnimatePresence>
    )
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSlides = 4

  const sectorsData = [
    {
      id: 1,
      name: "Banking",
      image: "/LandingPage/Landing1.png",
      backgroundImage: "/LandingPage/Landing1.png",
      buttonText: "VIEW BANKING SOLUTIONS",
      title: "Transforming Financial Services",
      subtitle: "With Innovative Banking Solutions"
    },
    {
      id: 2,
      name: "EHS and PMS",
      image: "/LandingPage/Landing2.png",
      backgroundImage: "/LandingPage/Landing2.png",
      buttonText: "VIEW EHS AND PMS SOLUTIONS",
      title: "Environmental Excellence",
      subtitle: "Through Smart EHS & PMS Solutions"
    },
    {
      id: 3,
      name: "High Tech",
      image: "/LandingPage/Landing3.png",
      backgroundImage: "/LandingPage/Landing3.png",
      buttonText: "VIEW HIGH TECH SOLUTIONS",
      title: "Driving Technology Forward",
      subtitle: "With Cutting-Edge High-Tech Solutions"
    }
  ]

  const getCurrentBackgroundImage = () =>
    currentSlide === 0
      ? "/LandingPage/Landing0.png"
      : sectorsData[currentSlide - 1].backgroundImage

  const getCurrentButtonText = () =>
    currentSlide === 0
      ? "EXPLORE OUR SOLUTIONS"
      : sectorsData[currentSlide - 1].buttonText

  const getCurrentTitle = () =>
    currentSlide === 0
      ? { title: "Shaping the Future", subtitle: "Across Every Sector." }
      : {
          title: sectorsData[currentSlide - 1].title,
          subtitle: sectorsData[currentSlide - 1].subtitle
        }

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
        setIsTransitioning(false)
      }, 100)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1)
        setIsTransitioning(false)
      }, 100)
    }
  }

  const handleSectorClick = (sectorIndex: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(sectorIndex + 1)
        setIsTransitioning(false)
      }, 100)
    }
  }

  const handleDotClick = (slideIndex: number) => {
    if (!isTransitioning && slideIndex !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(slideIndex)
        setIsTransitioning(false)
      }, 100)
    }
  }

  const currentTitleData = getCurrentTitle()

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundSlider currentImage={getCurrentBackgroundImage()} />
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Shared Top Section (Title + Button + Arrows on desktop) */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6  hidden md:block lg:px-8">
            <div className="max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTitleData.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 md:mb-8"
                >
                  {currentTitleData.title}
                  <br />
                  <motion.span
                    key={currentTitleData.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="block"
                  >
                    {currentTitleData.subtitle}
                  </motion.span>
                </motion.h1>
              </AnimatePresence>

              <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-300 group mb-6 md:mb-8">
                <span className="hidden sm:inline">{getCurrentButtonText()}</span>
                <span className="sm:hidden">EXPLORE SOLUTIONS</span>
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

              {!isMobile && (
                <div className="flex px-4 sm:px-2  lg:px-8 gap-4">
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
              )}
        {/* ✅ Responsive Bottom Section */}
        <div className=" border-white/20 bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
            {isMobile ? (
              // --------- Mobile Layout ---------
<div className="flex flex-col justify-start">
  {/* Title + Subtitle + Button */}
  <div className="text-center mb-6">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTitleData.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
          {currentTitleData.title}
          <br />
          <span className="block text-white/90">
            {currentTitleData.subtitle}
          </span>
        </h1>
        <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-300 group">
          CONTACT US
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Sector Cards with Arrows */}
  <div className="relative">
    {/* Left Arrow */}
    <button
      onClick={handlePrevSlide}
      disabled={currentSlide === 0 || isTransitioning}
      className={`absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center ${
        currentSlide === 0 || isTransitioning
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-white/20"
      }`}
    >
      <ChevronLeft className="w-4 h-4 text-white" />
    </button>

  {/* Scrollable Sectors */}
<div className="flex gap-4  overflow-x-auto scrollbar-hide py-4">
  {sectorsData.map((sector, index) => (
    <div
      key={sector.id}
      className={`flex-shrink-0 cursor-pointer ${
        currentSlide === index + 1 ? "" : ""
      }`}
      onClick={() => !isTransitioning && handleSectorClick(index)}
      style={{
        width: index < 2 ? "160px" : "30vw", 
        height: "96px",
        borderRadius: "0.5rem"
      }}
    >
      <p className="text-center text-white mt-2 text-sm">{sector.name}</p>
      <img
        src={sector.image || "/placeholder.svg"}
        alt={sector.name}
        className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
      />
      
    </div>
  ))}
</div>


    {/* Right Arrow */}
    <button
      onClick={handleNextSlide}
      disabled={currentSlide === totalSlides - 1 || isTransitioning}
      className={`absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center ${
        currentSlide === totalSlides - 1 || isTransitioning
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-white/20"
      }`}
    >
      <ChevronRight className="w-4 h-4 text-white" />
    </button>
  </div>

  {/* Dots */}
  <div className="flex justify-center gap-2 mt-6">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => handleDotClick(index)}
        disabled={isTransitioning}
        className={`w-2.5 h-2.5 rounded-full ${
          index === currentSlide ? "bg-blue-500" : "bg-white/30 hover:bg-white/50"
        } ${isTransitioning ? "cursor-not-allowed" : ""}`}
      />
    ))}
  </div>
</div>

            ) : (
              // --------- Desktop Layout ----------
              <div className="flex items-start gap-8 lg:gap-12">
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

                <div className="flex-1">
                  <div className="flex gap-6 lg:gap-8 justify-start">
                    {sectorsData.map((sector, index) => (
                      <div
                        key={sector.id}
                        className={`group ${
                          isTransitioning ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                        onClick={() => !isTransitioning && handleSectorClick(index)}
                      >
                        <div className="mb-3">
                          <p className="text-white/80 text-sm font-medium mb-2">
                            {sector.name}
                          </p>
                          <div
                            className={`w-24 h-16 lg:w-32 lg:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                              currentSlide === index + 1 ? "ring-2 ring-blue-500" : ""
                            }`}
                          >
                            <img
                              src={sector.image || "/placeholder.svg"}
                              alt={sector.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
