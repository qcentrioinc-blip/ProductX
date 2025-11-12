"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { H2, H4 } from "../../../styles/Typography";
 
const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
 
  // Smooth horizontal translation (free-flow)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
 
  const cards = [
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
      author: "Abcdef, Qnest CEO, New York ,USA",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "Our challenge-driven approach helps businesses push beyond limiaster.",
      text2:
        "Partnering with Qnest empowers global teams with reliable, scalable solutions.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
      author: "Abcdef, Qnest CEO, New York ,USA",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "Our challenge-driven approach helps businesses push beyond limiaster.",
      text2:
        "Partnering with Qnest empowers global teams with reliable, scalable solutions.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
      author: "Jane Smith, Qnest CTO, Singapore",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "Challenge the limits of technology to discover better, solutions.",
      text2:
        "With Qnest, innovation meets simplicity for a truly global experience.",
    },
  ];
 
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden "
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Static background image with responsive positioning */}
        <div
          className="absolute right-0 top-[5%] h-[160%] w-1/2 bg-no-repeat bg-contain bg-right opacity-100 pointer-events-none
                     sm:top-[11%] sm:h-[100%] md:top-[5%] md:h-[100%]
                     lg:top-[5%] lg:h-[90%]
                     sm:bg-center md:bg-right"
          style={{
            backgroundImage: "url('/HighTech/ProductDetails/img3.png')",
          }}
        />
 
        {/* Section title */}
        <div className="absolute top-16 left-6 md:left-12 z-10">
          <H2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Sed ut perspiciatis
          </H2>
          <H2 className="text-[#F99526] mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Unde Seduo ut perspiciatis
          </H2>
        </div>
 
        {/* Smooth horizontal motion container */}
        <motion.div
          style={{ x }}
          className="flex gap-8 sm:gap-10 px-6 md:px-12 mt-24 md:mt-40 xl:mt-56 will-change-transform"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-[85vw] sm:min-w-[600px] md:min-w-[624px] h-[340px] sm:h-[380px] md:h-[420px] bg-white/20 rounded-xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl transition-all duration-500"
            >
              {/* Top text */}
              <div>
                <H4 className="font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
                  {card.title}
                </H4>
                <H4 className="text-[#F99526] font-semibold mt-4 text-sm sm:text-base md:text-lg">
                  {card.author}
                </H4>
              </div>
 
              {/* Buttons + respective texts */}
              <div className="flex gap-6 sm:gap-10 mt-6 flex-wrap sm:flex-nowrap">
                {/* Button 1 + Text */}
                <div className="flex flex-col flex-1 min-w-[45%]">
                  <button className="border border-[#F99526] px-4 sm:px-5 py-2 rounded-full hover:bg-[#F99526]/20 transition text-sm sm:text-base">
                    {card.btn1}
                  </button>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2">
                    {card.text1}
                  </p>
                </div>
 
                {/* Button 2 + Text */}
                <div className="flex flex-col flex-1 min-w-[45%]">
                  <button className="border border-[#F99526] px-4 sm:px-5 py-2 rounded-full hover:bg-[#F99526]/20 transition text-sm sm:text-base">
                    {card.btn2}
                  </button>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2">
                    {card.text2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
 
export default FeatureCards;