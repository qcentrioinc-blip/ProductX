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
      icon: "/ProductDetails4/icon1.svg",
    },
    {
      title: "Full client lifecycle coverage",
      description:
        "Manage onboarding, periodic reviews, and trigger events seamlessly.",
      icon: "/ProductDetails4/icon2.svg",
    },
    {
      title: "Seamless API integrations",
      description:
        "Connect with data sources, screening engines, and core systems.",
      icon: "/ProductDetails4/icon3.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-18">
      <div className="max-w-8xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <H2 className="text-center mb-12">
          Complete due diligence platform overview
        </H2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group border border-gray-200 rounded-xl flex flex-col p-6 h-full transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <H4 className="mt-2">{card.title}</H4>

              <P className="text-gray-800 mt-3">
                {card.description}
              </P>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}