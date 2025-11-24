// "use client"

// import { useRef, useEffect, useCallback, useState, useContext } from 'react';
// import { motion, useTransform, useMotionValue } from 'motion/react';
// import { ScrollContext } from '../../../context/ScrollContext';

// const Harper = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const scrollProgress = useMotionValue(0);
//     const [canHorizontalScroll, setCanHorizontalScroll] = useState(false);
//     const [, setScrollDirection] = useState<'up' | 'down' | 'still'>('still');
//     const lastScrollY = useRef(0);
//     const scrollContext = useContext(ScrollContext);

//     // Array of Harper1 images to display multiple times
//     const images = [
//         { id: 1, src: "/Products/Products7/Harper1.png", alt: "Harper1-1" },
//         { id: 2, src: "/Products/Products7/Harper1.png", alt: "Harper1-2" },
//         { id: 3, src: "/Products/Products7/Harper1.png", alt: "Harper1-3" },
//         { id: 4, src: "/Products/Products7/Harper1.png", alt: "Harper1-4" },
//     ];

//     // **DETECT SCROLL DIRECTION**
//     const detectScrollDirection = useCallback(() => {
//         const scrollContainer = scrollContext?.current;
//         if (!scrollContainer) return;
//         const currentScrollY = scrollContainer.scrollTop;

//         if (currentScrollY > lastScrollY.current) {
//             setScrollDirection('down');
//         } else if (currentScrollY < lastScrollY.current) {
//             setScrollDirection('up');
//         } else {
//             setScrollDirection('still');
//         }

//         lastScrollY.current = currentScrollY;
//     }, [scrollContext]);

//     // **BIDIRECTIONAL SCROLL POSITION CHECK**
//     const checkScrollPosition = useCallback(() => {
//         const scrollContainer = scrollContext?.current;
//         if (!containerRef.current || !scrollContainer) return;

//         const rect = containerRef.current.getBoundingClientRect();

//         // **ENABLE HORIZONTAL SCROLL IN BOTH DIRECTIONS WHEN CONTAINER IS PROPERLY POSITIONED**
//         const shouldEnableHorizontalScroll = (
//             rect.top <= 100 && 
//             rect.top >= -100 && 
//             rect.bottom > scrollContainer.clientHeight * 0.6
//         );

//         setCanHorizontalScroll(shouldEnableHorizontalScroll);
//         detectScrollDirection();
//     }, [detectScrollDirection, scrollContext]);

//     // **LISTEN FOR SCROLL EVENTS TO UPDATE POSITION AND DIRECTION**
//     useEffect(() => {
//         const scrollContainer = scrollContext?.current;
//         if (!scrollContainer) return;

//         const handleScroll = () => {
//             checkScrollPosition();
//         };

//         lastScrollY.current = scrollContainer.scrollTop;
//         scrollContainer.addEventListener('scroll', handleScroll);
//         checkScrollPosition();

//         return () => {
//             scrollContainer.removeEventListener('scroll', handleScroll);
//         };
//     }, [checkScrollPosition, scrollContext]);

//     // **TRANSFORM BASED ON MANUAL SCROLL PROGRESS**
//     const x = useTransform(scrollProgress, [0, 1], ["50%", "-90%"]);

//     // **BIDIRECTIONAL WHEEL EVENT HANDLER**
//     const handleWheel = useCallback((e: WheelEvent) => {
//         if (!containerRef.current) return;
//         const scrollContainer = scrollContext?.current;

//         const container = containerRef.current;
//         const rect = container.getBoundingClientRect();
//         const isInView = rect.top <= 100 && rect.bottom >= (scrollContainer?.clientHeight ?? 0) * 0.5;

//         if (!isInView) return;

//         if (!canHorizontalScroll) {
//             return;
//         }

//         const currentProgress = scrollProgress.get();
//         const scrollSensitivity = 0.002;

//         let newProgress;
//         if (e.deltaY > 0) {
//             newProgress = Math.max(0, Math.min(1, currentProgress + e.deltaY * scrollSensitivity));
//         } else {
//             newProgress = Math.max(0, Math.min(1, currentProgress + e.deltaY * scrollSensitivity));
//         }

//         scrollProgress.set(newProgress);

//         if (newProgress > 0 && newProgress < 1) {
//             e.preventDefault();
//             e.stopPropagation();
//             if (scrollContainer) scrollContainer.style.overflow = 'hidden';
//         } else {
//             if (scrollContainer) scrollContainer.style.overflow = 'auto';
//             setTimeout(() => { if (scrollContainer) scrollContainer.style.overflow = 'auto'; }, 50);
//         }
//     }, [scrollProgress, canHorizontalScroll, scrollContext]);

