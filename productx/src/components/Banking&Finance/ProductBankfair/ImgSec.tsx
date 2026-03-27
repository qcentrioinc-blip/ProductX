"use client";

import { H1, P } from "../../../styles/Typography";

const ImgSec = () => {
  return (
    <section className="w-full py-6">

      {/* ================= MOBILE DESIGN ================= */}
      <div className="block md:hidden px-4">

        {/* Title */}
        <H1 className=" text-[#2B68C3] leading-snug mb-6">
          Transform Your Bank with Bankfair
        </H1>

        {/* Image */}
        <img
          src="/ProductBankfair/CTA1.webp"
          alt="section image"
          className="w-full h-100 rounded-xl mb-6"
        />

        {/* Left Text */}
        <div className="mb-4">
          <P className="leading-relaxed">
            See firsthand how parameterization eliminates manual work and
            accelerates product launches for your institution.
          </P>
        </div>

        {/* Right Text */}
        <div className="bg-gray-100 p-4 rounded-xl">
          <P className=" leading-relaxed">
            Book a personalized demo to explore automation, compliance features,
            and multi-branch scalability.
          </P>
        </div>

      </div>

      {/* ================= TABLET & DESKTOP (UNCHANGED) ================= */}
      <div className="hidden md:block w-full">
        <img
          src="/ProductBankfair/CTA.webp"
          alt="section image"
          className="w-full h-auto object-cover"
        />
      </div>

    </section>
  );
};

export default ImgSec;