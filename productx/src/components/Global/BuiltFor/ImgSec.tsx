import { useState } from "react";
import { ContactUs } from "../../../styles/Button";
import { H2, H3, P } from "../../../styles/Typography";
import { useNavigate, useParams } from "react-router-dom";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

/* ================= TYPES ================= */

type Theme = {
  bgImage: string;
  cardBg: string;
  cardText: string;
  paraColor: string;
  borderColor: string;
  buttonText: string;
  buttonBg: string;
  contactAction: "route" | "drawer" | "modal";
  contactRoute?: string;
};

type Content = {
  heroHeading: string;
  cardTitle: string;
  cardPara: string;
  buttonLabel: string;
};

/* ================= THEMES (INDUSTRY ONLY) ================= */

const THEMES: Record<string, Theme> = {
  "banking-and-finance": {
    bgImage: "/BuiltFor/img3.jpg",
    cardBg: "bg-[#1A73E8]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-white",
    buttonText: "text-white",
    buttonBg: "bg-[#141414]",
    contactAction: "route",
    contactRoute: "/industries/banking-and-finance/contactform",
  },

  "ehr-and-pms": {
    bgImage: "/BuiltFor/img3.jpg",
    cardBg: "bg-[#166D48]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-white",
    buttonText: "text-black",
    buttonBg: "bg-black",
    contactAction: "drawer",
  },

  "high-tech": {
    bgImage: "/BuiltFor/img3.jpg",
    cardBg: "bg-[#F99526]",
    cardText: "text-[#F5F5F5]",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-black",
    buttonText: "text-white",
    buttonBg: "bg-black",
    contactAction: "route",
    contactRoute: "/industries/high-tech/contactform",
  },

  "ai-optimization": {
    bgImage: "/BuiltFor/ImageBg.png",
    cardBg: "bg-[#5551FF]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-white",
    buttonText: "text-black",
    buttonBg: "bg-[#141414]",
    contactAction: "modal",
  },
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, Content>> = {
  "ai-optimization": {
    enterprises: {
      heroHeading:
        "We cut Azure waste for enterprise IT teams across subscriptions.",
      cardTitle: "Our Platform",
      cardPara: "Check our solution for large-scale Azure environments.",
      buttonLabel: "View Demo",
    },

    "digital-native": {
      heroHeading:
        "CloudDIET stops cloud waste so SaaS teams scale apps without extra costs",
      cardTitle: "Start Saving ",
      cardPara: "See CloudDIET platform and cut your cloud bills today.",
      buttonLabel: "Try Now",
    },

    smb: {
      heroHeading:
        "CloudDIET secures 30% Azure savings for multi-region enterprises without risking compliance or uptime. ",
      cardTitle: "Start Optimizing ",
      cardPara: "Check CloudDIET platform to cut Azure costs safely in regulated setups",
      buttonLabel: " Try Platform",
    },
  },

  "banking-and-finance": {
    banks: {
      heroHeading:
        "Secure, compliant Azure optimization for modern banks.",
      cardTitle: "Trusted Platform",
      cardPara: "Reduce cloud costs while meeting regulatory needs.",
      buttonLabel: "Request Demo",
    },

    nbfc: {
      heroHeading:
        "Lower cloud costs without slowing financial innovation.",
      cardTitle: "Cost Control",
      cardPara: "Optimize Azure spend across NBFC workloads.",
      buttonLabel: "View Demo",
    },

    "credit-union": {
      heroHeading:
        "Smarter Azure spend management for credit unions.",
      cardTitle: "Cost Visibility",
      cardPara: "Gain insight into every dollar spent on Azure.",
      buttonLabel: "Explore",
    },
  },
};

/* ================= COMPONENT ================= */

export default function ImgSec() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme =
    THEMES[industry ?? "banking-and-finance"] ??
    THEMES["banking-and-finance"];

  const content =
    CONTENT[industry ?? ""]?.[builtForType ?? ""];

  if (!content) return null;

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (theme.contactAction === "route" && theme.contactRoute) {
      navigate(theme.contactRoute);
    } else if (theme.contactAction === "drawer") {
      setDrawerOpen(true);
    } else if (theme.contactAction === "modal") {
      setModalOpen(true);
    }
  };

  return (
    <>
      <section
        className="relative w-full lg:h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center lg:block"
        style={{ backgroundImage: `url(${theme.bgImage})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 h-full">
          {/* LEFT TEXT */}
          <div className="flex flex-col h-full pt-20 pb-10 lg:pt-32">
            <div className="w-full lg:w-2/3">
              <H2 className="leading-tight text-[#020059] max-w-4xl">
                {content.heroHeading}
              </H2>
            </div>
          </div>
        </div>

        {/* FLOATING CARD RIGHT */}
        <div
          className="relative w-full px-6 md:px-12 pb-12
          lg:absolute lg:bottom-0 lg:right-0 lg:pb-0 lg:px-0 lg:w-auto
          lg:max-w-[90rem] lg:mx-auto pointer-events-none z-20"
        >
          <div className="flex justify-start lg:justify-end pointer-events-auto">
            <div
              className={`
                ${theme.cardBg} ${theme.cardText}
                rounded-md shadow-xl p-6 md:p-10 w-full lg:max-w-md
                lg:rounded-b-none lg:rounded-tr-none
                border-t-[10px] border-l-[10px] ${theme.borderColor}
              `}
            >
              <H3 className="mb-4">{content.cardTitle}</H3>

              <P className={`mb-6 ${theme.paraColor}`}>
                {content.cardPara}
              </P>

              <ContactUs
                className={`inline-flex items-center gap-2 ${theme.buttonBg} ${theme.buttonText} cursor-pointer`}
                onClick={handleContactClick}
              >
                {content.buttonLabel}
              </ContactUs>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
