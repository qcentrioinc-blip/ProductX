// import { ContactUs } from "../../styles/Button";
import { H1, P } from "../../styles/Typography";

 

const HeroSection = () => {
  return (
    <div className="relative w-full h-full mt-16 min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/BNFBG.jpg')",
        }}
      >
      </div>

      {/* Content Container */}
      <div className="relative  h-screen max-w-7xl mx-10 px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          {/* Text Content - Left aligned on md/lg/xl, centered on sm */}
          <div className="w-full sm:text-center md:text-left md:max-w-2xl lg:max-w-3xl">
            <H1 className="  font-bold text-white mb-4 md:mb-6 leading-tight">
              Shaping the Future
              <br />
              Across B and F.
            </H1>
            
            <P className="  text-white/90 mb-6 md:mb-8 max-w-xl sm:mx-auto md:mx-0">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            </P>

            <button className="inline-flex items-center gap-2 bg-black hover:bg-white hover:text-black text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold text-sm md:text-base transition-colors duration-200">
              EXPLORE SOLUTIONS
             
            </button>

            {/* <ContactUs>EXPLORE SOLUTION</ContactUs> */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroSection;