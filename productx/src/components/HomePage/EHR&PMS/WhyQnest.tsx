import { useContext, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';

const WhyQnest = () => {
  const scrollContainer = useContext(ScrollContext);
  const targetRef = useRef(null);

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: scrollContainer ?? undefined,
    offset: ["start center", "center start"]
  });

  // Cards move from below screen to top
  const cardsY = useTransform(scrollYProgress, [0, 0.8], ['100%', '0%']);
  
  // Card vertical offsets - they align when reaching top (become 0)
  const card1Offset = useTransform(scrollYProgress, [0, 0.8], [128, 0]);
  const card3Offset = useTransform(scrollYProgress, [0, 0.8], [128, 0]);
  
  // Title opacity - fades out as cards move up
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Smooth spring transitions
  const smoothCardsY = useSpring(cardsY, { stiffness: 100, damping: 30 });
  const smoothCard1Offset = useSpring(card1Offset, { stiffness: 100, damping: 30 });
  const smoothCard3Offset = useSpring(card3Offset, { stiffness: 100, damping: 30 });
  const smoothTitleOpacity = useSpring(titleOpacity, { stiffness: 100, damping: 30 });

  return (
    <div 
      ref={targetRef}
      className='relative h-[200vh]'
      style={{ 
        pointerEvents: 'all',
      }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background - Static */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/EHRandPMS/WhyQnest.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Title Section - Fades out as cards move up */}
        <motion.div 
          className="absolute top-0 left-0 right-0 z-10 pt-24 pb-12"
          style={{
            opacity: smoothTitleOpacity
          }}
        >
          <div className="text-center max-w-3xl mx-auto px-6">
            <h2 className="text-[3.5rem] font-bold text-[#1F4D3B] mb-5 leading-tight">
              Why <span className="relative inline-block">
                Qnest
              </span>
            </h2>
            <p className="text-gray-700 text-base leading-relaxed px-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </motion.div>

        {/* Cards Section - Scrolls up from bottom, overrides title */}
        <motion.div
          style={{
            y: smoothCardsY
          }}
          className="absolute inset-0 z-20 flex items-center justify-center py-12"
        >
          <div className="w-full px-6">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Card 1 - Left - Starts lower, aligns to same height at top */}
                <motion.div 
                  className="lg:col-span-4"
                  style={{
                    marginTop: smoothCard1Offset
                  }}
                >
                  <div className="bg-white rounded-[2rem] p-14 shadow-xl h-[550px] flex flex-col">
                    <h3 className="text-[4.5rem] font-bold text-[#1F4D3B] leading-none mb-5">
                      126+
                    </h3>
                    <p className="text-[1.7rem] font-semibold text-[#1F4D3B] mb-auto leading-tight">
                      countries supported
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed font-medium mt-20">
                      We onboard users from 126+ countries — whether you hold a passport or a 
                      residence permit we've got you covered.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2 - Middle - Same height as others */}
                <div className="lg:col-span-4 lg:mt-0">
                  <div className="bg-white rounded-[2rem] p-14 shadow-xl h-[550px] flex flex-col">
                    <h3 className="text-[4.5rem] font-bold text-[#1F4D3B] leading-none mb-5">
                      126+
                    </h3>
                    <p className="text-[1.7rem] font-semibold text-[#1F4D3B] mb-auto leading-tight">
                      undesed ut persp
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed font-medium mt-20">
                      We onboard users from 126+ countries — whether you hold a passport or a 
                      residence permit we've got you covered.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Right - Starts lower, aligns to same height at top */}
                <motion.div 
                  className="lg:col-span-4"
                  style={{
                    marginTop: smoothCard3Offset
                  }}
                >
                  <div className="bg-white rounded-[2rem] p-14 shadow-xl h-[550px] flex flex-col">
                    <h3 className="text-[4.5rem] font-bold text-[#1F4D3B] leading-none mb-5">
                      56
                    </h3>
                    <p className="text-[1.7rem] font-semibold text-[#1F4D3B] mb-auto leading-tight">
                      countries sta rsuppor
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed font-medium mt-20">
                      We onboard users from 126+ countries — whether you hold a passport or a 
                      residence permit we've got you covered.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyQnest;

