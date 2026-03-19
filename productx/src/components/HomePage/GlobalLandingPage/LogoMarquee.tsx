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
  { img: "/ProductsLogo/Remitree.webp",   link: "/industries/banking-and-finance/products/remitree",               tagline: "Cross-Border Remittance",     newTab: true },
  { img: "/ProductsLogo/Sams.webp",       link: "/industries/banking-and-finance/products/sams",                   tagline: "NPA Tracking",                newTab: true },
  { img: "/ProductsLogo/sherlock.webp",   link: "/industries/banking-and-finance/products/sherlock",               tagline: "AML",                         newTab: true },
  { img: "/ProductsLogo/UHN.webp",        link: "/industries/ehr-and-pms",                                         tagline: "EHR and PMS",                 newTab: true },
];

const doubled = [...logos, ...logos, ...logos];

const PX_PER_FRAME   = 0.8;
const DRAG_THRESHOLD = 4;

export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posX     = useRef(0);
  const halfW    = useRef(0);
  const rafId    = useRef(0);

  const isDragging   = useRef(false);
  const wasDragged   = useRef(false);
  const downX        = useRef(0);
  const downY        = useRef(0);
  const isHorizontal = useRef<boolean | null>(null);
  const lastDragX    = useRef(0);
  const dragVel      = useRef(0);
  const momentum     = useRef(0);

  useEffect(() => {
    const track     = trackRef.current;
    const container = track?.parentElement;
    if (!track || !container) return;

    const initRaf = requestAnimationFrame(() => {
      halfW.current = track.scrollWidth / 3;

      function step() {
        if (!trackRef.current) return;

        if (isDragging.current) {
          // posX updated directly by drag handlers
        } else if (Math.abs(momentum.current) > 0.1) {
          posX.current    += momentum.current;
          momentum.current *= 0.92;
          if (Math.abs(momentum.current) < 0.1) momentum.current = 0;
        } else {
          posX.current -= PX_PER_FRAME;
        }

        if (halfW.current > 0) {
          if (posX.current <= -halfW.current) posX.current += halfW.current;
          if (posX.current > 0)               posX.current  = 0;
        }

        trackRef.current.style.transform = `translate3d(${posX.current}px, 0, 0)`;
        rafId.current = requestAnimationFrame(step);
      }

      rafId.current = requestAnimationFrame(step);
    });

    // ── Mouse ────────────────────────────────────────────────────────────
    function onMouseDown(e: MouseEvent) {
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
      dragVel.current   = dragVel.current * 0.6 + dx * 0.4;
      lastDragX.current = e.clientX;
      if (!wasDragged.current && Math.abs(e.clientX - downX.current) > DRAG_THRESHOLD) {
        wasDragged.current = true;
      }
      posX.current += dx;
      if (halfW.current > 0) {
        if (posX.current <= -halfW.current) posX.current += halfW.current;
        if (posX.current > 0)               posX.current  = 0;
      }
    }

    function onMouseUp() {
      if (!isDragging.current) return;
      isDragging.current = false;
      momentum.current   = dragVel.current * 0.8;
      setTimeout(() => { wasDragged.current = false; }, 50);
    }

    // ── Touch — FIX: attach touchmove to CONTAINER only (not window) ─────
    // This way { passive: false } only applies to touches on the marquee,
    // so vertical scrolling everywhere else on the page is never blocked.
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

      // Determine direction once
      if (isHorizontal.current === null && (totalDX > DRAG_THRESHOLD || totalDY > DRAG_THRESHOLD)) {
        isHorizontal.current = totalDX >= totalDY;
      }

      // If vertical (or undecided) — do NOT preventDefault, let page scroll
      if (isHorizontal.current !== true) return;

      // Confirmed horizontal swipe — block page scroll and drive marquee
      e.preventDefault();
      isDragging.current = true;
      wasDragged.current = true;
      dragVel.current    = dragVel.current * 0.6 + dx * 0.4;
      lastDragX.current  = tx;
      posX.current      += dx;
      if (halfW.current > 0) {
        if (posX.current <= -halfW.current) posX.current += halfW.current;
        if (posX.current > 0)               posX.current  = 0;
      }
    }

    function onTouchEnd() {
      // FIX: always reset isDragging and isHorizontal regardless of state,
      // so a touch that starts on the marquee and ends elsewhere never
      // leaves isDragging stuck as true (which paused the auto-scroll).
      const wasActive    = isDragging.current;
      isDragging.current   = false;
      isHorizontal.current = null;
      if (wasActive) {
        momentum.current = dragVel.current * 0.8;
        setTimeout(() => { wasDragged.current = false; }, 50);
      } else {
        wasDragged.current = false;
      }
    }

    function onTouchCancel() {
      // FIX: also handle touchcancel (fired when system interrupts the touch,
      // e.g. incoming call, scroll takeover) — same reset as touchend.
      isDragging.current   = false;
      isHorizontal.current = null;
      momentum.current     = 0;
      wasDragged.current   = false;
    }

    // Mouse events on window so drag works even if cursor leaves container
    container.addEventListener("mousedown",  onMouseDown);
    window.addEventListener("mousemove",     onMouseMove);
    window.addEventListener("mouseup",       onMouseUp);

    // Touch events on CONTAINER only (not window) — critical for passive fix
    container.addEventListener("touchstart",  onTouchStart,  { passive: true });
    container.addEventListener("touchmove",   onTouchMove,   { passive: false }); // passive:false only on marquee
    container.addEventListener("touchend",    onTouchEnd,    { passive: true });
    container.addEventListener("touchcancel", onTouchCancel, { passive: true });

    return () => {
      cancelAnimationFrame(initRaf);
      cancelAnimationFrame(rafId.current);
      container.removeEventListener("mousedown",  onMouseDown);
      window.removeEventListener("mousemove",     onMouseMove);
      window.removeEventListener("mouseup",       onMouseUp);
      container.removeEventListener("touchstart",  onTouchStart);
      container.removeEventListener("touchmove",   onTouchMove);
      container.removeEventListener("touchend",    onTouchEnd);
      container.removeEventListener("touchcancel", onTouchCancel);
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
            className="flex flex-col relative items-center justify-center xl:justify-start flex-shrink-0 text-center
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