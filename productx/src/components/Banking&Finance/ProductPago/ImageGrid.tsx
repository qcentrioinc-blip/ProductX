import { H1, H2, H3, P } from "../../../styles/Typography";

import Image1 from "/ProductDetailsThree/Rectangle283.png";
import Image2 from "/ProductDetailsThree/Rectangle284.png";

const ImageGrid = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14 xl:px-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Column - Content */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <span className="px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-300 w-fit">
              Duis aute
            </span>
            <H1>Lorem ipsum dolor gamis consecte ipsum</H1>
            <P>
              Duis aute irure dolor in voluptate velit esse voluptate velit esse
              reprehenderit in voluptate velit esse voluptate velit esse
            </P>

            <div className="bg-gray-100 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
              <H2>Lorem ipsum dolor gamis consecte ipsum ipsum lorem</H2>
              <P className="mt-2 sm:mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse,
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </P>
              
              <button className="mt-4 sm:mt-5 md:mt-6 px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white text-sm sm:text-base rounded-md font-medium hover:bg-gray-800 transition-colors w-fit">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            
            {/* Left Sub-column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Image 1 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={Image1}
                  alt="Main"
                  className="w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card 1 */}
              <div className="bg-gray-100 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center min-h-[140px] xs:h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[300px]">
                <H3>Lorem ipsum dolor</H3>
                <P className="mt-1.5 sm:mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </P>
              </div>
            </div>

            {/* Right Sub-column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {/* Card 2 */}
              <div className="bg-gray-100 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center min-h-[140px] xs:h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[300px]">
                <H3>Lorem ipsum dolor</H3>
                <P className="mt-1.5 sm:mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </P>
              </div>

              {/* Image 2 */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={Image2}
                  alt="Secondary"
                  className="w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImageGrid;