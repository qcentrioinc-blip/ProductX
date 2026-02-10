import { useEffect, useRef, useState } from "react";
 
import { H2, H3, H4, P } from "../../../styles/Typography";

const TestimonialEHR = () => {
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
      title:"Streamline Revenue Cycle Management",
      desc:" From automated coding and claims submission to transparent payment tracking, ensure a healthy and visible financial workflow",
     image:"/EHRIcons/MasterPlan.svg"
    },
    {
      title:" Enable Data-Driven Clinical Decisions",
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
    <div className="max-w-8xl lg:mx-10 lg:my-20 mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start px-4  ">
                  {/* Left Heading */}
                  <div
                    className="space-y-4 transition-all duration-1000 ease-out"
                    
                  >
                    <H2 className="font-mono">
                     Seamlessly Integrating Care and Operations 
                    </H2>
                  </div>
    
                  {/* Right Paragraph */}
                  <div
                    className="space-y-4 transition-all duration-1000 ease-out"
                    
                  >
                    <P className="text-black pt-10 leading-relaxed">
                   Unified Clinicapp connects every part of your practice, from patient intake to final billing, on one intelligent platform. We unify clinical and administrative workflows to eliminate inefficiencies and enhance care delivery. 
                    </P>
                  </div>
                </div>
              </div>
   <div className="max-w-8xl border border-[#166D48] rounded-2xl mx-4 p-4 xl:p-16  xl:mx-10 my-10 ">
   
    {/* GREEN CARD + HEADING IN ONE ROW */}
  <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] items-center gap-8 lg:gap-12 text-center lg:text-left">



      {/* Green Testimonial Card */}
     <div className="order-2 xl:order-1 relative w-full max-w-md mx-auto xl:max-w-none xl:mx-0 lg:flex-shrink-0">

                   <div className="relative  w-full ">
                     
              <img
  src="/EHRIcons/arrow.webp"
  className="w-full h-auto   "
  alt="ehr and pms"
/>

                     {/* Arrow icon in the curved corner */}
                     {/* <div className="absolute top-2 right-2 w-28 h-28   rounded-full  flex items-center justify-center  xl:hover:scale-110 transition-transform duration-300">
                       <img src="/Physician/CircleArrow.svg"  alt="arrow"/>
                      
                     </div> */}
     
                     {/* Card Content */}
                     <div className=" absolute top-8 z-10 px-2">
                      <H3 className="text-white mb-10 -ml-44  lg:-ml-0 inline-block border-b-2 border-white pb-2">
       How We Function
     </H3>
                       <P className="text-white sm:mt-8 px-4 xl:px-0 ">
                        Ready to see the unified difference? Explore our platform in detail and discover how a seamless workflow can transform your practice. Check How We Work. 
                       </P>
                     </div>
                   </div>
                 </div>
     

      {/* Right Heading */}
      <div className="order-1 xl:order-2 flex justify-center xl:justify-end">
  <H2 className="text-[#008280] font-normal leading-tight text-center xl:text-right xl:pr-10">
    Our Four Pillars of Unified Practice Management
  </H2>
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


            <H4 className="text-[#2A2A2A]">
              {item.title}
            </H4>

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

  </div>
 

  
    </>
  );
};

export default TestimonialEHR;
