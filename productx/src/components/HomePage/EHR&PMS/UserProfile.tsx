// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// interface Testimonial {
//   id: number
//   badge: string
//   company: string
//   quote: string
//   personName: string
//   role: string
//   image: string
//   bgColor: string
//   textColor: string
//   accentColor: string
//   details: {
//     partner?: string
//     latestFund?: string
//     lpBase?: string
//     headquarters?: string
//     investments?: string
//     podcast?: string
//     latestFundAlt?: string
//     institutionalLps?: string
//   }
//   logo: string
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     badge: "Former founder",
//     company: "GTMfund",
//     quote:
//       "For Fund II, we transitioned to a traditional closed-end fund with institutional support. This allowed us to be more intentional about our portfolio construction—how many deals we're doing, our check sizes, and the overall fund size. We worked closely with AngelList throughout this transition, and their team was incredible in supporting us.",
//     personName: "Paul Irving",
//     role: "PARTNER",
//     image: "/man-with-glasses-professional-headshot.jpg",
//     bgColor: "bg-violet-300",
//     textColor: "text-slate-900",
//     accentColor: "text-slate-700",
//     details: {
//       partner: "Paul Irving",
//       latestFund: "$54M Fund II",
//       lpBase: "350+ GTM Leaders",
//     },
//     logo: "GTMfund",
//   },
//   {
//     id: 2,
//     badge: "Former founder",
//     company: "Cocoa Ventures",
//     quote:
//       "Every day, I'm grateful for AngelList. They give Cocoa Ventures the power to run like a top-tier fund on a microfund budget. The team is exceptional: the quality of their work, their speed of execution, and their problem-solving mindset truly supercharge Cocoa. I recommend AngelList to every new manager I meet.",
//     personName: "Carmen Alfonso Rico",
//     role: "PARTNER",
//     image: "/woman-with-red-jacket-professional-headshot.jpg",
//     bgColor: "bg-teal-800",
//     textColor: "text-white",
//     accentColor: "text-teal-100",
//     details: {
//       partner: "Carmen Alfonso Rico",
//       headquarters: "London",
//       investments: "Pre-seed, Seed",
//     },
//     logo: "COCO",
//   },
//   {
//     id: 3,
//     badge: "Media-driven VC",
//     company: "20VC",
//     quote:
//       "AngelList removes the friction of running a fund. They make it easy to raise, manage, and deploy capital all while offering customizations and an extremely high level of service.",
//     personName: "Harry Stebbings",
//     role: "PARTNER",
//     image: "/professional-man-headshot.png",
//     bgColor: "bg-violet-300",
//     textColor: "text-slate-900",
//     accentColor: "text-slate-700",
//     details: {
//       partner: "Harry Stebbings",
//       investments: "Pre-seed, Seed, Series A",
//       podcast: "20VC",
//     },
//     logo: "20VC",
//   },
//   {
//     id: 4,
//     badge: "Current founder",
//     company: "Browser Capital",
//     quote:
//       "When we launched Fund 4 with backing from top institutions, like Sequoia + Cendana Capital, we knew we needed a partner who could support all our ILP needs — AngelList was that partner. Their timely reporting, white-glove LP service, and intuitive, software-first platform enabled us to be institutional ready.",
//     personName: "Joshua Browder",
//     role: "PARTNER",
//     image: "/man-with-glasses-professional-headshot.jpg",
//     bgColor: "bg-amber-700",
//     textColor: "text-white",
//     accentColor: "text-amber-100",
//     details: {
//       partner: "Joshua Browder",
//       latestFundAlt: "$30M Fund IV",
//       institutionalLps: "Sequoia Capital, Cendana Capital",
//     },
//     logo: "Browder Capital",
//   },
// ]

// export default function UserProfile() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isTransitioning, setIsTransitioning] = useState(false)

//   const totalSlides = testimonials.length

//   // Auto-scroll every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isTransitioning && currentIndex < totalSlides - 1) {
//         goToNext()
//       }
//     }, 6000)

//     return () => clearInterval(interval)
//   }, [currentIndex, isTransitioning])

//   const goToPrevious = () => {
//     if (isTransitioning || currentIndex === 0) return
//     setIsTransitioning(true)
//     setCurrentIndex((prev) => prev - 1)
//   }

//   const goToNext = () => {
//     if (isTransitioning || currentIndex === totalSlides - 1) return
//     setIsTransitioning(true)
//     setCurrentIndex((prev) => prev + 1)
//   }

