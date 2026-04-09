"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: "-100%" }}
      transition={{ 
        delay: 2.2, 
        duration: 1.5, 
        ease: [0.65, 0, 0.35, 1] 
      }}
      className="fixed inset-0 z-[9999999999] bg-[#051026] overflow-hidden pointer-events-none"
    >
      {/* Premium Ambient Glow (Background) */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"
           animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         />
         <motion.div 
           className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]"
           animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
         />
      </div> */}

      {/* Main Content Wrapper with Parallax Effect */}
      <motion.div
        initial={{ scale: 1, x: 0 }}
        animate={{ 
          scale: 0.9, 
          x: -50, 
          opacity: 0 
        }}
        transition={{ 
          delay: 2.2, 
          duration: 1.5, 
          ease: [0.65, 0, 0.35, 1] 
        }}
        className="relative h-full flex items-center justify-center"
      >
        
        {/* Decorative Ring (Kept commented out as per your code) */}
        {/* <motion.div
          className="absolute border border-white/5 rounded-full"
          style={{ width: 450, height: 450 }}
          animate={{ rotate: 360, borderColor: ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.05)"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        /> */}

        {/* LOGO + TEXT */}
        <div className="flex items-center gap-6 md:gap-10 z-10">
          {/* Q IMAGE */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 150, 
              damping: 20,
              delay: 0.2 
            }}
          >
            {/* <img
              src="/QLogo.svg"
              alt="Q"
              className="w-24 h-24 md:w-40 md:h-40 relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            /> */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl 
        font-bricolage       
        bg-gradient-to-b from-purple-800 to-yellow-600 bg-[length:200%_auto] bg-clip-text text-transparent">Q</h1>
          </motion.div>

          {/* NEST WAVE TEXT */}
          <div className="flex font-bold font-bricolage text-5xl md:text-8xl lg:text-9xl tracking-tight font-bricolage">
            {["N", "E", "S", "T"].map((letter, index) => (
              <motion.span
                key={index}
                // ✅ UPDATED: Brighter colors for full visibility
                className="bg-gradient-to-b from-purple-800 to-yellow-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.4 + (index * 0.08),
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default PageLoader;