import GreenCircle from "/ClinicApp/GreenCircle.png";
import { H2,   H4 } from "../../../styles/Typography";
const Advantage = () => {
  return (
    <section className="relative w-full overflow-visible bg-white py-16 sm:py-24 lg:py-32">
         {/* Main Heading */}
        <H2 className="  font-bold text-[#166D48] mx-10 text-center mb-16 sm:mb-20 relative z-10">
          Sed ut perspiciatis Unde Seduo ut perspiciatis
        </H2>
         <img
          src={GreenCircle}
          alt="Green Circle"
          className="absolute -bottom-54 right-0 w-[200px] sm:w-[200px] lg:w-[300px] z-1"
        />

     
      <div className="relative bg-[#FFEFDD] rounded-xl max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Decorative Green Circle Image */}
       
        

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
          {[1, 2].map((col) => (
            <div key={col}>
              {/* Top Circle */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-md" />

              {/* Column Title */}
              <H4 className=" font-bold text-gray-800 mb-4">
                Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit
              </H4>

              {/* Column Paragraph */}
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute
              </p>

              {/* Numbered List */}
              <ul className="space-y-6">
                {[1, 2, 3].map((num) => (
                  <li key={num} className="flex items-start">
                    <div className="w-8 h-8 flex-shrink-0 bg-white rounded-full gap-10 flex items-center justify-center text-sm font-semibold text-[#166D48] shadow-sm mr-4">
                      {num}
                    </div>
                    <p className="text-base text-gray-700">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto relative z-10">
          <p className="text-lg sm:text-xl font-bold text-gray-800 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderhenderit in vo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
