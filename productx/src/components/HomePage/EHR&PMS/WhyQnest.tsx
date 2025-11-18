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

        {/* Cross Decorations - Scattered across background */}
        {/* Cross Decorations - Scattered across background with exact CSS */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Cross */}
          <div
            className="absolute"
            style={{
              top: '15%',
              left: '10%',
              width: '50.08px',
              height: '50.08px',
              opacity: 1
            }}
          >
            <img
              src="/EHRandPMS/Cross.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(28%) sepia(47%) saturate(1070%) hue-rotate(120deg) brightness(95%) contrast(90%)'
              }}
            />
          </div>

          {/* Top Right Cross */}
          <div
            className="absolute"
            style={{
              top: '20%',
              right: '15%',
              width: '50.08px',
              height: '50.08px',
              opacity: 1
            }}
          >
            <img
              src="/EHRandPMS/Cross.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(28%) sepia(47%) saturate(1070%) hue-rotate(120deg) brightness(95%) contrast(90%)'
              }}
            />
          </div>

          {/* Middle Left Cross */}
          <div
            className="absolute"
            style={{
              top: '45%',
              left: '8%',
              width: '50.08px',
              height: '50.08px',
              opacity: 1
            }}
          >
            <img
              src="/EHRandPMS/Cross.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(28%) sepia(47%) saturate(1070%) hue-rotate(120deg) brightness(95%) contrast(90%)'
              }}
            />
          </div>

          {/* Middle Right Cross */}
          <div
            className="absolute"
            style={{
              top: '50%',
              right: '12%',
              width: '50.08px',
              height: '50.08px',
              opacity: 1
            }}
          >
            <img
              src="/EHRandPMS/Cross.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(28%) sepia(47%) saturate(1070%) hue-rotate(120deg) brightness(95%) contrast(90%)'
              }}
            />
          </div>

          {/* Bottom Left Cross */}
          <div
            className="absolute"
            style={{
              bottom: '25%',
              left: '15%',
              width: '50.08px',
              height: '50.08px',
              opacity: 1
            }}
          >
            <img
              src="/EHRandPMS/Cross.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(28%) sepia(47%) saturate(1070%) hue-rotate(120deg) brightness(95%) contrast(90%)'
              }}
            />
          </div>

          {/* Bottom Center Cross */}
          <div
            className="absolute"
            style={{
              bottom: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50.08px',
              height: '50.08px',
              opacity: 1
            }}
          >
            <img
              src="/EHRandPMS/Cross.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(28%) sepia(47%) saturate(1070%) hue-rotate(120deg) brightness(95%) contrast(90%)'
              }}
            />
          </div>

          {/* Top Center Cross */}
          <div
            className="absolute"
            style={{
              top: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50.08px',
              height: '50.08px',
              opacity: 5
            }}
          >
            <img
              src="/EHRandPMS/Cross.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(0) saturate(100%) invert(28%) sepia(47%) saturate(1070%) hue-rotate(120deg) brightness(95%) contrast(90%)'
              }}
            />
          </div>
        </div>


        {/* Title Section - Fades out as cards move up - Updated Typography */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-10 pt-24 pb-12"
          style={{
            opacity: smoothTitleOpacity
          }}
        >
          <div className="text-center max-w-7xl mx-auto px-6 flex flex-col items-center">
            {/* Title - Exact CSS */}
            <h2
              className="mb-5 leading-tight"
              style={{
                width: '1280px',
                maxWidth: '100%',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#166D48',
                opacity: 1
              }}
            >
              Why <span className="relative inline-block">Qnest</span>
            </h2>

            {/* Description - Exact CSS */}
            <p
              className="leading-relaxed"
              style={{
                width: '670.98px',
                maxWidth: '100%',
                fontFamily: "'Schibsted Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#141414',
                opacity: 1
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
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
                  <div className="bg-white rounded-[2rem] p-14 shadow-xl h-[550px] flex flex-col justify-between">
                    {/* Number and Title - Top */}
                    <div
                      style={{
                        width: '341px',
                        height: '99px',
                        opacity: 1
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          fontSize: '56px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#166D48',
                          margin: 0
                        }}
                      >
                        126+
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          fontSize: '56px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#166D48',
                          margin: 0
                        }}
                      >
                        countries supported
                      </p>
                    </div>

                    {/* Description Text - Bottom */}
                    <p
                      style={{
                        width: '339.91px',
                        height: '145px',
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#2A2A2A',
                        opacity: 1,
                        margin: 0
                      }}
                    >
                      We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2 - Middle - Same height as others */}
                <div className="lg:col-span-4 lg:mt-0">
                  <div className="bg-white rounded-[2rem] p-14 shadow-xl h-[550px] flex flex-col justify-between">
                    {/* Number and Title - Top */}
                    <div
                      style={{
                        width: '341px',
                        height: '99px',
                        opacity: 1
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          fontSize: '56px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#166D48',
                          margin: 0
                        }}
                      >
                        126+
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          fontSize: '56px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#166D48',
                          margin: 0
                        }}
                      >
                        undesed ut persp
                      </p>
                    </div>

                    {/* Description Text - Bottom */}
                    <p
                      style={{
                        width: '339.91px',
                        height: '145px',
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#2A2A2A',
                        opacity: 1,
                        margin: 0
                      }}
                    >
                      We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.
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
                  <div className="bg-white rounded-[2rem] p-14 shadow-xl h-[550px] flex flex-col justify-between">
                    {/* Number and Title - Top */}
                    <div
                      style={{
                        width: '341px',
                        height: '99px',
                        opacity: 1
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          fontSize: '56px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#166D48',
                          margin: 0
                        }}
                      >
                        56
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 600,
                          fontSize: '56px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#166D48',
                          margin: 0
                        }}
                      >
                        countries sta rsuppor
                      </p>
                    </div>

                    {/* Description Text - Bottom */}
                    <p
                      style={{
                        width: '339.91px',
                        height: '145px',
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#2A2A2A',
                        opacity: 1,
                        margin: 0
                      }}
                    >
                      We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.
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
