import { ArrowUpRight } from "lucide-react";
import cta_img from "/CTA/cta-img-1.png";
import { H2, P } from "../../styles/Typography";


const CallToAction = () => {
  return (
    <div className="w-full h-auto lg:h-[482px] bg-gradient-to-tr from-black via-[#01010c] to-[#000000] text-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-12 py-10 lg:py-0 gap-10">
        
        {/* Left side - Text content */}
        <div className="w-full lg:w-[685px] h-auto text-center lg:text-left">
          {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug text-white">
            Sed ut perspiciatis unde omnis iste
          </h1> */}
          <H2>
            Sed ut perspiciatis unde omnis iste
          </H2>

         
          {/* <p className="text-gray-300 leading-relaxed pt-4 pb-6 text-sm sm:text-base lg:text-justify">
            Nemo enim ipsam voluptatem olad voluptas sit aspernatur aut odit aut fugit, sed olad
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum olad dolor sit amet.
          </p> */}
          <P>
            Nemo enim ipsam voluptatem olad voluptas sit aspernatur aut odit aut fugit, sed olad
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum olad dolor sit amet.

          </P>
          <button className="px-5 py-3 bg-white text-black font-semibold rounded-lg flex items-center gap-2 mx-auto lg:mx-0">
            EXPLORE ALL PRODUCTS 
            <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 font-bold" />
          </button>
        </div>

        {/* Right side - Image */}
        <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[615px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center -mb-6 lg:-mb-[40px] lg:-mr-[60px]">
          {/* Ellipse background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[850px] lg:h-[1000px] rounded-full bg-gradient-to-br from-[#0E25CB] to-[#3648d4] blur-[120px] sm:blur-[160px] lg:blur-[200px] opacity-70"></div>
          </div>

          {/* Foreground Image */}
          <img
            src={cta_img}
            alt="CTA"
            className="relative w-52 sm:w-72 md:w-96 lg:w-full h-auto object-contain transform lg:rotate-[-7.88deg] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
