"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { H1, H4, P } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NodeData {
  label: string;
  iconSrc: string;
  highCost: string;
  lowCost: string;
}
interface HexNodeProps {
  label: string;
  iconSrc: string;
  cost: string;
  costColor: string;
  mobile?: boolean;
  flat?: boolean;
  layer?: "left" | "right"; // ✅ new — tracks which visual side
}
interface ScrollingTrackProps {
  nodes: NodeData[];
  speed: number;
  mobile?: boolean;
  leftColor: string;
  rightColor: string;
  leftCostKey: "lowCost" | "highCost";
  rightCostKey: "lowCost" | "highCost";
  delayMs?: number;
}

interface CenterImageProps {
  cloudRef: React.RefObject<HTMLDivElement | null>;
  overlapCount: number;   // ✅ was: isHighlighted: boolean
  mobile?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const NODES: NodeData[] = [
  { label: "Misconfiguration", iconSrc: "/AIProduct/Misconfiguration.svg", highCost: "$7,500", lowCost: "$750" },
  { label: "Duplication", iconSrc: "/AIProduct/Duplication.svg", highCost: "$1,200", lowCost: "$220" },
  { label: "Idle Resources", iconSrc: "/AIProduct/IdleResource.svg", highCost: "$3,500", lowCost: "$350" },
  { label: "Overprovisioning", iconSrc: "/AIProduct/Overprovisioning.svg", highCost: "$3,500", lowCost: "$252" },
];

// Hexagon clip-path used across all hex nodes
const HEX_CLIP = "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

// ─── Framer Motion Variants ───────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
  },
});

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 1.2 },
  },
};

// ─── useInfiniteScroll ────────────────────────────────────────────────────────
function useInfiniteScroll(
  refs: React.RefObject<HTMLDivElement | null>[],
  speed: number,
  delayMs = 0
) {
  useEffect(() => {
    let rafId: number;
    let last: number | null = null;
    let offset = 0;
    let setWidth = 0;
    let started = false;

    const apply = () =>
      refs.forEach(r => { if (r?.current) r.current.style.transform = `translateX(-${offset}px)`; });

    const measure = () => {
      const w = (refs[0]?.current?.scrollWidth ?? 0) / 2;
      if (w <= 0) return false;
      setWidth = w;
      return true;
    };

    const tick = (ts: number) => {
      if (last === null) last = ts;
      const delta = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      offset += speed * delta;
      if (offset >= setWidth) offset -= setWidth;
      apply();
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (started) return;
      if (!measure()) { rafId = requestAnimationFrame(start as unknown as FrameRequestCallback); return; }
      apply();
      started = true;
      last = null;
      rafId = requestAnimationFrame(tick);
    };

    const timer = setTimeout(start, delayMs);
    const ro = new ResizeObserver(() => measure());
    if (refs[0]?.current) ro.observe(refs[0].current);
    return () => { clearTimeout(timer); cancelAnimationFrame(rafId); ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, delayMs]);
}

// ─── GridBackground ───────────────────────────────────────────────────────────
// Isometric perspective grid — matches reference image look
function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Perspective wrapper gives the 3D depth illusion */}
      <div className="absolute inset-0" style={{ perspective: "800px" }}>
        <motion.div
          className="absolute w-[220%] h-[220%]"
          style={{
            left: "-60%",
            top: "-25%",
            transformOrigin: "center 35%",
          }}
          // Subtle floating animation keeps grid alive
          animate={{
            rotateX: [52, 55, 52],
            rotateZ: [-14, -16, -14],
            y: ["0%", "-2%", "0%"],
          }}
          initial={{ rotateX: 52, rotateZ: -14 }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ opacity: 0.55 }}
          >
            <defs>
              {/*
                Full-span L-path (100×100): when tiled it creates a
                continuous square grid — rotateX above gives the
                3D perspective-floor look seen in the reference image.
              */}
              <pattern
                id="heroGrid"
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="#4f7db5"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

