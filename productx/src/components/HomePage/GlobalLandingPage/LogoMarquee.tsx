"use client";

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const logos = [
  { img: "/ProductsLogo/Almanac.webp",    link: "/industries/banking-and-finance/products/almanac",                tagline: "Asset Management",           newTab: true },
  { img: "/ProductsLogo/Bankfair.webp",   link: "/industries/banking-and-finance/products/bankfair",               tagline: "Core Bankfair",               newTab: true },
  { img: "/ProductsLogo/Clouddiet.webp",  link: "/industries/cloud-finops-ai",                                     tagline: "Cloud Optimization AI",       newTab: true },
  { img: "/ProductsLogo/Conciliare.webp", link: "/industries/banking-and-finance/products/conciliare",             tagline: "AI Reconciliation",           newTab: true },
  { img: "/ProductsLogo/IBS.webp",        link: "/industries/banking-and-finance/products/internet-banking-system", tagline: "Internet and Mobile Banking", newTab: true },
  { img: "/ProductsLogo/KYC.webp",        link: "/industries/banking-and-finance/products/kyc",                    tagline: "Diligent",                    newTab: true },
  { img: "/ProductsLogo/LOS.webp",        link: "/industries/banking-and-finance/products/loan-origination-system", tagline: "Loan Origination",           newTab: true },
  // { img: "/ProductsLogo/pago.webp",       link: "/industries/banking-and-finance/products/pago",                   tagline: "Payment System",              newTab: true },
  { img: "/ProductsLogo/Remitree.webp",   link: "/industries/banking-and-finance/products/remitree",               tagline: "Cross-Border Remittance",     newTab: true },
  { img: "/ProductsLogo/Sams.webp",       link: "/industries/banking-and-finance/products/sams",                   tagline: "NPA Tracking",                newTab: true },
  { img: "/ProductsLogo/sherlock.webp",   link: "/industries/banking-and-finance/products/sherlock",               tagline: "AML",                         newTab: true },
  { img: "/ProductsLogo/UHN.webp",    link: "/industries/ehr-and-pms",                                         tagline: "EHR and PMS",                 newTab: true },
];

const doubled = [...logos, ...logos, ...logos]; // tripled for smooth loop buffer

// Fixed pixels per frame at 60fps — no dt multiplication so no jerk on frame drops
// At 60fps: 0.8px/frame = ~48px/sec. Feels smooth on all devices.
const PX_PER_FRAME   = 0.8;
const DRAG_THRESHOLD = 4;

