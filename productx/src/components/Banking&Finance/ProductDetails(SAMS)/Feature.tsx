import { H2, H3, P } from "../../../styles/Typography";

const features = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
  },
];

const AboutFeaturesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-left mb-12">
        <H2 className="text-gray-900">Sed ut perspiciatis</H2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl transition-all duration-300 flex flex-col"
          >
            {/* Circle Icon */}
            <div className="w-10 h-10 bg-gray-300 rounded-full mb-4"></div>

            {/* Title */}
            <H3 className="text-gray-900 text-lg font-semibold mb-2">
              {item.title}
            </H3>

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
