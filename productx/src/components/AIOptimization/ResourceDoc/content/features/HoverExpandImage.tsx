import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Event name to communicate between images
const ZOOM_CLOSE_EVENT = "close-zoom-competition"

interface HoverExpandImageProps {
  src: string
  alt?: string
  className?: string
  objectFit?: "contain" | "cover"
}

export const HoverExpandImage = ({
  src,
  alt = "",
  className = "",
  objectFit = "contain",
}: HoverExpandImageProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandedRef = useRef<HTMLDivElement>(null)

  const handleExpand = () => {
    // Tell all other images to close
    window.dispatchEvent(new CustomEvent(ZOOM_CLOSE_EVENT))
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  // Listen for other image clicks
  useEffect(() => {
    const handleExternalClose = () => setIsExpanded(false)
    window.addEventListener(ZOOM_CLOSE_EVENT, handleExternalClose)
    return () => window.removeEventListener(ZOOM_CLOSE_EVENT, handleExternalClose)
  }, [])

  // Handle click outside to close
  useEffect(() => {
    if (!isExpanded) return

    const handleClickOutside = (e: MouseEvent) => {
      if (expandedRef.current && !expandedRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isExpanded])

  // Animation Variants for Premium Fade/Scale
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  }

  const imageVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      filter: "blur(10px)" 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.4, 
        // FIX: Explicitly typing the array to satisfy TypeScript's Variants check
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number]
      } 
    },
    exit: { 
      scale: 0.95, 
      opacity: 0,
      transition: { duration: 0.25 } 
    }
  }

  return (
    <div className="relative w-full h-full">
      
      {/* --- ORIGINAL IMAGE --- */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full relative cursor-zoom-in" 
            onClick={handleExpand}
          >
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-${objectFit} ${className}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- EXPANDED IMAGE --- */}
      <AnimatePresence mode="popLayout">
        {isExpanded && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          >
            {/* 
               Using a ref wrapper to capture clicks outside the image.
               The wrapper is fixed center.
            */}
            <div ref={expandedRef} className="relative pointer-events-auto w-[60vw] max-w-[1000px]">
              <motion.img
                variants={imageVariants}
                src={src}
                alt={alt}
                className={`w-full h-auto object-${objectFit} ${className} rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] bg-white cursor-default`}
              />

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute -top-4 -right-4 bg-white text-gray-900 p-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-indigo-600 hover:text-white transition-colors duration-300 z-[101]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}