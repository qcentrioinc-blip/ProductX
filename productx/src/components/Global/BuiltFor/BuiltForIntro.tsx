import { useState } from "react";
import { P } from "../../../styles/Typography";
import { useNavigate, useParams } from "react-router-dom";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTheme } from "../ThemeContext";

type IntroStyle = {
  sectionBg: string;
  darkSectionBg?: string;
  headingColor: string;
   darkHeadingColor?: string; 
  paraColor: string;
  buttonBg: string;
  buttonText: string;
  contactAction: "route" | "drawer" | "modal";
  contactRoute?: string;
};

type IntroContent = {
  heading: string;
  para1: string;
  para2: string;
};

const STYLE_CONFIG: Record<string, IntroStyle> = {
  "ehr-and-pms": {
    sectionBg: "#ffffff",
    headingColor: "#008280",
       darkSectionBg:"#141414",
     darkHeadingColor: "#ffffff",
     
    paraColor: "#141414",
    buttonBg: "ffffff",
    buttonText: "#008280",
    contactAction: "drawer",
  },

  "banking-and-finance": {
    sectionBg: "#F2F2F2",
     darkHeadingColor: "#006C49",
    headingColor: "#2A2A2A",
    paraColor: "#141414",
    buttonBg: "#141414",
    buttonText: "white",
    contactAction: "route",
    contactRoute: "/industries/banking-and-finance/contactform",
  },

  "high-tech": {
    sectionBg: "#000000",
    headingColor: "#F99526",
    paraColor: "#CCCCCC",
    buttonBg: "white",
    buttonText: "#8338EC",
    contactAction: "route",
    contactRoute: "/industries/high-tech/contactform",
  },

  "cloud-finops-ai": {
    sectionBg: "#FAFAFA",
    darkSectionBg:"#000000",
    headingColor: "#254D70",
    paraColor: "#141414",
    buttonBg: "white",
    buttonText: "#254D70",
    contactAction: "modal",
  },
};

const CONTENT_CONFIG: Record<string, Record<string, IntroContent>> = {
  "cloud-finops-ai": {
    enterprises: {
      heading: "Why Traditional Solutions Fall Short",
      para1:
        "Standard Azure cost tools show basic spend numbers. They miss the deep issues in resource configurations, SKUs, and usage patterns across multiple subscriptions. Enterprise IT teams get reports but no real fixes. Cloud operations struggle to act on surface-level data. ",
      para2:
        "CloudDIET changes this and uses engineering expertise to find waste that other tools ignore. From overprovisioned VMs to bad licensing, you get clear steps to cut costs and keep services running. ",
    },

    "saas-application-providers": {
      heading: "Why Tools Fail SaaS",
      para1:
        " Basic dashboards miss App Services scale problems. They show spend but not why Functions run fixed or why Event Hubs overprovision. DevOps teams lack insight into CI/CD waste. SaaS providers stay blind to multi-tenant cost leaks.",
      para2:
        "CloudDIET solves this. It checks failed triggers, unused registries, and messaging configs. Engineering teams get fixes that scale with customer growth. ",
    },

    "regulated-large-enterprise": {
      heading: "Why Traditional Tools Fail",
      para1:
        "Enterprise tools miss deep Azure issues in complex setups. They show basic costs but skip Cosmos DB multi-master waste, unused RIs, and overprovisioned services across regions.",
      para2:
        "Teams stay stuck with 10M+ spend risks and no safe path to 30% cuts. ",
    },
  },

  "ehr-and-pms": {
    "long-term-care": {
      heading: "Why Generic Software Falls Short for LTC",
      para1:
        "Generic electronic health records and practice management systems are not designed for the unique complexities of long-term care. They often lack the specialized tools needed for MDS submissions, interdisciplinary team coordination, comprehensive ADL tracking, and the intricate billing requirements of Medicare and Medicaid. This forces staff to use workarounds, manual processes, and multiple disjointed systems.",
      para2:
        "This fragmentation creates data silos, increases the risk of errors, and slows down critical workflows. The result is administrative burnout, compliance vulnerabilities, and obstacles to delivering timely, coordinated resident care. Your facility needs a platform built specifically for your operational and clinical reality.",
    },

    "home-healthcare": {
      heading: "Why Mobile Care Needs a Mobile Platform",
      para1:
        "Many home health agencies rely on desktop-based systems or paper charts, forcing clinicians to document visits after returning to the office. This creates documentation backlogs, delays billing, and risks data errors. Care coordination also suffers, as schedules, patient updates, and care plans aren't accessible in real-time to field staff.",
      para2:
        "Generic software lacks tools built for in-home care, like mobile visit charting, integrated compliance tracking, and visit-based billing for Medicare and Medicaid. This mismatch leads to administrative overhead, compliance gaps, and slower reimbursement cycles, diverting focus from patient care.",
    },

    "clinics-and-hospitals": {
      heading: "Why Multiple Systems Hinder Hospital Efficiency",
      para1:
        "Many hospitals use separate systems for inpatient EHR, outpatient scheduling, and revenue cycle management. This fragmentation creates data silos, forcing staff to manually reconcile information across platforms. The result is delayed care coordination, increased risk of clinical errors, and a disjointed patient experience as they move between departments.",
      para2:
        "Furthermore, generic practice management software cannot handle the scale and complexity of hospital billing. It struggles with high-volume charge capture, intricate DRG and CPT claims, and denial management across multiple service lines. This leads to revenue leakage, compliance risks, and administrative strain, diverting focus from patient care.",
    },
  },

  "banking-and-finance": {
    banks: {
      heading: "Why Legacy Systems Fail Modern Banks",
      para1:
        "Traditional banking systems were not built for today's speed or regulatory complexity. They rely on custom coding for every update, making changes slow and expensive. These fragmented platforms create data silos, limiting your view of the customer and increasing operational risk.",
      para2:
        "Banks need flexible, integrated solutions that automate compliance and unify operations. Without them, institutions face rising costs, inefficient processes, and an inability to scale. Modern banking demands a foundation built for change, not held back by it.",
    },

    "credit-union": {
      heading: "Why generic platforms don't serve credit unions",
      para1:
        "Most banking software is built for large institutions with big IT teams and budgets. These systems are complex, expensive to maintain, and require dedicated staff to operate. Credit unions end up paying for features they don't need while struggling with daily operations.",
      para2:
        "Traditional solutions also fail to address how credit unions actually process payments. Many rely on leagues or intermediaries to connect with central networks. Standard platforms ignore this structure, creating manual work and reconciliation headaches instead of solving them.",
    },

    "financial-unions": {
      heading: "Why conventional platforms limit financial institutions today",
      para1:
        "Traditional banking software was designed for a simpler time. These monolithic systems require custom coding for every change, making upgrades expensive and slow. They cannot keep pace with real-time transaction volumes, evolving regulatory demands, or customer expectations for digital experiences.",
      para2:
        "Legacy platforms create data silos across lending, payments, and compliance functions. Risk teams lack a unified view. Operations teams rely on manual workarounds. Growth becomes constrained by technology instead of being enabled by it. Financial institutions need integrated, adaptable solutions built for complexity.",
    },
  },
};

