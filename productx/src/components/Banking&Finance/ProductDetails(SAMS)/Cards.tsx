import {H2, H3, P } from "../../../styles/Typography";

const features = [
  {
    title: "Duis aute irure dolor in",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    title: "Duis aute irure dolor in",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    title: "Duis aute irure dolor in",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    title: "Duis aute irure dolor in",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
];

const AboutFeaturesSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-left mb-12">
        <H2 className="text-gray-900 ">
          Lorem ipsum dolor, consectetur adipis
        </H2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Circle Icon Placeholder */}
            <div className="w-10 h-10 bg-white rounded-full mb-4"></div>

            {/* Title + Description */}
            <H3 className="text-gray-900 mb-2">
              {item.title}
            </H3>
            <P className="text-gray-700 mb-5 leading-relaxed">
              {item.description}
            </P>

            {/* White Rectangle (Image/Content Placeholder) */}
            <div className="w-full bg-white h-45 rounded-xl mb-[-24px]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
