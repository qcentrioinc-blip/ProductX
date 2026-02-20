import { H2, H3, P } from "../../../styles/Typography";
import { useParams } from "react-router-dom";
import type { ReactNode } from "react";
/* ================= TYPES ================= */

type SplitContent = {
  headingPrimary: string | ReactNode;
  imageSrc: string;
  paragraph: string;
  bulletPoints: string[];
  stats: {
    value: string | ReactNode;
    label: string;
  }[];
  bulletIcons?: string[];
};

type Theme = {
  sectionBg: string;
  headingPrimaryColor: string;
  headingSecondaryColor: string;
  paragraphColor: string;
  bulletColor: string;
  statsColor: string;
  imageSrc: string;
  bulletIcons: string[];
};

/* ================= THEMES (BY INDUSTRY) ================= */

const THEMES: Record<string, Theme> = {
  "banking-and-finance": {
    sectionBg: "white",
    imageSrc: "/BuiltFor/img2.png",
    headingPrimaryColor: "#2B68C3",
    headingSecondaryColor: "#2A2A2A",
    paragraphColor: "#141414",
    bulletColor: "#fafafa",
    statsColor: "#2A2A2A",
    bulletIcons: [
      "/BuiltForBnf/dollar.svg",
      "/BuiltForBnf/time-fast.svg",
      "/BuiltForBnf/uparrow.svg",
      "/BuiltForBnf/risk.svg",
    ],

  },

  "ehr-and-pms": {
    sectionBg: "",
    imageSrc: "/BuiltFor/ModernCare-Image.webp",
    headingPrimaryColor: "#008280",
    headingSecondaryColor: "#F5F5F5",
    paragraphColor: "#141414",
    bulletColor: "#efefef",
    statsColor: "#008280",
    bulletIcons: [
      "/BuiltFor/user.png",
      "/BuiltFor/arrow-down.png",
      "/BuiltFor/arrow-up.png",
      "/BuiltFor/rotate-square.png",
    ],
  },

  "high-tech": {
    sectionBg: "#230053",
    imageSrc: "/BuiltFor/img2.png",
    headingPrimaryColor: "#F5F5F5",
    headingSecondaryColor: "#F99526",
    paragraphColor: "#CCCCCC",
    bulletColor: "#2B68C3",
    statsColor: "#F99526",
    bulletIcons: [
      "/BuiltFor/user.png",
      "/BuiltFor/arrow-down.png",
      "/BuiltFor/arrow-up.png",
      "/BuiltFor/rotate-square.png",
    ],
  },

  "cloud-finops-ai": {
    sectionBg: "white",
    imageSrc: "/BuiltFor/EnterpriseSplit.webp",
    headingPrimaryColor: "#254D70",
    headingSecondaryColor: "#254D70",
    paragraphColor: "#141414",
    bulletColor: "#efefef",
    statsColor: "#254D70",
    bulletIcons: [
      "/BuiltFor/Waste.svg",
      "/BuiltFor/money.svg",
      "/BuiltFor/web.svg",
      "/BuiltFor/efficiency.svg",
    ],
  },
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, SplitContent>> = {
  "banking-and-finance": {
    banks: {
      headingPrimary: "Tangible outcomes for forward-thinking banking institutions",
      imageSrc: "/BuiltFor/img2.png",
      paragraph: "Measurable improvements in efficiency, compliance, and customer experience across your banking operations.",
      bulletPoints: [
        "Reduced operational costs",
        "Faster regulatory compliance",
        "Improved customer retention",
        "Enhanced risk management",
      ],
      bulletIcons: [
        "/BuiltForBnf/dollar.svg",
        "/BuiltForBnf/compliance.svg",
        "/BuiltForBnf/handshake-deal.svg",
        "/BuiltForBnf/risk.svg",
      ],
      stats: [
        { value: "85%", label: "Straight-through processing rate" },
        { value: "5K+", label: "Daily messages processed per user" },
        { value: "10", label: "Days saved in monthly reporting" },
      ],
    },
    "credit-union": {
      headingPrimary: "Real results for growing credit unions everywhere",
      imageSrc: "/BuiltFor/img2.png",
      paragraph: "Measurable improvements in efficiency, member service, and daily operations for your team, helping you serve members better while reducing manual work.",
      bulletPoints: [
        "Faster member onboarding",
        "Reduced manual work",
        "Improved compliance readiness",
        "Lower operational costs",
      ],
      bulletIcons: [
        "/BuiltForBnf/time-fast.svg",
        "/BuiltForBnf/down-arrow.svg",
        "/BuiltForBnf/revenue-alt.svg",
        "/BuiltForBnf/cheap-stack.svg",
      ],
      stats: [
        { value: "85%", label: "Straight-through processing rate" },
        { value: "5K+", label: "Monthly hours saved" },
        { value: "10", label: "Days faster loan approvals" },
      ],
    },
    "financial-unions": {
      headingPrimary: "Proven results for financial institutions worldwide",
      imageSrc: "/BuiltFor/img2.png",
      paragraph: "Quantifiable improvements in efficiency, compliance, risk management, and operational scale across your entire organization.",
      bulletPoints: [
        "Accelerated digital transformation",
        "Strengthened regulatory compliance",
        "Optimized capital management",
        "Reduced operational risk",
      ],
      bulletIcons: [
        "/BuiltForBnf/time-fast.svg",
        "/BuiltForBnf/uparrow.svg",
        "/BuiltForBnf/revenue-alt.svg",
        "/BuiltForBnf/risk.svg",
      ],
      stats: [
        { value: "85%", label: "Straight-through processing achievement" },
        { value: "8K+", label: "Daily messages processed per team" },
        { value: "300", label: "Million transactions reconciled annually" },
      ],
    },
  },

  "cloud-finops-ai": {
    enterprises: {
      // headingPrimary: "The Impact CloudDIET Delivers For Enterprises",
      headingPrimary: (
        <>
          The Impact
          CloudDIET
          Delivers For Enterprises
        </>
      ),
      imageSrc: "/BuiltFor/EnterpriseSplit.webp",
      paragraph: "CloudDIET helps enterprise IT teams cut Azure costs fast across subscriptions with guaranteed savings, engineering insights, and clear fix steps.",
      bulletPoints: [
        "Cut Waste Fast",
        "Fix Config Errors",
        "Lower License Costs",
        "Boost Team Efficiency",
      ],
      stats: [
        { value: "30%", label: "Average savings across estates" },
        { value: "100+", label: "Measures checked per scan" },
        { value: "8X", label: "ROI in first month" },
      ],
    },

    "saas-application-providers": {
      headingPrimary: "Impact We Deliver",
      imageSrc: "/BuiltFor/DigitalBuilt.webp",
      // headingSecondary: "Deliver",
      paragraph:
        "CloudDIET cuts cloud waste and saves organizations 30% on average spend. Fast ROI from month one with assured results. ",
      bulletPoints: [
        "Cut Costs Now ",
        "Scale Without Waste ",
        "Assure Savings Long-Term ",
        "Boost Team Speed ",
      ],
      stats: [
        { value: "200+", label: "Customers" },
        { value: "30%", label: "Average Solutions" },
        { value: "10M+", label: "Spend Optimized" },
      ],
    },

    "regulated-large-enterprise": {
      headingPrimary: "The Enterprise Impact We Deliver ",
      imageSrc: "/BuiltFor/SMBBuilt.webp",
      // headingSecondary: "Built For SMBs",
      paragraph:
        "CloudDIET delivers enterprise-grade optimization without FinOps overhead.",
      bulletPoints: [
        "Cut Waste Fast",
        "Keep Services Running",
        "Azure Every Dollar",
        "Scale Regions Smart",
      ],
      stats: [
        { value: "200+", label: "Customers" },
        { value: "30%", label: "Average Savings" },
        { value: "10M+", label: "Spend Managed" },
      ],
    },
  },
  "ehr-and-pms": {
    "long-term-care": {
      headingPrimary: "Measurable Outcomes for Long-Term Care",
      imageSrc: "/BuiltFor/Mesurable.webp",
      paragraph: "Unified Clinicapp transforms daily operations, leading to tangible improvements in care quality and efficiency.",
      bulletPoints: [
        "Improved Resident Care Coordination",
        "Reduced Administrative Burden",
        "Enhanced Regulatory Compliance",
        "Accelerated Reimbursement Cycles",
      ],
      stats: [
        { value: <>4X <br /> Faster</>, label: "Audit Preparation Time" },
        { value: <>200+ <br /> Facilities</>, label: "Trust Our Platform" },
        { value: <>50% <br /> less</>, label: "Medication Charting Errors" },
      ],
    },
    "home-healthcare": {
      headingPrimary: "Measurable Outcomes for Home Care",
      imageSrc: "/BuiltFor/HomeCareEHR.webp",
      paragraph: "Improve care quality, streamline operations, and ensure financial health for your agency.",
      bulletPoints: [
        "Accelerated Visit Documentation",
        "Improved Care Coordination",
        "Enhanced Regulatory Compliance",
        "Faster Claim Submission",
      ],
      stats: [
        { value: <>4X <br /> Faster</>, label: "Visit-to-Billing Cycle" },
        { value: <>200+ <br /> Agencies</>, label: "Trust Our Platform" },
        { value: <>40% <br /> Reduction</>, label: "Charting Backlog" },
      ],
    },
    "clinics-and-hospitals": {
      headingPrimary: "Measurable Outcomes for Healthcare Systems",
      imageSrc: "/BuiltFor/ClinicsNewEHR.webp",
      paragraph: "Drive operational excellence and financial health with a platform built for scale and coordination.",
      bulletPoints: [
        "Streamlined Interdepartmental Coordination",
        "Reduced Claim Denial Rates",
        "Enhanced Patient Data Accessibility",
        "Improved Staff Productivity",
      ],
      stats: [
        { value: <>40% <br /> Faster</>, label: "Care Coordination Handoffs" },
        { value: <>200+ <br /> Facilities</>, label: "Trust Our Platform" },
        { value: <>99% <br /> Accuracy</>, label: "Integrated Clinical Documentation" },
      ],
    },
  },
};

/* ================= COMPONENT ================= */

export default function SplitFeature() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  const theme =
    THEMES[industry ?? "banking-and-finance"] ??
    THEMES["banking-and-finance"];

  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const content =
    CONTENT[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!content) return null;

  return (
    <section className={`w-full    ${theme.sectionBg}`}>
      <div className="max-w-8xl  mx-10 pb-10 grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] xl:px-10 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-start h-[600px] lg:justify-center xl:justify-start">
          <img
            src={content.imageSrc}
            alt="Feature"
            className="w-full h-full rounded-lg object-fill "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full text-left lg:text-center xl:text-left   mx-auto xl:mx-0">

          {/* HEADING */}
          <H2
            className={`leading-tight xl:mb-10 mx-auto max-w-3xl ${industry === "ehr-and-pms"
                ? "font-bricolageEHR"
                : "font-bricolage"
              }`}
          >
            <span style={{ color: theme.headingPrimaryColor }}>
              {content.headingPrimary}
            </span>
          </H2>


          {/* PARAGRAPH */}
          <P className={`mt-4  mx-auto lg:max-w-lg xl:mx-0 ${theme.paragraphColor}`}>
            {content.paragraph}
          </P>

          {/* BULLETS */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-2 mt-8">
            {content.bulletPoints.map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-3 w-full"
              >
                <div
                  className={`rounded-full  w-14 h-14 flex items-center justify-center flex-shrink-0`}
                  style={{ backgroundColor: theme.bulletColor }}
                >
                  <img
                    src={content.bulletIcons?.[index] ?? theme.bulletIcons[index]}
                    alt={content.bulletPoints[index]}
                    className="w-full h-full p-3 "
                  />

                </div>
                <P className={`${theme.paragraphColor} text-left`}>
                  {text}
                </P>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-12   lg:mx-auto xl:mx-0 text-center xl:text-left">
            {content.stats.map((stat, index) => (
              <div key={index}>
                <H3 className={`text-[${theme.statsColor}] ${industry === "ehr-and-pms"
                    ? "font-bricolageEHR"
                    : "font-bricolage"
                  }`}>{stat.value}</H3>
                <P className={`mt-2 ${theme.paragraphColor}`}>
                  {stat.label}
                </P>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
