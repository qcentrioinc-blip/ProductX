import { useState } from "react";
import {   H3EHR, H4EHR, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";


const ImageGridEHR = () => {
       const [drawerOpen, setDrawerOpen] = useState(false);
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
    <div className="relative h-64 md:h-80 lg:h-[450px] rounded-4xl overflow-hidden shadow-lg group">
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
    <button
  type="button"
  onClick={() => setDrawerOpen(true)}
  className="
    absolute 
    top-6 right-6 
    sm:top-10 sm:right-10 
    lg:top-6 lg:right-0
    w-20 h-20 
    sm:w-28 sm:h-28 
    md:w-36 md:h-36
    lg:w-24 lg:h-24 
    xl:w-32 xl:h-32 
    z-30
    flex items-center justify-center
    transition-transform duration-300
    hover:scale-110
    cursor-pointer
  "
>
  <img
    src="/EHRIcons/GreenArrow.svg"
    alt="arrow"
    className="w-full h-full object-contain pointer-events-none"
  />
</button>


    {/* Content */}
    <div className="relative z-10 h-full 
                    p-6 
                    sm:p-8 
                    md:p-10 
                    lg:p-12 
                    xl:p-8
                    flex flex-col justify-between">

    <H3EHR className="mt-10 inline-block relative">
  Built For Clinicians
  <span className="absolute left-0 -bottom-2 w-44 md:w-56 lg:40 xl:w-72 h-[2px] bg-[#141414]" />
</H3EHR>


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
    <div className="relative h-64 md:h-80 lg:h-90 bg-[#EEDA68] rounded-4xl overflow-hidden shadow-lg p-8 md:p-10 flex flex-col justify-end">
      <div className=" flex justify-center items-center mb-10">
          <img src="/EHRIcons/ReduceAdmin.svg" alt="reduce" className=" w-20 h-20 md:w-28 md:h-28"/>
      </div>
   
      <H4EHR className="text-2xl md:text-3xl text-gray-900 mb-4">
       Reduces Administrative Burden
      </H4EHR>
      <P className="text-sm md:text-base text-black">
      Automates coding and billing tasks integrated from your clinical notes. 
      </P>
    </div>
  </div>

  <div className="lg:col-span-8">
    {/* Box 4 - Doctor with laptop on teal background (larger) */}
    <div className="relative h-64 md:h-80 lg:h-90 bg-[#008280] flex flex-row rounded-4xl overflow-hidden shadow-lg group">
      {/* Text overlay */} 
      <div className="absolute bottom-12 left-6 p-2 md:p-0 md:left-8 z-10">
        <H4EHR className="text-2xl md:text-3xl text-white mb-3">
           Supports Smarter Decisions
        </H4EHR>
        <P className="max-w-xs text-white">
          Provides real-time alerts and patient history in one view.
        </P>
      </div>
      
      <img
        src="/EHRIcons/LadyDoctor.webp"
        alt="Female doctor with laptop"
        className="w-full hidden  md:block h-full absolute -bottom-10 px-20 md:-right-20 lg:-right-28 object-contain scale-120 transition-transform duration-500 group-hover:scale-125"
      /> 
    </div>
  </div>
</div>
      </div>
       <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default ImageGridEHR;