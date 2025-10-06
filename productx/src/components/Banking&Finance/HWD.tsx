import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { H3, P } from '../../styles/Typography';
 
const HWD = () => {
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
    <>
      {/* Top Section */}
      <div className="p-6 pb-12 md:p-8 bg-[rgba(245,245,245,1)]" id='use-cases'>
        {/* Icon */}
        <div className="w-10 h-10 bg-gray-300 rounded-full mb-4"></div>
        <div className="text-justify">
          <H3 className='text-black'>Sed ut perspiciatis unde</H3>
          <P className='text-black'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </P>
        </div>
      </div>

      {/* Bottom List Section */}
      <div className="p-6 md:p-8 text-justify">
        <ul className="space-y-4">
          {[
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
            "Duis aute irure dolor in reprehenderit in",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse",
            "Duis aute irure dolor in reprehenderit in voluptate",
            "Duis aute irure dolor in reprehenderit in voluptate wertg",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check size={20} className="text-white flex-shrink-0" />
              <P className="text-sm sm:text-base md:text-base">{item}</P>
            </li>
          ))}
        </ul>
      </div>
    </>
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
              <div className="w-8 h-1 rounded-full bg-gray-400"></div>
              {"Quis autem".split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                  {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={itemVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
          </motion.h1>
 
          {/* Second Heading */}
          <motion.h2
            className="text-[#2A2A2A] font-bricolage font-semibold text-[40px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"Sed ut perspecious".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">
                {word.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={itemVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="relative bg-black rounded-lg text-white overflow-hidden shadow-lg"
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
