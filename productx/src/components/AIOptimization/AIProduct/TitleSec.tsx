import React from "react";
import { H1, P } from "../../../styles/Typography";
import { ContactUs, ContactUsAI } from "../../../styles/Button";

const TitleSec: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-green-300">

      {/* CONTENT SECTION */}
      <section className="relative z-20 pt-36 pb-24 ">
        <div className="mx-6 max-w-8xl xl:px-10 flex flex-col items-center text-center">

          <H1 className="text-[#0AC276] leading-tight">
            Cloud Financial Optimization
            <span className="block text-white">
              Smarter, Faster, Simpler.
            </span>
          </H1>

          <P className="mt-6 max-w-2xl mx-auto text-white/90">
            CloudDIET profiles, analyzes, and optimizes your Azure, AWS, and Google Cloud spend,
            ensuring faster ROI with guaranteed savings and no data access.
          </P>

          <div className="mt-8 flex gap-4 justify-center">
            <ContactUs>Request A Demo</ContactUs>
            <ContactUsAI>Login</ContactUsAI>
          </div>

        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="relative flex justify-center items-center pb-28">
        <div className="w-[90%] md:w-[80%] xl:w-[70%]">
          <img
            src="/AIProduct/DataImage.png"
            alt="Analytics dashboard"
            className="w-full h-auto object-contain rounded-xl shadow-2xl"
          />
        </div>
      </section>

    </div>
  );
};

export default TitleSec;
