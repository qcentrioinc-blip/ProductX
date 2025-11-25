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
    <>
     {/* DESKTOP - YOUR EXACT CODE - ONLY ADDED: hidden md:hidden lg:block */}
      <div
        ref={targetRef}
        className='hidden md:hidden lg:block relative h-[200vh]'
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
                            fontSize: '46px',
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
                            fontSize: '36px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#166D48',
                            margin: 0,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          countries supported
                        </p>
                      </div>

                      {/* Description Text - Bottom */}
                      <p
                        style={{
                          width: '339.91px',
                          height: '95px',
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: '22px',
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
                            fontSize: '46px',
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
                            fontSize: '36px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#166D48',
                            margin: 0,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          undesed ut persp
                        </p>
                      </div>

                      {/* Description Text - Bottom */}
                      <p
                        style={{
                          width: '339.91px',
                          height: '95px',
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: '22px',
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
                            fontSize: '46px',
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
                            fontSize: '36px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#166D48',
                            margin: 0,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          countries sta rsuppor
                        </p>
                      </div>

                      {/* Description Text - Bottom */}
                      <p
                        style={{
                          width: '339.91px',
                          height: '95px',
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          fontSize: '22px',
                          lineHeight: '100%',
                          letterSpacing: '20%',
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

      {/* TABLET - NEW (768px to 1023px) */}
      <div className="block md:block lg:hidden hidden sm:block w-full py-16 px-8 min-h-screen" style={{
        backgroundImage: `url(/EHRandPMS/WhyQnest.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '40px', lineHeight: '110%', color: '#166D48', marginBottom: '16px'}}>Why Qnest</h2>
            <p style={{fontFamily: "'Schibsted Grotesk', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '140%', color: '#141414', maxWidth: '600px', margin: '0 auto'}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between min-h-[300px]">
              <div><h3 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '32px', color: '#166D48', margin: 0}}>126+</h3><p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '22px', color: '#166D48', marginTop: '8px'}}>countries supported</p></div>
              <p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '15px', lineHeight: '120%', color: '#2A2A2A', marginTop: '20px'}}>We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between min-h-[300px]">
              <div><h3 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '32px', color: '#166D48', margin: 0}}>126+</h3><p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '22px', color: '#166D48', marginTop: '8px'}}>undesed ut persp</p></div>
              <p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '15px', lineHeight: '120%', color: '#2A2A2A', marginTop: '20px'}}>We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.</p>
            </div>

            <div className="col-span-2 max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between min-h-[300px]">
              <div><h3 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '32px', color: '#166D48', margin: 0}}>56</h3><p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '22px', color: '#166D48', marginTop: '8px'}}>countries sta rsuppor</p></div>
              <p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '15px', lineHeight: '120%', color: '#2A2A2A', marginTop: '20px'}}>We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.</p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE - NEW (below 768px) */}
      <div className="block sm:hidden w-full py-12 px-6 min-h-screen" style={{
        backgroundImage: `url(/EHRandPMS/WhyQnest.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="text-center mb-10">
          <h2 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '28px', lineHeight: '110%', color: '#166D48', marginBottom: '12px'}}>Why Qnest</h2>
          <p style={{fontFamily: "'Schibsted Grotesk', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '140%', color: '#141414'}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div><h3 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '28px', color: '#166D48', margin: 0}}>126+</h3><p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '18px', color: '#166D48', marginTop: '6px'}}>countries supported</p></div>
            <p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '14px', lineHeight: '130%', color: '#2A2A2A'}}>We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div><h3 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '28px', color: '#166D48', margin: 0}}>126+</h3><p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '18px', color: '#166D48', marginTop: '6px'}}>undesed ut persp</p></div>
            <p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '14px', lineHeight: '130%', color: '#2A2A2A'}}>We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4">
            <div><h3 style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '28px', color: '#166D48', margin: 0}}>56</h3><p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: '18px', color: '#166D48', marginTop: '6px'}}>countries sta rsuppor</p></div>
            <p style={{fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '14px', lineHeight: '130%', color: '#2A2A2A'}}>We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyQnest;
