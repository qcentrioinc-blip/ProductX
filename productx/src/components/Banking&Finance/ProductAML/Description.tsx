import { useState } from "react";
import { H3,H4 ,P} from "../../../styles/Typography";
// import Image1 from "/AML/image73.png"


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
    "Button 1: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non ",
    "Button 5: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat non "
  ];

  
  return (
 <div className="w-full bg-gray-200 h-full py-12">
  <div className="max-w-8xl lg:mx-10 px-4  ">

      {/* Top Heading */}
      <div className="md:py-16  md:3xl lg:w-5xl w-full py-8">
        <H3 className="text-left ">
          Lorem ipsum dolor , consectetur adipis, Lorem ipsum dolor , consectetur adipis,Lorem ipsum
        </H3>
      </div>
 <div className="lg:hidden mb-8">
  <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    {[0,1,2,3,4].map((index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`snap-center shrink-0 md:w-[24vw] w-[40vw] py-4 rounded-full text-lg font-semibold
          ${activeIndex === index 
            ? "bg-(--primary-color) text-white" 
            : "border-2 border-neutral-700 text-black bg-white"
          }
        `}
      >
        Duis aute irure
      </button>
    ))}
  </div>
</div>


      

   {/* Image + Overlay Content */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
       <img 
  src={images[activeIndex]}
  alt="Description"
  className="w-full h-[200px] md:h-[450px] lg:h-[550px] object-cover"
/>


        {/* Right Overlay Box - Desktop only */}
       <div className="hidden lg:block absolute top-16 right-16  lg:h-[200px] bg-neutral-500 text-white rounded-sm p-4 sm:p-6 lg:p-6 backdrop-blur-md">
  <H4 className="mb-3">
    Lorem ipsum dolor <br /> consectetur
  </H4>

  <div className="flex gap-6 mt-12 font-bricolage items-start">
    <div className="flex flex-col items-start">
      <span className="text-xl sm:text-2xl font-bold">32%</span>
      <span className="text-xs sm:text-sm text-gray-300">Lorem Ipsum</span>
    </div>

    <div className="flex flex-col items-start">
      <span className="text-xl sm:text-2xl font-bold">4x%</span>
      <span className="text-xs sm:text-sm text-gray-300">Lorem Ipsum</span>
    </div>

    <div className="flex flex-col items-start">
      <span className="text-xl sm:text-2xl font-bold">80%</span>
      <span className="text-xs sm:text-sm text-gray-300">Lorem Ipsum</span>
    </div>
  </div>
</div>


        {/* Bottom Overlay - Desktop only */}
        <div className="hidden lg:block absolute bottom-0 w-full px-6 py-6 sm:px-10 sm:py-8 backdrop-blur-md text-white">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            
            {/* Left Text */}
            <div className="w-full md:w-xl">
              <H3>Lorem ipsum dolor , consectetur adipis
                Lorem ipsum dolor  
              </H3>
            </div>

            {/* Right Text */}
          <div className="w-full lg:w-2/5">
  <P>{textData[activeIndex]}</P>
</div>

          </div>

          {/* Dots */}
          <div className="flex gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Mobile Content - Below Image */}
      <div className="lg:hidden mt-6 space-y-6">
        {/* Stats Box for Mobile */}
        <div className="bg-[#FFFFFF78] text-(--primary-color) rounded-lg p-6">
          <H3 className="mb-4 ">
            Lorem ipsum dolor <br/>consectetur
          </H3>
          <div className="flex  justify-around gap-4 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">32%</span>
              <span className="text-xs ">Lorem Ipsum</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">4x%</span>
              <span className="text-xs ">Lorem Ipsum</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">80%</span>
              <span className="text-xs ">Lorem Ipsum</span>
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

      {/* Bottom Buttons */}
      <div className="hidden lg:flex md:flex-wrap md:justify-between mt-8">

  {[0,1,2,3,4].map((index) => (
    <button
      key={index}
      onClick={() => setActiveIndex(index)}
      className={`px-4 py-4 w-[14vw]  text-[20px] font-schibsted rounded-full transition duration-300
        ${activeIndex === index 
          ? "bg-(--primary-color) text-white" 
          : "border border-[#2B68C3] text-black"
        }`
      }
    >
      Duis aute irure
    </button>
  ))}

</div>

    </div>
    </div>
  )
}

export default Description
