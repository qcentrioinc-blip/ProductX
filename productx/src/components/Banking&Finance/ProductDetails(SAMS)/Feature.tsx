import { H2, H4, P } from "../../../styles/Typography";

const features = [
  {
    title: "Automated NPA Identification",
    icon: "/BNFCos/guide.svg",
    description:
      "System identifies NPA records using IRAC guidelines with differentiated logic for financial and non-financial parameters across customer types.",
  },
  {
    title: "Unified Customer Data",
    icon: "/BNFCos/big-data.svg",
    description:
      " Consolidates customer information from multiple systems using Uniform Customer Code for a complete view of all credit facilities.",
  },
  {
    title: "Provisioning and Classification",
    icon: "/BNFCos/cube.svg",
    description:
      "Automates asset classification and provision computation based on collateral values and regulatory guidelines for secured and unsecured loans.",
  },
];

const AboutFeaturesSection = () => {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-left mb-12">
        <H2 className="text-gray-900">Complete Stressed Asset Management Platform</H2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl transition-all duration-300 flex flex-col"
          >
            {/* Circle Icon */}
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />

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
