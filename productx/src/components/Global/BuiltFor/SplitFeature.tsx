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
    imageSrc: "/BuiltFor/EnterpriseSplit.png",
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
    imageSrc: "/BuiltFor/EnterpriseImage.svg",
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

    "digital-native": {
      headingPrimary: "Impact We Deliver",
        imageSrc: "/BuiltFor/DigitalNativeImage.svg",
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

    smb: {
      headingPrimary: "The Enterprise Impact We Deliver ",
        imageSrc: "/BuiltFor/SMBImage.svg",
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
      <div className="max-w-8xl mx-10  grid grid-cols-1 lg:grid-cols-2 xl:px-10 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
              src={content.imageSrc}
            alt="Feature"
            className="w-full max-w-xl rounded-2xl object-cover "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full text-center lg:text-left mx-auto lg:mx-0">

          {/* HEADING */}
          <H2 className="leading-tight xl:mb-10 max-w-3xl">
            <span className={theme.headingPrimaryColor}>
              {content.headingPrimary}{" "}
            </span>
           
          </H2>

          {/* PARAGRAPH */}
          <P className={`mt-4 max-w-md mx-auto lg:mx-0 ${theme.paragraphColor}`}>
            {content.paragraph}
          </P>

          {/* BULLETS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 justify-items-center lg:justify-items-start">
  {content.bulletPoints.map((text, index) => (
    <div
      key={index}
      className="flex items-center justify-center lg:justify-start gap-3"
    >
      <div className={`rounded-full ${theme.bulletColor} w-14 h-14    rounded-full flex items-center justify-center`}>
      <img
        src={BULLET_ICONS[index]}
        alt=""
        className=" w-full h-full p-3  flex-shrink-0 object-contain"
      />
      </div>
      <P className={theme.paragraphColor}>{text}</P>
    </div>
  ))}
</div>


          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
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
