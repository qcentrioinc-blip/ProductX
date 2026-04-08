import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import { H1 } from "../../../styles/Typography";

export const prefetchLandingPageAIImages = () => {
  const images = [
    "/AI-CloudFinOps/Features/LandingBackground.webp",
    "/cloud.webp"
  ];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

const LandingPageAI = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    prefetchLandingPageAIImages();
  }, []);

  return (
    <>
      <div className="relative w-full dark:bg-black">
        {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
        <div
          className="relative w-full h-[60vh] md:h-[56vh] xl:h-screen bg-cover bg-center "
          style={{
            backgroundImage: `url(${"/AI-CloudFinOps/Features/LandingBackground.webp"})`,
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10" />
          {/* Floating Cloud Icons */}
          <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
            <img
              src="/cloud.webp"
              className="absolute top-[30%] left-0 md:top-[45%] md:left-[8%] w-16 md:w-20 animate-cloud-float-slow  "
              alt="cloud"
            />

            <img
              src="/cloud.webp"
              className="absolute bottom-[25%] md:bottom-[20%] right-[10%] w-20 md:w-24 animate-cloud-float  "
              alt="cloud"
            />

            <img
              src="/cloud.webp"
              className="absolute bottom-[18%] left-[10%] md:left-[25%] w-14 md:w-20 animate-cloud-float-fast "
              alt="cloud"
            />

            <img
              src="/cloud.webp"
              className="absolute bottom-[10%] md:bottom-[15%] right-[30%] w-20 md:w-20 animate-cloud-float "
              alt="cloud"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center xl:top-12">
            {/* Main Heading */}
            <H1
              className="max-w-6xl mb-6"

            >
              <span
                className="text-[#254D70]"
              >
                Smarter Azure Cost <br />
              </span>
              <span className="text-[#254D70]">Optimization With AI </span>
            </H1>

            {/* Description */}
            <p
              className="max-w-4xl mb-6 px-1 sm:px-0"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 500,
                // Smaller on mobile, 24px on desktop
                fontSize: "clamp(16px, 4.5vw, 24px)",
                lineHeight: "130%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#141414",
              }}
            >
              Reduce cloud spend by up to 30% using AI-powered analysis, engineering expertise, and actionable optimization insights.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-lg text-[14px] sm:text-[15px] font-semibold tracking-wide px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: "#000000",
                color: "#ffffff",
              }}
            >
              Start Saving
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