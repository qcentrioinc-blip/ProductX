"use client";

import { H1, P } from "../../../styles/Typography";

export default function ExperienceSection() {
  return (
    <section className="w-full bg-[#020059] py-20 ">
      <div className=" text-white">

        {/* -------------------------------------------------- */}
        {/* TOP TEXT CONTAINER (3 columns) */}
        {/* -------------------------------------------------- */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20 px-6 md:px-12 lg:px-24">

          <div>
            <H1 className="text-[#0AC276]">150+</H1>
            <P className="opacity-80">
              Years of combined digital<br />travel technology experience
            </P>
          </div>

          <div>
            <H1 className="text-[#0AC276]">150+</H1>
            <P className="opacity-80">
              Years of combined digital<br />travel technology experience
            </P>
          </div>

          <div>
            <H1 className="text-[#0AC276]">150+</H1>
            <P className="opacity-80">
              Years of combined digital<br />travel technology experience
            </P>
          </div>

        </div>

        {/* -------------------------------------------------- */}
        {/* BOTTOM IMAGE CONTAINER (4 columns) */}
        {/* -------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* IMAGE 1 — ONLY TOP 50% VISIBLE */}
          <div className="w-full overflow-hidden rounded-lg shadow-lg ">
            <img
              src="/AI/Careers/img5.png"
              alt="img5"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* IMAGE 2 — STACKED (img6 + img7) */}
          <div className="grid grid-cols-1 gap-6">
            <img
              src="/AI/Careers/img6.png"
              alt="img6"
              className="w-full rounded-lg shadow-lg object-cover"
            />

            <img
              src="/AI/Careers/img7.png"
              alt="img7"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* IMAGE 3 — FULL image8 */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="/AI/Careers/img8.png"
              alt="img8"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 4 — ONLY TOP 50% VISIBLE (img9) */}
          <div className="w-full overflow-hidden rounded-lg shadow-lg ">
            <img
              src="/AI/Careers/img9.png"
              alt="img9"
              className="w-full h-full object-cover object-top"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
