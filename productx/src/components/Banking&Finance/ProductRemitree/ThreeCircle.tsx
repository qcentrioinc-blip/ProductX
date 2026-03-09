// import React from "react";

// ── Card Data ─────────────────────────────────────────────────
const cards = [
  {
    title: "Duis aute irure",
    text: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su",
  },
  {
    title: "Duis aute irure",
    text: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su",
  },
  {
    title: "Duis aute irure",
    text: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su",
  },
];

// ── Single Card ───────────────────────────────────────────────
const CircleCard = ({ title, text }: any) => (
  /*
    Desktop: w-[293px] h-[224px] gap-6 (gap: 24px)
    Responsive: full width on mobile/tablet
  */
  <div className="
    flex flex-col items-start
    gap-6
    w-full
    xl:w-[292.99px] xl:h-[224px]
  ">
    {/* Circle — 60×60, bg #D9D9D9 */}
    <div className="
      w-[60px] h-[60px]
      rounded-full
      bg-[#D9D9D9]
      flex-shrink-0
    " />

    {/* Card Title — 32px, semibold, #141414 */}
    <h3 className="
      font-['Bricolage_Grotesque']
      font-semibold
      text-[20px]
      sm:text-[24px]
      lg:text-[28px]
      xl:text-[32px]
      leading-none
      tracking-normal
      text-[#141414]
      w-full
      xl:h-[40px]
      overflow-hidden
    ">
      {title}
    </h3>

    {/* Paragraph — 18px, regular, #141414 */}
    <p className="
      font-['Quicksand']
      font-normal
      text-[13px]
      sm:text-[14px]
      lg:text-[16px]
      xl:text-[18px]
      leading-[1.6]
      xl:leading-none
      tracking-normal
      text-[#141414]
      w-full
      xl:h-[92px]
      overflow-hidden
    ">
      {text}
    </p>
  </div>
);

// ── Main Component ────────────────────────────────────────────
const ThreeCircle = () => {
  return (
    /*
      Overall section:
      width: 1441px → max-w-[1441px] mx-auto
      height: 493px → let content define height
      padding: 80px → p-[80px] at xl
      gap: 32px (between title and cards row) → gap-8
    */
    <div className="
      w-full bg-white
      px-5 py-10
      sm:px-10 sm:py-14
      lg:px-16 lg:py-16
      xl:p-[80px]
    ">
      <div className="
        max-w-[1441px] mx-auto
        flex flex-col items-center
        gap-8
        xl:gap-8
        xl:h-[493px]
      ">

        {/* ── Title ──
            width: 1281px → full width inside padding
            height: 77px
            font: Bricolage Grotesque, 600, 64px
            color: #2B68C3, center aligned
        */}
        <h1 className="
          font-['Bricolage_Grotesque']
          font-semibold
          text-[30px]
          sm:text-[40px]
          md:text-[50px]
          lg:text-[56px]
          xl:text-[64px]
          leading-none
          tracking-normal
          text-center
          text-[#2B68C3]
          w-full
          xl:h-[77px]
          overflow-hidden
        ">
          Sed ut perspiciatis
        </h1>

        {/* ── Cards Row ──
            width: 1281px → full width
            height: 224px
            gap: 200px at xl → gap-[200px]
        */}
        <div className="
          w-full
          grid grid-cols-1
          gap-10
          sm:grid-cols-2 sm:gap-10
          lg:grid-cols-3 lg:gap-12
          xl:flex xl:flex-row xl:items-start
          xl:gap-[200px]
          xl:h-[224px]
        ">
          {cards.map((card, i) => (
            <CircleCard key={i} title={card.title} text={card.text} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ThreeCircle;
