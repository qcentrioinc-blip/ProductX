import { useState } from "react";
import { H2, H3, P } from "../../../styles/Typography";

const features = [
  { title: "Varied Solutions", description: "Built for specific goals.", image: "/AIProduct/Feature1.svg", points: [ "Implement AWS, Azure, and Google Cloud solutions.  ",
      "Advanced optimization beyond standard FinOps tools. . ",

      "Crafted for multi-cloud platform professionals. .",
      "Understands complex configurations and commercial cloud term ",
] },
  { title: "Guaranteed Savings", description: "Pay only for performance results.", image: "/AIProduct/Feature2.svg", points: ["Rapid ROI as early as the first month. ",
      "Pay-for-performance model ensures shared success. ",

      "Customers keep 100% of the assured savings. ",
      "We charge a percentage of realized savings. ",
] },
  { title: "Continuous Optimization", description: "Retain savings long-term with AI.", image: "/AIProduct/Feature3.svg", points: ["Keep 80–90% of savings over time. ",
      "AI-driven measures enable continuous efficiency gains. ",

      "Full savings from enhancements over three years. ",
      "Maximized savings retention with an 8x ROI. ",
] },
  { title: "Secure & Compliant", description: "Zero data access, full customer control", image: "/AIProduct/Feature4.svg", points: [ "Never access customer files, databases, or apps.",
      "Read-only by design with Azure RBAC roles. ",
      "Encrypted data at rest and in transit. ",
      "Onboarding and permissions managed by you. ",
] },
];

export default function FeatureCards() {
  const [open, setOpen] = useState(0);
  return (
<section className="w-full bg-[#00AA72] py-20">
  <div className="px-[40px]   md:px-[60px] xl:px-[160px]">

    <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

      {/* LEFT SIDE */}
      <div className="text-white lg:sticky top-28">

        <P className="font-semibold text-white mb-4">
          {features[open].title}
        </P>

        <H2 className="text-white max-w-md">
          {features[open].description}
        </H2>

      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-4">

        {features.map((item, index) => {

          const active = open === index;

          return (
            <div
              key={index}
              className="bg-white overflow-hidden"
            >

              {/* HEADER */}

              <button
                onClick={() => setOpen(active ? -1 : index)}
                className="w-full flex justify-between items-center px-6 py-5"
              >

                <div className="flex items-center gap-3">

                  <div className="h-5 w-5 rounded-full bg-[#00AA72] flex items-center justify-center text-white text-xs">
                    ✓
                  </div>

                  <H3 className="text-[#3A3A3A]">
                    {item.title}
                  </H3>

                </div>

                <svg
                  className={`w-5 h-5 transition ${
                    active ? "rotate-180" : ""
                  }`}
                  fill="#00AA72"
                  stroke="#00AA72"
                  strokeWidth=""
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              {/* BODY */}

              <div
                className={`transition-all duration-300  overflow-hidden ${
                  active ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >

                <ul className="px-12  xl:ml-16 space-y-5">

                  {item.points.map((point, i) => (

                    <li
                      key={i}
                      className="list-disc text-gray-700"
                    >
                      {point}
                    </li>

                  ))}

                </ul>

              </div>

            </div>
          );

        })}

      </div>

    </div>

  </div>
</section>
  );
}