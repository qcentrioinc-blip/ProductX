"use client";

import { motion, type Variants } from "framer-motion";
import { H2, H4, P } from "../../../styles/Typography";

export default function CardsSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // ✅ FIX
      },
    },
  };

  return (
    <section className="w-full bg-white py-18">
      <div className="max-w-8xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <H2 className="text-center mb-12">
          Lorem ipsum dolor, consectetur adipis
        </H2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-lg flex flex-col p-6 sm:p-8 h-full border border-gray-400"
            >
              <div className="w-12 h-12 bg-gray-400 rounded-full mb-4" />
              <H4 className="mt-2">Duis aute irure dolor in</H4>
              <P className="text-gray-800 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </P>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
