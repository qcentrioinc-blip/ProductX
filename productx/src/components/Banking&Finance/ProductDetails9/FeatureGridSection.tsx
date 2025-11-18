import React from "react";
import { H2, H4, P } from "../../../styles/Typography";

const cards = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. cillum dolore eu cillum dolore rwdqdbg swbd duwjn",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.cillum dolore eu cillum dolore ",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cillum dolore eu cillum dolore ",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum cillum dolore eu cillum dolore r.cillum dolore eu cillum dolore ",
  },
];

const FeatureGridSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-5 md:px-8 lg:px-10 xl:px-32">
      <div
        className="
          max-w-7xl mx-auto 
          flex flex-col 
          xl:flex-row 
          justify-between 
          gap-12
        "
      >
        {/* Left: Heading */}
        <div className="w-full xl:w-1/2 flex flex-col justify-start">
          <H2 className="text-[#2B68C3] leading-snug mb-6 text-2xl lg:text-3xl xl:text-4xl">
            Sed ut perspiciatis Sed ut perspiciatis Sed ut perspiciatis Sed ut perspiciatis
          </H2>
        </div>

        {/* Right: Cards */}
        <div
          className="
            w-full xl:w-1/2 
            grid 
            grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
            xl:grid-cols-2 
            gap-6 md:gap-8 xl:gap-6 
            justify-items-stretch
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-[#F3F3F3] 
                rounded-md 
                shadow-sm 
                hover:shadow-md 
                transition-shadow 
                duration-200 
                flex 
                flex-col 
                p-6 
                w-full 
                h-auto
              "
            >
              {/* Icon Placeholder */}
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#2B68C3] mb-4 flex items-center justify-center text-white font-bold" />

              <H4 className="mb-2">{card.title}</H4>

              <P className="leading-relaxed">{card.description}</P>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeatureGridSection;
