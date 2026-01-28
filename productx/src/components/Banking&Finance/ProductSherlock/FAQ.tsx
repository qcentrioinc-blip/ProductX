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

const showShape =
  location.pathname === "/industries/banking-and-finance";


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
      question: "Is the platform compliant with healthcare regulations?",
      answer:
        "Yes. We adhere to HIPAA and industry security standards to ensure patient data safety and compliance.",
    },
    {
      question: "Can it integrate with existing EHR systems?",
      answer:
        "Our platform supports interoperability with leading EHR and PMS solutions through secure APIs.",
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

const FaqSection: React.FC = () => {
  const { pathname } = useLocation();
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
      <section className="relative w-full py-16 bg-white overflow-hidden">
        <div className="max-w-8xl xl:px-10 mx-10 flex flex-col lg:flex-row gap-12 relative z-10">

          <div className="lg:w-1/2 relative z-20">
            <div className="mb-4 text-sm text-gray-700 flex items-center">
              <span className="w-8 h-1 rounded-full bg-gray-400 mr-2"></span>
              <H3> FAQ</H3>
            </div>
            <H2 className="mb-4  "> Frequently Asked Questions</H2>
            <P className=" mb-6 max-w-lg">
              Find clear answers about how CloudDIET works, its security model, savings process, and AI-driven approach to cloud financial optimization.
            </P>

            <ContactUs onClick={handleContactClick}>Contact Us</ContactUs>
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
                    <span className="text-gray-900 font-medium">{item.question}</span>
                    <span className={`text-2xl text-gray-500 transition-all ${isOpen ? "rotate-180 text-blue-600" : ""}`}>
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

      {isEHR && <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />}
      {isAI && <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default FaqSection;
