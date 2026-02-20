import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { H2, H3, P } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";
const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);
  //  const containerRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
 

 





  // useEffect(() => {
  //   const wheelHandler = (e: WheelEvent | TouchEvent) => handleScroll(e);


  //   window.addEventListener("wheel", wheelHandler, { passive: false });
  //   window.addEventListener("touchmove", wheelHandler, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", wheelHandler);
  //     window.removeEventListener("touchmove", wheelHandler);
  //   };
  // });


  const targetRef = useRef(null);
  const accordionData = [
    {
      id: 1,
      title: "Banks",
       link: "/industries/banking-and-finance/built-for/banks",
      content: [
        "Banks face complex challenges from legacy infrastructure, regulatory pressure, and digital expectations. Our solutions modernize core banking, automate AML compliance, streamline payments, and provide real-time risk visibility. ",
        "Enterprise-grade core banking and compliance platforms built for scale and future growth. ",
      ]
    },
    {
      id: 2,
      title: "Credit Unions",
       link: "/industries/banking-and-finance/built-for/credit-union",
      content: [
        "Credit unions need technology to compete with larger institutions while serving members. Our solutions digitize onboarding, simplify loan processing, enable league payments, and automate reconciliation without large IT teams. ",
        "Member-focused technology that streamlines operations without burdening your valuable staff. ",
      ]
    },
    {
      id: 3,
      title: "Financial Institutions",
       link: "/industries/banking-and-finance/built-for/financial-unions",
      content: [
        "Mortgage companies, NBFCs, and asset managers need adaptable platforms for diverse products and regulations. Our suite supports multi-entity management, asset tracking, treasury, and enterprise reconciliation. ",
        "Integrated solutions for complex operations, multi-entity management, and regulatory compliance. ",
      ]
    },
  ];

  const images = ["/Products/AccordionImage.png", "/Image1.jpg", "/Image2.jpg"];




  return (
    <div
  ref={targetRef}
  className="bg-white text-black w-full"
  id="benefits"
>
  <div className="max-w-7xl mx-auto flex flex-col">

      {/* Heading Section */}
      <div className="relative mb-20 max-w-7xl mx-auto pt-10 px-10 ">
        <div className="flex justify-between items-start gap-8">
          <div className="max-w-5xl">
            <H2 className="font-bold text-[#2B68C3]">
              Who <span className="text-[#666666]"> We </span> Serve
            </H2>
            <P className="pt-4 text-justify leading-tight">
            Financial institutions of all sizes trust our solutions to streamline operations, automate compliance, and deliver better customer experiences. Our platforms scale to meet your specific needs. 
            </P>
          </div>

          <ContactUs className="hidden xl:block gap-2 whitespace-nowrap">
            Learn More
          </ContactUs>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden mt-6">
          <ContactUs className="w-full flex items-center justify-center gap-2 text-black">
            CONTACT US
          </ContactUs>
        </div>
      </div>
      {/* Desktop Layout */}
      {/* STICKY SCROLL WRAPPER */}

      {/* <div
        className="relative h-auto lg:h-[calc(var(--accordion-height))]"
        style={
          {
            "--accordion-height": `${accordionData.length * 100}vh`,
          } as React.CSSProperties
        }
      > */}
<div className="relative">


        {/* STICKY CONTENT */}
        <div className=" flex flex-col justify-center">



          <div
            ref={desktopRef}
            className="hidden xl:flex flex-1 flex-row max-w-7xl mx-auto px-6 pb-16 lg:px-10 w-full"
          >


            <div className="relative md:w-[500px] w-full h-[500px] md:h-[570px] flex items-center justify-start">


              {/* Main Image Container */}
              <div className="absolute top-0 left-0 right-0  w-[calc(100%-2rem)] h-[calc(100%-1rem)] z-20">
                <img
                  src={images[openIndex]}
                  alt="Who we serve"
                  className="w-full h-full object-cover  rounded-br-[180px] rounded-lg"
                />
                <div className="
      absolute
      bottom-0 right-0
      w-full h-full
      border-r-[12px]
      border-b-[12px]
      border-t-[12px] border-[#2B68C3]
      rounded-br-[180px]
         
      z-20
    ">
                </div>
                <div className="
      absolute
      -top-18 -left-8
         
      flex flex-col gap-2
      z-20
    ">
                  <img src="/Products/FloatingImage.png" alt="" />
                </div>
              </div>


            </div>

            {/* Accordion Side */}
            <div className="w-full md:w-3/5 flex flex-col justify-center gap-4">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out rounded-lg ${isOpen ? "bg-blue-100 min-h-[50px]" : "bg-[#F6F6F6] min-h-[100px]"
                      }`}
                    onClick={() => setOpenIndex(index)}
                  >
                    <span
                      className={`absolute left-6 top-4 text-6xl md:text-7xl font-bold transition-colors duration-500 ${isOpen ? "text-[#3E3E3E]" : "text-[#2B68C3]"
                        }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>

                 <motion.h3
  className="text-lg md:text-2xl lg:text-3xl font-semibold absolute top-8 left-32 transition-colors duration-500"
  initial={false}
  animate={{
    color: isOpen ? "#3E3E3E" : "#000000",
  }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
>
  {item.title}
</motion.h3>

{/* Circular Arrow - ONLY WHEN OPEN */}
{isOpen && (
  <motion.a
    href={item.link}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.4 }}
    className="absolute right-8 top-12 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
  >
    <span className="text-black "><img src="/Arrowright.svg" alt="Arrow Right" className="w-5 h-5" /></span>
  </motion.a>
)}


                    {isOpen && (
                      <motion.div
                        className="pr-12 lg:pl-10 pt-24    xl:pl-66 text-left pt-16 pb-2"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 80 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        {Array.isArray(item.content) ? (
                          item.content.map((para, i) => (
                            <P key={i} className="  pb-4 leading-tight text-base">
                              {para}
                            </P>
                          ))
                        ) : (
                          <P className="  leading-tight text-base">{item.content}</P>
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Mobile/Tablet Layout */}
        <div
          ref={mobileRef}
          className="xl:hidden flex flex-col w-full px-8 py-4"
        >
          {/* Accordion Items with Images */}
          <div className="w-full flex flex-col gap-6">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="w-full ">
                  {/* Image with Yellow Border */}
                  <div className="relative w-full h-[280px] sm:h-[450px] mt-4 mb-4">
                    <img
                      src={images[index]}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-br-[120px] rounded-lg"
                    />
                    <div className="absolute bottom-0 right-0 w-full h-full border-r-[8px] border-b-[8px] border-t-[8px] border-[#2B68C3] rounded-br-[120px] z-20"></div>
                    <div className="absolute -top-12 -left-4 flex flex-col gap-2 z-20">
                      <img src="/Products/FloatingImage.png" alt="" className="w-20 h-20" />
                    </div>
                  </div>

                  {/* Accordion Item */}
             <div
  className={`relative overflow-hidden transition-all duration-500 ease-in-out rounded-lg mb-4 ${
    isOpen ? "bg-blue-100" : "bg-[#F6F6F6]"
  }`}
>
  {/* Header */}
  <div
    className="flex items-center justify-between px-4 py-4 cursor-pointer"
    onClick={() => setOpenIndex(index)}
  >
    <div className="flex items-center">
      <span
        className={`text-4xl sm:text-5xl font-bold mr-4 transition-colors duration-500 ${
          isOpen ? "text-[#3E3E3E]" : "text-[#2B68C3]"
        }`}
      >
        {String(item.id).padStart(2, "0")}
      </span>

      <H3
        className={`text-lg sm:text-xl font-semibold transition-colors duration-500 ${
          isOpen ? "text-[#3E3E3E]" : "text-black"
        }`}
      >
        {item.title}
      </H3>
    </div>

    {/* Arrow ONLY when open */}
    {isOpen && (
      <motion.a
        href={item.link}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/Arrowright.svg"
          alt="Arrow Right"
          className="w-4 h-4"
        />
      </motion.a>
    )}
  </div>

  {/* Content */}
  {isOpen && (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="px-4 pb-4"
  >
    {Array.isArray(item.content)
      ? item.content.map((para, i) => (
          <P key={i} className="mb-3 text-sm leading-relaxed">
            {para}
          </P>
        ))
      : <P>{item.content}</P>}
  </motion.div>
)}

</div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default WhatWeDoIn;