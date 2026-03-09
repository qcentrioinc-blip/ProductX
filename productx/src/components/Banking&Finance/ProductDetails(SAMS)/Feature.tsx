import { H2, H4, P } from "../../../styles/Typography";

const features = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullaarr pariatur. Excepteur sint occaecat.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullaarr pariatur. Excepteur sint occaecat.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullaarr pariatur. Excepteur sint occaecat.",
  },
];

const AboutFeaturesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-12">
      {/* Section Title */}
      <div className="max-w-8xl mx-10 text-left mb-12">
        <H2 className="text-gray-900">Sed ut perspiciatis</H2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl transition-all duration-300 flex flex-col"
          >
            {/* Circle Icon */}
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>

            {/* Title */}
            <H4 className="text-gray-900 text-lg font-semibold mb-4">
              {item.title}
            </H4>

            {/* Description */}
            <P className="text-gray-700 text-sm leading-relaxed flex-1">
              {item.description}
            </P>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
