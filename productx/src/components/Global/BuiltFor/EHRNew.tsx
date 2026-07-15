import CareIcon from "/BuiltFor/analytics.svg";
import ComplianceIcon from "/BuiltFor/team.svg";
import BillingIcon from "/BuiltFor/database-management.svg";
import { H2, H3, P,  } from "../../../styles/Typography";

const cards = [
  {
    icon: CareIcon,
    title: "Fragmented Care Coordination",
    description:
      "Disconnected teams lead to inconsistent care plans and communication gaps for residents.",
  },
  {
    icon: ComplianceIcon,
    title: "Regulatory Compliance Burden",
    description:
      "Manual tracking and reporting for MDS and audits increase errors and staff workload.",
  },
  {
    icon: BillingIcon,
    title: "Complex Billing Management",
    description:
      "Navigating Medicare, Medicaid, and private insurance billing is time-consuming and prone to delays.",
  },
];

const EHRNew = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-full px-[40px] md:px-[60px] xl:px-[160px]  ">
        {/* Heading */}
        <H2 className=" font-quadran font-bold text-[#00B67A] mb-10">
          UndeSed ut perspiciatis
        </H2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              {/* Top Green Border */}
              <div className="h-1 bg-[#00B67A]" />

              <div className="p-8">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-12 h-12 mb-8"
                />

                <H3 className="  font-semibold text-gray-900 leading-snug mb-5">
                  {card.title}
                </H3>

                <P className="text-gray-600 leading-7 ">
                  {card.description}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EHRNew;