import { H2,   H3,   H4, P } from "../../../styles/Typography";
 
const PhysicianHeroSection = () => {
  return (
    <section className="relative w-full bg-white py-10 overflow-hidden">
      <div className="  max-w-8xl px-4 xl:mx-10">
        {/* Top Content */}
        <div className="grid grid-cols-1 mt-10  xl:mt-28 xl:grid-cols-[2fr_1fr] gap-10 items-center">
          {/* Left Text */}
          <div>
            <H2 className="text-4xl font-semibold text-[#008280] leading-tight">
              Practice Medicine,
             
              Not Paperwork.
            </H2>
          </div>
 
          {/* Right Description */}
          <P className=" max-w-xl">
   Unified Clinicapp is the physician-friendly EHR that reduces clicks and charting time so you can focus on patient care, while its integrated practice management tools streamline scheduling, billing, and patient communication. 
          </P>
        </div>
 
        {/* Images + Stats */}
        <div className="relative mt-16">
          {/* IMAGE WRAPPER */}
      <div className="relative w-full max-w-[745px] flex flex-col gap-4 xl:block">
 
            {/* Image 1 */}
           <img
  src="/EHRIcons/PhysicianHero1.webp"
  alt="Healthcare Building"
  className="
    w-full
    h-[180px] sm:h-[220px] lg:h-[260px] xl:w-[745px] xl:h-[285px]
    rounded-[16px]
    object-cover
  "
/>
 
 
            {/* Image 2 */}
        <img
  src="/EHRIcons/PhysicianHero2.webp"
  alt="Doctors Reviewing Chart"
  className="
    w-full
    h-[160px] sm:h-[200px] lg:h-[230px]
    rounded-[16px]
    object-cover
    shadow-lg
 
    xl:absolute
    xl:left-full
    xl:top-full
    xl:-translate-y-4
    xl:w-[650px]
    xl:h-[212px]
  "
/>
 
 
          </div>
 
          {/* Stats */}
          <div className=" mt-10 xl:mt-28  grid grid-cols-3 gap-10 max-w-3xl">
            <div className="xl:mt-10">
              <H3 className=" font-bold">
               Achieve Best Results  
              </H3>
            </div>
 
            <div>
              <H2 className="text-4xl font-bold text-gray-900">55X</H2>
              <H4 className="">Faster Charting</H4>
            </div>
 
            <div>
              <H2 className="text-4xl font-bold text-gray-900">85%</H2>
              <H4 className="">Fewer Clicks</H4>
            </div>
          </div>
        </div>
      </div>
 
      {/* Responsive Fixes */}
      {/* <style>{`
        @media (max-width: 1024px) {
          img {
            position: static !important;
            transform: none !important;
            width: 100% !important;
            height: auto !important;
            margin-top: 1rem;
          }
        }
      `}</style> */}
    </section>
  );
};
 
export default PhysicianHeroSection;