//   const goToSlide = (index: number) => {
//     if (isTransitioning || index === currentIndex) return
//     setIsTransitioning(true)
//     setCurrentIndex(index)
//   }

//   // Reset transition state
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsTransitioning(false)
//     }, 800)

//     return () => clearTimeout(timer)
//   }, [currentIndex])

//   const hasLeftPreview = currentIndex > 0
//   const hasRightPreview = currentIndex < totalSlides - 1

//   return (
//     <div className="min-h-screen flex flex-col justify-between px-4 py-8">
//       <div className="flex-1 flex items-center justify-center overflow-hidden relative">
//         {/* Full-width Carousel Container with centered active card */}
//         <div className="relative w-full h-full flex items-center justify-center">
//           <div className="relative w-full h-[500px] flex items-center justify-center">
//             {/* Carousel wrapper - positioned to show previews */}
//             <motion.div
//               className="flex items-center justify-center gap-4"
//               style={{
//                 width: "100%",
//                 position: "relative",
//               }}
//             >
//               {/* All cards rendered */}
//               {testimonials.map((testimonial, index) => {
//                 // Calculate position offset from current
//                 const offset = index - currentIndex
                
//                 // Calculate visibility and styling
//                 const isActive = index === currentIndex
//                 const isPrevious = index === currentIndex - 1
//                 const isNext = index === currentIndex + 1
//                 const isVisible = isActive || isPrevious || isNext
                
//                 // Calculate translateX to position cards
//                 // Active card at center (0%), previous at -85%, next at +85%
//                 let translateX = 0
//                 if (isPrevious) translateX = -85
//                 else if (isNext) translateX = 85
//                 else if (offset < -1) translateX = -200
//                 else if (offset > 1) translateX = 200
                
//                 const scale = isActive ? 1 : 0.88
//                 const opacity = isActive ? 1 : (isPrevious || isNext) ? 0.6 : 0
//                 const zIndex = isActive ? 20 : isVisible ? 10 : 0

//                 return (
//                   <motion.div
//                     key={testimonial.id}
//                     className="absolute"
//                     style={{
//                       zIndex,
//                       width: "80vw",
//                       left: "50%",
//                       top: "50%",
//                       marginLeft: "-40vw", // Center the card
//                       marginTop: "-225px", // Half of min-height to center vertically
//                     }}
//                     animate={{
//                       x: `${translateX}%`,
//                       scale,
//                       opacity,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 80,
//                       damping: 22,
//                       mass: 0.9,
//                     }}
//                   >
//                     <div
//                       className={`${testimonial.bgColor} rounded-3xl shadow-2xl`}
//                       style={{
//                         minHeight: "450px",
//                         padding: "3rem",
//                         display: "flex",
//                         gap: "3rem",
//                         alignItems: "stretch",
//                       }}
//                     >
//                       {/* Left Content */}
//                       <div className="flex-1 flex flex-col justify-between">
//                         {/* Badge */}
//                         <motion.div
//                           initial={{ opacity: 0, y: -20 }}
//                           animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
//                           transition={{ delay: 0.2, duration: 0.4 }}
//                           className="w-fit"
//                         >
//                           <span className="inline-block px-3 py-1 bg-black bg-opacity-30 text-white rounded-full text-sm font-medium">
//                             {testimonial.badge}
//                           </span>
//                         </motion.div>

//                         {/* Company Name */}
//                         <motion.h2
//                           initial={{ opacity: 0, x: -30 }}
//                           animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
//                           transition={{ delay: 0.25, duration: 0.5 }}
//                           className={`text-5xl font-bold ${testimonial.textColor} mb-8`}
//                         >
//                           {testimonial.company}
//                         </motion.h2>

//                         {/* Quote */}
//                         <motion.p
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
//                           transition={{ delay: 0.3, duration: 0.5 }}
//                           className={`text-lg leading-relaxed mb-8 ${testimonial.accentColor} font-light`}
//                         >
//                           "{testimonial.quote}"
//                         </motion.p>

//                         {/* Person Name & CTA */}
//                         <motion.div
//                           initial={{ opacity: 0, y: 15 }}
//                           animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
//                           transition={{ delay: 0.35, duration: 0.4 }}
//                         >
//                           <p className={`text-base font-semibold ${testimonial.textColor} mb-2`}>
//                             {testimonial.personName}
//                           </p>
//                           <a
//                             href="#"
//                             className={`text-sm font-semibold underline ${testimonial.accentColor} hover:opacity-80 transition-opacity`}
//                           >
//                             Read the Q+A
//                           </a>
//                         </motion.div>

