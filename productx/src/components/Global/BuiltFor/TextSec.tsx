import { useParams } from "react-router-dom";
import {  P } from "../../../styles/Typography";

type TextContent = {
  h4: string;
  h2: string;
  p: string;
};

const CONTENT_MAP: Record<string, Record<string, TextContent>> = {
  "cloud-finops-ai": {
    enterprises: {
      h4: "Challenges",
      h2: "Enterprise IT and Cloud Operations",
      p: "Multi-region Azure setups often overprovision resources to ensure availability. Without consistent governance and visibility, idle and oversized resources go unmanaged. This leads to millions in avoidable cloud waste over time.",
    },
    "saas-application-providers": {
      h4: "Saas",
      h2: "Scaling Challenges ",
      p: "SaaS providers incur hidden costs by keeping applications always scaled for peak demand. Always-on resources drive up compute and infrastructure spend even during low usage. Without dynamic scaling controls, these costs quietly erode margins.",
    },
    "regulated-large-enterprise": {
      h4: "Enterprise  ",
      h2: "Cloud Challenges",
      p: "Multi-region Azure setups overprovision resources for resilience. Without unified governance, idle assets drive massive, avoidable cloud waste.",
    },
  },

  "banking-and-finance": {
    banks: {
      h4: "Challenges",
      h2: "Industry Challenges",
      p: "Outdated systems slow growth and increase operational risk.",
    },
    "credit-union": {
      h4: "Challenges",
      h2: "Industry Challenges",
      p: "Limited resources make it hard to compete and grow.",
    },
    "financial-unions": {
      h4: "Challenges",
      h2: "Industry Challenges",
      p: "Complex operations demand modern, scalable, and secure solutions.",
    },
  },

  "ehr-and-pms": {
    "long-term-care": {
      h4: "Challenges faced by industry",
      h2: "Key Industry Challenges",
      p: "Coordinating complex care while meeting strict regulatory demands.",
    },
    "home-healthcare": {
      h4: "Challenges faced by industry",
      h2: "Key Industry Challenges",
      p: "Coordinating mobile care teams while ensuring compliance and timely billing.",
    },
    "clinics-and-hospitals": {
      h4: "Challenges faced by industry",
      h2: "Main Industry Challenges",
      p: "Coordinating complex care across departments and revenue streams.",
    },
  },

  "high-tech": {
    startups: {
      h4: "Challenges",
      h2: "Speed vs Stability",
      p: "High-tech startups move fast but often sacrifice infrastructure efficiency and cost control.",
    },
    enterprises: {
      h4: "Challenges",
      h2: "Scaling Innovation Securely",
      p: "Large tech organizations must innovate while controlling spend and operational complexity.",
    },
  },
};

export default function TextSec() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const content =
    CONTENT_MAP[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!content) return null;

  return (
    <section className="w-full py-10 bg-white ">
      <div className="max-w-8xl mx-10 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
           <h5
  className={`mb-3 text-[14px] md:text-[16px] lg:text-[20px]
    ${industry === "ehr-and-pms" ? "font-bricolageEHR" : "font-bricolage"}
    font-Regular
    leading-[120%]`}
>
  {content.h4}
</h5>

            <h3 className={`leading-snug  text-[20px] md:text-[24px] lg:text-[32px]
        ${industry === "ehr-and-pms" ? "font-bricolageEHR" : "font-bricolage"}
        font-semibold
        
     `}>{content.h2}</h3>
          </div>

          {/* RIGHT */}
          <div>
            <P className="leading-relaxed">{content.p}</P>
          </div>

        </div>
      </div>
    </section>
  );
}