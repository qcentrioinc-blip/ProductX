import { ArrowUpRight } from "lucide-react";
import cta_img from "/CTA/img1.jpg";
import { H2 } from "../../../styles/Typography";

const CallToAction = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-black via-[#01010c] to-[#000000] text-white overflow-hidden">
      <div
        className="
          max-w-8xl mx-auto
          px-4 sm:px-6 lg:px-12
          py-14 sm:py-20
          flex flex-col lg:flex-row
          items-center justify-between
          gap-12
        "
      >
        {/* LEFT — TEXT */}
        <div className="w-full lg:max-w-[700px] text-center lg:text-left">
          <H2>
            Sed ut perspiciatis unde omnis iste
          </H2>

          <p className="mt-4 sm:mt-6 mb-8 text-white/90 leading-relaxed">
            Nemo enim ipsam voluptatem olad voluptas sit aspernatur aut odit aut
            fugit, sed olad consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum olad dolor
            sit amet.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              inline-flex items-center gap-2
              px-6 py-3
              bg-white text-black
              font-semibold rounded-lg
              mx-auto lg:mx-0
              hover:bg-gray-200 transition
            "
          >
            EXPLORE ALL PRODUCTS
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative w-full lg:w-[600px] flex items-center justify-center">
          {/* GLOW */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="
                w-[280px] h-[280px]
                sm:w-[420px] sm:h-[420px]
                lg:w-[700px] lg:h-[700px]
                rounded-full
                bg-gradient-to-br from-[#0E25CB] to-[#3648d4]
                blur-[120px] sm:blur-[160px] lg:blur-[200px]
                opacity-70
              "
            />
          </div>

          {/* IMAGE */}
          <img
            src={cta_img}
            alt="CTA"
            className="
              relative
              w-[240px] h-[240px]
              sm:w-[320px] sm:h-[320px]
              md:w-[400px] md:h-[400px]
              lg:w-full lg:h-auto
              object-contain
              drop-shadow-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
