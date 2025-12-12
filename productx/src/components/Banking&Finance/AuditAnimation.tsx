import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import {H3, P } from "../../styles/Typography";

export default function AuditAnimation() {
  const controlsImage = useAnimation();
  const controlsText = useAnimation();
  const [sectionState, setSectionState] = useState<"reset" | "animating" | "end">("reset");
  const sectionRef = useRef<HTMLDivElement>(null);

  const { ref, inView, entry } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!entry) return;

    const sectionTop = entry.boundingClientRect.top;
    const sectionBottom = entry.boundingClientRect.bottom;
    const windowHeight = window.innerHeight;

    if (inView) {
      // Section is in viewport
      const isEnteringFromTop = sectionTop >= 0 && sectionTop < windowHeight;
      const isEnteringFromBottom = sectionBottom <= windowHeight && sectionBottom > 0;

      if (isEnteringFromTop) {
        // RESET: Coming from previous section (scrolling down)
        setSectionState("reset");
        
        controlsImage.start({
          width: "100%",
          transition: { duration: 0.3 },
        });

        controlsText.start({
          opacity: 0,
          y: 60,
          transition: { duration: 0.2 },
        });

        // Then animate to end state
        setTimeout(() => {
          controlsImage.start({
            width: "65%",
            transition: { duration: 1.2, ease: "easeInOut" },
          });

          controlsText.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1.25, ease: "easeOut" },
          });
          setSectionState("end");
        }, 100);
      } else if (isEnteringFromBottom || sectionState === "end") {
        // Already at end state or coming from next section (scrolling up)
        controlsImage.start({
          width: "65%",
          transition: { duration: 0.5 },
        });

        controlsText.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        });
        setSectionState("end");
      }
    } else {
      // Section is out of viewport
      if (sectionTop < 0) {
        // Section is above viewport (scrolled down past it) - KEEP END STATE
        controlsImage.set({ width: "65%" });
        controlsText.set({ opacity: 1, y: 0 });
        setSectionState("end");
      } else if (sectionBottom > windowHeight) {
        // Section is below viewport (scrolled up past it) - RESET
        controlsImage.set({ width: "100%" });
        controlsText.set({ opacity: 0, y: 60 });
        setSectionState("reset");
      }
    }
  }, [inView, entry]);

  return (
    <section className="w-full h-auto bg-white py-20" ref={sectionRef}>
      <div ref={ref} className="relative w-full overflow-hidden">
        {/* FULL WIDTH SHRINKING IMAGE */}
        <motion.img
          src="/Audit.png"
          className="rounded-sm object-cover h-[400px] md:h-[500px] lg:h-[600px] w-full"
          initial={{ width: "100%" }}
          animate={controlsImage}
          style={{ display: "block" }}
        />

        {/* TEXT — Appears ONLY after image shrinks */}
        <motion.div
          className="absolute bottom-0 right-10 w-[90%] md:w-[25%]"
          initial={{ opacity: 0, y: 60 }}
          animate={controlsText}
        >
          <H3 className="text-[#2B68C3] font-bold mb-3">Audit</H3>
          <P className="mt-3 text-[#141414]">
            Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap.
          </P>
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-10 w-[90%] md:w-[25%]"
          initial={{ opacity: 0, y: 60 }}
          animate={controlsText}
        >
          <H3 className="text-[#2B68C3] font-bold mb-3">Audit</H3>
          <P className="mt-3 text-[#141414]">
            Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap.
          </P>
        </motion.div>
        <motion.div
          className="absolute bottom-80 right-10 w-[90%] md:w-[25%]"
          initial={{ opacity: 0, y: 60 }}
          animate={controlsText}
        >
          <H3 className="text-[#2B68C3] font-bold mb-3">Audit</H3>
          <P className="mt-3 text-[#141414]">
            Assess your enterprise's digital maturity and AI readiness to create a strategic transformation roadmap.
          </P>
        </motion.div>
      </div>
    </section>
  );
}