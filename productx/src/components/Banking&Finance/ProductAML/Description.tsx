import Image1 from "/AML/image73.png"
import { P, H3, H4, H2 } from "../../../styles/Typography"

const Description = () => {
  
  return (
    <div className="w-full  bg-gray-200 h-full  py-12 px-6 sm:px-12 md:px-16 lg:py-20 lg:px-20 xl:px-28">
      {/* Top Heading */}
      <div className="md:py-16 md:w-3/5 w-full py-8">
        <H2 className="text-left ">
          Lorem ipsum dolor , consectetur adipis 
        </H2>
      </div>
 <div className="md:hidden mb-8">
        <div 
           
          className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <button className="snap-center flex-shrink-0 w-[70vw] py-4  bg-white  rounded-full border-gray-400 text-black font-semibold text-lg">
            Duis aute irure
          </button>
          <button className="snap-center flex-shrink-0 w-[70vw] py-4   rounded-full border-neutral-700 border-2 text-black font-semibold text-lg">
            Duis aute irure
          </button>
          <button className="snap-center flex-shrink-0 w-[70vw] py-4   rounded-full border-neutral-700 border-2 text-black font-semibold text-lg">
            Duis aute irure
          </button>
          <button className="snap-center flex-shrink-0 w-[70vw] py-4   rounded-full border-neutral-700 border-2 text-black font-semibold text-lg">
            Duis aute irure
          </button>
          <button className="snap-center flex-shrink-0 w-[70vw] py-4   rounded-full border-neutral-700 border-2 text-black font-semibold text-lg">
            Duis aute irure
          </button>
          
        </div>
      </div>

      

   {/* Image + Overlay Content */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img 
          src={Image1} 
          alt="Description" 
          className="w-full h-[200px] md:h-[480px] lg:h-[650px] object-cover"
        />

        {/* Right Overlay Box - Desktop only */}
        <div className="hidden lg:block absolute top-16 right-16 lg:h-[200px] bg-neutral-500 text-white rounded-sm p-4 sm:p-6 lg:p-6 backdrop-blur-md">
          <H4 className="mb-3">
            Lorem ipsum dolor <br /> consectetur
          </H4>
          <div className="flex gap-6 mt-8 ">
            <div className="flex flex-col  items-center">
              <span className="text-xl sm:text-2xl font-bold">32%</span>
              <span className="text-xs sm:text-sm text-gray-300 ">Lorem Ipsum</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold">4x%</span>
              <span className="text-xs sm:text-sm text-gray-300">Lorem Ipsum</span>
            </div>
            <div className="flex flex-col items-center">
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
              <P>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu Excepteur sint occaecat
                cupidatat non proident.
              </P>
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
        <div className="bg-[#FFFFFF78] text-[var(--primary-color)] rounded-lg p-6">
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
          <H3 className="text-[var(--primary-color)]">
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
      <div className="md:flex md:flex-wrap md:justify-between  hidden mt-8">
        <button className="px-4 py-4  w-[14vw] rounded-full bg-[var(--primary-color)] text-white  ">
          Duis aute irure
        </button>
        <button className="px-4 py-4  w-[14vw] rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
        <button className="px-4 py-4  w-[14vw] rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
        <button className="px-4 py-4 w-[14vw] rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
        <button className="px-4 py-4 w-[14vw] rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
      </div>
    </div>
  )
}

export default Description
