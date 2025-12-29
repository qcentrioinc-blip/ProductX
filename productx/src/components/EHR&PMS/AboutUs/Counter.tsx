import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Image1 from "/AboutUs/image83.png";
import Image2 from "/AboutUs/image84.png";
import { H2, H4, P } from "../../../styles/Typography";
import Star from "/AboutUs/AboutStar.png";
const Counter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
const StarIcon = ({ className }: { className?: string }) => (
  <img
    src={Star}
    alt="decorative-star"
    className={`absolute  w-8 h-8   ${className}`}
  />
);

  return (
   <section
  ref={ref}
  className="relative flex flex-col  lg:items-center   py-16 lg:py-28   overflow-hidden"
>
 
   <div className="absolute inset-0 bg-gradient-to-b from-[#EAFFF0] to-[#EDE4CA]"></div>
{/* Decorative Stars */}
<div className="absolute  lg:block hidden inset-0 pointer-events-none z-0">
  <StarIcon className="top-10 left-10 opacity-60" />
  <StarIcon className="top-20 right-24 opacity-60" />
  <StarIcon className="top-80 left-1/10" />
  <StarIcon className="top-32 left-1/4 opacity-60" />
  <StarIcon className="top-60 right-10 opacity-60" />
  <StarIcon className="top-80 right-80" />
</div>

  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col max-w-8xl px-4 lg:px-10    justify-center">
    {/* Heading */}
    <H2 className="font-semibold  text-left lg:text-center   mb-10 lg:mb-16 text-gray-800 leading-snug">
      Sed ut perspiciatis Unde <br className="hidden lg:block" />Seduo   ut perspiciatis
    </H2>

    {/* Main Container */}
    <div className="relative flex flex-col  lg:flex-row items-center   sm:gap-4 md:gap-0 w-full max-w-8xl  lg:px-6 ">
      {/* Left Box */}
      <motion.div
        className="relative bg-[#166D48] w-[100%] rounded-lg lg:rounded-l-lg  lg:px-0 px-2 h-[320px] flex items-center justify-center overflow-hidden"
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
<div className="flex lg:hidden flex-col w-full my-10 gap-12">

  {/* Left */}
  <div className="flex flex-col items-center">
    <h2 className="text-4xl font-bricolage font-bold text-black">
      {isInView && <CountUp end={56} duration={2} suffix="%" />}
    </h2>
    <P className="text-gray-600 mt-3 max-w-3xl  ">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.
    </P>
  </div>
  </div>
      {/* Middle Green Box */}
      <motion.div
        className="relative bg-[#0a6640] text-white rounded-lg shadow-xl my-4 w-[100%]  h-[600px] flex flex-col justify-center items-center border border-[#4c8e72]"
        initial={{ y: "-100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Lighter inner rectangle */}
        <div className="absolute inset-4 bg-[#FFFFFF17] border-1 border-[#4c8e72] rounded-lg backdrop-blur-sm"></div>

        {/* Circle and Texts on top of light box */}
        <div className="relative z-10 px-8">
          <div className="absolute top-0 lg:left-1/7  left-18 transform -translate-x-1/2    w-16  h-16 bg-[#EAFFF0] rounded-full " />
          <div className="pt-22 space-y-10">
            <div>
              <H4 className="mb-3">Sed ut perspiciatis</H4>
              <P className="  text-gray-200">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat .
              </P>
            </div>
            <div>
              <H4 className=" mb-3 ">Sed ut perspiciatis</H4>
              <P   className="text-sm text-gray-200">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat .
              </P>
            </div>
            <div>
              <H4 className="font-semibold mb-3 text-lg">Sed ut perspiciatis</H4>
              <P   className="text-sm text-gray-200">
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat .
              </P>
            </div>
          </div>
        </div>
      </motion.div>
<div className="flex lg:hidden flex-col w-full my-10 gap-12">
 <div className="flex flex-col items-center">
    <h2 className="text-4xl font-bricolage font-bold text-black">
      {isInView && <CountUp end={4} duration={2} suffix="X" />}
    </h2>
    <P className="text-gray-600 mt-3 max-w-3xl text-sm">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.
    </P>
  </div>

</div>
      {/* Right Box */}
      <motion.div
        className="relative bg-[#166D48] rounded-r-lg w-[100%] lg:px-0 px-2  h-[320px] flex items-center justify-center overflow-hidden"
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

      <div className="flex lg:hidden flex-col w-full my-10 gap-12">
        <div className="flex flex-col items-center">
    <h2 className="text-4xl font-bricolage font-bold text-black">
      {isInView && <CountUp end={150} duration={2} suffix="%" />}
    </h2>
    <P className="text-gray-600 mt-3 max-w-3xl text-sm">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.
    </P>
  </div>
      </div>
    </div>

  {/* Counter Section – DESKTOP ONLY */}
<div className="hidden lg:flex lg:flex-row items-center justify-center mt-12 gap-14 text-center">

  {/* Counter 1 */}
  <div className="mr-38">
    <h2 className="lg:text-6xl text-4xl font-bricolage -mt-44 font-bold text-black">
      {isInView && <CountUp end={56} duration={2} suffix="%" />}
    </h2>
    <P className="text-gray-600 mt-3 max-w-xs text-sm">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.
    </P>
  </div>  

  {/* Counter 2 */}
  <div className="mr-38">
    <h2 className="lg:text-6xl text-4xl font-bricolage text-black">
      {isInView && <CountUp end={4} duration={2} suffix="X" />}
    </h2>
    <P className="text-gray-600 mt-3 max-w-xs text-sm">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.
    </P>
  </div>

  {/* Counter 3 */}
  <div>
    <h2 className="lg:text-6xl text-4xl font-bricolage md:-mt-44 font-bold text-black">
      {isInView && <CountUp end={150} duration={2} suffix="%" />}
    </h2>
    <P className="text-gray-600 mt-3 max-w-xs text-sm">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.
    </P>
  </div>

</div>



  </div>
</section>

  );
};

export default Counter;
