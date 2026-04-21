import { H2, H4, P } from "../../../styles/Typography";

const features = [
  {
    title: "Pre-Approved Loan Offers- ECOA Compliant",
    icon: "/SAMS/guide-book.svg",
    description:
      "Back-office users upload pre-approved offers for selected customers. Quick submission and fast screening enable potential auto-approval for existing customers.",
  },
  {
    title: "Built-In OCR Technology",
    icon: "/SAMS/big-data.svg",
    description:
      " Reads standard document images like SSN and driving licenses. AI enhances OCR with machine learning to detect mismatches in name, birth date, and address.",
  },
  {
    title: "Configurable Score Parameters",
    icon: "/SAMS/cube.svg",
    description:
      "Built-in parameters for individual and corporate customers, including age, income ratio, debt equity, and interest coverage. Provision to add new parameters for score computation.",
  },
];

const AboutFeaturesSection = () => {
  return (
    <section className="w-full bg-white  dark:bg-black py-10 px-6 md:px-12 lg:px-20 xl:px-0">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-left mb-12">
        <H2 className="text-gray-900 dark:text-white">What Makes LOS Platform Unique – Fair Lending and FCRA Compliant </H2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-slate-950 p-6 dark:border-2 dark:border-gray-200 rounded-xl transition-all duration-300 flex flex-col"
          >
            {/* Circle Icon */}
            <img src={item.icon} alt={item.title} className="w-10 h-10 mb-4" />

            {/* Title */}
            <H4 className="text-gray-900 dark:text-[#2B68C3] text-lg font-semibold mb-4">
              {item.title}
            </H4>

            {/* Description */}
            <P className="text-gray-700 dark:text-white text-sm leading-relaxed flex-1">
              {item.description}
            </P>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFeaturesSection;
