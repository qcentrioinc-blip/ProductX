import { H1, P } from "../../../styles/Typography";
import Image1 from "/ClinicApp/Phone.png";

const HeroSection = () => {
  return (
    <div className="w-full mt-16 overflow-hidden">
      {/* Radial Background Section (Increased Height) */}
      <div
        className="md:h-[100vh] h-[65vh] w-full flex flex-col md:pt-24 pt-12 justify-start items-center relative" 
        style={{
          background: 'radial-gradient(circle, #FFF9F3 0%, #C8FFD7 100%)'
        }}
      >
        <H1 className="font-thin text-[#166D48] text-center  mx-2 px-2 md:mx-20 md:px-20">
          Sed ut perspiciatis Unde <br /> Seduo ut perspiciatis
        </H1>

        {/* Laptop/Tablet Image - Positioned for Overlap */}
        <div className="absolute top-1/3  md:top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <img
            src={Image1}
            alt="Laptop application interface"
            className="w-full h-auto object-contain drop-shadow-2xl"
          
            
          />
        </div>
      </div>
      {/* White Background Section with Content */}
      <div className="bg-white py-12 md:px-20 px-10 sm:py-16 md:py-20 lg:pt-80 lg:pb-40">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{
                  background: 'linear-gradient(90deg, #28B87B 0%, #F99526 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Sed ut perspiciatis Unde <br />Seduo ut perspiciatis
              </h2>
            </div>
            <div className="space-y-4">
              <P className="text-black lg:pt-20 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              </P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;