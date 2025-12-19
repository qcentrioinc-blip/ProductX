import React, { useState, useRef, useEffect } from "react";
import {H4, P} from '../../../styles/Typography'

// Mock Typography Components for self-containment
// const H4 = ({ children, className = "" }) => <h4 className={`text-xl font-bold ${className}`}>{children}</h4>;
// const P = ({ children, className = "" }) => <p className={`text-base text-gray-700 ${className}`}>{children}</p>;


// Define the structure of a card item
type CardItem = {
  id: string;
  logo: string;
  title: string;
  tags?: string[];
  description: string;
  category: string; 
};

// Expanded sampleData to contain 8 unique cards for each of the 3 categories (24 total).
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
  {
    id: "20",
    logo: "/MarketPlace/img6.png",
    title: "DevOps CI/CD Pipeline Automation",
    tags: ["CI/CD", "Automation"],
    description:
      "Accelerates software delivery with automated testing, integration, and continuous deployment workflows, leveraging industry best practices.",
    category: "High Tech",
  },
  {
    id: "21",
    logo: "/MarketPlace/img7.png",
    title: "Predictive Maintenance AI",
    tags: ["AI", "Industrial", "IoT"],
    description:
      "Uses sensor data and machine learning to forecast equipment failure with high accuracy, minimizing costly downtime in industrial settings.",
    category: "High Tech",
  },
  {
    id: "22",
    logo: "/MarketPlace/img8.png",
    title: "Quantum Computing Simulation SDK",
    tags: ["Quantum", "Research"],
    description:
      "A software development kit for learning and experimenting with quantum algorithms on classical hardware simulators for research purposes.",
    category: "High Tech",
  },
  {
    id: "23",
    logo: "/MarketPlace/img3.png",
    title: "API Gateway and Microservices Manager",
    tags: ["API", "Microservices"],
    description:
      "Centralized platform for rate limiting, security, routing, and monitoring of all internal and external microservices-based APIs.",
    category: "High Tech",
  },
  {
    id: "24",
    logo: "/MarketPlace/img4.png",
    title: "Data Lake Analytics Platform",
    tags: ["Data", "Analytics", "BI"],
    description:
      "Enables massive-scale ETL, data warehousing, and business intelligence reporting on both structured and unstructured data sets.",
    category: "High Tech",
  },
];

// Renaming ProductCards to App for the single-file React component convention
export const App: React.FC = () => {
  const categories = ["Banking and Finance", "EHR and PMS", "High Tech"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  
  // 1. Create a reference to the main section element
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map()); // Changed to HTMLElement

  const filteredData = sampleData.filter(
    (item) => item.category === selectedCategory
  );

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-card-id');
            if (id) {
              setVisibleCards(prev => new Set(prev).add(id));
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredData]);

  const handleCategoryClick = (category: string) => {
    // Check if the category is changing
    if (category !== selectedCategory) {
      setIsAnimating(true);
      setVisibleCards(new Set()); // Reset visible cards for new category
      
      // 2. Update the state to change the filtered view
      setSelectedCategory(category);
      
      // 3. Scroll the main section into view (to the top of the section)
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Reset animation state after transition
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const setCardRef = (element: HTMLElement | null, id: string) => { // Changed to HTMLElement
    if (element) {
      cardRefs.current.set(id, element);
    } else {
      cardRefs.current.delete(id);
    }
  };

  return (
    // 4. Attach the ref to the main section element
    <section ref={sectionRef} className="w-full py-10 ">
      {/* Category Pills - Sticky below navbar with mobile carousel */}
      <div
        className="
          sticky top-[0px] z-30 bg-white py-3 mb-5 
          shadow-xl
          backdrop-blur-sm 
        "
      >
        <div
          className="
            flex justify-start sm:justify-center flex-nowrap sm:flex-wrap 
            gap-x-4 sm:gap-x-8 lg:gap-x-[45px]
            overflow-x-auto sm:overflow-x-visible 
            scrollbar-none
            px-4 sm:px-0
            scroll-smooth scrollbar-hide
          "
        >
          {categories.map((c) => (
            <button
              key={c}
              // 5. Update onClick handler to use the new scrolling function
              onClick={() => handleCategoryClick(c)}
              className={`
                flex-shrink-0 
                px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg lg:px-[24px] lg:py-[16px] lg:text-[24px]
                rounded-full border border-gray-200 transition-all duration-500 ease-out whitespace-nowrap font-medium
                transform hover:scale-105 active:scale-95
                ${
                  c === selectedCategory
                    ? "bg-[#5d8ef0] text-white shadow-xl border-[#8495ae] scale-[1.03] shadow-blue-200/50"
                    : "bg-white text-gray-700 hover:shadow-lg hover:border-gray-400 hover:bg-gray-50"
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
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          [@media(min-width:1024px)]:grid-cols-2
          [@media(min-width:1400px)]:grid-cols-3
          gap-x-[32px]
          gap-y-[64px]
          px-6 sm:px-10 lg:px-[80px]
          justify-items-center
          transition-all duration-500
          ${isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}
        `}
      >
        {filteredData.map((item, index) => (
          <article
            key={item.id + item.category}
            ref={(el) => setCardRef(el, item.id)} // This will now work with HTMLElement
            data-card-id={item.id}
            className={`
              relative
              bg-[#F2F2F2]
              border border-gray-100
              rounded-lg
              p-6
              shadow-sm
              flex
              flex-col
              w-[90vw]
              sm:w-[320px]
              sm:h-[380px]
              md:w-[360px]
              md:h-[420px]
              lg:w-[405px]
              lg:h-[480px]
              hover:shadow-xl transition-all duration-500 ease-out
              transform
              ${visibleCards.has(item.id) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
              }
              hover:scale-105 hover:-translate-y-2
              group
              overflow-hidden
            `}
            style={{
              transitionDelay: visibleCards.has(item.id) ? `${index * 100}ms` : '0ms'
            }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="flex items-start justify-between mb-4 relative z-10">
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="h-[70px] w-[200px] md:h-[90px] md:w-[260px] mb-5 object-contain transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/200x70/DFDFDF/000000?text=Placeholder+Logo";
                }}
              />
              <button
                className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center bg-[#DFDFDF] flex-shrink-0 hover:bg-gray-300 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-blue-100 group-hover:border-blue-300"
                aria-label="Open"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black group-hover:text-blue-600 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <H4 className="text-sm md:text-base font-medium text-gray-800 mb-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
              {item.title}
            </H4>

            <div className="flex gap-2 items-center flex-wrap mb-3 relative z-10">
              {item.tags?.map((t, tagIndex) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 whitespace-nowrap transform group-hover:scale-105 transition-all duration-300 hover:bg-white hover:shadow-sm"
                  style={{
                    transitionDelay: visibleCards.has(item.id) ? `${tagIndex * 50 + 300}ms` : '0ms'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <P className="text-sm text-gray-600 flex-1 leading-relaxed line-clamp-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
              {item.description}
            </P>

            <div className="mt-5 relative z-10">
              <a
                href="#"
                className="
                  inline-flex items-center gap-2 px-[24PX] py-[12PX] font-quicksand font-bold 
                  rounded-md text-sm bg-black text-white hover:opacity-95
                  transform transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-lg
                  active:scale-95
                  group/button
                  relative
                  overflow-hidden
                "
              >
                {/* Button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />
                
                START FOR FREE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 transform group-hover/button:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7M21 12H3"
                  />
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