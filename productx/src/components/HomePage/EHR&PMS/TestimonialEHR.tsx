import { useEffect, useRef, useState } from "react";
 
import { H2EHR, H3EHR, H4EHR, P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const TestimonialEHR = () => {
 const [drawerOpen, setDrawerOpen] = useState(false);

  const card=[
    {
      title:"Unify Clinical and Administrative Data",
      desc:" Integrate EHR documentation with scheduling and billing in a single patient record, eliminating redundant data entry and errors.",
      image:"/EHRIcons/OpenFolder.svg"
    },
  {
      title:"Automate Patient Engagement Workflows ",
      desc:" Empower patients with self-scheduling, digital check-in, and a portal for lab results, consents, and telehealth visits.",
     image:"/EHRIcons/HospitalUser.svg"
    },
    {
      title:"Streamline Revenue  Management Cycle",
      desc:" From automated coding and claims submission to transparent payment tracking, ensure a healthy and visible financial workflow",
     image:"/EHRIcons/MasterPlan.svg"
    },
    {
      title:" MACRA/MIPS Support and  Support Tools",
      desc:"Provide clinicians with unified dashboards, decision support tools, and real-time analytics at the point of care.",
     image:"/EHRIcons/Gear.svg"
    },
  ]
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
 
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
    <> 
    <section className="dark:bg-[#141414] ">
    <div className="max-w-7xl  dark:bg-[#141414]  px-4 xl:px-6 lg:py-20 xl:py-0 mx-auto   ">
                <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start     ">
                  {/* Left Heading */}
                  <div
                    className="space-y-4 transition-all duration-1000 ease-out"
                    
                  >
                    <H2EHR className="mt-4 dark:text-white">
                     Seamlessly Integrating Care and Operations 
                    </H2EHR>
                  </div>
    
                  {/* Right Paragraph */}
                  <div
                    className="space-y-4 transition-all duration-1000 ease-out"
                    
                  >
                    <P className="text-black  leading-relaxed">
                Unified Clinicapp connects every part of your practice, from patient intake to final billing, on HIPAA-compliant platform. We unify clinical and administrative workflows to eliminate inefficiencies and enhance care delivery. 
                    </P>
                  </div>
                </div>
              </div>
   <div className="max-w-7xl border border-[#166D48] dark:border-white rounded-2xl  p-8 mt-10 mx-auto  xl:px-6">
   
    {/* GREEN CARD + HEADING IN ONE ROW */}
  <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] items-center gap-8 lg:gap-5 text-center lg:text-left">



      {/* Green Testimonial Card */}
     <div className="order-2 xl:order-1 relative w-full max-w-md mx-auto xl:max-w-none xl:mx-0 lg:flex-shrink-0">

                   <div className="relative  w-full ">
                     
              <img
  src="/EHRIcons/GreenRec.webp"
  className="w-[95%] h-auto   "
  alt="ehr and pms"
/>

                     {/* Arrow icon in the curved corner */}
                  <button
  type="button"
  onClick={() => setDrawerOpen(true)}
  className="
    absolute  -top-4 lg:top-2  right-0 lg:right-6
    w-28 h-28
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

     
                     {/* Card Content */}
                    <div className="absolute   top-4 xl:top-8 z-10   xl:px-4">
                      <H3EHR className="text-white mb-6 md:mt-4 xl:mt-0 -ml-24 md:-ml-44 lg:-ml-2 xl:-ml-0 p-4  inline-block border-b-2 border-white pb-2">
       How We Function
     </H3EHR>
                       <P className="text-white max-w-sm md:max-w-lg xl:max-w-md md:-ml-2 mt-4 lg:-ml-0 md:mt-10 lg:mt-10 xl:mt-0 px-4 md:px-4  xl:pr-16 xl:pl-4 xl:-ml-2 xl:pt-6 ">
                        Ready to see the unified difference? Explore our platform in detail and discover how a seamless workflow can transform your practice. Check How We Work. 
                       </P>
                     </div>
                   </div>
                 </div>
     

      {/* Right Heading */}
      <div className="order-1 xl:order-2 flex justify-center xl:justify-end">
  <H2EHR className="text-[#008280] dark:text-teal-700 font-normal leading-tight text-center xl:text-right xl:pr-10">
    Our Four Pillars of Unified Practice Management
  </H2EHR>
</div>


    </div>

    {/* FEATURE GRID */}
    <div ref={sectionRef} className="relative mt-16  lg:mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {card.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col space-y-4 lg:min-h-[300px]"
          >
           <img
  src={item.image}
  alt=""
  className="w-10 h-10 object-contain overflow-visible"
/>


            <H4EHR className="text-[#2A2A2A] dark:text-white">
              {item.title}
            </H4EHR>

            <P className=" pr-4 text-[#141414] leading-relaxed">
              {item.desc}
            </P>

            {index !== 3 && (
              <div
                className="absolute top-0 right-0 w-[2px] bg-[#008280] hidden xl:block"
                style={{
                  height: isVisible ? "90%" : "0",
                  transition: "height 2s ease-out",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
 <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
  </div>
 </section>

  
    </>
  );
};

export default TestimonialEHR;
