import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Modal, Slide, Backdrop } from "@mui/material";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate submit success
    setIsSubmitted(true);

    // Reset controlled inputs
    setFormData({ name: "", phone: "", email: "" });

    // Optional auto-reset after 3s
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: "rgba(0,0,0,0.55)" },
        },
      }}
      sx={{ zIndex: 10002 }}
    >
      <Slide direction="down" in={open} timeout={500}>
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[83vw] h-[85vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl">

          {/* 🔹 BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/bg_image.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* 🔹 FOREGROUND */}
          <div className="relative z-10 h-full flex items-center justify-center">

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 md:top-8 md:right-10 p-2 rounded-full hover:bg-black/10 transition z-20"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* 🔹 FORM CARD */}
            <div className="w-full max-w-[1200px] bg-white rounded-2xl px-6 md:px-12 lg:px-16 py-10 overflow-y-auto scrollbar-hide">

              {/* Header */}
              <p
                className="text-3xl md:text-4xl font-bold mb-12"
                style={{
                  color: "#0079FF",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                TO: QNEST GLOBAL
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-10" autoComplete="off">

                {/* INPUTS — HIDE AFTER SUBMIT */}
                {!isSubmitted && (
                  <>
                    {/* LINE 1 */}
                    <div
                      className="flex flex-wrap items-baseline gap-3 text-xl md:text-3xl font-bold"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      <span>HEY QNEST!*</span>
                      <span>MY NAME IS</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="[NAME]"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="flex-1 max-w-[620px] border-b-2 border-[#0079FF] bg-transparent outline-none placeholder:text-gray-300 px-2 pb-1"
                      />
                      <span className="text-[#0079FF]">*</span>
                    </div>

                    {/* LINE 2 */}
                    <div
                      className="flex flex-wrap items-baseline gap-3 text-xl md:text-3xl font-bold"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      <span>MY PHONE NUMBER IS</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="[PHONE]"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="flex-1 max-w-[620px] border-b-2 border-[#0079FF] bg-transparent outline-none placeholder:text-gray-300 px-2 pb-1"
                      />
                      <span className="text-[#0079FF]">*</span>
                      <span>AND MY</span>
                    </div>

                    {/* LINE 3 */}
                    <div
                      className="flex flex-wrap items-baseline gap-3 text-xl md:text-3xl font-bold"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      <span>EMAIL IS</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="[EMAIL]"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="flex-1 max-w-[620px] border-b-2 border-[#0079FF] bg-transparent outline-none placeholder:text-gray-300 px-2 pb-1"
                      />
                      <span className="text-[#0079FF]">*</span>
                      <span>SEE YOU SOON</span>
                    </div>
                  </>
                )}

                {/* SUCCESS MESSAGE */}
                {isSubmitted && (
                  <div className="py-14 text-center text-2xl md:text-3xl font-bold text-green-600">
                    Thank you! <br />
                    We’ll get back to you shortly.
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`
                    group flex items-center justify-center w-52 h-[64px]
                    rounded-2xl font-bold text-lg text-white transition-all
                    ${isSubmitted ? "bg-green-600 cursor-default" : "bg-black hover:shadow-2xl"}
                    active:scale-[0.98]
                  `}
                >
                  {isSubmitted ? (
                    <span>Submitted Successfully</span>
                  ) : (
                    <>
                      <span className="mr-2">Send Message</span>
                      <ArrowUpRight
                        size={22}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

export default ContactModal;
