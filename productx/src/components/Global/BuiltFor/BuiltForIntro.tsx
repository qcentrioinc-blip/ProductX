import { useState } from "react";
import { H1, P } from "../../../styles/Typography";
import { useNavigate, useParams } from "react-router-dom";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";
 
import { ArrowRight, ArrowUpRight } from "lucide-react";
 
type IntroStyle = {
  sectionBg: string;
  headingColor: string;
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
    sectionBg: "bg-[#F4F8FF]",
    headingColor: "text-[#166D48]",
    paraColor: "text-[#141414]",
    buttonBg: "bg-[#F99526]",
    buttonText: "text-[#166D48]",
    contactAction: "drawer",
  },
 
  "banking-and-finance": {
    sectionBg: "bg-[#F2F2F2]",
    headingColor: "text-[#2A2A2A]",
    paraColor: "text-[#141414]",
    buttonBg: "bg-[#141414]",
    buttonText: "text-white",
    contactAction: "route",
    contactRoute: "/industries/banking-and-finance/contactform",
  },
 
  "high-tech": {
    sectionBg: "bg-black",
    headingColor: "text-[#F99526]",
    paraColor: "text-[#CCCCCC]",
    buttonBg: "bg-white",
    buttonText: "text-[#8338EC]",
    contactAction: "route",
    contactRoute: "/industries/high-tech/contactform",
  },
 
  "cloud-finops-ai": {
    sectionBg: "bg-[#FAFAFA]",
    headingColor: "text-[#254D70]",
    paraColor: "text-[#141414]",
    buttonBg: "bg-white",
    buttonText: "text-[#254D70]",
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
 
  "banking-and-finance": {
    banks: {
      heading: "Why Legacy Banking Systems Hold You Back",
      para1:
        "Banks operate on complex legacy infrastructure that increases operational cost.",
      para2:
        "Modern optimization requires intelligent automation and real-time insights.",
    },
 
    nbfc: {
      heading: "Why NBFCs Struggle to Scale Efficiently",
      para1:
        "NBFCs grow fast but face mounting cost and compliance pressure.",
      para2:
        "Smart systems enable controlled, compliant growth.",
    },
 
    "credit-union": {
      heading: "Why Credit Unions Need Smarter Technology",
      para1:
        "Limited IT budgets restrict innovation in member services.",
      para2:
        "Targeted optimization improves efficiency without large investments.",
    },
  },
};
 
export default function BuiltForIntro() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();
 
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
 
  const style = STYLE_CONFIG[industry ?? "banking-and-finance"];
  const content =
    CONTENT_CONFIG[industry ?? ""]?.[builtForType ?? ""];
 
  if (!content) return null;
 
  const handleContactClick = () => {
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
        className={`relative w-full py-10  ${style.sectionBg}`}
      >
        <div className="max-w-8xl mx-10 xl:px-10">
          <div className="max-w-4xl">
            <H1 className={`mb-6 ${style.headingColor}`}>
              {content.heading}
            </H1>
 
            <P className={`mb-4 ${style.paraColor}`}>
              {content.para1}
            </P>
 
            <P className={`mb-8 ${style.paraColor}`}>
              {content.para2}
            </P>
            <button
              onClick={handleContactClick}
              className={`
          group
          flex items-center justify-center
          w-auto h-[48px]
          px-[24px] py-[12px]
          rounded-[8px]
          font-quicksand font-bold text-[16px]
         
          border-2 border-[#254D70]
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-white hover:text-black
         
        ${style.buttonBg} ${style.buttonText}`}
            >
              Learn More
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