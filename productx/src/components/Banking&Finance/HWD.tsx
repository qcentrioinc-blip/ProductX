import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { useLocation } from "react-router-dom";
import {   P } from '../../styles/Typography';
 
const   HWD = () => {
const location = useLocation();
const path = location.pathname;
 
const isEHR = path.startsWith("/industries/ehr-and-pms");
const isBanking = path.startsWith("/industries/banking-and-finance");
const isHighTech = path.startsWith("/industries/high-tech");
// const isBanking = location.pathname === "/industries/banking-and-finance";
 
// Default (banking) colors
const COLORS = {
  ehr: {
    topBg: "#F5F5F5",
    bottomBg: "#B4E7CE",
    headingColor: "#166D48",
    textcolor: "#000000"
  },
  banking: {
    topBg: "#F5F5F5",
    bottomBg: "#C1D7F3",
    headingColor: "#2B68C3",
    textcolor: "#000000"
  },
  hightech: {
    topBg: "#141414",
    bottomBg: "#E7D6FF",
    headingColor: "#5B3FD1",
    textcolor: "#CCCCCC"
  }
};
 
// Select correct palette
let palette;
 
if (isEHR) palette = COLORS.ehr;
else if (isBanking) palette = COLORS.banking;
else if (isHighTech) palette = COLORS.hightech;
else palette = COLORS.banking; // default
 
// Extract
const { topBg, bottomBg, headingColor, textcolor } = palette;
 
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
  <section id='use-cases'>
    {/* Top Section */}
    <div
      className="py-6 px-4 pb-12 md:p-8"
      style={{ backgroundColor: topBg }}
    >
      <div className="w-15 h-15 bg-gray-300 rounded-full mb-4"></div>
 
      <div className="text-justify">
        <h4 className="mb-4 text-[16px] md:text-[20px] lg:text-[24px]
        font-bricolage
        font-bold
        leading-[120%]" style={{ color: headingColor }}>
          Sed ut reprehenderit in
        </h4>
 
        < p className="" style={{ color: textcolor }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </p>
      </div>
    </div>
 
    {/* Bottom Section */}
    <div
      className="pl-6 pr-10 py-18 text-justify"
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
            <Check size={25} className="text-[#A80040]" />
            <P>{item}</P>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
 
  return (
    <div className="w-full relative bg-white flex flex-col items-center py-10 sm:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1360px] w-full">
        <div className="flex flex-col space-y-4 sm:space-y-6 mb-10">
          {/* First Heading */}
          <motion.h1
            className="font-medium text-2xl text-[#2A2A2A]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-1 rounded-full bg-gray-400"
              ></div>
              {"Quis autim".split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="">
                  {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={itemVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
          </motion.h1>
 
          {/* Second Heading (Fixed — absolutely no gap) */}
          <motion.h2
            className="text-[#2A2A2A] font-bricolage font-semibold text-[40px] leading-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Render without any spaces */}
            {"Sed ut perspecious Unde"
              .split("")
              .map((char, i) => (
                <motion.span key={i} variants={itemVariants}>
                  {char}
                </motion.span>
              ))}
          </motion.h2>
        </div>
 
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
             className="relative rounded-lg text-black overflow-hidden shadow-lg"
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
    </div>
  );
};
 
export default HWD;
 
 