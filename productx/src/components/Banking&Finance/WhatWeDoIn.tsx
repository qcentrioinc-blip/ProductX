import { useState, useRef } from "react";
import { motion } from "framer-motion";  
import img1 from "/Image1.jpg";
import img2 from "/Image2.jpg";
import img3 from "/Image3.jpg";
import { H2, P } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";

const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const targetRef = useRef(null);



  const accordionData = [
    {
      id: 1,
      title: "Banks",
      content:
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together...",
    },
    {
      id: 2,
      title: "Credit",
      content:
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together...",
    },
    {
      id: 3,
      title: "NBFCs",
      content:
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together...",
    },
  ];

  const images = [img1, img2, img3];

  return (
    <div
      ref={targetRef}
      className="bg-white text-black w-full h-full py-20 flex flex-col"
      id="benefits"
    >
      {/* Heading Section */}
      <div className="w-full relative mb-20 max-w-[1360px] mx-auto px-4 md:px-8 pt-10">
        {/* <div className="flex items-center gap-3">
          <div className="w-8 h-1 rounded-full bg-white"></div>
          <H3>Who is it for</H3>
        </div> */}

        <H2 className="text-[#2B68C3] ">Sed ut perspiciatis unde omnis
          <br/>
          <span className="text-gray-400">
          Consectetur adipisicing elit.
          </span>
        </H2>
        <P className="max-w-3xl pt-4 text-justify">Advanced Loan Solutions Beyond Traditional Banking.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis harum reprehenderit amet sint eius nulla esse culpa suscipit nihil mollitia sunt id, labore quidem fugit, ratione corporis est impedit.
        </P>

        <div className="relative w-full mt-4">
      
        <div className="h-0.5 w-full bg-white opacity-10 rounded-full" />
        

        <motion.div
          className="absolute top-0 left-0 h-0.5 w-full bg-black origin-left rounded-full"
          initial={{ scaleX: 0, opacity: 0.3 }}   
          whileInView={{ scaleX: 1, opacity: 1 }} 
          transition={{ duration: 2.0, ease: "easeInOut" }}
          viewport={{ once: true }} 
        />
      </div>

        

        <ContactUs className="bg-white px-6 py-2 absolute flex items-center mr-8 right-0 my-4 text-black">
          CONTACT US
        </ContactUs>
      </div>

      {/* Content Section */}
      <div className="flex   flex-1 flex-col md:flex-row w-full max-w-[1360px] mx-auto mt-10 px-4 md:px-8">
  {/* Image Side */}
<div className="relative w-full md:w-2/5 h-[500px] md:h-screen flex items-center justify-center">
  {/* Yellow Border Background - visible from top-left only */}
  <div className="absolute top-0 left-0 w-full h-full bg-amber-400 rounded-xl z-0"></div>

  {/* Vector Curve Overlay on Yellow Border */}
  <div className="absolute top-0 left-0 w-full h-full z-1">
    <img
      src="/VectorCurve.png"
      alt="Decorative Curve"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

  {/* Main Image Container - offset to reveal yellow border */}
  <div className="absolute top-10 left-5 right-0 bottom-0 w-[calc(100%-20px)] h-[calc(100%-20px)] z-2">
    <img
      src={images[openIndex]}
      alt="Who we serve"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>



        {/* Accordion Side */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`relative border-b border-gray-700 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "bg-[#F6F6F6] min-h-[275px]" : "min-h-[100px]"
                }`}
                onClick={() => setOpenIndex(index)}
              >
                <span
                  className={`absolute left-6 pb-4 pt-2 text-6xl md:text-7xl font-bold transition-colors duration-500 ${
                    isOpen ? "text-[#3E3E3E]  " : "text-[#2B68C3]"
                  }`}
                >
                  {String(item.id).padStart(2, "0")}
                </span>

                <motion.h3
                  className="text-lg md:text-3xl font-semibold absolute top-8 transition-colors duration-500"
                  initial={false}
                  animate={{
                    right: isOpen ? "auto" : "1.5rem",
                    left: isOpen ? "8rem" : "auto",
                    color: isOpen ? "#3E3E3E" : "#2B68C3",
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {item.title}
                </motion.h3>

                {isOpen && (
                  <motion.p
                    className="pr-12 pl-40 text-justify py-32"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <p className="text-black text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoIn;
