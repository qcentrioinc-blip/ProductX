import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { H2, H3, P } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";
const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);
  //  const containerRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);

  const sectionInView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;

    return rect.top < vh * 0.4 && rect.bottom > vh * 0.4;
  };

  const handleScroll = (e: WheelEvent | TouchEvent) => {
    const el = desktopRef.current || mobileRef.current;
    if (!el) return;

    if (!sectionInView(el)) return;

    // Determine scroll direction
    let delta = 0;

    if (e instanceof WheelEvent) {
      delta = e.deltaY;
    } else if (e instanceof TouchEvent) {
      if (e.touches[0] && e.changedTouches[0]) {
        delta = e.changedTouches[0].clientY - e.touches[0].clientY;
      }
    }

    // THROTTLE
    if (isScrolling.current) return;
    isScrolling.current = true;

    e.preventDefault();
    e.stopPropagation();

    setOpenIndex((prev) => {
      if (delta > 0) {
        // Scroll Down → Next
        if (prev < accordionData.length - 1) return prev + 1;
        return prev;
      } else if (delta < 0) {
        // Scroll Up → Previous
        if (prev > 0) return prev - 1;
        return prev;
      }
      return prev;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };





  useEffect(() => {
    const wheelHandler = (e: WheelEvent | TouchEvent) => handleScroll(e);


    window.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("touchmove", wheelHandler, { passive: false });

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("touchmove", wheelHandler);
    };
  });


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

  const images = ["/Products/AccordionImage.png", "/Image1.jpg", "/Image2.jpg"];




  return (
    <div
      ref={targetRef}
      className="bg-white text-black w-full h-full flex flex-col"

      id="benefits"
    >
      {/* Heading Section */}
      <div className="relative mb-20 max-w-8xl mx-10 pt-10">
        <div className="flex justify-between items-start gap-8">
          <div className="max-w-5xl">
            <H2 className="font-bold text-[#2B68C3]">
              Consecte <span className="text-[#666666]"> adipiscing </span> Consecte
            </H2>
            <P className="pt-4 text-justify leading-tight">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            </P>
          </div>

          <ContactUs className="hidden lg:flex gap-2 whitespace-nowrap">
            CONTACT US
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

      <div
        className="relative h-auto lg:h-[calc(var(--accordion-height))]"
        style={
          {
            "--accordion-height": `${accordionData.length * 100}vh`,
          } as React.CSSProperties
        }
      >


        {/* STICKY CONTENT */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">



          <div
            ref={desktopRef}
            className="hidden lg:flex flex-1 flex-row max-w-8xl mx-auto px-6 lg:px-10 w-full"
          >


            <div className="relative md:w-[500px] w-full h-[500px] md:h-[580px] flex items-center justify-start">


              {/* Main Image Container */}
              <div className="absolute top-14 left-0 right-0 bottom-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)] z-20">
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
                        className="pr-12 pl-32 md:pl-88 text-left pt-24 pb-2"
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
          className="lg:hidden flex flex-col w-full px-4 sm:px-8 py-4"
        >
          {/* Accordion Items with Images */}
          <div className="w-full flex flex-col gap-6">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="w-full">
                  {/* Image with Yellow Border */}
                  <div className="relative w-full h-[280px] sm:h-[350px] mt-4 mb-4">
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
                    className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out rounded-lg mb-4 ${isOpen ? "bg-blue-100 min-h-[200px] " : "bg-[#F6F6F6] min-h-[70px]"
                      }`}
                    onClick={() => setOpenIndex(index)}
                  >
                    <div className="flex items-center px-3 py-4">
                      <span
                        className={`text-4xl sm:text-5xl font-bold transition-colors duration-500 mr-4 ${isOpen ? "text-[#3E3E3E]" : "text-[#2B68C3]"
                          }`}
                      >
                        {String(item.id).padStart(2, "0")}
                      </span>
                      <H3
                        className={`text-lg sm:text-xl font-semibold transition-colors duration-500 ${isOpen ? "text-[#3E3E3E]" : "text-[#000000]"
                          }`}
                      >
                        {item.title}
                      </H3>
                    </div>

                    {isOpen && (
                      <motion.div
                        className="px-3 pb-4 text-justify"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {Array.isArray(item.content) ? (
                          item.content.map((para, i) => (
                            <P key={i} className="mb-3 text-xs sm:text-sm leading-relaxed">
                              {para}
                            </P>
                          ))
                        ) : (
                          <P className="text-xs sm:text-sm leading-relaxed">{item.content}</P>
                        )}
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
  );
};
export default WhatWeDoIn;