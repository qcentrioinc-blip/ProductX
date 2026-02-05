import { useState } from "react";
// import { ContactUs, ContactUsAI } from "../../../styles/Button";
import { H2, H3, P } from "../../../styles/Typography";
import { useParams } from "react-router-dom";
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
  heroHeading: string | React.ReactNode;
  headingColor: string| React.ReactNode;
  cardTitle: string;
  cardPara: string;
  buttonLabel: string;
};

/* ================= THEMES (INDUSTRY ONLY) ================= */

const THEMES: Record<string, Theme> = {
  "banking-and-finance": {
    bgImage: "/BuiltFor/img3.jpg",
    cardBg: "bg-[#254D70]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-[#D9D9D9]",
    buttonText: "text-[#010101]",
    buttonBg: "bg-[#FAFAFA]",
    contactAction: "route",
    contactRoute: "/industries/banking-and-finance/contactform",
  },

  "ehr-and-pms": {
    bgImage: "/BuiltFor/.webp",
    cardBg: "bg-[#166D48]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-white",
    buttonText: "text-black",
    buttonBg: "bg-white",
    contactAction: "drawer",
  },

  "high-tech": {
    bgImage: "/BuiltFor/img3.jpg",
    cardBg: "bg-[#F99526]",
    cardText: "text-[#CCCCCC]",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-black",
    buttonText: "text-white",
    buttonBg: "bg-black",
    contactAction: "route",
    contactRoute: "/industries/high-tech/contactform",
  },

  "cloud-finops-ai": {
    bgImage: "/BuiltFor/ImageBg2.webp",
    cardBg: "bg-[#254D70]",
    cardText: "text-white",
    paraColor: "text-[#CCCCCC]",
    borderColor: "border-[#D9D9D9]",
    buttonText: "text-black",
    buttonBg: "bg-[#FAFAFA]",
    contactAction: "modal",
  },
};

/* ================= BACKGROUND IMAGES FOR CLOUD-FINOPS-AI SUB-TYPES ================= */

const CLOUD_FINOPS_BG_IMAGES: Record<string, string> = {
  enterprises: "/BuiltFor/enterprisenewbg.webp",
  "saas-application-providers": "/BuiltFor/digitalnativenewbg.webp",
  "regulated-large-enterprise": "/BuiltFor/SmnBg.webp",
};

const EHR_AND_PMS_BG_IMAGES: Record<string, string> = {
  "long-term-care": "/BuiltFor/ContactLong.webp",
  "home-healthcare": "/BuiltFor/HomeContact.webp",
  "clinics-and-hospitals": "/BuiltFor/ClinicsContact.webp",
};

/* ================= CONTENT (INDUSTRY + BUILT FOR) ================= */

