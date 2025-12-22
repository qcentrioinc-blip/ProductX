import { H2, H4, P } from "../../../styles/Typography";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Card = {
  id: number;
  type: "intro" | "card";
  title: string;
  desc: string;
};

type Theme = {
  sectionBg: string;
  headingColor: string;
  paraColor: string;
  cardGradient: string;
  circleColor: string;
};

export default function FiveCardGradientSection() {
  const { pathname } = useLocation();

  /* ================= THEMES ================= */
  const themes: Record<string, Theme> = {
    "/industries/banking-and-finance/built-for": {
      sectionBg: "#F5FBFF",
      headingColor: "#2A2A2A",
      paraColor: "#4A4A4A",
      cardGradient: "linear-gradient(135deg, #E9F2FF, #FFEAD2)",
      circleColor: "#E0E0E0",
    },
    "/industries/ehr-and-pms/built-for": {
      sectionBg: "#F5FBFF",
      headingColor: "#2A2A2A",
      paraColor: "#2A2A2A",
      cardGradient: "linear-gradient(135deg, #EDE4CA, #FFEAD2)",
      circleColor: "#FFFFFF",
    },
    "/industries/high-tech/built-for": {
      sectionBg: "#5C5C5C",
      headingColor: "#000000",
      paraColor: "#000000",
      cardGradient: "linear-gradient(135deg, #FFFFFF, #FFFFFF)",
      circleColor: "#D9D9D9",
    },
    "/industries/ai-optimization/built-for": {
      sectionBg: "#FFFFFF",
      headingColor: "#020059",
      paraColor: "#141414",
      cardGradient: "linear-gradient(135deg, #EAE9FF, #EAE9FF)",
      circleColor: "#FFFFFF",
    },
  };

  const active =
    themes[pathname] ||
    themes["/industries/banking-and-finance/built-for"];

  /* ================= DATA ================= */
  const cards: Card[] = [
    {
      id: 1,
      type: "intro",
      title: "UndeSed ut",
      desc:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
    },
    {
      id: 2,
      type: "card",
      title: "UndeSed ut",
      desc:
        "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 3,
      type: "card",
      title: "UndeSed ut",
      desc:
        "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 4,
      type: "card",
      title: "UndeSed ut",
      desc:
        "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 5,
      type: "card",
      title: "UndeSed ut",
      desc:
        "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
    {
      id: 6,
      type: "card",
      title: "UndeSed ut",
      desc:
        "UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspiciatis UndeSed ut perspicia",
    },
  ];

  const contentCards = cards.slice(1);

  /* ================= CAROUSEL LOGIC (<1200px) ================= */
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByOne = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    if (!card) return;

    const width = card.offsetWidth + 24;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const progress = scrollLeft / maxScroll;
    setActiveIndex(Math.round(progress * (contentCards.length - 1)));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      scrollByOne("right");
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  /* ================= SCOPED SCROLLBAR HIDE ================= */
  const scopedStyle = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `;

  /* ================= RENDER ================= */
  return (
    <section
      className="w-full py-10 xl:py-16"
      style={{ backgroundColor: active.sectionBg }}
    >
      <style>{scopedStyle}</style>

      <div className="max-w-8xl mx-10 xl:px-10">

        {/* ---------- MOBILE / TABLET INTRO ---------- */}
        <div className="mb-8 lg:hidden">
          <H2 style={{ color: active.headingColor }} className="mb-4">
            {cards[0].title}
          </H2>
          <P style={{ color: active.paraColor }} className="max-w-md">
            {cards[0].desc}
          </P>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* ---------- DESKTOP INTRO (UNCHANGED) ---------- */}
          <div className="hidden lg:block col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="p-4">
              <H2 style={{ color: active.headingColor }} className="mb-4">
                {cards[0].title}
              </H2>
              <P style={{ color: active.paraColor }} className="max-w-md">
                {cards[0].desc}
              </P>
            </div>
          </div>

          {/* ---------- CAROUSEL (MOBILE / TABLET / iPad Pro) ---------- */}
          <div className="relative col-span-1 sm:col-span-2 xl:hidden">
            <button
              onClick={() => scrollByOne("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scrollByOne("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
            >
              <ChevronRight />
            </button>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
              style={{
                scrollbarWidth: "none",   // Firefox
                msOverflowStyle: "none",  // IE / Edge
              }}
            >
              {contentCards.map((card) => (
                <div
                  key={card.id}
                  style={{ background: active.cardGradient }}
                  className="
                    snap-center flex-shrink-0 w-[95%] mx-auto
                    relative rounded-xl p-8 border border-gray-100
                    shadow-sm hover:shadow-xl hover:shadow-black/5
                    transform transition-all duration-500 ease-out hover:-translate-y-2
                  "
                >
                  <div
                    className="w-14 h-14 rounded-full mb-6"
                    style={{ backgroundColor: active.circleColor }}
                  />
                  <H4 style={{ color: active.headingColor }} className="mb-4">
                    {card.title}
                  </H4>
                  <P style={{ color: active.paraColor }}>
                    {card.desc}
                  </P>
                </div>
              ))}
            </div>

            {/* ---------- DOTS ---------- */}
            <div className="flex justify-center gap-2 mt-4">
              {contentCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    scrollByOne(i > activeIndex ? "right" : "left")
                  }
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === i
                      ? "bg-black scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ---------- DESKTOP CARDS (UNCHANGED) ---------- */}
          {contentCards.map((card) => (
            <div
              key={card.id}
              style={{ background: active.cardGradient }}
              className="
                hidden xl:block relative rounded-xl p-8 border border-gray-100
                shadow-sm hover:shadow-xl hover:shadow-black/5
                transform transition-all duration-500 ease-out hover:-translate-y-2
                w-[95%] mx-auto
              "
            >
              <div
                className="w-14 h-14 rounded-full mb-6"
                style={{ backgroundColor: active.circleColor }}
              />
              <H4 style={{ color: active.headingColor }} className="mb-4">
                {card.title}
              </H4>
              <P style={{ color: active.paraColor }} className="xl:max-w-xs">
                {card.desc}
              </P>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
