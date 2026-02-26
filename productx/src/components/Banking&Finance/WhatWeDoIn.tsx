import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { H2, H3, P } from "../../styles/Typography";
import { ContactUs } from "../../styles/Button";

const WhatWeDoIn = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const stickyInnerRef = useRef<HTMLDivElement | null>(null);

  const accordionData = [
    {
      id: 1,
      title: "Banks",
      link: "/industries/banking-and-finance/built-for/banks",
      content: [
        "Banks face complex challenges from legacy infrastructure, regulatory pressure, and digital expectations. Our solutions modernize core banking, automate AML compliance, streamline payments, and provide real-time risk visibility. ",
        "Enterprise-grade core banking and compliance platforms built for scale and future growth. ",
      ],
    },
    {
      id: 2,
      title: "Credit Unions",
      link: "/industries/banking-and-finance/built-for/credit-union",
      content: [
        "Credit unions need technology to compete with larger institutions while serving members. Our solutions digitize onboarding, simplify loan processing, enable league payments, and automate reconciliation without large IT teams. ",
        "Member-focused technology that streamlines operations without burdening your valuable staff. ",
      ],
    },
    {
      id: 3,
      title: "Financial Institutions",
      link: "/industries/banking-and-finance/built-for/financial-unions",
      content: [
        "Mortgage companies, NBFCs, and asset managers need adaptable platforms for diverse products and regulations. Our suite supports multi-entity management, asset tracking, treasury, and enterprise reconciliation. ",
        "Integrated solutions for complex operations, multi-entity management, and regulatory compliance. ",
      ],
    },
  ];

  const images = ["/WhatWe1.webp", "/WhatWe2.webp", "/WhatWe3.webp"];

  // Track desktop breakpoint (xl = 1280px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Sticky scroll logic — desktop only
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!isDesktop || !targetRef.current) return;

  //     const rect = targetRef.current.getBoundingClientRect();
  //     const outerHeight = targetRef.current.offsetHeight;
  //     const windowHeight = window.innerHeight;

  //     const scrolledIn = -rect.top;

  //     if (scrolledIn <= 0) {
  //       setOpenIndex(0);
  //       return;
  //     }

  //     const extraScroll = outerHeight - windowHeight;

  //     if (scrolledIn >= extraScroll) {
  //       setOpenIndex(accordionData.length - 1);
  //       return;
  //     }

  //     const segmentSize = extraScroll / accordionData.length;

  //     const newIndex = Math.min(
  //       accordionData.length - 1,
  //       Math.max(0, Math.floor(scrolledIn / segmentSize))
  //     );

  //     setOpenIndex(newIndex);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [accordionData.length, isDesktop]);
