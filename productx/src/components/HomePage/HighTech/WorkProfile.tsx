// import { useEffect } from 'react';

// const WorkProfile = () => {
//     // const [activeSection, setActiveSection] = useState(0);

//     const sections = [
//         {
//             id: 1,
//             number: "1",
//             title: "ROCK SOLID TECHNOLOGY",
//             description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
//             image: "/AboutUs/High2.png",
//             bgColor: "bg-[#F99526]",
//             textColor: "text-black"
//         },
//         {
//             id: 2,
//             number: "2",
//             title: "ROCK SOLID TECHNOLOGY",
//             description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
//             image: "/AboutUs/High1.png",
//             bgColor: "bg-[#230053]",
//             textColor: "text-white"
//         },
//         {
//             id: 3,
//             number: "3",
//             title: "ROCK SOLID TECHNOLOGY",
//             description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
//             image: "/AboutUs/High3.png",
//             bgColor: "bg-[#5C5C5C]",
//             textColor: "text-[#F99526]"
//         }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             const windowHeight = window.innerHeight;

//             // Check each section to see if it's 30% visible
//             sections.forEach((_, index) => {
//                 const sectionTop = index * windowHeight;
//                 const sectionVisibility = scrollPosition - sectionTop;
//                 const visibilityPercentage = (sectionVisibility / windowHeight) * 100;

//                 // Change image when section is 30% visible
//                 if (visibilityPercentage >= 30 && visibilityPercentage < 70) {
//                     //(index);
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     });

//     return (
//         <div className="relative ">


//             {sections.map((section, index) => (
//                 <div
//                     key={section.id}
//                     className={`h-screen ${section.bgColor} sticky top-0 flex items-center justify-between px-6 sm:px-12 lg:px-24`}
//                     style={{ zIndex: index + 1 }}
//                 >

//                     <div className="max-w-8xl mx-auto px-6 flex items-center justify-between w-full">
//                         {/* Left Side – Number */}
//                         <div className="flex-shrink-0">
//                             <h1
//                                 className={`text-[10rem] sm:text-[12rem] lg:text-[14rem] font-bold ${section.textColor} opacity-90 leading-none`}
//                             >
//                                 {section.number}
//                             </h1>
//                         </div>

//                         {/* Right Side – Title, Paragraph, Image */}
//                         <div className="flex flex-col items-start justify-center text-left space-y-6 max-w-2xl">
//                             <h2
//                                 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${section.textColor} tracking-wide`}
//                             >
//                                 {section.title}
//                             </h2>
//                             <p
//                                 className={`text-sm sm:text-base ${section.textColor} leading-relaxed`}
//                             >
//                                 {section.description}
//                             </p>

//                             <img
//                                 src={section.image}
//                                 alt={section.title}
//                                 className="w-96 h-96 mt-6 rounded-xl object-cover shadow-lg"
//                             />
//                         </div>
//                     </div>

//                 </div>

//             ))}
//         </div>
//     );
// };

// export default WorkProfile;

// import { useContext, useEffect, useState, useRef } from 'react';
// import { motion, useMotionValue } from 'framer-motion';
// import { ScrollContext } from '../../../context/ScrollContext';

// const WorkProfile = () => {
//     const [scrollY, setScrollY] = useState(0);
//     const [containerHeight, setContainerHeight] = useState(0);
    
//     const workProfileRef = useRef<HTMLDivElement>(null);
//     const scrollableContainerRef = useContext(ScrollContext);

//     // Motion values
//     const imageOpacity = [useMotionValue(0), useMotionValue(0), useMotionValue(0)];
//     const imageY = [useMotionValue(0), useMotionValue(0), useMotionValue(0)];
//     const containerOpacity = useMotionValue(0);
//     const overlayOpacity = [useMotionValue(0), useMotionValue(0), useMotionValue(0)];

//     const sections = [
//         {
//             id: 1,
//             number: "(01)",
//             title: "OPENNESS",
//             description: "We embrace unique and diverse perspectives to open up the limitless potential of creativity.",
//             image: "/AboutUs/High2.png",
//             bgColor: "bg-[#E8A5A5]",
//         },
//         {
//             id: 2,
//             number: "(02)",
//             title: "OPTIMISM",
//             description: "We believe in better, because no matter the challenge creativity is always up to the task.",
//             image: "/AboutUs/High1.png",
//             bgColor: "bg-[#F5C842]",
//         },
//         {
//             id: 3,
//             number: "(03)",
//             title: "OPPORTUNITY",
//             description: "We reach for every chance to grow, to lead, to elevate. For our people, our brands and the world we share, up is our journey, not our destination.",
//             image: "/AboutUs/High3.png",
//             bgColor: "bg-[#FF6B4A]",
//         }
//     ];

