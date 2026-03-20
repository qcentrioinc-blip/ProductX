import { useState } from "react";
import { H2, H3, P } from "../../../styles/Typography";

const images = [
  "/AML/Almanac1.webp",
  "/AML/Almanac4.webp",
  "/AML/Almanac10.webp",
 "/AML/Almanac8.webp",
"/AML/Almanac7.webp",
];
const tabs=[
  "Compliance ", 

"Report generation ", 

"Stress testing  ",

"Rate analysis", 

"G-Sec tools  "
]

const Description = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const contentData = [
  {
    title: "Compliant with multiple currencies for global operations ",
    description:
      "System fully compliant with multiple currencies for global banking operations. Handles transactions, reporting, and analysis across different currencies seamlessly.",
    stats: [
      { value: "3", label: "Currencies supported" },
      { value: "2", label: "Additional Currencies" },
      { value: "15%", label: "Faster Multi-Currency" },
    ],
  },
  {
    title: "Automated reporting for regulatory and compliance requirements ",
    description:
      "Generates reports required by regulatory authorities including liquidity statements, interest rate sensitivity analysis, and Basel-compliant submissions.",
    stats: [
      { value: "2", label: "Regulatory Report" },
      { value: "4", label: "Report Formats" },
      { value: "20%", label: "Time saved on report creation" },
    ],
  },
  {
    title: "Simulation of large withdrawals and credit defaults ",
    description:
      "Simulates impact of large withdrawals and credit defaults. Assesses liquidity coverage ratio and available funding ratio under various stress conditions.",
    stats: [
      { value: "2", label: "Stress scenarios pre-configured" },
      { value: "3", label: "Risk Monitored" },
      { value: "25%", label: "Faster liquidity assessment" },
    ],
  },
  {
    title: "Measurement of interest rate sensitivity and net income ",
    description:
      "Measures interest rate sensitivity and calculates net interest income. Includes traditional gap analysis and modified duration calculations for balance sheet impacts.",
    stats: [
      { value: "2", label: "Rate sensitivity " },
      { value: "3", label: "Interest rate configured" },
      { value: "15%", label: "Improves analysis accuracy" },
    ],
  },
  {
    title: "Management of government securities portfolios and risks ",
    description:
      "Manages government securities portfolios with bond registers, duration analysis, and value at risk calculations. Simulates portfolio impacts under varying rates.",
    stats: [
      { value: "2", label: "Government security supported" },
      { value: "3", label: "Portfolio metrics calculated" },
      { value: "10%", label: "Faster valuation" },
    ],
  },
];

  return (
    <div className="w-full bg-[#ffffff] h-full ">
      <div className="max-w-7xl mx-auto  px-6 lg:px-10   xl:py-0  xl:px-0">

        {/* Top Heading */}
        <div className="pb-4 md:pt-10 md:pb-6  md:3xl lg:w-[95%] xl:w-4xl w-full ">
          <H2 className="text-left">
           Key Features of ALMANAC for Financial Institutions 
          </H2>
        </div>

        {/* Mobile pill buttons - top */}
        <div className="xl:hidden mb-2">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
             {tabs.map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`snap-center shrink-0 lg:w-[20vw] md:w-[28vw] w-[48vw] md:py-4 py-2 px-2 rounded-full text-lg font-semibold
                  ${activeIndex === index
                    ? "bg-(--primary-color) text-black"
                    : "border-2 border-neutral-700 text-black bg-white"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
 {/* Bottom Pill Buttons - Desktop */}
        <div className="hidden xl:flex md:flex-wrap md:justify-between my-4">
          {tabs.map((label,index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-3 w-[16vw] text-[20px] font-schibsted rounded-full transition duration-300
                ${activeIndex === index
                  ? "bg-(--primary-color) text-white"
                  : "border border-[#2B68C3] text-black"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Image + Overlay Content */}
        <div className="relative w-full rounded-2xl overflow-hidden ">
          {/* Background Image */}
          <img
            src={images[activeIndex]}
            alt="Description"
            className="w-3xl h-[250px] md:h-[450px] lg:h-[450px] xl:h-[475px] object-fit  rounded-2xl"
          />

          {/* Right Overlay Box - Desktop only */}
          <div className="hidden lg:flex flex-col absolute lg:top-8 lg:right-8 xl:top-20 xl:right-0 border-2 border-neutral-300 rounded-md bg-white p-6 min-w-[200px] min-h-[240px] xl:min-h-[280px] ">
            <H3 className="text-[#2B68C3]">
             Proven Performance Metrics
            </H3>

       <div className="flex gap-8 font-bricolage items-start mt-auto">
  {contentData[activeIndex].stats.map((stat, i) => (
    <div key={i} className="flex  max-w-md flex-col items-start">
      <span className="text-xl  sm:text-2xl text-[#2B68C3] font-bold">
        {stat.value}
      </span>
      <span className="text-xs sm:text-sm text-[#141414]">
        {stat.label}
      </span>
    </div>
  ))}
</div>
          </div>
        </div>

        {/* Bottom Content Card - Desktop only (replaces overlay) */}
        <div className="hidden lg:flex flex-row justify-between items-center gap-6 mt-4 border-2 border-neutral-300 rounded-xl px-10 py-8">
          {/* Left Text */}
          <div className="w-full xl:w-1/2">
        <H3 className="text-[#2B68C3]">
  {contentData[activeIndex].title}
</H3>
          </div>

          {/* Right Text */}
          <div className="w-full xl:w-2/5">
           <P>{contentData[activeIndex].description}</P>
          </div>
        </div>

        {/* Mobile Content - Below Image */}
        <div className="lg:hidden mt-6 space-y-6">
          {/* Stats Box for Mobile */}
          <div className="bg-[#FFFFFF78] text-(--primary-color) rounded-lg p-0">
            <H3 className="mb-4">
           Proven Performance Metrics
            </H3>
            <div className="flex justify-around gap-4 mt-10">
              <div className="flex gap-8 font-bricolage items-start mt-auto">
  {contentData[activeIndex].stats.map((stat, i) => (
    <div key={i} className="flex flex-col items-start">
      <span className="text-xl sm:text-2xl text-[#2B68C3] font-bold">
        {stat.value}
      </span>
      <span className="text-xs sm:text-sm text-[#141414]">
        {stat.label}
      </span>
    </div>
  ))}
</div>
            </div>
          </div>

          {/* Content Section for Mobile */}
          <div className="bg-white rounded-lg p-0 space-y-4">
            <H3 className="text-(--primary-color)">
           {contentData[activeIndex].title}
            </H3>
          <P>{contentData[activeIndex].description}</P>
          </div>
        </div>

       

      </div>
    </div>
  );
};

export default Description;