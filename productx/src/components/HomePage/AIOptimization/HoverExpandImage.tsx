import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

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
  // Use ref to store scroll position synchronously
  const scrollPosition = useRef(0)

  const handleExpand = () => {
    // Capture scroll position IMMEDIATELY on click
    // This prevents the 'jump to top' bug caused by layout shifts during render
    scrollPosition.current = window.scrollY

    window.dispatchEvent(new CustomEvent(ZOOM_CLOSE_EVENT))
    setIsExpanded(true)
  }

  const handleClose = () => setIsExpanded(false)

  /* ---------------------------------------------
     Close when another image opens
  --------------------------------------------- */
  useEffect(() => {
    const close = () => setIsExpanded(false)
    window.addEventListener(ZOOM_CLOSE_EVENT, close)
    return () => window.removeEventListener(ZOOM_CLOSE_EVENT, close)
  }, [])

  /* ---------------------------------------------
     Click outside to close
  --------------------------------------------- */
  useEffect(() => {
    if (!isExpanded) return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        expandedRef.current &&
        !expandedRef.current.contains(e.target as Node)
      ) {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isExpanded])

  /* ---------------------------------------------
     ESC key to close
  --------------------------------------------- */
  useEffect(() => {
    if (!isExpanded) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isExpanded])

  /* ---------------------------------------------
     Lock background scroll (FIXED - NO ANIMATED SCROLL)
  --------------------------------------------- */
  useLayoutEffect(() => {
    if (!isExpanded) return

    const body = document.body
    const scrollY = scrollPosition.current

    // Lock the body immediately preventing any visual jump
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.width = "100%"
    body.style.overflow = "hidden"

    return () => {
      // CRITICAL FIX: Override global CSS 'scroll-behavior: smooth' temporarily
      // This forces the restoration to be instant, preventing the "slide to section" effect
      const originalScrollBehavior = document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = "auto"

      // Restore original styles
      body.style.position = ""
      body.style.top = ""
      body.style.width = ""
      body.style.overflow = ""

      // Restore scroll position precisely
      window.scrollTo(0, scrollY)

      // Restore the original scroll behavior (allowing smooth scrolling again)
      // Using requestAnimationFrame to ensure the scrollTo has processed
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior
      })
    }
  }, [isExpanded])

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
    exit: { scale: 0.95, opacity: 0 },
  }

  return (
    <div className="relative w-full h-full">
      {/* THUMBNAIL */}
      {!isExpanded && (
        <div
          onClick={handleExpand}
          className="w-full h-full cursor-zoom-in"
        >
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-${objectFit} ${className}`}
          />
        </div>
      )}

      {/* EXPANDED IMAGE */}
      {isExpanded &&
        createPortal(
          <AnimatePresence>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm overflow-y-auto"
            >
              {/* Image wrapper (top aligned, scrollable) */}
              <div className="w-full flex justify-center pt-16 pb-24 px-4">
                <div
                  ref={expandedRef}
                  className="relative w-full max-w-[1200px]"
                >
                  <motion.img
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    src={src}
                    alt={alt}
                    className="w-full h-auto rounded-2xl bg-white shadow-[0_60px_120px_-30px_rgba(0,0,0,0.65)]"
                  />

                  {/* Close Button — Circle, White by default, Blue on hover */}
                   <motion.button
                onClick={handleClose}
                className="absolute -top-4 -right-4 bg-white text-gray-900 p-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-indigo-600 hover:text-white transition-colors duration-300 z-[101]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </div>
  )
}