//     useEffect(() => {
//         if (!scrollableContainerRef?.current) return;

//         const calculateHeight = () => {
//             const containerH = scrollableContainerRef?.current?.clientHeight ?? 0;
//             setContainerHeight(containerH);
//         };

//         setTimeout(calculateHeight, 300);
//         window.addEventListener('resize', calculateHeight);

//         return () => window.removeEventListener('resize', calculateHeight);
//     }, [scrollableContainerRef]);

//     const clamp = (value: number, min: number, max: number) => {
//         return Math.min(Math.max(value, min), max);
//     };

//     useEffect(() => {
//         if (!scrollableContainerRef?.current || containerHeight === 0) return;

//         const handleScroll = () => {
//             try {
//                 const scroll = scrollableContainerRef?.current?.scrollTop ?? 0;
//                 const workProfileElement = workProfileRef.current;

//                 if (!workProfileElement) return;

//                 setScrollY(scroll);

//                 const workProfileTop = workProfileElement.offsetTop;
//                 const sectionHeight = containerHeight;
//                 const workProfileBottom = workProfileTop + (sectionHeight * 3);

//                 // ===== STRICTLY HIDE OUTSIDE WORKPROFILE =====
//                 if (scroll < workProfileTop || scroll >= workProfileBottom) {
//                     containerOpacity.set(0);
//                     imageOpacity[0].set(0);
//                     imageOpacity[1].set(0);
//                     imageOpacity[2].set(0);
//                     overlayOpacity[0].set(0);
//                     overlayOpacity[1].set(0);
//                     overlayOpacity[2].set(0);
//                     return;
//                 }

//                 // ===== INSIDE WORKPROFILE - SHOW IMAGES =====
//                 containerOpacity.set(1);

//                 const scrollWithinWorkProfile = scroll - workProfileTop;
//                 const currentSectionIndex = Math.floor(scrollWithinWorkProfile / sectionHeight);
//                 const sectionProgress = (scrollWithinWorkProfile % sectionHeight) / sectionHeight;

//                 // ===== SECTION 1 =====
//                 if (currentSectionIndex === 0) {
//                     imageOpacity[0].set(1);
//                     imageOpacity[1].set(0);
//                     imageOpacity[2].set(0);
                    
//                     // Subtle float
//                     const floatProgress = Math.min(sectionProgress / 0.85, 1);
//                     const yValue = -floatProgress * 15;
//                     imageY[0].set(clamp(yValue, -15, 0));
                    
//                     // Overlay increases as scrolling
//                     overlayOpacity[0].set(sectionProgress * 0.4);
                    
//                     // Transition at 85%
//                     if (sectionProgress >= 0.85) {
//                         const fadeProgress = (sectionProgress - 0.85) / 0.15;
//                         imageOpacity[0].set(1 - fadeProgress);
//                         imageOpacity[1].set(fadeProgress);
//                         imageY[1].set(0);
//                     } else {
//                         overlayOpacity[1].set(0);
//                     }
                    
//                     overlayOpacity[2].set(0);
//                 }
                
//                 // ===== SECTION 2 =====
//                 else if (currentSectionIndex === 1) {
//                     imageOpacity[0].set(0);
//                     imageOpacity[1].set(1);
//                     imageOpacity[2].set(0);
                    
//                     // Subtle float
//                     const floatProgress = Math.min(sectionProgress / 0.85, 1);
//                     const yValue = -floatProgress * 15;
//                     imageY[1].set(clamp(yValue, -15, 0));
                    
//                     // Overlay increases
//                     overlayOpacity[1].set(sectionProgress * 0.4);
                    
//                     // Transition at 85%
//                     if (sectionProgress >= 0.85) {
//                         const fadeProgress = (sectionProgress - 0.85) / 0.15;
//                         imageOpacity[1].set(1 - fadeProgress);
//                         imageOpacity[2].set(fadeProgress);
//                         imageY[2].set(0);
//                     } else {
//                         overlayOpacity[2].set(0);
//                     }
                    
