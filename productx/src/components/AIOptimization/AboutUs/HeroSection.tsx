import { useState } from "react";
import { ContactUsAI } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full lg:h-[40vh]  xl:h-[80vh] overflow-hidden flex items-center justify-center  ">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover  "
        style={{ backgroundImage: "url('/AIHero.webp')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl px-4  mt-12 xl:mt-14 text-center text-[#254D70] flex flex-col items-center">
        <H1 className="font-bold leading-tight">
          Pay Only for <br />
          What You Save
        </H1>

        <P className="text-[#141414] mt-6 max-w-xl leading-snug">
          With CloudDIET's performance-based model, you pay a fraction of the
          savings we deliver. Most customers see ROI in the first month.
        </P>

        <ContactUsAI className="mt-8" onClick={() => setModalOpen(true)}>
          Start Saving
        </ContactUsAI>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
