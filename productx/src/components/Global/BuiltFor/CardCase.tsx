import { H2, H4, P } from "../../../styles/Typography";
import { useParams } from "react-router-dom";

const CARD_CONFIG: Record<
  string,
  Record<
    string,
    {
      bg: string;
      headingColor?: string;
      heading: string;
      cards: {
        id: number;
        title: string;
        desc: string;
        image: string;
      }[];
    }
  >
> = {
  "cloud-finops-ai": {
    enterprises: {
      bg: "#FAFAFA",
      headingColor: "#254D70",
      heading: " Azure Spend Issues",
      cards: [
        { id: 1, title: "Hidden Waste", desc: "Oversized VMs, storage, and PaaS services cost money across subscriptions you manage", image: "/BuiltFor/Recycle.svg" },
        { id: 2, title: "Inefficient Planning", desc: "Wrong SKUs, licenses, and purchase options increase bills you cannot easily see. ", image: "/BuiltFor/Danger.svg" },
        { id: 3, title: "No Visibility", desc: "Multi-environment costs hide in configs and usage patterns. ", image: "/BuiltFor/eye.svg" },
      ],
    },

    "saas-application-providers": {
      bg: "#FAFAFA",
      headingColor: "#254D70",
      heading: "SaaS Cost Problems",
      cards: [
        { id: 1, title: "Scale Waste", desc: "App Services and Functions run fixed without auto-scaling in SaaS apps. ", image: "/BuiltFor/BalanceScale.svg" },
        { id: 2, title: "Unused Accounts", desc: "Integration accounts and registries sit idle after CI/CD deployments. ", image: "/BuiltFor/BlockUser.svg" },
        { id: 3, title: "Event Overload", desc: "Event Hubs and messaging provisioned beyond real SaaS traffic needs. ", image: "/BuiltFor/Calender.svg" },
      ],
    },

    "regulated-large-enterprise": {
      bg: "#FAFAFA",
      headingColor: "#254D70",
      heading: "Industry Struggles Today",
      cards: [
        { id: 1, title: " Cost Visibility", desc: "Fragmented views hide waste across regions, services, and business units. ", image: "/BuiltFor/OpenEye.svg" },
        { id: 2, title: "Risk Constraints", desc: " Tight uptime, security, and compliance rules block aggressive optimization moves.  ", image: "/BuiltFor/Danger2.svg" },
        { id: 3, title: " Tool Overload", desc: " Too many dashboards, that show costs but no safe way to reduce spend.", image: "/BuiltFor/performanc.svg" },
      ],
    },
  },

  "banking-and-finance": {
    banks: {
      bg: "#F2F2F2",

      heading: "Technology Challenges in Banking",
      cards: [
        { id: 1, title: "Legacy Infrastructure", desc: "Aging systems slow innovation.", image: "/BuiltFor/Recycle.png" },
        { id: 2, title: "Regulatory Complexity", desc: "Compliance increases operational cost.", image: "/BuiltFor/Recycle.png" },
        { id: 3, title: "Fraud Risk", desc: "Real-time detection requires advanced systems.", image: "/BuiltFor/Recycle.png" },
      ],
    },

    nbfc: {
      bg: "#F2F2F2",

      heading: "NBFC Operational Challenges",
      cards: [
        { id: 1, title: "Rapid Scaling Needs", desc: "Growth without cost overruns is critical.", image: "/BuiltFor/Recycle.png" },
        { id: 2, title: "Risk Management", desc: "Credit risk requires precision.", image: "/BuiltFor/Recycle.png" },
        { id: 3, title: "Data Visibility", desc: "Fragmented data reduces insight.", image: "/BuiltFor/Recycle.png" },
      ],
    },

    "credit-union": {
      bg: "#F2F2F2",
      heading: "Credit Union Technology Gaps",
      cards: [
        { id: 1, title: "Limited IT Budgets", desc: "Cost efficiency is essential.", image: "/BuiltFor/Recycle.png" },
        { id: 2, title: "Member Experience", desc: "Digital expectations are rising.", image: "/BuiltFor/Recycle.png" },
        { id: 3, title: "Security Concerns", desc: "Protecting member data is critical.", image: "/BuiltFor/Recycle.png" },
      ],
    },
  },

  "ehr-and-pms": {
    "long-term-care": {
      bg: "#ffffff",
      headingColor: "#008280",
      heading: "Critical Pain Points",
      cards: [
        { id: 1, title: "Fragmented Care Coordination", desc: "Disconnected teams lead to inconsistent care plans and communication gaps for residents.", image: "/BuiltFor/hand-holding-medical.webp" },
        { id: 2, title: "Regulatory Compliance Burden", desc: "Manual tracking and reporting for MDS and audits increase errors and staff workload.", image: "/BuiltFor/briefcase.png" },
        { id: 3, title: "Complex Billing Management", desc: "Navigating Medicare, Medicaid, and private insurance billing is time-consuming and prone to delays.", image: "/BuiltFor/receipt.png" },
      ],
    },
    "home-healthcare": {
      bg: "#ffffff",
      headingColor: "#008280",
      heading: "Critical Operational Hurdles",
      cards: [
        { id: 1, title: "Inefficient Visit Coordination", desc: "Manual scheduling and route planning for field clinicians wastes time and resources.", image: "/BuiltFor/visit.png" },
        { id: 2, title: "Delayed Visit Documentation", desc: "Paper charts or post-visit data entry create backlogs and billing delays.", image: "/BuiltFor/snail.png" },
        { id: 3, title: "Complex Compliance Reporting", desc: "Manually tracking care plans and outcomes for regulatory audits is error-prone.", image: "/BuiltFor/file-medical.png" },
      ],
    },
    "clinics-and-hospitals": {
      bg: "#ffffff",
      headingColor: "#008280",
      heading: "Critical Operational Hurdles",
      cards: [
        { id: 1, title: "Fragmented Patient Data", desc: "Disconnected systems create information silos, hindering coordinated inpatient and outpatient care.", image: "/BuiltFor/portfolio.png" },
        { id: 2, title: "Inefficient Care Coordination", desc: "Manual handoffs between departments lead to delays, errors, and communication gaps.", image: "/BuiltFor/hand-holding-medical.webp" },
        { id: 3, title: "Complex Revenue Cycles", desc: "Managing high-volume, multi-department billing and claims increases denials and delays payment.", image: "/BuiltFor/money-transfer.png" },
      ],
    },
  },

  "high-tech": {
    startups: {
      bg: "#EFEFEF",

      heading: "Startup Engineering Challenges",
      cards: [
        { id: 1, title: "Speed vs Stability", desc: "Fast shipping introduces technical debt.", image: "/BuiltFor/Recycle.png" },
        { id: 2, title: "Cost Visibility", desc: "Cloud spend grows unnoticed.", image: "/BuiltFor/Recycle.png" },
        { id: 3, title: "Scaling Infrastructure", desc: "Systems break under growth.", image: "/BuiltFor/Recycle.png" },
      ],
    },

    enterprises: {
      bg: "#EFEFEF",

      heading: "Enterprise High-Tech Challenges",
      cards: [
        { id: 1, title: "Complex Architectures", desc: "Large systems are difficult to manage.", image: "/BuiltFor/Recycle.png" },
        { id: 2, title: "Security at Scale", desc: "Risk increases with complexity.", image: "/BuiltFor/Recycle.png" },
        { id: 3, title: "Operational Efficiency", desc: "Optimization lags innovation.", image: "/BuiltFor/Recycle.png" },
      ],
    },
  },
};

