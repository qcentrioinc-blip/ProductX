"use client";

import { useEffect, useRef, useState } from "react";
import { H1, H2 } from "../../../styles/Typography";

// ── 5 unique industries — tabs render from here ───────────────────────────────
const industries = [
  { label: "Unified Healthcare", link: "/industries/ehr-and-pms", comingSoon: false, launch: null as Date | null },
  { label: "Cloud FinOps AI",    link: "/industries/cloud-finops-ai", comingSoon: false, launch: null as Date | null },
  { label: "Banking & Finance",  link: "/industries/banking-and-finance", comingSoon: false, launch: null as Date | null },

  { label: "High Tech",          link: "/comingsoon", comingSoon: true, launch: new Date("2026-04-01T00:00:00") },
     { label: "NeuroPharma",        link: "/comingsoon", comingSoon: true, launch: new Date("2026-07-01T00:00:00") },
 
];

// ── 7 cards for the carousel (extra 2 fill the arc visually) ─────────────────
const cards = [
  { label: "Unified Healthcare", image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1", industryIndex: 0 },
  { label: "Cloud FinOps AI",    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc", industryIndex: 1 },
  { label: "Banking & Finance",  image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66", industryIndex: 2 },
  { label: "High Tech",          image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7", industryIndex: 4 },
  { label: "NeuroPharma",        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56", industryIndex: 3 },
  { label: "Banking & Finance", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69", industryIndex: 2 },
  { label: "Cloud FinOps AI",    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d", industryIndex: 1 },
];

const TOTAL = cards.length; // 7 for smooth arc

// Desktop values (unchanged)
const RX = 320;
const RY = 250;
const CW = 220;
const CH = 350;

// Mobile values (smaller)
const RX_M = 150;
const RY_M = 120;
const CW_M = 130;
const CH_M = 190;

function getCardStyle(cardIndex: number, stepCount: number, isMobile: boolean): React.CSSProperties {
  const rx = isMobile ? RX_M : RX;
  const ry = isMobile ? RY_M : RY;
  const cw = isMobile ? CW_M : CW;
  const ch = isMobile ? CH_M : CH;

  const slotAngle = (2 * Math.PI) / TOTAL;
  const angle = -Math.PI / 2 + cardIndex * slotAngle - stepCount * slotAngle;

  const x = rx * Math.cos(angle);
  const y = ry * Math.sin(angle);
  const sinA = Math.sin(angle);
  const cosA = Math.cos(angle);

  const rotateDeg = cosA * 45;
  const t = (1 - sinA) / 2;
  const scale = 0.68 + 0.47 * t;
  // Mobile: lower z-index so cards go behind navbar (navbar is typically z-50 = 50)
  const zIndex = isMobile
    ? Math.round(1 + 20 * t)   // mobile: max ~21, well below navbar
    : Math.round(5 + 75 * t);  // desktop: unchanged
  const opacity = sinA > 0.85 ? 0.3 : 1;
  const isTop = sinA < -0.75;

  return {
    position: "absolute",
    width: cw,
    height: ch,
    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotate(${rotateDeg}deg) scale(${scale})`,
    zIndex,
    opacity,
    filter: `grayscale(${isTop ? 0 : 100}%)`,
    transition: "transform 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, filter 0.5s ease",
    borderRadius: "1rem",
    overflow: "hidden",
    cursor: "pointer",
  };
}

export default function CircularCards() {
  const [stepCount, setStepCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // active = which of the 5 industries is currently at the top
  const topCardIndex = ((-stepCount % TOTAL) + TOTAL) % TOTAL;
  const activeIndustry = cards[topCardIndex].industryIndex;

  // Auto-scroll tabs to keep active tab visible on mobile
  useEffect(() => {
    if (!isMobile) return;
    const container = tabsRef.current;
    const activeTab = tabRefs.current[activeIndustry];
    if (!container || !activeTab) return;

    // Center the active tab in the scroll container
    const targetScroll = activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeIndustry, isMobile]);

  // Navigate tab click: find first card that maps to this industry
  const goToIndustry = (industryIndex: number) => {
    const candidates = cards
      .map((c, i) => ({ i, ind: c.industryIndex }))
      .filter((c) => c.ind === industryIndex);

    let bestSteps = TOTAL;
    for (const c of candidates) {
      const steps = (c.i - topCardIndex + TOTAL) % TOTAL;
      if (steps < bestSteps) { bestSteps = steps; }
    }
    if (bestSteps === 0) return;
    setStepCount((prev) => prev + bestSteps);
  };

  useEffect(() => {
    const interval = setInterval(() => setStepCount((p) => p + 1), 2500);
    return () => clearInterval(interval);
  }, []);

  const [countdowns, setCountdowns] = useState(
    industries.map(() => ({ days: 0, hours: 0, minutes: 0, seconds: 0 }))
  );

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setCountdowns(industries.map((ind) => {
        if (!ind.launch) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        const d = ind.launch.getTime() - now;
        if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
          days: Math.floor(d / 86400000),
          hours: Math.floor((d / 3600000) % 24),
          minutes: Math.floor((d / 60000) % 60),
          seconds: Math.floor((d / 1000) % 60),
        };
      }));
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  // Desktop container dimensions (unchanged)
  const containerW = RX * 2 + CW + 80;
  const containerH = RY + CH / 2 + 30;

  // Mobile container dimensions
  const containerW_M = RX_M * 2 + CW_M + 40;
  const containerH_M = RY_M + CH_M / 2 + 20;

  return (
    <div className="w-full flex flex-col items-center justify-start pt-4 bg-gray-100 overflow-hidden">

      <div className="mt-16 text-center">
        <H1>Shaping The Future Across Every Sector</H1>
      </div>

      {/* Tabs — only 5 unique industries */}
      <div
        ref={tabsRef}
        className="mt-6 w-full xl:max-w-4xl bg-gray-200 rounded-full p-2 flex gap-2 mx-auto
          overflow-x-auto snap-x snap-mandatory scroll-smooth xl:overflow-visible xl:justify-center"
        style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
      >
        {industries.map((ind, i) => (
          <button
            key={i}
            ref={(el) => { tabRefs.current[i] = el; }}
            onClick={() => goToIndustry(i)}
           className={`shrink-0 snap-start whitespace-nowrap px-3 xl:px-4 text-sm md:text-base
  font-bold font-quicksand rounded-full py-1.5
  transition-colors duration-300
  focus:outline-none
  ${activeIndustry === i
    ? "bg-white shadow-md text-black"
    : "bg-transparent text-gray-500 hover:bg-transparent"
  }`}
          >
            {ind.label}
            {ind.comingSoon && (
              <span className="ml-1.5 text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-semibold">
                Soon
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── DESKTOP carousel (unchanged) ── */}
      <div
        className="relative mt-6 hidden xl:block"
        style={{ width: containerW, height: containerH, overflow: "hidden" }}
      >
        <div style={{ position: "absolute", left: "50%", bottom: 0 }}>
          {cards.map((card, index) => {
            const style = getCardStyle(index, stepCount, false);
            const slotAngle = (2 * Math.PI) / TOTAL;
            const angle = -Math.PI / 2 + index * slotAngle - stepCount * slotAngle;
            const isTop = Math.sin(angle) < -0.75;

            const ind = industries[card.industryIndex];
            const cd = countdowns[card.industryIndex];

            return (
              <div
                key={index}
                style={style}
                className="group"
                onClick={() => {
                  if (!isTop) { goToIndustry(card.industryIndex); return; }
                  if (!ind.comingSoon) window.open(ind.link, "_blank");
                }}
              >
                <img
                  src={`${card.image}?auto=format&fit=crop&w=900&q=80`}
                  alt={card.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Normal card label */}
                {!ind.comingSoon && (
                  <div className={`absolute inset-0 flex items-end justify-center pb-6 px-4
                    transition-all duration-300 ${isTop ? "bg-black/40" : "bg-black/25"}`}
                  >
                    <H2 className="text-white text-base xl:text-lg font-bold tracking-wide text-center drop-shadow-lg">
                      {card.label}
                    </H2>
                  </div>
                )}

                {/* Coming Soon card */}
                {ind.comingSoon && (
                  <>
                    <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-6 px-4">
                      <div className="text-center">
                        <H2 className="text-white text-base xl:text-lg font-bold tracking-wide drop-shadow-lg">
                          {card.label}
                        </H2>
                        <span className="inline-block mt-1 text-[11px] bg-white/20 backdrop-blur-sm
                          text-white px-3 py-0.5 rounded-full font-semibold tracking-wider border border-white/30">
                          COMING SOON
                        </span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 flex flex-col items-center justify-center
                      text-white text-center px-4 transition-all duration-500
                      ${isTop ? "bg-black/70 backdrop-blur-md opacity-100"
                               : "bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100"}`}
                    >
                      <div className="w-8 h-px bg-white/40 mb-3" />
                      <H2 className="text-lg xl:text-xl font-bold mb-1">{card.label}</H2>
                      <div className="flex items-center gap-1.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-[11px] text-blue-300 font-semibold tracking-widest uppercase">Coming Soon</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      </div>
                      <p className="text-xs text-white/50 mb-3">Launching in</p>
                      <div className="flex gap-2">
                        {[["Days", cd.days], ["Hrs", cd.hours], ["Min", cd.minutes], ["Sec", cd.seconds]].map(([l, v]) => (
                          <div key={String(l)} className="flex flex-col items-center bg-white/10 rounded-lg px-2 py-1.5 min-w-[40px]">
                            <p className="text-xl font-bold leading-none">{v}</p>
                            <span className="text-[10px] text-white/60 mt-0.5">{l}</span>
                          </div>
                        ))}
                      </div>
                      <div className="w-8 h-px bg-white/40 mt-4" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE carousel (smaller cards, lower z-index so navbar stays on top) ── */}
      <div
        className="relative mt-6 xl:hidden"
        style={{ width: containerW_M, height: containerH_M, overflow: "hidden" }}
      >
        <div style={{ position: "absolute", left: "50%", bottom: 0 }}>
          {cards.map((card, index) => {
            const style = getCardStyle(index, stepCount, true);
            const slotAngle = (2 * Math.PI) / TOTAL;
            const angle = -Math.PI / 2 + index * slotAngle - stepCount * slotAngle;
            const isTop = Math.sin(angle) < -0.75;

            const ind = industries[card.industryIndex];
            const cd = countdowns[card.industryIndex];

            return (
              <div
                key={index}
                style={style}
                className="group"
                onClick={() => {
                  if (!isTop) { goToIndustry(card.industryIndex); return; }
                  if (!ind.comingSoon) window.open(ind.link, "_blank");
                }}
              >
                <img
                  src={`${card.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={card.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {!ind.comingSoon && (
                  <div className={`absolute inset-0 flex items-end justify-center pb-3 px-2
                    transition-all duration-300 ${isTop ? "bg-black/40" : "bg-black/25"}`}
                  >
                    <span className="text-white text-[10px] font-bold tracking-wide text-center drop-shadow-lg">
                      {card.label}
                    </span>
                  </div>
                )}

                {ind.comingSoon && (
                  <>
                    <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-3 px-2">
                      <div className="text-center">
                        <span className="text-white text-[10px] font-bold tracking-wide drop-shadow-lg block">
                          {card.label}
                        </span>
                        <span className="inline-block mt-0.5 text-[8px] bg-white/20 backdrop-blur-sm
                          text-white px-2 py-0.5 rounded-full font-semibold tracking-wider border border-white/30">
                          COMING SOON
                        </span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 flex flex-col items-center justify-center
                      text-white text-center px-2 transition-all duration-500
                      ${isTop ? "bg-black/70 backdrop-blur-md opacity-100"
                               : "bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100"}`}
                    >
                      <div className="w-5 h-px bg-white/40 mb-1.5" />
                      <span className="text-[11px] font-bold mb-0.5">{card.label}</span>
                      <div className="flex items-center gap-1 mb-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-[8px] text-blue-300 font-semibold tracking-widest uppercase">Soon</span>
                        <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                      </div>
                      <p className="text-[8px] text-white/50 mb-1.5">Launching in</p>
                      <div className="flex gap-1">
                        {[["D", cd.days], ["H", cd.hours], ["M", cd.minutes], ["S", cd.seconds]].map(([l, v]) => (
                          <div key={String(l)} className="flex flex-col items-center bg-white/10 rounded px-1.5 py-1 min-w-[28px]">
                            <p className="text-sm font-bold leading-none">{v}</p>
                            <span className="text-[7px] text-white/60 mt-0.5">{l}</span>
                          </div>
                        ))}
                      </div>
                      <div className="w-5 h-px bg-white/40 mt-2" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}