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
    value: string;
    label: string;
  }[];
};

type Theme = {
  sectionBg: string;
  headingPrimaryColor: string;
  headingSecondaryColor: string;
  paragraphColor: string;
  bulletColor: string;
  statsColor: string;
  imageSrc: string;
};

/* ================= THEMES (BY INDUSTRY) ================= */
const BULLET_ICONS = [
   "/BuiltFor/Waste.svg",
  "/BuiltFor/money.svg",
  "/BuiltFor/web.svg",
  "/BuiltFor/efficiency.svg",
];

const THEMES: Record<string, Theme> = {
  "banking-and-finance": {
    sectionBg: "bg-white",
    imageSrc: "/BuiltFor/img2.png",
    headingPrimaryColor: "text-[#2B68C3]",
    headingSecondaryColor: "text-[#2A2A2A]",
    paragraphColor: "text-[#141414]",
    bulletColor: "bg-[#fafafa]",
    statsColor: "text-[#2A2A2A]",
  },

  "ehr-and-pms": {
    sectionBg: "bg-[#166D48]",
    imageSrc: "/BuiltFor/img2.png",
    headingPrimaryColor: "text-[#F5F5F5]",
    headingSecondaryColor: "text-[#F5F5F5]",
    paragraphColor: "text-[#CCCCCC]",
    bulletColor: "bg-[#2B68C3]",
    statsColor: "text-[#F5F5F5]",
  },

  "high-tech": {
    sectionBg: "bg-[#230053]",
    imageSrc: "/BuiltFor/img2.png",
    headingPrimaryColor: "text-[#F5F5F5]",
    headingSecondaryColor: "text-[#F99526]",
    paragraphColor: "text-[#CCCCCC]",
    bulletColor: "bg-[#2B68C3]",
    statsColor: "text-[#F99526]",
  },

  "cloud-finops-ai": {
sectionBg: "bg-[#FAFAFA]",
    imageSrc: "/BuiltFor/EnterpriseSplit.webp",
    headingPrimaryColor: "text-[#254D70]",
    headingSecondaryColor: "text-[#254D70]",
    paragraphColor: "text-[#141414]",
    bulletColor: "bg-[#efefef]",
    statsColor: "text-[#2A2A2A]",
  },
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, SplitContent>> = {
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
          paragraph:"CloudDIET helps enterprise IT teams cut Azure costs fast across subscriptions with guaranteed savings, engineering insights, and clear fix steps.",
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

  const content =
    CONTENT[industry ?? ""]?.[builtForType ?? ""];

  if (!content) return null;

  return (
    <section className={`w-full py-16   ${theme.sectionBg}`}>
      <div className="max-w-8xl mx-10  grid grid-cols-1 xl:grid-cols-2 xl:px-10 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex  justify-start   lg:justify-center xl:justify-start">
          <img
              src={content.imageSrc}
            alt="Feature"
            className="w-full  rounded-2xl object-cover "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full text-left lg:text-center xl:text-left   mx-auto xl:mx-0">

          {/* HEADING */}
          <H2 className="leading-tight xl:mb-10 mx-auto max-w-3xl">
            <span className={theme.headingPrimaryColor}>
              {content.headingPrimary}{" "}
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
        className={`rounded-full ${theme.bulletColor} w-14 h-14 flex items-center justify-center flex-shrink-0`}
      >
        <img
          src={BULLET_ICONS[index]}
          alt=""
          className="w-full h-full p-3 object-contain"
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
                <H3 className={theme.statsColor}>{stat.value}</H3>
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
