import { Modal, Slide, Backdrop } from "@mui/material";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const LandingPageAI = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  // ---------- FORM HANDLERS ----------

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setModalOpen(false);
    // Reset form
    setFormData({ name: "", phone: "", email: "" });
  };
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

      {/* CONTACT MODAL - SLIDES FROM TOP */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
          }
        }}
      >
        <Slide direction="down" in={modalOpen} timeout={500}>
          <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[90vh] bg-white outline-none rounded-3xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Form Container with Scroll */}
            <div className="h-full overflow-y-auto px-8 py-12 md:px-16 md:py-16 lg:px-24 lg:py-20">
              {/* Header */}
              <div className="mb-12">
                <p
                  className="font-quicksand text-xl mb-12"
                  style={{ color: '#2ECC71' }}
                >
                  TO: QNEST GLOBAL
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* First Line: HEY QNEST!* MY NAME IS [NAME] * */}
                  <div
                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="whitespace-nowrap">HEY <span>QNEST</span>!*</span>
                    <span className="whitespace-nowrap">MY NAME IS</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="[NAME]"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[180px] flex-1 max-w-[400px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    />
                    <span className="text-[#E74C3C]">*</span>
                  </div>

                  {/* Second Line: MY PHONE NUMBER IS [PHONE] * AND MY */}
                  <div
                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="whitespace-nowrap">MY PHONE NUMBER IS</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="[PHONE]"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[200px] flex-1 max-w-[350px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    />
                    <span className="text-[#E74C3C]">*</span>
                    <span className="whitespace-nowrap">AND MY</span>
                  </div>

                  {/* Third Line: EMAIL IS [EMAIL] * SEE YOU SOON */}
                  <div
                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="whitespace-nowrap">EMAIL IS</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="[EMAIL]"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[250px] flex-1 max-w-[450px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    />
                    <span className="text-[#E74C3C]">*</span>
                    <span className="whitespace-nowrap">SEE YOU SOON</span>
                  </div>

                  {/* Send Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center gap-3 hover:bg-gray-900 transition-all group"
                      style={{ fontFamily: "'Arial', sans-serif", letterSpacing: "1px" }}
                    >
                      SEND
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Slide>
      </Modal>
    </>
  );
};

export default LandingPageAI;
