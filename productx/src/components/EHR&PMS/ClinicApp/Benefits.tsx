import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import benefitImg from "/ClinicApp/Tab.png";
import { P } from "../../../styles/Typography";

const Benefits = () => {
  const points = [
    {
      title: "Duis aute irure dolor in reprehenderit",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute.",
    },
    {
      title: "Duis aute irure dolor in reprehenderit",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute.",
    },
    {
      title: "Duis aute irure dolor in reprehenderit",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute.",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const steps = Array.from(container.querySelectorAll(".benefit-step"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,  
      }
    );

    steps.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen py-16 flex flex-col justify-center px-4 lg:px-0 lg:items-center"
    style={{
  background: "linear-gradient(to bottom,   #FFFFFF 40%, rgba(22, 109, 72, 0.7) 100%)",
}}

    >
      {/* Left-aligned gradient heading */}
      <div className="w-[90%] max-w-8xl  mb-12">
        <h2 className="text-3xl md:text-5xl font-bricolage font-semibold  text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#28B87B] to-[#F99526] leading-snug">
          Sed ut perspiciatis Unde  <br className="hidden lg:block" />
          Seduo ut perspiciatis
        </h2>
      </div>

      {/* Content Section */}
      <div className=" flex-col flex lg:flex-row    items-center justify-between gap-10  w-[90%] ">
        {/* Text Section */}
        <div className=" hidden lg:flex flex-col  gap-10 lg:pt-10 lg:gap-16 w-[100%] md:w-[40%]  ">
          {points.map((point, i) => (
            <motion.div
              key={i}
              data-index={i}
              className={`benefit-step p-4 md:p-6 rounded-2xl shadow-md transition-all duration-700 ${
                activeIndex === i
                  ? "bg-white shadow-xl scale-[1.04]"
                  : "bg-transparent scale-100"
              }`}
              initial={{ opacity: 0.6 }}
              animate={{
                opacity: activeIndex === i ? 1 : 0.6,
              }}
            >
              <h3 className="font-semibold font-bricolage text-lg text-gray-900">
                {point.title}
              </h3>
              
              <P className="text-gray-700 font-schibsted  mt-2 text-sm">{point.desc}</P>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full  hidden  lg:w-[70%] lg:flex justify-center"
        >
          <img
            src={benefitImg}
            alt="Benefits mockup"
            className="w-[100%]   md:w-[90%] xl:w-[85%] rounded-2xl  "
          />
        </motion.div>
      </div>

<div className="flex flex-col max-w-8xl mx-4 gap-10 w-[90%] lg:hidden">

  {points.map((point, i) => (
    <div key={i} className="flex flex-col gap-4">

      {/* Text */}
      <div className="p-4   rounded-xl shadow-md bg-white">
        <h3 className="font-semibold font-bricolage text-lg text-gray-900">
          {point.title}
        </h3>
        
        <P className="text-gray-700 font-schibsted mt-2 text-sm">
          {point.desc}
        </P>
      </div>

      {/* Image */}
      <img
        src={benefitImg}
        alt="Benefits mockup"
        className="w-full   "
      />

    </div>
  ))}
</div>



    </section>
  );
};

export default Benefits;
