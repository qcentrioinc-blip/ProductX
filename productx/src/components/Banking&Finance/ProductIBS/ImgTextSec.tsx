import { useState } from "react";
import { P, H4, H2 } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";


const accordionData = [
  {
    title: { part1: "Customer Dashboard and ", part2: " Account Overview " },
    imageSrc: "/ProductIBS/1f.webp",
    paragraph:
      "Personalized dashboard displays complete financial status with savings, deposits, and borrowings. Visual representations and drill-down capabilities provide detailed transaction history and account information.",
    features: ["Real-time balance updates ", "Transaction history with filters ", "Download account statements ", "Multiple account type views "],
  },
  {
    title: { part1: "Fund Transfers and  ", part2: " Bill Payments" },
    imageSrc: "/ProductIBS/2f.webp",
    paragraph:
      "Send money between accounts, pay utility bills, and transfer funds domestically or internationally. Integration with Pago payment gateway ensures secure processing with immediate confirmation.",
    features: ["Intra-bank and inter-bank transfers ", "Utility bill payment integration ", "Favorite and recent payees ", "Scheduled and recurring payments "],
  },
  {
    title: { part1: "Account Management and ", part2: "Security Controls" },
    imageSrc: "/ProductIBS/3f.webp",
    paragraph:
      " Comprehensive account services including checkbook requests, stop payments, and statement downloads. Transaction limits and security controls protect customer accounts.",
    features: ["Checkbook request online ", "Stop payment facility ", "Daily transaction limits ", "Two-factor authentication "],
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[#2B68C3] flex-shrink-0 mr-3 mt-1"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ImgTextSec = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full pt-16 px-6 md:px-10 lg:px-16">
      {/* CARD CONTAINER */}
      <div className="max-w-7xl mx-auto ">

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

          <div>
            <H2>
              <span className="text-[#2B68C3]">Powerful Features of </span> 
              <span className="text-black/80"> Internet <br className="hidden sm:block"/> Banking Solution</span>
            </H2>

            <P className="mt-4 max-w-2xl font-bold ">
              IBS delivers comprehensive online banking capabilities with secure access, real-time updates, and seamless core banking integration.
            </P>
          </div>

          <ContactUs className="min-w-[150px] flex items-center justify-center">
            CONTACT US
          </ContactUs>

        </div>

        {/* Accordion */}
        <div className="mt-10">
          {accordionData.map((data, index) => (
            <div key={`item-${index}`} className="group">

              {/* Accordion Title */}
              <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-6 py-6 cursor-pointer transition
                ${index === openIndex ? "bg-[#2B68C3]/20" : "hover:bg-gray-200"}`}
                onClick={() => setOpenIndex(index)}
              >
                {/* Title */}
                <H4 className="flex items-center text-lg font-semibold">
                  <svg
                    className={`w-10 h-10 mr-3 transition-transform duration-300 ${
                      index === openIndex
                        ? "rotate-90 text-[#2B68C3]"
                        : "text-black"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div>
                    <span className="text-[#2B68C3]">{data.title.part1}</span>
                    <span className="text-black/80">{data.title.part2}</span>
                  </div>
                </H4>

                {/* Inactive Description */}
                {index !== openIndex && (
                  <P className="md:col-span-2 text-[#141414]">
                    {data.paragraph}
                  </P>
                )}
              </div>

              {/* Active Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden
                ${index === openIndex
                    ? "opacity-100 py-3"
                    : "h-0 py-0 opacity-0"
                  }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Image */}
                  <div>
                    <img
                      src={data.imageSrc}
                      alt={`Feature ${index + 1}`}
                      className="rounded-lg w-full h-40 md:h-48 object-cover shadow"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2">

                    <P className="mb-6">{data.paragraph}</P>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.features.map((item, idx) => (
                        <div key={item + idx} className="flex items-start">
                          <CheckIcon />
                          <span className="text-[#141414]">{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

              {/* Divider */}
              {index < accordionData.length - 1 && (
                <div className="w-full h-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImgTextSec;