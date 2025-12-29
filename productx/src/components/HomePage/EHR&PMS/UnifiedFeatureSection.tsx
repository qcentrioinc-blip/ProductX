"use client";
import { useState } from "react";
import { Drawer } from "@mui/material";
import { X } from "lucide-react";
import { H2, H3, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";

export default function UnifiedFeatureSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
const [formData, setFormData] = useState({ name: "", email: "", message: "" });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setDrawerOpen(false);
};
  return (
    <div className="relative w-full flex flex-col bg-transparent">

      {/* 1. GRID SECTION (TOP)
          - z-30 ensures it sits above the ShortDesc background.
          - Negative margin-bottom (-mb) pulls the section below it UP.
      */}
      <div className="relative z-30 -mb-[25vh] lg:-mb-[30vh]">
        <section className="w-full text-white">
          <div className="max-w-8xl mx-10 p-10 md:p-16 rounded-md bg-[#156644] shadow-2xl">
            <H2 className="mb-12 text-white">Sed ut perspiciatis Unde Sed ut</H2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              <img src="/EHR-PMS/LandingPage/img1.jpg" className="rounded-md w-full object-cover max-h-[400px]" alt="Feature" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[1, 2, 3, 4].map(i => (
                  <div key={i}>
                    <span className="text-orange-400 text-6xl font-bold leading-none">+</span>
                    <H3 className="text-white mt-2">Duis aute irure</H3>
                    <P className="text-white/80 text-sm">reprehenderit in voluptate velit esse cillum dolore.</P>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. SHORT DESC SECTION (MIDDLE)
          - z-10 makes this the "bottom" layer visually.
          - Padding (py) creates space for the overlaps so text isn't hidden.
      */}
      <section className="relative z-10 bg-[#EEFDD9] pt-[35vh] pb-[40vh] px-6">
        {/* Inner content has z-40 to ensure the button is ALWAYS clickable on top of everything */}
        <div className="max-w-8xl mx-10 flex flex-col gap-8 relative z-40">
          <H2 className="bg-gradient-to-r from-[#166D48] to-[#F99526] bg-clip-text text-transparent leading-tight">
            Sed ut perspiciatis Unde Seduo ut
          </H2>
          <div className="max-w-4xl">
            <P className="text-[#141414]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. 
              Eu fugiat nulla pariatur excepteur sint occaecat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. 
              Eu fugiat nulla pariatur excepteur sint occaecat. 
            </P>
            <br/>

            <P className="text-[#141414]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. 
              Eu fugiat nulla pariatur excepteur sint occaecat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. 
              Eu fugiat nulla pariatur excepteur sint occaecat.
            </P>

          </div>
          
            
            <ContactUs
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrawerOpen(true);
  }}
  className="w-fit transition-transform hover:scale-105 active:scale-95"
>
  BOOK A FREE DEMO
</ContactUs>

        </div>
      </section>

      {/* 3. SPLIT SECTION (BOTTOM)
          - z-30 ensures it sits above the ShortDesc background.
          - Negative margin-top (-mt) pulls this card UP over the section above.
      */}
      <div className="relative z-30 -mt-[25vh] lg:-mt-[30vh]">
        <section className="w-full text-white pb-20">
          <div className="max-w-8xl mx-10 bg-[#156644] rounded-md p-10 md:p-16 shadow-2xl">
            <H2 className="text-white">Sed ut perspiciatis Unde Seduo</H2>
            <P className="mt-4 max-w-2xl text-white/90">Duis aute irure dolor in reprehenderit in voluptate velit.</P>
            
            <div className="mt-12 bg-white rounded-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6">
                <div className="bg-[#E8E0C9] p-6 rounded-md">
                  {/* TITLE BOX */}
               <H3 className="text-[#156644]">
                    Sed ut perspiciatis Unde <br /> Seduo ut
                  </H3>
                </div>
                <div className="bg-[#E8E0C9] p-5 md:p-6 rounded-md flex flex-col gap-6">
                <P className="text-[#156644] text-sm md:text-base leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                </P>

               <div className="w-full h-[1px] bg-[#156644]"></div>


                {/* Button aligned right */}
                <div className="flex justify-end">
                  <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow text-[#156644]">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
</button>

                </div>
              </div>
              </div>
              <img src="/EHR-PMS/LandingPage/img2.png" className="rounded-md w-full h-full object-cover" alt="Dashboard" />
            </div>
          </div>
        </section>
      </div>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: { xs: '100%', sm: '450px' }, backgroundColor: '#F0F9F4' } }}
      >
        <div className="p-10 relative h-full">
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-gray-200  rounded-full"
          >
            <X size={24} />
          </button>
      
          <h2 className="text-4xl font-bold mb-8 mt-10 text-[#166D48]">Book a Demo</h2>
      
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleInputChange}
              className="border-2 p-4 rounded-xl outline-none focus:border-[#166D48]"
            />
      
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleInputChange}
              className="border-2 p-4 rounded-xl outline-none focus:border-[#166D48]"
            />
      
            {/* <input
              name="phone"
              type="tel"
              placeholder="Mobile Number"
              onChange={handleInputChange}
              className="border-2 p-4 rounded-xl outline-none focus:border-[#166D48]"
            /> */}
      
            <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700 text-sm">
          What are you looking for?
        </label>
      
        <select
          name="interest"
          onChange={handleInputChange}
          className="border-2 border-gray-300 p-4 rounded-xl bg-white outline-none focus:border-[#166D48]"
        >
          <option value="">Select an option</option>
          <option value="Product Enquiry">Product Enquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Support">Support</option>
          <option value="Careers">Careers</option>
          <option value="Others">Others</option>
        </select>
      </div>
      
      
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              onChange={handleInputChange}
              className="border-2 p-4 rounded-xl resize-none outline-none focus:border-[#166D48]"
            />
      
            <button
              type="submit"
              className="bg-[#166D48] text-white p-4 rounded-xl font-bold text-lg hover:bg-[#125a3a] transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </Drawer>

    </div>
  );
}