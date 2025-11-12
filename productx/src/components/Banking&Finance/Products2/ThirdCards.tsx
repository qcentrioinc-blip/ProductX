import { H1 } from "../../../styles/Typography";

const ThirdCards = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
      
      {/* Container for the heading */}
      <div className="text-center">
        <H1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Sed ut perspiciatis unde
        </H1>
      </div>

      {/* Desktop - Static Grid (Unchanged) */}
      <div className="hidden lg:grid grid-cols-4 gap-6 mt-12 w-full max-w-7xl">
        <div className="bg-gray-300 h-24 rounded-lg w-56"></div>
        <div className="bg-gray-300 h-24 rounded-lg w-56"></div>
        <div className="bg-gray-300 h-24 rounded-lg w-56"></div>
        <div className="bg-gray-300 h-24 rounded-lg w-56"></div>
      </div>

      {/* Mobile/Tablet - Infinite Scrolling from Right to Left */}
      <div className="lg:hidden relative w-full mt-8 sm:mt-10 overflow-hidden">
        <div className="flex animate-scroll-rtl">
          {/* First set of cards */}
          <div className="flex gap-4 sm:gap-5 flex-shrink-0">
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-4 sm:gap-5 flex-shrink-0 ml-4 sm:ml-5">
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
          </div>

          {/* Third set for extra smoothness */}
          <div className="flex gap-4 sm:gap-5 flex-shrink-0 ml-4 sm:ml-5">
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
            <div className="bg-gray-300 w-64 sm:w-72 h-20 sm:h-22 rounded-lg flex-shrink-0"></div>
          </div>
        </div>
      </div>

      {/* CSS Animation - Right to Left Continuous Scroll */}
      <style>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 5s linear infinite;
        }
        
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default ThirdCards;
