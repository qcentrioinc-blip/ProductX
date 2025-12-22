import { H2, H3, P } from "../../../styles/Typography";
import { useLocation } from "react-router-dom";

export default function SplitFeature() {
  const { pathname } = useLocation();

  const pageConfig: Record<
    string,
    {
      sectionBg: string;
      headingPrimary: string;
      headingSecondary: string;
      paragraph: string;
      bullet: string;
      stats: string;
      imageSrc: string;
    }
  > = {
    "/industries/banking-and-finance/built-for": {
      sectionBg: "bg-white",
      imageSrc: "/BuiltFor/img2.png",
      headingPrimary: "text-[#2B68C3]",
      headingSecondary: "text-[#2A2A2A]",
      paragraph: "text-[#141414]",
      bullet: "bg-[#2B68C3]",
      stats: "text-[#2A2A2A]",
    },

    "/industries/ehr-and-pms/built-for": {
      sectionBg: "bg-[#166D48]",
      imageSrc: "/BuiltFor/img2.png",
      headingPrimary: "text-[#F5F5F5]",
      headingSecondary: "text-[#F5F5F5]",
      paragraph: "text-[#CCCCCC]",
      bullet: "bg-[#2B68C3]",
      stats: "text-[#F5F5F5]",
    },

    "/industries/high-tech/built-for": {
      sectionBg: "bg-[#230053]",
      imageSrc: "/BuiltFor/img2.png",
      headingPrimary: "text-[#F5F5F5]",
      headingSecondary: "text-[#F99526]",
      paragraph: "text-[#CCCCCC]",
      bullet: "bg-[#2B68C3]",
      stats: "text-[#F99526]",
    },

    "/industries/ai-optimization/built-for": {
      sectionBg: "bg-[#0AC276]",
      imageSrc: "/BuiltFor/img2.png",
      headingPrimary: "text-[#F5F5F5]",
      headingSecondary: "text-[#F5F5F5]",
      paragraph: "text-[#CCCCCC]",
      bullet: "bg-[#7C3AED]",
      stats: "text-[#F5F5F5]",
    },
  };

  const config =
    pageConfig[pathname] ||
    pageConfig["/industries/banking-and-finance/built-for"];

  return (
    <section className={`w-full py-16 px-6 ${config.sectionBg}`}>
      <div className="max-w-8xl mx-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={config.imageSrc}
            alt="Feature"
            className="w-full max-w-xl rounded-2xl object-cover shadow-sm"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full text-center lg:text-left mx-auto lg:mx-0">

          {/* HEADING */}
          <H2 className="leading-tight xl:mb-10 max-w-xl">
            <span className={`${config.headingPrimary}`}>Sed ut perspic iatis </span>
            <span className={`${config.headingSecondary}`}>Unde Seduo</span>
          </H2>

          {/* PARAGRAPH */}
          <P className={`mt-4 max-w-md mx-auto lg:mx-0 ${config.paragraph}`}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </P>

          {/* BULLETS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 justify-items-center lg:justify-items-start">
            {[1, 2].map((col) => (
              <div key={col} className="space-y-4">
                {[1, 2].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-center lg:justify-start gap-3"
                  >
                    <span className={`w-6 h-6 rounded-full ${config.bullet}`}></span>
                    <P className={`${config.paragraph}`}>Duis aute irure dolor</P>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              <H3 className={`${config.stats}`}>200+</H3>
              <P className={`mt-2 ${config.paragraph}`}>Duis aute irure dolor</P>
            </div>

            <div>
              <H3 className={`${config.stats}`}>30k</H3>
              <P className={`mt-2 ${config.paragraph}`}>Duis aute irure dolor</P>
            </div>

            <div>
              <H3 className={`${config.stats}`}>10+</H3>
              <P className={`mt-2 ${config.paragraph}`}>Duis aute irure dolor</P>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