export default function Cardcase() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const config =
    CARD_CONFIG[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!config) return null;


  return (
    <section
      className="relative w-full py-4 overflow-hidden"
      style={{ backgroundColor: config.bg }}
    >
      {/* RIGHT-SIDE DIAGONAL IMAGE */}
      <div className=" hidden lg:block absolute top-[-5%] -right-10 h-full w-[17%] pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-right bg-no-repeat animate-rotateScale"
        // style={{
        //   backgroundImage: `url('${config.image}')`,
        //   transform: "rotate(14deg) scale(1.5)",
        //   transformOrigin: "top right",
        // }}
        ></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-8xl mx-10 md:px-10">
        <H2 className="mb-10 font-weight-400" style={{ color: config.headingColor || "#254D70" }}>{config.heading}</H2>

        {/* CARDS GRID */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-start">
          {config.cards.map((card) => (
            <div
              key={card.id}
              style={{
                width: "100%",
                maxWidth: "348px",
                height: "396px",
                borderRadius: "8px",
                padding: "32px 20px"
              }}
              className="bg-white shadow-sm border border-gray-200 flex flex-col transition-all duration-300 hover:bg-white hover:shadow-lg mx-auto xl:mx-0"
            >
              {/* Placeholder Circle */}
              <div className="w-20 h-20">
                <img src={card.image} alt={card.title} className="w-full h-full object-contain p-4" />
              </div>

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