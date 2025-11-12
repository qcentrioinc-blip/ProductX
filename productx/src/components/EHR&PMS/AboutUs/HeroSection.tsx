import { H1 } from "../../../styles/Typography";
import Image1 from "/AboutUs/image81.png";
const HeroSection = () => {
  return (
    <div className="w-full  mt-16">
       
      <div 
        className=" h-[60vh]  w-full flex items-center justify-center" 
        style={{
          background: 'radial-gradient(circle, #FFF9F3 0%, #C8FFD7 100%)'
        }}
      >
        <H1 className=" font-thin   lg:p-40 text-[#166D48] text-center ">
          A new era of healthcare, a new world of practice well-being
        </H1>
      </div>

    
      <div className=" w-full flex  h-full justify-center bg-gray-100  ">
        <img 
          src= {Image1}
          alt="Hero Image"
          className="   w-full h-auto object-cover  "
        />
      </div>
    </div>
  );
};

export default HeroSection;