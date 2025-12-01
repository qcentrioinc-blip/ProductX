import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import HeroBottomNavbar from "../../Banking&Finance/ProductPago/HeroBottomNav";
import Image1 from "/AML/image64.png";
import Circle from "/Platform/circles.png";
const HeroSection = () => {
  return (
    <div className="w-full bg-[#83B0E6] pt-20   relative overflow-hidden">
     
   
      {/* Text Section */}
      <div className="px-8 sm:px-12 md:px-16  lg:pt-24 lg:px-20 xl:px-24 flex flex-col lg:flex-row justify-between items-center relative z-10">
        {/* Left Text */}
        <div className="w-full lg:pb-10 pt-20 p-4 text-center lg:text-left">
          <H1>Lorem ipsum dolor , consectetur adipis</H1>
        </div>

        {/* Paragraph + Button */}
        <div className="w-full lg:w-3/5  flex flex-col lg:pb-10 p-4 lg:pt-20 text-center lg:text-left">
          <P>
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          </P>
          <div className="flex mt-6 justify-center lg:justify-start">
            <ContactUs>Contact Us</ContactUs>
          </div>
        </div>
      </div>
    
      
      <div className="relative mx-auto mt-20 flex justify-center items-center ">
            <div className="absolute left-[1/2]   pointer-events-none z-0" 
           style={{ top: '0.1%' }}>
        <img 
          src={Circle }
          alt="Decorative circles" 
          className="w-4xl h-96"
        />
      </div>
        {/* Desktop View (Side by side images) */}
        <div className="relative hidden md:mx-auto md:mt-20 md:flex md:justify-center md:items-center md:pb-20">
        <img
          src={Image1}
          alt="Left"
          className="w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-52 lg:w-lg lg:h-80 rounded-lg absolute left-1/2 -translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
        />
        <img
          src={Image1}
          alt="Center"
          className="w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-72 lg:w-2xl lg:h-[400px] rounded-lg relative z-10"
        />
        <img
          src={Image1}
          alt="Right"
          className="w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-52 lg:w-lg lg:h-80 rounded-lg absolute right-1/2 translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
        />
      </div>
        {/* Mobile View (Slider) */}
        <div className="flex md:hidden overflow-x-auto space-x-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 bg-white rounded-lg shadow-md snap-center flex justify-center items-center"
            >
              <img
                src={Image1}
                alt={`Slide ${i}`}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>  

      <HeroBottomNavbar/>
    </div>
  );
};

export default HeroSection;
