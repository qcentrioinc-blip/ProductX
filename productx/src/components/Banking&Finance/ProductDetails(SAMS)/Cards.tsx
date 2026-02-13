import {H2,  H4, P } from "../../../styles/Typography";

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
    <section className="w-full bg-gray-50 pb-10 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-left mb-12">
        <H2 className="text-gray-900 ">
          Lorem ipsum dolor, consectetur adipis
        </H2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#F5DDA9] p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Circle Icon Placeholder */}
            <div className="w-10 h-10 bg-white rounded-full mb-4"></div>

            {/* Title + Description */}
            <H4 className="text-gray-900 mb-4">
              {item.title}
            </H4>
            <P className="text-gray-700 mb-12 leading-relaxed max-w-[360px]">
              {item.description}
            </P>

            {/* White Rectangle (Image/Content Placeholder) */}
            <div className="w-full bg-white h-50 rounded-t-md rounded-b-none mb-[-24px]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
