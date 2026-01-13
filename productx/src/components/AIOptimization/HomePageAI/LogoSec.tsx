import { motion, useMotionValue, useAnimationFrame, useInView } from "framer-motion";
import { useRef } from "react";
import { H2 } from "../../../styles/Typography";

const logos = [
  "/CompanyLogo/Dell.png", "/CompanyLogo/GoogleCloud.png", "/CompanyLogo/Infosys.png",
  "/CompanyLogo/Oracle.png", "/CompanyLogo/AWS.png", "/CompanyLogo/Deloitte.png",
];

export default function AutoScrollingPartners() {
  const x = useMotionValue(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  useAnimationFrame(() => {
    // Only update animation if in view to save CPU/GPU resources
    if (isInView) {
      x.set(x.get() - 1.2); 
      if (x.get() < -2000) x.set(0); 
    }
  });

  return (
    <section ref={sectionRef} className="w-full py-24 overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <H2 className="text-center text-white mb-14">We partnered with</H2>
      </motion.div>

      <motion.div
        style={{ x }} 
        className="flex gap-16 px-8 will-change-transform"
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[200px] h-[90px] xl:min-w-[250px] bg-[#121212] border border-white/10 rounded-xl shadow-lg"
          >
            <img src={logo} className="h-full w-full object-contain p-6" alt="partner logo" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}