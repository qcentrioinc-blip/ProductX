import { ArrowRight } from "lucide-react";
import { H2, H3, P } from "../../../styles/Typography";

const products = [
  {
    id: 1,
    title: "KYC and CDD",
    link: "#",
    description: "Digitizes and standardizes customer onboarding with automated risk assessment.",
    image: "/ProductKYC.webp",
    imageWidth: "w-[46%]",
    imageHeight: "h-auto",
    imagePosition: "right-[-16px] bottom-[0px]",
  },
  {
    id: 2,
    title: "Conciliare",
    link: "#",
    description: "Automates financial reconciliation with high matching rates.",
    image: "/Conciliare.webp",
    imageWidth: "w-[60%]",
    imagePosition: "right-[-80px] bottom-[0px]",
  },
  {
    id: 3,
    title: "Fraud Detection",
    link: "#",
    description: "Real-time fraud detection using AI-powered transaction monitoring.",
    image: "/fraud.webp",
    imageWidth: "w-[55%]",
    imagePosition: "right-[-40px] bottom-[0px]",
  },
  {
    id: 4,
    title: "AML Monitoring",
    link: "#",
    description: "Ensures compliance with anti-money laundering regulations.",
    image: "/aml.webp",
    imageWidth: "w-[50%]",
    imagePosition: "right-[-30px] bottom-[0px]",
  },
  {
    id: 5,
    title: "Risk Management",
    link: "#",
    description: "Centralized risk analytics for smarter decision making.",
    image: "/risk.webp",
    imageWidth: "w-[50%]",
    imagePosition: "right-[-20px] bottom-[0px]",
  },
  {
    id: 6,
    title: "Payment Gateway",
    link: "#",
    description: "Secure and scalable digital payment infrastructure.",
    image: "/payment.webp",
    imageWidth: "w-[55%]",
    imagePosition: "right-[-30px] bottom-[0px]",
  },
  {
    id: 7,
    title: "Loan Processing",
    link: "#",
    description: "End-to-end automation for loan approval workflows.",
    image: "/loan.webp",
    imageWidth: "w-[50%]",
    imagePosition: "right-[-20px] bottom-[0px]",
  },
  {
    id: 8,
    title: "Customer Insights",
    link: "#",
    description: "Advanced analytics to understand customer behavior.",
    image: "/insights.webp",
    imageWidth: "w-[55%]",
    imagePosition: "right-[-25px] bottom-[0px]",
  },
  {
    id: 9,
    title: "RegTech Suite",
    link: "#",
    description: "Regulatory technology tools for compliance automation.",
    image: "/regtech.webp",
    imageWidth: "w-[50%]",
    imagePosition: "right-[-20px] bottom-[0px]",
  },
  {
    id: 10,
    title: "Wealth Management",
    link: "#",
    description: "Digital tools for portfolio and asset management.",
    image: "/wealth.webp",
    imageWidth: "w-[50%]",
    imagePosition: "right-[-20px] bottom-[0px]",
  },
  {
    id: 11,
    title: "Core Banking",
    link: "#",
    description: "Modern core banking platform for scalable operations.",
    image: "/core.webp",
    imageWidth: "w-[55%]",
    imagePosition: "right-[-30px] bottom-[0px]",
  },
];

export default function AllProducts() {
  return (
    <section className="max-w-7xl mx-auto xl:mx-18 bg-white py-6 xl:py-12 px-4 sm:px-8 lg:px-16 xl:px-0">

      {/* HEADER */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <H2 className="text-[#2B68C3] leading-tight">
            Banking and Finance Products
          </H2>
          <H2 className="text-[#141414] leading-tight">
            Built For Scale
          </H2>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 py-10">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link}
            className="relative rounded-xl bg-white
              border border-gray-200
              flex items-center transition-all duration-300
              hover:shadow-sm
              group overflow-hidden
              min-h-[180px]
            "
          >
            {/* TEXT */}
            <div className="relative z-20 p-6 w-full">
              <div className="relative mb-3">
                <H3 className="text-xl font-semibold">
                  {product.title}
                </H3>

                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md transition-all group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 text-[#2B68C3]" />
                </div>
              </div>

              <P className="text-sm leading-relaxed">
                {product.description}
              </P>
            </div>

            {/* IMAGE */}
            {/* <img
              src={product.image}
              alt={product.title}
              className={`
                absolute hidden xl:block
                pointer-events-none object-contain
                ${product.imageWidth}
                ${product.imageHeight}
                ${product.imagePosition}
              `}
            /> */}
          </a>
        ))}
      </div>
    </section>
  );
}