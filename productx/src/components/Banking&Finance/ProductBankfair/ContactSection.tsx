"use client";
 
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { H1} from "../../../styles/Typography";
 
const ContactSection: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
 
  const options = ["Product Demo", "Consulting", "Partnership", "Other"];
 
  const toggleOption = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i: string) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };
 
  // ⭐ REFS FOR OUTSIDE CLICK DETECTION
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
 
  // ⭐ CLOSE DROPDOWN WHEN CLICKING ANYWHERE ON THE FORM (outside the dropdown itself)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!open) return;
 
      // If user clicks inside dropdown → do nothing
      if (dropdownRef.current?.contains(e.target as Node)) return;
 
      // If user clicks inside the button → do nothing
      if (
        formRef.current &&
        formRef.current.querySelector("#dropdown-btn")?.contains(e.target as Node)
      ) {
        return;
      }
 
      // Otherwise → close dropdown
      setOpen(false);
    };
 
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
 
  return (
    <section className="relative w-full h-[100vh] overflow-hidden py-20">
      {/* BLUE BACKGROUND */}
      <div className="relative bg-[#2361C9] h-[75vh] w-full py-20 overflow-hidden">
        <img
          src="/ContactSection/Shape1.png"
          alt="Shape"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        />
 
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
          <H1 className="text-white leading-tight max-w-[620px] mt-44">
            Shaping the Future
             Across B and F.
          </H1>
        </div>
      </div>
 
      {/* WHITE FORM CARD */}
      <div
        ref={formRef}
        className="
          absolute top-5 right-10
          h-[95vh] w-[550px]
          bg-white rounded-4xl shadow-2xl
          mx-6 lg:mx-10
          z-20
        "
      >
        <form className="flex flex-col gap-5 h-full py-24 px-12 justify-between">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-400 rounded-full px-5 py-4 text-[18px] outline-none"
          />
 
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your mail"
            className="w-full border border-gray-400 rounded-full px-5 py-4 text-[18px] outline-none"
          />
 
          {/* MULTI SELECT DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="dropdown-btn"
              type="button"
              onClick={() => setOpen(!open)}
              className="w-full border border-gray-400 rounded-full px-5 py-4 text-[18px] flex justify-between items-center"
            >
              <span
                className={`${
                  selected.length === 0 ? "text-gray-600" : "text-black"
                }`}
              >
                {selected.length === 0
                  ? "What are you looking for?"
                  : selected.join(", ")}
              </span>
 
              <ChevronDown
                size={20}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
 
            {open && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-xl rounded-xl border border-gray-100 z-30">
                {options.map((item: string) => (
                  <label
                    key={item}
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3 text-[18px]"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(item)}
                      onChange={() => toggleOption(item)}
                      className="w-5 h-5 cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            )}
          </div>
 
          {/* Message */}
          <textarea
            placeholder="Message (Optional)"
            className="w-full border border-gray-400 rounded-2xl px-5 py-4 h-28 text-[15px] outline-none resize-none"
          />
 
          {/* Submit */}
          <button
            className="
              bg-black text-white rounded-xl px-8 py-3
              flex items-center gap-3 w-fit
              hover:opacity-80 transition
              mt-3
            "
          >
            SUBMIT <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
};
 
export default ContactSection;
 
 