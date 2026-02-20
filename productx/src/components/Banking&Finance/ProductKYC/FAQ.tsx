import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const { pathname } = useLocation();

  const showShape = pathname === "/industries/banking-and-finance";

  const faqIntroByIndustry: Record<
    string,
    { heading: string; description: string; cta: string }
  > = {
    "/industries/ehr-and-pms": {
      heading: "Your Queries Answered",
      description:
        "Find quick answers to common questions about how Unified Clinicapp works for your practice, its features, and implementation.",
      cta: "See More"
    },

    "/industries/cloud-finops-ai": {
      heading: "Frequently Asked Questions",
      description:
        "Find clear answers about how CloudDIET works, its security model, savings process, and AI-driven approach to cloud financial optimization.",
      cta: "Learn More"
    },

    "/industries/high-tech": {
      heading: "Frequently Asked Questions",
      description:
        "Learn how our platform supports innovation, scalability, and growth for high-tech organizations.",
      cta: "Learn More"
    },

    "/industries/banking-and-finance/products/kyc": {
      heading: "Frequently asked questions",
      description:
        "Answers to common questions about our Diligent KYC and CDD platform, implementation, compliance, and ongoing lifecycle management.",
      cta: "Check FAQs"
    },
    "/industries/banking-and-finance/products/conciliare": {
      heading: "Your Queries Answered",
      description:
        "Find answers to common questions about Conciliare's reconciliation platform, features, implementation, and how it transforms financial operations.",
      cta: "Learn More"
    },
  };


  const faqContentByIndustry: Record<string, FaqItem[]> = {
    "/industries/high-tech": [
      {
        question: "How does our platform support high-tech innovation?",
        answer:
          "Our solution accelerates product development cycles, enhances R&D collaboration, and enables data-driven innovation across high-tech organizations.",
      },
      {
        question: "Is the platform scalable for rapid growth?",
        answer:
          "Yes. It is built on cloud-native architecture designed to scale with evolving high-tech business demands.",
      },
    ],

    "/industries/cloud-finops-ai": [
      {
        question: "What exactly does CloudDIET do?",
        answer:
          "CloudDIET uses AI to profile, analyze, and optimize cloud resource configuration, utilization, and commercial terms to reduce waste and guarantee savings. ",
      },
      {
        question: "Does CloudDIET access my company's data?",
        answer:
          "No. CloudDIET only accesses billing metadata, usage metrics, and resource configuration, never your files, databases, or application data. .",
      },
      {
        question: " How is CloudDIET different from Azure Cost Management or AWS Cost Explorer?",
        answer:
          "CloudDIET provides engineering-led insights and AI-powered profiling that identifies misconfigurations and optimization opportunities beyond basic cost reporting. ",
      },
      {
        question: " What cloud platforms does CloudDIET support?",
        answer:
          "CloudDIET supports Azure, AWS, and Google Cloud, with optimizations tailored to each platform's services and pricing models. ",
      },
      {
        question: " What’s the typical timeline to see results?",
        answer:
          "Customers often achieve rapid ROI within the first month, with significant savings targeted within six weeks. ",
      },
      {
        question: "Can CloudDIET help with Reserved Instances and Savings Plans?",
        answer:
          "Yes. We analyze your usage and provide data-driven recommendations for optimal Reserved Instance and Savings Plan purchases",
      },
      {
        question: "What kind of customer is CloudDIET best suited for?",
        answer:
          "Enterprises with mature cloud environments, dedicated cloud/FinOps teams, and significant spend on Azure, AWS, or Google Cloud. ",
      },
    ],

    "/industries/banking-and-finance/products/conciliare": [
      {
        question: "What types of reconciliation does Conciliare support?",
        answer:
          "Conciliare supports bank account reconciliation, NOSTRO message reconciliation, SWIFT message matching, payment channel reconciliation, and inter-company transactions. It handles any two-source file matching across various formats and use cases.  ",
      },
      {
        question: " Can Conciliare handle high-volume transaction processing?",
        answer:
          "Yes, Conciliare handles peak volumes of up to 30 million transactions. The enterprise version features source table partitioning, metadata partitioning, data compression, and full parallelism based on available CPUs for optimal performance. ",
      },
      {
        question: " What file formats and data sources are supported?",
        answer:
          "Conciliare supports Excel, PDFs, CSV files, and proprietary reports. It includes generic built-in parsers for SWIFT, BAI2, MT940, and SAP formats. Custom parsers can be attached through the front end for specialized requirements.  ",
      },
      {
        question: " How does data enrichment improve reconciliation accuracy? ",
        answer:
          "Data enrichment extracts critical identifiers from free text fields and derives new values for matching. It supports transaction attribute enrichment and consolidated transaction linking, enabling one-to-many and many-to-many reconciliation scenarios. ",
      },
      {
        question: "  What manual override functions are available for exceptions?",
        answer:
          "Customers often achieve rapid ROI within the first month, with significant savings targeted within six weeks.Users can force match selected open items, undo matches, review provisional matches, approve partial matches, review exceptions, and categorize open items for investigation. All actions are logged in audit trails. ",
        },
      {
        question: "How does case management work for unmatched items?",
        answer:
          "The central case repository assigns unmatched items to investigators with built-in roles and workflow. Users update status, perform root cause analysis, and track resolution progress. Cases can be escalated to the concerned authorities automatically. ",
      },
      {
        question: "What security and compliance features are included?",
        answer:
          "Conciliare includes maker-checker controls, audit logging of all user actions, password security with minimum length restrictions, account lockout after failed attempts, and domain server integration for user authentication.  ",
      },
    ],


    "/industries/ehr-and-pms": [
      {
        question: "What is Unified Clinicapp??",
        answer:
          "Unified Clinicapp is an all-in-one software that combines Electronic Health Records (EHR) and Practice Management for scheduling, billing, and patient engagement in a single platform. ",
      },
      {
        question: "How does it improve clinical workflow?",
        answer:
          "It offers smart templates, integrated patient history, and e-prescribing to reduce charting time and help doctors make faster, more informed decisions during patient visits. ",
      },
      {
        question: " Can patients schedule their own appointments?",
        answer:
          "Yes. Patients can book, reschedule, or cancel appointments 24/7 through the patient portal or mobile app, which syncs directly with your practice calendar. ",
      },
      {
        question: "Is the platform HIPAA compliant?",
        answer:
          "Absolutely. It includes role-based access, audit trails, and secure data handling to meet all HIPAA requirements for patient privacy and security. ",
      },
      {
        question: "Do you offer a patient portal?",
        answer:
          "Yes. Patients get a secure portal to view health records, lab results, pay bills, complete forms, and message your practice. ",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Implementation time varies by practice size, but our team provides dedicated support for data migration, training, and go-live to ensure a smooth transition. ",
      },
      {
        question: "Can we use it on mobile devices?",
        answer:
          "Yes. The platform is fully accessible on iOS and Android for both providers and patients, with a streamlined mobile-friendly interface.  ",
      },
    ],

    "/industries/banking-and-finance/products/kyc": [
      {
        question: "What is the difference between CDD and EDD?",
        answer:
          "CDD is standard due diligence for most customers to verify identity and assess risk. EDD is deeper investigation for high-risk customers like PEPs requiring additional documentation and approvals.  ",
      },
      {
        question: "How does Diligent help with regulatory compliance?",
        answer:
          "The platform configures policies to meet local regulations, automates name screening against watchlists, maintains version-controlled audit trails, and ensures consistent execution across all customer segments.  ",
      },
       {
        question: " What customer segments does Diligent support?",
        answer:
          "Diligent supports both individual and corporate customers including private limited companies, partnerships, trusts, and complex ownership structures with beneficial ownership identification.    ",
      },
       {
        question: "What integrations are available with Diligent?",
        answer:
          "Diligent integrates via APIs with data sources, name screening engines, core banking systems, CRMs, data warehouses, and frontend applications for seamless data flow.    ",
      },
       
       {
        question: " How does the platform handle beneficial ownership identification?",
        answer:
          "The system automatically unwraps complex ownership structures based on configured thresholds, identifies connected parties and UBOs, and screens them against sanctions and watchlists.    ",
      },
       {
        question: "How long does implementation typically take??",
        answer:
          "Implementation typically takes three to five months, depending on customer segments, regulatory requirements, and integration complexity with existing systems.  ",
      },
    ],
  };

  

   

  const introContent =
    faqIntroByIndustry[pathname] ||
    faqIntroByIndustry["/industries/banking-and-finance"];

  const faqData =
    faqContentByIndustry[pathname] ||
    faqContentByIndustry["/industries/banking-and-finance"];

  const isEHR = pathname.startsWith("/industries/ehr-and-pms");
  const isAI = pathname.startsWith("/industries/cloud-finops-ai");
