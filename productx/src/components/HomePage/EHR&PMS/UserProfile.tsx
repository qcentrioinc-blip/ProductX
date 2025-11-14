// "use client"

// import { useState } from "react"
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

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
//   }

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
//   }

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index)
//   }

//   const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
//   const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1

//   const currentTestimonial = testimonials[currentIndex]
//   const prevTestimonial = testimonials[prevIndex]
//   const nextTestimonial = testimonials[nextIndex]

//   return (
//     <div className="min-h-screen flex flex-col justify-between px-4 py-8">
//       <div className="flex-1 flex items-center justify-center overflow-hidden">
//         <div className="flex w-full gap-4 items-center justify-center">
//           {/* Left Preview (10%) */}
//           <div className="w-1/10 flex-shrink-0 opacity-50">
//             <div className={`${prevTestimonial.bgColor} rounded-3xl p-8 h-96 flex items-center justify-center`}>
//               <div className={`text-center ${prevTestimonial.textColor}`}>
//                 <p className="text-lg font-semibold">{prevTestimonial.company}</p>
//               </div>
//             </div>
//           </div>

//           {/* Center Main Card (80%) */}
//           <div className="w-4/5 flex-shrink-0">
//             <div
//               className={`${currentTestimonial.bgColor} rounded-3xl p-12 flex gap-12 items-stretch min-h-96 transition-all duration-300`}
//             >
//               {/* Left Content */}
//               <div className="flex-1 flex flex-col justify-between">
//                 {/* Badge */}
//                 <div className="w-fit">
//                   <span className="inline-block px-3 py-1 bg-black bg-opacity-30 text-white rounded-full text-sm font-medium">
//                     {currentTestimonial.badge}
//                   </span>
//                 </div>

//                 {/* Company Name */}
//                 <h2 className={`text-5xl font-bold ${currentTestimonial.textColor} mb-8`}>
//                   {currentTestimonial.company}
//                 </h2>

//                 {/* Quote */}
//                 <p className={`text-lg leading-relaxed mb-8 ${currentTestimonial.accentColor} font-light`}>
//                   "{currentTestimonial.quote}"
//                 </p>

//                 {/* Person Name & CTA */}
//                 <div>
//                   <p className={`text-base font-semibold ${currentTestimonial.textColor} mb-2`}>
//                     {currentTestimonial.personName}
//                   </p>
//                   <a
//                     href="#"
//                     className={`text-sm font-semibold underline ${currentTestimonial.accentColor} hover:opacity-80 transition-opacity`}
//                   >
//                     Read the Q+A
//                   </a>
//                 </div>

//                 {/* Logo at Bottom */}
//                 <div
//                   className={`text-2xl font-light tracking-wide ${currentTestimonial.textColor} pt-6 border-t border-current border-opacity-20`}
//                 >
//                   {currentTestimonial.logo}
//                 </div>
//               </div>

//               {/* Right Panel */}
//               <div className="w-80 flex flex-col items-center justify-center gap-8">
//                 {/* Profile Image */}
//                 <div className="flex-shrink-0">
//                   <img
//                     src={currentTestimonial.image || "/placeholder.svg"}
//                     alt={currentTestimonial.personName}
//                     className="w-48 h-48 rounded-full object-cover border-4 border-white border-opacity-30 shadow-lg"
//                   />
//                 </div>

//                 {/* Details */}
//                 <div className="w-full space-y-6 text-center">
//                   {currentTestimonial.details.partner && (
//                     <div>
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         {currentTestimonial.role}
//                       </p>
//                       <p className={`text-xl font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.partner}
//                       </p>
//                     </div>
//                   )}

//                   {currentTestimonial.details.latestFund && (
//                     <div className="pt-4 border-t border-current border-opacity-20">
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         LATEST FUND
//                       </p>
//                       <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.latestFund}
//                       </p>
//                     </div>
//                   )}

//                   {currentTestimonial.details.latestFundAlt && (
//                     <div className="pt-4 border-t border-current border-opacity-20">
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         LATEST FUND
//                       </p>
//                       <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.latestFundAlt}
//                       </p>
//                     </div>
//                   )}

//                   {currentTestimonial.details.lpBase && (
//                     <div className="pt-4 border-t border-current border-opacity-20">
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         LP BASE
//                       </p>
//                       <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.lpBase}
//                       </p>
//                     </div>
//                   )}

