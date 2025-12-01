import { ArrowUpRight,ArrowRight } from "lucide-react";
import { H2, P } from "../../../styles/Typography";


const Banner = () => {
  return (
    <section className="bg-black text-white py-20   px-6 md:px-12">
        {/* Purple dot + small text */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-[#8338EC] rounded-full"></span>
            <P className="text-sm sm:text-base opacity-80">
              Duis aute irure dolor in reprehenderit
            </P>    
          </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10  ">
        {/* LEFT SIDE */}
        
        
          
 
          {/* Heading */}
          <H2 className="  font-bold   ">
            Sed ut perspiciatis
            <br />
            <span className="italic text-[#F99526] playfair font-medium">
              Unde Seduo ut perspiciatis
            </span>
          </H2>
    

        {/* RIGHT SIDE */}
        <div className="space-y-6  lg:mx-10 lg:pl-24 lg:max-w-xl ">
          <p className="  opacity-90  font-bricolage leading-snug">
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
          </p>

         <button
      className="
        group
        flex items-start justify-center
        w-[180px] h-[48px] 
        px-[10px] py-[12px]
        rounded-[8px]
        font-bricolage font-bold
        text-[16px] 
        border-2 border-[#141414]
        bg-white text-[#141414]
        shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
        transition-all duration-300 ease-in-out
        hover:bg-[#141414] hover:text-white
       "
    >BOOK A DEMO
      <span className="flex items-center gap-2">
        
        <span className="relative flex items-center h-[15px] w-[15px]">
          {/* Default icon */}
          <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
          {/* Hover icon */}
          <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </span>
      </span>
    </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
