import { H2, P } from "../../../styles/Typography";

const features = [
  {
    id: 1,
    text: "Automated Clearing House (ACH) for batch processing",
  },
  {
    id: 2,
    text: "Real-time payment processing with secure authentication",
  },
  {
    id: 3,
    text: "NACHA framework for harmonized standards and practices ",
  },
  {
    id: 4,
    text: "AML monitoring for cross-referencing beneficiary data ",
  },
];

const CTA = () => {
  return (
    <section className="pt-12 lg:pt-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_1fr] gap-12 items-start">

          {/* Column 1 */}
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 border border-gray-300 rounded-full text-sm">
              Overview
            </span>

            <H2 className="leading-tight">
              Built for All Payment Types
            </H2>
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            {features.slice(0, 2).map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0" />
                <P className="leading-tight pt-2">{item.text}</P>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-10">
            {features.slice(2, 4).map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0" />
                <P className="leading-tight pt-2">{item.text}</P>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;