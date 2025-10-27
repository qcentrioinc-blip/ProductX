 
 
import { ArrowRight } from 'lucide-react';  
import { H2, H4,P } from '../../../styles/Typography';
const Testimonial = () => {
  return (
     
    <div className="w-full bg-[#EFEFEF] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        
        <div className="flex justify-start md:justify-center lg:justify-start">
            <div className="w-full max-w-sm py-6 md:max-w-md bg-[#166D48] text-white  overflow-hidden transform -translate-y-1/2 lg:translate-y-0 lg:absolute lg:top-0 lg:mt-[-10rem] mt-20">
                <div className="p-6">
                    <P className="text-sm italic leading-relaxed">
                        Duis aute irure dolor in rePrehenderit in voluPtate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. occaecat cupidatat non.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16 lg:pt-0">
          
          {/* Empty column for positioning/spacing on large screens */}
          <div className="hidden lg:block"></div> 
          
          <div className="space-y-4 md:pt-8 lg:pt-0">
            <H2 className="  font-bold text-black leading-tight">
              Sed ut perspicia tisunde <br /> Seduo ut perspiciatis
            </H2>
          </div>
        </div>
        
        {/* --- Slider/Feature Circles --- */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-start">
            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-4">
                    {/* Placeholder for the light green circle */}
                    <div className="w-16 h-16  rounded-full bg-[#B4E7CE] flex items-center justify-center">
                        {/* You can add icons or numbers here */}
                    </div>
                    
                    <H4>
                    Duis aute irure dolor in
                    </H4>
                    <P className=" text-justify text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Duis aute irure dolor in
                    </P>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial ;