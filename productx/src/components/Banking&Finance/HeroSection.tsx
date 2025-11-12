 
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { H1, P } from "../../styles/Typography";

const HeroSection = () => {
  return (
    <div className="relative h-[600px] sm:h-screen min-h-[500px] sm:max-h-[800px] w-full overflow-hidden">
      {/* Background Image with animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-[scaleIn_1.2s_ease-out]"
        style={{
          backgroundImage: "url('/BNFBG.jpg')",
        }}
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content Container - Centered */}
      <div className="relative h-full flex items-center md:mx-10 px-4 sm:px-6 md:px-0 lg:px-8">
        <div className="w-full max-w-4xl text-left">
          {/* Animated heading */}
          <H1 className="  font-bold text-white mb-4 md:mb-6 leading-tight animate-[slideInLeft_0.8s_ease-out]">
            Shaping the Future
            <br />  
            Across B and F
          </H1>
          
        
          <P className="  text-white/90 mb-6 pr-6 sm:pr-0 sm:mb-8 sm:max-w-xl animate-[slideInLeft_1s_ease-out_0.2s_both]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          </P>

          
          <button className="group inline-flex items-center gap-2 bg-black hover:bg-white hover:text-black text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold text-sm md:text-base transition-all duration-200 hover:scale-105 animate-[slideInLeft_1.2s_ease-out_0.4s_both]">
            EXPLORE SOLUTIONS
            <span className="flex items-center gap-2">
              <span className="relative flex items-center h-[20px] w-[20px]">
                <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(1.1);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;