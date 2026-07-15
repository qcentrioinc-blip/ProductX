import { useState, useEffect } from "react";
import { ContactUsAI } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";

export const prefetchAboutUsHeroImage = () => {
  const img = new Image();
  img.src = '/AIHero.webp';
};

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    prefetchAboutUsHeroImage();
  }, []);

  return (
    <section className="relative w-full lg:h-[40vh] xl:h-[80vh] overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover  "
        style={{ backgroundImage: "url('/Pricing.webp')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl px-[40px] md:px-[60px] xl:px-[160px]  mt-20 xl:mt-20 text-center text-[#00AA72] flex flex-col items-center">
        <H1 className="font-bold leading-tight">
          Pay Only for <br />
          What You Save
        </H1>

        <P className="text-[#141414] mt-6 max-w-xl leading-snug">
          With CloudDIET's performance-based model, you pay a fraction of the
          savings we deliver. Most customers see ROI in the first month.
        </P>

        <ContactUsAI className="my-8" onClick={() => setModalOpen(true)}>
          Start Saving
        </ContactUsAI>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
