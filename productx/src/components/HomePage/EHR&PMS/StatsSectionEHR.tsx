import {H2, P } from "../../../styles/Typography";

export default function StatsSectionEHR() {
  return (
    <section className="w-full bg-transparent text-white py-20 ">
      <div className="max-w-8xl mx-10 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start backdrop-blur-md bg-white/10 p-10 py-15 xl:py-30 rounded-xl">

          {/* LEFT SIDE */}
          <div>
            <H2 className="leading-tight text-[#04531A] ">
              Sed ut perspiciatis Unde 
              Seduo ut 
            </H2>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            <P className="leading-relaxed max-w-xl text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum, occaecat cupidatat non.
            </P>

            {/* STATS */}
            <div className="flex gap-10 md:gap-16 text-4xl md:text-5xl font-semibold font-bricolage">
              <span>25k</span>
              <span>5x</span>
              <span>85%</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
