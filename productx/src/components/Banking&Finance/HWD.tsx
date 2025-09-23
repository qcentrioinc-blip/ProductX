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
      transition: {
        duration: 0.8,
        ease: 'easeOut' as Easing,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const CardContent = () => {
    return (
      <>
        {/* Top Section */}
        <div className="p-6 md:p-8 bg-[rgba(245,245,245,1)]" id='use-cases'>
          {/* Icon */}
          <div className="w-10 h-10 bg-gray-300 rounded-full mb-4"></div>
          <div className="text-justify">
            {/* Title */}
            {/* <h3 className="text-2xl font-normal font-bricolage-grotesque mb-4 text-black">
              Sed ut perspiciatis unde
            </h3> */}
            <H3 className='text-black'>
              Sed ut perspiciatis unde
            </H3>
            {/* Paragraph */}
            {/* <p className="text-base font-normal font-quicksand text-black">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p> */}
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
                <Check size={24} className="text-white" />
                {/* <p className="text-base font-normal font-quicksand text-gray-300">{item}</p> */}
                <P>{item}</P>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="w-full relative bg-white flex flex-col items-center py-20">
      <div className="w-[1360px] px-10">
        <div className="w-[1360px] h-[110px] flex flex-col bricolage-grotesque text-justify">
          {/* First Heading */}
          <motion.h1
            className="w-[185px] h-[30px] font-medium text-2xl text-[#2A2A2A] bricolage-grotesque mb-[5px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
          >
            {"Quis autem".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">
                {word.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={itemVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Second Heading */}
          <motion.h2
            className="w-[470px] h-[48px] text-[#2A2A2A] font-bricolage text-[40px] font-semibold"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="relative bg-black rounded-lg text-white overflow-hidden shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true}}
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
