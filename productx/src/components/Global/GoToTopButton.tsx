import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const GoToTopButton = () => {
  const [showLabel, setShowLabel] = useState(false);

  const handleClick = () => {
    const el = document.getElementById("landingpage");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="
        fixed 
        bottom-20 sm:bottom-24 
        right-4 sm:right-6 
        z-[10000]
        flex items-center
      "
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      {/* Hover Label */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="
              mr-3
              px-4 py-1.5
              rounded-full
              text-xs font-semibold
              text-white
              backdrop-blur-xl
              bg-black/60
              border border-white/20
              shadow-lg
              whitespace-nowrap
            "
          >
            Go to top
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Go to top"
        className="
          relative
          w-12 h-12 sm:w-14 sm:h-14
          rounded-full
          flex items-center justify-center

          /* GLASS BASE */
          backdrop-blur-xl
          bg-black/40

          /* DOUBLE BORDER */
          border border-white/30
          ring-1 ring-black/20

          /* PREMIUM SHADOW */
          shadow-[0_12px_35px_rgba(0,0,0,0.45)]

          hover:bg-black/55
          transition-all
        "
      >
        <ArrowUp
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          strokeWidth={2.5}
        />

        {/* Subtle inner glow */}
        <span className="
          absolute inset-0
          rounded-full
          bg-gradient-to-br from-white/20 to-transparent
          pointer-events-none
        " />
      </motion.button>
    </motion.div>
  );
};

export default GoToTopButton;
