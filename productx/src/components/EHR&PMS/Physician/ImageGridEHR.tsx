import {   H3, H4, P } from "../../../styles/Typography";


const ImageGridEHR = () => {
  return (
    <div className="h-full xl:min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl   mx-6 xl:mx-auto">
        {/* Header Section */}
        {/* <div className="text-center mb-12">
          <H2 className="mb-4 text-[#166D48]">
             Built For Clinicians
          </H2>
          <P className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Designed with physician input to streamline your daily workflow, reduce documentation burden, and support clinical excellence.
          </P>
        </div> */}

        {/* Grid Container */}
      
<div className="grid grid-cols-1 lg:grid-cols-13 gap-3 lg:gap-4">
  {/* First Row */}
  <div className="lg:col-span-8">
    {/* Box 1 - Doctor with laptop (larger) */}
    <div className="relative h-64 md:h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-lg group">
      <img
         src="/EHRIcons/ImageDoctor.webp"
        alt="Doctor working on laptop"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  </div>

<div className="lg:col-span-5">
  <div className="relative rounded-2xl overflow-hidden 
                  min-h-[350px] 
                  md:min-h-[650px] 
                  lg:min-h-[450px] 
                  xl:min-h-[460px]">

    {/* SVG background */}
    <img
      src="/Physician/PinkRectangle.svg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Arrow */}
    <div className="absolute 
                    top-6 right-6 
                    sm:top-10 sm:right-10 
                    w-20 h-20 
                    sm:w-28 sm:h-28 
                    md:w-36 md:h-36
                    lg:top-6   lg:right-0
                    lg:w-24 lg:h-24 
                    xl:w-32 xl:h-32 
                    z-10">
      <img
        src="/EHRIcons/GreenArrow.svg"
        alt="arrow"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full 
                    p-6 
                    sm:p-8 
                    md:p-10 
                    lg:p-12 
                    flex flex-col justify-between">

      <H3 className="max-w-xs mt-10">
        Built For Clinicians
      </H3>

      <P className="max-w-md  mt-24  xl:mt-20 leading-relaxed">
        Designed with physician input to streamline your daily workflow,
        reduce documentation burden, and support clinical excellence.
      </P>

    </div>
  </div>
</div>



  {/* Second Row */}
  <div className="lg:col-span-5">
    {/* Box 3 - Text card (beige) */}
    <div className="relative h-64 md:h-80 lg:h-96 bg-stone-300 rounded-2xl overflow-hidden shadow-lg p-8 md:p-10 flex flex-col justify-end">
      <H4 className="text-2xl md:text-3xl text-gray-900 mb-4">
       Reduces Administrative Burden
      </H4>
      <P className="text-sm md:text-base text-gray-700">
      Automates coding and billing tasks integrated from your clinical notes. 
      </P>
    </div>
  </div>

  <div className="lg:col-span-8">
    {/* Box 4 - Doctor with laptop on teal background (larger) */}
    <div className="relative h-64 md:h-80 lg:h-96 bg-[#008280] flex flex-row rounded-2xl overflow-hidden shadow-lg group">
      {/* Text overlay */} 
      <div className="absolute bottom-8 left-6 md:left-8 z-10">
        <H4 className="text-2xl md:text-3xl text-white mb-3">
           Supports Smarter Decisions
        </H4>
        <P className="max-w-xs text-white">
          Provides real-time alerts and patient history in one view.
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

export default ImageGridEHR;