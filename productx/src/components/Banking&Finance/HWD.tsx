import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { useLocation } from "react-router-dom";
 
 
const HWD = () => {
  const location = useLocation();
  const path = location.pathname;
 
  const isEHR = path.startsWith("/industries/ehr-and-pms");
  const isBanking = path.startsWith("/industries/banking-and-finance");
  const isHighTech = path.startsWith("/industries/high-tech");
 const isAI = location.pathname === "/industries/ai-optimization/clouddiet";
  const COLORS = {
    ehr: {
      topBg: "#F5F5F5",
      bottomBg: "#B4E7CE",
      headingColor: "#166D48",
      textcolor: "#000000",
        CheckColor: "#A80040"
       
    },
    banking: {
      topBg: "#F5F5F5",
      bottomBg: "#C1D7F3",
      headingColor: "#2B68C3",
      textcolor: "#000000",
        CheckColor: "#A80040"
    },
    hightech: {
      topBg: "#141414",
      bottomBg: "#E7D6FF",
      headingColor: "#5B3FD1",
      textcolor: "#CCCCCC",
      CheckColor: "#A80040"  },
  ai: {
    topBg: "#F5F5F5",
    bottomBg: "#0AC276",
    headingColor: "#020059",
    textcolor: "#141414",
    CheckColor: "#5551FF"
 
  }
  };
 
  let palette;
  if (isEHR) palette = COLORS.ehr;
  else if (isBanking) palette = COLORS.banking;
  else if (isHighTech) palette = COLORS.hightech;
else if (isAI) palette = COLORS.ai;
else palette = COLORS.banking; // default  else palette = COLORS.banking;
 
const { topBg, bottomBg, headingColor, textcolor, CheckColor } = palette;
 
const bottomTextColor = isAI ? "#F5F5F5" : textcolor;
 
 
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as Easing },
    },
  };
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
 
  const CardContent = () => (
    <section id="use-cases">
      {/* Top Section */}
      <div
        className="py-6 px-4 pb-12 md:p-8"
        style={{ backgroundColor: topBg }}
      >
        <div className="w-15 h-15 bg-gray-300 rounded-full mb-4"></div>
 
        <div className="text-left">
          <h4
            className="mb-4 text-[16px] md:text-[20px] lg:text-[24px] font-bricolage font-bold leading-[120%]"
            style={{ color: headingColor }}
          >
            Sed ut reprehenderit in
          </h4>
 
          <p style={{ color: textcolor }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
      </div>
 
      {/* Bottom Section */}
      <div
        className="pl-6 pr-10 py-10 xl:py-18 text-left"
        style={{ backgroundColor: bottomBg }}
      >
        <ul className="space-y-4">
          {[
            "Duis aute irure dolor in reprehenderit in voluptate velit",
            "Duis aute irure dolor in reprehenderit in",
            "Duis aute irure dolor in reprehenderit esse",
            "Duis aute irure dolor voluptate",
            "Duis aute irure dolor in reprehenderit wertg",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-4">
             <Check size={25} style={{ color: CheckColor }} />
 
             
<p style={{ color: bottomTextColor }}>
  {item}
</p>
 
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
 
  return (
    <div className="w-full relative bg-white flex flex-col items-center py-10 sm:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1360px] w-full">
 
        {/* HEADINGS */}
        <div className="flex flex-col space-y-4 sm:space-y-6 mb-10">
          <motion.h1
            className="font-medium text-2xl text-[#2A2A2A]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-1 rounded-full bg-gray-400"></div>
              {"Quis autim".split(" ").map((word, wordIndex) => (
                <span key={wordIndex}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={itemVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
          </motion.h1>
 
          <motion.h2
            className="text-[#2A2A2A] font-bricolage font-semibold text-[24px] md:text-[32px] lg:text-[64px] leading-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"Sed ut perspecious Unde".split("").map((char, i) => (
              <motion.span key={i} variants={itemVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </div>
 
        {/* CARDS — MOBILE CAROUSEL / DESKTOP GRID */}
        <div
  className="
    flex gap-6 overflow-x-auto snap-x snap-mandatory
    xl:overflow-visible xl:grid
    xl:grid-cols-3
    sm:gap-14
    pb-4
    scrollbar-hide
  "
>

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="
  relative rounded-md text-black overflow-hidden shadow-lg
  snap-center flex-shrink-0
  w-[85%] md:w-[50%] xl:w-auto
  min-h-[420px] xl:min-h-[600px]
"

              style={{ backgroundColor: bottomBg }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CardContent />
            </motion.div>
          ))}
        </div>
      </div>
 
      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
 
export default HWD;