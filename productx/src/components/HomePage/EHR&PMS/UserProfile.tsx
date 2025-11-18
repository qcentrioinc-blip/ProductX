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


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  badge: string
  company: string
  quote: string
  personName: string
  role: string
  image: string
  bgColor: string
  textColor: string
  accentColor: string
  details: {
    partner?: string
    latestFund?: string
    lpBase?: string
    headquarters?: string
    investments?: string
    podcast?: string
    latestFundAlt?: string
    institutionalLps?: string
  }
  logo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    badge: "Former founder",
    company: "GTMfund",
    quote:
      "For Fund II, we transitioned to a traditional closed-end fund with institutional support. This allowed us to be more intentional about our portfolio construction—how many deals we're doing, our check sizes, and the overall fund size. We worked closely with AngelList throughout this transition, and their team was incredible in supporting us.",
    personName: "Paul Irving",
    role: "PARTNER",
    image: "/man-with-glasses-professional-headshot.jpg",
    bgColor: "bg-violet-300",
    textColor: "text-slate-900",
    accentColor: "text-slate-700",
    details: {
      partner: "Paul Irving",
      latestFund: "$54M Fund II",
      lpBase: "350+ GTM Leaders",
    },
    logo: "GTMfund",
  },
  {
    id: 2,
    badge: "Former founder",
    company: "Cocoa Ventures",
    quote:
      "Every day, I'm grateful for AngelList. They give Cocoa Ventures the power to run like a top-tier fund on a microfund budget. The team is exceptional: the quality of their work, their speed of execution, and their problem-solving mindset truly supercharge Cocoa. I recommend AngelList to every new manager I meet.",
    personName: "Carmen Alfonso Rico",
    role: "PARTNER",
    image: "/woman-with-red-jacket-professional-headshot.jpg",
    bgColor: "bg-teal-800",
    textColor: "text-white",
    accentColor: "text-teal-100",
    details: {
      partner: "Carmen Alfonso Rico",
      headquarters: "London",
      investments: "Pre-seed, Seed",
    },
    logo: "COCO",
  },
  {
    id: 3,
    badge: "Media-driven VC",
    company: "20VC",
    quote:
      "AngelList removes the friction of running a fund. They make it easy to raise, manage, and deploy capital all while offering customizations and an extremely high level of service.",
    personName: "Harry Stebbings",
    role: "PARTNER",
    image: "/professional-man-headshot.png",
    bgColor: "bg-violet-300",
    textColor: "text-slate-900",
    accentColor: "text-slate-700",
    details: {
      partner: "Harry Stebbings",
      investments: "Pre-seed, Seed, Series A",
      podcast: "20VC",
    },
    logo: "20VC",
  },
  {
    id: 4,
    badge: "Current founder",
    company: "Browser Capital",
    quote:
      "When we launched Fund 4 with backing from top institutions, like Sequoia + Cendana Capital, we knew we needed a partner who could support all our ILP needs — AngelList was that partner. Their timely reporting, white-glove LP service, and their intuitive, software-first platform enabled us to be institutional ready.",
    personName: "Joshua Browder",
    role: "PARTNER",
    image: "/man-with-glasses-professional-headshot.jpg",
    bgColor: "bg-amber-700",
    textColor: "text-white",
    accentColor: "text-amber-100",
    details: {
      partner: "Joshua Browder",
      latestFundAlt: "$30M Fund IV",
      institutionalLps: "Sequoia Capital, Cendana Capital",
    },
    logo: "Browder Capital",
  },
]

