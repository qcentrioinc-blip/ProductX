import Image1 from "/AML/image73.png"
import { P, H3, H4 } from "../../../styles/Typography"

const Description = () => {
  return (
    <div className="w-full  bg-gray-200 h-full  py-12 px-6 sm:px-12 md:px-16 lg:py-20 lg:px-20 xl:px-28">
      
      {/* Top Heading */}
      <div className="lg:py-16 lg:w-3/5 w-full py-8">
        <H3 className="text-left">
          Lorem ipsum dolor , consectetur adipis, Lorem ipsum dolor , consectetur 
          adipis,Lorem ipsum dolor , consectetur adipis, Lorem ipsum dolor , consectetur adipis
        </H3>
      </div>

      {/* Image + Overlay Content */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img 
          src={Image1} 
          alt="Description" 
          className="w-full h-[350px] sm:h-[420px] md:h-[480px] lg:h-[650px] object-cover"
        />

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 w-full px-6 py-6 sm:px-10 sm:py-8 backdrop-blur-md text-white">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            
            {/* Left Text */}
            <div className="w-full lg:w-2/5">
              <H3>Lorem ipsum dolor , consectetur adipis
                Lorem ipsum dolor , consectetur adipis
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

        {/* Right Overlay Box */}
        <div className="absolute top-16 right-16 lg:h-[200px]  bg-neutral-400 text-white rounded-lg p-4 sm:p-6  lg:p-10backdrop-blur-md">
          <H4 className="mb-3 ">
            Lorem ipsum dolor consectetur
          </H4>
          <div className="flex gap-6 mt-20">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold">32%</span>
              <span className="text-xs sm:text-sm text-gray-300">Lorem Ipsum</span>
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
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        <button className="px-8 py-6 rounded-full bg-purple-200 text-black font-medium">
          Duis aute irure
        </button>
        <button className="px-8 py-2 rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
        <button className="px-8 py-6 rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
        <button className="px-8 py-6 rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
        <button className="px-8 py-6 rounded-full border border-gray-300 text-black hover:bg-gray-100">
          Duis aute irure
        </button>
      </div>
    </div>
  )
}

export default Description
