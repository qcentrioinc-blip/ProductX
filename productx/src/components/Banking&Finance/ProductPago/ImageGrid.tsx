import { ContactUs } from "../../../styles/Button";
import { H2, H3, H4, P } from "../../../styles/Typography";
import Image1 from "/ProductDetailsThree/Rectangle283.png";
import Image2 from "/ProductDetailsThree/Rectangle284.png";
 
const ImageGrid = () => {
  return (
    <div className="w-full min-h-screen bg-[#EAF2FB]">
      <div className="max-w-8xl mx-10 px-4 sm:px-6 md:px-8 lg:px-14 xl:px-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 xl:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start" >
         
          {/* Left Column - Content */}
{/* Left Column */}
<div className="flex flex-col self-start">
 
  <div className="flex flex-col gap-3">  {/* <-- increase gap here, safely */}
    <span className="px-3 py-1 text-xs sm:text-sm rounded-full border border-black w-fit">
      Duis aute
    </span>
 
    <H2>Lorem ipsum dolor <br/> gamis consecte ipsum</H2>
 
    <P className="xl:max-w-md">
      Duis aute irure dolor in voluptate velit esse voluptate velit esse
      reprehenderit in voluptate velit esse voluptate velit esse
    </P>
  </div>
 
  {/* Big Card */}
  <div className="mt-20 bg-[#FAFAFA] rounded-md p-4 sm:p-5 md:p-6 lg:p-8 lg:py-29 flex flex-col justify-center">
    <H3>Lorem ipsum dolor gamis consecte ipsum ipsum lorem</H3>
    <P className="mt-2 sm:mt-3 lg:mt-10 mb-10">
      Duis aute irure dolor in reprehenderit in voluptate velit esse,
      Duis aute irure dolor in reprehenderit in voluptate velit esse
    </P>
 
    <ContactUs>CONTACT US</ContactUs>
  </div>
 
</div>
          {/* Right Column - Image Grid */}
          <div className="self-start">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full" >
           
            {/* Left Sub-column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full lg:h-[750px]">
              {/* Image 1 */}
              <div className="flex-1 overflow-hidden rounded-md shadow-md ">
                <img
                  src={Image1}
                  alt="Main"
                  className="w-full h-full  object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
 
              {/* Card 1 */}
              <div className="flex-[0.55] bg-[#FAFAFA] rounded-md p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-start">
                <H4>Lorem ipsum dolor</H4>
                <P className="mt-1.5 sm:mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </P>
              </div>
            </div>
 
            {/* Right Sub-column */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full">
              {/* Card 2 */}
              <div className="flex-[0.55] bg-[#FAFAFA] rounded-md p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-start">
                <H4>Lorem ipsum dolor</H4>
                <P className="mt-1.5 sm:mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </P>
              </div>
 
              {/* Image 2 */}
              <div className="flex-1 overflow-hidden rounded-md shadow-md">
                <img
                  src={Image2}
                  alt="Secondary"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};
 
export default ImageGrid;
