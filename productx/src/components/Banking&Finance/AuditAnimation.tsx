"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { H2, H4 } from "../../styles/Typography";

export default function AuditAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* --------------------------------
     SCROLL PROGRESS
  --------------------------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* --------------------------------
     IMAGE WIDTH (DESKTOP)
  --------------------------------- */
  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["100%", "58%"]
  );

  /* --------------------------------
     TEXT APPEAR
  --------------------------------- */
  const textOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.75],
    [0, 1]
  );

  const textY = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [40, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[180vh] lg:h-[250vh] bg-white"
    >
      <div className="sticky top-0 xl:h-screen overflow-hidden">
        <div className="relative w-full h-full">

          {/* ==============================
              DESKTOP (lg+)
          =============================== */}
          <div className="hidden lg:flex items-center w-full xl:h-full">
            <motion.img
              src="/Audit.png"
              alt="Audit"
              className="object-cover h-[400px] md:h-[500px] lg:h-[600px]"
              style={{
                width: imageWidth,
                maxWidth: "100%",
              }}
            />

            {/* TEXT — WIDTH INCREASED */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute bottom-0 xl:bottom-16 right-10 w-[35%]"
            >
              <H2 className="text-[#2B68C3] font-bold mb-3">
                Audit
              </H2>
              <H4 className="text-[#141414]">
                Assess your enterprise's digital maturity and AI readiness
                to create a strategic transform.
              </H4>
            </motion.div>
          </div>

          {/* ==============================
              MOBILE + TABLET (<lg)
          =============================== */}
          <div className="flex lg:hidden flex-col justify-start h-full pt-10">
            <motion.img
              src="/Audit.png"
              alt="Audit"
              className="object-cover w-full rounded-sm"
              style={{
                height: useTransform(
                  scrollYProgress,
                  [0, 0.5],
                  ["260px", "220px"]
                ),
              }}
            />

            {/* TEXT — WIDTH INCREASED */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="mt-[10px] mx-auto w-[95%] max-w-[350px] text-center"
            >
              <H2 className="text-[#2B68C3] font-bold mb-2">
                Audit
              </H2>
              <H4 className="text-[#141414] ">
                Assess your enterprise's digital maturity and AI readiness
                to create a strategic transform..
              </H4>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
