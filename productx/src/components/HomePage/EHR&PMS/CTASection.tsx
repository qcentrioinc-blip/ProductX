import React, { useEffect, useRef, useState } from "react";
import { H2, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";
 

export default function CTAFloatSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
const [enterDone, setEnterDone] = useState(false);

const [drawerOpen, setDrawerOpen] = useState(false);
useEffect(() => {
  if (isVisible && !enterDone) {
    setTimeout(() => setEnterDone(true), 1200);  
  }
}, [isVisible, enterDone]);

  const images = [
    { src: "/EHR-PMS/CTA/img1.jpg", id: 0, side: "left", startAngle: 0 },
    { src: "/EHR-PMS/CTA/img2.jpg", id: 1, side: "left", startAngle: 72 },
    { src: "/EHR-PMS/CTA/img3.jpg", id: 2, side: "left", startAngle: 144 },
    { src: "/EHR-PMS/CTA/img4.jpg", id: 3, side: "left", startAngle: 216 },
    { src: "/EHR-PMS/CTA/img5.jpg", id: 4, side: "right", startAngle: 0 },
    { src: "/EHR-PMS/CTA/img6.jpg", id: 5, side: "right", startAngle: 72 },
    { src: "/EHR-PMS/CTA/img7.jpg", id: 6, side: "right", startAngle: 144 },
    { src: "/EHR-PMS/CTA/img8.jpg", id: 7, side: "right", startAngle: 216 },
    { src: "/EHR-PMS/CTA/img1.jpg", id: 8, side: "right", startAngle: 288 },
    { src: "/EHR-PMS/CTA/img8.jpg", id: 9, side: "left", startAngle: 288 },
  ];

  const [angles, setAngles] = useState<number[]>([
    0, 72, 144, 216, 288,
    0, 72, 144, 216, 288,
  ]);

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  // Circular image animation
  const animationRef = useRef<number>(0);
  const animationSpeed = 0.4;

  // const animate = () => {
  //   if (isVisible) {
  //     setAngles((prev) => prev.map((angle) => (angle + animationSpeed) % 360));
  //   }
  //   animationRef.current = requestAnimationFrame(animate);
  // };


const animate = () => {
  if (isVisible) {
    setAngles((prev) =>
      prev.map((angle, index) => {
        const side = images[index].side;

        // LEFT SIDE = clockwise (positive)
        // RIGHT SIDE = anticlockwise (negative)
        const direction = side === "right" ? -1 : 1;

        return (angle + direction * animationSpeed + 360) % 360;
      })
    );
  }

  animationRef.current = requestAnimationFrame(animate);
};



  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isVisible]);

  const calculatePosition = (angle: number, side: string) => {
    const radians = (angle * Math.PI) / 180;
    const radiusX = 180;
    const radiusY = 180;
    const centerX =
      typeof window !== "undefined"
       ? side === "left"
        ? window.innerWidth * 0.01
        : window.innerWidth * 1.0
      : 0;
    const centerY = 400;

  // Inward motion: left pushes right, right pushes left
  const inwardShift = side === "left" ? 60 : -60;

  return {
    x: centerX + Math.cos(radians) * radiusX + inwardShift,
    y: centerY + Math.sin(radians) * radiusY,
  };
};
  // const cardWidth = 140;
  // const cardHeight = 200;
 


  return (
    <>
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-50   py-24 overflow-hidden h-screen"
    >
      {/* Images */}
      {images.map((img, index) => {
  const angle = angles[index];
  const pos = calculatePosition(angle, img.side);

  // Slight vertical overlap
  const overlapOffset = index % 2 === 0 ? -18 : 18;

  return (
    <React.Fragment key={img.id}>
      <div
        className="absolute"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y + overlapOffset}px`,
          zIndex:10,
          opacity: isVisible ? 1 : 0,
         transition: "opacity 0.6s ease-out, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",

          transform: isVisible
            ? "translate(-50%, -50%) translateY(0)"
            : "translate(-50%, -50%) translateY(-600px)",
          

        }}
      >
        <div
          className="floating-card rounded-xl overflow-hidden relative shadow-lg"
          style={{ width: 150, height: 200 }}
        >
          <img
            src={img.src}
            alt=""
            className="w-full h-full border-4 border-white  rounded-xl object-cover pointer-events-none"
          />
        </div>
      </div>
    </React.Fragment>
  );
})}


      {/* Center Content */}
      <div
        className={`relative z-[20] max-w-3xl mx-auto flex flex-col items-center text-center px-6
transition-all duration-500 ease-out

${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-32"}
`}

      >
        <H2 className="text-[#166D48] leading-tight mt-30">
          Sed ut perspiciatis <br /> Unde Seduo ut
        </H2>

        <P className="mt-3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
          dolor in reprehenderit in voluptate velit esse
        </P>

        <ContactUs className="bg-[#F6A423] hover:bg-[#e6981f] transition transform hover:scale-105 mt-8">
          CONTACT US
        </ContactUs>
      </div>

      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .floating-card {
          animation: subtleFloat 3s ease-in-out infinite;
          transition: box-shadow 0.3s ease, filter 0.3s ease, transform 0.3s ease;
        }

        .floating-card:hover {
          transform: scale(1.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          filter: brightness(1.1);
        }

        .floating-card img {
          transition: transform 0.3s ease;
        }

        .floating-card:hover img {
          transform: scale(1.05);
        }
          .floating-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 130%;
  height: 30%;  
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(245,245,245,0.9) 90%);
  backdrop-filter: blur(2px);
  pointer-events: none;
  z-index: 5;
   transform: translateX(-4%) skewY(-5deg);
  
}

      `}</style>
      
    </section>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
  </>
  );
}
 