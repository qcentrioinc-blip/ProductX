"use client";

import { H1, H4, P } from "../../../styles/Typography";
import { HoverExpand } from "./HoverExpand";

export default function BloomHero2() {
  return (
    <section className="relative w-full min-h-screen pt-16 overflow-hidden text-white">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "65% center" }}
      >
        <source src="/AIVIDEO.mp4" type="video/mp4" />
      </video>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col xl:flex-row items-stretch px-4 md:px-6 py-5 xl:pt-[100px] gap-6 xl:gap-60 max-w-[1440px] mx-auto">

        {/* LEFT PANEL */}
        <div className="w-full xl:w-[40%] flex items-stretch">
          <div
            className="w-full flex flex-col items-center justify-center text-center rounded-[24px] border border-white/15 p-6 md:p-8 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
            }}
          >
            {/* Heading */}
            <H1 className="mb-6 tracking-tight">
              Innovating the{" "}
              <br />
              Cloud Finops AI
            </H1>

            {/* Image */}
            <div className="w-full rounded-[16px] overflow-hidden">
              <HoverExpand
                src="/dashboard.jpg"
                alt="Cloud Finops AI"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full xl:w-[40%] flex flex-col justify-between py-2 gap-4">

          {/* Top Card */}
          <div className="flex justify-end">
            <div
              className="rounded-[20px] border border-white/15 p-6 w-full sm:w-[260px]"
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
            className="rounded-[24px] border border-white/15 p-4 md:p-6 flex flex-col gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(5px)",
            }}
          >
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                className="rounded-[16px] border border-white/15 p-4 md:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <P className="font-semibold mb-1 text-white">Processing</P>
                <P className="text-white/55">
                  AI-powered plant generation and design
                </P>
              </div>

              <div
                className="rounded-[16px] border border-white/15 p-4 md:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <P className="font-semibold mb-1 text-white">Growth Archive</P>
                <P className="text-white/55">
                  Comprehensive library of botanical knowledge
                </P>
              </div>
            </div>

            {/* Bottom Row */}
            <div
              className="rounded-[16px] border border-white/15 p-4 md:p-6 flex items-center gap-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(5px)",
              }}
            >
              <div className="w-[56px] h-[56px] md:w-[68px] md:h-[68px] rounded-[12px] border border-white/10 flex items-center justify-center shrink-0 text-2xl">
                🌱
              </div>

              <div className="flex-1 min-w-0">
                <P className="font-semibold mb-1 text-white">
                  Advanced Plant Sculpting
                </P>
                <P className="text-white/55">
                  Transform ideas into stunning floral arrangements.
                </P>
              </div>

              <div className="w-8 h-8 flex items-center justify-center border border-white/25 rounded-full bg-white/10 shrink-0">
                +
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}