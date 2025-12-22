import { H2, H4, P } from "../../../styles/Typography";
import { useLocation } from "react-router-dom";

export default function Cardcase() {
  const { pathname } = useLocation();

  // -------- PAGE CONFIG (BACKGROUND + IMAGE + CARDS) -------- //
  type PageConfig = {
    bg: string;
    image: string;
    cards: {
      id: number;
      title: string;
      desc: string;
    }[];
  };

  const pageConfig: Record<string, PageConfig> = {
    "/industries/ehr-and-pms/built-for": {
      bg: "#EEFDD9",
      image: "/BuiltFor/img4.jpg",
      cards: [
        {
          id: 1,
          title: "AI-Driven Patient Insights",
          desc: "Get real-time analytics and insights into patient health patterns, workflows, and optimization.",
        },
        {
          id: 2,
          title: "Clinical Workflow Automation",
          desc: "Automates repetitive clinical tasks, enabling faster operations across EHR & PMS systems.",
        },
        {
          id: 3,
          title: "Secure Data Interoperability",
          desc: "Ensures seamless integration with HIPAA-compliant systems and healthcare platforms.",
        },
      ],
    },

    "/industries/banking-and-finance/built-for": {
      bg: "#F2F2F2",
      image: "/BuiltFor/img1.jpg",
      cards: [
        {
          id: 1,
          title: "Fraud Detection Engine",
          desc: "AI-powered fraud monitoring system that detects anomalies in real-time across transactions.",
        },
        {
          id: 2,
          title: "Automated Risk Scoring",
          desc: "Intelligent scoring models that optimize credit risk profiling with precision.",
        },
        {
          id: 3,
          title: "Smart Financial Dashboards",
          desc: "Dynamic dashboards that visualize financial data, KPIs, and compliance insights.",
        },
      ],
    },

    "/industries/high-tech/built-for": {
      bg: "#EFEFEF",
      image: "/BuiltFor/img5.jpg",
      cards: [
        {
          id: 1,
          title: "Intelligent Automation",
          desc: "Enhance your tech workflows with end-to-end automation using advanced AI models.",
        },
        {
          id: 2,
          title: "Predictive System Monitoring",
          desc: "Monitor and predict system failures, performance drops, and optimization opportunities.",
        },
        {
          id: 3,
          title: "High-Performance Engineering Tools",
          desc: "Boost engineering pipelines with AI-enhanced developer tools and system accelerators.",
        },
      ],
    },

    "/industries/ai-optimization/built-for": {
      bg: "#E3FFF4",
      image: "/BuiltFor/img6.jpg",
      cards: [
        {
          id: 1,
          title: "Intelligent Automation",
          desc: "Enhance your tech workflows with end-to-end automation using advanced AI models.",
        },
        {
          id: 2,
          title: "Predictive System Monitoring",
          desc: "Monitor and predict system failures, performance drops, and optimization opportunities.",
        },
        {
          id: 3,
          title: "High-Performance Engineering Tools",
          desc: "Boost engineering pipelines with AI-enhanced developer tools and system accelerators.",
        },
      ],
    },
  };

  // -------- DEFAULT FALLBACK (BANKING & FINANCE) -------- //
  const config =
    pageConfig[pathname] || pageConfig["/industries/banking-and-finance/built-for"];


  return (
    <section
      className="relative w-full py-10 xl:py-20 overflow-hidden"
      style={{ backgroundColor: config.bg }}
    >
      {/* RIGHT-SIDE DIAGONAL IMAGE */}
      <div className="absolute top-[-5%] -right-10 h-full w-[17%] pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-right bg-no-repeat animate-rotateScale"
          style={{
            backgroundImage: `url('${config.image}')`,
            transform: "rotate(14deg) scale(1.5)",
            transformOrigin: "top right",
          }}
        ></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-8xl mx-10 md:px-10 md:pr-40">
        <H2 className="mb-10">UndeSed ut perspiciatis</H2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {config.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-md shadow-sm border border-gray-200 px-8 xl:p-8 flex flex-col min-h-[300px] transition-all duration-300 hover:bg-white hover:shadow-lg"
              
            >
              {/* Placeholder Circle */}
              <div className="w-16 h-16 bg-gray-300 rounded-full mt-10"></div>

              {/* Title */}
              <H4 className="mt-6">{card.title}</H4>

              {/* Description */}
              <P className="leading-relaxed mt-6">{card.desc}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
