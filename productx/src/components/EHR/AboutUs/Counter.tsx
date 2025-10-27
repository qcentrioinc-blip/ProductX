import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Image1 from "/AboutUs/image83.png";
import Image2 from "/AboutUs/image84.png";
import { H2 } from "../../../styles/Typography";
  
const Counter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
   <section
  ref={ref}
  className="relative flex flex-col items-center justify-center py-28 overflow-hidden"
>
 
  <div className="absolute inset-0 bg-gradient-to-b from-[#EAFFF0] to-white"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col items-center justify-center">
    {/* Heading */}
    <H2 className="font-semibold text-center mb-16 text-gray-800 leading-snug">
      Sed ut perspiciatis Unde <br /> Seduo ut perspiciatis
    </H2>

    {/* Main Container */}
    <div className="relative flex flex-col  md:flex-row items-center justify-center sm:gap-4 md:gap-0 w-full max-w-6xl px-4 md:px-0">
      {/* Left Box */}
      <motion.div
        className="relative bg-[#166D48] w-[90%] rounded-l-lg md:w-[420px] h-[320px] flex items-center justify-center overflow-hidden"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={Image1}
          alt="Left"
          className="w-[90%] h-[260px] object-cover shadow-md"
        />
      </motion.div>

      {/* Middle Green Box */}
      <motion.div
        className="relative bg-[#0a6640] text-white rounded-lg shadow-xl my-4 w-[90%] md:w-[400px] h-[520px] flex flex-col justify-center items-center border border-[#0a6640]"
        initial={{ y: "-100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Lighter inner rectangle */}
        <div className="absolute inset-4 bg-[#FFFFFF17] rounded-lg backdrop-blur-sm"></div>

        {/* Circle and Texts on top of light box */}
        <div className="relative z-10 px-8">
          <div className="absolute -top-8 left-1/5 transform -translate-x-1/2 w-14 h-14 bg-[#EAFFF0] rounded-full border-[6px] border-[#0a6640]" />
          <div className="mt-10 space-y-6">
            <div>
              <h3 className="font-semibold mb-1 text-lg">Sed ut perspiciatis</h3>
              <p className="text-sm text-gray-200">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-lg">Sed ut perspiciatis</h3>
              <p className="text-sm text-gray-200">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-lg">Sed ut perspiciatis</h3>
              <p className="text-sm text-gray-200">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Box */}
      <motion.div
        className="relative bg-[#166D48] rounded-r-lg w-[90%] md:w-[420px] h-[320px] flex items-center justify-center overflow-hidden"
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={Image2}
          alt="Right"
          className="w-[90%] h-[260px] object-cover shadow-md"
        />
      </motion.div>
    </div>

    {/* Counter Section */}
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-14 text-center">
      {/* Counter 1 */}
      <div>
        <H2 className=" lg:-mt-30   font-bold text-black">
          {isInView && <CountUp end={56} duration={2} suffix="%" />}
        </H2>
        <p className="text-gray-600 mt-3 max-w-xs text-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Counter 2 */}
      <div>
        <H2 className="  font-bold text-black">
          {isInView && <CountUp end={4} duration={2} suffix="X" />}
        </H2>
        <p className="text-gray-600 mt-3 max-w-xs text-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Counter 3 */}
      <div>
        <H2 className="text-4xl md:-mt-30 font-bold text-black">
          {isInView && <CountUp end={150} duration={2} suffix="%" />}
        </H2>
        <p className="text-gray-600 mt-3 max-w-xs text-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Counter;
