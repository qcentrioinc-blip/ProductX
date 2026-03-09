import { H2, H3, P } from "../../../styles/Typography";

const cards = [
  {
    title: "Banks",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt",
  },
  {
    title: "Banks",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt",
  },
  {
    title: "Banks",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt",
  },
];

const DetailCards = () => {
  return (
    <section className="w-full">

      {/* Hero Banner with BG Image */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[380px] xl:min-h-[480px] flex items-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#1A4FBB]/80" />

        {/* Text Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-24 pt-4 w-full xl:max-w-[55%]">
          <H2 className="text-white mb-4">
            Lorem ipsum dolor ,<br />
            consect adipis ipsum
          </H2>
          <P className="text-white/85 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </P>
        </div>
      </div>

      {/* Cards - overlap banner using negative margin, stays in normal flow */}
      <div className="relative z-10 -mt-16 px-4 md:px-8 lg:px-12 xl:px-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-300 shadow-md px-6 pt-8 pb-8 flex flex-col items-center text-center"
            >
              {/* Icon placeholder circle */}
              <div className="w-14 h-14 rounded-full bg-neutral-200 mb-5 flex-shrink-0" />

              {/* Title */}
              <H3 className="font-bold text-black mb-3">
                {card.title}
              </H3>

              {/* Description */}
              <P className="text-sm md:text-[15px] leading-relaxed">
                {card.description}
              </P>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default DetailCards;