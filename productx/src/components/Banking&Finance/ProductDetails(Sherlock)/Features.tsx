"use client";
import { useState } from "react";
import { H2, P } from "../../../styles/Typography";

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: "feature_a",
    buttonLabel: "Duis aute irure",
    title: "Lorem ipsum dolor gamis consecte",
    p1: "This is the primary text for Feature A. It focuses on the core benefit and initial explanation of'Duis aute irure'.",
    p2: "This secondary text elaborates on the feature, a the detailing how the user can apply it to their daily ",
    imageSrc: "/ProductDetails4/PD4_img4.jpg",
  },
  {
    id: "feature_b",
    buttonLabel: "Duis aute irure",
    title: "Vero eos et accusamus et iusto ",
    p1: "Feature B description. This section highlights the unique selling points and key  relat button.",
    p2: "Further information on Feature B, including technical details or user-friendly guidance on .",
    imageSrc: "/ProductDetails4/PD4_img2.jpg",
  },
  {
    id: "feature_c",
    buttonLabel: "Duis aute irure",
    title: "Omnis voluptas assumenda est ",
    p1: "Feature C details. This covers the third area of functionality,e of the product offering.",
    p2: "A call-to-action or next step related to exploring 'Duis aute irure' fuin the application.",
    imageSrc: "/ProductDetails4/PD4_img3.jpg",
  },
  {
    id: "feature_d",
    buttonLabel: "Duis aute irure",
    title: "Temporibus autem quibusdam D",
    p1: "Feature D explanation. The fourth feature provides an essential utility for advanced users.",
    p2: "Specific examples showing the practical application and value of this feature in a real-world scenario.",
    imageSrc: "/ProductDetails4/PD4_img4.jpg",
  },
  {
    id: "feature_e",
    buttonLabel: "Duis aute irure",
    title: "Repudiandae sint et molestiae E",
    p1: "Feature E overview. The final feature rounds out the core set of tools available to the user.",
    p2: "Summary of benefits and a final reason to engage with this particular component of the service.",
    imageSrc: "/ProductDetails4/PD4_img2.jpg",
  },
];

const Feature: React.FC<FeatureSwitcherProps> = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);
  const activeContent =
    FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section className="py-14 px-5 sm:px-10 lg:px-32 bg-[#fafafa] xl:h-screen overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <H2 className="mb-20 mt-10 text-center text-blue-600 tracking-tight leading-snug">
          Lorem ipsum dolor, consectetur adipis consectetur
        </H2>

        {/* Main Layout */}
        <div
          className="
            flex flex-col gap-y-12 gap-x-10 items-center
            [@media(min-width:1100px)]:grid 
            [@media(min-width:1100px)]:grid-cols-12 
            [@media(min-width:1100px)]:items-start
          "
        >
          {/* Left Buttons (Desktop) */}
          <div className="hidden [@media(min-width:1100px)]:flex [@media(min-width:1100px)]:col-span-3 space-y-4 flex-col justify-start order-1">
            <nav aria-label="Feature Selection">
              {FEATURES.map((item) => {
                const isActive = item.id === activeFeatureId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFeatureId(item.id)}
                    className={`py-4 px-12 mb-6 text-center rounded-full transition-all duration-300
                      text-base font-semibold focus:outline-none
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-transparent text-black border border-gray-400 hover:bg-gray-100"
                      }`}
                  >
                    {item.buttonLabel}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Horizontal Scroll Buttons (Below 1100px) */}
          <div className="[@media(min-width:1100px)]:hidden w-full overflow-x-auto">
            <div className="flex space-x-3 pb-4 px-4 snap-x snap-mandatory overflow-y-hidden justify-center scrollbar-hide">
              {FEATURES.map((item) => {
                const isActive = item.id === activeFeatureId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFeatureId(item.id)}
                    className={`flex-shrink-0 snap-start whitespace-nowrap py-4 px-6 rounded-full text-sm font-semibold transition-all duration-300
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-white text-black border border-gray-400 hover:bg-gray-100"
                      }`}
                  >
                    {item.buttonLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Image */}
          <div className="order-2 [@media(min-width:1100px)]:col-span-5 flex justify-center [@media(min-width:1100px)]:justify-start w-full">
            <div className="relative max-w-xl w-full">
              <img
                src={activeContent.imageSrc}
                alt={activeContent.title}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-3 [@media(min-width:1100px)]:col-span-4 space-y-6 text-gray-700 flex flex-col justify-center text-left w-full px-2 xl:px-0 md:px-24">
            <H2 className="text-gray-900 tracking-tight leading-tight">
              {activeContent.title}
            </H2>
            <P className="text-base">{activeContent.p1}</P>
            <P className="text-base">{activeContent.p2}</P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
