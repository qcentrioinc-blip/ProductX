'use client'

import { useRef, useContext } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';

const TextAnimation = () => {
  const containerRef = useRef(null);
  const scrollContext = useContext(ScrollContext);

  // Setup scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    container: scrollContext || undefined
  });

  // Smooth spring configuration
  const springConfig = {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
    restSpeed: 0.001
  };

  // First text animations - "SED UT PERSPIC"
  // Line 1 - appears from bottom, exits FIRST (top to bottom exit sequence)
  const text1Word1Y = useSpring(
    useTransform(scrollYProgress, [0, 0.12, 0.3, 0.38], [100, 0, 0, 100]), 
    springConfig
  );
  const text1Word1Opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.12, 0.3, 0.38], [0, 1, 1, 0]), 
    springConfig
  );
  
  // Line 2 - appears from bottom, exits SECOND
  const text1Word2Y = useSpring(
    useTransform(scrollYProgress, [0.04, 0.16, 0.32, 0.4], [100, 0, 0, 100]), 
    springConfig
  );
  const text1Word2Opacity = useSpring(
    useTransform(scrollYProgress, [0.04, 0.16, 0.32, 0.4], [0, 1, 1, 0]), 
    springConfig
  );
  
  // Line 3 - appears from bottom, exits LAST
  const text1Word3Y = useSpring(
    useTransform(scrollYProgress, [0.08, 0.2, 0.34, 0.42], [100, 0, 0, 100]), 
    springConfig
  );
  const text1Word3Opacity = useSpring(
    useTransform(scrollYProgress, [0.08, 0.2, 0.34, 0.42], [0, 1, 1, 0]), 
    springConfig
  );

  // Second text animations - "IMPROVE YOUR WEBSITE"
  // Line 1 - appears from bottom, exits FIRST (top to bottom exit sequence)
  const text2Word1Y = useSpring(
    useTransform(scrollYProgress, [0.5, 0.62, 0.8, 0.88], [100, 0, 0, 100]), 
    springConfig
  );
  const text2Word1Opacity = useSpring(
    useTransform(scrollYProgress, [0.5, 0.62, 0.8, 0.88], [0, 1, 1, 0]), 
    springConfig
  );
  
  // Line 2 - appears from bottom, exits SECOND
  const text2Word2Y = useSpring(
    useTransform(scrollYProgress, [0.54, 0.66, 0.82, 0.9], [100, 0, 0, 100]), 
    springConfig
  );
  const text2Word2Opacity = useSpring(
    useTransform(scrollYProgress, [0.54, 0.66, 0.82, 0.9], [0, 1, 1, 0]), 
    springConfig
  );
  
  // Line 3 - appears from bottom, exits LAST
  const text2Word3Y = useSpring(
    useTransform(scrollYProgress, [0.58, 0.7, 0.84, 0.92], [100, 0, 0, 100]), 
    springConfig
  );
  const text2Word3Opacity = useSpring(
    useTransform(scrollYProgress, [0.58, 0.7, 0.84, 0.92], [0, 1, 1, 0]), 
    springConfig
  );

  return (
    <div className="bg-gray-900">
      {/* Scroll hijacking container */}
      <div
        ref={containerRef}
        className="relative h-[400vh]"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="w-full px-6">
            <div className="max-w-7xl mx-auto">
              {/* Top Purple Dot with Text */}
              <div className="flex items-center justify-center gap-4 mb-20">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ background: '#8338EC' }}
                />
                <p className="text-white text-base">
                  Duis qute irure dolor in reprehenderit
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* Left Side - Static Text and Buttons */}
                <div className="space-y-8">
                  {/* White Title */}
                  <h2 className="text-white text-4xl font-bold mb-3">
                    Sed ut perspiciatis
                  </h2>
                  
                  {/* Orange Italic Subtitle */}
                  <h3 
                    className="text-4xl font-bold italic mb-8"
                    style={{ 
                      color: '#d97706',
                      fontStyle: 'italic',
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    Unde Seduo ut perspiciatis
                  </h3>

                  {/* Buttons Container */}
                  <div className="flex flex-col gap-4">
                    {/* Book a Free Demo Button - White */}
                    <motion.button 
                      className="bg-white text-black px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-3 w-fit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      BOOK A FREE DEMO
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </motion.button>

                    {/* Explore Case Studies Button - Transparent with Orange Text */}
                    <motion.button 
                      className="border-2 px-8 py-4 rounded-xl font-bold text-sm transition-colors flex items-center gap-3 w-fit"
                      style={{
                        borderColor: '#d97706',
                        color: '#d97706'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      EXPLORE CASE STUDIES
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Right Side - Animated Text */}
                <div className="flex items-start justify-center min-h-[400px] pt-10">
                  
                  {/* First Text Set - "SED UT PERSPIC..." */}
                  <div className="absolute text-white font-bold leading-tight">
                    {/* Line 1 - Exits FIRST */}
                    <div className="overflow-hidden mb-2">
                      <motion.div 
                        className="text-5xl lg:text-6xl xl:text-7xl"
                        style={{
                          y: text1Word1Y,
                          opacity: text1Word1Opacity
                        }}
                      >
                        SED UT PERSPIC
                      </motion.div>
                    </div>
                    
                    {/* Line 2 - Exits SECOND */}
                    <div className="overflow-hidden mb-2">
                      <motion.div 
                        className="text-5xl lg:text-6xl xl:text-7xl"
                        style={{
                          y: text1Word2Y,
                          opacity: text1Word2Opacity
                        }}
                      >
                        UNDE SEDUO UT
                      </motion.div>
                    </div>
                    
                    {/* Line 3 - Exits LAST */}
                    <div className="overflow-hidden">
                      <motion.div 
                        className="text-5xl lg:text-6xl xl:text-7xl"
                        style={{
                          y: text1Word3Y,
                          opacity: text1Word3Opacity
                        }}
                      >
                        PERSPICIATIS
                      </motion.div>
                    </div>
                  </div>

                  {/* Second Text Set - "IMPROVE YOUR WEBSITE" */}
                  <div className="absolute text-white font-bold leading-tight">
                    {/* Line 1 - Exits FIRST */}
                    <div className="overflow-hidden mb-2">
                      <motion.div 
                        className="text-5xl lg:text-6xl xl:text-7xl"
                        style={{
                          y: text2Word1Y,
                          opacity: text2Word1Opacity
                        }}
                      >
                        IMPROVE YOUR
                      </motion.div>
                    </div>
                    
                    {/* Line 2 - Exits SECOND */}
                    <div className="overflow-hidden mb-2">
                      <motion.div 
                        className="text-5xl lg:text-6xl xl:text-7xl"
                        style={{
                          y: text2Word2Y,
                          opacity: text2Word2Opacity
                        }}
                      >
                        WEBSITE
                      </motion.div>
                    </div>
                    
                    {/* Line 3 - Exits LAST */}
                    <div className="overflow-hidden">
                      <motion.div 
                        className="text-5xl lg:text-6xl xl:text-7xl"
                        style={{
                          y: text2Word3Y,
                          opacity: text2Word3Opacity
                        }}
                      >
                        CONVERSION
                      </motion.div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
