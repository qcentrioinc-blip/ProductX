import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { H1, P } from "../../../styles/Typography";
import { ContactUsAI } from "../../../styles/Button";
import { useNavigate, useParams } from "react-router-dom";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

type BuiltForKey = "saas-application-providers" | "enterprises" | "regulated-large-enterprise"

const CONTENT_MAP: Record<
  BuiltForKey,
  {
    heading: string | ReactNode;
    description: string;
    cta: string;

    bgImage: string;
  }
> = {

  "saas-application-providers": {
    heading: (<>
      Scale Your SaaS Profitably <br /> {" "} With CloudDIET
    </>),
    description:
      " CloudDIET fixes Azure Functions and scale issues so SaaS teams save costs without hurting performance or customer growth.",
    cta: "Optimize Now",
    bgImage: "/BuiltFor/digitalnative-transformed.png",
  },
  enterprises: {
    heading: (
      <>
        Optimize Multi <br />
        Subscription{" "}
        Azure Costs
      </>
    ),
    description:
      "CloudDIET profiles your infrastructure usage patterns to automatically cut waste across all Azure subscriptions safely..",
    cta: "Start Your Scan",
    bgImage: "/BuiltFor/Enterprisenew.webp",
  },
  "regulated-large-enterprise": {
    heading: (<>
      Assured Azure savings for <br /> Large enterprises.
    </>),
    description:
      " Cut multi-region Azure waste, keep compliance strong, and protect every critical workload without service risk.",
    cta: "Get Started",
    bgImage: "/BuiltFor/Rectangle.webp",
  },
};

export const prefetchBuiltForAIImages = () => {
  Object.values(CONTENT_MAP).forEach((content) => {
    const img = new Image();
    img.src = content.bgImage;
  });
};

export default function TitleSecAI() {
  const { industry, builtForType } = useParams<{ industry: string; builtForType: BuiltForKey }>();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const content = CONTENT_MAP[builtForType ?? "enterprises"];

  useEffect(() => {
    prefetchBuiltForAIImages();
  }, []);

  const handleContactClick = () => {
    // Logic mirrored from BuiltForIntro
    if (industry === "ehr-and-pms") {
      setDrawerOpen(true);
    } else if (industry === "banking-and-finance") {
      navigate("/industries/banking-and-finance/contactform");
    } else if (industry === "high-tech") {
      navigate("/industries/high-tech/contactform");
    } else {
      // Default (cloud-finops-ai)
      setModalOpen(true);
    }
  };

  return (
    <section
      className="w-full h-[60vh] md:h-[50vh] xl:h-screen relative z-10 overflow-hidden"
    >
      {/* BACKGROUND IMAGE WITH ZOOM */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${content.bgImage})` }}
      ></div>

      {/* DARK OVERLAY (REMOVE IF NOT NEEDED) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-10 xl:px-10 ">

          <div className="w-full md:w-[100%] space-y-6">
            <H1 className="text-white leading-tight">
              {content.heading}
            </H1>
            <P className="text-white max-w-xl leading-tight">
              {content.description}
            </P>

            <ContactUsAI onClick={handleContactClick}>
              <span className="text-sm font-semibold">{content.cta}</span>

            </ContactUsAI>


          </div>

        </div>
      </div>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
}
