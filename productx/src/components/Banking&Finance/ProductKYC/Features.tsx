"use client";
import { useState } from "react";
import { H2,H3, P } from "../../../styles/Typography";

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Policy Configuration Engine ",
    title: "Zero code policy configuration engine ",
    p1: "Configure all due diligence parameters without coding. Changes to regulations or policies can be made in minutes with version control and checker functionality.",
    p2: "No training required for frontline staff when policies update. ",
    imageSrc: "/ProductDetails4/PD4_img1(2).webp",
  },
  {
    id: "feature_b",
    buttonLabel: "Smart Data Capture ",
    title: "Smart forms for data capture ",
    p1: "Client-specific smart forms automatically generate requirements based on entity type, jurisdiction, and risk profile.",
    p2: "Captures data for customers and connected parties with built-in validations for accuracy. ",
    imageSrc: "/ProductDetails4/PD4_img2(2).webp",
  },
  {
    id: "feature_c",
    buttonLabel: "Automated Screening ",
    title: "Automated name screening integration",
    p1: "Seamlessly screen customers and connected parties against sanctions, PEP lists, and watchlists.",
    p2: "Integrates with leading screening engines during onboarding and ongoing monitoring. ",
    imageSrc: "/ProductDetails4/PD4_img3.webp",
  },
  {
    id: "feature_d",
    buttonLabel: "Risk Assessment ",
    title: "Risk assessment and decisioning ",
    p1: "Automatically compute risk ratings based on configured attributes and rules.",
    p2: "Workflow rules drive consistent decisioning with options for approval routing and case management.",
    imageSrc: "/ProductDetails4/PD4_img4.webp",
  },
  {
    id: "feature_e",
    buttonLabel: "Lifecycle Management ",
    title: "Full client lifecycle management ",
    p1: "System automatically moves profiles to periodic and trigger event queues.",
    p2: "Applies current policy standards and enables refresh of KYC profiles with version control for audit readiness. ",
    imageSrc: "/ProductDetails4/PD4_img5.webp",
  },
];

const Feature: React.FC<FeatureSwitcherProps> = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);
  const activeContent =
    FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section className="pb-5 px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <H2 className="py-4 text-center text-[#2B68C3] tracking-tight leading-snug">
         Key features of Diligent platform 
        </H2>

        {/* MAIN LAYOUT */}
        <div
          className="
            flex flex-col gap-y-12 gap-x-10 items-center
            xl:grid 
            xl:grid-cols-12 
            xl:items-stretch
          "
        >
          {/* LEFT BUTTONS — DESKTOP */}
          <div className="hidden xl:flex xl:col-span-3 flex-col justify-center space-y-4 h-full">
            {FEATURES.map((item) => {
              const isActive = item.id === activeFeatureId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFeatureId(item.id)}
                  className={`py-4 px-12 rounded-full text-base font-semibold transition-all
                    ${
                      isActive
                        ? "bg-[#2B68C3] text-white"
                        : "border border-gray-400 text-black hover:bg-gray-100"
                    }`}
                >
                  {item.buttonLabel}
                </button>
              );
            })}
          </div>

          {/* HORIZONTAL BUTTONS — MOBILE & TABLET */}
          <div className="xl:hidden w-full overflow-x-auto scrollbar-hide py-2">
            <div
              className="
                flex gap-3
                px-4 sm:px-6
                pb-4
                snap-x snap-mandatory xl:pl-25 
               scroll-pr-4
              "
            >
              {FEATURES.map((item) => {
                const isActive = item.id === activeFeatureId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFeatureId(item.id)}
                    className={`flex-shrink-0 snap-start whitespace-nowrap
                      py-4 px-6 rounded-full text-sm font-semibold transition-all
                      ${
                        isActive
                          ? "bg-[#2B68C3] text-white"
                          : "bg-white border border-gray-400 text-black hover:bg-gray-100"
                      }`}
                  >
                    {item.buttonLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-2 xl:col-span-6 flex justify-center items-center h-full w-full">
            <img
              src={activeContent.imageSrc}
              alt={activeContent.title}
              className=" w-full object-contain rounded-xl
    max-h-[400px] 
    md:max-h-[450px] 
    xl:max-h-none xl:h-full"
            />
          </div>

          {/* CONTENT */}
          <div className="order-3 xl:col-span-3 flex flex-col justify-center space-y-6 text-center xl:text-left w-full h-full">
            <H3 className="text-gray-900 tracking-tight leading-tight">
              {activeContent.title}
            </H3>
            <P>{activeContent.p1}</P>
            <P>{activeContent.p2}</P>
          </div>
        </div>
      </div>

      {/* SCROLLBAR HIDE */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </section>
  );
};

export default Feature;
