import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { H2, H3, P } from "../../../styles/Typography";
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

    "/industries/banking-and-finance": {
      heading: "Your Queries Answered",
      description:
        "Explore common questions around security, compliance, and operational efficiency in financial services.",
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

    "/industries/banking-and-finance": [
      {
        question: "How does the platform enhance financial security?",
        answer:
          "We provide enterprise-grade security, fraud detection, and compliance monitoring tailored for financial institutions.",
      },
      {
        question: "Does it support regulatory compliance?",
        answer:
          "Yes. Our solution is designed to meet global banking and financial regulatory requirements.",
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
      <section className="relative w-full py-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-10 flex flex-col lg:flex-row gap-12 relative z-10">

          <div className="lg:w-1/2 relative z-20">
            <div className="mb-4 text-sm text-gray-700 flex items-center">
              <span className="w-8 h-1 rounded-full bg-gray-400 mr-2"></span>
              <H3> FAQ</H3>
            </div>
            <H2
              className={`mb-4 ${isEHR ? "text-[#008280]" : "text-black"
                }`}
            >
              {introContent.heading}
            </H2>


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
                    <span className="text-gray-900  font-quicksand font-bold">{item.question}</span>
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
