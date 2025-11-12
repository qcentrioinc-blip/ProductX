import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { H2, H3, P } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";
const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const targetRef = useRef(null);
 
  const accordionData = [
    {
      id: 1,
      title: "Banks",
      content: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
      ]
    },
    {
      id: 2,
      title: "Credit",
      content: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
      ]
    },
    {
      id: 3,
      title: "NBFC's",
      content: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
      ]
    },
  ];
 
  const images = ["/Image1.jpg", "/Image2.jpg", "/Image3.jpg"];
 
  return (
    <div
      ref={targetRef}
      className="bg-white text-black max-w-8xl overflow-hidden h-full py-20 flex flex-col"
      id="benefits"
    >
      {/* Heading Section */}
      <div className="relative mb-20 mx-10 max-w-8xl md:px-0 md:mx-10 px-4 sm:px-8 lg:px-8 pt-10">
         
        <H2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B68C3]">
          Consecte <span className="text-[#666666]"> adipiscing </span> Consecte
          <br />
           
        </H2>
        <P className="max-w-3xl pt-4 text-justify leading-tight text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        </P>
       
       
         <ContactUs className=" hidden max-w-8xl absolute lg:flex items-center top-12   right-12 text-black">
          CONTACT US
        </ContactUs>
        <ContactUs className="  max-w-8xl absolute flex items-center my-4 lg:hidden    text-black">
          CONTACT US
        </ContactUs>
      </div>
 
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-1 flex-row w-full mx-10 max-w-8xl md:px-0 md:mx-10 px-4 sm:px-8 lg:px-8">
        {/* Image Side with Yellow Border */}
        <div className="relative md:w-[500px] w-full h-[500px] md:h-[550px] flex items-center justify-start">
          {/* Yellow Border Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#FFD700] rounded-lg z-0"></div>
 
          {/* Main Image Container - offset to reveal yellow border */}
          <div className="absolute top-8 left-8 right-0 bottom-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)] z-20">
            <img
              src={images[openIndex]}
              alt="Who we serve"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
 
        {/* Accordion Side */}
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-4">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;
 
            return (
              <div
                key={item.id}
                className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out rounded-lg ${
                  isOpen ? "bg-[#F6F6F6] min-h-[50px]" : "bg-[#F6F6F6] min-h-[100px]"
                }`}
                onClick={() => setOpenIndex(index)}
              >
                <span
                  className={`absolute left-6 top-4 text-6xl md:text-7xl font-bold transition-colors duration-500 ${
                    isOpen ? "text-[#3E3E3E]" : "text-[#2B68C3]"
                  }`}
                >
                  {String(item.id).padStart(2, "0")}
                </span>
 
                <motion.h3
                  className="text-lg md:text-2xl lg:text-3xl font-semibold absolute top-8 transition-colors duration-500"
                  initial={false}
                  animate={{
                    right: isOpen ? "auto" : "1.5rem",
                    left: isOpen ? "8rem" : "auto",
                    color: isOpen ? "#3E3E3E" : "#000000",
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {item.title}
                </motion.h3>
 
                {isOpen && (
                  <motion.div
                    className="pr-12 pl-32 md:pl-72 text-justify pt-24 pb-2"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {Array.isArray(item.content) ? (
                      item.content.map((para, i) => (
                        <P key={i} className="text-gray-700 pb-4 leading-tight text-base">
                          {para}
                        </P>
                      ))
                    ) : (
                      <P className="text-gray-700 leading-tight text-base">{item.content}</P>
                    )}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
 
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col w-full px-4 sm:px-8">
        {/* Image with Yellow Border */}
        <div className="relative w-full h-[400px] mb-8">
          {/* Yellow Border Background */}
          <div className="absolute top-0 left-0 w-[calc(100%-2rem)] h-full bg-[#FFD700] rounded-lg z-0"></div>
 
          {/* Main Image Container */}
          <div className="absolute top-6 left-6 w-[calc(100%-2rem)] h-[calc(100%-1.5rem)] z-10">
            <img
              src={images[openIndex]}
              alt="Who we serve"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
 
        {/* Accordion Items */}
        <div className="w-full flex flex-col gap-4">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;
 
            return (
              <div
                key={item.id}
                className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out rounded-lg ${
                  isOpen ? "bg-[#F6F6F6] min-h-[200px]" : "bg-[#F6F6F6] min-h-[80px]"
                }`}
                onClick={() => setOpenIndex(index)}
              >
                <div className="flex items-center p-6">
                  <span
                    className={`text-5xl font-bold transition-colors duration-500 mr-6 ${
                      isOpen ? "text-[#3E3E3E]" : "text-[#2B68C3]"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
 
                  <H3
                    className={`text-xl font-semibold transition-colors duration-500 ${
                      isOpen ? "text-[#3E3E3E]" : "#000000"
                    }`}
                  >
                    {item.title}
                  </H3>
                </div>
 
                {isOpen && (
                  <motion.div
                    className="px-6 pb-6 text-justify"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {Array.isArray(item.content) ? (
                      item.content.map((para, i) => (
                        <P key={i} className="text-gray-700 mb-4 text-sm leading-relaxed">
                          {para}
                        </P>
                      ))
                    ) : (
                      <P className="text-gray-700 text-sm leading-relaxed">{item.content}</P>
                    )}
                  </motion.div>
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