import { H3, P } from "../../../styles/Typography";

export default function CTABanner() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-full mx-auto">
        <div className="relative w-full overflow-hidden bg-[#2B68C3] min-h-[220px] sm:min-h-[260px] lg:min-h-[500px] flex flex-col lg:flex-row">

          <div className="absolute top-0  left-0 lg:-left-20  w-[220px] h-[220px] lg:w-[500px] lg:h-full rounded-full  border-[14px] lg:border-[60px] border-[#4F8CE7] opacity-50 z-0" />

          {/* LEFT: Card */}
          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 w-full lg:w-3xl">
            <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 lg:absolute lg:left-52 lg:top-14">
              <img
                src="/LOS/CTA.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-fill"
              />
              <div className="relative p-7 sm:p-9">
                <H3 className="text-white font-bold leading-tight mb-4">
                  Ready to <br />Transform Your <br /> Loan Origination
                </H3>
                <P className="text-blue-200 text-sm leading-relaxed mb-5">
                  Schedule a demo to see how LOS digitizes applications, automates approvals, and enhances customer experience.
                </P>
                <hr className="border-white mb-5" />
                <button className="flex items-center gap-3 bg-white text-[#0F2557] font-bold text-sm px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <h3 className="font-bricolage">Explore LOS Today</h3>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile: hero image */}
          <div className="lg:hidden relative z-10 w-full h-[220px] sm:h-[280px]">
            <img
              src="/LOS/CTAHero.webp"
              alt="Team working on loan origination"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Mobile: simplify badge */}
          <div className="lg:hidden relative z-10 flex items-center gap-3 bg-white mx-4 mb-6 rounded-xl px-4 py-3 shadow-lg">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#0F2557] flex items-center justify-center">
              <img className="w-8 h-8" src="/LOS/Wrench.svg" />
            </div>
            <P className="text-[#0F2557] font-bold text-sm leading-snug">
              Simplify lending from application to disbursement.
            </P>
          </div>

          {/* RIGHT: Desktop image — untouched */}
          <div className="hidden lg:block relative z-10 flex-1">
            <div className="absolute pt-8 pb-2 inset-0 overflow-hidden">
              <img
                src="/LOS/CTAHero.webp"
                alt="Team working on loan origination"
                className="w-full h-full object-contain object-right"
              />
            </div>

            <div className="absolute bottom-2 right-0 z-20 flex items-center gap-3 max-w-full">
              <div className="flex flex-row">
                <div className="shrink-0 absolute top-0 -left-10 w-26 h-26 rounded-full bg-[#0F2557] flex items-center justify-center">
                  <img className="w-14 h-14" src="/LOS/Wrench.svg" />
                </div>
                <div className="bg-white py-2 rounded-l-4xl">
                  <h3 className="text-[#141414] pl-20 pr-10 font-bricolage text-[30px] font-bold text-sm leading-snug">
                    Simplify lending from<br />application to disbursement
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}