//                   {currentTestimonial.details.headquarters && (
//                     <div className="pt-4 border-t border-current border-opacity-20">
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         HEADQUARTERS
//                       </p>
//                       <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.headquarters}
//                       </p>
//                     </div>
//                   )}

//                   {currentTestimonial.details.investments && (
//                     <div className="pt-4 border-t border-current border-opacity-20">
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         INVESTMENTS
//                       </p>
//                       <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.investments}
//                       </p>
//                     </div>
//                   )}

//                   {currentTestimonial.details.podcast && (
//                     <div className="pt-4 border-t border-current border-opacity-20">
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         PODCAST
//                       </p>
//                       <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.podcast}
//                       </p>
//                     </div>
//                   )}

//                   {currentTestimonial.details.institutionalLps && (
//                     <div className="pt-4 border-t border-current border-opacity-20">
//                       <p
//                         className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
//                       >
//                         INSTITUTIONAL LPS
//                       </p>
//                       <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
//                         {currentTestimonial.details.institutionalLps}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Preview (10%) */}
//           <div className="w-1/10 flex-shrink-0 opacity-50">
//             <div className={`${nextTestimonial.bgColor} rounded-3xl p-8 h-96 flex items-center justify-center`}>
//               <div className={`text-center ${nextTestimonial.textColor}`}>
//                 <p className="text-lg font-semibold">{nextTestimonial.company}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-between px-8">
//         <div></div>

