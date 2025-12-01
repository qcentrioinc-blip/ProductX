import { ArrowUpRight,ArrowRight } from "lucide-react";
import { H2 } from "../../../styles/Typography";
 
const  BorderCTA = () => {
  return (
    <section className="w-full bg-[#111111] text-white py-24 px-6 flex justify-center items-center">
      <div className="max-w-6xl w-full text-center border-y border-[#F99526]  rounded-[50px] py-16 px-6 md:px-12 relative overflow-hidden">
        <H2 >
          Sed ut perspiciatis unde omnis
          <br />
          iste natus error sit{" "}
          <span className=" playfair italic text-[#8E5CF8] ">
            voluptatem accusantium doloremque
          </span>
        </H2>
 
        
         <button
      className="
        group
        inline-flex items-center justify-center mt-4
        w-[200px] h-[48px] 
        px-[10px] py-[10px]
        rounded-[8px]
         font-bold
        text-[16px] 
        font-bricolage
        border-2 border-[#141414]
        bg-white text-[#141414]
        shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
        transition-all duration-300 ease-in-out
        hover:bg-[#141414] hover:text-white
       "
    >GET PRODUCT DEMO
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
    </section>
  );
};
 
export default  BorderCTA;