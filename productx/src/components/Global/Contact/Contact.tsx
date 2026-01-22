"use client";
import { H1, P } from "../../../styles/Typography";
import { ArrowUpRight, ArrowRight } from "lucide-react"; 
import React, { useRef, useEffect, useCallback, useMemo, useState } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(InertiaPlugin);
}




/* -------------------------------------- */
/* UTILS
/* -------------------------------------- */
const throttle = <T extends (event: any) => void>(func: T, limit: number) => {
  let lastCall = 0;
  return (event: any) => {
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
const Contact: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: -1000,
    y: -1000,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });
  
 
  
  /* DOT SETTINGS */
  const dotSize = 5;
  const gap = 15;
  const baseColor = "#808080";
  const activeColor = "#5227FF";
  const proximity = 120;
  const speedTrigger = 100;
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

    const cell = dotSize + gap;
    const cols = Math.ceil(width / cell) + 1;
    const rows = Math.ceil(height / cell) + 1;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: x * cell,
          cy: y * cell,
          xOffset: 0,
          yOffset: 0,
          _inertiaApplied: false,
        });
      }
    }
    dotsRef.current = dots;
  }, []);
 

  useEffect(() => {
    if (!circlePath) return;
    let rafId: number;
    const draw = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: px, y: py } = pointerRef.current;
      for (const dot of dotsRef.current) {
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;
        let style = baseColor;
        if (dsq <= proximity * proximity) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }
        ctx.save();
        ctx.translate(dot.cx + dot.xOffset, dot.cy + dot.yOffset);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(rafId);
  }, [circlePath, baseRgb, activeRgb]);
 

  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);
 

  useEffect(() => {
    const onMove = (clientX: number, clientY: number) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const currentX = clientX - rect.left;
      const currentY = clientY - rect.top;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = clientX - pr.lastX;
      const dy = clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      const speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const s = maxSpeed / speed;
        vx *= s;
        vy *= s;
      }
      pr.lastTime = now; pr.lastX = clientX; pr.lastY = clientY;
      pr.vx = vx; pr.vy = vy; pr.speed = speed; pr.x = currentX; pr.y = currentY;
 

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
                xOffset: 0, yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };
    const throttledMouse = throttle((e: MouseEvent) => onMove(e.clientX, e.clientY), 20);
    window.addEventListener("mousemove", throttledMouse, { passive: true });
    return () => window.removeEventListener("mousemove", throttledMouse);
}, []);
const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // If all validations pass
  setIsSubmitted(true);

  // Reset form
  e.currentTarget.reset();

  // Reset button after 3 seconds
  setTimeout(() => {
    setIsSubmitted(false);
  }, 3000);
};

return (
    <>
       
      
      <section className="w-full min-h-[900px] flex relative bg-[#FAFAFA] overflow-hidden font-quicksand justify-center xl:justify-end px-6 lg:px-24">
      
      {/* BACKGROUND DOTS */}
      <div className="absolute inset-0 z-0 pointer-events-none lg:pointer-events-auto">
        <div ref={wrapperRef} className="w-full h-full opacity-60 lg:opacity-80">
          <canvas ref={canvasRef} className="block" />
        </div>
      </div>

      {/* FORM: Width 20%, Height 700px */}
      <div className="relative z-10 w-full md:w-[70%] lg:w-[60%] xl:w-[45%] min-w-[340px] h-[700px] self-center flex flex-col bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl border border-white/50">
        <div className="mb-12">
          <H1 className="text-black font-bold mb-4 text-4xl tracking-tight leading-tight">Let's talk</H1>
          <P className="">Fill out the form and we'll be in touch shortly.</P>
        </div>

        <form className="flex flex-col flex-grow gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <input 
              name="name"
              className="w-full px-6 py-4 bg-white/60 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all text-sm" 
              placeholder="Full Name" 
            />
            <input 
              name="email"
              type="email"
              className="w-full px-6 py-4 bg-white/60 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all text-sm" 
              placeholder="Email Address" 
            />
            
            <div className="relative">
              <select 
                name="interest"
                className="w-full px-6 py-4 bg-white/60 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black outline-none appearance-none cursor-pointer text-gray-500 text-sm"
              >
                <option value="">Interested in...</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                 <ArrowRight size={16} className="rotate-90" />
              </div>
            </div>
            
            <textarea 
              name="message"
              rows={4} 
              className="w-full px-6 py-4 bg-white/60 border border-gray-200 rounded-2xl resize-none focus:ring-2 focus:ring-black outline-none text-sm" 
              placeholder="Message" 
            />
          </div>

          <div className="mt-auto">
           <button
  type="submit"
  disabled={isSubmitted}
  className={`
    group flex items-center justify-center w-full h-[64px]
    rounded-2xl font-bold text-lg text-white transition-all
    ${isSubmitted ? 'bg-green-600 cursor-default' : 'bg-black hover:shadow-2xl'}
    active:scale-[0.98]
  `}
>
  {isSubmitted ? (
    <span>Submitted Successfully</span>
  ) : (
    <>
      <span className="mr-2">Send Message</span>
      <ArrowUpRight
        size={22}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </>
  )}
</button>

          </div>
        </form>
      </div>
      
      
    </section>
    </>
  );
};
export default Contact;