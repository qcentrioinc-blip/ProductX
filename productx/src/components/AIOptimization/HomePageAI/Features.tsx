import { motion } from "framer-motion";
// import  { useEffect, useRef} from 'react';
// import { EffectComposer, RenderPass, EffectPass, BloomEffect, ChromaticAberrationEffect } from 'postprocessing';
// import * as THREE from 'three';
import { H3 } from "../../../styles/Typography";

const features = [
  {
    title: "Varied Solutions",
    description: "Built for specific goals.",
    image: "/AIProduct/Feature1.svg",
    points: [
      "Implement AWS, Azure, and Google Cloud solutions.  ",
      "Advanced optimization beyond standard FinOps tools. . ",

      "Crafted for multi-cloud platform professionals. .",
      "Understands complex configurations and commercial cloud term ",
    ],
  },
  {
    title: "Guaranteed Savings",
    description: " Pay only for performance results.",
    image: "/AIProduct/Feature2.svg",
    points: [
      "Rapid ROI as early as the first month. ",
      "Unique pay-for-performance model ensures shared success. ",

      "Customers keep 100% of the assured savings. ",
      "We charge a percentage of realized savings. ",
    ],
  },
  {
    title: "Continuous Optimization",
    description: " Retain savings long-term with AI.",
    image: "/AIProduct/Feature3.svg",
    points: [
      "Keep 80–90% of savings over time. ",
      "AI-driven measures enable continuous efficiency gains. ",

      "Full savings from enhancements over three years. ",
      "Maximized savings retention with an 8x ROI. ",
    ],
  },
  {
    title: " Secure & Compliant",
    description: "Zero data access, full customer control",
    image: "/AIProduct/Feature4.svg",
    points: [
      "Never access customer files, databases, or apps.",
      "Read-only by design with Azure RBAC roles. ",
      "Encrypted data at rest and in transit. ",
      "Onboarding and permissions managed by you. ",
    ],
  },
];


export default function FeatureCards() {
  return (
    <section className="w-full   relative overflow-hidden">

      {/* <GridScanBg />   */}
      {/* Content */}
      <div
        className="
    xl:ml-32
    max-w-8xl
    py-10
    px-6
    xl:px-0
    grid
    grid-cols-1
    md:grid-cols-2
    gap-y-16
    gap-x-20
    xl:py-20
    relative
    z-10
  "
      >

        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.05,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-10 mx-4 xl:mx-0"
            style={{ willChange: 'opacity, transform' }}
          >
            <div className="xl:flex-row flex flex-col gap-10">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
    flex-shrink-0
    rounded-sm
    object-contain
h-20 
w-20
    md:max-h-16
    md:max-w-16

    xl:max-h-[150px]
    xl:max-w-[150px]
  "
              />


              {/* Title and Description */}
              <div className="space-y-2">
                <H3 className="inline-block border-b-2 border-[#254D70]   font-semibold text-[#254D70]">
                  {item.title}
                </H3>
                <p className="mt-2 text-[28px] font-quicksand text-sm text-[#141414]">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bullet Points Below */}
            <ul className="space-y-2 text-sm items-center text-[#141414]">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-center font-quicksand lg:text-lg">
                  <span className="h-1.5 w-1.5 mx-2 rounded-full bg-[#141414]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}