//                     overlayOpacity[0].set(0);
//                 }
                
//                 // ===== SECTION 3 =====
//                 else if (currentSectionIndex === 2) {
//                     imageOpacity[0].set(0);
//                     imageOpacity[1].set(0);
//                     imageOpacity[2].set(1);
                    
//                     // Float only in first 50%
//                     if (sectionProgress < 0.5) {
//                         const floatProgress = sectionProgress * 2;
//                         const yValue = -floatProgress * 15;
//                         imageY[2].set(clamp(yValue, -15, 0));
//                     } else {
//                         imageY[2].set(-15);
//                     }
                    
//                     // Overlay increases
//                     overlayOpacity[2].set(sectionProgress * 0.4);
                    
//                     overlayOpacity[0].set(0);
//                     overlayOpacity[1].set(0);
//                 }

//             } catch (error) {
//                 console.error('Scroll handler error:', error);
//             }
//         };

//         const container = scrollableContainerRef.current;
//         container.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => container.removeEventListener('scroll', handleScroll);
//     }, [scrollableContainerRef, containerHeight, imageOpacity, imageY, containerOpacity, overlayOpacity]);

//     return (
//         <div ref={workProfileRef} className="beliefs-wrap relative bg-white w-full">
//             <div className="beliefs-outer relative">
//                 {sections.map((section, index) => (
//                     <div
//                         key={section.id}
//                         soft-pin=""
//                         className="belief-item_wrap h-screen relative"
//                         style={{
//                             position: 'sticky',
//                             top: 0,
//                         }}
//                     >
//                         <motion.div
//                             className={`belief-item_layout h-full ${section.bgColor} flex flex-col items-center justify-center relative`}
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true, amount: 0.3 }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             {/* TOP SECTION */}
//                             <div className="belief-item_top w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 flex items-start justify-between mb-12 gap-8 relative z-10">
//                                 <motion.div
//                                     className="belief-title_left flex-shrink-0"
//                                     initial={{ opacity: 0, x: -50 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true, amount: 0.5 }}
//                                     transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//                                 >
//                                     <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light text-white opacity-60 italic leading-none">
//                                         {section.number}
//                                     </h1>
//                                 </motion.div>

//                                 <motion.div
//                                     className="belief-title_right flex-1 text-right"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true, amount: 0.5 }}
//                                     transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
//                                 >
//                                     <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wider uppercase">
//                                         {section.title}
//                                     </h2>
//                                 </motion.div>
//                             </div>

//                             {/* MIDDLE SECTION */}
//                             <motion.div
//                                 className="belief-item_mid w-full max-w-2xl mx-auto px-6 sm:px-12 mb-8 relative z-10"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true, amount: 0.5 }}
//                                 transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                             >
//                                 <p className="belief-item_paragraph text-base sm:text-lg text-white leading-relaxed font-light text-center">
//                                     {section.description}
//                                 </p>
//                             </motion.div>
//                         </motion.div>

//                         {/* OVERLAY - LIKE REFERENCE */}
//                         <motion.div
//                             softpin-overlay=""
//                             className="belief-overlay absolute inset-0 bg-black pointer-events-none"
//                             style={{ opacity: overlayOpacity[index] }}
//                         />
//                     </div>
//                 ))}

//                 {/* FLOATING IMAGES - STRICT BOUNDARIES */}
//                 <motion.div 
//                     className="beliefs-img_wrap fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[720px] aspect-square px-4 sm:px-6 md:px-8 z-50 pointer-events-none"
//                     style={{ 
//                         opacity: containerOpacity,
//                         willChange: 'transform, opacity',
//                         display: containerOpacity.get() === 0 ? 'none' : 'block'
//                     }}
//                 >
//                     <div className="belief-item_img_contain relative w-52 h-52">
//                         {sections.map((section, index) => (
//                             <motion.img
//                                 key={section.id}
//                                 src={section.image}
//                                 alt={section.title}
//                                 sizes="(max-width: 720px) 100vw, 720px"
//                                 className={`beliefs-img absolute inset-0 w-full h-full rounded-2xl object-cover shadow-2xl`}
//                                 style={{
//                                     opacity: imageOpacity[index],
//                                     y: imageY[index],
//                                 }}
//                                 loading="lazy"
//                             />
//                         ))}
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default WorkProfile;


