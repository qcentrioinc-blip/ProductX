import { H2, H3, H4, P } from "../../../styles/Typography";


const ImageGrid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl   mx-6 xl:mx-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <H2 className="mb-4 text-[#166D48]">
            Sed ut perspiciatis Unde
          </H2>
          <P className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Generate any kind of website — business, portfolio, blog, or store — using Readdy's AI website builder. Start with text.
          </P>
        </div>

        {/* Grid Container */}
      
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
  {/* First Row */}
  <div className="lg:col-span-7">
    {/* Box 1 - Doctor with laptop (larger) */}
    <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg group">
      <img
        src="/Physician/PhysicianImage1.svg"
        alt="Doctor working on laptop"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  </div>

  <div className="lg:col-span-5">
    {/* Box 2 - Info card with curved L-shape cutout */}
    <div className="relative   rounded-2xl overflow-hidden">
      {/* Background Image */}
      <img 
        src="/Physician/PinkRectangle.svg" 
        className="w-full h-96 object-cover" 
        alt="ehr-and-pms"
      />
      
      {/* Arrow icon in the curved corner */}
      <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 z-10">
        <img src="/Physician/CircleArrow.svg" alt="ehr and pms" className="w-full h-full"/>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col">
        <div className="mt-12 ">
          <H3 className="mb-4 border-b-2 border-gray-800 pb-2 inline-block">
            Duis aute irure
          </H3>
        </div>
        <div className="mt-auto mb-6 md:mb-8">
          <P className="max-w-md leading-relaxed  ">  
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate
          </P>
        </div>
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="lg:col-span-5">
    {/* Box 3 - Text card (beige) */}
    <div className="relative h-64 md:h-80 lg:h-96 bg-stone-300 rounded-2xl overflow-hidden shadow-lg p-8 md:p-10 flex flex-col justify-end">
      <H4 className="text-2xl md:text-3xl text-gray-900 mb-4">
        Duis aute irure dolor
      </H4>
      <P className="text-sm md:text-base text-gray-700">
        Generate any kind of website — business, portfolio, blog, or store
      </P>
    </div>
  </div>

  <div className="lg:col-span-7">
    {/* Box 4 - Doctor with laptop on teal background (larger) */}
    <div className="relative h-64 md:h-80 lg:h-96 bg-[#008280] flex flex-row rounded-2xl overflow-hidden shadow-lg group">
      {/* Text overlay */} 
      <div className="absolute bottom-8 left-6 md:left-8 z-10">
        <H4 className="text-2xl md:text-3xl text-white mb-3">
          Duis aute irure dolor
        </H4>
        <P className="max-w-xs text-white">
          Generate any kind of website — business, portfolio, blog, or store
        </P>
      </div>
      
      <img
        src="/Physician/PhysicianImage2.svg"
        alt="Female doctor with laptop"
        className="w-full h-full absolute left-32 md:left-44 object-contain transition-transform duration-500 group-hover:scale-105"
      /> 
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ImageGrid;