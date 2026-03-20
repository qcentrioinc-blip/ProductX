"use client";

import { ArrowRight } from "lucide-react";
import { H2, H3, P } from "../../../styles/Typography";

const products = [
  {
    id: 1,
    title: "KYC and CDD",
    link: "/industries/banking-and-finance/products/kyc",
    logo: "/ProductsLogo/KYC.webp",
    description:
      "Digitizes customer onboarding with automated risk assessment, compliance workflows, identity verification, and centralized customer data management for seamless regulatory adherence.",
  },
  {
    id: 2,
    title: "Conciliare",
    link: "/industries/banking-and-finance/products/conciliare",
    logo: "/ProductsLogo/Conciliare.webp",
    description:
      "Automates financial reconciliation across systems, ensuring high match accuracy, reduced manual effort, faster settlements, and detailed reporting for audit compliance.",
  },
  {
    id: 3,
    title: "SAMS",
    link: "/industries/banking-and-finance/products/sams",
    logo: "/ProductsLogo/Sams.webp",
    description:
      "Stressed asset management system providing NPA tracking, risk analysis, automated provisioning, predictive insights, and centralized monitoring for better asset control.",
  },
  {
    id: 4,
    title: "Sherlock",
    link: "/industries/banking-and-finance/products/sherlock",
    logo: "/ProductsLogo/sherlock.webp",
    description:
      "Advanced AML monitoring solution with real-time transaction tracking, suspicious activity detection, compliance checks, and automated alerts for fraud prevention.",
  },
  {
    id: 5,
    title: "ALMANAC",
    link: "/industries/banking-and-finance/products/almanac",
    logo: "/ProductsLogo/Almanac.webp",
    description:
      "Asset and liability management system with forecasting tools, liquidity tracking, risk analysis, regulatory reporting, and strategic financial planning insights.",
  },
  {
    id: 6,
    title: "Internet Banking Solutions",
    link: "/industries/banking-and-finance/products/internet-banking-system",
    logo: "/ProductsLogo/IBS.webp",
    description:
      "Comprehensive digital banking platform offering real-time account access, secure transactions, customer onboarding, and seamless integration with core banking systems.",
  },
  {
    id: 7,
    title: "Loan Origination System",
    link: "/industries/banking-and-finance/products/loan-origination-system",
    logo: "/ProductsLogo/LOS.webp",
    description:
      "End-to-end loan processing system with automated workflows, credit evaluation, document management, approval tracking, and faster disbursement processes.",
  },
  {
    id: 8,
    title: "Remitree",
    link: "/industries/banking-and-finance/products/remitree",
    logo: "/ProductsLogo/Remitree.webp",
    description:
      "Cross-border remittance platform enabling secure international transfers, compliance validation, real-time settlement, and seamless banking integrations.",
  },
  {
    id: 9,
    title: "PAGO",
    link: "/industries/banking-and-finance/products/pago",
    logo: "/ProductsLogo/pago.webp",
    description:
      "Payment and settlement system supporting multiple transaction modes with high security, real-time processing, scalability, and seamless integration.",
  },
  {
    id: 10,
    title: "Bankfair",
    link: "/industries/banking-and-finance/products/bankfair",
    logo: "/ProductsLogo/Bankfair.webp",
    description:
      "Core banking platform enabling account management, transactions, compliance, product configuration, and scalable banking operations with enhanced security.",
  },
];

export default function AllProducts() {
  // ✅ Sort products alphabetically
  const sortedProducts = [...products].sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto xl:px-0 bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-12">

      {/* HEADER */}
      <div className="mb-8">
        <H2 className="text-[#2B68C3] leading-tight">
          Banking and Finance Products
        </H2>
        <H2 className="text-[#141414] leading-tight">
          Built For Scale
        </H2>
      </div>

      {/* GRID */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-2 
        xl:grid-cols-3 
        gap-6 md:gap-8 lg:gap-10
      ">
        {sortedProducts.map((product) => (
          <a
            key={product.id}
            href={product.link}
            className="
              group relative rounded-xl bg-[#F2F2F2] border border-gray-200
              flex flex-col justify-between
              p-5 md:p-6
              min-h-[340px]
              transition-all duration-300
              hover:shadow-xl hover:-translate-y-2
              cursor-pointer
            "
          >

            {/* TOP */}
            <div>

              {/* LOGO + ARROW */}
              <div className="flex justify-between items-start mb-6">
                
                <img
                  src={product.logo}
                  alt={product.title}
                  className="h-10 md:h-12 object-contain max-w-[70%]"
                />

                <div className="
                  w-9 h-9 md:w-10 md:h-10
                  flex items-center justify-center
                  rounded-full bg-white shadow-md
                  group-hover:scale-110 transition
                ">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#2B68C3]" />
                </div>
              </div>

              {/* TITLE */}
              <H3 className="text-base md:text-lg font-semibold mb-2">
                {product.title}
              </H3>

              {/* DESCRIPTION (7 lines) */}
              <P className="text-sm text-gray-600 mb-6 line-clamp-7">
                {product.description}
              </P>
            </div>

            {/* CTA BUTTON */}
            <div
              className="
                flex items-center justify-center
                w-full h-[44px] md:h-[48px]
                rounded-[8px]
                font-quicksand font-bold text-sm md:text-base
                bg-[#141414] text-white
                transition-all duration-300
                border border-transparent
                hover:bg-white hover:text-[#141414]
                hover:border-[#010101]
                hover:border-b-[4px]
                hover:-translate-y-[2px]
                shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
              "
            >
              Get Started
            </div>

          </a>
        ))}
      </div>
    </section>
  );
}