//     // **ATTACH WHEEL EVENT LISTENERS**
//     useEffect(() => {
//         const container = containerRef.current;
//         const scrollContainer = scrollContext?.current;
//         if (!container || !scrollContainer) return;

//         container.addEventListener('wheel', handleWheel, { passive: false });

//         return () => {
//             container.removeEventListener('wheel', handleWheel);
//             if (scrollContainer) scrollContainer.style.overflow = 'auto';
//         };
//     }, [handleWheel, scrollContext]);

//     return (
//         <div className="font-sans bg-[#ecf4ff]">
//             {/* **CONTAINER WITH EXTRA HEIGHT FOR BIDIRECTIONAL SCROLLING** */}
//             <div ref={containerRef} className="relative bg-[#ecf4ff] h-[80vh]">
//                 <div className="sticky top-0 flex flex-col bg-[#ecf4ff] h-screen">

//                     {/* **HEADER SECTION** */}
//                     <div className="flex-none px-6 md:px-20 py-16">
//                         <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 text-left ml-4 sm:ml-12 md:ml-24">
//                             Sed ut perspiciatis Sed ut
//                         </h1>
//                     </div>

//                     {/* **HORIZONTAL SCROLL SECTION** */}
//                     <div className="flex-1 flex items-center justify-center overflow-hidden px-6 md:px-20">
//                         <motion.div 
//                             style={{ x }} 
//                             className="flex gap-x-8 md:gap-x-16"
//                         >
//                             {images.map((image) => (
//                                 <div 
//                                     key={image.id} 
//                                     className="w-[80vw] md:w-[60vw] flex-shrink-0"
//                                 >
//                                     <div className="relative mx-auto max-w-[1200px] h-[300px] sm:h-[400px] md:h-[560px] rounded-[24px] overflow-visible">
//                                         <img
//                                             src={image.src}
//                                             alt={image.alt}
//                                             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[99%] h-auto object-contain"
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </motion.div>
//                     </div>

//                     {/* **DEBUG INDICATOR** (uncomment if needed) */}
//                     {/* <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-sm z-50">
//                         {canHorizontalScroll ? "🟢 Horizontal Active" : "🔴 Positioning..."}
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Harper;


"use client"

import { useRef, useEffect, useCallback, useState, useContext } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';
import { H1, H2, P } from '../../../styles/Typography';

