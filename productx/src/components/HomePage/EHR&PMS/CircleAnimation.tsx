// import { useState, useEffect } from 'react';

// // --- Types and Data for the 3 slides ---
// type Shape = {
//   width: string;
//   height: string;
//   top: string;
//   left: string;
//   borderRadius: string;
// };

// type Slide = {
//   id: number;
//   topLeft: Shape;
//   bottomRight: Shape | Shape[];
// };

// // --- CORRECTED 'slides' array with proper positioning ---
// const slides: Slide[] = [
//   {
//     id: 0,
//     // Slide 1 - Rectangle top-left, Square bottom-right
//     topLeft: {
//       width: '355.06px',
//       height: '63.77px',
//       top: '156.83px',
//       left: '170.86px',
//       borderRadius: '8px'
//     },
//     bottomRight: {
//       width: '202.89px',
//       height: '249.6px',
//       top: '521.71px',
//       left: '1070.82px',
//       borderRadius: '8px'
//     }
//   },
//   {
//     id: 1,
//     // Slide 2 - Circle top-left, TWO circles bottom-right
//     topLeft: {
//       width: '230px',
//       height: '244px',
//       top: '206px',
//       left: '168px',
//       borderRadius: '8px' // square
//     },
//     bottomRight: [ 
//       {
//         width: '130px',
//         height: '130px',
//         top: '720px',
//         left: '970px',
//         borderRadius: '50%'
//       },
//       {
//         width: '130px',
//         height: '130px',
//         top: '720px',
//         left: '1142px',
//         borderRadius: '50%'
//       }
//     ]
//   },
//   {
//     id: 2,
//     // Slide 3 - 6 circles arranged in a pattern
//     // Top circle
//     topLeft: {
//       width: '130px',
//       height: '130px',
//       top: '51px',
//       left: '660px',
//       borderRadius: '50%'
//     },
//     bottomRight: [
//       // Top-right circle 
//       {
//         width: '130px',
//         height: '130px',
//         top: '197.16px',
//         left: '1033px',
//         borderRadius: '50%'
//       },
//       // Right circle
//       {
//         width: '130px',
//         height: '130px',
//         top: '660px',
//         left: '1033px',
//         borderRadius: '50%'
//       },
//       // Bottom circle
//       {
//        width: '130px',
//         height: '130px',
//         top: '843px',
//         left: '660px',
//         borderRadius: '50%'
//       },
//       // Bottom-left circle
//       {
//         width: '130px',
//         height: '130px',
//         top: '660px',
//         left: '285px',
//         borderRadius: '50%'
//       },
//       // Top-left circle
//       {
//         width: '130px',
//         height: '130px',
//         top: '197.16px',
//         left: '285px',
//         borderRadius: '50%'
//       },
//     ]
//   }
// ];

// const CircleAnimation = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 4000); 

//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className="relative w-full h-[900px] overflow-hidden bg-white">

//       {/* --- STATIC CIRCLES (Same in all slides) --- */}
//       <div
//         className="absolute rounded-full"
//         style={{
//           width: '615.7568359375px',
//           height: '655.811767578125px',
//           top: '160.69px',
//           left: '372.64px',
//           backgroundColor: '#f6f8f7',
//           boxShadow: 'inset 0px 0px 1.18px 0px rgba(0, 0, 0, 0.25)',
//           opacity: 1,
//           zIndex: 1
//         }}
//       ></div>
//       <div
//         className="absolute rounded-full"
//         style={{
//           width: '615.7568359375px',
//           height: '655.811767578125px',
//           top: '160.69px',
//           left: '451.6px',
//           backgroundColor: "#f6f8f7",
//           boxShadow: 'inset 0px 0px 1.18px 0px rgba(0, 0, 0, 0.25)',
//           opacity: 1,
//           zIndex: 1
//         }}
//       ></div>
//       <div 
//         className="absolute rounded-full"
//         style={{
//           width: '537px',
//           height: '655.81px',
//           top: '160.69px',
//           left: '451.6px',
//           backgroundColor: '#eef2f1',
//           boxShadow: 'inset 0px 0px 1.18px 0px rgba(0, 0, 0, 0.25)',
//           zIndex: 2
//         }}
//       ></div>

