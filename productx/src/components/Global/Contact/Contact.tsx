import { Link } from "react-router-dom";
import { H1 } from "../../../styles/Typography";
 
import { ArrowUpRight,ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="w-full min-h-[666px] flex relative bg-[#FAFAFA] lg:pl-6 overflow-hidden">
      {/* Dotted pattern background for small screens */}
      <div className="absolute md:hidden inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_2px,_transparent_1px)] [background-size:12px_12px] opacity-50" />

      {/* Main Grid: 2 Columns (50-50 on large screens) */}
      <div className="w-full mt-10 z-10  grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
        {/* Left Side: Form Section */}
        <div className="flex flex-col h-auto w-full max-w-lg mx-auto lg:mx-0 justify-center p-0 sm:p-4">
          <H1 className="text-black font-bold mb-6">Quam finibus</H1>

          <form className="space-y-4 font-quickstand">
            <input
              type="text"
              placeholder="Name"
              className="w-full font-quickstand px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4  font-quickstand py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <select className="w-full px-4  font-quickstand py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-black">
              <option disabled selected>
                What are you looking for?
              </option>
              <option>Manufacturing</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>

            <textarea
              placeholder="Message (Optional)"
              rows={3}
              className="w-full font-quickstand px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div className="inline-block">
             
                <button
      className="
        group
        flex items-center justify-center
        w-[150px] h-[48px]
        px-[10px] py-[12px]
        rounded-[12px]
        font-quicksand font-bold
        text-[16px]
        border-2  
        bg-black text-white
       
        transition-all duration-300 ease-in-out
        hover:bg-white hover:text-black
        
       border-b-[4px]  border-black border-opacity-50 hover:border-opacity-100

      "
    >
      <Link to="/"><span className="mr-2">SUBMIT</span></Link>
      <span className="relative flex items-center h-[20px] w-[20px]">
        {/* Default icon */}
        <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
        {/* Hover icon */}
        <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
    </button>
            </div>
          </form>
        </div>

        {/* Right Side: Dotted Structure */}
        <div className="relative hidden lg:block h-[600px] w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_2px,_transparent_1px)] [background-size:12px_12px]" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
