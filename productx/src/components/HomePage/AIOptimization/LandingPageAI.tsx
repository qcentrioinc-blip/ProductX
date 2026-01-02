import { ArrowRight} from "lucide-react";
import { useState } from "react";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import { H1 } from "../../../styles/Typography";

const LandingPageAI = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
        <div
          className="relative w-full h-[71vh] md:h-[56vh] xl:h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${"/AIOptimization/LandingBackground.png"})`,
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
            {/* Main Heading */}
            <H1
              className="max-w-6xl mb-6"
              
            >
              <span
                style={{
                  color: "#0AC276",
                }}
              >
                 AI-Powered Azure <br/> 
              </span>
              <span style={{ color: "#FFFFFF" }}>Optimization Platform </span>
            </H1>

            {/* Description */}
            <p
              className="max-w-4xl mb-10 px-1 sm:px-0"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                // Smaller on mobile, 24px on desktop
                fontSize: "clamp(16px, 4.5vw, 24px)",
                lineHeight: "130%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#CCCCCC",
              }}
            >
              CloudDIET profiles your Azure resources, analyzes configurations and usage, and delivers recommendations that cut waste across IaaS, PaaS, and licensing. Enterprises save 30% on average with our pay-for-performance model
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-lg text-[14px] sm:text-[15px] font-semibold tracking-wide px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: "#10DC78",
                color: "#000000",
              }}
            >
             Get Savings Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default LandingPageAI;
