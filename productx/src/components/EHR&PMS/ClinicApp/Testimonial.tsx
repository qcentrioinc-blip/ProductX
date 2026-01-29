import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { H2, H4, P } from "../../../styles/Typography";

const Testimonial = () => {
  const card=[
    {
      title:"Unify Clinical and Administrative Data",
      desc:" Integrate EHR documentation with scheduling and billing in a single patient record, eliminating redundant data entry and errors.",
    },
  {
      title:"Automate Patient Engagement Workflows ",
      desc:" Empower patients with self-scheduling, digital check-in, and a portal for lab results, consents, and telehealth visits.",
    },
    {
      title:"Streamline Revenue Cycle Management",
      desc:" From automated coding and claims submission to transparent payment tracking, ensure a healthy and visible financial workflow",
    },
    {
      title:" Enable Data-Driven Clinical Decisions",
      desc:"Provide clinicians with unified dashboards, decision support tools, and real-time analytics at the point of care.",
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
    <> <div className="max-w-8xl lg:mx-10 lg:my-20 mx-auto">
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
   <div className="max-w-8xl bg-[#EFEFEF] rounded-xl mx-10 my-10 py-12">
   
    {/* GREEN CARD + HEADING IN ONE ROW */}
   <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-end gap-12">


      {/* Green Testimonial Card */}
      <div className="flex justify-start px-10">
        <div className="w-full max-w-md bg-[#56644A] rounded-md text-white overflow-hidden">
          <div className="p-4">
            <P className="text-sm leading-relaxed text-white">
              Ready to see the unified difference? Explore our platform in detail and discover how a seamless workflow can transform your practice. Check How We Work. 
            </P>
          </div>

          <div className="flex justify-end p-4 border-t border-white">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#166D48]">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Heading */}
      <div className="flex justify-end ">
        <H2 className="text-[#31694E]  pr-10 font-normal text-right leading-tight ">
        Our Four Pillars of Unified Practice Management 
        </H2>
      </div>

    </div>

    {/* FEATURE GRID */}
    <div ref={sectionRef} className="relative mt-16 mx-10 lg:mt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {card.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col space-y-4 lg:min-h-[300px]"
          >
            <div className="w-16 h-16 rounded-full bg-[#B4E7CE]" />

            <H4 className="text-gray-800">
              {item.title}
            </H4>

            <P className=" pr-4 leading-relaxed">
              {item.desc}
            </P>

            {index !== 3 && (
              <div
                className="absolute top-0 right-0 w-[2px] bg-[#166D48] hidden xl:block"
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

export default Testimonial;
