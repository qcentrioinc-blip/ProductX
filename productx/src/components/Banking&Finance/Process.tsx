import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { H2, H3, P } from '../../styles/Typography';

type ProcessStepProps = {
    step: string;
    title: string;
    description: string;
};


const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => {
  return (
    <div
      className="w-[400px] sm:w-[500px] lg:w-[600px]
 flex-shrink-0 flex flex-col items-center"
      style={{ fontFamily: "Bricolage Grotesque" }}
    >
      {/* Step Circle */}
      <div className="relative  z-10 p-1 rounded-full">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm lg:text-lg">
          {step}
        </div>
      </div>
  <div className="w-full flex justify-start xl:pl-52">
      {/* Title */}
      <H3
        className="mt-6 font-semibold   "
        
      >
        {title}
      </H3>
      </div>

    
     {/* Description */}
<div className="mt-4 w-full xl:max-w-md xl:ml-66 flex justify-end">
       <P className="text-gray-600 text-justify ">
      {description}
    </P>
 
</div>

    </div>
  );
};

const Process = () => {
  const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
const [scrollWidth, setScrollWidth] = useState(0);
    // Use useScroll hook
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
useEffect(() => {
  if (trackRef.current && containerRef.current) {
    const totalWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const horizontalScrollDistance = totalWidth - viewportWidth;

    setScrollWidth(horizontalScrollDistance);
  }
}, []);
    // Transform scroll progress - Desktop keeps same
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    const steps = [
        {
            step: "STEP 1",
            title: "Requirements Discovery ",
            description: "We assess your operations, workflows, and compliance needs. Our team identifies gaps and opportunities. We document your goals and define success metrics for implementation.  ",
        },
        {
            step: "STEP 2",
            title: "Solution Design",
            description: "We design tailored architecture including product parameters, workflows, and core system integrations. Our team maps data migration and ensures regulatory and business alignment.  ",
        },
        {
            step: "STEP 3",
            title: "Easy Configuration",
            description: "Our experts configure products, rules, user roles, and privileges. We set transaction parameters and exceptions. The system matches your workflows without requiring custom code changes.  ",
        },
        {
            step: "STEP 4",
            title: "Testing & Validation",
            description: "We test transaction processing, compliance checks, and reporting accuracy. Your team validates against real-world scenarios. All issues are addressed before go-live. ",
        },
        {
            step: "STEP 5",
            title: "Deployment & Support",
            description: "We manage go-live with minimal disruption, provide training, and offer ongoing support. Our team monitors performance and assists with optimization and scaling.   ",
        },
    ];

    return (
        <>
        <div className="hidden xl:block">
  <div className=" font-sans" id='our-process'>
            {/* Container with section height for scroll tracking */}
            <div
                ref={containerRef}
                className="relative bg-[#EFEFEF]   "style={{ height: `${scrollWidth + window.innerHeight}px` }}
            >

                {/* Sticky container */}
                {/* <div className="sticky top-0 h-[50vh] sm:h-[60vh] lg:h-[100vh] flex items-start pt-[20vh] ">
                 */}
                 <div className="sticky top-0 h-[80vh] flex items-center pt-[20vh] ">

                    {/* Header section - Responsive positioning */}
                    <div className="absolute top-10 left-0 right-0 flex-none z-20">
                        <div className="container mx-auto px-4 sm:px-6">
                            <div className="text-center">
                                <H2
                                    className='text-blue-500'
                                  
                                >
                                   Our Implementation Process
                                </H2>
                                
                            </div>
                        </div>
                    </div>

                    {/* Horizontal scroll section */}
                    <div className="flex-1 flex items-start justify-start overflow-hidden w-full pt-10 sm:pt-16 md:pt-6">

                        <motion.div
                         ref={trackRef}
                            style={{ x }}
                            className="relative flex gap-x-4 sm:gap-x-6 md:gap-x-10 lg:gap-x-0 pl-4 sm:pl-6 md:pl-8 xl:pl-0"
                        >
                            {/* Dotted line - Responsive positioning */}
                          <div className="absolute top-9 sm:top-[44px] md:top-12 lg:top-[52px] 
left-16 sm:left-[84px] md:left-24 lg:left-[100px] 
xl:left-[325px] 
w-[250vw] sm:w-[220vw] lg:w-[180vw] xl:w-[155vw] 
h-px z-0">
  <div className="border-t-2 border-dotted border-gray-300 w-full"></div>
</div>

                            {/* Process steps */}
                            {steps.map((item) => (
                                <ProcessStep
                                    key={item.step}
                                    step={item.step}
                                    
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
</div>
<div className="block xl:hidden bg-[#EFEFEF] py-8 xl:py-10 px-6">
  <div className="max-w-2xl mx-auto">
    <H2 className="text-blue-500 text-center mb-12">
      Our Implementation Process
    </H2>

    <div className="relative   pl-16 space-y-8">
      {steps.map((item, index) => (
        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Circle */}
          <div className="absolute -left-[64px] top-1 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-md">
            {item.step}
          </div>

          {/* Content */}
          <div className='flex flex-col  lg:pl-2 items-start '>
            <H3 className="my-4 lg:my-2  font-semibold">
              {item.title}
            </H3>
            <P className="text-gray-600">
              {item.description}
            </P>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>
</>
       
    );
};

export default Process;
