"use client";

import { H1, H4, P } from "../../../styles/Typography";

export default function BloomHero() {
  return (
    <section className="relative w-full h-screen pt-16  overflow-hidden text-white">

      {/* 🎥 Background Video (plays only once) */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "65% center" }}
      >
        <source src="/AIVIDEO1.mp4" type="video/mp4" />
      </video>

      {/* MAIN CONTENT */}
      <div className="relative z-10 h-full flex items-stretch px-4 md:px-6 py-5  gap-60 max-w-[1440px] mx-auto">

        {/* LEFT PANEL */}
        <div className="w-[40%] flex items-stretch">
          <div
            className="w-full flex flex-col items-center justify-center text-center rounded-[24px] border border-white/15 p-8 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
            }}
          >

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img width="200" height="200" src="/QnestLogo.svg" />
            </div>

            {/* Heading */}
            <H1 className="mb-7 tracking-tight">
              Innovating the{" "}
              
              <br />
              of Cloud Finops AI
            </H1>

            {/* Button */}
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/25 bg-white/10 hover:bg-white/15 transition mb-6 text-sm font-medium">
              Explore Now
              <span className="w-7 h-7 rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-xs">
                ↓
              </span>
            </button>

            {/* Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["Artistic Gallery", "AI Generation", "3D Structures"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm rounded-full border border-white/20 bg-white/8 text-white/80 hover:bg-white/15 transition"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10">
              <P className="text-[10px] tracking-[0.2em] text-white/50 uppercase mb-2">
                Visionary 
              </P>

              <P className="italic text-white/90">
                We <em className="font-semibold not-italic">imagined</em> a realm
                with <em className="font-semibold italic">no ending.</em>
              </P>

              <P className="text-[10px] tracking-[0.15em] text-white/40 mt-1 uppercase">
                — Lorum Ipsum
              </P>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[40%] flex flex-col justify-between py-2 gap-4">

          {/* Top Card */}
          <div className="flex justify-end">
            <div
              className="rounded-[20px] border border-white/15 p-6 w-[260px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(5px)",
              }}
            >
              <H4 className="mb-2 leading-tight">
                Enter our <br /> ecosystem
              </H4>

              <P className="text-white/60">
                Join 10,000+ plant enthusiasts and designers in our growing
                community.
              </P>
            </div>
          </div>

          {/* Bottom Card */}
          <div
            className="rounded-[24px] border border-white/15 p-6 flex flex-col gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(5px)",
            }}
          >

            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-[16px] border border-white/15 p-6 "
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(5px)",
              }}>
                <P className="font-semibold mb-1 text-white">Processing</P>
                <P className="text-white/55">
                  AI-powered plant generation and design tools
                </P>
              </div>

              <div className="rounded-[16px] border border-white/15 p-6 "
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(5px)",
              }}>
                <P className="font-semibold mb-1 text-white">Growth Archive</P>
                <P className="text-white/55">
                  Comprehensive library of botanical knowledge
                </P>
              </div>

            </div>

            {/* Bottom Row */}
            <div className="rounded-[16px] border border-white/15 p-6 flex items-center gap-4 "
            style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(5px)",
              }}>

              <div className="w-[68px] h-[68px] rounded-[12px] border border-white/10 flex items-center justify-center">
                🌱
              </div>

              <div className="flex-1">
                <P className="font-semibold mb-1 text-white">
                  Advanced Plant Sculpting
                </P>
                <P className="text-white/55">
                  Transform ideas into stunning floral arrangements.
                </P>
              </div>

              <div className="w-8 h-8 flex items-center justify-center border border-white/25 rounded-full bg-white/10">
                +
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}