export default function BuiltForIntro() {
  const { theme } = useTheme();
    const isDark = theme === "dark";
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const style = STYLE_CONFIG[industry ?? "banking-and-finance"];
  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const content =
    CONTENT_CONFIG[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!content) return null;

  const handleContactClick = () => {
    // Scroll behavior for Banking & Finance to match the #contact-us anchor
    if (industry === "banking-and-finance") {
      const el = document.getElementById("contact-us");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Default behaviors
    if (style.contactAction === "route" && style.contactRoute) {
      navigate(style.contactRoute);
    } else if (style.contactAction === "drawer") {
      setDrawerOpen(true);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <section
        className={`relative w-full py-6   `}

          style={{ backgroundColor: isDark ? (style.darkSectionBg ?? "#000000") : style.sectionBg }}
      >
        <div className="max-w-8xl mx-10 xl:px-10">
          <div className="max-w-6xl">

            <h2 className={`mb-6 text-[32px] md:text-[48px] lg:text-[72px] ${industry === "ehr-and-pms" ? "font-bricolageEHR" : "font-bricolage"}`} style={{
  color: isDark
    ? style.darkHeadingColor ?? style.headingColor
    : style.headingColor,
}}>
              {content.heading}
            </h2>

            <P className={`mb-4 ${style.paraColor}`}>
              {content.para1}
            </P>

            <P className={`mb-8 ${style.paraColor}`}>
              {content.para2}
            </P>
            <button
              onClick={handleContactClick}
              className="
    group flex items-center justify-center
    w-auto h-[48px]
    px-[24px] py-[12px]
    rounded-[8px]
    font-quicksand font-bold text-[16px]
    border-2
    shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
    transition-all duration-300
  "
              style={{
                backgroundColor: style.buttonBg,
                color: style.buttonText,
              }}
            >

              Get Solutions
              <span className="flex items-center gap-2">

                <span className="relative flex items-center w-[20px] h-[20px]">
                  <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                  <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </span>
            </button>

          </div>
        </div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}