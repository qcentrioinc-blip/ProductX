import { useState } from "react";
import { H2, H3, P } from "../../../styles/Typography";

const images = [
  "/AML/image73.png",
  "/AML/image64.png",
  "/AML/image74.png",
  "/Career/image57.png",
  "/Career/image59.png"
];

const Description = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const textData = [
    "Button 1 in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 2 in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 3 in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 4 in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 5 in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non "
  ];


  return (
    <div className="w-full bg-[#ffffff] h-full ">
      <div className="max-w-8xl lg:mx-10 px-4 xl:py-0">

        {/* Top Heading */}
        <div className="md:py-16 md:3xl lg:w-[95%] xl:w-4xl w-full pb-8">
          <H2 className="text-left">
            Lorem ipsum dolor , consectetur adipis, Lorem ipsum dolor ,
          </H2>
        </div>

        {/* Mobile pill buttons - top */}
        <div className="xl:hidden mb-8">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`snap-center shrink-0 lg:w-[18vw] md:w-[24vw] w-[36vw] md:py-4 py-2 rounded-full text-lg font-semibold
                  ${activeIndex === index
                    ? "bg-(--primary-color) text-black"
                    : "border-2 border-neutral-700 text-black bg-white"
                  }`}
              >
                Duis aute irure
              </button>
            ))}
          </div>
        </div>

        {/* Image + Overlay Content */}
        <div className="relative w-full rounded-xl overflow-hidden ">
          {/* Background Image */}
          <img
            src={images[activeIndex]}
            alt="Description"
            className="w-4xl h-[250px] md:h-[450px] lg:h-[450px] xl:h-[350px] object-cover rounded-md"
          />

          {/* Right Overlay Box - Desktop only */}
          <div className="hidden lg:flex flex-col absolute lg:top-8 lg:right-8 xl:top-10 xl:right-10 border-2 border-neutral-300 rounded-md bg-white p-6 min-w-[280px] min-h-[240px] xl:min-h-[280px] xl:px-14">
            <H3 className="text-[#2B68C3]">
              Lorem ipsum dolor <br /> consectetur
            </H3>

            <div className="flex gap-8 font-bricolage items-start mt-auto">
              <div className="flex flex-col items-start">
                <span className="text-xl sm:text-2xl text-[#2B68C3] font-bold">32%</span>
                <span className="text-xs sm:text-sm text-[#141414]">Lorem Ipsum</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl sm:text-2xl text-[#2B68C3] font-bold">4x%</span>
                <span className="text-xs sm:text-sm text-[#141414]">Lorem Ipsum</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl sm:text-2xl text-[#2B68C3] font-bold">80%</span>
                <span className="text-xs sm:text-sm text-[#141414]">Lorem Ipsum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Card - Desktop only (replaces overlay) */}
        <div className="hidden lg:flex flex-row justify-between items-start gap-6 mt-4 border-2 border-neutral-300 rounded-xl px-10 py-8">
          {/* Left Text */}
          <div className="w-full xl:w-1/2">
            <H3 className="text-black">
             Lorem ipsum dolor , consectetur 
consectetur adipis,Lorem ipsum 
            </H3>
          </div>

          {/* Right Text */}
          <div className="w-full xl:w-2/5">
            <P className="text-[#141414]">{textData[activeIndex]}</P>
          </div>
        </div>

        {/* Mobile Content - Below Image */}
        <div className="lg:hidden mt-6 space-y-6">
          {/* Stats Box for Mobile */}
          <div className="bg-[#FFFFFF78] text-(--primary-color) rounded-lg p-6">
            <H3 className="mb-4">
              Lorem ipsum dolor <br />consectetur
            </H3>
            <div className="flex justify-around gap-4 mt-10">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">32%</span>
                <span className="text-xs">Lorem Ipsum</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">4x%</span>
                <span className="text-xs">Lorem Ipsum</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">80%</span>
                <span className="text-xs">Lorem Ipsum</span>
              </div>
            </div>
          </div>

          {/* Content Section for Mobile */}
          <div className="bg-white rounded-lg p-6 space-y-4">
            <H3 className="text-(--primary-color)">
              Lorem ipsum dolor , consectetur adipis
            </H3>
            <P className="text-black">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu Excepteur sint occaecat
              cupidatat non proident.
            </P>
          </div>
        </div>

        {/* Bottom Pill Buttons - Desktop */}
        <div className="hidden xl:flex md:flex-wrap md:justify-between mt-8">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-4 w-[14vw] text-[20px] font-schibsted rounded-full transition duration-300
                ${activeIndex === index
                  ? "bg-(--primary-color) text-black"
                  : "border border-[#2B68C3] text-black"
                }`}
            >
              Duis aute irure
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Description;