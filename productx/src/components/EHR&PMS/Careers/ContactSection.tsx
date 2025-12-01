import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ContactUs } from "../../../styles/Button";

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controlsThick = useAnimation();
  const controlsThin = useAnimation();

  useEffect(() => {
    if (inView) {
      controlsThick.start({
        x: ["-100%", "100%"],
        scaleY: [1, 1.3, 1],
        opacity: [0, 1, 1],
        transition: {
          x: { duration: 3, repeat: Infinity, ease: "linear" },
          scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          opacity: { duration: 1, ease: "easeInOut" },
        },
      });
      controlsThin.start({
        x: ["-100%", "100%"],
        scaleY: [1, 1.2, 1],
        opacity: [0, 1, 1],
        transition: {
          x: { duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 },
          scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.5 },
          opacity: { duration: 1, ease: "easeInOut", delay: 0.5 },
        },
      });
    }
  }, [inView, controlsThick, controlsThin]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[50vh] bg-[#F1FBF5] overflow-hidden
      px-10 py-30"
    >
      {/* ------------- GRID WRAPPER (2 Columns Desktop) ------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10 max-w-7xl mx-auto">

        {/* ================= LEFT SIDE TEXT ================= */}
        <div>
          <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="font-bricolage font-semibold leading-[120%]
  text-[28px] sm:text-[32px] md:text-[40px]"
>
  <span
    className="bg-gradient-to-r from-[#28B87B] to-[#F99526] text-transparent bg-clip-text"
  >
    Sed ut perspiciatis
  </span>

  <br />

  <span
    className="bg-gradient-to-r from-[#28B87B] to-[#F99526] text-transparent bg-clip-text"
  >
    Unde Seduo ut perspiciatis
  </span>
</motion.h2>

        </div>

        {/* ================= RIGHT SIDE PARAGRAPH + BTN ================= */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[14px] md:text-[16px] font-quicksand leading-[150%] text-gray-700 mb-4"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. occaecat cupidatat non.
          </motion.p>

          <ContactUs>CONTACT US</ContactUs>
        </div>
      </div>

      {/* ================= BACKGROUND SHAPE ================= */}
      <motion.img
        src="/EHR-PMS/Careers/shape1.png"
        alt="shape"
        className="absolute object-contain pointer-events-none select-none bottom-[-150px] xl:bottom-[-300px] right-0 w-[300px] md:w-[400px] lg:w-[500px]"
        // style={{
        //   width: "clamp(100px, 50vw, 900px)",
        //   bottom: "clamp(-450px, -20vw, -250px)",
        //   right: "clamp(-120px, 4vw, -10px)",
        //   opacity: 0.9,
        // }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </section>
  );
};

export default ContactSection;
