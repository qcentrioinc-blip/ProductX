"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {   H3,   P } from "../../styles/Typography";

export default function AuditAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["100%", "65%"]
  );

  // Smoother transitions
  // const mobileImageScale = useTransform(
  //   scrollYProgress,
  //   [0.2, 0.8], 
  //   [1, 0.95]
  // );

  // const mobileImageOpacity = useTransform(
  //   scrollYProgress,
  //   [0.1, 0.3],
  //   [0.8, 1]
  // );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [0, 1]
  );

  const textY = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    [60, 0]
  );
  
  // const textScale = useTransform(
  //   scrollYProgress,
  //   [0.4, 0.8],
  //   [0.95, 1]
  // );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-full xl:h-[250vh] bg-white"
    >
      <div className="sticky top-0    overflow-hidden">
        <div className="relative w-full h-full">
          
          <div className="hidden xl:flex items-start    w-full xl:h-full">
            <motion.img
              src="/AuditAnimate.webp"
              alt="Audit"
              
              className="object-cover h-[400px] md:h-[500px] lg:h-[700px] mt-0"
              style={{ width: imageWidth, maxWidth: "100%" }}
            />
            
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute bottom-0 xl:bottom-16 right-10 w-[30%]"
            >
              <H3 className="text-[#2B68C3] font-bold mb-3">Domain experts in managing banking operations and compliance    </H3>
              <P className="text-[#141414]  max-w-lg lg:mb-10 xl:mb-6">
             Our team includes practitioners from global and regional banks with direct experience in AML, CDD, and financial crime risk management. They have led functions at leading MNC banks and dealt with regulators worldwide. 
              </P>
                <P className="text-[#141414]  max-w-lg lg:mb-10 ">This firsthand domain expertise ensures our solutions address real operational challenges faced by financial institutions daily.Unlike typical technology vendors, we understand banking from the inside out. </P>
                  {/* <P className="text-[#141414]  max-w-lg lg:mb-10 xl:mb-6">Our practitioners have managed complex AML operations, designed compliance workflows, and implemented risk frameworks across multiple jurisdictions. </P> */}
              <P className="text-[#141414]  max-w-lg lg:mb-10 xl:mb-0"> This deep industry knowledge informs every product we build. When you work with Qnest, you gain access to decades of collective banking experience dedicated to solving your most pressing operational and regulatory challenges.</P>
            </motion.div>
          </div>

          {/* Improved Mobile Animation */}
          <div className="flex xl:hidden flex-col justify-start h-full  ">
            <motion.div
              // style={{ 
              //   scale: mobileImageScale,
              //   opacity: mobileImageOpacity,
              //   originX: 0.5,
              //   originY: 0.5
              // }}
              className="w-full  mx-auto"
            >
              <img
                src="/AuditAnimate.webp"
                alt="Audit"
                className="w-full h-full lg:h-[500px]  "
              />
            </motion.div>

            <motion.div
              // style={{ 
              //   opacity: textOpacity, 
              //   y: textY,
              //   scale: textScale
              // }}
              className="mt-8 px-4 mx-auto w-full max-w-full text-left"
            >
              <H3 className="text-[#2B68C3] font-bold mb-3">
           Domain experts in managing banking operations and compliance 
              </H3>
     <P className="text-[#141414]  max-w-full  lg:mb-10  mb-4 xl:mb-6">This firsthand domain expertise ensures our solutions address real operational challenges faced by financial institutions daily.Unlike typical technology vendors, we understand banking from the inside out. </P>
                  <P className="text-[#141414]  max-w-full  lg:mb-10 mb-4 xl:mb-6">Our practitioners have managed complex AML operations, designed compliance workflows, and implemented risk frameworks across multiple jurisdictions. </P>
              <P className="text-[#141414]  max-w-full  lg:mb-10 mb-4 xl:mb-0"> This deep industry knowledge informs every product we build. When you work with Qnest, you gain access to decades of collective banking experience dedicated to solving your most pressing operational and regulatory challenges.</P>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