// import { useContext, useEffect, useState, useRef } from 'react';
// import { motion, useMotionValue } from 'framer-motion';
// import { ScrollContext } from '../../../context/ScrollContext';

// const WorkProfile = () => {
//     const [, setScrollY] = useState(0);
//     const [containerHeight, setContainerHeight] = useState(0);
//     const [isInView, setIsInView] = useState(false);
    
//     const workProfileRef = useRef<HTMLDivElement>(null);
//     const scrollableContainerRef = useContext(ScrollContext);

//     const imageOpacity = [useMotionValue(1), useMotionValue(0), useMotionValue(0)];
//     const overlayOpacity = [useMotionValue(0), useMotionValue(0), useMotionValue(0)];
//     const masterOpacity = useMotionValue(0);

//     const sections = [
//         {
//             id: 1,
//             number: "(01)",
//             title: "OPENNESS",
//             description: "We embrace unique and diverse perspectives to open up the limitless potential of creativity.",
//             image: "/AboutUs/High2.png",
//             bgColor: "bg-[#E8A5A5]",
//         },
//         {
//             id: 2,
//             number: "(02)",
//             title: "OPTIMISM",
//             description: "We believe in better, because no matter the challenge creativity is always up to the task.",
//             image: "/AboutUs/High1.png",
//             bgColor: "bg-[#F5C842]",
//         },
//         {
//             id: 3,
//             number: "(03)",
//             title: "OPPORTUNITY",
//             description: "We reach for every chance to grow, to lead, to elevate. For our people, our brands and the world we share, up is our journey, not our destination.",
//             image: "/AboutUs/High3.png",
//             bgColor: "bg-[#FF6B4A]",
//         }
//     ];

//     useEffect(() => {
//         if (!scrollableContainerRef?.current) return;

//         const calculateHeight = () => {
//             const containerH = scrollableContainerRef?.current?.clientHeight ?? 0;
//             setContainerHeight(containerH);
//         };

//         setTimeout(calculateHeight, 300);
//         window.addEventListener('resize', calculateHeight);

//         return () => window.removeEventListener('resize', calculateHeight);
//     }, [scrollableContainerRef]);

//     useEffect(() => {
//     if (!scrollableContainerRef?.current || containerHeight === 0) return;

//     const handleScroll = () => {
//         try {
//             const scroll = scrollableContainerRef?.current?.scrollTop ?? 0;
//             const workProfileElement = workProfileRef.current;

//             if (!workProfileElement) return;

//             setScrollY(scroll);

//             const workProfileTop = workProfileElement.offsetTop;
//             const sectionHeight = containerHeight;
//             const workProfileBottom = workProfileTop + (sectionHeight * 3);
            
//             const viewportTop = scroll;
//             const viewportBottom = scroll + containerHeight;
            
//             // ===== KEY CHANGE: Only show when Section 1 is entering/in viewport =====
//             const section1Bottom = workProfileTop + sectionHeight;
            
//             // Show image only when section 1 is at least 10% visible
//             const section1VisibleStart = workProfileTop - containerHeight * 0.001; // 10% visible
//             const isSection1Visible = scroll >= section1VisibleStart && scroll < workProfileBottom;

//             if (!isSection1Visible) {
//                 masterOpacity.set(0);
//                 setIsInView(false);
//                 return;
//             }

//             setIsInView(true);
//             masterOpacity.set(1);

//             // ===== BEFORE SECTION 1 IS FULLY IN VIEW =====
//             if (scroll < workProfileTop) {
//                 imageOpacity[0].set(1);
//                 imageOpacity[1].set(0);
//                 imageOpacity[2].set(0);
//                 overlayOpacity[0].set(0);
//                 overlayOpacity[1].set(0);
//                 overlayOpacity[2].set(0);
//                 return;
//             }

//             // ===== AFTER SECTION 3 =====
//             if (scroll >= workProfileBottom) {
//                 imageOpacity[0].set(0);
//                 imageOpacity[1].set(0);
//                 imageOpacity[2].set(1);
//                 overlayOpacity[0].set(0);
//                 overlayOpacity[1].set(0);
//                 overlayOpacity[2].set(0);
//                 return;
//             }

