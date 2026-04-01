import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { H1, H4, P } from "../../../styles/Typography";

const INTRO = {
  title: "Payment Scenarios We Support ",
  desc: "PAGO enables multiple payment scenarios for financial institutions and their customers.",
};

const CARDS = [
  {
    id: 1,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="20" fill="#d9d9d9" />
        <rect x="11" y="14" width="26" height="4" rx="2" fill="#2B68C3" />
        <rect x="11" y="22" width="18" height="4" rx="2" fill="#2B68C3" />
        <rect x="11" y="30" width="22" height="4" rx="2" fill="#2B68C3" />
        <rect x="29" y="10" width="8" height="8" rx="3" fill="#2B68C3" />
      </svg>
    ),
    title: "Single Transfers",
    desc: "Service both customers and non-customers for one-time payments",
  },
  {
    id: 2,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="20" fill="#d9d9d9" />
        <circle cx="21" cy="18" r="7" fill="#2B68C3" />
        <rect x="11" y="30" width="19" height="9" rx="4" fill="#2B68C3" />
        <rect x="32" y="24" width="5" height="10" rx="2.5" fill="#2B68C3" opacity="0.6" />
        <rect x="28" y="27" width="5" height="7" rx="2.5" fill="#2B68C3" opacity="0.4" />
      </svg>
    ),
    title: "Bulk Transactions",
    desc: " Distribute subsidies, dividends, salary, and pension payments.",
  },
  {
    id: 3,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="20" fill="#d9d9d9" />
        <circle cx="24" cy="24" r="9" stroke="#2B68C3" strokeWidth="3" fill="none" />
        <circle cx="24" cy="24" r="4" fill="#2B68C3" />
        <path d="M24 10V14M24 34V38M10 24H14M34 24H38" stroke="#2B68C3" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="34" cy="34" r="5" fill="#2B68C3" />
        <path d="M32 34L33.5 35.5L37 32" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Utility Collections",
    desc: " Collect telephone, electricity, water, and loan payments.",
  },
  {
    id: 4,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="20" fill="#d9d9d9" />
        <path d="M19 13C19 13 16 16 16 22C16 28 19 31 19 31" stroke="#2B68C3" strokeWidth="3" strokeLinecap="round" />
        <path d="M29 13C29 13 32 16 32 22C32 28 29 31 29 31" stroke="#2B68C3" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="22" r="4" fill="#2B68C3" />
        <rect x="17" y="35" width="14" height="4" rx="2" fill="#2B68C3" />
      </svg>
    ),
    title: "Investment Collections",
    desc: "Collect mutual fund investments and insurance premium payments ",
  },
  {
    id: 5,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="20" fill="#d9d9d9" />
        <circle cx="24" cy="24" r="11" stroke="#2B68C3" strokeWidth="3" fill="none" />
        <circle cx="24" cy="24" r="5" fill="#2B68C3" />
        <path d="M21 24H27M24 21V27" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10V13M24 35V38M10 24H13M35 24H38" stroke="#2B68C3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Instant Transfers",
    desc: "Enable 24/7 low turnaround time fund transfers",
  },
];

const Cardsfive = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByOne = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.95 + 24;
    scrollRef.current.scrollBy({
      left: dir === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.95 + 24;
    const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, CARDS.length - 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 xl:px-0">

      {/* ── MOBILE / TABLET INTRO ── */}
      <div className="mb-8 xl:hidden">
        <H1 className="mb-4 font-bricolage text-[#2B68C3]">
          {INTRO.title}
        </H1>
        <P className="max-w-full text-black">
          {INTRO.desc}
        </P>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-y-8 gap-x-4">

        {/* ── DESKTOP INTRO ── */}
        <div className="hidden xl:block col-span-1 sm:col-span-2 lg:col-span-1">
          <H1 className="mb-4 text-[#2B68C3] font-bricolage">
            {INTRO.title}
          </H1>
          <P className="max-w-md text-black">
            {INTRO.desc}
          </P>
        </div>

        {/* ── MOBILE / TABLET CAROUSEL ── */}
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
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="
                  snap-center flex-shrink-0 w-[95%] md:w-[55%] mx-auto
                  rounded-2xl p-8 bg-[#F0F4FF] border border-gray-100
                  shadow-sm hover:shadow-xl hover:shadow-black/5
                  transform transition-all duration-500 ease-out hover:-translate-y-2
                "
              >
                <div className="mb-6">{card.icon}</div>
                <H4 className="mb-3 text-[18px] md:text-[20px] font-semibold text-[#0F172A] leading-snug">
                  {card.title}
                </H4>
                <P className="">{card.desc}</P>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollByOne(i > activeIndex ? "right" : "left")}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIndex === i ? "bg-black scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP CARDS (xl+) ── */}
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="
              hidden xl:flex flex-col gap-4
              rounded-2xl p-8 bg-[#F6F6F6] border border-gray-100
              shadow-sm hover:shadow-xl hover:shadow-black/5
              transform transition-all duration-500 ease-out hover:-translate-y-2
              w-[95%] mx-auto
            "
          >
            <div>{card.icon}</div>
            <H4 className="text-[18px] lg:text-[20px] font-semibold text-[#0F172A] leading-snug">
              {card.title}
            </H4>
            <P className=" xl:max-w-xs">{card.desc}</P>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Cardsfive;