import { ArrowRight } from "lucide-react";

const HandSection = () => {
  return (
    <section className="relative w-full h-screen bg-[#E8F5FF] flex flex-col overflow-hidden">
      {/* Background Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src="/EHRandPMS/Hand.png"
          alt="Hand"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text (Desktop only) */}
        <div className="hidden lg:block absolute left-12 bottom-16 max-w-2xl z-20">
          <div
            className="backdrop-blur-sm p-10 rounded-xl border border-neutral-400/50 h-[280px] flex flex-col justify-center items-center"
            style={{
              backgroundImage:
                "conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)",
            }}
          >
            <h1 className="text-5xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
                Sed ut perspiciatis Unde
              </span>
            </h1>
            <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Seduo ut perspiciatis
            </h1>
          </div>
        </div>

        {/* Green Card (Desktop only) */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[420px] z-10 pt-140">
          <div className="bg-[#2D9D78] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-10 ">
              <p className="text-white text-base leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum. occaecat cupidatat non.
              </p>
            </div>
            <div className="border-b border-white/50 w-full"></div>
            <div className="bg-[#2D9D78] p-4 flex justify-end">
              <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all">
                <ArrowRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Stacked) */}
      <div className="flex flex-col lg:hidden w-full px-6 mt-[-2rem] sm:mt-[-3rem] z-20">
        {/* Title Section */}
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-neutral-300/50 text-center shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Sed ut perspiciatis Unde
            </span>
          </h1>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
            Seduo ut perspiciatis
          </h1>
        </div>

        {/* Green Card Section */}
        <div className="bg-[#2D9D78] mt-6 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. occaecat cupidatat non.
            </p>
          </div>
          <div className="border-b border-white/50 w-full"></div>
          <div className="bg-[#2D9D78] p-4 flex justify-end">
            <button className="bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-all">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandSection;
