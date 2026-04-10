import { useState } from "react";
import { H2EHR, H4EHR, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";
 
const FeatureCards = () => {
     const [drawerOpen, setDrawerOpen] = useState(false);
   
  return (
    <section className="bg-white  dark:bg-[#042f2e] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
       
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <H2EHR className="text-[#007976] dark:text-amber-400 mb-4">Your Command Center</H2EHR>
          <P className="text-gray-600 text-sm">
            One unified dashboard gives you full control over patient scheduling, communication, and daily clinic operations. 
          </P>
        </div>
 
        {/* Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         
          {/* Card 1 - Left */}
          <div className="flex flex-col rounded-[2rem] overflow-hidden  bg-[#F2F2F2] dark:bg-teal-800">
            <div className="p-8 pb-10 ">
              <div className="text-[#007976] text-4xl dark:text-amber-400 mb-6">＋</div>
              <H4EHR className="mb-3 text-black dark:text-white">Live Schedule Management </H4EHR>
              <P className="text-gray-600 leading-relaxed">
                View, book, and adjust all appointments in real-time with a clear, color-coded calendar for any provider.
              </P>
            </div>
            {/* Image Section */}
            <div className="mt-auto h-72">
              <img
                src="/EHR-PMS/Receptionist/img3.webp"
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
 
          {/* Card 2 - Center (Highlighted with Teal Image) */}
          <div className="flex flex-col rounded-[2rem]  overflow-hidden relative">
            {/* Arrow icon in top right corner */}
           
             <button
  type="button"
   onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setDrawerOpen(true);
    }}
  className="absolute   top-4 right-4 h-24 w-24 md:top-6 md:right-6 md:h-32 md:w-32 lg:top-6 lg:right-20 lg:w-44 lg:h-44 xl:top-2 xl:right-0 xl:w-28 xl:h-28 flex items-center justify-center z-20 cursor-pointer hover:scale-110 transition-transform duration-300"
>
  <img
    src="/EHRIcons/GreenArrow.svg"
    alt="arrow"
    className="w-full h-full object-contain pointer-events-none"
  />
</button>

            
  
           {/* Teal Rectangle Image with text overlay */}
<div className="relative  md:h-[350px] lg:h-[400px] xl:h-[260px] p-8 pb-10">
  
  {/* Background Image */}
  <img
    src="/EHRIcons/GreenRec.webp"
    alt="Teal Background"
    className="absolute inset-0 w-full h-full "
  />

  {/* Text Content */}
  <div className="relative z-10">
    <div className="text-white text-4xl mb-6 dark:text-amber-400">＋</div>
    <H4EHR className="text-xl mb-3 text-white">
      Patient Flow Tracking
    </H4EHR>
    <P className="text-teal-50  md:max-w-md xl:max-w-full leading-relaxed">
      See exactly who has checked in, is in triage, or is waiting for the provider to reduce delays and improve efficiency.
    </P>
  </div>
</div>

           
            {/* Bottom Image Section */}
            <div className="mt-auto h-72">
              <img
                src="/EHR-PMS/Receptionist/img4.webp"
                alt="Feature Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
 
          {/* Card 3 - Right */}
          <div className="flex flex-col rounded-[2rem] dark:bg-teal-800 overflow-hidden bg-[#F2F2F2]">
            <div className="p-8 pb-10">
              <div className="text-[#007976] text-4xl dark:text-amber-400 mb-6">＋</div>
              <H4EHR className="font-bold text-xl mb-3 text-black dark:text-white">Streamlined Patient Intake </H4EHR>
              <P className="text-xs text-gray-600 leading-relaxed">
                 Use digital forms for new patient registration and check-in to eliminate paper and speed up the process. 
              </P>
            </div>
            {/* Image Section */}
            <div className="mt-auto h-72">
              <img
                src="/EHR-PMS/Receptionist/img5.webp"
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
 
        </div>
      </div>
              <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};
 
export default FeatureCards;