//             const scrollWithinWorkProfile = scroll - workProfileTop;
//             const currentSectionIndex = Math.floor(scrollWithinWorkProfile / sectionHeight);
//             const sectionProgress = (scrollWithinWorkProfile % sectionHeight) / sectionHeight;

//             if (currentSectionIndex === 0) {
//                 imageOpacity[0].set(1);
//                 imageOpacity[1].set(0);
//                 imageOpacity[2].set(0);
//                 overlayOpacity[0].set(sectionProgress * 0.4);
                
//                 if (sectionProgress >= 0.85) {
//                     const fadeProgress = (sectionProgress - 0.85) / 0.15;
//                     imageOpacity[0].set(1 - fadeProgress);
//                     imageOpacity[1].set(fadeProgress);
//                 } else {
//                     overlayOpacity[1].set(0);
//                 }
//                 overlayOpacity[2].set(0);
//             }
//             else if (currentSectionIndex === 1) {
//                 imageOpacity[0].set(0);
//                 imageOpacity[1].set(1);
//                 imageOpacity[2].set(0);
//                 overlayOpacity[1].set(sectionProgress * 0.4);
                
//                 if (sectionProgress >= 0.85) {
//                     const fadeProgress = (sectionProgress - 0.85) / 0.15;
//                     imageOpacity[1].set(1 - fadeProgress);
//                     imageOpacity[2].set(fadeProgress);
//                 } else {
//                     overlayOpacity[2].set(0);
//                 }
//                 overlayOpacity[0].set(0);
//             }
//             else if (currentSectionIndex === 2) {
//                 imageOpacity[0].set(0);
//                 imageOpacity[1].set(0);
//                 imageOpacity[2].set(1);
//                 overlayOpacity[2].set(sectionProgress * 0.4);
//                 overlayOpacity[0].set(0);
//                 overlayOpacity[1].set(0);
//             }

//         } catch (error) {
//             console.error('Scroll handler error:', error);
//         }
//     };

//     const container = scrollableContainerRef.current;
//     container.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => container.removeEventListener('scroll', handleScroll);
// }, [scrollableContainerRef, containerHeight, imageOpacity, overlayOpacity, masterOpacity]);


//     return (
//         <div ref={workProfileRef} className="beliefs-component relative">
//             <div className="beliefs-section">
//                 <div className="beliefs-wrap relative bg-white w-full">
//                     <div className="beliefs-outer relative">
//                         {sections.map((section, index) => (
//                             <div
//                                 key={section.id}
//                                 soft-pin=""
//                                 className="belief-item_wrap h-screen relative"
//                                 style={{
//                                     position: 'sticky',
//                                     top: 0,
//                                 }}
//                             >
//                                 <motion.div
//                                     className={`belief-item_layout h-full ${section.bgColor} flex flex-col items-center justify-center relative overflow-hidden`}
//                                     initial={{ opacity: 0 }}
//                                     whileInView={{ opacity: 1 }}
//                                     viewport={{ once: true, amount: 0.3 }}
//                                     transition={{ duration: 0.8 }}
//                                 >
//                                     <div className="belief-item_top w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 flex items-start justify-between mb-12 gap-8 relative z-10">
//                                         <motion.div
//                                             className="belief-title_left flex-shrink-0"
//                                             initial={{ opacity: 0, x: -50 }}
//                                             whileInView={{ opacity: 1, x: 0 }}
//                                             viewport={{ once: true, amount: 0.5 }}
//                                             transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
//                                         >
//                                             <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light text-white opacity-60 italic leading-none">
//                                                 {section.number}
//                                             </h1>
//                                         </motion.div>

//                                         <motion.div
//                                             className="belief-title_right flex-1 text-right"
//                                             initial={{ opacity: 0, y: 30 }}
//                                             whileInView={{ opacity: 1, y: 0 }}
//                                             viewport={{ once: true, amount: 0.5 }}
//                                             transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
//                                         >
//                                             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-wider uppercase">
//                                                 {section.title}
//                                             </h2>
//                                         </motion.div>
//                                     </div>

//                                     <motion.div
//                                         className="belief-item_mid w-full max-w-2xl mx-auto px-6 sm:px-12 mb-8 relative z-10"
//                                         initial={{ opacity: 0, y: 30 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true, amount: 0.5 }}
//                                         transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                                     >
//                                         <p className="belief-item_paragraph text-base sm:text-lg text-white leading-relaxed font-light text-center">
//                                             {section.description}
//                                         </p>
//                                     </motion.div>

