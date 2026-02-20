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
    ["100%", "58%"]
  );

  // Smoother transitions
  const mobileImageScale = useTransform(
    scrollYProgress,
    [0.2, 0.8], 
    [1, 0.95]
  );

  const mobileImageOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    [0.8, 1]
  );

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
  
  const textScale = useTransform(
    scrollYProgress,
    [0.4, 0.8],
    [0.95, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[180vh] lg:h-[250vh] bg-white"
    >
      <div className="sticky top-0  xl:h-screen overflow-hidden">
        <div className="relative w-full h-full">
          
          <div className="hidden lg:flex items-center w-full xl:h-full">
            <motion.img
              src="/Audit.png"
              alt="Audit"
              className="object-cover h-[400px] md:h-[500px] lg:h-[600px]"
              style={{ width: imageWidth, maxWidth: "100%" }}
            />
            
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute bottom-0 xl:bottom-16 right-10 w-[35%]"
            >
              <H3 className="text-[#2B68C3] font-bold mb-3">Banking operations and compliance   </H3>
              <P className="text-[#141414]  max-w-md lg:mb-10 xl:mb-0">
              Our team includes practitioners from global and regional banks with direct experience in AML, CDD, and financial crime risk management. 
              </P>
            </motion.div>
          </div>

          {/* Improved Mobile Animation */}
          <div className="flex lg:hidden flex-col justify-start h-full pt-10 px-4">
            <motion.div
              style={{ 
                scale: mobileImageScale,
                opacity: mobileImageOpacity,
                originX: 0.5,
                originY: 0.5
              }}
              className="w-full max-w-md mx-auto"
            >
              <img
                src="/Audit.png"
                alt="Audit"
                className="w-full h-[280px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              style={{ 
                opacity: textOpacity, 
                y: textY,
                scale: textScale
              }}
              className="mt-8 px-4 mx-auto w-full max-w-full text-left"
            >
              <H3 className="text-[#2B68C3] font-bold mb-3">
            Banking operations and compliance 
              </H3>
              <P className="text-[#141414] mb-10">
                 Our team includes practitioners from global and regional banks with direct experience in AML, CDD, and financial crime risk management. 
              </P>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