useEffect(() => {
  const handleScroll = () => {
    if (!isDesktop || !targetRef.current) return;

    const rect = targetRef.current.getBoundingClientRect();
    const scrollTop = -rect.top;
    const sectionHeight = window.innerHeight;

    const index = Math.min(
      accordionData.length - 1,
      Math.max(0, Math.round(scrollTop / sectionHeight))
    );

    setOpenIndex(index);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [accordionData.length, isDesktop]);


  return (
    <div
      ref={targetRef}
      className="relative bg-white text-black w-full"
      id="benefits"
      style={
        isDesktop
          ? { height: `calc(100vh + ${accordionData.length *100}vh)` }
          : { height: "auto" }
      }
    >
      <div
        ref={stickyInnerRef}
        className={isDesktop ? "sticky top-0 w-full overflow-hidden" : "relative w-full"}
        style={isDesktop ? { height: "115vh" } : { height: "auto" }}
      >
        <div
          className="max-w-8xl xl:mx-18  mx-auto flex flex-col px-4 xl:px-2  md:px-10 "
          style={
            isDesktop
              ? {
                  height: "100%",
                  paddingTop: "clamp(1.25rem, 3vh, 2.5rem)",
                  paddingBottom: "clamp(0.75rem, 2vh, 1.5rem)",
                }
              : {
                  height: "auto",
                  paddingTop: "0.5rem",
                  paddingBottom: "2rem",
                }
          }
        >
          {/* ── Heading ── */}
          <div className="shrink-0 flex justify-between items-start gap-8">
            <div className="max-w-4xl">
              <H2 className="font-bold text-[#2B68C3]">
                Who <span className="text-[#666666]"> We </span> Serve
              </H2>
              <P className="pt-2 text-justify xl:pr-20  leading-tight">
                Financial institutions of all sizes trust our solutions to
                streamline operations, automate compliance, and deliver better
                customer experiences. Our platforms scale to meet your specific
                needs.
              </P>
            </div>

            <ContactUs className="hidden xl:block gap-2 whitespace-nowrap shrink-0">
              Learn More
            </ContactUs>
          </div>

          {/* Mobile Button */}
          <div className="xl:hidden mt-4 shrink-0">
            <ContactUs className="w-full flex items-center justify-center gap-2 text-black">
              CONTACT US
            </ContactUs>
          </div>

          {/* ── Desktop Layout ── */}
          <div className="flex-1  py-10 min-h-0 hidden xl:flex flex-row items-stretch gap-8">

            {/* Image — no wrapper div, height stretches to match accordion column */}
            <motion.img
              key={openIndex}
              src={images[openIndex]}
              alt="Who we serve"
              className="shrink-0 object-cover object-top"
              style={{
                width: "550px",
                
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Accordion Side */}
            <div
              ref={desktopRef}
              className="flex-1 flex flex-col justify-center gap-3 min-h-0"
            >
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer overflow-hidden rounded-lg transition-all duration-500 ease-in-out ${
                      isOpen ? "bg-blue-100" : "bg-[#F6F6F6]"
                    }`}
                    style={{ minHeight: isOpen ? "auto" : "100px" }}
                    onClick={() => setOpenIndex(index)}
                  >
                    {/* Number */}
                    <span
                      className={`absolute left-6 top-3 text-6xl font-bold leading-none transition-colors duration-500 ${
                        isOpen ? "text-[#3E3E3E]" : "text-[#2B68C3]"
                      }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <motion.h3
                      className="absolute top-6 left-32 text-2xl lg:text-3xl font-semibold"
                      initial={false}
                      animate={{ color: isOpen ? "#3E3E3E" : "#000000" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Arrow — only when open */}
                    {isOpen && (
                      <motion.a
                        href={item.link}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute right-6 top-10 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src="/Arrowright.svg" alt="Arrow Right" className="w-5 h-5" />
                      </motion.a>
                    )}

                    {/* Content — only when open */}
                    {isOpen && (
                      <motion.div
                        className="  pr-14 pt-16 pb-3 text-left"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {Array.isArray(item.content) ? (
                          item.content.map((para, i) => (
                            <P key={i} className="pb-2 xl:pl-24 pt-4 leading-snug text-sm">
                              {para}
                            </P>
                          ))
                        ) : (
                          <P className="leading-snug text-sm">{item.content}</P>
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile / Tablet Layout — normal flow, no sticky ── */}
          <div
            ref={mobileRef}
            className="xl:hidden flex flex-col w-full mt-6"
          >
            <div className="w-full flex flex-col gap-6">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.id} className="w-full">
                    {/* Image — no border, no badge, full image visible */}
                    <div className="w-full mt-4 mb-4">
                      <img
                        src={images[index]}
                        alt={item.title}
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>

                    {/* Accordion */}
                    <div
                      className={`relative overflow-hidden transition-all duration-500 ease-in-out rounded-lg mb-4 ${
                        isOpen ? "bg-blue-100" : "bg-[#F6F6F6]"
                      }`}
                    >
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

                        {isOpen && (
                          <motion.a
                            href={item.link}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md shrink-0"
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