//                                     {/* FIXED IMAGE INSIDE EACH STICKY CARD */}
//                                     <motion.div 
//                                         className="beliefs-img_wrap fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
//                                         style={{ 
//                                             opacity: masterOpacity,
//                                             visibility: isInView ? 'visible' : 'hidden',
//                                             willChange: 'opacity'
//                                         }}
//                                     >
//                                         <div className="belief-item_img_contain relative w-52 h-52">
//                                             {sections.map((imgSection, imgIndex) => (
//                                                 <motion.img
//                                                     key={imgSection.id}
//                                                     src={imgSection.image}
//                                                     alt={imgSection.title}
//                                                     className={`beliefs-img absolute inset-0 w-full h-full rounded-2xl object-cover shadow-2xl ${
//                                                         imgIndex === 0 ? 'show' : ''
//                                                     }`}
//                                                     style={{
//                                                         opacity: imageOpacity[imgIndex],
//                                                     }}
//                                                     loading="eager"
//                                                 />
//                                             ))}
//                                         </div>
//                                     </motion.div>
//                                 </motion.div>

//                                 <motion.div
//                                     softpin-overlay=""
//                                     className="belief-overlay absolute inset-0 bg-black pointer-events-none"
//                                     style={{ opacity: overlayOpacity[index] }}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WorkProfile;


import { useContext, useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ScrollContext } from '../../../context/ScrollContext';

