import { ArrowUpRight, X } from "lucide-react";
import { ContactUs } from "../../../styles/Button";
import { H2, P } from "../../../styles/Typography";
import { Drawer } from "@mui/material";
import { useState } from "react";

const ShortDesc = () => {


  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
    message: "",
  });

  // ---------- FORM HANDLERS ----------

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setDrawerOpen(false);
  };

  return (
    <>
      <section
        className="
        w-full 
        bg-[#EEFDD9]
        py-50
         md:py-16
        px-4 sm:px-6 lg:px-20
        overflow-hidden
      "
      >
        {/* Content Wrapper */}
        <div
          className="
        
          max-w-8xl
          mx-10
          flex
          flex-col
         py-88
          
          gap-8
        "
        >
          {/* Title */}
          <H2
            className="
            
            leading-[1.1]
            bg-gradient-to-r from-[#166D48] to-[#F99526]
            bg-clip-text text-transparent
          "
          >
            Sed ut perspiciatis Unde Seduo ut
          </H2>

          {/* Description 1 */}
          <P
            className="
            leading-relaxed
            text-[#141414]
          "

          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            <br />
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. occaecat cupidatat non.
          </P>

          {/* Description 2 */}
          <P
            className="
            leading-relaxed
            text-[#141414]
          "

          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            <br />
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. occaecat cupidatat non.
          </P>

          {/* Contact Button */}


          <button
            onClick={() => setDrawerOpen(true)}
            className="w-fit z-50"
            type="button"
          >
            <ContactUs>BOOK A FREE DEMO</ContactUs>
          </button>

        </div>
      </section>

      {/* MATERIAL UI DRAWER - CONTACT FORM */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "90%", sm: "480px", md: "550px" },
            backgroundColor: "#F0F9F4",
            padding: { xs: "24px", sm: "32px", md: "40px" },
          },
        }}
      >
        <div className="h-full flex flex-col">
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-white/50 rounded-full transition-all"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          <h2
            className="text-4xl md:text-5xl font-bold mb-8 mt-4"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              color: "#166D48",
              lineHeight: "1.2",
            }}
          >
            Qertyu oiuyt rfvu poiy bal
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 
                bg-white outline-none focus:border-[#166D48] transition-colors
                text-gray-800 placeholder:text-gray-500"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "16px",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 
                bg-white outline-none focus:border-[#166D48] transition-colors
                text-gray-800 placeholder:text-gray-500"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "16px",
              }}
            />

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Resume"
                readOnly
                value={formData.resume ? formData.resume.name : ""}
                className="w-full px-6 py-4 rounded-full border-2 border-gray-300 
                  bg-white outline-none text-gray-800 placeholder:text-gray-500"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "16px",
                }}
              />
              <label
                htmlFor="resume-upload"
                className="absolute right-3 top-1/2 -translate-y-1/2 
                  px-6 py-2 bg-[#166D48] text-white rounded-lg cursor-pointer
                  hover:bg-[#145a3a] transition-all font-semibold"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "14px",
                }}
              >
                Upload
              </label>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about yourself"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              required
              className="w-full px-6 py-4 rounded-3xl border-2 border-gray-300 
                bg-white outline-none focus:border-[#166D48] transition-colors
                text-gray-800 placeholder:text-gray-500 resize-none"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "16px",
              }}
            />

            <button
              type="submit"
              className="w-fit px-8 py-4 bg-black text-white rounded-xl 
                font-bold text-sm flex items-center gap-3 hover:bg-gray-900 
                transition-all group"
              style={{
                fontFamily: "'Arial', sans-serif",
                letterSpacing: "0.5px",
              }}
            >
              CONTACT US
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </Drawer>
    </>
  );
};

export default ShortDesc;
