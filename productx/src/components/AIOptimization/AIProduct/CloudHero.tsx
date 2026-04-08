import type { CSSProperties } from "react";
import { H1, H4, P } from "../../../styles/Typography";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import ContactModal from "../Navbar/ContactModal";

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
}

interface CenterImageProps {
  style?: CSSProperties;
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


const NODES: NodeData[] = [
  { label: "Misconfiguration", iconSrc: "/AIProduct/icons/misconfiguration.png", highCost: "$7,500", lowCost: "$750"  },
  { label: "Duplication",      iconSrc: "/AIProduct/icons/duplication.png",      highCost: "$1,200", lowCost: "$220"  },
  { label: "Idle Resources",   iconSrc: "/AIProduct/icons/idle-resources.png",   highCost: "$3,500", lowCost: "$350"  },
  { label: "Overprovisioning", iconSrc: "/AIProduct/icons/overprovisioning.png", highCost: "$3,500", lowCost: "$252"  },
];

// const GRID_SIZE = 100;

// ─── Jerk-free scroller hook ──────────────────────────────────────────────────

function useInfiniteScroll(
  refs: React.RefObject<HTMLDivElement | null>[],
  speed: number,
  delayMs: number = 0
) {
  useEffect(() => {
    let rafId: number;
    let last: number | null = null;
    let offset = 0;
    let setWidth = 0;
    let started = false;

    const applyOffset = () => {
      refs.forEach(ref => {
        if (ref?.current) {
          ref.current.style.transform = `translateX(-${offset}px)`;
        }
      });
    };

    const measure = (): boolean => {
      const el = refs[0]?.current;
      if (!el) return false;
      const w = el.scrollWidth / 2;
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

      applyOffset();
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (started) return;
      if (!measure()) {
        rafId = requestAnimationFrame(start as unknown as FrameRequestCallback);
        return;
      }
      applyOffset();
      started = true;
      last = null;
      rafId = requestAnimationFrame(tick);
    };

    const timer = setTimeout(start, delayMs);

    const ro = new ResizeObserver(() => {
      measure();
    });
    if (refs[0]?.current) ro.observe(refs[0].current);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, delayMs]);
}

// ─── GridBackground ───────────────────────────────────────────────────────────

function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <svg
        className="absolute w-[180%] h-[180%]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          opacity: 0.8,
          transform: 'rotate(-20deg) translateX(-20%) translateY(-12%)',
          transformOrigin: 'center center',
          animation: 'float 12s ease-in-out infinite'
        }}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Diagonal grid pattern */}
          <pattern 
            id="floatGrid" 
            patternUnits="userSpaceOnUse" 
            width= "100" 
            height="100"
            patternTransform="rotate(85)"
          >
            <path 
              d="M 70 0 L 0 0 0 70" 
              fill="none" 
              stroke="#4f7db5" 
              strokeWidth="0.9"
            />
          </pattern>
        </defs>
        
        <rect 
          x="-35%" 
          y="25%" 
          width="170%" 
          height="120%" 
          fill="url(#floatGrid)" 
        />
      </svg>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: rotate(-20deg) translateX(-20%) translateY(-12%);
          }
          50% {
            transform: rotate(-20deg) translateX(-22%) translateY(-14%);
          }
        }
      `}</style>
    </div>
  );
}

// ─── HexNode ──────────────────────────────────────────────────────────────────

function HexNode({ label, iconSrc, cost, costColor, mobile = false }: HexNodeProps) {
  if (mobile) {
    return (
      <div className="mob-hex-node">
        <div className="mob-hex-wrapper">
          <div className="mob-hex-border" />
          <div className="mob-hex-body">
            <img src={iconSrc} alt={label} className="mob-hex-icon" />
            <div className="mob-hex-gloss" />
          </div>
        </div>
        <div className="mob-hex-label">
          <div className="mob-hex-cost" style={{ color: costColor }}>{cost}</div>
          <div className="mob-hex-name">{label}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="hex-node">
      <div className="hex-wrapper">
        <div className="hex-border" />
        <div className="hex-body">
          <img src={iconSrc} alt={label} className="hex-icon" />
          <div className="hex-gloss" />
        </div>
      </div>
      <div className="hex-label">
        <div className="hex-cost" style={{ color: costColor }}>{cost}</div>
        <div className="hex-name">{label}</div>
      </div>
    </div>
  );
}

// ─── CenterImage ──────────────────────────────────────────────────────────────

function CenterImage({ style }: CenterImageProps) {
  return (
    <div className="center-image-wrap" style={style}>
      <img src="/AIProduct/cube.png" alt="Cloud Dashboard" className="center-image" />
    </div>
  );
}

// ─── BottomRightCard ──────────────────────────────────────────────────────────

function BottomRightCard() {
  return (
    <div className="brc-wrap">
      <div className="brc-icon">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M6 15.5L12 21.5L24 9" stroke="black" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="">
        <H4 className="mb-2">Lorem ipsum </H4>
        <P className="text-white/90">
          We onboard users from 126+ countries whether you hold
          a passport or a residence permit we've got you covered.
        </P>
      </div>
    </div>
  );
}

// ─── ScrollingTrack ───────────────────────────────────────────────────────────

function ScrollingTrack({
  nodes, speed, mobile = false,
  leftColor, rightColor, leftCostKey, rightCostKey,
  delayMs = 0,
}: ScrollingTrackProps) {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll([leftRef, rightRef], speed, delayMs);

  const SET     = [...nodes, ...nodes, ...nodes, ...nodes];
  const loopSet = [...SET, ...SET];

  const wrapperClass = mobile ? "mobile-diagonal-track" : "diagonal-track-wrapper";
  const layerClass   = mobile ? "mobile-flow-layer"     : "flow-layer";
  const contentClass = mobile ? "mobile-flow-content"   : "flow-content";
  const leftMask     = mobile ? "mob-mask-left"         : "mask-left";
  const rightMask    = mobile ? "mob-mask-right"        : "mask-right";

  return (
    <div className={wrapperClass}>
      <div className={`${layerClass} ${leftMask}`}>
        <div ref={leftRef} className={contentClass}>
          {loopSet.map((node, i) => (
            <HexNode
              key={`l-${i}`}
              label={node.label}
              iconSrc={node.iconSrc}
              cost={node[leftCostKey]}
              costColor={leftColor}
              mobile={mobile}
            />
          ))}
        </div>
      </div>
      <div className={`${layerClass} ${rightMask}`}>
        <div ref={rightRef} className={contentClass}>
          {loopSet.map((node, i) => (
            <HexNode
              key={`r-${i}`}
              label={node.label}
              iconSrc={node.iconSrc}
              cost={node[rightCostKey]}
              costColor={rightColor}
              mobile={mobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CloudDietHero ────────────────────────────────────────────────────────────

export default function CloudDietHero() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800;12..96,900&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .hero-root {
          font-family: 'Bricolage Grotesque', sans-serif;
          background: #020B2D;
          position: relative;
          overflow: hidden;
          color: white;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .fade-in-up   { animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-in-up-1 { animation-delay: 0.10s; }
        .fade-in-up-2 { animation-delay: 0.22s; }
        .fade-in-up-3 { animation-delay: 0.38s; }
        .fade-in-up-4 { animation-delay: 0.54s; }

       
        

        /* ── Top content ── */
        .hero-top {
          position: relative;
          z-index: 30;
          padding: 40px 56px 0;
          max-width: 820px;
        }

        .desktop-visual { display: block; }
        .mobile-visual  { display: none; }

        /* ── Desktop diagonal track ── */
        .diagonal-track-wrapper {
          position: absolute;
          left: 50%;
          top: 46%;
          width: 250vw;
          height: 320px;
          transform: translateX(-50%) rotate(-20deg);
          transform-origin: center center;
          pointer-events: none;
          z-index: 5;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .flow-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
        }
        .flow-content {
          display: flex;
          gap: 40px;
          flex-shrink: 0;
          will-change: transform;
        }

        /* ── Desktop hex node ── */
        .hex-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 200px;
          flex-shrink: 0;
          transform: rotate(20deg);
        }
        .hex-wrapper {
          position: relative;
          width: 104px;
          height: 104px;
          filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
        }
        .hex-border {
          position: absolute;
          inset: -4px;
          background: rgba(148,163,184,0.55);
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
          z-index: 0;
        }
        .hex-body {
          position: absolute;
          inset: 0;
          background: rgba(30, 41, 59, 0.95);
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .hex-gloss {
          position: absolute;
          inset: 0;
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
          background: linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 65%);
          pointer-events: none;
          z-index: 2;
        }
        .hex-icon { width: 44px; height: 44px; object-fit: contain; position: relative; z-index: 3; }
        .hex-label { margin-top: 12px; text-align: center; position: relative; z-index: 2; }
        .hex-cost {
          font-weight: 700;
          font-size: 18px;
          font-family: 'Bricolage Grotesque', sans-serif;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .hex-name {
          color: #e2e8f0;
          font-weight: 600;
          font-size: 13px;
          font-family: 'Bricolage Grotesque', sans-serif;
          margin-top: 4px;
          letter-spacing: 0.2px;
        }

        /* Desktop masks */
        .mask-left {
          mask-image: linear-gradient(to right, black 0%, black 38%, transparent 52%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, black 0%, black 38%, transparent 52%, transparent 100%);
        }
        .mask-right {
          mask-image: linear-gradient(to right, transparent 0%, transparent 48%, black 62%, black 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 48%, black 62%, black 100%);
        }

        /* ── Desktop center image ── */
        .center-image-wrap {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          pointer-events: auto;
          width: clamp(220px, 28vw, 400px);
          height: clamp(220px, 28vw, 400px);
          left: 55%;
          top: 57%;
          transform: translate(-50%, -50%);
        }
        .center-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
          transform: rotate(20deg);
        }

        /* ── Desktop bottom-right card ── */
        .brc-wrap {
          position: absolute;
          bottom: 6%;
          right: 6%;
          width: clamp(280px, 38vw, 550px);
          padding: clamp(16px, 2vw, 30px);
          background: rgba(10, 18, 48, 0.82);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05);
          z-index: 25;
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.5vw, 20px);
          animation: slideInRight 1s cubic-bezier(0.16,1,0.3,1) 1.2s both;
        }
        .brc-icon {
          width: clamp(44px, 5vw, 64px);
          height: clamp(44px, 5vw, 64px);
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 24px rgba(59,130,246,0.45);
        }
        .brc-text { display: flex; flex-direction: column; gap: 6px; }
        .brc-title {
          color: #f1f5f9;
          font-size: clamp(13px, 1.3vw, 17px);
          font-weight: 800;
          font-family: 'Bricolage Grotesque', sans-serif;
          line-height: 1.25;
        }
        .brc-sub {
          color: #94a3b8;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 400;
          font-family: 'Bricolage Grotesque', sans-serif;
          line-height: 1.6;
        }

        /* ── Mobile track section ── */
        .mobile-track-section {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
        }
        .mobile-cube-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 240px;
          height: 240px;
          z-index: 20;
          pointer-events: none;
        }
        .mobile-cube-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 10px 24px rgba(0,0,0,0.5));
          transform: rotate(23deg);
        }

        .mobile-diagonal-track {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 200vw;
          height: 200px;
          transform: translateX(-50%) translateY(-50%) rotate(-20deg);
          transform-origin: center center;
          pointer-events: none;
          z-index: 5;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .mobile-flow-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
        }
        .mobile-flow-content {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
          will-change: transform;
        }

        /* ── Mobile hex node ── */
        .mob-hex-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 120px;
          flex-shrink: 0;
          transform: rotate(20deg);
        }
        .mob-hex-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          filter: drop-shadow(0px 3px 3px rgba(0,0,0,0.3));
        }
        .mob-hex-border {
          position: absolute;
          inset: -3px;
          background: rgba(148,163,184,0.55);
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
          z-index: 0;
        }
        .mob-hex-body {
          position: absolute;
          inset: 0;
          background: rgba(30, 41, 59, 0.95);
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .mob-hex-gloss {
          position: absolute;
          inset: 0;
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
          background: linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 65%);
          z-index: 2;
        }
        .mob-hex-icon { width: 26px; height: 26px; object-fit: contain; position: relative; z-index: 3; }
        .mob-hex-label { margin-top: 7px; text-align: center; z-index: 2; }
        .mob-hex-cost {
          font-weight: 700;
          font-size: 11px;
          font-family: 'Bricolage Grotesque', sans-serif;
          letter-spacing: 0.2px;
          textShadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        .mob-hex-name {
          color: #e2e8f0;
          font-weight: 600;
          font-size: 9px;
          font-family: 'Bricolage Grotesque', sans-serif;
          margin-top: 2px;
          letter-spacing: 0.1px;
        }

        .mob-mask-left {
          mask-image: linear-gradient(to right, black 0%, black 30%, transparent 48%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, black 0%, black 30%, transparent 48%, transparent 100%);
        }
        .mob-mask-right {
          mask-image: linear-gradient(to right, transparent 0%, transparent 52%, black 70%, black 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 52%, black 70%, black 100%);
        }

        /* ── Mobile card ── */
        .mobile-brc-wrap {
          margin: 0 20px;
          padding: 20px;
          background: rgba(10, 18, 48, 0.82);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 48px rgba(0,0,0,0.55);
          display: flex;
          align-items: center;
          gap: 16px;
          animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both;
        }
        .mobile-brc-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 20px rgba(59,130,246,0.4);
        }
        .mobile-brc-title {
          color: #f1f5f9;
          font-size: 14px;
          font-weight: 800;
          font-family: 'Bricolage Grotesque', sans-serif;
          line-height: 1.25;
          margin-bottom: 4px;
        }
        .mobile-brc-sub {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 400;
          font-family: 'Bricolage Grotesque', sans-serif;
          line-height: 1.55;
        }

        /* ── Desktop ── */
        @media (min-width: 769px) {
          .hero-root { min-height: 120vh; }
          .desktop-visual { display: block; }
          .mobile-visual  { display: none;  }
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) and (min-width: 769px) {
          .hero-top { padding: 32px 36px 0; }
          .diagonal-track-wrapper { top: 50%; height: 260px; }
          .hex-node { transform: rotate(20deg) scale(0.85); }
          .brc-wrap { right: 4%; bottom: 4%; }
        }

        /* ── Mobile ≤768 ── */
        @media (max-width: 768px) {
          .hero-root {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .desktop-visual { display: none !important; }
          .mobile-visual  { display: block; }
          .hero-top { padding: 20px 20px 0; max-width: 100%; }
          .btn-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
}

.btn-group button,
.btn-group a {
  flex: 1;
  width: 100%;
  min-width: 0;
}
        }

        /* ── Small mobile ≤480 ── */
        @media (max-width: 480px) {
          .mobile-track-section { height: 280px; }
          .mobile-cube-wrap { width: 200px; height: 200px; }
          .mob-hex-node { height: 110px; }
          .mobile-brc-wrap { margin: 0 16px; }
        }
      `}</style>

      <div className="hero-root">
        <GridBackground />

        <div style={{ position:"absolute", top:"20%", left:"35%", width:500, height:400, background:"radial-gradient(ellipse, rgba(60,100,220,0.12) 0%, transparent 70%)", filter:"blur(40px)", pointerEvents:"none", zIndex:1 }} />
        <div style={{ position:"absolute", bottom:"10%", left:"5%", width:300, height:300, background:"radial-gradient(ellipse, rgba(40,80,200,0.08) 0%, transparent 70%)", filter:"blur(30px)", pointerEvents:"none", zIndex:1 }} />

        {/* ── Top content ── */}
        <div className="hero-top">
          <H1 className="fade-in-up fade-in-up-1 mt-14 lg:mt-30">
            AI-Powered Azure<br />Optimization Platform
          </H1>
          <P className="fade-in-up fade-in-up-2 text-white/90 my-6 max-w-xl">
            CloudDIET profiles your Azure resources, analyzes configurations and
            usage, and delivers recommendations that cut waste across IaaS, PaaS,
            and licensing. Enterprises save 30% on average with our pay-for-performance model.
          </P>
          <div className="fade-in-up fade-in-up-3 btn-group flex gap-4 w-full max-w-md">
             <button
  className="group flex-1 flex items-center justify-center h-[48px] px-[24px] py-[12px] rounded-[8px] font-bricolage text-[16px] bg-transparent text-white border-white border-2 shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
  onClick={() => setModalOpen(true)}