const WorkProfile = () => {
    const [, setScrollY] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [isInView, setIsInView] = useState(false);
    
    const workProfileRef = useRef<HTMLDivElement>(null);
    const scrollableContainerRef = useContext(ScrollContext);

    const imageOpacity = [useMotionValue(1), useMotionValue(0), useMotionValue(0)];
    const overlayOpacity = [useMotionValue(0), useMotionValue(0), useMotionValue(0)];
    const masterOpacity = useMotionValue(0);

    const sections = [
        {
            id: 1,
            number: "1",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High2.png",
            bgColor: "bg-[#F99526]",
            textColor: "text-black"
        },
        {
            id: 2,
            number: "2",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High1.png",
            bgColor: "bg-[#230053]",
            textColor: "text-white"
        },
        {
            id: 3,
            number: "3",
            title: "ROCK SOLID TECHNOLOGY",
            description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
            image: "/AboutUs/High3.png",
            bgColor: "bg-[#5C5C5C]",
            textColor: "text-[#F99526]"
        }
    ];

    useEffect(() => {
        if (!scrollableContainerRef?.current) return;

        const calculateHeight = () => {
            const containerH = scrollableContainerRef?.current?.clientHeight ?? 0;
            setContainerHeight(containerH);
        };

        setTimeout(calculateHeight, 300);
        window.addEventListener('resize', calculateHeight);

        return () => window.removeEventListener('resize', calculateHeight);
    }, [scrollableContainerRef]);

    useEffect(() => {
        if (!scrollableContainerRef?.current || containerHeight === 0) return;

        const handleScroll = () => {
            try {
                const scroll = scrollableContainerRef?.current?.scrollTop ?? 0;
                const workProfileElement = workProfileRef.current;

                if (!workProfileElement) return;

                setScrollY(scroll);

                const workProfileTop = workProfileElement.offsetTop;
                const sectionHeight = containerHeight;
                const workProfileBottom = workProfileTop + (sectionHeight * 3);
                
                const section1VisibleStart = workProfileTop - containerHeight * 0.001;
                const isSection1Visible = scroll >= section1VisibleStart && scroll < workProfileBottom;

                if (!isSection1Visible) {
                    masterOpacity.set(0);
                    setIsInView(false);
                    return;
                }

                setIsInView(true);
                masterOpacity.set(1);

                if (scroll < workProfileTop) {
                    imageOpacity[0].set(1);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(0);
                    overlayOpacity[0].set(0);
                    overlayOpacity[1].set(0);
                    overlayOpacity[2].set(0);
                    return;
                }

                if (scroll >= workProfileBottom) {
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(1);
                    overlayOpacity[0].set(0);
                    overlayOpacity[1].set(0);
                    overlayOpacity[2].set(0);
                    return;
                }

                const scrollWithinWorkProfile = scroll - workProfileTop;
                const currentSectionIndex = Math.floor(scrollWithinWorkProfile / sectionHeight);
                const sectionProgress = (scrollWithinWorkProfile % sectionHeight) / sectionHeight;

                if (currentSectionIndex === 0) {
                    imageOpacity[0].set(1);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(0);
                    overlayOpacity[0].set(sectionProgress * 0.4);
                    
                    if (sectionProgress >= 0.85) {
                        const fadeProgress = (sectionProgress - 0.85) / 0.15;
                        imageOpacity[0].set(1 - fadeProgress);
                        imageOpacity[1].set(fadeProgress);
                    } else {
                        overlayOpacity[1].set(0);
                    }
                    overlayOpacity[2].set(0);
                }
                else if (currentSectionIndex === 1) {
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(1);
                    imageOpacity[2].set(0);
                    overlayOpacity[1].set(sectionProgress * 0.4);
                    
                    if (sectionProgress >= 0.85) {
                        const fadeProgress = (sectionProgress - 0.85) / 0.15;
                        imageOpacity[1].set(1 - fadeProgress);
                        imageOpacity[2].set(fadeProgress);
                    } else {
                        overlayOpacity[2].set(0);
                    }
                    overlayOpacity[0].set(0);
                }
                else if (currentSectionIndex === 2) {
                    imageOpacity[0].set(0);
                    imageOpacity[1].set(0);
                    imageOpacity[2].set(1);
                    overlayOpacity[2].set(sectionProgress * 0.4);
                    overlayOpacity[0].set(0);
                    overlayOpacity[1].set(0);
                }

            } catch (error) {
                console.error('Scroll handler error:', error);
            }
        };

        const container = scrollableContainerRef.current;
        container.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollableContainerRef, containerHeight, imageOpacity, overlayOpacity, masterOpacity]);

    return (
        <div ref={workProfileRef} className="beliefs-component relative" style={{ height: containerHeight * sections.length }}>
            <div className="beliefs-section">
                <div className="beliefs-wrap relative bg-white w-full">
                    <div className="beliefs-outer relative">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                soft-pin=""
                                className="belief-item_wrap h-screen relative"
                                style={{
                                    position: 'sticky',
                                    top: 0,
                                    // zIndex: index + 1,
                                }}
                            >
                                {/* CRITICAL: Added overflow-hidden to clip the image */}
                                <motion.div
                                    className={`belief-item_layout h-full ${section.bgColor} flex items-center justify-between px-6 sm:px-12 lg:px-24 relative overflow-hidden`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {/* LEFT SIDE - NUMBER */}
                                    <motion.div
                                        className="flex-shrink-0"
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        <h1 className={`text-[10rem] sm:text-[12rem] lg:text-[14rem] font-bold ${section.textColor} opacity-90 leading-none`}>
                                            {section.number}
                                        </h1>
                                    </motion.div>

                                    {/* RIGHT SIDE - TITLE & DESCRIPTION */}
                                    <div className="flex flex-col items-start justify-center text-left space-y-6 max-w-2xl relative z-10">
                                        <motion.h2
                                            className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${section.textColor} tracking-wide`}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                        >
                                            {section.title}
                                        </motion.h2>

                                        <motion.p
                                            className={`text-sm sm:text-base ${section.textColor} leading-relaxed`}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                        >
                                            {section.description}
                                        </motion.p>
                                    </div>

                                    {/* FIXED STICKY IMAGE - CENTER */}
                                    <motion.div 
                                        className="beliefs-img_wrap fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                                        style={{ 
                                            opacity: masterOpacity,
                                            visibility: isInView ? 'visible' : 'hidden',
                                            willChange: 'opacity'
                                        }}
                                    >
                                        <div className="belief-item_img_contain relative w-52 h-52 top-50 left-20 bottom-40 z-">
                                            {sections.map((imgSection, imgIndex) => (
                                                <motion.img
                                                    key={imgSection.id}
                                                    src={imgSection.image}
                                                    alt={imgSection.title}
                                                    className="beliefs-img absolute inset-0 w-full h-full rounded-xl object-cover shadow-lg"
                                                    style={{
                                                        opacity: imageOpacity[imgIndex],
                                                    }}
                                                    loading="eager"
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    softpin-overlay=""
                                    className="belief-overlay absolute inset-0 bg-black pointer-events-none"
                                    style={{ opacity: overlayOpacity[index] }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProfile;




