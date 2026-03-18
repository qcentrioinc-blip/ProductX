"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { H1, } from "../../../styles/Typography";
import FallingGridBg from "./FallingGridBg";


// ── 4 industries (tabs) ───────────────────────────────────────────────────────
const industries = [
  { label: "Banking & Finance", link: "/industries/banking-and-finance", comingSoon: false, launch: null as Date | null },
  { label: "Billing & Utility", link: "/comingsoon", comingSoon: true, launch: new Date("2026-04-01T00:00:00") },
  { label: "Cloud FinOps AI", link: "/industries/cloud-finops-ai", comingSoon: false, launch: null as Date | null },
  { label: "High Tech", link: "/comingsoon", comingSoon: true, launch: new Date("2026-04-01T00:00:00") },
  { label: "Unified Healthcare", link: "/industries/ehr-and-pms", comingSoon: false, launch: null as Date | null },
];

// 7 cards — duplicates fill the arc so it always looks full
const cards = [
  { label: "Banking & Finance", image: "/Global/Banking.webp", industryIndex: 0 },
  { label: "Biling & Utility", image: "/Global/Banking.webp", industryIndex: 1 },
  { label: "Cloud FinOps AI", image: "/Global/Cloud.webp", industryIndex: 2 },
  { label: "High Tech", image: "/Global/HighTech.webp", industryIndex: 3 },
  { label: "Unified Healthcare", image: "/Global/EHR.webp", industryIndex: 4 },
  { label: "Banking & Finance", image: "/Global/Banking.webp", industryIndex: 0 },
  { label: "Biling & Utility", image: "/Global/Banking.webp", industryIndex: 1 },
  { label: "Cloud FinOps AI", image: "/Global/Cloud.webp", industryIndex: 2 },
  { label: "High Tech", image: "/Global/HighTech.webp", industryIndex: 3 },
  { label: "Unified Healthcare", image: "/Global/EHR.webp", industryIndex: 4 },
];

const TOTAL = cards.length;


