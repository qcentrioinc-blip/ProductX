import { H2, H4, P } from "../../../styles/Typography";
import { useLocation } from "react-router-dom";

export default function FiveCardGradientSection() {
  const { pathname } = useLocation();

  const themes: Record<
    string,
    {
      sectionBg: string;
      headingColor: string;
      paraColor: string;
      cardFrom: string;
      cardTo: string;
      circle: string;
    }
  > = {
    "/industries/banking-and-finance/built-for": {
      sectionBg: "bg-[#F5FBFF]",
      headingColor: "text-[#2A2A2A]",
      paraColor: "text-[#4A4A4A]",
      cardFrom: "from-[#E9F2FF]",
      cardTo: "to-[#FFEAD2]",
      circle: "bg-[#E0E0E0]",
    },

    "/industries/ehr-and-pms/built-for": {
      sectionBg: "bg-[#F5FBFF]",
      headingColor: "text-[#2A2A2A]",
      paraColor: "text-[#2A2A2A]",
      cardFrom: "from-[#EDE4CA]",
      cardTo: "to-[#FFEAD2]",
      circle: "bg-[#FFFFFF]",
    },

    "/industries/high-tech/built-for": {
      sectionBg: "bg-[#5C5C5C]",
      headingColor: "text-[#000000]",
      paraColor: "text-[#000000]",
      cardFrom: "from-[#FFFFFF]",
      cardTo: "to-[#FFFFFF]",
      circle: "bg-[#D9D9D9]",
    },

    "/industries/ai-optimization/built-for": {
      sectionBg: "bg-[#F4F6FF]",
      headingColor: "text-[#020059]",
      paraColor: "text-[#141414]",
      cardFrom: "from-[#EAE9FF]",
      cardTo: "to-[#EAE9FF]",
      circle: "bg-[#FFFFFF]",
    },
  };

  const active = themes[pathname] || themes["/industries/banking-and-finance/built-for"];

  const cards = [
    {
      id: 1,
      type: "intro",
      title: "UndeSed ut",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
    },
    {
      id: 2,
      type: "card",
      title: "UndeSed ut",
      desc: "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 3,
      type: "card",
      title: "UndeSed ut",
      desc: "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 4,
      type: "card",
      title: "UndeSed ut",
      desc: "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 5,
      type: "card",
      title: "UndeSed ut",
      desc: "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 6,
      type: "card",
      title: "UndeSed ut",
      desc: "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
  ];

  return (
    <section className={`w-full py-16 ${active.sectionBg}`}>
      <div className="max-w-8xl mx-10 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Intro Card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="p-4">
              <H2 className={`mb-4 ${active.headingColor}`}>UndeSed ut</H2>

              <P className={`max-w-md leading-relaxed ${active.paraColor}`}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              </P>
            </div>
          </div>

          {/* Cards */}
          {cards.slice(1).map((card) => (
            <div
            key={card.id}
            className={`
              relative rounded-xl p-8 border border-gray-100
              bg-gradient-to-br ${active.cardFrom} ${active.cardTo}
              hover:from-white hover:to-white
              shadow-sm hover:shadow-xl hover:shadow-black/5
              transform transition-all duration-500 ease-out hover:-translate-y-2
              w-[95%] mx-auto
            `}
          >

              <div className={`w-14 h-14 rounded-full mb-6 ${active.circle}`} />

              <H4 className={`mb-4 ${active.headingColor}`}>{card.title}</H4>

              <P className={`leading-relaxed xl:max-w-xs ${active.paraColor}`}>
                {card.desc}
              </P>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