//                         {/* Logo at Bottom */}
//                         <motion.div
//                           initial={{ opacity: 0, scale: 0.95 }}
//                           animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
//                           transition={{ delay: 0.4, duration: 0.4 }}
//                           className={`text-2xl font-light tracking-wide ${testimonial.textColor} pt-6 border-t border-current border-opacity-20`}
//                         >
//                           {testimonial.logo}
//                         </motion.div>
//                       </div>

//                       {/* Right Panel */}
//                       <div style={{ width: "320px" }} className="flex flex-col items-center justify-center gap-8">
//                         {/* Profile Image */}
//                         <motion.div
//                           initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
//                           animate={{
//                             opacity: isActive ? 1 : 0,
//                             scale: isActive ? 1 : 0.8,
//                             rotate: isActive ? 0 : -8,
//                           }}
//                           transition={{ delay: 0.25, duration: 0.6, type: "spring", bounce: 0.3 }}
//                           className="flex-shrink-0"
//                         >
//                           <img
//                             src={testimonial.image || "/placeholder.svg"}
//                             alt={testimonial.personName}
//                             className="w-48 h-48 rounded-full object-cover border-4 border-white border-opacity-30 shadow-lg"
//                           />
//                         </motion.div>

//                         {/* Details */}
//                         <div className="w-full space-y-6 text-center">
//                           {testimonial.details.partner && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.3, duration: 0.4 }}
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 {testimonial.role}
//                               </p>
//                               <p className={`text-xl font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.partner}
//                               </p>
//                             </motion.div>
//                           )}

//                           {testimonial.details.latestFund && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.35, duration: 0.4 }}
//                               className="pt-4 border-t border-current border-opacity-20"
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 LATEST FUND
//                               </p>
//                               <p className={`text-lg font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.latestFund}
//                               </p>
//                             </motion.div>
//                           )}

//                           {testimonial.details.latestFundAlt && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.35, duration: 0.4 }}
//                               className="pt-4 border-t border-current border-opacity-20"
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 LATEST FUND
//                               </p>
//                               <p className={`text-lg font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.latestFundAlt}
//                               </p>
//                             </motion.div>
//                           )}

//                           {testimonial.details.lpBase && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.4, duration: 0.4 }}
//                               className="pt-4 border-t border-current border-opacity-20"
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 LP BASE
//                               </p>
//                               <p className={`text-lg font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.lpBase}
//                               </p>
//                             </motion.div>
//                           )}

//                           {testimonial.details.headquarters && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.4, duration: 0.4 }}
//                               className="pt-4 border-t border-current border-opacity-20"
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 HEADQUARTERS
//                               </p>
//                               <p className={`text-lg font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.headquarters}
//                               </p>
//                             </motion.div>
//                           )}

//                           {testimonial.details.investments && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.45, duration: 0.4 }}
//                               className="pt-4 border-t border-current border-opacity-20"
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 INVESTMENTS
//                               </p>
//                               <p className={`text-lg font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.investments}
//                               </p>
//                             </motion.div>
//                           )}

//                           {testimonial.details.podcast && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.45, duration: 0.4 }}
//                               className="pt-4 border-t border-current border-opacity-20"
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 PODCAST
//                               </p>
//                               <p className={`text-lg font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.podcast}
//                               </p>
//                             </motion.div>
//                           )}

//                           {testimonial.details.institutionalLps && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
//                               transition={{ delay: 0.5, duration: 0.4 }}
//                               className="pt-4 border-t border-current border-opacity-20"
//                             >
//                               <p
//                                 className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
//                               >
//                                 INSTITUTIONAL LPS
//                               </p>
//                               <p className={`text-lg font-semibold ${testimonial.textColor}`}>
//                                 {testimonial.details.institutionalLps}
//                               </p>
//                             </motion.div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-between px-8">
//         <div></div>

