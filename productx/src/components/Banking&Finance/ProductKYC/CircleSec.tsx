"use client";

import { useState } from "react";
import { H1, H4, P } from "../../../styles/Typography";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

type ProductTab = {
  label: string;
  description: string;
  image?: string;
  features?: Feature[];
  intro?: string;
};

const products: ProductTab[] = [
  {
    label: "Enterprise CDD",
    description:
      "Re-configure on the GO! No more expensive, time consuming system change requests.",
    image: "/ProductDetails4/KYC1.webp",
  },

  {
    label: "ID and V Monitor",
    description:
      "Real-time identity verification with intelligent monitoring and adaptive workflows.",
    intro:
      "A 100% configurable rule engine that enables generation of Identification (ID), Verification (V) & Due Diligence requirements for ANY Client in ANY Country across ANY jurisdictions.",
    features: [
      {
        icon: "/ProductDetails4/icon7.svg",
        title: "Requirement Generator",
        text: "Single click generation of data and documents required for Clients and Connected parties across countries.",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Configuration Studio",
        text: "Re-configure ID&V policy changes to Entities, Countries, Data points, Documents and Verification instantly.",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "API Integration",
        text: "Seamless data exchange with external and internal systems to capture and validate information.",
      },
    ],
  },

  {
    label: "BO Unwrapper",
    description:
      "Unwrap complex ownership structures with automated beneficial ownership mapping.",
    intro:
      "Gain complete transparency into multi-layered ownership structures and identify ultimate beneficial owners across global jurisdictions with automated intelligence.",
    features: [
      {
        icon: "/ProductDetails4/icon7.svg",
        title: "Ownership Mapping",
        text: "Visualize layered ownership hierarchies across jurisdictions.",
      },
      {
        icon: "/ProductDetails4/icon5.svg",
        title: "Risk Evaluation",
        text: "Automatically identify high-risk entities and exposure paths.",
      },
      {
        icon: "/ProductDetails4/icon4.svg",
        title: "Global Coverage",
        text: "Access cross-border data sources for comprehensive ownership analysis.",
      },
    ],
  },
];

export default function CircleSec() {
  const [activeTab, setActiveTab] = useState(products[0]);

  return (
    <section className="w-full bg-gradient-to-b from-[#E1EDFF] to-[#FFFFFF] py-12 px-4 sm:px-6 xl:px-20 text-center">
      
      {/* Title */}
      <H1 className="text-[#2f5fb3] mb-8 sm:mb-10">
         Solution Components
      </H1>

      {/* Tabs */}
      <div className="mb-12 sm:mb-14 overflow-x-auto scrollbar-hide">
        <div className="flex w-max min-w-full lg:w-full lg:min-w-0 justify-start md:justify-center gap-4 sm:gap-6 lg:gap-10 px-4 sm:px-6">
          {products.map((product) => {
            const isActive = activeTab.label === product.label;

            return (
              <button
                key={product.label}
                onClick={() => setActiveTab(product)}
                className={`
                  whitespace-nowrap
                  px-6 sm:px-10 lg:px-16 xl:px-20
                  py-3 sm:py-4
                  text-sm sm:text-base lg:text-lg
                  rounded-full
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#2f5fb3] text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                {product.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Description (Common under tabs) */}
      <H4 className="text-[#2f5fb3] mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto transition-all duration-300 px-2">
        {activeTab.description}
      </H4>

      {/* Content Section */}
      <div className="w-full flex justify-center">

        {/* IMAGE TAB */}
        {activeTab.image && (
          <img
            src={activeTab.image}
            alt={activeTab.label}
            className="w-full max-w-5xl lg:max-w-6xl object-contain transition-opacity duration-300"
          />
        )}

        {/* FEATURE TABS */}
        {activeTab.features && (
          <div className="w-full max-w-6xl mx-auto">

            {/* Intro Paragraph */}
            {activeTab.intro && (
              <P className="text-gray-700 text-sm sm:text-base mb-12 max-w-4xl mx-auto leading-relaxed">
                {activeTab.intro}
              </P>
            )}

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start text-center">
              {activeTab.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center px-6 md:border-l md:border-blue-300 first:md:border-l-0"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-16 mb-6"
                  />
                  <H4 className="font-semibold text-lg mb-3">
                    {feature.title}
                  </H4>
                  <P className="text-gray-600 text-sm">
                    {feature.text}
                  </P>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}