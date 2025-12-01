import { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';

// --- Types ---
type Shape = {
  width: string;
  height: string;
  top: string;
  left: string;
  borderRadius: string;
};

type Slide = {
  id: number;
  topLeft: Shape;
  bottomRight: Shape | Shape[];
};

// --- DESKTOP SLIDES - Adjusted for optimized oval height ---
const desktopSlides: Slide[] = [
  {
    id: 0,
    topLeft: {
      width: '345px',
      height: '63px',
      top: 'calc(50vh - 320px)',
      left: 'calc(50vw - 540px)',
      borderRadius: '8px'
    },
    bottomRight: {
      width: '155.21px',
      height: '190.94px',
      top: 'calc(50vh + 130px)',
      left: 'calc(50vw + 280px)',
      borderRadius: '8px'
    }
  },
  {
    id: 1,
    topLeft: {
      width: '175.95px',
      height: '186.66px',
      top: 'calc(50vh - 290px)',
      left: 'calc(50vw - 450px)',
      borderRadius: '8px'
    },
    bottomRight: [
      { width: '99.45px', height: '99.45px', top: 'calc(50vh + 180px)', left: 'calc(50vw + 250px)', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(50vh + 180px)', left: 'calc(50vw + 380px)', borderRadius: '50%' }
    ]
  },
  {
    id: 2,
    topLeft: {
      width: '99.45px',
      height: '99.45px',
      top: 'calc(50vh - 390px)',
      left: 'calc(50vw - 50px)',
      borderRadius: '50%'
    },
    bottomRight: [
      { width: '99.45px', height: '99.45px', top: 'calc(50vh - 250px)', left: 'calc(50vw + 210px)', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(50vh + 210px)', left: 'calc(50vw + 180px)', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(50vh + 275px)', left: 'calc(50vw - 50px)', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(50vh + 210px)', left: 'calc(50vw - 280px)', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(50vh - 250px)', left: 'calc(50vw - 325px)', borderRadius: '50%' }
    ]
  }
];

// --- TABLET SLIDES - Adjusted for optimized oval height ---
const tabletSlides: Slide[] = [
  {
    id: 0,
    topLeft: {
      width: '203.72px',
      height: '36.59px',
      top: 'calc(50vh - 230px)',
      left: 'calc(50vw - 340px)',
      borderRadius: '6px'
    },
    bottomRight: {
      width: '116.41px',
      height: '143.21px',
      top: 'calc(50vh + 110px)',
      left: 'calc(50vw + 200px)',
      borderRadius: '6px'
    }
  },
  {
    id: 1,
    topLeft: {
      width: '131.96px',
      height: '140px',
      top: 'calc(50vh - 225px)',
      left: 'calc(50vw - 320px)',
      borderRadius: '6px'
    },
    bottomRight: [
      { width: '74.59px', height: '74.59px', top: 'calc(50vh + 155px)', left: 'calc(50vw + 180px)', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(50vh + 155px)', left: 'calc(50vw + 277.5px)', borderRadius: '50%' }
    ]
  },
  {
    id: 2,
    topLeft: {
      width: '74.59px',
      height: '74.59px',
      top: 'calc(50vh - 280px)',
      left: 'calc(50vw - 37px)',
      borderRadius: '50%'
    },
    bottomRight: [
      { width: '74.59px', height: '74.59px', top: 'calc(50vh - 195px)', left: 'calc(50vw + 200px)', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(50vh + 185px)', left: 'calc(50vw + 195px)', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(50vh + 235px)', left: 'calc(50vw - 37px)', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(50vh + 185px)', left: 'calc(50vw - 270px)', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(50vh - 195px)', left: 'calc(50vw - 280px)', borderRadius: '50%' }
    ]
  }
];

// --- MOBILE SLIDES - Adjusted for optimized oval height ---
const mobileSlides: Slide[] = [
  {
    id: 0,
    topLeft: {
      width: '149.39px',
      height: '26.83px',
      top: 'calc(50vh - 210px)',
      left: 'calc(50vw - 200px)',
      borderRadius: '4px'
    },
    bottomRight: {
      width: '85.37px',
      height: '105.02px',
      top: 'calc(50vh + 95px)',
      left: 'calc(50vw + 120px)',
      borderRadius: '4px'
    }
  },
  {
    id: 1,
    topLeft: {
      width: '96.77px',
      height: '102.66px',
      top: 'calc(50vh - 205px)',
      left: 'calc(50vw - 180px)',
      borderRadius: '4px'
    },
    bottomRight: [
      { width: '54.7px', height: '54.7px', top: 'calc(50vh + 110px)', left: 'calc(50vw + 65px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50vh + 110px)', left: 'calc(50vw + 130px)', borderRadius: '50%' }
    ]
  },
  {
    id: 2,
    topLeft: {
      width: '54.7px',
      height: '54.7px',
      top: 'calc(50vh - 200px)',
      left: 'calc(50vw - 27px)',
      borderRadius: '50%'
    },
    bottomRight: [
      { width: '54.7px', height: '54.7px', top: 'calc(50vh - 130px)', left: 'calc(50vw + 110px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50vh + 90px)', left: 'calc(50vw + 97px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50vh + 140px)', left: 'calc(50vw - 27px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50vh + 90px)', left: 'calc(50vw - 160px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50vh - 130px)', left: 'calc(50vw - 172px)', borderRadius: '50%' }
    ]
  }
];

const CircleAnimation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const [, setCanHorizontalScroll] = useState(false);
  const centerTexts = [
    {
      subtitle: "perspiciatis",
      heading: "Sed ut perspiciatis<br />undesed ut persp"
    },
    {
      subtitle: "doloremque",
      heading: "Ut enim ad minima<br />veniam"
    },
    {
      subtitle: "officiis",
      heading: "Quis autem vel<br />eum iure"
    }
  ];
  const { subtitle, heading } = centerTexts[currentSlide];


  const scrollContext = useContext(ScrollContext);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const slides = screenSize === 'mobile' ? mobileSlides :
    screenSize === 'tablet' ? tabletSlides : desktopSlides;

  const checkScrollPosition = useCallback(() => {
    const scrollContainer = scrollContext?.current;
    if (!containerRef.current || !scrollContainer) return;

    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = rect.height;
    const viewportHeight = scrollContainer.clientHeight;

    const scrolled = -rect.top;
    const scrollableHeight = containerHeight - viewportHeight;

    const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

    const shouldEnableHorizontalScroll = (
      rect.top <= 0 &&
      rect.bottom > viewportHeight
    );

    setCanHorizontalScroll(shouldEnableHorizontalScroll);

    if (shouldEnableHorizontalScroll) {
      scrollProgress.set(progress);
    }
  }, [scrollContext, scrollProgress]);

  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (latest) => {
      const slideIndex = Math.floor(latest * 3);
      const clampedIndex = Math.max(0, Math.min(slides.length - 1, slideIndex));
      setCurrentSlide(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollProgress, slides.length]);

  useEffect(() => {
    const scrollContainer = scrollContext?.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      checkScrollPosition();
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    checkScrollPosition();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [checkScrollPosition, scrollContext]);

  // Image mapping for third slide (6 circles total)
  const thirdSlideImages = [
    '/EHRandPMS/1.png',
    '/EHRandPMS/2.png',
    '/EHRandPMS/3.png',
    '/EHRandPMS/4.png',
    '/EHRandPMS/5.png',
    '/EHRandPMS/6.png'
  ];

  // Third slide TWO-STAGE animation with uniform drift
  // Stage 1: Right to left + fade in (0-50%)
  // Stage 2: ALL images drift slightly RIGHT and DOWN (50-100%)
  const getThirdSlideAnimation = (index: number, isTopLeft: boolean) => {
    const baseDelay = 0.08 * (isTopLeft ? 0 : index); // 0.08s stagger delay
    const rightOffset = screenSize === 'mobile' ? 150 : screenSize === 'tablet' ? 250 : 350;
    const driftRight = screenSize === 'mobile' ? 15 : 20; // Slight right movement
    const driftDown = screenSize === 'mobile' ? 12 : 15;  // Slight down movement

    return {
      initial: { x: rightOffset, y: 0, opacity: 0 },
      animate: {
        x: [rightOffset, 0, driftRight],  // Right → Center → Drift Right
        y: [0, 0, driftDown],              // Stay → Stay → Drift Down
        opacity: [0, 1, 1]                 // Fade in → Stay visible
      },
      transition: {
        duration: 0.9,
        times: [0, 0.5, 1],      // 50% horizontal, 50% drift
        ease: "easeOut",
        delay: baseDelay,
        type: "tween"
      }
    };
  };

  // Info card data for third slide
  const infoCards = [
    null, // Image 1 - no card
    null, // Image 2 - no card
    { text: '98%', subtext: 'Collection Rate', color: '#7DB394' }, // Image 3
    { text: '98%', subtext: 'Collection Rate', color: '#7DB394' }, // Image 4
    { text: '36 Days', subtext: 'Insurance Response Time', color: '#7DB394' }, // Image 5
    null  // Image 6 - no card
  ];


  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: screenSize === 'mobile' ? '300vh' : screenSize === 'tablet' ? '300vh' : '300vh',
      }}
    >
      <div
        className="sticky top-0 w-full h-screen overflow-hidden">
        <img
          src="/EHRandPMS/EHRPMSCIRCLE.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          style={{ left: 0, top: 0 }}
        />
        {/* BACKGROUND IMAGE - Centered */}
        <div
          className="absolute"
          style={{
            width: '90%',
            height: '90%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundImage: 'url("/EHRandPMS/EhrCircle.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        ></div>

        {/* DYNAMIC TOP-LEFT SHAPE */}
        <motion.div
          key={`topLeft-${currentSlide}-${screenSize}`}
          initial={
            currentSlide === 2
              ? getThirdSlideAnimation(0, true).initial
              : {
                x: screenSize === 'mobile' ? 100 : screenSize === 'tablet' ? 200 : 300,
                opacity: 0
              }
          }
          animate={
            currentSlide === 2
              ? getThirdSlideAnimation(0, true).animate
              : { x: 0, opacity: 1 }
          }
          exit={{
            x: screenSize === 'mobile' ? -100 : screenSize === 'tablet' ? -200 : -300,
            opacity: 0
          }}
          transition={
            currentSlide === 2
              ? (getThirdSlideAnimation(0, true).transition as any)
              : ({ duration: 0.5, ease: "easeOut", type: "tween" } as any)
          }
          className="absolute will-change-transform flex items-center justify-center overflow-hidden shadow-md"
          style={{
            width: slides[currentSlide].topLeft.width,
            height: slides[currentSlide].topLeft.height,
            top: slides[currentSlide].topLeft.top,
            left: slides[currentSlide].topLeft.left,
            borderRadius: slides[currentSlide].topLeft.borderRadius,
            backgroundColor: (currentSlide === 1 || currentSlide === 2) ? 'transparent' : 'white',
            zIndex: 10
          }}
        >
          {/* TEXT for first slide */}
          {currentSlide === 0 && (
            <span
              style={{
                fontSize: screenSize === 'mobile' ? '10px' : screenSize === 'tablet' ? '12px' : '32px',
                fontWeight: 600,
                color: '#166D48',
                textAlign: 'center',
                padding: '0 8px',
                fontFamily: 'Bricolage Grotesque, sans-serif'
              }}
            >
              undesed ut persp
            </span>
          )}

          {/* IMAGE for second slide - DoctorGirl */}
          {currentSlide === 1 && (
            <img
              src="/EHRandPMS/DoctorGirl.png"
              alt="Doctor"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: slides[currentSlide].topLeft.borderRadius
              }}
            />
          )}

          {/* IMAGE for third slide - Image 1 */}
          {currentSlide === 2 && (
            <img
              src={thirdSlideImages[0]}
              alt="Image 1"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: slides[currentSlide].topLeft.borderRadius
              }}
            />
          )}
        </motion.div>

        {/* DYNAMIC BOTTOM-RIGHT SHAPE(S) */}
        {Array.isArray(slides[currentSlide].bottomRight) ? (
          slides[currentSlide].bottomRight.map((shape, index) => {
            return (
              <motion.div
                key={`bottomRight-${currentSlide}-${index}-${screenSize}`}
                initial={
                  currentSlide === 2
                    ? getThirdSlideAnimation(index, false).initial
                    : {
                      x: screenSize === 'mobile' ? 100 : screenSize === 'tablet' ? 200 : 300,
                      opacity: 0
                    }
                }
                animate={
                  currentSlide === 2
                    ? getThirdSlideAnimation(index, false).animate
                    : { x: 0, opacity: 1 }
                }
                exit={{
                  x: screenSize === 'mobile' ? -100 : screenSize === 'tablet' ? -200 : -300,
                  opacity: 0
                }}
                transition={
                  currentSlide === 2
                    ? (getThirdSlideAnimation(index, false).transition as any)
                    : ({ duration: 0.5, ease: "easeOut", delay: 0.08 * (index + 1), type: "tween" } as any)
                }
                className="absolute will-change-transform overflow-hidden"
                style={{
                  width: shape.width,
                  height: shape.height,
                  top: shape.top,
                  left: shape.left,
                  borderRadius: shape.borderRadius,
                  backgroundColor: (currentSlide === 1 || currentSlide === 2) ? 'transparent' : '#B4E7CE',
                  zIndex: 10
                }}
              >
                {/* IMAGES for second slide */}
                {currentSlide === 1 && (
                  <img
                    src={index === 0 ? "/EHRandPMS/Keyboard.png" : "/EHRandPMS/Wheel.png"}
                    alt={index === 0 ? "Keyboard" : "Wheel"}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: shape.borderRadius
                    }}
                  />
                )}

                {/* IMAGES for third slide */}
                {currentSlide === 2 && (
                  <>
                    <img
                      src={thirdSlideImages[index + 1]}
                      alt={`Image ${index + 2}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: shape.borderRadius
                      }}
                    />

                    {/* INFO CARDS */}
                    {infoCards[index + 1] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: [0, 0, 1],
                          scale: [0.8, 0.8, 1]
                        }}
                        transition={
                          {
                            duration: 0.9,
                            times: [0, 0.5, 1],
                            ease: "easeOut",
                            delay: (getThirdSlideAnimation(index, false).transition as any).delay
                          } as any
                        }
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: index === 1 ? '-100%' : '24px',
                          backgroundColor: '#ededed',
                          borderRadius: '8px',
                          padding: '4px 8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: screenSize === 'mobile' ? '8px' : '10px',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                      >
                        <span style={{ color: infoCards[index + 1]!.color }}>
                          {infoCards[index + 1]!.text}
                        </span>
                        <span style={{ fontSize: '9px', color: '#666' }}>
                          {infoCards[index + 1]!.subtext}
                        </span>
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>
            );
          })
        ) : (
          <motion.div
            key={`bottomRight-${currentSlide}-${screenSize}`}
            initial={{
              x: screenSize === 'mobile' ? 100 : screenSize === 'tablet' ? 200 : 300,
              opacity: 0
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: screenSize === 'mobile' ? -100 : screenSize === 'tablet' ? -200 : -300,
              opacity: 0
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12, type: "tween" } as any}
            className="absolute will-change-transform overflow-hidden"
            style={{
              width: (slides[currentSlide].bottomRight as Shape).width,
              height: (slides[currentSlide].bottomRight as Shape).height,
              top: (slides[currentSlide].bottomRight as Shape).top,
              left: (slides[currentSlide].bottomRight as Shape).left,
              borderRadius: (slides[currentSlide].bottomRight as Shape).borderRadius,
              backgroundColor: currentSlide === 0 ? 'transparent' : '#B4E7CE',
              zIndex: 10
            }}
          >
            {/* IMAGE for first slide */}
            {currentSlide === 0 && (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative'
                }}
              >
                <img
                  src="/EHRandPMS/Girl.png"
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: (slides[currentSlide].bottomRight as Shape).borderRadius
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '10px',
                    fontWeight: 600,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981'
                    }}
                  />
                  PAID
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    right: '8px',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: 600,
                    textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                  }}
                >
                  <div>From Texas Blue</div>
                  <div style={{ fontSize: '10px', fontWeight: 400 }}>Cross $1,240</div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* CONTENT - Centered on screen */}
        <div
          className="absolute text-center px-6 pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: screenSize === 'mobile' ? '280px' : screenSize === 'tablet' ? '480px' : '700px',
            zIndex: 20
          }}
        >
          <p
            className="font-medium mb-2 tracking-wide"
            style={{
              fontSize: screenSize === 'mobile' ? '11px' : screenSize === 'tablet' ? '13px' : '30px',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              letterSpacing: '0%',
              textAlign: 'center',
              color: "#166D48"
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: screenSize === 'mobile' ? '6px' : '10px',
                height: screenSize === 'mobile' ? '6px' : '10px',
                background: 'white',
                borderRadius: '50%',
                marginRight: '8px',
                verticalAlign: 'middle'
              }}
            />
            {subtitle}
          </p>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: screenSize === 'mobile' ? '32px' : screenSize === 'tablet' ? '48px' : '60px',
              lineHeight: 1.1,
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#166D48'
            }}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>


        {/* PAGINATION DOTS - Centered below */}
        <div
          className="absolute flex gap-3"
          style={{
            left: '50%',
            top: 'calc(50% + 130px)',
            transform: 'translateX(-50%)',
            zIndex: 20
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ${screenSize === 'mobile' ? 'w-2 h-2' : 'w-3 h-3'
                }`}
              style={{
                backgroundColor: currentSlide === index ? '#2D6F56' : '#B4D3C4',
                opacity: currentSlide === index ? 1 : 0.6,
                transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircleAnimation;

