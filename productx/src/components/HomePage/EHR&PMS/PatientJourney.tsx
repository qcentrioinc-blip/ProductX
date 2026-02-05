import { useEffect, useRef, useState } from "react";
import { H2, P } from "../../../styles/Typography";

const steps = [
  "Patient Registration",
  "Appointment Scheduling",
  "Check‑in, Self Check‑in and Triage",
  "Medical History, Allergies and Vitals",
  "Assessments, Progress Notes, E‑Rx and Labs",
  "Billing and Claims",
  "Patient Portal and Patient App",
  "HIPAA and Data Security",
  "Customizations and Integrations",
  "Analytics and Reports",
];

export default function PatientJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const scrolled = -rect.top;
      const totalScrollDistance = sectionHeight - viewportHeight;
      const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentStep = scrollProgress * 10;

  return (
    <> 
   <section
  ref={sectionRef}
  className="relative hidden xl:block bg-white z-30"
  style={{ height: "300vh" }}
>

      <div className="sticky top-0 h-[190vh] flex flex-col items-center overflow-hidden z-30 border-l-[30px] border-[#008280] bg-white">
        {/* Header - Fixed at top with spacing */}
        <div className="w-full pt-12   flex-shrink-0">
          <H2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-teal-600 text-center px-4 leading-tight">
            End to End Patient Journey,<br />Unified in One Platform
          </H2>
        </div>

        {/* Journey Path - Takes middle space with MORE VERTICAL GAP */}
        <div className="w-full flex-shrink-0  ">
          <div className="relative w-full max-w-8xl  px-4">
            <svg
              viewBox="0 0 1200 450"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Path - INCREASED VERTICAL GAP */}
              <path
              
  d="M 0 100 
     L 960 100 
     Q 1120 100 1120 200 
     Q 1120 300 960 300 
     L 80 300"
  stroke="#E5E7EB"
  strokeWidth="2"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
 

             
              />

              {/* Yellow Progress Path - INCREASED VERTICAL GAP */}
              <path
                d="M 0 100 
     L 960 100 
     Q 1120 100 1120 200 
     Q 1120 300 960 300 
     L 80 300"
                stroke="#141414"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={1 - scrollProgress}
              />

              {/* Top Row Steps (1-5) */}
              {[0, 1, 2, 3, 4].map((index) => {
                const x = 80 + (index * 220);
                const y = 100;
                const isActive = currentStep >= index;
                
                return (
                  <g key={index}>
                    <circle
                      cx={x}
                      cy={y}
                      r="26"
                      fill={isActive ? "#EEDA68" : "#FFFFFF"}
                      stroke={isActive ? "#EEDA68" : "#D1D5DB"}
                      strokeWidth="4"
                    />
                    
                    <text
                      x={x}
                      y={y + 8}
                      textAnchor="middle"
                      fontSize="20"
                      fontWeight="700"
                      fill={isActive ? "#000000" : "#9CA3AF"}
                    >
                      {index + 1}
                    </text>
                    
                    {/* TOP ROW - Text BELOW circle */}
                    <foreignObject
                      x={x - 85}
                      y={y + 40}
                      width="170"
                      height="80"
                    >
                      <div className="flex items-start justify-center w-full h-full">
                        <P
                          className="text-center text-sm font-semibold leading-tight"
                          style={{
                            color: isActive ? "#111827" : "#9CA3AF"
                          }}
                        >
                          {steps[index]}
                        </P>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              {/* Bottom Row Steps (6-10) - Text BELOW circles like top row */}
              {[5, 6, 7, 8, 9].map((index) => {
                const reverseIndex = 9 - index;
                const x = 80 + (reverseIndex * 180);
                const y = 300; // Bottom row position
                const isActive = currentStep >= index;
                
                return (
                  <g key={index}>
                    <circle
                      cx={x}
                      cy={y}
                      r="26"
                      fill={isActive ? "#EEDA68" : "#FFFFFF"}
                      stroke={isActive ? "#EEDA68" : "#D1D5DB"}
                      strokeWidth="4"
                    />
                    
                    <text
                      x={x}
                      y={y + 8}
                      textAnchor="middle"
                      fontSize="20"
                      fontWeight="700"
                      fill={isActive ? "#000000" : "#9CA3AF"}
                    >
                      {index + 1}
                    </text>
                    
                    {/* BOTTOM ROW - Text BELOW circle (same as top row) */}
                    <foreignObject
                      x={x - 85}
                      y={y + 40}
                      width="170"
                      height="80"
                    >
                      <div className="flex items-start justify-center w-full h-full">
                        <P
                          className="text-center text-sm font-semibold leading-tight"
                          style={{
                            color: isActive ? "#111827" : "#9CA3AF"
                          }}
                        >
                          {steps[index]}
                        </P>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        
        {/* Bottom Image - Fixed at bottom of sticky container */}
     <img
            src="/Physician/PatientJourney.webp"
            alt="Patient using laptop"
            className="w-full absolute -bottom-60 h-full   object-contain "
            
          />
         
      </div>
      
        
    </section>


    <div className="xl:hidden bg-white px-4 py-16">
  {/* Header */}
  <H2 className="text-2xl sm:text-3xl font-semibold text-teal-600 text-center mb-10  ">
    End to End Patient Journey,<br />Unified in One Platform
  </H2>

  {/* Steps */}
  <div className="max-w-xl mx-auto space-y-6">
    {steps.map((step, index) => (
      <div
        key={index}
        className="flex items-start gap-4 border border-gray-200 rounded-xl p-4"
      >
        <div className="w-10 h-10 rounded-full bg-[#EEDA68] flex items-center justify-center font-bold">
          {index + 1}
        </div>
        <P className=" font-medium">
          {step}
        </P>
      </div>
    ))}
  </div>

  {/* Image */}
  <div className=" ">
    <img
      src="/Physician/PatientJourney.webp"
      alt="Patient using laptop"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>

    </>
  );
}