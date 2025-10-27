import { useState } from 'react';
import { H2, H3, P } from '../../../styles/Typography';

type FeatureSwitcherProps = {};

const FEATURES = [
  {
    id: 'feature_a',
    buttonLabel: 'Duis aute irure A',
    title: 'Lorem ipsum dolor gamis consecte A',
    p1: "This is the primary text for Feature A. It focuses on the core benefit and initial explanation of the service described by 'Duis aute irure A'.",
    p2: "This secondary text elaborates on the feature, detailing how the user can apply it to their daily workflow or use case.",
    imageSrc: '/ProductDetails4/PD4_img1.png',
  },
  {
    id: 'feature_b',
    buttonLabel: 'Duis aute irure B',
    title: 'Vero eos et accusamus et iusto B',
    p1: "Feature B description. This section highlights the unique selling points and key functionality related to the second button.",
    p2: "Further information on Feature B, including technical details or user-friendly guidance on activation.",
    imageSrc: '/ProductDetails4/PD4_img2.jpg',
  },
  {
    id: 'feature_c',
    buttonLabel: 'Duis aute irure C',
    title: 'Omnis voluptas assumenda est C',
    p1: "Feature C details. This covers the third area of functionality, ensuring comprehensive coverage of the product offering.",
    p2: "A call-to-action or next step related to exploring 'Duis aute irure C' further within the application.",
    imageSrc: '/ProductDetails4/PD4_img3.jpg',
  },
  {
    id: 'feature_d',
    buttonLabel: 'Duis aute irure D',
    title: 'Temporibus autem quibusdam D',
    p1: "Feature D explanation. The fourth feature provides an essential utility for advanced users.",
    p2: "Specific examples showing the practical application and value of this feature in a real-world scenario.",
    imageSrc: '/ProductDetails4/PD4_img4.jpg',
  },
  {
    id: 'feature_e',
    buttonLabel: 'Duis aute irure E',
    title: 'Repudiandae sint et molestiae E',
    p1: "Feature E overview. The final feature rounds out the core set of tools available to the user.",
    p2: "Summary of benefits and a final reason to engage with this particular component of the service.",
    imageSrc: '/ProductDetails4/PD4_img5.jpg',
  },
];

const FeatureSwitcher: React.FC<FeatureSwitcherProps> = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);
  const activeContent = FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#C1D7F3]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <H2 className="text-gray-900 mb-5 text-center tracking-tight leading-snug">
          Lorem ipsum dolor, consectetur adipis
        </H2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12 items-center">
          {/* Left Buttons */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-4 flex flex-col justify-center order-1">
            <nav aria-label="Feature Selection">
              {FEATURES.map((item) => {
                const isActive = item.id === activeFeatureId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveFeatureId(item.id)}
                    className={`w-full py-3 px-6 mb-5 text-left rounded-full transition-all duration-300
                      text-base font-semibold focus:outline-none focus:ring-indigo-500 focus:ring-offset-2
                      ${
                        isActive
                          ? 'bg-blue-600 text-white '
                          : 'bg-transparent text-black border border-gray-400 hover:bg-gray-100'
                      }`}
                  >
                    {item.buttonLabel}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-5 flex justify-center order-3 sm:order-3 lg:order-2">
            <div className="relative max-w-xl w-full">
              <img
                src={activeContent.imageSrc}
                alt={activeContent.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="sm:col-span-1 lg:col-span-4 space-y-6 text-gray-700 flex flex-col justify-center order-2 sm:order-2 lg:order-3">
            <H3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {activeContent.title}
            </H3>
            <P className="text-base">{activeContent.p1}</P>
            <P className="text-base">{activeContent.p2}</P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSwitcher;
