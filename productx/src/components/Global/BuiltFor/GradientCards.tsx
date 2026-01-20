import { H2, H4, P } from "../../../styles/Typography";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= TYPES ================= */

type Card = {
  id: number;
  title: string;
  desc: string;
};

type SectionContent = {
  intro: {
    title: string;
    desc: string;
  };
  cards: Card[];
};

type Theme = {
  sectionBg: string;
  headingColor: string;
  paraColor: string;
  cardGradient: string;
  circleColor: string;
};

/* ================= THEMES (UNCHANGED) ================= */

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
  "/industries/cloud-finops-ai/built-for": {
    sectionBg: "#FFFFFF",
    headingColor: "#020059",
    paraColor: "#141414",
    cardGradient: "linear-gradient(135deg, #EAE9FF, #EAE9FF)",
    circleColor: "#FFFFFF",
  },
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, SectionContent>> = {
  "cloud-finops-ai": {
    enterprises: {
      intro: {
        title: "Real Scenarios",
        desc: "CloudDIET enables enterprise IT teams to identify, analyze, and fix any Azure waste quickly and efficiently across complex multi-subscription environments. ",
      },
      cards: [
        { id: 1, title: "VM Rightsizing", desc: "CloudDIET finds oversized VMs across subscriptions to cut compute costs." },
        { id: 2, title: "Storage Optimization", desc: "Identifies unused storage and wrong tiers draining your Azure budget. " },
        { id: 3, title: "SKU Changes", desc: "Spots bad SKUs and plans costing extra in PaaS services. " },
        { id: 4, title: "License Savings", desc: "Recommends better reservations and discounts for database workloads.." },
        { id: 5, title: "Usage Fixes", desc: "Reveals low-utilization resources wasting money across environments. " },
      ],
    },

    "digital-native": {
      intro: {
        title: "SaaS Scenarios ",
        desc: "CloudDIET enables SaaS teams to scale their apps efficiently and reliably without wasteful Azure spending or any performance compromises across workloads.  ",
      },
      cards: [
        { id: 1, title: "App Scaling", desc: " CloudDIET converts Azure Functions from fixed costly plans to flexible usage-based pricing automatically. " },
        { id: 2, title: "Event Optimization", desc: "CloudDIET automatically spots unused accounts and broken triggers wasting money every single day." },
        { id: 3, title: "Registry Cleanup", desc: "CloudDIET finds unused container registries automatically after CI/CD deployments complete.. " },
        { id: 4, title: "Integration Savings", desc: "CloudDIET automatically spots unused accounts and broken triggers wasting money every single day.." },
        { id: 5, title: "Multi-Region Fixs", desc: "CloudDIET optimizes App Services across multiple regions for global apps efficiently and reliably." },
      ],
    },

    smb: {
      intro: {
        title: "Enterprise Scenarios ",
        desc: "CloudDIET fixes Azure waste in multi-region setups for safe enterprise scaling. ",
      },
      cards: [
        { id: 1, title: "Cosmos Overprovision", desc: "Switches costly multi-master Cosmos DB to read replicas where writes stay low." },
        { id: 2, title: " RI Waste", desc: "Finds unused reserved instances across regions and replaces with active ones. ." },
        { id: 3, title: "App Services", desc: "Rightsizes Elastic App Service plans stuck in dedicated compute without auto-scale." },
        { id: 4, title: "Synapse Savings", desc: " Applies 3-year reserved instances to Synapse workloads, cutting the untime costs by 81%." },
        { id: 5, title: " Storage Defender", desc: "Disables expensive Defender for Storage on backup accounts with high transactions. " },
      ],
    },
  },
};

/* ================= COMPONENT ================= */

export default function FiveCardGradientSection() {
  const { pathname } = useLocation();
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  const active =
    themes[pathname] ||
    themes["/industries/banking-and-finance/built-for"];

  const sectionContent =
    CONTENT[industry ?? ""]?.[builtForType ?? ""];

  if (!sectionContent) return null;

  const contentCards = sectionContent.cards;

  /* ================= CAROUSEL LOGIC ================= */

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByOne = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    if (!card) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -card.offsetWidth - 24 : card.offsetWidth + 24,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    setActiveIndex(
      Math.round((scrollLeft / maxScroll) * (contentCards.length - 1))
    );
  };

  useEffect(() => {
    const timer = setInterval(() => scrollByOne("right"), 4000);
    return () => clearInterval(timer);
  }, []);

  /* ================= RENDER (UNCHANGED UI) ================= */

  return (
   <section
      className="w-full py-10 xl:py-16"
      style={{ backgroundColor: active.sectionBg }}
    >
      
 
      <div className="max-w-8xl mx-10 xl:px-10">
 
        {/* ---------- MOBILE / TABLET INTRO ---------- */}
        <div className="mb-8 lg:hidden">
          <H2 style={{ color: active.headingColor }} className="mb-4">
             {sectionContent.intro.title}
          </H2>
          <P style={{ color: active.paraColor }} className="max-w-md">
                    {sectionContent.intro.desc}
          </P>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
 
          {/* ---------- DESKTOP INTRO (UNCHANGED) ---------- */}
          <div className="hidden lg:block col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="p-4">
              <H2 style={{ color: active.headingColor }} className="mb-4">
                 {sectionContent.intro.title}
              </H2>
              <P style={{ color: active.paraColor }} className="max-w-md">
                       {sectionContent.intro.desc}
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
