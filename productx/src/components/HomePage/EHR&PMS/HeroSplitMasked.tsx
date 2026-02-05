import { useState } from "react";
import { ContactUsEHR } from "../../../styles/Button";
import { H2, P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const HeroSplitMasked = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white  py-10 px-4 ">
        <div className="max-w-8xl xl:mx-10 grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <H2 className="text-[#008280]">
              The Proven Impact for Modern Practices
            </H2>

            <P className="  leading-normal tracking-normal text-[#2A2A2A] max-w-2xl ">
              Unified Clinicapp is engineered for the realities of daily healthcare delivery. By integrating clinical, administrative, and patient workflows onto a single platform, we eliminate the friction of juggling multiple systems.
            </P>

            <P className=" leading-normal tracking-normal text-[#2A2A2A]  max-w-2xl ">
              Our solution directly translates into measurable outcomes: faster patient throughput, reduced administrative burden, and a stronger financial foundation, all while enhancing the quality of care.
            </P>

            <ContactUsEHR onClick={() => setDrawerOpen(true)}>See Results</ContactUsEHR>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center  ">

            {/* MASKED IMAGE */}
            <img
              src="/EHRIcons/SplitMasked.webp"
              alt="Hero visual"
              className="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[550px]"
              loading="lazy"
            />

            {/* TOP CARD */}
            {/* <div className="absolute top-0  right-18 md:right-48 lg:right-60 xl:right-20 bg-[#EEDA68]  rounded-2xl xl:rounded-4xl w-24 h-24 md:w-34 md:h-32 lg:w-48 lg:h-48  xl:w-54 xl:h-52 flex flex-col items-center justify-center shadow-md">
              <div className="w-6 h-6 xl:w-14 xl:h-14 bg-[#F5F5F5] rounded-full  " />
              <P className=" xl:pt-2 pl-4 md:pl-6 xl:pl-0 font-medium">Clinical Confidence </P>
            </div> */}

            {/* BOTTOM CARD */}
            {/* <div className="absolute  bottom-0 left-16 md:left-48 lg:left-60 xl:left-16 bg-[#008280]  rounded-2xl xl:rounded-4xl w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-54 xl:h-52 flex flex-col items-center justify-center shadow-md">
               <div className="w-6 h-6 xl:w-14 xl:h-14 bg-[#F5F5F5] rounded-full  " />
                  <P className=" xl:pt-2 pl-4 md:pl-6 xl:pl-0 font-medium">Operational Efficiency </P>
            </div> */}

          </div>


        </div>
      </section>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default HeroSplitMasked;