const CONTENT: Record<string, Record<string, Content>> = {
  "cloud-finops-ai": {
    enterprises: {
      headingColor: "text-[#254D70]",
      heroHeading: (<>
        CloudDIET cuts enterprise <br /> {" "} Azure waste.
      </>),
      cardTitle: "Our Platform",
      cardPara: "Check our solution for large-scale Azure environments.",
      buttonLabel: "View Demo",
    },

    "saas-application-providers": {
      headingColor: "text-[#254D70]",
      heroHeading:
        "CloudDIET secures Azure savings, ensures compliance. ",
      cardTitle: "Start Saving ",
      cardPara: "See CloudDIET platform and cut your cloud bills today.",
      buttonLabel: "Try Now",
    },

    "regulated-large-enterprise": {
      headingColor: "text-[#254D70]",
      heroHeading: (<>
        CloudDIET stops SaaS <br /> {" "}cloud waste.
      </>),

      cardTitle: "Start Optimizing ",
      cardPara: "Check CloudDIET platform to cut Azure costs safely in regulated setups",
      buttonLabel: " Try Platform",
    },
  },

  "banking-and-finance": {
    banks: {
      headingColor: "text-[#254D70]",
      heroHeading:
        "Secure, compliant Azure optimization for modern banks.",
      cardTitle: "Trusted Platform",
      cardPara: "Reduce cloud costs while meeting regulatory needs.",
      buttonLabel: "Request Demo",
    },

    nbfc: {
      headingColor: "text-[#254D70]",
      heroHeading:
        "Lower cloud costs without slowing financial innovation.",
      cardTitle: "Cost Control",
      cardPara: "Optimize Azure spend across NBFC workloads.",
      buttonLabel: "View Demo",
    },

    "credit-union": {
      headingColor: "text-[#254D70]",
      heroHeading:
        "Smarter Azure spend management for credit unions.",
      cardTitle: "Cost Visibility",
      cardPara: "Gain insight into every dollar spent on Azure.",
      buttonLabel: "Explore",
    },
  },
  "ehr-and-pms": {
    "long-term-care": {
      headingColor: "text-[#008280]",
      heroHeading: (<>
        Unified Care for <br /> {" "} Long Term Facilities.
      </>),
      cardTitle: "Ready to Transform?",
      cardPara: "See how Unified Clinicapp is built for the unique needs of long-term care.",
      buttonLabel: "Schedule Demo",
    },
    "home-healthcare": {
      headingColor: "text-[#008280]",
      heroHeading: (<>
        Home Healthcare <br /> {" "} Modernized.
      </>),
      cardTitle: "Remote Care",
      cardPara: "Bring the hospital experience to the patient's home.",
      buttonLabel: "Learn More",
    },
    "clinics-and-hospitals": {
      headingColor: "text-[#008280]",
      heroHeading: (<>
        Connected <br /> {" "} Healthcare Systems.
      </>),
      cardTitle: "Ready for Unity?",
      cardPara: "Discover how Unified Clinicapp connects your entire health system on one platform.",
      buttonLabel: "Request Demo",
    },
  },
};


export default function ImgSec() {
  const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();

  // const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme =
    THEMES[industry ?? "banking-and-finance"] ??
    THEMES["banking-and-finance"];

  const defaultBuiltForType = industry === "ehr-and-pms" ? "long-term-care" : industry === "banking-and-finance" ? "banks" : industry === "cloud-finops-ai" ? "enterprises" : "";

  const content =
    CONTENT[industry ?? ""]?.[builtForType ?? defaultBuiltForType];

  if (!content) return null;

  const getBgImage = () => {
    if (industry === "cloud-finops-ai" && builtForType) {
      return CLOUD_FINOPS_BG_IMAGES[builtForType] ?? theme.bgImage;
    }

    if(industry === "ehr-and-pms" && builtForType) {
      return EHR_AND_PMS_BG_IMAGES[builtForType] ?? theme.bgImage;
    }
    return theme.bgImage;
  };

  // const handleContactClick = (e: React.MouseEvent) => {
  //   e.preventDefault();

  //   if (theme.contactAction === "route" && theme.contactRoute) {
  //     navigate(theme.contactRoute);
  //   } else if (theme.contactAction === "drawer") {
  //     setDrawerOpen(true);
  //   } else if (theme.contactAction === "modal") {
  //     setModalOpen(true);
  //   }
  // };

  return (
    <>
      <section
        className="relative w-full lg:h-[50vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center lg:block"
        style={{ backgroundImage: `url(${getBgImage()})` }}
      >


        <div className="relative z-10 w-full max-w-[90rem] mx-auto h-full xl:pt-4">
          {/* LEFT TEXT */}
          <div className="absolute h-full xl:pt-6 xl:px-6">
            <div className="w-full  ">
              <H2 className={`leading-tight ${content.headingColor} max-w-5xl`}>
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
          <div className="flex justify-start xl:justify-end pointer-events-auto">
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


              <a href="/comingsoon">
                <button
                  className={` gap-2 group
            flex items-center justify-center
            w-auto h-[44px] sm:h-[48px]
            px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
            rounded-[8px]
            font-quicksand font-bold text-[14px] sm:text-[16px]
           
            transition-all duration-300 ease-in-out
            border border-transparent
            hover:bg-white hover:text-[#141414]
            hover:border-[#010101]
            hover:border-b-[4px]
            hover:-translate-y-[2px]
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)] ${theme.buttonBg} ${theme.buttonText} cursor-pointer`}

                >
                  {content.buttonLabel}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}