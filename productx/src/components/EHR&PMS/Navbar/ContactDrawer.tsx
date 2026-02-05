import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Drawer } from "@mui/material";
import { H3 } from "../../../styles/Typography";

interface ContactDrawerProps {
  open: boolean;
  onClose: () => void;
}

const INTEREST_OPTIONS = [
  "Product Enquiry",
  "Partnership",
  "Technical Support",
  "Healthcare Solutions",
  "Careers",
  "Other",
];

const ContactDrawer = ({ open, onClose }: ContactDrawerProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: [] as string[],
    message: "",
  });

  const [interestOpen, setInterestOpen] = useState(false);
  const interestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (interestRef.current && !interestRef.current.contains(e.target as Node)) {
        setInterestOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (option: string) => {
    setFormData(prev => ({
      ...prev,
      interest: prev.interest.includes(option)
        ? prev.interest.filter(i => i !== option)
        : [...prev.interest, option],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ zIndex: 10005 }}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 480, md: 560 },
          backgroundColor: "#F0F9F4",
          p: { xs: 3, sm: 4, md: 5 },
        },
      }}
    >
      <div className="relative h-full flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 p-2 rounded-full hover:bg-white/60"
        >
          <X />
        </button>

        <H3 className=" text-[#166D48] mb-6">
          Let’s Connect With Us
        </H3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input name="name" placeholder="Full Name" onChange={handleInputChange}
            className="input" required />

          <input name="email" type="email" placeholder="Email Address"
            onChange={handleInputChange} className="input" required />

          <input name="phone" type="tel" placeholder="Mobile Number"
            onChange={handleInputChange} className="input" />

          {/* Dropdown Multi Select */}
          <div ref={interestRef} className="relative">
            <label className="text-sm font-semibold text-[#166D48] ml-1 mb-2 block">
              What services are you interested in?
            </label>

            <button
              type="button"
              onClick={() => setInterestOpen(!interestOpen)}
              className="chip-input"
            >
              <div className="flex flex-wrap gap-2">
                {formData.interest.length === 0 && (
                  <span className="placeholder">Select services</span>
                )}

                {formData.interest.map(item => (
                  <span key={item} className="chip">
                    {item}
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleInterest(item);
                      }}
                      className="chip-x"
                    >×</span>
                  </span>
                ))}
              </div>

              <svg
                className={`arrow ${interestOpen ? "rotate" : ""}`}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>


            {interestOpen && (
              <div className="dropdown-panel">
                {INTEREST_OPTIONS.map(option => {
                  const active = formData.interest.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleInterest(option)}
                      className={`dropdown-item ${active ? "active" : ""}`}
                    >
                      <span className={`dot ${active ? "dot-active" : ""}`} />
                      {option}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <textarea name="message" rows={3} placeholder="Tell us about your requirements"
            onChange={handleInputChange} className="textarea" />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <style>{`
        .input{padding:16px 22px;border-radius:9999px;border:2px solid #d1d5db;outline:none;}
        .input:focus{border-color:#166D48;}
        .textarea{padding:16px 22px;border-radius:24px;border:2px solid #d1d5db;outline:none;resize:none;}
        .textarea:focus{border-color:#166D48;}
        .dropdown-head{
          width:100%;padding:16px 22px;border-radius:18px;
          background:rgba(255,255,255,.85);border:1px solid rgba(22,109,72,.3);
          display:flex;justify-content:space-between;align-items:center;
          backdrop-filter:blur(12px);transition:.3s;
        }
        .dropdown-head:hover{box-shadow:0 12px 25px rgba(22,109,72,.15);}
        .dropdown-panel{
          position:absolute;z-index:50;width:100%;margin-top:10px;
          background:rgba(255,255,255,.95);border-radius:24px;padding:16px;
          display:grid;grid-template-columns:1fr 1fr;gap:12px;
          box-shadow:0 20px 50px rgba(22,109,72,.25);
        }
        .dropdown-item{
          padding:14px 16px;border-radius:16px;border:1px solid rgba(22,109,72,.3);
          display:flex;align-items:center;gap:10px;font-weight:600;transition:.3s;
        }
        .dropdown-item:hover{box-shadow:0 8px 18px rgba(22,109,72,.15);}
        .active{background:#166D48;color:white;}
        .dot{width:16px;height:16px;border-radius:50%;border:2px solid #166D48;}
        .dot-active{background:white;}
        .submit-btn{
          background:#166D48;color:white;padding:14px;border-radius:14px;font-weight:700;
        }

        .chip-input{
  width:100%;min-height:56px;padding:10px 18px;border-radius:18px;
  border:1px solid rgba(22,109,72,.35);
  background:rgba(255,255,255,.85);
  display:flex;align-items:center;justify-content:space-between;
  backdrop-filter:blur(12px);transition:.3s;
}
.chip-input:hover{box-shadow:0 12px 25px rgba(22,109,72,.15);}
.placeholder{color:#888;font-size:14px;}
.chip{
  background:#166D48;color:white;padding:6px 12px;border-radius:999px;
  display:flex;align-items:center;gap:6px;font-size:13px;
}
.chip-x{cursor:pointer;font-weight:700;opacity:.7;}
.chip-x:hover{opacity:1;}
.arrow{width:18px;height:18px;fill:none;stroke:#166D48;stroke-width:2;}
.rotate{transform:rotate(180deg);}

        .submit-btn:hover{background:#125a3a;}
      `}</style>
    </Drawer>
  );
};

export default ContactDrawer;
