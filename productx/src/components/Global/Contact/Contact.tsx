"use client";
import { Link } from "react-router-dom";
import { H1 } from "../../../styles/Typography";
import { ArrowUpRight, ArrowRight } from "lucide-react"; 
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
 
gsap.registerPlugin(InertiaPlugin);
 
/* -------------------------------------- */
/*  UTILS
/* -------------------------------------- */
 
const throttle = <T extends (event: MouseEvent) => void>(
  func: T,
  limit: number
) => {
  let lastCall = 0;

  return (event: MouseEvent) => {
    const now = performance.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func(event);
    }
  };
};

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}
function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}
 
/* ===================================================== */
/* ================ MAIN CONTACT COMPONENT ============== */
/* ===================================================== */
 
const Contact: React.FC = () => {
  /* ---------------- Dot Grid Refs ---------------- */
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });
  /* SETTINGS */
  const dotSize = 5;
  const gap = 15;
  const baseColor = "#808080";
  const activeColor = "#5227FF";
  const proximity = 120;
  const speedTrigger = 100;
  // const shockRadius = 250;
  // const shockStrength = 5;
  const maxSpeed = 4000;
  const resistance = 750;
  const returnDuration = 1.5;
 
  const baseRgb = useMemo(() => hexToRgb(baseColor), []);
  const activeRgb = useMemo(() => hexToRgb(activeColor), []);
 
  const circlePath = useMemo(() => {
    if (typeof window === "undefined" || !window.Path2D) return null;
    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, []);
  /* ---------------- Build Grid ---------------- */
  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
 
    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
 
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
 
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
 
    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;
 
    const gridW = cols * cell - gap;
    const gridH = rows * cell - gap;
 
    const startX = (width - gridW) / 2 + dotSize / 2;
    const startY = (height - gridH) / 2 + dotSize / 2;
 
    const dots: Dot[] = [];
 
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          xOffset: 0,
          yOffset: 0,
          _inertiaApplied: false,
        });
      }
    }
 
    dotsRef.current = dots;
  }, []);
 
  /* ---------------- DRAW LOOP ---------------- */
  useEffect(() => {
    if (!circlePath) return;
 
    let rafId: number;
 
    const proxSq = proximity * proximity;
 
    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
 
      ctx.clearRect(0, 0, canvas.width, canvas.height);
 
      const { x: px, y: py } = pointerRef.current;
 
      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
 
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;
 
        let style = baseColor;
 
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }
        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }
 
      rafId = requestAnimationFrame(draw);
    };
 
    draw();
    return () => cancelAnimationFrame(rafId);
  }, [circlePath, baseRgb, activeRgb]);
 
  /* ---------------- Resize Observer ---------------- */
  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    if (wrapperRef.current) {
      ro.observe(wrapperRef.current);
    }
    return () => ro.disconnect();
  });
  /* ---------------- Pointer Events ---------------- */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
 
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
 
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
 
      const speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const s = maxSpeed / speed;
        vx *= s;
        vy *= s;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;
 
      const rect = canvasRef.current!.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;
 
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
 
          const pushX = dot.cx - pr.x + vx * 0.004;
          const pushY = dot.cy - pr.y + vy * 0.004;
 
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };
 
    const throttled = throttle(onMove, 50);
    window.addEventListener("mousemove", throttled, { passive: true });
 
    return () => window.removeEventListener("mousemove", throttled);
  }, []);
 
  /* ===================================================== */
  /* =============== RENDER CONTACT UI ==================== */
  /* ===================================================== */
 
  return (
    <section className="w-full min-h-[666px] justify-end flex relative bg-[#FAFAFA] overflow-hidden">
      {/* Small screen dotted bg */}
      <div className="absolute md:hidden  inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_2px,_transparent_1px)] [background-size:12px_12px] opacity-50" />
 
     
        {/* LEFT FORM */}
        <div className="flex flex-col xl:mt-[68px] xl:my-10 xl:h-[620px] w-full max-w-lg mx-auto lg:mx-20 justify-center p-0 sm:p-4 z-20 bg-white rounded-md ">
          <H1 className="text-black font-bold mb-6">Quam finibus</H1>
 
          <form className="space-y-4 font-quickstand">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
            />
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-black">
              <option disabled selected>
                What are you looking for?
              </option>
              <option>Manufacturing</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>
            <textarea
              rows={3}
              placeholder="Message (Optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-black"
            />
            <button
              className="group flex items-center justify-center w-[150px] h-[48px] px-[10px] py-[12px] rounded-[12px] font-quicksand font-bold text-[16px] border-2 bg-black text-white transition-all duration-300 hover:bg-white hover:text-black border-b-[4px] border-black border-opacity-50 hover:border-opacity-100"
            >
              <Link to="/">
                <span className="mr-2">SUBMIT</span>
              </Link>
              <span className="relative flex items-center h-[20px] w-[20px]">
                <ArrowUpRight className="absolute opacity-100 group-hover:opacity-0 transition-opacity" />
                <ArrowRight className="absolute opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </button>
          </form>
        </div>
 
        {/* RIGHT SIDE — DOT GRID ANIMATION */}
        <div className="absolute hidden lg:block h-screen w-full opacity-80">
          <div
            ref={wrapperRef}
            className="absolute inset-0"
            style={{ width: "100%", height: "100%" }}
          >
            <canvas ref={canvasRef} />
          </div>
        </div>
     
    </section>
  );
};
 
export default Contact;
 