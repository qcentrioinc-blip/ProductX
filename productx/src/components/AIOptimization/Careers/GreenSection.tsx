import {  H2, H3 } from "../../../styles/Typography";

export default function GreenSection() {
  return (
    <section className="w-full bg-[#0AC276] py-16 px-6 xl:pl-30">
      <div className="max-w-8xl mx-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left small heading */}
        <H3
         className="text-white text-sm font-medium">
          *Interested
        </H3>

        {/* Right main text */}
        <H2
         className="text-[#020059] ">
          Want to work with the
          best and for the best? Of
          course you.
        </H2>

      </div>
    </section>
  );
}
