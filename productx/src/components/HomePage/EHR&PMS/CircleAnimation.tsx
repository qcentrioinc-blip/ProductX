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

// --- Types and Data for the 3 slides ---
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

// --- Slides array (all top values reduced by 5%) ---
const slides: Slide[] = [
  {
    id: 0,
    topLeft: {
      width: '271.62px',
      height: '48.78px',
      top: 'calc(185px - 5vh)',  // ✅ Moved up by 5%
      left: '210px',
      borderRadius: '8px'
    },
    bottomRight: {
      width: '155.214px',
      height: '190.944px',
      top: 'calc(521.71px - 5vh)',  // ✅ Moved up by 5%
      left: '930.82px',
      borderRadius: '8px'
    }
  },
  {
    id: 1,
    topLeft: {
      width: '175.95px',
      height: '186.66px',
      top: 'calc(190px - 5vh)',  // ✅ Moved up by 5%
      left: '195px',
      borderRadius: '8px'
    },
    bottomRight: [
      {
        width: '99.45px',
        height: '99.45px',
        top: 'calc(580px - 5vh)',  // ✅ Moved up by 5%
        left: '900px',
        borderRadius: '50%'
      },
      {
        width: '99.45px',
        height: '99.45px',
        top: 'calc(580px - 5vh)',  // ✅ Moved up by 5%
        left: '1030px',
        borderRadius: '50%'
      }
    ]
  },
  {
    id: 2,
    topLeft: {
      width: '99.45px',
      height: '99.45px',
      top: 'calc(120px - 5vh)',  // ✅ Moved up by 5%
      left: '600px',
      borderRadius: '50%'
    },
    bottomRight: [
      { width: '99.45px', height: '99.45px', top: 'calc(220px - 5vh)', left: '860px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(600px - 5vh)', left: '830px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(660px - 5vh)', left: '600px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(600px - 5vh)', left: '370px', borderRadius: '50%' },
      { width: '99.45px', height: '99.45px', top: 'calc(220px - 5vh)', left: '325px', borderRadius: '50%' }
    ]
  }
];

const CircleAnimation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const [canHorizontalScroll, setCanHorizontalScroll] = useState(false);
  
  const scrollContext = useContext(ScrollContext);

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
  }, [scrollProgress]);

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
    <div ref={containerRef} className="relative w-full h-[200vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">
        
        {/* --- STATIC CIRCLES (moved up 5%) --- */}
        <div
          className="absolute rounded-full"
          style={{
            width: '486.378px',
            height: '486.378px',
            top: 'calc(196.551px - 5vh)',  // ✅ Moved up by 5%
            left: '369.279px',
            backgroundColor: 'transparent',
            boxShadow: 'inset 0px 0px 1.18px 0px rgba(0, 0, 0, 0.25)',
            opacity: 1,
            zIndex: 2
          }}
        ></div>

        <div
          className="absolute rounded-full"
          style={{
            width: '486.378px',
            height: '486.378px',
            top: 'calc(196.551px - 5vh)',  // ✅ Moved up by 5%
            left: '440.343px',
            backgroundColor: 'transparent',
            boxShadow: 'inset 0px 0px 1.18px 0px rgba(0, 0, 0, 0.25)',
            opacity: 1,
            zIndex: 2
          }}
        ></div>

        <div
          className="absolute rounded-full"
          style={{
            width: '415.8px',
            height: '486.378px',
            top: 'calc(196.551px - 5vh)',  // ✅ Moved up by 5%
            left: '440.343px',
            zIndex: 1
          }}
        ></div>

        {/* --- DYNAMIC SHAPES --- */}
        <motion.div
          key={`topLeft-${currentSlide}`}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "tween"
          }}
          className="absolute"
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

        {Array.isArray(slides[currentSlide].bottomRight) ? (
          slides[currentSlide].bottomRight.map((shape, index) => (
            <motion.div
              key={`bottomRight-${currentSlide}-${index}`}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.08 * (index + 1),
                type: "tween"
              }}
              className="absolute"
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
            key={`bottomRight-${currentSlide}`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.12,
              type: "tween"
            }}
            className="absolute"
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

        {/* --- STATIC CONTENT (moved up 5%) --- */}
        <div className="absolute top-[calc(50%-5vh)] left-160 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <p className="text-[#2d7a5a] text-[15px] font-medium mb-2 tracking-wide">
            perspiciatis
          </p>
          <h1 className="text-[#1e7a52] text-[44px] font-bold leading-[1.15] tracking-tight">
            sed ut perspiciatis<br />
            undesed ut persp
          </h1>
        </div>

        {/* --- PAGINATION DOTS (moved up 5%) --- */}
        <div className="absolute bottom-[calc(180px+5vh)] left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-white transition-all duration-300"
              style={{
                opacity: currentSlide === index ? 1 : 0.4,
                transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
              }}
            ></div>
          ))}
        </div>

        {/* Debug Indicator */}
        <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-sm z-50">
          {canHorizontalScroll ? `🟢 Slide ${currentSlide + 1}/${slides.length}` : "🔴 Scroll to activate"}
        </div>
      </div>
    </div>
  );
};

export default CircleAnimation;