export default function UserProfile() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalSlides = testimonials.length

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning && currentIndex < totalSlides - 1) {
        goToNext()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  const goToPrevious = () => {
    if (isTransitioning || currentIndex === 0) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const goToNext = () => {
    if (isTransitioning || currentIndex === totalSlides - 1) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  // Reset transition state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div className="min-h-screen flex flex-col justify-between px-2 sm:px-4 py-4 sm:py-8">
      <div className="flex-1 flex items-center justify-center overflow-hidden relative">
        {/* Full-width Carousel Container with visible gaps */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-[650px] sm:h-[550px] lg:h-[500px] flex items-center justify-center">
            {/* All cards rendered with clear gaps */}
            {testimonials.map((testimonial, index) => {
              // Calculate position offset from current
              const offset = index - currentIndex
              
              // Calculate visibility and styling
              const isActive = index === currentIndex
              const isPrevious = index === currentIndex - 1
              const isNext = index === currentIndex + 1
              const isVisible = isActive || isPrevious || isNext
              
              // Calculate translateX with clear visible gaps
              let translateX = 0
              if (isPrevious) translateX = -100
              else if (isNext) translateX = 100
              else if (offset < -1) translateX = -200
              else if (offset > 1) translateX = 200
              
              const scale = isActive ? 1 : 0.88
              const opacity = isActive ? 1 : (isPrevious || isNext) ? 0.65 : 0
              const zIndex = isActive ? 20 : isVisible ? 10 : 0

              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute"
                  style={{
                    zIndex,
                    width: window.innerWidth < 640 ? "95vw" : window.innerWidth < 1024 ? "85vw" : "75vw",
                    left: "50%",
                    top: "50%",
                    marginLeft: window.innerWidth < 640 ? "-47.5vw" : window.innerWidth < 1024 ? "-42.5vw" : "-37.5vw",
                    marginTop: window.innerWidth < 640 ? "-325px" : window.innerWidth < 1024 ? "-275px" : "-225px",
                  }}
                  animate={{
                    x: `${translateX}%`,
                    scale,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 22,
                    mass: 0.9,
                  }}
                >
                  <div
                    className={`${testimonial.bgColor} rounded-2xl sm:rounded-3xl shadow-2xl`}
                    style={{
                      minHeight: window.innerWidth < 640 ? "auto" : window.innerWidth < 1024 ? "auto" : "450px",
                      padding: window.innerWidth < 640 ? "1.5rem" : window.innerWidth < 1024 ? "2rem" : "3rem",
                      display: "flex",
                      flexDirection: window.innerWidth < 1024 ? "column" : "row",
                      gap: window.innerWidth < 640 ? "1.5rem" : window.innerWidth < 1024 ? "2rem" : "3rem",
                      alignItems: "stretch",
                    }}
                  >
                    {/* DESKTOP LAYOUT (unchanged) - lg and above */}
                    <>
                      {/* Left Content - Desktop */}
                      <div className="hidden lg:flex flex-1 flex-col justify-between">
                        {/* Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="w-fit"
                        >
                          <span className="inline-block px-3 py-1 bg-black bg-opacity-30 text-white rounded-full text-sm font-medium">
                            {testimonial.badge}
                          </span>
                        </motion.div>

                        {/* Company Name */}
                        <motion.h2
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
                          transition={{ delay: 0.25, duration: 0.5 }}
                          className={`text-5xl font-bold ${testimonial.textColor} mb-8`}
                        >
                          {testimonial.company}
                        </motion.h2>

                        {/* Quote */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className={`text-lg leading-relaxed mb-8 ${testimonial.accentColor} font-light`}
                        >
                          "{testimonial.quote}"
                        </motion.p>

                        {/* Person Name & CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                          transition={{ delay: 0.35, duration: 0.4 }}
                        >
                          <p className={`text-base font-semibold ${testimonial.textColor} mb-2`}>
                            {testimonial.personName}
                          </p>
                          <a
                            href="#"
                            className={`text-sm font-semibold underline ${testimonial.accentColor} hover:opacity-80 transition-opacity`}
                          >
                            Read the Q+A
                          </a>
                        </motion.div>

                        {/* Logo at Bottom */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                          className={`text-2xl font-light tracking-wide ${testimonial.textColor} pt-6 border-t border-current border-opacity-20`}
                        >
                          {testimonial.logo}
                        </motion.div>
                      </div>

                      {/* Right Panel - Desktop */}
                      <div className="hidden lg:flex flex-col items-center justify-center gap-8" style={{ width: "320px" }}>
                        {/* Profile Image */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0.8,
                            rotate: isActive ? 0 : -8,
                          }}
                          transition={{ delay: 0.25, duration: 0.6, type: "spring", bounce: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.personName}
                            className="w-48 h-48 rounded-full object-cover border-4 border-white border-opacity-30 shadow-lg"
                          />
                        </motion.div>

                        {/* Details */}
                        <div className="w-full space-y-6 text-center">
                          {testimonial.details.partner && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                {testimonial.role}
                              </p>
                              <p className={`text-xl font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.partner}
                              </p>
                            </motion.div>
                          )}

                          {testimonial.details.latestFund && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.35, duration: 0.4 }}
                              className="pt-4 border-t border-current border-opacity-20"
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                LATEST FUND
                              </p>
                              <p className={`text-lg font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.latestFund}
                              </p>
                            </motion.div>
                          )}

                          {testimonial.details.latestFundAlt && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.35, duration: 0.4 }}
                              className="pt-4 border-t border-current border-opacity-20"
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                LATEST FUND
                              </p>
                              <p className={`text-lg font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.latestFundAlt}
                              </p>
                            </motion.div>
                          )}

                          {testimonial.details.lpBase && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.4, duration: 0.4 }}
                              className="pt-4 border-t border-current border-opacity-20"
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                LP BASE
                              </p>
                              <p className={`text-lg font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.lpBase}
                              </p>
                            </motion.div>
                          )}

                          {testimonial.details.headquarters && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.4, duration: 0.4 }}
                              className="pt-4 border-t border-current border-opacity-20"
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                HEADQUARTERS
                              </p>
                              <p className={`text-lg font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.headquarters}
                              </p>
                            </motion.div>
                          )}

                          {testimonial.details.investments && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.45, duration: 0.4 }}
                              className="pt-4 border-t border-current border-opacity-20"
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                INVESTMENTS
                              </p>
                              <p className={`text-lg font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.investments}
                              </p>
                            </motion.div>
                          )}

                          {testimonial.details.podcast && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.45, duration: 0.4 }}
                              className="pt-4 border-t border-current border-opacity-20"
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                PODCAST
                              </p>
                              <p className={`text-lg font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.podcast}
                              </p>
                            </motion.div>
                          )}

                          {testimonial.details.institutionalLps && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                              transition={{ delay: 0.5, duration: 0.4 }}
                              className="pt-4 border-t border-current border-opacity-20"
                            >
                              <p
                                className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${testimonial.accentColor}`}
                              >
                                INSTITUTIONAL LPS
                              </p>
                              <p className={`text-lg font-semibold ${testimonial.textColor}`}>
                                {testimonial.details.institutionalLps}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </>

                    {/* MOBILE & TABLET LAYOUT - lg and below */}
                    <div className="flex lg:hidden flex-col gap-4 sm:gap-6 text-center">
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="flex justify-center"
                      >
                        <span className="inline-block px-3 py-1 bg-black bg-opacity-30 text-white rounded-full text-xs sm:text-sm font-medium">
                          {testimonial.badge}
                        </span>
                      </motion.div>

                      {/* Profile Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.8,
                        }}
                        transition={{ delay: 0.25, duration: 0.6, type: "spring", bounce: 0.3 }}
                        className="flex justify-center"
                      >
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.personName}
                          className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white border-opacity-30 shadow-lg"
                        />
                      </motion.div>

                      {/* Company Name */}
                      <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -30 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className={`text-3xl sm:text-4xl font-bold ${testimonial.textColor}`}
                      >
                        {testimonial.company}
                      </motion.h2>

                      {/* Quote */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className={`text-sm sm:text-base leading-relaxed ${testimonial.accentColor} font-light`}
                      >
                        "{testimonial.quote}"
                      </motion.p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                        {testimonial.details.partner && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="pt-3 border-t border-current border-opacity-20"
                          >
                            <p className={`text-xs tracking-widest font-semibold mb-1 opacity-75 ${testimonial.accentColor}`}>
                              {testimonial.role}
                            </p>
                            <p className={`text-base sm:text-lg font-semibold ${testimonial.textColor}`}>
                              {testimonial.details.partner}
                            </p>
                          </motion.div>
                        )}

                        {(testimonial.details.latestFund || testimonial.details.latestFundAlt) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                            transition={{ delay: 0.35, duration: 0.4 }}
                            className="pt-3 border-t border-current border-opacity-20"
                          >
                            <p className={`text-xs tracking-widest font-semibold mb-1 opacity-75 ${testimonial.accentColor}`}>
                              LATEST FUND
                            </p>
                            <p className={`text-sm font-semibold ${testimonial.textColor}`}>
                              {testimonial.details.latestFund || testimonial.details.latestFundAlt}
                            </p>
                          </motion.div>
                        )}

                        {testimonial.details.lpBase && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="pt-3 border-t border-current border-opacity-20"
                          >
                            <p className={`text-xs tracking-widest font-semibold mb-1 opacity-75 ${testimonial.accentColor}`}>
                              LP BASE
                            </p>
                            <p className={`text-sm font-semibold ${testimonial.textColor}`}>
                              {testimonial.details.lpBase}
                            </p>
                          </motion.div>
                        )}

                        {testimonial.details.headquarters && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="pt-3 border-t border-current border-opacity-20"
                          >
                            <p className={`text-xs tracking-widest font-semibold mb-1 opacity-75 ${testimonial.accentColor}`}>
                              HEADQUARTERS
                            </p>
                            <p className={`text-sm font-semibold ${testimonial.textColor}`}>
                              {testimonial.details.headquarters}
                            </p>
                          </motion.div>
                        )}

                        {testimonial.details.investments && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                            transition={{ delay: 0.45, duration: 0.4 }}
                            className="pt-3 border-t border-current border-opacity-20"
                          >
                            <p className={`text-xs tracking-widest font-semibold mb-1 opacity-75 ${testimonial.accentColor}`}>
                              INVESTMENTS
                            </p>
                            <p className={`text-sm font-semibold ${testimonial.textColor}`}>
                              {testimonial.details.investments}
                            </p>
                          </motion.div>
                        )}

                        {testimonial.details.podcast && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                            transition={{ delay: 0.45, duration: 0.4 }}
                            className="pt-3 border-t border-current border-opacity-20"
                          >
                            <p className={`text-xs tracking-widest font-semibold mb-1 opacity-75 ${testimonial.accentColor}`}>
                              PODCAST
                            </p>
                            <p className={`text-sm font-semibold ${testimonial.textColor}`}>
                              {testimonial.details.podcast}
                            </p>
                          </motion.div>
                        )}

                        {testimonial.details.institutionalLps && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="pt-3 border-t border-current border-opacity-20 sm:col-span-2"
                          >
                            <p className={`text-xs tracking-widest font-semibold mb-1 opacity-75 ${testimonial.accentColor}`}>
                              INSTITUTIONAL LPS
                            </p>
                            <p className={`text-sm font-semibold ${testimonial.textColor}`}>
                              {testimonial.details.institutionalLps}
                            </p>
                          </motion.div>
                        )}
                      </div>

                      {/* Person Name & CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 15 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                      >
                        <a
                          href="#"
                          className={`text-sm font-semibold underline ${testimonial.accentColor} hover:opacity-80 transition-opacity`}
                        >
                          Read the Q+A
                        </a>
                      </motion.div>

                      {/* Logo */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className={`text-xl sm:text-2xl font-light tracking-wide ${testimonial.textColor} pt-4 border-t border-current border-opacity-20`}
                      >
                        {testimonial.logo}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-2 sm:px-8 mt-4">
        <div></div>

        {/* Navigation Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-slate-400 w-8" : "bg-slate-300 w-2.5 hover:bg-slate-350"
              } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex gap-2 sm:gap-3">
          <motion.button
            onClick={goToPrevious}
            disabled={isTransitioning || currentIndex === 0}
            className="p-1.5 sm:p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shadow-md border border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            disabled={isTransitioning || currentIndex === totalSlides - 1}
            className="p-1.5 sm:p-2 rounded-full bg-violet-500 hover:bg-violet-600 transition-colors shadow-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}


