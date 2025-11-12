import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { ScrollContext } from "../../../context/ScrollContext";
 
const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContext = useContext(ScrollContext);
 
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
    container: scrollContext || undefined,
  });
 
  
  const x = useTransform(scrollYProgress, [0, 1], ["14%", "-65%"]);
 
  const cards = [
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      author: "Abcdef, Qnest CEO, New York, USA",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit.",
      text2:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      author: "John Doe, CTO, London, UK",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "Complex integration processes slow down business operations significantly.",
      text2:
        "Qnest provides plug-and-play solutions that integrate in minutes, not months.",
    },
    {
      title:
        "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      author: "Jane Smith, VP Operations, Singapore",
      btn1: "Challenge",
      btn2: "With Qnest",
      text1:
        "Growing businesses struggle with infrastructure limitations and support gaps.",
      text2:
        "Our platform scales automatically with 24/7 enterprise support worldwide.",
    },
  ];
 
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: "300vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Fixed background image */}
        <div
          className="absolute right-0 lg:top-33 h-[60vh] md:h-[70vh] lg:h-[75vh] w-full md:w-1/2 bg-no-repeat bg-contain bg-right-top md:bg-right opacity-40 md:opacity-100 pointer-events-none z-0"
          style={{
            backgroundImage: "url('/HighTech/ProductDetails/img3.png')",
           
          }}
        />
 
        {/* Section title - Fixed at top */}
        <div className="absolute top-14 md:top-24 left-4 md:left-12 z-20 mt-4">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Sed ut perspiciatis
          </h2>
          <h2 className="text-[#F99526] mt-1 md:mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-serif">
            Unde Seduo ut perspiciatis
          </h2>
        </div>
 
        {/* Horizontal scrolling cards */}
        <motion.div
          style={{ x }}
          className="flex gap-4 md:gap-6 px-4 md:px-12 mt-10 md:mt-20 xl:mt-58 will-change-transform relative z-10"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[45vw] lg:w-[42vw] xl:w-[38vw] h-[400px] md:h-[450px] lg:h-[400px] bg-white/10  rounded-2xl p-6 md:p-8 text-white flex flex-col justify-between shadow-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              {/* Top text */}
              <div>
                <h4 className="font-semibold text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6">
                  {card.title}
                </h4>
                <p className="text-[#F99526] font-semibold text-sm md:text-base lg:text-lg">
                  {card.author}
                </p>
              </div>
 
              {/* Buttons + respective texts */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6">
                {/* Button 1 + Text */}
                <div className="flex flex-col flex-1">
                  <button className="border border-[#F99526] px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#F99526] hover:text-black transition-all duration-300 text-sm md:text-base font-medium">
                    {card.btn1}
                  </button>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed mt-3">
                    {card.text1}
                  </p>
                </div>
 
                {/* Button 2 + Text */}
                <div className="flex flex-col flex-1">
                  <button className="border border-[#F99526] px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#F99526] hover:text-black transition-all duration-300 text-sm md:text-base font-medium">
                    {card.btn2}
                  </button>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed mt-3">
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