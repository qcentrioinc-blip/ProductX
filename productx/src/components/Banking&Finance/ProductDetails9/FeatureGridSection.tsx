import React from "react";
import { H2, H4, P } from "../../../styles/Typography";

const cards = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
];

const FeatureGridSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">

        {/* Left: Heading */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <H2 className="text-[#8A0032] leading-snug mb-6 text-2xl lg:text-3xl xl:text-4xl">
            Sed ut perspiciatis Sed ut perspiciatis Sed ut perspiciatis Sed ut perspiciatis
          </H2>
        </div>

        {/* Right: Cards */}
        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-items-center">

          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[#F3F3F3] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200
                flex flex-col p-6 sm:p-5 items-start
                w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[310px] xl:max-w-[350px]
                h-[260px] sm:h-[280px] md:h-[300px] lg:h-[330px] xl:h-[360px]
                overflow-hidden
              "
            >
              {/* Icon Placeholder */}
              <div className="w-8 h-8 md:w-14 md:h-14 sm:w-10 sm:h-10 rounded-full bg-gray-400 mb-4 flex items-center justify-center text-white font-bold"></div>

              <H4 className="mb-2">
                {card.title}
              </H4>

              <P className="leading-relaxed line-clamp-5">
                {card.description}
              </P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
