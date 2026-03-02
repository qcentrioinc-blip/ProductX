"use client";


import { Link } from "react-router-dom";
import { H2, P } from "../../../styles/Typography";


export default function ImgSec() {
  return (
    <section className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
      <div
        className="relative overflow-hidden rounded-[32px] min-h-[320px] flex items-center"
        style={{
          backgroundImage: "url('/digital.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text visibility (optional but recommended) */}
        {/* <div className="absolute inset-0 bg-black/20 rounded-[32px]" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-8 md:px-16 py-16 text-white">
          <H2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Digital Growth for <br />
            All Sectors
          </H2>

          <P className="text-sm md:text-base text-white/90 mb-8 max-w-lg">
            We speak with your teams to learn goals, issues, industry
            needs in detail. We speak with your teams to learn goals,
            issues.
          </P>

          <Link to="/contact">
            <button className="group flex cursor-pointer items-center gap-2 border border-white/70 text-white px-6 py-3 rounded-xl text-sm hover:bg-white hover:text-black transition-all duration-300">
              CONTACT US
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                ↗
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}