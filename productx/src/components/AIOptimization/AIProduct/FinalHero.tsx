import React, { useEffect, useState } from "react";
import { H1, P } from "../../../styles/Typography";
import { ContactUs, ContactUsAI } from "../../../styles/Button";

const FinalHero: React.FC = () => {
   const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 400; // Same value as ImageContainer
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity: starts at 1, decreases to 0
  const opacity = 1 - scrollProgress;

  return (
    <section className="relative  overflow-hidden"  style={{ opacity }}>
      {/* Background */}
       
        {/* Overlay (optional for contrast) */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        {/* Content */}
       <div className="relative  lg:pt-36 xl:pt-32 z-10 mx-10 max-w-8xl xl:px-10 py-20 
                flex flex-col items-center justify-center  ">

         
            <div className=" tetx-center ">
              <H1 className=" text-[#0AC276] text-center pt-10 leading-tight">
                Lorem ipsum dolor sit
                <span className=" text-white block">
                  amet, consectetur
                </span>
              </H1>

              <P className="mt-6 max-w-2xl xl:ml-10  text-center text-white/90">
               Lorem ipsum dolor sit amet, consectetur adipiscing Lorem 
dolor sit amet, consectetur adipiscing  Lorem ipsum dolor 
              </P>

              <div className="mt-8    flex flex-flex-row   gap-4 justify-center">
              <ContactUs>Request A Demo</ContactUs>

               <ContactUsAI>Login </ContactUsAI>
              </div>
            </div>

            
          </div>
       
      
 
    </section>
  );
};

export default FinalHero;
