import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import Image1 from "/AML/image64.png";

const HeroSection = () => {
  return (
    <div className="w-screen mt-28 mb-12 ">
    
      <div className=" px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left Text */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <H1>Lorem ipsum dolor , consectetur adipis</H1>
        </div>

        
        <div className="w-full lg:w-2/5 flex flex-col  lg:pt-10 text-center  lg:text-left">
          <P>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia
          </P>
          <div className="flex justify-center lg:justify-start">
            <ContactUs>Contact Us</ContactUs>
          </div>
        </div>
      </div>

   
        <div className="relative  mx-auto mt-20 flex justify-center  items-center">
             
                <img
                    src={Image1}
                    alt="Left"
                    className="w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-lg lg:h-80  rounded-lg  absolute left-1/2 -translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
                />

              
                <img
                    src={Image1}
                    alt="Center"
                    className="w-36 h-36 sm:w-52 sm:h-52 md:w-80  md:h-64 lg:w-2xl lg:h-96 rounded-lg  relative z-10"
                />

               
                <img
                    src={Image1}
                    alt="Right"
                    className="w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-lg lg:h-80 rounded-lg  absolute right-1/2 translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
                />
        </div>
    </div>
  );
};

export default HeroSection;
