"use client";

import { useEffect, useState } from "react";
import { H1, H2 } from "../../../styles/Typography";

const tabs: string[] = [
  "Unified Healthcare",
  "Cloud FinOps AI",
  "Banking & Finance",
  "High Tech",
   
];

const links: string[] = [
  "/industries/ehr-and-pms",
 "/industries/cloud-finops-ai",
  "/industries/banking-and-finance",
  // "/industries/high-tech",
  "/industries/ehr-and-pms",
 "/industries/cloud-finops-ai",
  "/industries/banking-and-finance",
  // "/industries/high-tech",
];

const images = [
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "/Global-Landing-Page/BNF.webp",
  "/Global-Landing-Page/EHR.webp",
  "Global-Landing-Page/AI.webp",
];

const TOTAL = images.length;

type StyleMap = {
  transform: string;
  zIndex: number;
  filter: string;
  opacity: number;
};

function getPosition(offset: number): StyleMap | Record<string, never> {
  switch (offset) {
    // ── CENTER ──────────────────────────────────────────────
    case 0:
      return {
        transform: "translateX(0px) translateY(0px) rotate(0deg) scale(1.15)",
        zIndex: 50,
        filter: "grayscale(0%)",
        opacity: 1,
      };

    // ── RIGHT ADJACENT (next to enter) ──────────────────────
    case 1:
      return {
        transform: "translateX(210px) translateY(55px) rotate(30deg) scale(0.95)",
        zIndex: 40,
        filter: "grayscale(100%)",
        opacity: 0.9,
      };

    // ── RIGHT FAR ───────────────────────────────────────────
    case 2:
      return {
        transform: "translateX(370px) translateY(115px) rotate(42deg) scale(0.82)",
        zIndex: 30,
        filter: "grayscale(100%)",
        opacity: 0.9,
      };

    // ── RIGHT EXTREME / off-screen staging area ──────────────
    case 3:
      return {
        transform: "translateX(560px) translateY(195px) rotate(52deg) scale(0.68)",
        zIndex: 10,
        filter: "grayscale(100%)",
        opacity: 0,           // invisible — cards "teleport" here from left exit
      };

    // ── LEFT EXTREME / exit point (offset = TOTAL-3 = 4) ────
    // Mirror of right extreme
    default:
      // Hide everything else (shouldn't happen with 7 cards, but safety net)
      return {};

    case TOTAL - 3: // offset 4 with 7 cards
      return {
        transform: "translateX(-560px) translateY(195px) rotate(-52deg) scale(0.68)",
        zIndex: 10,
        filter: "grayscale(100%)",
        opacity: 0,           // invisible — cards jump from here to right extreme
      };

    // ── LEFT FAR ────────────────────────────────────────────
    case TOTAL - 2: // offset 5
      return {
        transform: "translateX(-370px) translateY(115px) rotate(-42deg) scale(0.82)",
        zIndex: 30,
        filter: "grayscale(100%)",
        opacity: 0.9,
      };

    // ── LEFT ADJACENT (just left center) ────────────────────
    case TOTAL - 1: // offset 6
      return {
        transform: "translateX(-210px) translateY(55px) rotate(-30deg) scale(0.95)",
        zIndex: 40,
        filter: "grayscale(100%)",
        opacity: 0.9,
      };
  }
}

export default function CircularCards() {
  const [active, setActive] = useState(0);
 
  const handleTabClick = (index: number) => {
    setActive(index); // instantly bring that card to center
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment active → pulls right card into center (cards move left)
      setActive((prev) => (prev + 1) % TOTAL);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const HIGH_TECH_LAUNCH = new Date("2026-04-01T00:00:00");

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = HIGH_TECH_LAUNCH.getTime() - now;

    if (distance <= 0) {
      clearInterval(timer);
      return;
    }

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
  <div className="w-full min-h-screen xl:min-h-[115vh] flex flex-col items-center justify-start pt-4 bg-gray-100 overflow-hidden">
       <div className="mt-20 text-center">
        <H1>
          Shaping The Future
          <br />
          Across Every Sector
        </H1>
      </div>

      {/* Tabs */}
  {/* Tabs */}
<div
  className=" 
    mt-10
    w-full xl:max-w-3xl
    bg-gray-200
     rounded-full
    p-2
    flex
    gap-3 mx-auto
    overflow-x-auto
    snap-x snap-mandatory
    scroll-smooth
    xl:overflow-visible
    xl:justify-center
  "
  style={{
    scrollPaddingLeft: "1rem",
    scrollPaddingRight: "1rem",
  }}
>
  {tabs.map((tab, index) => (
    <button
      key={index}
      onClick={() => handleTabClick(index)}
      className={`
        shrink-0
        snap-start
        whitespace-nowrap
        px-4
        xl:px-6 py-3 xl:py-2 
        text-md md:text-base
        font-bold font-quicksand
        rounded-lg
        transition-all duration-300
        ${
          active === index
            ? "bg-purple-600 text-white shadow-md"
            : "text-[#141414]"
        }
      `}
    >
      {tab}
    </button>
  ))}
</div>
      <div className="relative w-[1100px] xl:h-[600px]  pt-10  flex  items-start xl:items-center justify-center">
     {images.map((src, index) => {
  const offset = (index - active + TOTAL) % TOTAL;
  const style = getPosition(offset);
  const isCenter = offset === 0;
  const isHighTech = tabs[index]?.includes("High Tech");

  return (
    <div
      key={index}
      className={`absolute xl:w-[260px] xl:h-[380px] w-[200px] h-[300px] mt-10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out block group ${
        isHighTech ? "cursor-default" : "cursor-pointer"
      }`}
      style={style}
      onClick={(e) => {
        if (isHighTech) {
          e.preventDefault();
        } else {
          window.open(links[index], "_blank");
        }
      }}
    >
      <img
        src={`${src}?auto=format&fit=crop&w=900&q=80`}
        alt={tabs[index] ?? "Industry"}
        className="w-full h-full object-cover"
      />

      {/* Normal Industry Title (center only) */}
      {isCenter && !isHighTech && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <H2 className="text-white text-xl xl:text-2xl font-bold tracking-wide">
            {tabs[index]}
          </H2>
        </div>
      )}

      {/* High Tech Coming Soon Overlay */}
      {isHighTech && (
        <div className="absolute inset-0 bg-black/70 opacity-0   group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center text-white text-center px-4">
          <H2 className="text-lg xl:text-xl font-bold mb-3">
            High Tech
          </H2>

          <div className="flex gap-3 text-xs xl:text-sm font-semibold">
            <div>
              <p className="text-lg">{timeLeft.days}</p>
              <span>Days</span>
            </div>
            <div>
              <p className="text-lg">{timeLeft.hours}</p>
              <span>Hrs</span>
            </div>
            <div>
              <p className="text-lg">{timeLeft.minutes}</p>
              <span>Min</span>
            </div>
            <div>
              <p className="text-lg">{timeLeft.seconds}</p>
              <span>Sec</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
})}
      </div>
    </div>
  );
}