export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posX     = useRef(0);
  const halfW    = useRef(0);
  const rafId    = useRef(0);

  // drag
  const isDragging   = useRef(false);
  const wasDragged   = useRef(false);
  const downX        = useRef(0);
  const downY        = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);
  const lastDragX    = useRef(0);
  const dragVel      = useRef(0);
  // momentum after drag release
  const momentum     = useRef(0);

  // ── RAF loop — fixed px/frame, no time delta, no jerk ────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Init halfW after paint
    const initRaf = requestAnimationFrame(() => {
      halfW.current = track.scrollWidth / 3; // 1/3 because tripled

      function step() {
        if (!trackRef.current) return;

        if (isDragging.current) {
          // During drag: posX is set directly by drag handlers
          // Just apply and loop
        } else if (Math.abs(momentum.current) > 0.1) {
          // After drag release: apply momentum with friction
          posX.current  += momentum.current;
          momentum.current *= 0.92; // friction — slows down naturally
          if (Math.abs(momentum.current) < 0.1) momentum.current = 0;
        } else {
          // Auto scroll — fixed px per frame, completely smooth
          posX.current -= PX_PER_FRAME;
        }

        // Seamless loop
        if (halfW.current > 0) {
          if (posX.current <= -halfW.current) posX.current += halfW.current;
          if (posX.current > 0) posX.current = 0;
        }

        trackRef.current.style.transform = `translate3d(${posX.current}px, 0, 0)`;
        rafId.current = requestAnimationFrame(step);
      }

      rafId.current = requestAnimationFrame(step);
    });

    // ── Mouse drag ────────────────────────────────────────────────────────
    function onMouseDown(e: MouseEvent) {
      const t = trackRef.current;
      if (!t || !t.parentElement?.contains(e.target as Node)) return;
      isDragging.current = true;
      wasDragged.current = false;
      momentum.current   = 0;
      downX.current      = e.clientX;
      lastDragX.current  = e.clientX;
      dragVel.current    = 0;
    }

    function onMouseMove(e: MouseEvent) {
      if (!isDragging.current) return;
      const dx = e.clientX - lastDragX.current;
      // Smooth the velocity with a small lerp so momentum feels natural
      dragVel.current   = dragVel.current * 0.6 + dx * 0.4;
      lastDragX.current = e.clientX;
      if (!wasDragged.current && Math.abs(e.clientX - downX.current) > DRAG_THRESHOLD) {
        wasDragged.current = true;
      }
      posX.current += dx;
      if (halfW.current > 0) {
        if (posX.current <= -halfW.current) posX.current += halfW.current;
        if (posX.current > 0) posX.current = 0;
      }
    }

    function onMouseUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      // Hand off velocity to momentum so RAF carries it forward smoothly
      momentum.current = dragVel.current * 0.8;
      setTimeout(() => { wasDragged.current = false; }, 50);
    }

    // ── Touch drag — horizontal only, vertical scroll untouched ──────────
    function onTouchStart(e: TouchEvent) {
      isDragging.current   = false;
      isHorizontal.current = null;
      wasDragged.current   = false;
      momentum.current     = 0;
      downX.current        = e.touches[0].clientX;
      downY.current        = e.touches[0].clientY;
      lastDragX.current    = e.touches[0].clientX;
      dragVel.current      = 0;
    }

    function onTouchMove(e: TouchEvent) {
      const tx      = e.touches[0].clientX;
      const ty      = e.touches[0].clientY;
      const dx      = tx - lastDragX.current;
      const totalDX = Math.abs(tx - downX.current);
      const totalDY = Math.abs(ty - downY.current);

      // Decide direction once
      if (isHorizontal.current === null && (totalDX > DRAG_THRESHOLD || totalDY > DRAG_THRESHOLD)) {
        isHorizontal.current = totalDX >= totalDY;
      }

      if (isHorizontal.current === false) return; // vertical — let browser scroll

      if (isHorizontal.current === true) {
        e.preventDefault(); // block page scroll for horizontal swipe
        isDragging.current = true;
        wasDragged.current = true;
        // Lerp velocity for smooth momentum
        dragVel.current   = dragVel.current * 0.6 + dx * 0.4;
        lastDragX.current = tx;
        posX.current     += dx;
        if (halfW.current > 0) {
          if (posX.current <= -halfW.current) posX.current += halfW.current;
          if (posX.current > 0) posX.current = 0;
        }
      }
    }

    function onTouchEnd() {
      if (!isDragging.current) {
        isHorizontal.current = null;
        return;
      }
      isDragging.current   = false;
      isHorizontal.current = null;
      // Hand off to momentum
      momentum.current = dragVel.current * 0.8;
      setTimeout(() => { wasDragged.current = false; }, 50);
    }

    const container = trackRef.current?.parentElement;
    if (container) {
      container.addEventListener("mousedown",  onMouseDown);
      container.addEventListener("touchstart", onTouchStart, { passive: true });
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend",  onTouchEnd);

    return () => {
      cancelAnimationFrame(initRaf);
      cancelAnimationFrame(rafId.current);
      if (container) {
        container.removeEventListener("mousedown",  onMouseDown);
        container.removeEventListener("touchstart", onTouchStart);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend",  onTouchEnd);
    };
  }, []);

  const onLinkClick = (e: React.MouseEvent) => {
    if (wasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className="w-full bg-white mt-1 overflow-hidden relative"
      style={{
        borderTop:    "2px solid #a9a9a9",
        borderBottom: "2px solid #a9a9a9",
        userSelect:   "none",
        cursor:       "grab",
      }}
    >
      <div
        ref={trackRef}
        className="flex items-center marquee-track"
        style={{ willChange: "transform" }}
      >
        {doubled.map((logo, i) => (
          <Link
            key={i}
            to={logo.link}
            target={logo.newTab ? "_blank" : "_self"}
            rel={logo.newTab ? "noopener noreferrer" : undefined}
            onClick={onLinkClick}
            draggable={false}
            className="flex flex-col relative items-center  justify-center xl:justify-start flex-shrink-0 text-center
              w-[200px]  h-[120px]
              sm:w-[200px] sm:h-[100px]
              md:w-[240px] md:h-[150px]
              lg:w-[290px] lg:h-[180px]
              xl:w-[350px] xl:h-[160px]"
            style={{
              borderRight: "2px solid #a9a9a9",
              padding: "0 clamp(16px,2vw,40px)",
            }}
          >
            <img
              src={logo.img}
              alt="product"
              width={220}
              height={70}
              draggable={false}
              className="object-cover w-full h-auto"
            />
            <span className="absolute bottom-4 xl:bottom-6 font-bricolage text-[14px] md:text-[16px] lg:text-[20px] font-extrabold text-blue-800 leading-tight">
              {logo.tagline}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}