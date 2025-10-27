import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import { H1 } from "../../../styles/Typography";

const TitleSec: React.FC = () => {
  const images: string[] = [
    "/EHR-PMS/Careers/img1.png",
    "/EHR-PMS/Careers/img2.png",
    "/EHR-PMS/Careers/img3.png",
    "/EHR-PMS/Careers/img4.png",
    "/EHR-PMS/Careers/img5.png",
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 15 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (isMobile) return;
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY, isMobile]);

  // --- 3D TILT TRANSFORMS ---
  const rotationInput = [-35, 35];
  const rotationDegrees = 10;
  const rotationRange = [-rotationDegrees, rotationDegrees];

  const rotateY = useTransform(
    smoothX,
    rotationInput,
    rotationRange.map((v) => -v)
  );
  const rotateX = useTransform(smoothY, rotationInput, rotationRange);

  const depth = [3, 3, 3, 3, 3];
  const transforms = depth.map((d) => ({
    x: useTransform(smoothX, (v) => v * -d),
    y: useTransform(smoothY, (v) => v * -d),
  }));

  const textFadeIn = (delay: number): Variants => ({
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  });

  const imagePopIn = (delay: number): Variants => ({
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      rotate: Math.random() * 20 - 10,
      z: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      },
    },
  });

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(255,249,243,0.5) 0%, rgba(200,255,215,0.5) 100%)",
        perspective: "1000px",
      }}
    >
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textFadeIn(0.6)}
        className="z-10 text-center px-4"
      >
        <H1
          className="text-[#14532d] text-center mx-auto
                     text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem]
                     lg:text-[3rem] xl:text-[3.4rem]
                     leading-snug font-semibold"
        >
          Shaping the Future <br /> Across Every Sector
        </H1>
      </motion.div>

      {/* Images */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`sector-${i + 1}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={imagePopIn(0.2 * i)}
            style={{
              x: isMobile ? 0 : transforms[i].x,
              y: isMobile ? 0 : transforms[i].y,
              rotateY: isMobile ? 0 : rotateY,
              rotateX: isMobile ? 0 : rotateX,
            }}
            className={`absolute object-cover rounded-xl shadow-lg
              ${
                i === 0
                  ? "w-[200px] xs:w-[220px] sm:w-[230px] md:w-[250px] lg:w-[320px] xl:w-[350px] h-[250px] xs:h-[220px] sm:h-[170px] md:h-[200px] lg:h-[250px] xl:h-[280px] top-[70px] md:top-[80px] lg:top-[50px] xl:top-[50px] left-[-1px] xs:left-[-20px] sm:left-[-20px] md:left-[40px] lg:left-[-30px] xl:left-[-10px]"
                  : ""
              }
              ${
                i === 1
                  ? "w-[190px] xs:w-[200px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-[190px] xs:h-[200px] sm:h-[145px] md:h-[160px] lg:h-[180px] xl:h-[200px] top-[90px] xs:top-[50px] sm:top-[80px] md:top-[60px] lg:top-[60px] xl:top-[70px] right-[10px] xs:right-[10px] sm:right-[160px] md:right-[250px] lg:right-[150px] xl:right-[400px]"
                  : ""
              }
              ${
                i === 2
                  ? "w-[190px] xs:w-[200px] sm:w-[210px] md:w-[230px] lg:w-[260px] xl:w-[340px] h-[190px] xs:h-[200px] sm:h-[170px] md:h-[200px] lg:h-[220px] xl:h-[280px] top-[480px] xs:top-[480px] sm:top-[400px] md:top-[450px] lg:top-[450px] xl:top-[420px] left-[10px] xs:left-[15px] sm:left-[25px] md:left-[45px] lg:left-[60px] xl:left-[70px]"
                  : ""
              }
              ${
                i === 3
                  ? "w-[200px] xs:w-[250px] sm:w-[230px] md:w-[250px] lg:w-[270px] xl:w-[290px] h-[250px] xs:h-[270px] sm:h-[250px] md:h-[300px] lg:h-[280px] xl:h-[330px] top-[420px] xs:top-[450px] sm:top-[260px] md:top-[200px] lg:top-[300px] xl:top-[220px] right-[-10px] xs:right-[-40px] sm:right-[-50px] md:right-[-100px] lg:right-[-120px] xl:right-[-20px]"
                  : ""
              }
              ${
                i === 4
                  ? "hidden sm:block w-[170px] md:w-[200px] lg:w-[220px] xl:w-[290px] h-[120px] md:h-[160px] lg:h-[180px] xl:h-[200px] top-[450px] md:top-[480px] lg:top-[500px] xl:top-[480px] left-1/2 transform -translate-x-1/2"
                  : ""
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TitleSec;