//       {/* --- DYNAMIC SHAPES (Change with slide) --- */}

//       <div
//         className="absolute transition-all duration-500"
//         style={{
//           width: slides[currentSlide].topLeft.width,
//           height: slides[currentSlide].topLeft.height,
//           top: slides[currentSlide].topLeft.top,
//           left: slides[currentSlide].topLeft.left,
//           borderRadius: slides[currentSlide].topLeft.borderRadius,
//           backgroundColor: '#B4E7CE',
//           zIndex: 0
//         }}
//       ></div>

//       {Array.isArray(slides[currentSlide].bottomRight) ? (
//         slides[currentSlide].bottomRight.map((shape, index) => (
//           <div
//             key={index}
//             className="absolute transition-all duration-500"
//             style={{
//               width: shape.width,
//               height: shape.height,
//               top: shape.top,
//               left: shape.left,
//               borderRadius: shape.borderRadius,
//               backgroundColor: '#B4E7CE',
//               zIndex: 0
//             }}
//           ></div>
//         ))
//       ) : (
//         <div
//           className="absolute transition-all duration-500"
//           style={{
//             width: slides[currentSlide].bottomRight.width,
//             height: slides[currentSlide].bottomRight.height,
//             top: slides[currentSlide].bottomRight.top,
//             left: slides[currentSlide].bottomRight.left,
//             borderRadius: slides[currentSlide].bottomRight.borderRadius,
//             backgroundColor: '#B4E7CE',
//             zIndex: 0
//           }}
//         ></div>
//       )}

//       {/* --- STATIC CONTENT (Same in all slides) --- */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
//         <p className="text-[#2d7a5a] text-[15px] font-medium mb-2 tracking-wide">
//           perspiciatis
//         </p>
//         <h1 className="text-[#1e7a52] text-[58px] font-bold leading-[1.15] tracking-tight">
//           sed ut perspiciatis<br />
//           undesed ut persp
//         </h1>
//       </div>

//       {/* --- DYNAMIC PAGINATION DOTS (3 dots) --- */}
//       <div className="absolute bottom-[180px] left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className="w-3 h-3 rounded-full bg-white transition-opacity duration-300"
//             style={{
//               opacity: currentSlide === index ? 1 : 0.4 
//             }}
//           ></div>
//         ))}
//       </div>

//     </div>
//   )
// }

// export default CircleAnimation;


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

// --- DESKTOP SLIDES (Original 100%) ---
const desktopSlides: Slide[] = [
  {
    id: 0,
    topLeft: {
      width: '271.62px',
      height: '48.78px',
      top: 'calc(185px - 5vh)',
      left: '290px',
      borderRadius: '8px'
    },
    bottomRight: {
      width: '155.21px',
      height: '190.94px',
      top: 'calc(521.71px - 5vh)',
      left: '1010.82px',
      borderRadius: '8px'
    }
  },
  {
    id: 1,
    topLeft: {
      width: '175.95px',
      height: '186.66px',
      top: 'calc(190px - 5vh)',
      left: '275px',
      borderRadius: '8px'
    },
    bottomRight: [
      { width: '99.45px', height: '99.45px', top: 'calc(580px - 5vh)', left: '980px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(580px - 5vh)', left: '1110px', borderRadius: '50%' }
    ]
  },
  {
    id: 2,
    topLeft: {
      width: '99.45px',
      height: '99.45px',
      top: 'calc(120px - 5vh)',
      left: '680px',
      borderRadius: '50%'
    },
    bottomRight: [
      { width: '99.45px', height: '99.45px', top: 'calc(220px - 5vh)', left: '940px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(600px - 5vh)', left: '910px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(660px - 5vh)', left: '680px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(600px - 5vh)', left: '450px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(220px - 5vh)', left: '405px', borderRadius: '50%' }
    ]
  }
];