// function isIntersecting(a: DOMRect, b: DOMRect) {
//   return !(
//     a.right < b.left ||
//     a.left > b.right ||
//     a.bottom < b.top ||
//     a.top > b.bottom
//   );
// }

// ─── HexNode ──────────────────────────────────────────────────────────────────
function HexNode({ label, iconSrc, cost, costColor, mobile = false, flat = false, layer = "left" }: HexNodeProps) {
  const wrapSize = mobile ? 60 : 104;
  const iconSize = mobile ? "w-[26px] h-[26px]" : "w-11 h-11";
  const nodeW = mobile ? 90 : 160;
  const nodeH = mobile ? 120 : 200;
  const borderInset = mobile ? -3 : -4;

  return (
    <div
      data-hex-node="true"
      data-hex-layer={layer}            // ✅ tells detector which side this belongs to
      className="flex flex-col items-center justify-center flex-shrink-0"
      style={{ width: nodeW, height: nodeH, transform: "rotate(20deg)" }}
    >
      {/* Label */}
      <div className={`${mobile ? "mb-[7px]" : "mb-3"} text-center z-[2]`}>
        <div
          className={`font-bold tracking-[0.3px] ${mobile ? "text-[11px]" : "text-[18px]"}`}
          style={{ color: costColor, textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          {cost}
        </div>
        <div className={`text-slate-200 font-semibold ${mobile ? "text-[9px] mt-[2px]" : "text-[13px] mt-1"} tracking-[0.2px]`}>
          {label}
        </div>
      </div>

      {/* Hex shape — fully solid, no transparency */}
      <div
        className="relative"
        style={{
          width: wrapSize,
          height: wrapSize,
          filter: `drop-shadow(0px ${mobile ? 3 : 4}px ${mobile ? 3 : 4}px rgba(0,0,0,0.4))`,
          transform: flat ? "perspective(350px) rotateX(52deg) scale(0.92)" : "none",
          transformOrigin: "center center",
        }}
      >
        {/* ✅ Border ring — solid medium grey (was bg-slate-400/55 = semi-transparent) */}
        <div
          className="absolute z-0"
          style={{
            inset: borderInset,
            clipPath: HEX_CLIP,
            background: "#4e6070",  // solid grey — clearly visible, no bleed-through
          }}
        />
        {/* ✅ Body — solid dark navy (was bg-slate-800/95 = slightly see-through) */}
        <div
          className="absolute inset-0 flex items-center justify-center z-[1]"
          style={{
            clipPath: HEX_CLIP,
            background: "#0d1d33",  // solid dark navy — opaque, no transparency
          }}
        >
          <img src={iconSrc} alt={label} className={`${iconSize} object-contain relative z-[3]`} />
          {/* Gloss */}
          <div
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              clipPath: HEX_CLIP,
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}


function CenterImage({ cloudRef, overlapCount, mobile = false }: CenterImageProps) {
  // Normalize 0 → dim, 1 icon → subtle, 2+ → stronger
  const intensity = Math.min(overlapCount / 2, 1);
  const glowAlpha = 0.25 + intensity * 0.45;      // 0.25 → 0.70
  const glowSpread = 12 + intensity * 20;          // 12px → 32px

  return (
    <div
      className={`absolute flex items-center justify-center z-20 ${mobile ? "pointer-events-none" : "pointer-events-auto"}`}
      style={mobile ? {
        left: "50%",
        top: "50%",
        width: 240,
        height: 240,
        transform: "translate(-50%, -50%)",
      } : {
        width: "clamp(200px, 20vw, 300px)",   // ✅ reduced
        height: "clamp(200px, 20vw, 300px)",  // ✅ reduced
        left: "55%",
        top: "57%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        ref={cloudRef}
        className="relative w-full h-full"
        animate={{
          scale: 1 + intensity * 0.04,         // 1 → 1.04 gradually
          filter: overlapCount > 0
            ? `drop-shadow(0 0 ${glowSpread}px rgba(59,130,246,${glowAlpha})) drop-shadow(0 0 50px rgba(96,165,250,${intensity * 0.35}))`
            : "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <img
          src="/AIProduct/Cloud.png"
          alt="Cloud Dashboard"
          className="w-full h-full object-contain"
        />

        <motion.div
          className={`absolute inset-0 flex items-center justify-center ${mobile ? "mt-10" : "xl:mt-15"}`}
          animate={{ opacity: 0.88 + intensity * 0.12 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/AIProduct/Text.png"
            alt="CloudDIET"
            className="object-cover"
            style={{ width: "60%", height: "20%" }}
          />
        </motion.div>

        {/* Glow overlay — fades in/out per icon count */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{ opacity: intensity * 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(96,165,250,0.14) 35%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />
      </motion.div>
    </div>
  );
}

// ─── BottomRightCard ──────────────────────────────────────────────────────────
function BottomRightCard() {
  return (
    <motion.div
      className="absolute bottom-[6%] right-[6%] z-[25] flex items-center rounded-[18px] border border-white/[0.09] backdrop-blur-[16px]"
      style={{
        width: "clamp(280px, 38vw, 550px)",
        padding: "clamp(16px, 2vw, 30px)",
        gap: "clamp(12px, 1.5vw, 20px)",
        background: "rgba(10, 18, 48, 0.82)",
        boxShadow: "0 12px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      variants={slideRight}
      initial="hidden"
      animate="visible"
    >
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-full bg-white"
        style={{
          width: "clamp(44px, 5vw, 64px)",
          height: "clamp(44px, 5vw, 64px)",
          boxShadow: "0 0 24px rgba(59,130,246,0.45)",
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M6 15.5L12 21.5L24 9" stroke="black" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <H4 className="mb-2">Lorem ipsum</H4>
        <P className="text-white/90">
          We onboard users from 126+ countries whether you hold a passport or
          a residence permit we've got you covered.
        </P>
      </div>
    </motion.div>
  );
}

// ─── ScrollingTrack ───────────────────────────────────────────────────────────
function ScrollingTrack({
  nodes, speed, mobile = false,
  leftColor, rightColor, leftCostKey, rightCostKey,
  delayMs = 0,
}: ScrollingTrackProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll([leftRef, rightRef], speed, delayMs);

  const SET = [...nodes, ...nodes, ...nodes, ...nodes];
  const loopSet = [...SET, ...SET];

  const MASK_L = mobile
    ? "linear-gradient(to right, black 0%, black 30%, transparent 48%, transparent 100%)"
    : "linear-gradient(to right, black 0%, black 38%, transparent 52%, transparent 100%)";
  const MASK_R = mobile
    ? "linear-gradient(to right, transparent 0%, transparent 52%, black 70%, black 100%)"
    : "linear-gradient(to right, transparent 0%, transparent 48%, black 62%, black 100%)";

  const trackStyle: React.CSSProperties = mobile
    ? { left: "50%", top: "50%", width: "200vw", height: 200, transform: "translateX(-50%) translateY(-50%) rotate(-20deg)" }
    : { left: "50%", top: "46%", width: "250vw", height: 320, transform: "translateX(-50%) rotate(-20deg)" };

  const gap = mobile ? "gap-4" : "gap-10";

  return (
    <div className="absolute pointer-events-none z-[5] flex items-center overflow-hidden" style={trackStyle}>

      {/* ✅ Left layer — FLAT on grid */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ maskImage: MASK_L, WebkitMaskImage: MASK_L }}
      >
        <div ref={leftRef} className={`flex ${gap} flex-shrink-0`} style={{ willChange: "transform" }}>
          {loopSet.map((node, i) => (
            <HexNode
              key={`l-${i}`}
              label={node.label}
              iconSrc={node.iconSrc}
              cost={node[leftCostKey]}
              costColor={leftColor}
              mobile={mobile}
              flat={false}          // ✅ flat on grid
              layer="left"
            />
          ))}
        </div>
      </div>

      {/* ✅ Right layer — UPRIGHT (unchanged) */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ maskImage: MASK_R, WebkitMaskImage: MASK_R }}
      >
        <div ref={rightRef} className={`flex ${gap} flex-shrink-0`} style={{ willChange: "transform" }}>
          {loopSet.map((node, i) => (
            <HexNode
              key={`r-${i}`}
              label={node.label}
              iconSrc={node.iconSrc}
              cost={node[rightCostKey]}
              costColor={rightColor}
              mobile={mobile}
              flat={true}         // ✅ upright as before
              layer="right"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CloudDietHero (main export) ──────────────────────────────────────────────
export default function CloudDietHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [overlapCount, setOverlapCount] = useState(0);

  const cloudRefDesktop = useRef<HTMLDivElement>(null);
  const cloudRefMobile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;

    const checkOverlap = () => {
      let cloudEl = cloudRefDesktop.current;
      if (cloudEl && cloudEl.getBoundingClientRect().width === 0) {
        cloudEl = cloudRefMobile.current;
      }
      if (!cloudEl || cloudEl.getBoundingClientRect().width === 0) {
        rafId = requestAnimationFrame(checkOverlap);
        return;
      }

      const cloudRect = cloudEl.getBoundingClientRect();
      const viewCX = window.innerWidth / 2; // screen horizontal center

      // Tighten the cloud detection zone slightly
      const detectZone = {
        left: cloudRect.left + cloudRect.width * 0.12,
        right: cloudRect.right - cloudRect.width * 0.12,
        top: cloudRect.top + cloudRect.height * 0.12,
        bottom: cloudRect.bottom - cloudRect.height * 0.12,
      };

      const allHexNodes = Array.from(
        document.querySelectorAll<HTMLElement>('[data-hex-node="true"]')
      );

      let count = 0;
      allHexNodes.forEach((node) => {
        const layer = node.getAttribute("data-hex-layer");
        const rect = node.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const cx = (rect.left + rect.right) / 2;
        const cy = (rect.top + rect.bottom) / 2;

        // ✅ KEY FIX — only count nodes in their VISIBLE (unmasked) half of the screen
        // CSS maskImage hides nodes visually but getBoundingClientRect() still returns
        // their real DOM position. Without this check, masked off-screen nodes would
        // falsely trigger the glow constantly.
        //
        // Left layer  → visible when cx is LEFT  of screen center (cx < viewCX)
        // Right layer → visible when cx is RIGHT of screen center (cx > viewCX)
        const inVisibleRegion = layer === "left" ? cx < viewCX : cx > viewCX;
        if (!inVisibleRegion) return;

        // Filter nodes that are off-screen entirely
        if (cx < 0 || cx > window.innerWidth || cy < 0 || cy > window.innerHeight) return;

        // Node CENTER must be inside the (tightened) cloud zone
        if (
          cx > detectZone.left &&
          cx < detectZone.right &&
          cy > detectZone.top &&
          cy < detectZone.bottom
        ) {
          count++;
        }
      });

      // Only trigger re-render when count actually changes
      setOverlapCount(prev => (prev !== count ? count : prev));
      rafId = requestAnimationFrame(checkOverlap);
    };

    rafId = requestAnimationFrame(checkOverlap);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="relative overflow-hidden text-white min-h-[120vh]
                 max-md:min-h-screen max-md:flex max-md:flex-col max-md:pb-8"
      style={{ background: "#020B2D", fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      {/* ── Isometric grid background ── */}
      <GridBackground />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute pointer-events-none z-[1]"
        style={{
          top: "20%", left: "35%", width: 500, height: 400,
          background: "radial-gradient(ellipse, rgba(60,100,220,0.12) 0%, transparent 70%)",
          filter: "blur(40px)"
        }} />
      <div className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "10%", left: "5%", width: 300, height: 300,
          background: "radial-gradient(ellipse, rgba(40,80,200,0.08) 0%, transparent 70%)",
          filter: "blur(30px)"
        }} />

      {/* ── Top hero content ── */}
      <div className="relative z-[30] px-14 pt-10 max-w-[820px] max-md:px-5 max-md:pt-5 max-md:max-w-full">

        <motion.div variants={fadeUp(0.10)} initial="hidden" animate="visible">
          <H1 className="mt-14 lg:mt-30">
            AI-Powered Azure<br />Optimization Platform
          </H1>
        </motion.div>

        <motion.div variants={fadeUp(0.22)} initial="hidden" animate="visible">
          <P className="text-white/90 my-6 max-w-xl">
            CloudDIET profiles your Azure resources, analyzes configurations and usage,
            and delivers recommendations that cut waste across IaaS, PaaS, and licensing.
            Enterprises save 30% on average with our pay-for-performance model.
          </P>
        </motion.div>

        <motion.div
          className="flex flex-row gap-4 w-full max-w-md max-md:gap-[10px]"
          variants={fadeUp(0.38)}
          initial="hidden"
          animate="visible"
        >
          {/* Demo */}
          <button
            onClick={() => setModalOpen(true)}
            className="group flex-1 flex items-center justify-center h-12 px-6 py-3 rounded-lg
                       text-base font-bold bg-transparent text-white border-2 border-white
                       transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
          >
            Demo
            <span className="relative flex items-center w-5 h-5 ml-2">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </button>

          {/* Login */}
          <a
            href="https://login.clouddiet.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center h-12 px-6 py-3 rounded-lg
                       text-base font-bold bg-white text-black
                       transition-all duration-300 hover:text-[#254D70]"
          >
            Login
            <span className="relative flex items-center w-5 h-5 ml-2">
              <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* ── Desktop visual ── */}
      <div className="block max-md:hidden">
        <ScrollingTrack
          nodes={NODES}
          speed={50}        // ✅ was 100
          delayMs={0}
          leftColor="#22c55e"
          rightColor="#ef4444"
          leftCostKey="lowCost"
          rightCostKey="highCost"
        />
        <CenterImage cloudRef={cloudRefDesktop} overlapCount={overlapCount} />
        <BottomRightCard />
      </div>

      {/* ── Mobile visual ── */}
      <div className="hidden max-md:block">
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: 320 }}
          variants={fadeUp(0.54)}
          initial="hidden"
          animate="visible"
        >
          <ScrollingTrack
            nodes={NODES} speed={25} mobile delayMs={0}   // ✅ was 50
            leftColor="#22c55e" rightColor="#ef4444"
            leftCostKey="lowCost" rightCostKey="highCost"
          />
          {/* Mobile center cloud */}
          <CenterImage mobile cloudRef={cloudRefMobile} overlapCount={overlapCount} />
        </motion.div>

        {/* Mobile card */}
        <motion.div
          className="mx-5 p-5 flex items-center gap-4 rounded-[18px] border border-white/[0.09] backdrop-blur-[16px]"
          style={{ background: "rgba(10, 18, 48, 0.82)", boxShadow: "0 12px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)" }}
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
        >
          <div
            className="w-12 h-12 flex-shrink-0 rounded-full bg-white flex items-center justify-center"
            style={{ boxShadow: "0 0 24px rgba(59,130,246,0.45)" }}
          >
            <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
              <path d="M6 15.5L12 21.5L24 9" stroke="black" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <H4 className="mb-2">Lorem ipsum</H4>
            <P className="text-white/90 text-sm leading-[1.55]">
              We onboard users from 126+ countries whether you hold a passport or
              a residence permit we've got you covered.
            </P>
          </div>
        </motion.div>
      </div>

      {modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  );
}