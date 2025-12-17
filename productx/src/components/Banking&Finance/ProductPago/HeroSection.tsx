import React, { useState, useRef, useContext, useEffect } from 'react';
// import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { H1, P } from '../../../styles/Typography';
import type { Variants } from 'framer-motion';
import {motion} from 'framer-motion'
 
import { ContactUs } from '../../../styles/Button';
import { ScrollContext } from '../../../context/ScrollContext';
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollableContainerRef = useContext(ScrollContext);

    useEffect(() => {
        // Scroll the ScrollContext container to top
        if (scrollableContainerRef) {
            (scrollableContainerRef as any).scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Fallback to window scroll if ScrollContext not available
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [scrollableContainerRef]);
 
  // Mock images - replace with your actual images
  const images = [
    "/ProductDetailsThree/image67.png",
    "/ProductDetailsThree/image67.png",
    "/ProductDetailsThree/image67.png"
  ];
 
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const slideWidth = container.offsetWidth * 0.8;
    const newSlide = Math.round(container.scrollLeft / slideWidth);
    setCurrentSlide(newSlide);
  };
 
  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const slideWidth = container.offsetWidth * 0.8;
      container.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // --- Framer Motion Animation Variants ---

  // Container for staggered children animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased stagger delay for text/button
        delayChildren: 0.4   // Increased initial delay
      }
    }
  };

  // Text and button animation: slide up and fade in
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  // Image animation: subtle scale and fade
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, // Slightly longer duration for the initial animation
        ease: "easeOut" 
      } 
    }
  };

  // Hover animation for images
  const imageHoverVariants: Variants = {
    hover: { 
      scale: 1.05,        // Scale up slightly
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // More pronounced shadow
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Background 'expansion' animation
  const backgroundCoverVariants: Variants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%", 
      transition: { 
        duration: 1.2, 
        ease: [0.6, 0.01, -0.05, 0.9] as [number, number, number, number] 
      } 
    }
  };

  return (
    <section className="relative   w-full z-30 text-center">
      {/* Top Section Container - Relative for background overlay */}
      <div className="relative w-full">
        {/* Background Overlay for the Expanding Animation */}
        <motion.div
          variants={backgroundCoverVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 bg-blue-600 z-0"
        />

        {/* Top Section Content - Use motion.div for text staggering */}
        <motion.div 
          className="relative pt-10 md:pt-30 lg:pt-20 pb-10   px-4 text-white z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.div variants={itemVariants}>
              <H1 className="font-bold text-white pt-24">
                Lorem ipsum dolor, <br /> consectetur adipiscing elit
              </H1>
            </motion.div>
            <motion.div variants={itemVariants} className="text-white mt-4">
              <P className="text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                 dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit.
              </P>
            </motion.div>
            {/* Centered Button */}
            <motion.div variants={itemVariants} className="mt-8 flex justify-center">
              {/* <button
                className="
                  group 
                  flex items-center justify-center
                  h-12 px-6 py-3
                  rounded-md
                  font-bold
                  text-[14px]
                  border-2 border-[#141414]
                  bg-black text-white
                  shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
                  transition-all duration-300 ease-in-out
                  hover:bg-white hover:text-black
                "
              >
                BOOK A DEMO
                <span className="flex items-center gap-2 ml-2">
                  <span className="relative flex items-center h-5 w-5"> 
                    <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                    <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </span>
                </span>
              </button> */}
              <ContactUs>BOOK A DEMO</ContactUs>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* --- Bottom Image Section (Animations focused here) --- */}
      <div className="w-full  bg-linear-to-b from-transparent via-(--secondary-color) to-(--secondary-color) pb-10 md:pb-20 lg:pb-24">
        
        {/* Mobile Slider (no complex animation for smooth mobile UX) */}
        <div className="lg:hidden mt-6 px-4">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="shrink-0 w-[80vw] snap-center"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          
          
          </div>
         
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>


        {/* Desktop Layout - Framer Motion Integration */}
        <motion.div 
          className="hidden lg:block relative max-w-8xl mx-auto mt-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants} // Use container to stagger image animations
        >
          <div className="relative flex  pt-6 justify-center items-center">
            
            {/* Left Image */}
            <motion.img
        variants={{ ...imageVariants, ...imageHoverVariants }} // <-- Combined variants
        whileHover="hover" 
        custom={-1} 
        src={images[0]}
        alt="Left"
        className="w-60 h-52 lg:w-lg lg:h-80 rounded-lg shadow-md absolute left-1/2 -translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
    />
            
          <motion.img
        variants={{ ...imageVariants, ...imageHoverVariants }} // <-- Combined variants
        whileHover="hover" 
        custom={0}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} 
        src={images[1]}
        alt="Center"
        className="w-80 h-64 lg:w-2xl lg:h-96 rounded-lg shadow-2xl relative z-10"
    />
    
    {/* Right Image - Slightly more delayed */}
    <motion.img
        variants={{ ...imageVariants, ...imageHoverVariants }} // <-- Combined variants
        whileHover="hover" 
        custom={1}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} 
        src={images[2]}
        alt="Right"
        className="w-60 h-52 lg:w-lg lg:h-80 rounded-lg shadow-md absolute right-1/2 translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
    />
          </div>

          
        </motion.div>


       
      </div>
   
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

   
    </section>
  );
};
 
export default HeroSection;