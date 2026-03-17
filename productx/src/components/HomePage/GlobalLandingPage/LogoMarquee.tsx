"use client";

import {   useRef } from "react";
import { Link } from "react-router-dom";

const logos = [
  { img: "/ProductLogo/Almanac.webp", link: "/industries/banking-and-finance/products/almanac" , tagline:"Asset Management",newTab: true},
  { img: "/ProductLogo/Bankfair.webp", link: "/industries/banking-and-finance/products/bankfair", tagline:"Core Bankfair" ,newTab: true},
  { img: "/ProductLogo/Clouddiet.webp", link: "/industries/cloud-finops-ai" , newTab: true ,tagline:"Cloud Optimization AI",},
  { img: "/ProductLogo/Conciliare.webp", link: "/industries/banking-and-finance/products/conciliare", tagline:"AI Reconciliation", newTab: true },
  { img: "/ProductLogo/IBS.webp", link: "/industries/banking-and-finance/products/internet-banking-system", tagline:"Internet and Mobile Banking", newTab: true },
  { img: "/ProductLogo/Kyc.webp", link: "/industries/banking-and-finance/products/kyc" ,tagline:"Diligent", newTab: true },
  { img: "/ProductLogo/LOS.webp", link: "/industries/banking-and-finance/products/loan-origination-system", tagline:"Loan Origination" , newTab: true},
  { img: "/ProductLogo/Pago.webp", link: "/industries/banking-and-finance/products/pago" ,tagline:"Payment System", newTab: true},
  { img: "/ProductLogo/Remitree.webp", link: "/industries/banking-and-finance/products/remitree" ,tagline:"Cross-Border Remittance", newTab: true},
  { img: "/ProductLogo/Sams.webp", link: "/industries/banking-and-finance/products/sams",tagline:"NPA Tracking", newTab: true },
  { img: "/ProductLogo/Sherlock.webp", link: "/industries/banking-and-finance/products/sherlock",tagline:"AML" , newTab: true},
  { img: "/ProductLogo/Unified.webp", link: "/industries/ehr-and-pms",  newTab: true ,tagline:"EHR and PMS" },
  
];

const doubled = [...logos, ...logos];

export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  // const animXRef = useRef(0);
  // const lastTsRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  // const halfWRef = useRef(0);
  // const rafRef = useRef<number>(0);

  // const SPEED = 60;

//   useEffect(() => {
//     const track = trackRef.current;
//     const root = rootRef.current;
//     if (!track || !root) return;

//   const updateWidth = () => {
//   if (trackRef.current) {
//     halfWRef.current = trackRef.current.scrollWidth / 2;
//   }
// };

// updateWidth();

// window.addEventListener("resize", updateWidth);

//     function step(ts: number) {
//       if (!lastTsRef.current) lastTsRef.current = ts;

//       const dt = (ts - lastTsRef.current) / 1000;
//       lastTsRef.current = ts;

//       if (!pausedRef.current) {
//         animXRef.current += SPEED * dt;

//         if (halfWRef.current > 0 && animXRef.current >= halfWRef.current) {
//           animXRef.current -= halfWRef.current;
//         }

//  track?.style.setProperty(
//   "transform",
//   `translate3d(-${animXRef.current}px, 0, 0)`
// );
//       }

//       rafRef.current = requestAnimationFrame(step);
//     }

//     rafRef.current = requestAnimationFrame(step);

//     return () => cancelAnimationFrame(rafRef.current);
//     window.removeEventListener("resize", updateWidth);
//   }, []);

  return (
    <div
      ref={rootRef}
      className="w-full bg-white  mt-1 overflow-hidden"
      style={{
        borderTop: "2px solid #a9a9a9",
        borderBottom: "2px solid #a9a9a9",
      }}
    >
     <div
  ref={trackRef}
  className="flex items-center marquee-track"
>
        {doubled.map((logo, i) => (
          <Link
            key={i}
            to={logo.link}
             target={logo.newTab ? "_blank" : "_self"}
  rel={logo.newTab ? "noopener noreferrer" : undefined}
          className="flex flex-col relative items-center justify-center flex-shrink-0 text-center
        
w-[160px] h-[80px]
sm:w-[200px] sm:h-[100px]
md:w-[240px] md:h-[120px]
lg:w-[280px] lg:h-[140px]
xl:w-[350px] xl:h-[190px]"
            style={{
           
              borderRight: "2px solid #a9a9a9",
              padding: "0 clamp(16px,2vw,40px)",
            }}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            <img
              src={logo.img}
              alt="product"
              width={220}
              height={70}
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
            <span className=" absolute bottom-4 font-bricolage text-[20px] pb-4 font-extrabold text-blue-800 leading-tight">
  {logo.tagline}
</span>
          </Link>
        ))}
      </div>
    </div>
  );
}