// Preload images immediately on client load
if (typeof window !== 'undefined') {
  const uniqueImages = Array.from(new Set(cards.map(c => c.image)));
  uniqueImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// ── Geometry — tweak these to adjust the arc ──────────────────────────────────
const RX = 340; const RY = 220;
const CW = 230; const CH = 375;

const RX_M = 155; const RY_M = 100;
const CW_M = 120; const CH_M = 192;

const DRAG_STEP_PX = 85;
const DRAG_STEP_PX_M = 50;

// ── Card position on the ellipse ─────────────────────────────────────────────
function getCardStyle(
  cardIndex: number,
  stepCount: number,
  mobile: boolean,
  dragOffset = 0,
): React.CSSProperties {
  const rx = mobile ? RX_M : RX;
  const ry = mobile ? RY_M : RY;
  const cw = mobile ? CW_M : CW;
  const ch = mobile ? CH_M : CH;

  const step = (2 * Math.PI) / TOTAL;
  const angle = -Math.PI / 2 + cardIndex * step - (stepCount + dragOffset) * step;

  const x = rx * Math.cos(angle);
  const y = ry * Math.sin(angle);
  const sinA = Math.sin(angle);
  const cosA = Math.cos(angle);

  const t = (1 - sinA) / 2;
  const scale = 0.62 + 0.44 * t;
  const zIndex = Math.round(5 + 75 * t);
  const rotateDeg = cosA * 60;
  const opacity = sinA > 0.0
    ? Math.max(0, 1 - (sinA - 0.0) / 0.30)
    : 1;

  return {
    position: "absolute",
    width: cw,
    height: ch,
    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotate(${rotateDeg}deg) scale(${scale})`,
    zIndex,
    opacity,
    filter: "grayscale(100%)",
    pointerEvents: opacity < 0.05 ? "none" : "auto",
    transition: dragOffset !== 0
      ? "opacity 0.08s ease, filter 0.08s ease"
      : [
        "transform 0.70s cubic-bezier(0.34,1.4,0.64,1)",
        "opacity 0.50s ease",
        "filter 0.40s ease",
      ].join(", "),
    borderRadius: "1.25rem",
    overflow: "hidden",
    cursor: "pointer",
  };
}

// ─────────────────────────────────────────────────────────────────────────────

export default function CircularCards() {
  
  const [stepCount, setStepCount] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [countdowns, setCountdowns] = useState(
    industries.map(() => ({ days: 0, hours: 0, minutes: 0, seconds: 0 }))
  );

  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const lastDragX = useRef(0);
  const dragVelocity = useRef(0);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // const videoPreloaded = useRef(false);
  // ── ref for the scoped background video ──────────────────────────────────────
  // const bgVideoRef = useRef<HTMLVideoElement>(null);

  // const preloadBnfVideo = useCallback(() => {
  //   if (videoPreloaded.current) return;
  //   videoPreloaded.current = true;
  //   const vid = document.createElement("video");
  //   vid.preload = "auto";
  //   vid.muted = true;
  //   vid.src = "/Video/HeroVideo.mp4";
  //   vid.style.display = "none";
  //   document.body.appendChild(vid);
  //   vid.load();
  // }, []);

  // ── Responsive ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [displayTopIndex, setDisplayTopIndex] = useState(0);
  const topCardIndex = (stepCount % TOTAL + TOTAL) % TOTAL;
  const activeIndustry = cards[topCardIndex].industryIndex;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayTopIndex(topCardIndex);
    }, 680);
    return () => clearTimeout(timer);
  }, [topCardIndex]);

  useEffect(() => {
    if (!isMobile) return;
    const c = tabsRef.current;
    const t = tabRefs.current[activeIndustry];
    if (!c || !t) return;
    c.scrollTo({ left: t.offsetLeft - c.offsetWidth / 2 + t.offsetWidth / 2, behavior: "smooth" });
  }, [activeIndustry, isMobile]);

  // ── Auto-rotate ──────────────────────────────────────────────────────────────
  const startAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => setStepCount(p => p + 1), 1500);
  }, []);
  const stopAuto = useCallback(() => {
    if (autoTimer.current) { clearInterval(autoTimer.current); autoTimer.current = null; }
  }, []);
  useEffect(() => { startAuto(); return () => stopAuto(); }, [startAuto, stopAuto]);

  const goToIndustry = useCallback((industryIdx: number) => {
    setStepCount(prev => {
      const cur = (prev % TOTAL + TOTAL) % TOTAL;
      let best = TOTAL;
      cards.forEach((c, i) => {
        if (c.industryIndex !== industryIdx) return;
        const steps = (i - cur + TOTAL) % TOTAL;
        if (steps > 0 && steps < best) best = steps;
      });
      return best === TOTAL ? prev : prev + best;
    });
  }, []);

  const handleTabClick = useCallback((industryIdx: number) => {
    const ind = industries[industryIdx];
    stopAuto();
    setStepCount(prev => {
      const cur = (prev % TOTAL + TOTAL) % TOTAL;
      if (cards[cur].industryIndex === industryIdx) {
        window.open(ind.link, "_blank", "noopener,noreferrer");
        return prev;
      }
      let best = TOTAL;
      cards.forEach((c, i) => {
        if (c.industryIndex !== industryIdx) return;
        const steps = (i - cur + TOTAL) % TOTAL;
        if (steps > 0 && steps < best) best = steps;
      });
      return best === TOTAL ? prev : prev + best;
    });
    setTimeout(() => startAuto(), 1500);
  }, [stopAuto, startAuto]);

  // ── Drag / swipe ──────────────────────────────────────────────────────────────
  const dragPx = isMobile ? DRAG_STEP_PX_M : DRAG_STEP_PX;

  const onDragStart = useCallback((x: number) => {
    isDragging.current = true;
    dragStartX.current = x;
    lastDragX.current = x;
    dragVelocity.current = 0;
    stopAuto();
  }, [stopAuto]);

  const onDragMove = useCallback((x: number) => {
    if (!isDragging.current) return;
    dragVelocity.current = -(x - lastDragX.current) / dragPx;
    lastDragX.current = x;
    setDragOffset(-(x - dragStartX.current) / dragPx);
  }, [dragPx]);

  const onDragEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const snap = Math.round(dragOffset) + Math.round(dragVelocity.current * 2);
    setDragOffset(0);
    if (snap !== 0) setStepCount(p => p + snap);
    startAuto();
  }, [dragOffset, startAuto]);

  const onMouseDown = (e: React.MouseEvent) => { e.preventDefault(); onDragStart(e.clientX); };
  const onTouchStart = (e: React.TouchEvent) => { onDragStart(e.touches[0].clientX); };

  // ── Countdown timers ─────────────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setCountdowns(industries.map(ind => {
        if (!ind.launch) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        const d = Math.max(0, ind.launch.getTime() - now);
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

  // ── Container dimensions ──────────────────────────────────────────────────────
  const containerW = RX * 3 + CW + 80;
  const containerH = RY + CH / 2 + 100;
  const containerW_M = RX_M * 2 + CW_M + 80;
  const containerH_M = RY_M + CH_M / 2 + 20;

  // ── Render ────────────────────────────────────────────────────────────────────
  const renderCards = (mobile: boolean) =>
    cards.map((card, index) => {
      const baseStyle = getCardStyle(index, stepCount, mobile, dragOffset);
      const isActive = index === displayTopIndex;

      const style = {
        ...baseStyle,
        filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
      };
      const step2 = (2 * Math.PI) / TOTAL;
      const angle2 = -Math.PI / 2 + index * step2 - (stepCount + dragOffset) * step2;
      const isTop = Math.sin(angle2) < -0.6;

      const ind = industries[card.industryIndex];
      const cd = countdowns[card.industryIndex];

      return (
        <div
          key={index}
          style={style}
          className="group"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          // onMouseEnter={card.industryIndex === 0 ? preloadBnfVideo : undefined}
          onClick={() => {
            if (Math.abs(dragOffset) > 0.15) return;
            if (!isTop) { goToIndustry(card.industryIndex); return; }
            if (!ind.comingSoon) window.open(ind.link, "_blank");
          }}
        >
          <img
            src={card.image}
            alt={ind.label}
            decoding="sync"
            loading="eager"
            fetchPriority="high"
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              userSelect: "none",
            }}
          />

          {/* Frosted blue label */}
          {!ind.comingSoon && (
            <div className={`absolute inset-0 flex items-end justify-center ${mobile ? "pb-3 " : "  "}`}>
              <div
                className="w-full items-center justify-center py-2 xl:py-10 px-3"
                style={{
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <span className={`text-white font-bold font-bricolage items-center xl:pl-4 tracking-wide text-center drop-shadow ${mobile ? "text-[10px]" : "text-sm xl:text-xl"}`}>
                  {ind.label}
                </span>
              </div>
            </div>
          )}

          {/* Coming Soon */}
          {ind.comingSoon && (
            <>
              <div className={`absolute inset-0 bg-black/25 flex items-end justify-center ${mobile ? "pb-3 px-2" : "pb-5 px-4"}`}>
                <div className="text-center">
                  <span className={`text-white font-bold font-bricolage tracking-wide drop-shadow-lg block ${mobile ? "text-[10px]" : "text-base"}`}>
                    {ind.label}
                  </span>
                  <span className={`inline-block mt-1 font-bricolage bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold tracking-wider border border-white/30 ${mobile ? "text-[8px] px-2 py-0.5" : "text-[11px] px-3 py-0.5"}`}>
                    COMING SOON
                  </span>
                </div>
              </div>

              {/* Countdown overlay */}
              <div className={`absolute inset-0 flex flex-col items-center font-bricolage justify-center text-white text-center transition-all duration-500 ${mobile ? "px-2" : "px-4"} ${isTop ? "backdrop-blur-md opacity-100" : "backdrop-blur-sm opacity-0 group-hover:opacity-100"}`}>
                <div className={`${mobile ? "w-5" : "w-8"} h-px bg-white/40 mb-3`} />
                <span className={`${mobile ? "text-[11px]" : "text-lg"} font-bold mb-1`}>{ind.label}</span>
                <div className="flex items-center gap-1 mb-3">
                  <span className={`${mobile ? "w-1 h-1" : "w-1.5 h-1.5"} rounded-full bg-blue-400 animate-pulse`} />
                  <span className={`${mobile ? "text-[8px]" : "text-[11px]"} text-blue-300 font-semibold tracking-widest uppercase`}>
                    Coming Soon
                  </span>
                  <span className={`${mobile ? "w-1 h-1" : "w-1.5 h-1.5"} rounded-full bg-blue-400 animate-pulse`} />
                </div>
                <p className={`${mobile ? "text-[8px]" : "text-xs"} text-white/50 mb-2`}>Launching in</p>
                <div className={`flex ${mobile ? "gap-1" : "gap-2"}`}>
                  {(mobile
                    ? [["D", cd.days], ["H", cd.hours], ["M", cd.minutes], ["S", cd.seconds]]
                    : [["Days", cd.days], ["Hrs", cd.hours], ["Min", cd.minutes], ["Sec", cd.seconds]]
                  ).map(([l, v]) => (
                    <div key={String(l)} className={`flex flex-col items-center bg-white/10 rounded-lg ${mobile ? "px-1.5 py-1 min-w-[28px]" : "px-2 py-1.5 min-w-[40px]"}`}>
                      <p className={`${mobile ? "text-sm" : "text-xl"} font-bold leading-none`}>{v}</p>
                      <span className={`${mobile ? "text-[7px]" : "text-[10px]"} text-white/60 mt-0.5`}>{l}</span>
                    </div>
                  ))}
                </div>
                <div className={`${mobile ? "w-5" : "w-8"} h-px bg-white/40 mt-3`} />
              </div>
            </>
          )}
        </div>
      );
    });

  return (
    /*
     * ── Outer wrapper: position:relative so the bg video is scoped ONLY to
     *    this section and does NOT bleed into the rest of the page.
     * ────────────────────────────────────────────────────────────────────── */
    <div className="relative  overflow-hidden">

      {/* ── Background video — scoped to this section only ─────────────────── */}
      {/* <div className="relative w-full h-screen overflow-hidden"> */}

  {/* 🎥 Video */}
  {/* <div className="absolute inset-0 z-0">
    <video
      className="w-full h-full object-cover"
      src="/Video/MainVideo.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div> */}

  {/* 🔵 Falling circles */}
  <FallingGridBg >
        <div className="w-full relative flex z-20 flex-col items-center justify-start pt-4  overflow-hidden">

          <div className="mt-16 text-center px-4">
            <H1 className="text-black">Shaping The Future Across Every Sector</H1>
          </div>

          {/* ── 5 Tabs ── */}
          <div
            ref={tabsRef}
            className="mt-6 w-full lg:max-w-3xl xl:max-w-4xl bg-gray-50 rounded-full p-2 flex gap-2 mx-auto
            overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth
            xl:overflow-visible xl:justify-center"
            style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            {industries.map((ind, i) => (
              <button
                key={i}
                ref={el => { tabRefs.current[i] = el; }}
                onClick={() => handleTabClick(i)}
                className={`cursor-pointer shrink-0 snap-start whitespace-nowrap px-4 xl:px-5 text-sm md:text-base
                font-bold font-quicksand rounded-full py-1.5
                transition-colors duration-300 focus:outline-none
                ${activeIndustry === i ? "bg-blue-200 shadow-md text-black" : "bg-transparent text-black"}`}
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

          {/* ── DESKTOP ── */}
          <div
            className="relative mt-10 hidden xl:block select-none"
            style={{
              width: containerW,
              height: containerH,
              overflow: "hidden",
              cursor: isDragging.current ? "grabbing" : "grab",
            }}
            onMouseMove={(e) => onDragMove(e.clientX)}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
          >
            <div style={{ position: "absolute", left: "50%", bottom: 0 }}>
              {renderCards(false)}
            </div>
          </div>

          {/* ── MOBILE ── */}
          <div
            className="relative mt-6 xl:hidden select-none"
            style={{
              width: containerW_M,
              height: containerH_M,
              overflow: "hidden",
              cursor: "default",
              touchAction: "pan-y",
            }}
            onTouchEnd={() => {
              if (!autoTimer.current) startAuto();
            }}
          >
            <div style={{ position: "absolute", left: "50%", bottom: 0 }}>
              {renderCards(true)}
            </div>
          </div>

        </div>
      </FallingGridBg>
      </div>
    // </div>
  );
}