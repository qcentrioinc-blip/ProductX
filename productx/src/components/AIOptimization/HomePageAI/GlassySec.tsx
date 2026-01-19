import { H4, P } from "../../../styles/Typography";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

export default function GlassySec() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section ref={ref} className="w-full px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-8xl mx-auto xl:px-10 flex justify-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="
            w-full max-w-7xl
            rounded-3xl
            bg-white/5 
            will-change-transform
            border border-white/10
            shadow-2xl
            px-6 py-16
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">

            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <H4 className="inline-block px-5 py-3 mb-3 rounded-full bg-white text-sm font-semibold text-black">
                  {i === 0 && "AI-Powered Profiling"}
                  {i === 1 && "Expert Recommendations"}
                  {i === 2 && "Guaranteed Savings"}
                </H4>

                <P className="mx-auto font-medium text-white">
                  {i === 0 && <>Analyzes resource configuration,<br /> usage, and costs.</>}
                  {i === 1 && <>Actionable insights from <br /> cloud engineering veterans.</>}
                  {i === 2 && <>Pay only a share <br /> of realized savings.</>}
                </P>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section >
  );
}
