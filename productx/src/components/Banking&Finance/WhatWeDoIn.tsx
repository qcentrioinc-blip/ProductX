import { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import img1 from "/Image1.jpg";
import img2 from "/Image2.jpg";
import img3 from "/Image3.jpg";

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
        "Collaboration is at the heart of our approach. We value the synergy created when diverse minds come together.",
    },
    {
      id: 2,
      title: "Credit Unions",
      content:
        "Our collaborative spirit extends to our clients, consultants, and the communities we serve.",
    },
    {
      id: 3,
      title: "NBFCs",
      content:
        "Working together fosters innovation and leads to the most successful and holistic solutions.",
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
          <h3 className="text-xl font-semibold">Who is it for</h3>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
          Sed ut perspiciatis unde omnis
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl">
          Advanced Loan Solutions Beyond Traditional Banking
        </p>

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
        <button className="bg-white absolute mr-8 right-0 my-4 text-black px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition">
          CONTACT US <span>→</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col md:flex-row w-full max-w-[1360px] mx-auto mt-10 px-4 md:px-8">
        {/* Image Side */}
        <div className="w-full md:w-3/5 h-[500px] md:h-screen">
          <img
            src={images[openIndex]} // 🔑 switch image based on tab
            alt="Who we serve"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Accordion Side */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`border-b border-gray-700 cursor-pointer transition-all duration-500 ease-in-out ${
                  isOpen ? "bg-gray-900 min-h-[275px]" : "min-h-[150px]"
                }`}
                onClick={() => setOpenIndex(index)}
              >
            
                {/* Number + Title */}
                <div className="flex items-center gap-4 p-4">
                  <h4
                    className={`text-5xl font-bold transition-all duration-500 ${
                      isOpen ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </h4>

                  {/* Title beside number */}
                  <motion.p
                    className="text-2xl font-semibold"
                    animate={{
                      x: isOpen ? 0 : 40, // shift slightly when closed
                      color: isOpen ? "#ffffff" : "#d1d5db",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {item.title}
                  </motion.p>
                </div>

                {/* Content with slide-in effect */}
                {isOpen && (
                  <motion.div
                    className="px-10 py-10"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {item.content}
                    </p>
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