>
  Demo
  <span className="flex items-center gap-4 ml-2">
    <span className="relative flex items-center w-[20px] h-[20px]">
      <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </span>
  </span>
</button>

<a
  href="https://login.clouddiet.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex-1 flex items-center justify-center h-[48px] px-[24px] py-[12px] rounded-[8px] font-bricolage font-bold text-[16px] bg-white text-black shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] transition-all duration-300 hover:bg-white hover:text-[#254D70]"
>
  Login
  <span className="flex items-center gap-2 ml-2">
    <span className="relative flex items-center w-[20px] h-[20px]">
      <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      <ArrowRightIcon className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </span>
  </span>
</a>
          </div>
        </div>

        {/* ── Desktop visual ── */}
        <div className="desktop-visual">
          {/*
            delayMs changed to 0 to remove the pause
          */}
          <ScrollingTrack
            nodes={NODES}
            speed={100}
            delayMs={0} 
            leftColor="#22c55e"
            rightColor="#ef4444"
            leftCostKey="lowCost"
            rightCostKey="highCost"
          />
          <CenterImage />
          <BottomRightCard />
        </div>

        {/* ── Mobile visual ── */}
        <div className="mobile-visual">
          <div className="mobile-track-section fade-in-up fade-in-up-4">
            {/*
              delayMs changed to 0 to remove the pause
            */}
            <ScrollingTrack
              nodes={NODES}
              speed={50}
              mobile
              delayMs={0}
              leftColor="#22c55e"
              rightColor="#ef4444"
              leftCostKey="lowCost"
              rightCostKey="highCost"
            />
            <div className="mobile-cube-wrap">
              <img src="/AIProduct/cube.png" alt="Cloud Dashboard" />
            </div>
          </div>

          <div className="mobile-brc-wrap">
            <div className="mobile-brc-icon">
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
                <path d="M6 15.5L12 21.5L24 9" stroke="black" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <H4 className="md-4">Lorem ipsum</H4>
              <P className="mobile-brc-sub">
                We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.
              </P>
            </div>
          </div>
        </div>
                {modalOpen && (
          <ContactModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </>
  );
}