//         {/* Navigation Dots */}
//         <div className="flex gap-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2.5 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? "bg-slate-400 w-8" : "bg-slate-300 w-2.5 hover:bg-slate-350"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Arrow Buttons - Bottom Right */}
//         <div className="flex gap-3">
//           <button
//             onClick={goToPrevious}
//             className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shadow-md border border-slate-300"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-5 h-5 text-slate-600" />
//           </button>
//           <button
//             onClick={goToNext}
//             className="p-2 rounded-full bg-violet-500 hover:bg-violet-600 transition-colors shadow-md text-white"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
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
      "When we launched Fund 4 with backing from top institutions, like Sequoia + Cendana Capital, we knew we needed a partner who could support all our ILP needs — AngelList was that partner. Their timely reporting, white-glove LP service, and intuitive, software-first platform enabled us to be institutional ready.",
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
  const [direction, setDirection] = useState(0)

  const totalSlides = testimonials.length

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning && currentIndex < totalSlides - 1) {
        setDirection(1)
        nextSlide()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  const goToPrevious = () => {
    if (isTransitioning || currentIndex === 0) return
    setDirection(-1)
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const goToNext = () => {
    if (isTransitioning || currentIndex === totalSlides - 1) return
    setDirection(1)
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const nextSlide = () => {
    if (isTransitioning || currentIndex === totalSlides - 1) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setDirection(index > currentIndex ? 1 : -1)
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  // Reset transition state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]
  const hasLeftPreview = currentIndex > 0
  const hasRightPreview = currentIndex < totalSlides - 1
  const leftTestimonial = hasLeftPreview ? testimonials[currentIndex - 1] : null
  const rightTestimonial = hasRightPreview ? testimonials[currentIndex + 1] : null

  return (
    <div className="min-h-screen flex flex-col justify-between px-4 py-8">
      <div className="flex-1 flex items-center justify-center overflow-hidden relative">
        {/* Animated Container with all 3 cards visible */}
        <motion.div
          className="flex w-full gap-4 items-center justify-center"
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            duration: 1.2,
          }}
        >
          {/* Left Preview (10%) */}
          <motion.div
            className="w-1/10 flex-shrink-0"
            initial={false}
            animate={{
              opacity: hasLeftPreview ? 0.5 : 0,
              x: hasLeftPreview ? 0 : -100,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {hasLeftPreview && leftTestimonial && (
              <div className={`${leftTestimonial.bgColor} rounded-3xl p-8 h-96 flex items-center justify-center`}>
                <div className={`text-center ${leftTestimonial.textColor}`}>
                  <p className="text-lg font-semibold">{leftTestimonial.company}</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Center Main Card (80%) */}
          <motion.div
            key={currentIndex}
            className="w-4/5 flex-shrink-0"
            initial={{
              x: direction > 0 ? 1200 : -1200,
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: direction > 0 ? -1200 : 1200,
              opacity: 0,
              scale: 0.85,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 25,
              duration: 1,
            }}
          >
            <div
              className={`${currentTestimonial.bgColor} rounded-3xl p-12 flex gap-12 items-stretch min-h-96 shadow-2xl`}
            >
              {/* Left Content */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="w-fit"
                >
                  <span className="inline-block px-3 py-1 bg-black bg-opacity-30 text-white rounded-full text-sm font-medium">
                    {currentTestimonial.badge}
                  </span>
                </motion.div>

                {/* Company Name */}
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className={`text-5xl font-bold ${currentTestimonial.textColor} mb-8`}
                >
                  {currentTestimonial.company}
                </motion.h2>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className={`text-lg leading-relaxed mb-8 ${currentTestimonial.accentColor} font-light`}
                >
                  "{currentTestimonial.quote}"
                </motion.p>

                {/* Person Name & CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <p className={`text-base font-semibold ${currentTestimonial.textColor} mb-2`}>
                    {currentTestimonial.personName}
                  </p>
                  <a
                    href="#"
                    className={`text-sm font-semibold underline ${currentTestimonial.accentColor} hover:opacity-80 transition-opacity`}
                  >
                    Read the Q+A
                  </a>
                </motion.div>

                {/* Logo at Bottom */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className={`text-2xl font-light tracking-wide ${currentTestimonial.textColor} pt-6 border-t border-current border-opacity-20`}
                >
                  {currentTestimonial.logo}
                </motion.div>
              </div>

              {/* Right Panel */}
              <div className="w-80 flex flex-col items-center justify-center gap-8">
                {/* Profile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.personName}
                    className="w-48 h-48 rounded-full object-cover border-4 border-white border-opacity-30 shadow-lg"
                  />
                </motion.div>

                {/* Details */}
                <div className="w-full space-y-6 text-center">
                  {currentTestimonial.details.partner && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        {currentTestimonial.role}
                      </p>
                      <p className={`text-xl font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.partner}
                      </p>
                    </motion.div>
                  )}

                  {currentTestimonial.details.latestFund && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="pt-4 border-t border-current border-opacity-20"
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        LATEST FUND
                      </p>
                      <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.latestFund}
                      </p>
                    </motion.div>
                  )}

                  {currentTestimonial.details.latestFundAlt && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="pt-4 border-t border-current border-opacity-20"
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        LATEST FUND
                      </p>
                      <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.latestFundAlt}
                      </p>
                    </motion.div>
                  )}

                  {currentTestimonial.details.lpBase && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="pt-4 border-t border-current border-opacity-20"
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        LP BASE
                      </p>
                      <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.lpBase}
                      </p>
                    </motion.div>
                  )}

                  {currentTestimonial.details.headquarters && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="pt-4 border-t border-current border-opacity-20"
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        HEADQUARTERS
                      </p>
                      <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.headquarters}
                      </p>
                    </motion.div>
                  )}

                  {currentTestimonial.details.investments && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="pt-4 border-t border-current border-opacity-20"
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        INVESTMENTS
                      </p>
                      <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.investments}
                      </p>
                    </motion.div>
                  )}

                  {currentTestimonial.details.podcast && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="pt-4 border-t border-current border-opacity-20"
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        PODCAST
                      </p>
                      <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.podcast}
                      </p>
                    </motion.div>
                  )}

                  {currentTestimonial.details.institutionalLps && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="pt-4 border-t border-current border-opacity-20"
                    >
                      <p
                        className={`text-xs tracking-widest font-semibold mb-2 opacity-75 ${currentTestimonial.accentColor}`}
                      >
                        INSTITUTIONAL LPS
                      </p>
                      <p className={`text-lg font-semibold ${currentTestimonial.textColor}`}>
                        {currentTestimonial.details.institutionalLps}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Preview (10%) */}
          <motion.div
            className="w-1/10 flex-shrink-0"
            initial={false}
            animate={{
              opacity: hasRightPreview ? 0.5 : 0,
              x: hasRightPreview ? 0 : 100,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {hasRightPreview && rightTestimonial && (
              <div className={`${rightTestimonial.bgColor} rounded-3xl p-8 h-96 flex items-center justify-center`}>
                <div className={`text-center ${rightTestimonial.textColor}`}>
                  <p className="text-lg font-semibold">{rightTestimonial.company}</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between px-8">
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
              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex gap-3">
          <motion.button
            onClick={goToPrevious}
            disabled={isTransitioning || currentIndex === 0}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shadow-md border border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            disabled={isTransitioning || currentIndex === totalSlides - 1}
            className="p-2 rounded-full bg-violet-500 hover:bg-violet-600 transition-colors shadow-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

