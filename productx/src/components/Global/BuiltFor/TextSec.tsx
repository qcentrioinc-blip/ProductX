import { useParams } from "react-router-dom";
import { H2, H4, P } from "../../../styles/Typography";

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
      h2: "Modern Banking Infrastructure",
      p: "Banks face rising operational costs while maintaining security, compliance, and legacy systems.",
    },
    nbfc: {
      h4: "Challenges",
      h2: "Agile Growth for NBFCs",
      p: "NBFCs must scale rapidly while managing risk, cost efficiency, and regulatory pressure.",
    },
    "credit-union": {
      h4: "Challenges",
      h2: "Technology Constraints in Credit Unions",
      p: "Credit unions balance member experience with limited budgets and aging infrastructure.",
    },
  },

  "ehr-and-pms": {
    hospitals: {
      h4: "Challenges",
      h2: "Clinical Workflow Efficiency",
      p: "Healthcare providers struggle with fragmented systems and inefficient patient workflows.",
    },
    clinics: {
      h4: "Challenges",
      h2: "Smaller Practices, Bigger Demands",
      p: "Clinics need scalable systems without adding administrative burden to care teams.",
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

  const content =
    CONTENT_MAP[industry ?? ""]?.[builtForType ?? ""];

  if (!content) return null;

  return (
    <section className="w-full py-10 bg-white ">
      <div className="max-w-8xl mx-10 xl:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <H4 className="mb-3">{content.h4}</H4>
            <H2 className="leading-snug">{content.h2}</H2>
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