const headingFontClass = isEHR ? "font-bricolageEHR" : "font-bricolage";
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isEHR) setDrawerOpen(true);
    if (isAI) setModalOpen(true);
  };

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section className="relative w-full py-6 px-10 xl:px-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto  md:px-10 xl:px-0 flex flex-col lg:flex-row gap-12 relative z-10">

          <div className="lg:w-1/2 relative z-20">
            <div className="mb-4 text-sm text-gray-700 flex items-center">
              <span className="w-8 h-1 rounded-full bg-gray-400 mr-2"></span>
              <h3 className={`${headingFontClass} text-[20px] md:text-[24px] lg:text-[32px]`}> FAQ</h3>
            </div>
            <h2
  className={`mb-4 ${headingFontClass}   text-[24px] md:text-[32px] lg:text-[48px] ${
    isEHR ? "text-[#008280]" : "text-black"
  }`}
>
  {introContent.heading}
</h2>


            <P className="mb-6 max-w-lg">
              {introContent.description}
            </P>


            <ContactUs onClick={handleContactClick}>{introContent.cta}</ContactUs>
          </div>

          <div className="lg:w-1/2 relative z-20">
            {faqData.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="text-black font-quicksand font-bold">{item.question}</span>
                    <span className={`text-2xl text-gray-500 font-quicksand  transition-all ${isOpen ? "rotate-180 text-blue-600" : ""}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} text-gray-600`}>
                    <div className="pb-4 pr-4">{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {showShape && (
          <div className="absolute bottom-[-250px] left-[150px] -translate-x-1/2 w-[900px] h-[20px] rotate-[-170deg] pointer-events-none opacity-100 z-0">
            <img src="/ProductDetails4/faq_img1.png" alt="FAQ Decorative Shape" className="w-full h-auto object-contain" />
          </div>
        )}
      </section>

      {isEHR && drawerOpen && <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />}
      {isAI && modalOpen && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
};


export default FaqSection;
