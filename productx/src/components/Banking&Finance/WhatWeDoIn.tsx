import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import img1 from "/Image1.jpg";
import img2 from "/Image2.jpg";
import img3 from "/Image3.jpg";
import { H2, H3, P } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";

const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const targetRef = useRef(null);

  // track scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // smooth animated progress
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const accordionData = [
    {
      id: 1,
      title: "Banks",
      content:
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together. Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.",
    },
    {
      id: 2,
      title: "Credit",
      content:
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together. Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.",
    },
    {
      id: 3,
      title: "NBFCs",
      content:
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together. Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.",
    },
  ];

  const images = [img1, img2, img3];

  return (
    <div
      ref={targetRef}
      className="bg-black text-white w-screen h-full py-20 flex flex-col"
      id="benefits"
    >
      {/* Heading Section */}
      <div className="w-full relative mb-20  max-w-[1360px] mx-auto px-4 md:px-8 pt-10">
        {/* top line with curved rectangle */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-1 rounded-full bg-white"></div>
          {/* <h3 className="text-xl font-semibold">Who is it for</h3> */}
          <H3>Who is it for</H3>
        </div>

        {/* <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
          Sed ut perspiciatis unde omnis
        </h2> */}
        <H2>Sed ut perspiciatis unde omnis</H2>
        {/* <p className="text-gray-300 mt-3 max-w-2xl">
          Advanced Loan Solutions Beyond Traditional Banking
        </p> */}
        <P>
           Advanced Loan Solutions Beyond Traditional Banking
        </P>
        {/* Progress bar + button */}
        <div className="flex items-center justify-between mt-6">
          {/* progress bar */}
          <motion.div className="h-1 bg-gray-700 relative flex-1 rounded">
            <motion.div
              className="absolute left-1/2 top-0 h-full bg-white origin-left"
              style={{ scaleX: progress }}
            />
          </motion.div>
        </div>
        {/* <button className="bg-white absolute mr-8 right-0 my-4 text-black px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
          CONTACT US <span>→</span>
        </button> */}
        <ContactUs className="bg-white text-black">
          CONTACT US
        </ContactUs>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col md:flex-row w-full max-w-[1360px] mx-auto mt-10 px-4 md:px-8">
        {/* Image Side */}
        <div className="w-full md:w-2/5 h-[500px] md:h-screen">
          <img
            src={images[openIndex]} 
            alt="Who we serve"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Accordion Side */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
             <div
  key={item.id}
  className={`relative border-b border-gray-700 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "bg-gray-900 min-h-[275px]" : "min-h-[100px]"
  }`}
  onClick={() => setOpenIndex(index)}
>
  {/* Number is always visible */}
  <span
    className={`absolute left-6 top-6 text-6xl md:text-7xl font-bold transition-colors duration-500 ${
      isOpen ? "text-white" : "text-neutral-800"
    }`}
  >
    {String(item.id).padStart(2, "0")}
  </span>

  {/* Title → shifts position */}
  <motion.h3
    className="text-lg md:text-3xl font-semibold absolute top-8 transition-colors duration-500"
    initial={false}
    animate={{
      right: isOpen ? "auto" : "1.5rem", 
      left: isOpen ? "8rem" : "auto",   
      color: isOpen ? "#ffffff" : "#d1d5db",
    }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {item.title}
  </motion.h3>


{isOpen && ( 
  <motion.p
  className="pr-12 pl-40 text-justify py-32" initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 80 }} transition={{ duration: 0.6, ease: "easeOut" }} > <p className="text-gray-400 text-sm md:text-base leading-relaxed"> {item.content} </p> </motion.p> )} </div> );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoIn;
