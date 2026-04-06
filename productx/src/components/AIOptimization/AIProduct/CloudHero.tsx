import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { H1 } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";

// ─── Node data ────────────────────────────────────────────────────────────────

interface NodeData {
  label: string;
  iconSrc: string;
  highCost: string;
  lowCost: string;
  color: string;
}

const NODES: NodeData[] = [
  { label: "Misconfiguration", iconSrc: "/AIProduct/icons/misconfiguration.png", highCost: "$7,500", lowCost: "$750",  color: "#7c6fcd" },
  { label: "Duplication",      iconSrc: "/AIProduct/icons/duplication.png",      highCost: "$1,200", lowCost: "$220",  color: "#5b8fd4" },
  { label: "Idle Resources",   iconSrc: "/AIProduct/icons/idle-resources.png",   highCost: "$3,500", lowCost: "$350",  color: "#4db8a0" },
  { label: "Overprovisioning", iconSrc: "/AIProduct/icons/overprovisioning.png", highCost: "$3,500", lowCost: "$252",  color: "#9b78e0" },
];

// ─── Canvas tunnel animation hook ─────────────────────────────────────────────

function useTunnelCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let lastTs: number | null = null;
    let floatT = 0;

    // ── Loaded icon images ──
    const iconImgs: Record<string, HTMLImageElement> = {};
    NODES.forEach((n) => {
      const img = new Image();
      img.src = n.iconSrc;
      iconImgs[n.iconSrc] = img;
    });

    // ── Dimensions ──
    let W = 0, H = 0;

    function sync() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width  = W;
      canvas!.height = H;
    }

    // ── Track: RIGHT-MIDDLE → LEFT-BOTTOM ──
    function getTrackEnds() {
      return {
        startX: W * 1.15, startY: H * 0.38,
        endX:   W * -0.15, endY:   H * 0.82,
      };
    }

    function trackPoint(t: number) {
      const { startX, startY, endX, endY } = getTrackEnds();
      return { x: startX + (endX - startX) * t, y: startY + (endY - startY) * t };
    }

    function screenToT(sx: number, sy: number) {
      const { startX, startY, endX, endY } = getTrackEnds();
      const dx = endX - startX, dy = endY - startY;
      return ((sx - startX) * dx + (sy - startY) * dy) / (dx * dx + dy * dy);
    }

    // ── Box ──
    const bxFrac = 0.62, byFrac = 0.54;
    function bw() { return Math.min(200, W * 0.22); }
    function bh() { return bw() * 0.72; }
    function boxCenter() { return { bx: W * bxFrac, by: H * byFrac }; }

    function boxTRange() {
      const { bx, by } = boxCenter();
      const { startX, startY, endX, endY } = getTrackEnds();
      const trackLen = Math.hypot(endX - startX, endY - startY);
      const tCenter  = screenToT(bx, by);
      const half     = (bw() * 0.5) / trackLen;
      return { tIn: tCenter + half * 0.85, tOut: tCenter - half * 0.85 };
    }

    // ── Hex path ──
    function hexPath(x: number, y: number, r: number) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + r * Math.cos(a), py = y + r * Math.sin(a);
        i === 0 ? ctx!.moveTo(px, py) : ctx!.lineTo(px, py);
      }
      ctx!.closePath();
    }

    // ── Draw hex node ──
    function drawHexNode(
      x: number, y: number,
      node: NodeData,
      costKey: "highCost" | "lowCost",
      costColor: string,
      alpha: number,
      scale = 1
    ) {
      const R  = Math.min(30, bw() * 0.16) * scale;
      const f1 = Math.max(9,  R * 0.44);
      const f2 = Math.max(8,  R * 0.35);

      ctx!.save();
      ctx!.globalAlpha = alpha;

      // border ring
      hexPath(x, y, R + 3);
      ctx!.fillStyle = "rgba(148,163,184,0.4)";
      ctx!.fill();

      // dark body
      hexPath(x, y, R);
      ctx!.fillStyle = "rgba(18,26,54,0.97)";
      ctx!.fill();

      // gloss
      hexPath(x, y, R);
      const g = ctx!.createLinearGradient(x - R, y - R, x + R, y + R);
      g.addColorStop(0,    "rgba(255,255,255,0.09)");
      g.addColorStop(0.65, "rgba(255,255,255,0)");
      ctx!.fillStyle = g;
      ctx!.fill();

      // icon image or fallback circle
      const img = iconImgs[node.iconSrc];
      const iconR = R * 0.42;
      if (img.complete && img.naturalWidth > 0) {
        ctx!.save();
        hexPath(x, y, R - 2);
        ctx!.clip();
        ctx!.drawImage(img, x - iconR, y - iconR * 1.2, iconR * 2, iconR * 2);
        ctx!.restore();
      } else {
        ctx!.beginPath();
        ctx!.arc(x, y - R * 0.18, iconR, 0, Math.PI * 2);
        ctx!.fillStyle = node.color + "cc";
        ctx!.fill();
      }

      // cost
      ctx!.font         = `700 ${f1}px 'Bricolage Grotesque', sans-serif`;
      ctx!.fillStyle    = costColor;
      ctx!.textAlign    = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText(node[costKey], x, y + R + f1 * 0.9);

      // label
      ctx!.font      = `600 ${f2}px 'Bricolage Grotesque', sans-serif`;
      ctx!.fillStyle = "#cbd5e1";
      ctx!.fillText(node.label, x, y + R + f1 * 0.9 + f2 * 1.35);

      ctx!.restore();
    }

    // ── Cloud icon ──
    function drawCloud(x: number, y: number, r: number) {
      ctx!.save();
      ctx!.globalAlpha = 0.9;
      ctx!.beginPath(); ctx!.arc(x - r * 0.3, y + r * 0.15, r * 0.38, 0, Math.PI * 2);
      ctx!.fillStyle = "#7c6fcd"; ctx!.fill();
      ctx!.beginPath(); ctx!.arc(x, y - r * 0.05, r * 0.5, 0, Math.PI * 2);
      ctx!.fillStyle = "#9d8fe8"; ctx!.fill();
      ctx!.beginPath(); ctx!.arc(x + r * 0.35, y + r * 0.1, r * 0.35, 0, Math.PI * 2);
      ctx!.fillStyle = "#bbaff5"; ctx!.fill();
      ctx!.beginPath(); ctx!.rect(x - r * 0.6, y + r * 0.1, r * 1.2, r * 0.38);
      ctx!.fillStyle = "#9d8fe8"; ctx!.fill();
      // lightning
      ctx!.beginPath();
      ctx!.moveTo(x + 3,  y - r * 0.52);
      ctx!.lineTo(x - 2,  y - r * 0.05);
      ctx!.lineTo(x + 3,  y - r * 0.05);
      ctx!.lineTo(x - 3,  y + r * 0.32);
      ctx!.lineTo(x + 8,  y - r * 0.18);
      ctx!.lineTo(x + 2,  y - r * 0.18);
      ctx!.closePath();
      ctx!.fillStyle = "#2d1b8a"; ctx!.fill();
      ctx!.restore();
    }

    // ── Isometric box ──
    function drawIsoBox(cx: number, cy: number, w: number, h: number, floatOff: number) {
      cy += floatOff;
      const d = h * 0.32;

      // top face
      ctx!.beginPath();
      ctx!.moveTo(cx - w / 2,     cy - h / 2);
      ctx!.lineTo(cx + w / 2,     cy - h / 2);
      ctx!.lineTo(cx + w / 2 + d, cy - h / 2 - d);
      ctx!.lineTo(cx - w / 2 + d, cy - h / 2 - d);
      ctx!.closePath();
      const tg = ctx!.createLinearGradient(cx - w / 2, cy - h / 2, cx + w / 2 + d, cy - h / 2 - d);
      tg.addColorStop(0, "rgba(225,222,255,0.97)");
      tg.addColorStop(1, "rgba(190,184,248,0.94)");
      ctx!.fillStyle = tg; ctx!.fill();
      ctx!.strokeStyle = "rgba(255,255,255,0.5)"; ctx!.lineWidth = 0.8; ctx!.stroke();

      // right side face
      ctx!.beginPath();
      ctx!.moveTo(cx + w / 2,     cy - h / 2);
      ctx!.lineTo(cx + w / 2,     cy + h / 2);
      ctx!.lineTo(cx + w / 2 + d, cy + h / 2 - d);
      ctx!.lineTo(cx + w / 2 + d, cy - h / 2 - d);
      ctx!.closePath();
      const rg = ctx!.createLinearGradient(cx + w / 2, cy, cx + w / 2 + d, cy - d);
      rg.addColorStop(0, "rgba(115,100,200,0.93)");
      rg.addColorStop(1, "rgba(88,75,170,0.9)");
      ctx!.fillStyle = rg; ctx!.fill();
      ctx!.strokeStyle = "rgba(255,255,255,0.28)"; ctx!.lineWidth = 0.7; ctx!.stroke();

      // front face
      ctx!.beginPath();
      ctx!.moveTo(cx - w / 2, cy - h / 2);
      ctx!.lineTo(cx - w / 2, cy + h / 2);
      ctx!.lineTo(cx + w / 2, cy + h / 2);
      ctx!.lineTo(cx + w / 2, cy - h / 2);
      ctx!.closePath();
      const fg = ctx!.createLinearGradient(cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2);
      fg.addColorStop(0, "rgba(45,35,120,0.86)");
      fg.addColorStop(1, "rgba(20,15,80,0.93)");
      ctx!.fillStyle = fg; ctx!.fill();
      ctx!.strokeStyle = "rgba(255,255,255,0.38)"; ctx!.lineWidth = 0.9; ctx!.stroke();

      // tunnel openings
      const ow = 13, oh = h * 0.33;
      ctx!.beginPath(); ctx!.ellipse(cx - w / 2, cy, ow, oh, 0, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(0,0,20,0.93)"; ctx!.fill();
      ctx!.beginPath(); ctx!.ellipse(cx + w / 2, cy, ow, oh, 0, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(0,0,20,0.93)"; ctx!.fill();

      // inner glow lines
      for (let i = -1; i <= 1; i++) {
        ctx!.beginPath();
        ctx!.moveTo(cx - w / 2 + ow, cy + i * oh * 0.5);
        ctx!.lineTo(cx + w / 2 - ow, cy + i * oh * 0.5);
        ctx!.strokeStyle = `rgba(120,100,220,${0.13 - Math.abs(i) * 0.05})`;
        ctx!.lineWidth = 1; ctx!.stroke();
      }

      // cloud on top
      drawCloud(cx + d / 2 - 8, cy - h / 2 - d / 2 - 6, Math.min(28, w * 0.14));

      // CloudDIET wordmark
      ctx!.save();
      ctx!.font         = `800 ${Math.max(11, w * 0.082)}px 'Bricolage Grotesque', sans-serif`;
      ctx!.fillStyle    = "rgba(215,210,255,0.93)";
      ctx!.textAlign    = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText("CloudDIET", cx, cy - 2);
      ctx!.restore();
    }

    // ── Particles ──
    const SPEED = 0.055;
    const GAP   = 0.16;
    const COUNT = NODES.length * 5;

    const particles = Array.from({ length: COUNT }, (_, i) => ({
      t:  1.05 - i * GAP,
      ni: i % NODES.length,
    }));

    // ── Frame ──
    function frame(ts: number) {
      if (!lastTs) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      floatT += dt;

      sync();
      ctx!.clearRect(0, 0, W, H);

      // move particles right → left
      for (const p of particles) {
        p.t -= SPEED * dt;
        if (p.t < -0.2) p.t += COUNT * GAP;
      }

      const { tIn, tOut } = boxTRange();
      const { bx, by }    = boxCenter();
      const bwVal = bw(), bhVal = bh();
      const floatOff = Math.sin(floatT * 0.8) * 6;

      // sort high-t first (enter from right = drawn behind)
      const sorted = [...particles].sort((a, b) => b.t - a.t);

      // 1. Hexagons BEHIND box — red, high cost
      for (const p of sorted) {
        if (p.t <= tIn) continue;
        const { x, y } = trackPoint(p.t);
        let alpha = 1;
        if (p.t > 0.92) alpha = Math.max(0, (1.08 - p.t) / 0.16);
        drawHexNode(x, y, NODES[p.ni], "highCost", "#ef4444", alpha);
      }

      // 2. The box
      drawIsoBox(bx, by, bwVal, bhVal, floatOff);

      // 3. Hexagons INSIDE tunnel — clipped, dimmed
      ctx!.save();
      ctx!.beginPath();
      ctx!.rect(bx - bwVal / 2, by + floatOff - bhVal / 2, bwVal, bhVal);
      ctx!.clip();
      for (const p of sorted) {
        if (p.t > tIn || p.t < tOut) continue;
        const { x, y } = trackPoint(p.t);
        const progress = (p.t - tOut) / (tIn - tOut);
        const costKey   = progress > 0.5 ? "highCost" : "lowCost";
        const costColor = progress > 0.5 ? "#ef4444"  : "#22c55e";
        drawHexNode(x, y + floatOff, NODES[p.ni], costKey, costColor, 0.38, 0.78);
      }
      ctx!.restore();

      // 4. Hexagons IN FRONT of box — green, low cost
      for (const p of sorted) {
        if (p.t >= tOut) continue;
        const { x, y } = trackPoint(p.t);
        let alpha = 1;
        if (p.t < 0.04) alpha = Math.max(0, (p.t + 0.18) / 0.22);
        drawHexNode(x, y, NODES[p.ni], "lowCost", "#22c55e", alpha);
      }

      rafId = requestAnimationFrame(frame);
    }

    sync();
    rafId = requestAnimationFrame(frame);

    const ro = new ResizeObserver(sync);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [canvasRef]);
}

