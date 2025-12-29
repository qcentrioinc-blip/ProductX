import React, { useState, useRef } from "react";
import { H4, P } from '../../../styles/Typography'

// Define the structure of a card item
type CardItem = {
  id: string;
  logo: string;
  title: string;
  tags?: string[];
  description: string;
  category: string; 
};

const sampleData: CardItem[] = [
  // --- Banking and Finance (8 Cards) ---
  {
    id: "1",
    logo: "/MarketPlace/img3.png",
    title: "AI-Powered Fraud Detection Engine",
    tags: ["AML", "AI", "Security"],
    description:
      "Real-time transaction monitoring using machine learning to flag suspicious activity and reduce false positives across all banking channels.",
    category: "Banking and Finance",
  },
  {
    id: "2",
    logo: "/MarketPlace/img4.png",
    title: "Core Banking Modernization Suite",
    tags: ["Core", "Cloud", "Integration"],
    description:
      "A comprehensive toolkit for migrating legacy core systems to a scalable, cloud-native architecture, ensuring zero downtime during transition.",
    category: "Banking and Finance",
  },
  {
    id: "3",
    logo: "/MarketPlace/img5.png",
    title: "Digital Account Opening Platform",
    tags: ["KYC", "Onboarding", "Digital"],
    description:
      "End-to-end customer onboarding via mobile and web, featuring integrated KYC compliance, biometric verification, and instant account activation.",
    category: "Banking and Finance",
  },
  {
    id: "4",
    logo: "/MarketPlace/img6.png",
    title: "Commercial Loan Origination System",
    tags: ["Lending", "Automation"],
    description:
      "Streamlines the underwriting, document management, and approval process for complex commercial lending applications, cutting cycle time by 40%.",
    category: "Banking and Finance",
  },
  {
    id: "5",
    logo: "/MarketPlace/img7.png",
    title: "Regulatory Compliance Tracker (RegTech)",
    tags: ["Compliance", "RegTech", "Reporting"],
    description:
      "Automated tracking and reporting solution for global financial regulations (e.g., Basel, GDPR, MiFID II), reducing manual audit burden.",
    category: "Banking and Finance",
  },
  {
    id: "6",
    logo: "/MarketPlace/img8.png",
    title: "Personalized Wealth Management App",
    tags: ["Wealth", "FinTech", "Mobile"],
    description:
      "Provides tailored investment advice, portfolio simulation tools, and automated rebalancing for retail and high-net-worth clients.",
    category: "Banking and Finance",
  },
  {
    id: "7",
    logo: "/MarketPlace/img3.png",
    title: "Payment Gateway Integrator",
    tags: ["Payments", "API", "Settlement"],
    description:
      "A robust API service for connecting domestic and international payment networks, enabling fast and secure fund transfers and settlements.",
    category: "Banking and Finance",
  },
  {
    id: "8",
    logo: "/MarketPlace/img4.png",
    title: "Anti-Money Laundering (AML) Toolkit",
    tags: ["AML", "Compliance"],
    description:
      "Manages customer due diligence (CDD) and risk profiling effectively, applying a risk-based approach to potential criminal economic activities.",
    category: "Banking and Finance",
  },
  // --- EHR and PMS (8 Cards) ---
  {
    id: "9",
    logo: "/MarketPlace/img5.png",
    title: "Telehealth Integration Module",
    tags: ["Telehealth", "Virtual Care"],
    description:
      "Adds secure, high-definition video conferencing and remote patient monitoring features directly into existing electronic health record systems.",
    category: "EHR and PMS",
  },
  {
    id: "10",
    logo: "/MarketPlace/img6.png",
    title: "Electronic Health Record (EHR) v2.0",
    tags: ["EHR", "Interoperability"],
    description:
      "Next-generation patient record system with advanced interoperability standards and AI-driven diagnostic support for providers.",
    category: "EHR and PMS",
  },
  {
    id: "11",
    logo: "/MarketPlace/img7.png",
    title: "Integrated Practice Management Suite",
    tags: ["PMS", "Billing", "Scheduling"],
    description:
      "A unified suite handling scheduling, resource allocation, medical billing, claims submission, and financial reporting for clinics.",
    category: "EHR and PMS",
  },
  {
    id: "12",
    logo: "/MarketPlace/img8.png",
    title: "Patient Portal and Engagement Hub",
    tags: ["Patient", "Engagement", "Mobile"],
    description:
      "A secure patient web portal enabling self-service appointment booking, lab result viewing, and direct provider communication.",
    category: "EHR and PMS",
  },
  {
    id: "13",
    logo: "/MarketPlace/img5.png",
    title: "Clinical Decision Support System",
    tags: ["CDS", "AI", "Clinical"],
    description:
      "Provides real-time, evidence-based treatment recommendations and alerts to clinicians at the point of care to improve outcomes.",
    category: "EHR and PMS",
  },
  {
    id: "14",
    logo: "/MarketPlace/img6.png",
    title: "Medical Billing and Coding Optimizer",
    tags: ["Billing", "Revenue Cycle"],
    description:
      "Automatically verifies insurance eligibility and uses smart logic to optimize CPT/ICD coding, ensuring maximum and timely reimbursement.",
    category: "EHR and PMS",
  },
  {
    id: "15",
    logo: "/MarketPlace/img7.png",
    title: "Pharmacy Management Module",
    tags: ["Pharmacy", "E-Prescribe"],
    description:
      "Integrates prescription ordering, drug inventory tracking, and electronic prior authorization workflows for in-house pharmacies.",
    category: "EHR and PMS",
  },
  {
    id: "16",
    logo: "/MarketPlace/img8.png",
    title: "Hospital Bed Management System",
    tags: ["Hospital", "Operations"],
    description:
      "Dynamic visualization and assignment of beds based on patient needs, discharge status, and department capacity to improve flow.",
    category: "EHR and PMS",
  },
  // --- High Tech (8 Cards) ---
  {
    id: "17",
    logo: "/MarketPlace/img3.png",
    title: "Multi-Cloud Deployment Orchestrator",
    tags: ["Cloud", "DevOps", "Kubernetes"],
    description:
      "A management layer for deploying, scaling, and monitoring containerized applications seamlessly across AWS, GCP, and Azure environments.",
    category: "High Tech",
  },
  {
    id: "18",
    logo: "/MarketPlace/img4.png",
    title: "Edge Computing Data Processor",
    tags: ["Edge", "IoT", "Processing"],
    description:
      "Software solution designed for real-time data analysis and inference on local IoT and edge devices before data is transmitted to the cloud.",
    category: "High Tech",
  },
  {
    id: "19",
    logo: "/MarketPlace/img5.png",
    title: "Enterprise Cybersecurity Dashboard",
    tags: ["Security", "Threats", "Compliance"],
    description:
      "Unified view of threats, vulnerabilities, and security posture across all organizational endpoints and networks with automated alerting.",
    category: "High Tech",
  },
  // --- AI Optimization (8 Cards) ---
  {
    id: "25",
    logo: "/MarketPlace/cloud1.png",
    title: "Cloud Cost Optimization Engine",
    tags: ["FinOps", "Savings", "Cloud"],
    description:
      "Identifies unused resources, rightsizes workloads, and auto-applies savings plans to reduce cloud spend by up to 40%.",
    category: "AI Optimaization",
  },
  {
    id: "26",
    logo: "/MarketPlace/cloud2.png",
    title: "Idle Resource Auto-Cleaner",
    tags: ["Automation", "Cleanup"],
    description:
      "Automatically shuts down orphaned VMs, disks, snapshots, and IPs across AWS, Azure, and GCP.",
    category: "AI Optimaization",
  },
];

