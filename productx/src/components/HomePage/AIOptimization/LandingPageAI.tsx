import { ArrowRight} from "lucide-react";
import { useState } from "react";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";

const LandingPageAI = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${"/AIOptimization/LandingBackground.png"})`,
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
            {/* Main Heading */}
            <h1
              className="max-w-5xl mb-6"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                // Responsive but keeps 72px max on desktop
                fontSize: "clamp(32px, 7vw, 72px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "#0AC276",
                }}
              >
                Lorem ipsum dolor sit <br />
              </span>
              <span style={{ color: "#FFFFFF" }}>amet, consectetur</span>
            </h1>

            {/* Description */}
            <p
              className="max-w-3xl mb-10 px-1 sm:px-0"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
              sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,
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
              GET STARTED
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