const Harper = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollProgress = useMotionValue(0);
    const [canHorizontalScroll, setCanHorizontalScroll] = useState(false);
    const [, setScrollDirection] = useState<'up' | 'down' | 'still'>('still');
    const lastScrollY = useRef(0);
    const scrollContext = useContext(ScrollContext);

    // Array of 4 identical content items
    const content = [
        { 
            id: 1, 
            desktopImage: "/Products/Products7/Harper1.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-1",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
        },
        { 
            id: 2, 
            desktopImage: "/Products/Products7/Harper1.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-2",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
        },
        { 
            id: 3, 
            desktopImage: "/Products/Products7/Harper1.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-3",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
        },
        { 
            id: 4, 
            desktopImage: "/Products/Products7/Harper1.png",
            mobileImage: "/Products/Products7/Harper0.png",
            alt: "Harper-4",
            title: "Sed ut perspiciatis Sed ut perspiciatisSed ut perspiciatis",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit"
        },
    ];

    const detectScrollDirection = useCallback(() => {
        const scrollContainer = scrollContext?.current;
        if (!scrollContainer) return;
        const currentScrollY = scrollContainer.scrollTop;

        if (currentScrollY > lastScrollY.current) {
            setScrollDirection('down');
        } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection('up');
        } else {
            setScrollDirection('still');
        }

        lastScrollY.current = currentScrollY;
    }, [scrollContext]);

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
        detectScrollDirection();
    }, [detectScrollDirection, scrollContext]);

    useEffect(() => {
        const scrollContainer = scrollContext?.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            checkScrollPosition();
        };

        lastScrollY.current = scrollContainer.scrollTop;
        scrollContainer.addEventListener('scroll', handleScroll);
        checkScrollPosition();

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [checkScrollPosition, scrollContext]);

    // Transform for horizontal scroll - adjusted to show 20% preview
    const x = useTransform(scrollProgress, [0, 1], ["2.5%", "-80%"]);

    const handleWheel = useCallback((e: WheelEvent) => {
        if (!containerRef.current) return;
        const scrollContainer = scrollContext?.current;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= (scrollContainer?.clientHeight ?? 0) * 0.5;

        if (!isInView || !canHorizontalScroll) return;

        const currentProgress = scrollProgress.get();
        const scrollSensitivity = 0.002;

        const newProgress = Math.max(0, Math.min(1, currentProgress + e.deltaY * scrollSensitivity));
        scrollProgress.set(newProgress);

        if (newProgress > 0 && newProgress < 1) {
            e.preventDefault();
            e.stopPropagation();
            if (scrollContainer) scrollContainer.style.overflow = 'hidden';
        } else {
            if (scrollContainer) scrollContainer.style.overflow = 'auto';
            setTimeout(() => { if (scrollContainer) scrollContainer.style.overflow = 'auto'; }, 50);
        }
    }, [scrollProgress, canHorizontalScroll, scrollContext]);

    useEffect(() => {
        const container = containerRef.current;
        const scrollContainer = scrollContext?.current;
        if (!container || !scrollContainer) return;

        const isDesktop = window.innerWidth >= 1024;
        
        if (isDesktop) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (isDesktop) {
                container.removeEventListener('wheel', handleWheel);
            }
            if (scrollContainer) scrollContainer.style.overflow = 'auto';
        };
    }, [handleWheel, scrollContext]);

    return (
        <div className="font-sans  ">
            
            {/* MOBILE & TABLET: VERTICAL LAYOUT */}
            <div className="block lg:hidden bg-[#F5DDA9]  py-8 px-4">
                <div className="mb-8">
                    <H1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-left ml-2 sm:ml-4">
                        Sed ut perspiciatis Sed ut
                    </H1>
                </div>

                <div className="flex flex-col gap-y-8 sm:gap-y-10">
                    {content.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="relative mx-auto max-w-[600px] h-[280px] sm:h-[340px] md:h-[420px] rounded-[16px] sm:rounded-[20px] overflow-hidden mb-4 sm:mb-6 bg-white p-4">
                                <img
                                    src={item.mobileImage}
                                    alt={item.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="mx-auto max-w-[600px] px-3 sm:px-4">
                                <H2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
                                    {item.title}
                                </H2>
                                <P className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    {item.description}
                                </P>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP: HORIZONTAL SCROLL WITH 20% NEXT CARD PREVIEW */}
            <div 
                ref={containerRef}
                className="hidden lg:block relative bg-[#F5DDA9] h-screen overflow-hidden"
            >
                <div className="sticky top-0 h-screen flex flex-col">
                    
                    {/* Title at Top */}
                    <motion.div 
                        className="flex-none px-20 py-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1
                            style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 700,
                                fontSize: '64px',
                                lineHeight: '100%',
                                color: '#2A2A2A',
                                maxWidth: '1200px',
                                margin: '0 auto'
                            }}
                        >
                            Sed ut perspiciatis Sed ut
                        </h1>
                    </motion.div>

                    {/* Horizontal Scroll Container with 20% Preview */}
                    <div className="flex-1 flex items-center overflow-visible">
                        <motion.div 
                            ref={scrollContainerRef}
                            style={{ x }} 
                            className="flex h-full"
                        >
                            {content.map((item, index) => (
                                <motion.div 
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0"
                                    style={{
                                        width: '80vw', // 80% width to show 20% of next card
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingLeft: index === 0 ? '120px' : '40px',
                                        paddingRight: '40px'
                                    }}
                                >
                                    {/* Card Container */}
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '560px',
                                            background: '#FFFFFF',
                                            borderRadius: '24px',
                                            padding: '40px',
                                            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                                            display: 'flex',
                                            gap: '40px',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {/* Left: Image */}
                                        <div
                                            style={{
                                                flex: '0 0 50%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <img
                                                src={item.desktopImage}
                                                alt={item.alt}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>

                                        {/* Right: Text Content */}
                                        <div
                                            style={{
                                                flex: '0 0 50%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <h2
                                                style={{
                                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                                    fontWeight: 700,
                                                    fontSize: '32px',
                                                    lineHeight: '120%',
                                                    color: '#2A2A2A',
                                                    marginBottom: '24px'
                                                }}
                                            >
                                                {item.title}
                                            </h2>
                                            <p
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontWeight: 400,
                                                    fontSize: '18px',
                                                    lineHeight: '160%',
                                                    color: '#666666'
                                                }}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Harper;