// --- TABLET SLIDES (75% scale) ---
const tabletSlides: Slide[] = [
  {
    id: 0,
    topLeft: {
      width: '203.72px',
      height: '36.59px',
      top: 'calc(400px - 5vh)',
      left: '70px',
      borderRadius: '6px'
    },
    bottomRight: {
      width: '116.41px',
      height: '143.21px',
      top: 'calc(650px - 5vh)',
      left: '570.12px',
      borderRadius: '6px'
    }
  },
  {
    id: 1,
    topLeft: {
      width: '131.96px',
      height: '140px',
      top: 'calc(300px - 5vh)',
      left: '140px',
      borderRadius: '6px'
    },
    bottomRight: [
      { width: '74.59px', height: '74.59px', top: 'calc(700px - 5vh)', left: '535px', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(700px - 5vh)', left: '632.5px', borderRadius: '50%' }
    ]
  },
  {
    id: 2,
    topLeft: {
      width: '74.59px',
      height: '74.59px',
      top: 'calc(335px - 5vh)',
      left: '350px',
      borderRadius: '50%'
    },
    bottomRight: [
      { width: '74.59px', height: '74.59px', top: 'calc(450px - 5vh)', left: '565px', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(650px - 5vh)', left: '560px', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(750px - 5vh)', left: '350px', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(650px - 5vh)', left: '140px', borderRadius: '50%' },
      { width: '74.59px', height: '74.59px', top: 'calc(450px - 5vh)', left: '130px', borderRadius: '50%' }
    ]
  }
];

// --- MOBILE SLIDES (55% scale, centered) ---
const mobileSlides: Slide[] = [
  {
    id: 0,
    topLeft: {
      width: '149.39px',
      height: '26.83px',
      top: 'calc(53% - 180px)',
      left: 'calc(40% - 135px)',
      borderRadius: '4px'
    },
    bottomRight: {
      width: '85.37px',
      height: '105.02px',
      top: 'calc(50% + 80px)',
      left: 'calc(54% + 90px)',
      borderRadius: '4px'
    }
  },
  {
    id: 1,
    topLeft: {
      width: '96.77px',
      height: '102.66px',
      top: 'calc(45% - 175px)',
      left: 'calc(42% - 140px)',
      borderRadius: '4px'
    },
    bottomRight: [
      { width: '54.7px', height: '54.7px', top: 'calc(55% + 85px)', left: 'calc(50% + 40px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(55% + 85px)', left: 'calc(50% + 105px)', borderRadius: '50%' }
    ]
  },
  {
    id: 2,
    topLeft: {
      width: '54.7px',
      height: '54.7px',
      top: 'calc(51% - 190px)',
      left: 'calc(50% - 27px)',
      borderRadius: '50%'
    },
    bottomRight: [
      { width: '54.7px', height: '54.7px', top: 'calc(50% - 105px)', left: 'calc(63% + 78px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50% + 65px)', left: 'calc(63% + 65px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(51% + 115px)', left: 'calc(50% - 27px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50% + 65px)', left: 'calc(37% - 120px)', borderRadius: '50%' },
      { width: '54.7px', height: '54.7px', top: 'calc(50% - 105px)', left: 'calc(37% - 132px)', borderRadius: '50%' }
    ]
  }
];

const CircleAnimation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const [canHorizontalScroll, setCanHorizontalScroll] = useState(false);

  const scrollContext = useContext(ScrollContext);

  // Detect screen size
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
    screenSize === 'tablet' ? tabletSlides :
      desktopSlides;

  // Circle dimensions and CENTER positions
  const circleConfig = {
    mobile: {
      size: '267.51px',
      leftCircle: 'calc(50% - 153.3px)',
      rightCircle: 'calc(50% - 114.21px)',
      top: 'calc(50% - 133.76px)',
      // CENTER of both circles
      centerX: '50%',
      centerY: '50%'
    },
    tablet: {
      size: '364.78px',
      leftCircle: 'calc(50% - 209.04px)',
      rightCircle: 'calc(50% - 155.74px)',
      top: 'calc(400px - 5vh)',
      // CENTER of both circles
      centerX: '50%',
      centerY: 'calc(582.39px - 5vh)'
    },
    desktop: {
      size: '486.378px',
      leftCircle: '449.279px',
      rightCircle: '520.343px',
      top: 'calc(196.551px - 5vh)',
      // CENTER of both circles
      centerX: '728px',
      centerY: 'calc(439.74px - 5vh)'
    }
  };

  const config = circleConfig[screenSize];

  const checkScrollPosition = useCallback(() => {
    const scrollContainer = scrollContext?.current;
    if (!containerRef.current || !scrollContainer) return;

    const rect = containerRef.current.getBoundingClientRect();

    const shouldEnableHorizontalScroll = (
      rect.top <= 100 &&
      rect.top >= -100 &&
      rect.bottom > scrollContainer.clientHeight * 0.6
    );

    setCanHorizontalScroll(shouldEnableHorizontalScroll);
  }, [scrollContext]);

  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (latest) => {
      const slideIndex = Math.floor(latest * slides.length);
      const clampedIndex = Math.max(0, Math.min(slides.length - 1, slideIndex));
      setCurrentSlide(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollProgress, slides.length]);

  const handleWheel = useCallback((e: WheelEvent) => {
    const scrollContainer = scrollContext?.current;
    if (!containerRef.current || !scrollContainer) return;

    const rect = containerRef.current.getBoundingClientRect();
    const isInView = rect.top <= 100 && rect.bottom >= scrollContainer.clientHeight * 0.5;

    if (!isInView || !canHorizontalScroll) return;

    const currentProgress = scrollProgress.get();
    const scrollSensitivity = 0.0015;

    const newProgress = Math.max(0, Math.min(1, currentProgress + e.deltaY * scrollSensitivity));

    scrollProgress.set(newProgress);

    if (newProgress > 0 && newProgress < 0.99) {
      e.preventDefault();
      e.stopPropagation();
      scrollContainer.style.overflow = 'hidden';
    } else {
      scrollContainer.style.overflow = 'auto';
    }
  }, [scrollProgress, canHorizontalScroll, scrollContext]);

  useEffect(() => {
    const scrollContainer = scrollContext?.current;
    if (!scrollContainer) return;

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.style.overflow = 'auto';
    };
  }, [handleWheel, scrollContext]);

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

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ 
        height: screenSize === 'mobile' ? '250vh' : screenSize === 'tablet' ? '220vh' : '200vh'
      }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">

        {/* --- LEFT CIRCLE --- */}
        <div
          className="absolute rounded-full"
          style={{
            width: config.size,
            height: config.size,
            top: config.top,
            left: config.leftCircle,
            backgroundColor: 'transparent',
            boxShadow: 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.45)',
            opacity: 1,
            zIndex: 2,
            pointerEvents: 'none'
          }}
        ></div>

        {/* --- RIGHT CIRCLE --- */}
        <div
          className="absolute rounded-full"
          style={{
            width: config.size,
            height: config.size,
            top: config.top,
            left: config.rightCircle,
            backgroundColor: 'transparent',
            boxShadow: 'inset 0px 0px 2px 0px rgba(0, 0, 0, 0.45)',
            opacity: 1,
            zIndex: 2,
            pointerEvents: 'none'
          }}
        ></div>

        {/* --- DYNAMIC TOP-LEFT SHAPE --- */}
        <motion.div
          key={`topLeft-${currentSlide}-${screenSize}`}
          initial={{ 
            x: screenSize === 'mobile' ? 100 : screenSize === 'tablet' ? 200 : 300, 
            opacity: 0 
          }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ 
            x: screenSize === 'mobile' ? -100 : screenSize === 'tablet' ? -200 : -300, 
            opacity: 0 
          }}
          transition={{ duration: 0.5, ease: "easeOut", type: "tween" }}
          className="absolute will-change-transform"
          style={{
            width: slides[currentSlide].topLeft.width,
            height: slides[currentSlide].topLeft.height,
            top: slides[currentSlide].topLeft.top,
            left: slides[currentSlide].topLeft.left,
            borderRadius: slides[currentSlide].topLeft.borderRadius,
            backgroundColor: '#B4E7CE',
            zIndex: 0
          }}
        ></motion.div>

        {/* --- DYNAMIC BOTTOM-RIGHT SHAPE(S) --- */}
        {Array.isArray(slides[currentSlide].bottomRight) ? (
          slides[currentSlide].bottomRight.map((shape, index) => (
            <motion.div
              key={`bottomRight-${currentSlide}-${index}-${screenSize}`}
              initial={{ 
                x: screenSize === 'mobile' ? 100 : screenSize === 'tablet' ? 200 : 300, 
                opacity: 0 
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ 
                x: screenSize === 'mobile' ? -100 : screenSize === 'tablet' ? -200 : -300, 
                opacity: 0 
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 * (index + 1), type: "tween" }}
              className="absolute will-change-transform"
              style={{
                width: shape.width,
                height: shape.height,
                top: shape.top,
                left: shape.left,
                borderRadius: shape.borderRadius,
                backgroundColor: '#B4E7CE',
                zIndex: 0
              }}
            ></motion.div>
          ))
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
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12, type: "tween" }}
            className="absolute will-change-transform"
            style={{
              width: (slides[currentSlide].bottomRight as Shape).width,
              height: (slides[currentSlide].bottomRight as Shape).height,
              top: (slides[currentSlide].bottomRight as Shape).top,
              left: (slides[currentSlide].bottomRight as Shape).left,
              borderRadius: (slides[currentSlide].bottomRight as Shape).borderRadius,
              backgroundColor: '#B4E7CE',
              zIndex: 0
            }}
          ></motion.div>
        )}

        {/* --- CONTENT - CENTERED IN CIRCLES --- */}
        <div 
          className="absolute text-center z-10 px-6 pointer-events-none"
          style={{
            left: config.centerX,
            top: config.centerY,
            transform: screenSize === 'desktop' ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
            maxWidth: screenSize === 'mobile' ? '280px' : screenSize === 'tablet' ? '400px' : '500px'
          }}
        >
          <p className={`text-[#6b9a88] font-medium mb-2 tracking-wide ${
            screenSize === 'mobile' ? 'text-[11px]' :
            screenSize === 'tablet' ? 'text-[13px]' :
            'text-[15px]'
          }`}>
            Gain Intelligence
          </p>
          <h1 className={`text-[#1e7a52] font-bold leading-[1.2] tracking-tight ${
            screenSize === 'mobile' ? 'text-[24px]' :
            screenSize === 'tablet' ? 'text-[32px]' :
            'text-[40px]'
          }`}>
            Built on over $2B<br />
            of annual therapy<br />
            claims data.
          </h1>
        </div>

        {/* --- PAGINATION DOTS - CENTERED BELOW TEXT --- */}
        <div 
          className="absolute flex gap-3 z-10"
          style={{
            left: config.centerX,
            top: screenSize === 'mobile' 
              ? 'calc(50% + 84px)'  // Mobile: center + offset
              : screenSize === 'tablet'
              ? 'calc(582.39px - 5vh + 122px)'  // Tablet: center + offset
              : 'calc(439.74px - 5vh + 163px)',  // Desktop: center + offset
            transform: 'translateX(-50%)'
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ${
                screenSize === 'mobile' ? 'w-2 h-2' : 'w-3 h-3'
              }`}
              style={{
                backgroundColor: currentSlide === index ? '#1e7a52' : '#a8d5c3',
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

