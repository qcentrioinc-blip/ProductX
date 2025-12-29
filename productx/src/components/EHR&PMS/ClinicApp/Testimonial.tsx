import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { H2, H4, P } from "../../../styles/Typography";

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ Detect when grid section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-20">
      <div className="max-w-8xl lg:mx-10  px-4 lg:px-8 relative">
        {/* --- Left Green Testimonial Card --- */}
        <div className="flex justify-start md:justify-center lg:justify-start">
          <div className="w-full max-w-sm py-6 md:max-w-md bg-[#166D48] text-white overflow-hidden transform -translate-y-1/2 lg:translate-y-0 lg:absolute lg:top-0 lg:mt-[-10rem] mt-20">
            <div className="p-6">
              <P className="text-sm leading-relaxed text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </P>
            </div>
            <div className="flex justify-end p-4 border-t-2 border-white">
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#166D48] hover:bg-gray-100 transition duration-300">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12   ">
          <div className="hidden lg:block"></div>
          <div className="space-y-4  ">
            <H2 className="font-bold text-black text-left lg:text-right leading-tight">
              Sed ut perspicia tisunde <br /> Seduo ut perspiciatis
            </H2>
          </div>
        </div>

        {/* --- Feature Grid Section --- */}
        <div ref={sectionRef} className="relative  mt-10 lg:mt-32">
          {/* ✅ Grid Container */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start z-10">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className="relative flex flex-col items-start  space-y-4    transition-all duration-300 lg:min-h-[300px]">
                {/* ✅ Card content */}
                <div className="w-16 h-16 rounded-full bg-[#B4E7CE] flex items-center justify-center">
                  {/* Icon/number placeholder */}
                </div>

                <H4 className="  text-gray-800">
                  Duis aute irure dolor in
                </H4>

                <P className="text-gray-600 leading-relaxed pr-1">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
                  reprehenderit in voluptate.
                </P>

                {/* Vertical Line Between Cards   */}
                {index !== 3 && (
                  <div
                    className="absolute top-0 right-0 w-[3px] bg-[#166D48] origin-top hidden lg:block"
                    style={{
                      height: isVisible ? "80%" : "0",
                      transition: "height 2s ease-out",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