// ─── Grid background ──────────────────────────────────────────────────────────

function GridBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.13 }}
    >
      <defs>
        <pattern id="grid" width={100} height={100} patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#4f7db5" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// ─── CloudDietHero ────────────────────────────────────────────────────────────

export default function CloudDietHero() {
  const [modalOpen, setModalOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useTunnelCanvas(canvasRef);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800;12..96,900&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up-1 { animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.10s both; }
        .fade-in-up-2 { animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.22s both; }
        .fade-in-up-3 { animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
      `}</style>

      <div
        className="relative overflow-hidden min-h-screen"
        style={{ background: "#020B2D", fontFamily: "'Bricolage Grotesque', sans-serif", color: "white" }}
      >
        {/* Grid */}
        <GridBackground />

        {/* Ambient glow blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "18%", left: "36%", width: 500, height: 400, zIndex: 1,
            background: "radial-gradient(ellipse, rgba(60,100,220,0.13) 0%, transparent 70%)",
            filter: "blur(42px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "10%", left: "4%", width: 300, height: 300, zIndex: 1,
            background: "radial-gradient(ellipse, rgba(40,80,200,0.09) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />

        {/* Canvas — full-scene animation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 5 }}
        />

        {/* Hero text — sits on top of canvas */}
        <div className="relative z-30 px-12 pt-10 max-w-3xl lg:px-14 lg:pt-12">
          <H1 className="fade-in-up-1 mt-14 lg:mt-28 leading-tight">
            AI-Powered Azure<br />Optimization Platform
          </H1>

          <p
            className="fade-in-up-2 mt-5 mb-6 max-w-xl text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            CloudDIET profiles your Azure resources, analyzes configurations and
            usage, and delivers recommendations that cut waste across IaaS, PaaS,
            and licensing. Enterprises save 30% on average with our pay-for-performance model.
          </p>

          <div className="fade-in-up-3 flex gap-3 flex-wrap">
            {/* Demo button */}
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-2 h-12 px-6 rounded-lg text-base font-bold bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
            >
              Demo
              <span className="relative flex items-center w-5 h-5">
                <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 w-5 h-5" />
                <ArrowRightIcon  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-5 h-5" />
              </span>
            </button>

            {/* Login button */}
            <a
              href="https://login.clouddiet.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 h-12 px-6 rounded-lg text-base font-bold bg-white text-black border-2 border-white transition-all duration-300 hover:text-[#254D70]"
            >
              Login
              <span className="relative flex items-center w-5 h-5">
                <ArrowUpRightIcon className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 w-5 h-5" />
                <ArrowRightIcon  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

        {/* Contact modal */}
        {modalOpen && (
          <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        )}
      </div>
    </>
  );
}