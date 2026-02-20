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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cards = [
    {
      title: "Zero code policy configuration engine",
      description:
        "Configure all due diligence parameters on the go without vendor support.",
    },
    {
      title: " Full client lifecycle coverage",
      description:
        "Manage onboarding, periodic reviews, and trigger events seamlessly.",
    },
    {
      title: "Seamless API integrations ",
      description:
        "Connect with data sources, screening engines, and core systems. ",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-14 flex flex-col items-center">
        <H2 className="text-center mb-12">
          Complete due diligence platform overview
        </H2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="border border-gray-300 rounded-lg flex flex-col p-6 sm:p-4 h-full"
            >
              <div className="w-12 h-12 bg-[#D8D8D8] rounded-full mb-4" />
              <H4 className="mt-2">{card.title}</H4>
              <P className="text-gray-800 mt-2">
                {card.description}
              </P>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}