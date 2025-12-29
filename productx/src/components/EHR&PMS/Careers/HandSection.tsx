import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HandSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1280);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">

      {/* IMAGE AREA */}
      <div className="relative w-full h-[55vh] md:h-[65vh] xl:h-[75vh]">
        <img src="/EHRandPMS/Hand.png" className="w-full h-full object-cover" />

        {/* OVERLAY (ALL SCREENS) */}
        <div className="absolute bottom-0 left-1/2 xl:left-100 -translate-x-1/2 z-20 px-4 w-full max-w-2xl">
          <div className="backdrop-blur-sm p-10 rounded-sm bg-white/10 shadow-2xl h-[200px] xl:h-[340px] flex flex-col justify-center text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Sed ut perspiciatis Unde
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
              Seduo ut perspiciatis
            </h1>
          </div>
        </div>

        {/* DESKTOP GREEN CARD (STRADDLES IMAGE + BASE) */}
        {isDesktop && (
          <div className="absolute right-12 bottom-[-180px] w-[480px] z-30">
            <div className="bg-[#2D9D78] rounded-xl shadow-2xl overflow-hidden h-[250px] flex flex-col justify-between">
              <div className="p-10 text-white text-base leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="border-t border-white/50" />
              <div className="p-4 flex justify-end bg-[#2D9D78]">
                <button className="bg-white p-3 rounded-full hover:scale-110 transition">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM COLOR BASE */}
      <div className="bg-[#E8F5FF] pt-60"></div>

      {/* TABLET / iPAD PRO / MOBILE */}
      {!isDesktop && (
        <div className="relative -mt-56 px-6 pb-20 z-20 max-w-xl mx-auto">
          <div className="bg-[#2D9D78] rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 text-white text-sm sm:text-base">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="border-t border-white/50" />
            <div className="p-4 flex justify-end">
              <button className="bg-white p-2 sm:p-3 rounded-full">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
