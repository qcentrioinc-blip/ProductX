"use client";
import { useState } from "react";
import { H2,H3, P } from "../../../styles/Typography";

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Duis aute irure",
    title: "Lorem ipsum dolor gamis consecte",
    p1: "This is the primary text for Feature A. It focuses on the core benefit and initial explanation of 'Duis aute irure'.",
    p2: "This secondary text elaborates on the feature, detailing how the user can apply it to their daily workflow.",
    imageSrc: "/ProductDetails4/PD4_img4.jpg",
  },
  {
    id: "feature_b",
    buttonLabel: "Duis aute irure",
    title: "Vero eos et accusamus et iusto",
    p1: "Feature B description. This section highlights the unique selling points and key advantages.",
    p2: "Further information on Feature B, including technical details or user-friendly guidance.",
    imageSrc: "/ProductDetails4/PD4_img2.jpg",
  },
  {
    id: "feature_c",
    buttonLabel: "Duis aute irure",
    title: "Omnis voluptas assumenda est",
    p1: "Feature C details. This covers the third area of functionality of the product offering.",
    p2: "A call-to-action or next step related to exploring this feature further.",
    imageSrc: "/ProductDetails4/PD4_img3.jpg",
  },
  {
    id: "feature_d",
    buttonLabel: "Duis aute irure",
    title: "Temporibus autem quibusdam",
    p1: "Feature D explanation. The fourth feature provides an essential utility for advanced users.",
    p2: "Specific examples showing the practical application and real-world value.",
    imageSrc: "/ProductDetails4/PD4_img4.jpg",
  },
  {
    id: "feature_e",
    buttonLabel: "Duis aute irure",
    title: "Repudiandae sint et molestiae",
    p1: "Feature E overview. The final feature rounds out the core set of tools.",
    p2: "Summary of benefits and a final reason to engage with this component.",
    imageSrc: "/ProductDetails4/PD4_img2.jpg",
  },
];

const Feature: React.FC<FeatureSwitcherProps> = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);
  const activeContent =
    FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section className="pb-10 px-5 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <H2 className="mb-16 mt-10 text-center text-blue-600 tracking-tight leading-snug">
          Lorem ipsum dolor, consectetur adipis consectetur
        </H2>

        {/* MAIN LAYOUT */}
        <div
          className="
            flex flex-col gap-y-12 gap-x-10 items-center
            [@media(min-width:1100px)]:grid 
            [@media(min-width:1100px)]:grid-cols-12 
            [@media(min-width:1100px)]:items-start
          "
        >
          {/* LEFT BUTTONS — DESKTOP */}
          <div className="hidden [@media(min-width:1100px)]:flex [@media(min-width:1100px)]:col-span-3 flex-col space-y-4">
            {FEATURES.map((item) => {
              const isActive = item.id === activeFeatureId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFeatureId(item.id)}
                  className={`py-4 px-12 rounded-full text-base font-semibold transition-all
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "border border-gray-400 text-black hover:bg-gray-100"
                    }`}
                >
                  {item.buttonLabel}
                </button>
              );
            })}
          </div>

          {/* HORIZONTAL BUTTONS — MOBILE & TABLET */}
          <div className="[@media(min-width:1100px)]:hidden w-full overflow-x-auto scrollbar-hide">
            <div
              className="
                flex gap-3
                px-4 sm:px-6
                pb-4
                snap-x snap-mandatory
                scroll-pl-4 scroll-pr-4
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
                          ? "bg-blue-600 text-white"
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
          <div className="order-2 [@media(min-width:1100px)]:col-span-5 flex justify-center w-full">
            <img
              src={activeContent.imageSrc}
              alt={activeContent.title}
              className="max-w-xl w-full object-contain rounded-xl"
            />
          </div>

          {/* CONTENT */}
          <div className="order-3 [@media(min-width:1100px)]:col-span-4 space-y-6 text-left w-full px-2 md:px-24 xl:px-0 xl:mt-16">
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