//         {/* Navigation Dots */}
//         <div className="flex gap-2">
//           {testimonials.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => goToSlide(index)}
//               disabled={isTransitioning}
//               className={`h-2.5 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? "bg-slate-400 w-8" : "bg-slate-300 w-2.5 hover:bg-slate-350"
//               } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Arrow Buttons */}
//         <div className="flex gap-3">
//           <motion.button
//             onClick={goToPrevious}
//             disabled={isTransitioning || currentIndex === 0}
//             className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shadow-md border border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             whileHover={{ scale: 1.1, x: -3 }}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-5 h-5 text-slate-600" />
//           </motion.button>
//           <motion.button
//             onClick={goToNext}
//             disabled={isTransitioning || currentIndex === totalSlides - 1}
//             className="p-2 rounded-full bg-violet-500 hover:bg-violet-600 transition-colors shadow-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
//             whileHover={{ scale: 1.1, x: 3 }}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   )
// }



import { useState } from 'react';
import { motion } from 'framer-motion';

const UserProfile = () => {
    const testimonials = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
            quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur',
            author: 'Brian Patton',
            position: 'ABC CEO'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
            quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'Michael Chen',
            position: 'Tech Lead'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
            author: 'Sarah Johnson',
            position: 'XYZ Director'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                setIsAnimating(false);
            }, 900);
        }
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getNextIndex = () => (currentIndex + 1) % testimonials.length;

    const GAP = 24;

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                
                {/* Title Section */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h1
                        className="mx-auto mb-3 sm:mb-4 px-4"
                        style={{
                            maxWidth: '677px',
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: 'clamp(28px, 5vw, 44px)',
                            lineHeight: '110%',
                            textAlign: 'center',
                            color: '#166D48'
                        }}
                    >
                        Sed ut persp iciatis Unde Se
                    </h1>

                    <p
                        className="mx-auto px-4"
                        style={{
                            maxWidth: '578px',
                            fontFamily: "'Quicksand', sans-serif",
                            fontWeight: 400,
                            fontSize: 'clamp(14px, 3vw, 18px)',
                            lineHeight: '140%',
                            textAlign: 'center',
                            color: '#141414'
                        }}
                    >
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occa
                    </p>
                </div>

                {/* DESKTOP CARDS CONTAINER */}
                <div className="hidden lg:block relative mx-auto" style={{ maxWidth: '1500px', height: '279px' }}>
                    
                    {/* MAIN CARD - 90% */}
                    <motion.div
                        key={`main-${currentIndex}`}
                        initial={false}
                        animate={isAnimating ? {
                            x: '-120%',
                            opacity: 0
                        } : {
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.65, 0, 0.35, 1]
                        }}
                        className="absolute left-0 top-0 flex rounded-lg shadow-2xl overflow-hidden bg-white"
                        style={{
                            width: `calc(90% - ${GAP / 2}px)`,
                            height: '279px',
                            zIndex: 1
                        }}
                    >
                        <div
                            className="flex-shrink-0 bg-gray-200"
                            style={{
                                width: '244.52197265625px',
                                height: '100%'
                            }}
                        >
                            <img
                                src={testimonials[currentIndex].image}
                                alt="Building"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1 relative">
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    maxWidth: '1020px',
                                    height: '0px',
                                    top: '42.25px',
                                    left: '25px',
                                    border: '1px solid #0AC276',
                                    opacity: 1
                                }}
                            ></div>

                            <div className="p-8 lg:p-12 flex flex-col justify-center h-full">
                                <p
                                    className="mb-6"
                                    style={{
                                        fontFamily: "'Quicksand', sans-serif",
                                        fontSize: '28px',
                                        lineHeight: '160%',
                                        fontWeight: 400,
                                        color: '#141414'
                                    }}
                                >
                                    {testimonials[currentIndex].quote}
                                </p>

                                <h3
                                    style={{
                                        fontFamily: "'Schibsted Grotesk', sans-serif",
                                        fontSize: '22px',
                                        lineHeight: '130%',
                                        fontWeight: 500,
                                        color: '#000000'
                                    }}
                                >
                                    {testimonials[currentIndex].author}, {testimonials[currentIndex].position}
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* SCROLLING PREVIEW CARD */}
                    <motion.div
                        key={`scrolling-${getNextIndex()}`}
                        initial={false}
                        animate={isAnimating ? {
                            left: 0,
                            right: 'auto',
                            width: `calc(90% - ${GAP / 2}px)`
                        } : {
                            left: 'auto',
                            right: 0,
                            width: `calc(10% - ${GAP / 2}px)`
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.65, 0, 0.35, 1]
                        }}
                        className="absolute top-0 rounded-lg shadow-2xl overflow-hidden bg-white"
                        style={{
                            minWidth: '120px',
                            height: '279px',
                            zIndex: 2
                        }}
                    >
                        <div className="relative w-full h-full flex">
                            <motion.div
                                className="flex-shrink-0 bg-white relative overflow-hidden"
                                animate={isAnimating ? {
                                    width: '244.52197265625px'
                                } : {
                                    width: '100%'
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.65, 0, 0.35, 1]
                                }}
                                style={{
                                    height: '100%'
                                }}
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-white pointer-events-none"
                                    animate={isAnimating ? {
                                        opacity: 0
                                    } : {
                                        opacity: 0.4
                                    }}
                                    transition={{
                                        duration: 0.3
                                    }}
                                />
                            </motion.div>

                            <motion.div 
                                className="flex-1 relative overflow-hidden"
                                initial={{ opacity: 0, width: 0 }}
                                animate={isAnimating ? {
                                    opacity: 1,
                                    width: 'auto'
                                } : {
                                    opacity: 0,
                                    width: 0
                                }}
                                transition={{
                                    opacity: { delay: 0.4, duration: 0.4 },
                                    width: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        maxWidth: '250px',
                                        height: '0px',
                                        top: '42.25px',
                                        left: '25px',
                                        border: '1px solid #0AC276',
                                        opacity: 1
                                    }}
                                ></div>

                                <div className="p-8 lg:p-12 flex flex-col justify-center h-full">
                                    <p
                                        className="mb-6"
                                        style={{
                                            fontFamily: "'Quicksand', sans-serif",
                                            fontSize: '28px',
                                            lineHeight: '160%',
                                            fontWeight: 400,
                                            color: '#141414'
                                        }}
                                    >
                                        {testimonials[getNextIndex()].quote}
                                    </p>

                                    <h3
                                        style={{
                                            fontFamily: "'Schibsted Grotesk', sans-serif",
                                            fontSize: '22px',
                                            lineHeight: '130%',
                                            fontWeight: 500,
                                            color: '#000000'
                                        }}
                                    >
                                        {testimonials[getNextIndex()].author}, {testimonials[getNextIndex()].position}
                                    </h3>
                                </div>
                            </motion.div>

                            <motion.button
                                onClick={handleNext}
                                disabled={isAnimating}
                                animate={isAnimating ? {
                                    opacity: 0,
                                    scale: 0.7,
                                    pointerEvents: 'none'
                                } : {
                                    opacity: 1,
                                    scale: 1,
                                    pointerEvents: 'auto'
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                                whileHover={{ scale: 1.1, backgroundColor: '#B8B8B8' }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute bottom-6 left-4 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xl disabled:cursor-not-allowed"
                                style={{
                                    width: '60.73828125px',
                                    height: '58.35693359375px',
                                    background: '#D9D9D9',
                                    borderRadius: '4px',
                                    zIndex: 10
                                }}
                            >
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* MOBILE/TABLET SINGLE CARD VIEW */}
                <div className="lg:hidden">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-lg shadow-2xl overflow-hidden bg-white mx-auto"
                        style={{
                            maxWidth: '600px'
                        }}
                    >
                        {/* Mobile Card Image */}
                        <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200">
                            <img
                                src={testimonials[currentIndex].image}
                                alt="Building"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Mobile Card Content */}
                        <div className="p-6 sm:p-8">
                            <div
                                className="w-full h-px bg-[#0AC276] mb-6"
                            ></div>

                            <p
                                className="mb-4 sm:mb-6"
                                style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontSize: 'clamp(16px, 4vw, 20px)',
                                    lineHeight: '150%',
                                    fontWeight: 400,
                                    color: '#141414'
                                }}
                            >
                                {testimonials[currentIndex].quote}
                            </p>

                            <h3
                                style={{
                                    fontFamily: "'Schibsted Grotesk', sans-serif",
                                    fontSize: 'clamp(16px, 3.5vw, 18px)',
                                    lineHeight: '130%',
                                    fontWeight: 500,
                                    color: '#000000'
                                }}
                            >
                                {testimonials[currentIndex].author}, {testimonials[currentIndex].position}
                            </h3>
                        </div>
                    </motion.div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center items-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    currentIndex === index 
                                        ? "w-8 h-3 bg-[#0AC276]" 
                                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex flex-row justify-center items-center gap-4 mt-8">
                    <motion.button
                        onClick={handlePrevious}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all shadow-sm"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <motion.button
                        onClick={handleNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="lg:hidden w-12 h-12 flex items-center justify-center bg-[#0AC276] hover:bg-[#09A866] text-white rounded-full transition-all shadow-md"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;