export const App: React.FC = () => {
  const categories = ["Banking and Finance", "EHR and PMS", "High Tech", "AI Optimaization"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);

  const filteredData = sampleData.filter(
    (item) => item.category === selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    if (category !== selectedCategory) {
      setIsAnimating(true);
      setSelectedCategory(category);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section ref={sectionRef} className="w-full pb-10 ">
      {/* Category Pills */}
      <div className="sticky top-[0px] z-30 bg-white py-3 mb-5 shadow-sm backdrop-blur-sm">
        <div className="flex justify-start sm:justify-center flex-nowrap sm:flex-wrap gap-x-4 sm:gap-x-8 lg:gap-x-[45px] overflow-x-auto sm:overflow-x-visible px-4 sm:px-0 scroll-smooth ">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => handleCategoryClick(c)}
              className={`
                flex-shrink-0 
                px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg lg:px-[24px] lg:py-[16px] lg:text-[24px]
                rounded-full border border-gray-200 whitespace-nowrap font-medium transition-colors
                ${
                  c === selectedCategory
                    ? "bg-[#5d8ef0] text-white shadow-xl border-[#8495ae]"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }
                ${isAnimating ? 'pointer-events-none opacity-80' : ''}
              `}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div
        className={`
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
          [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1400px)]:grid-cols-3
          gap-x-[32px] gap-y-[64px] px-6 sm:px-10 lg:px-[80px] justify-items-center
          transition-opacity duration-500
          ${isAnimating ? 'opacity-70' : 'opacity-100'}
        `}
      >
        {filteredData.map((item) => (
          <article
            key={item.id + item.category}
            className={`
              relative bg-[#F2F2F2] border border-gray-100 rounded-lg p-6 shadow-sm flex flex-col
              w-[90vw] sm:w-[320px] sm:h-[380px] md:w-[360px] md:h-[420px] lg:w-[405px] lg:h-[480px]
              overflow-hidden
            `}
          >
            <div className="flex items-start justify-between mb-4 relative z-10">
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="h-[70px] w-[200px] md:h-[90px] md:w-[260px] mb-5 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/200x70/DFDFDF/000000?text=Placeholder+Logo";
                }}
              />
              <button
                className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center bg-[#DFDFDF] flex-shrink-0"
                aria-label="Open"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <H4 className="text-sm md:text-base font-medium text-gray-800 mb-2 relative z-10">
              {item.title}
            </H4>

            <div className="flex gap-2 items-center flex-wrap mb-3 relative z-10">
              {item.tags?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>

            <P className="text-sm text-gray-600 flex-1 leading-relaxed line-clamp-5 relative z-10">
              {item.description}
            </P>

            <div className="mt-5 relative z-10">
              <a
                href="#"
                className="
                  inline-flex items-center gap-2 px-[24PX] py-[12PX] font-quicksand font-bold 
                  rounded-md text-sm bg-black text-white
                "
              >
                START FOR FREE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7M21 12H3" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default App;