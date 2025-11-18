"use client";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { H1, P } from "../../../styles/Typography";
// import { ContactUs } from "../../../styles/Button";

export default function ContactHero() {
  return (
    <section className="relative w-full pt-40 bg-[#0A0A0A] text-white  overflow-hidden">
      {/* decorative glows */}
      <div className="
              absolute 
              top-[-200px] sm:top-[-200px] lg:top-[-300px]
              left-[10px] sm:left-[20px] lg:left-[30px]
              w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px]
              h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]
              bg-[#F99526] 
              opacity-50 
              blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]
              rounded-full 
              z-0 
              pointer-events-none
            ">
      </div>
      <div
            className="
              absolute 
              top-[200px]
              right-[-200px] sm:right-[-300px] lg:right-[-300px]
              w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px]
              h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]
              bg-[#F99526]
              opacity-50 sm:opacity-65 lg:opacity-70
              blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]
              rounded-full 
              z-0 
              pointer-events-none
            "
          ></div>

      <div className="max-w-8xl mx-10 px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT: Form */}
          <div className="md:w-1/2">
            <form className="max-w-lg">
              {/* Name */}
              <label className="block text-xl font-extrabold font-bricolage ">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gray-300 outline-none py-3 text-white placeholder-gray-500 mb-6"
                placeholder=""
                aria-label="Name"
              />

              {/* Email */}
              <label className="block text-xl font-extrabold font-bricolage ">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gray-300 outline-none py-3 text-white placeholder-gray-500 mb-6"
                placeholder=""
                aria-label="Email"
              />

              {/* Purpose (select) */}
              <label className="block text-xl font-extrabold font-bricolage ">Purpose</label>
              <div className="relative mb-6">
                <select
                  className="appearance-none w-full bg-transparent border-0 border-b border-gray-600 focus:border-gray-300 outline-none py-3 pr-8 text-black"
                  aria-label="Purpose"
                >
                  <option value="">Select purpose</option>
                  <option>General enquiry</option>
                  <option>Apply for role</option>
                  <option>Partnership</option>
                </select>
                {/* caret */}
                <svg
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Mobile Number */}
              <label className="block text-xl font-extrabold font-bricolage ">Mobile Number</label>
              <input
                type="tel"
                className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gray-300 outline-none py-3 text-white placeholder-gray-500 mb-6"
                placeholder=""
                aria-label="Mobile Number"
              />

              {/* Message */}
              <label className="block text-xl font-extrabold font-bricolage ">Message</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-0 border-b border-gray-600 focus:border-gray-300 outline-none  text-white placeholder-gray-500 mb-2 resize-none"
                placeholder=""
                aria-label="Message"
              />

              {/* CTA */}
              {/* <button
                type="button"
                className="inline-flex items-center gap-3 bg-[#F99526] text-black font-bold px-6 py-4 rounded-md hover:bg-[#e98413] transition"
                aria-label="Contact Us"
              >
                <span className="text-sm">CONTACT US</span>
                <ArrowUpRight className="w-4 h-4" />
              </button> */}
              {/* <ContactUs className=" text-black hover:bg-[#e98413] transition">CONTACT US</ContactUs> */}
              <button
                className="
                    group
                    flex items-center justify-center
                    w-[180px] h-[48px]
                    px-[10px] py-[12px]
                    rounded-[8px]
                    font-bricolage font-bold
                    text-[16px]
                    border-2 border-[#141414]
                    bg-[#F99526] text-[#141414]
                    shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
                    transition-all duration-300 ease-in-out
                    hover:bg-[#e98413] hover:text-white
                "
                >CONTACT US
                <span className="flex items-center gap-2">
                
                    <span className="relative flex items-center h-[15px] w-[15px]">
                    {/* Default icon */}
                    <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                    {/* Hover icon */}
                    <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </span>
                </span>
            </button>
            </form>
          </div>

          {/* RIGHT: Heading + copy */}
          <div className="md:w-1/2 ">
            <div>
              <H1 className=" text-white">
                Sed ut <br />
                perspiciatis{" "}
                <span className=" text-[#F99526] ">unde</span>{" "}
                <span className=" text-[#F99526]  block md:inline">
                  omnis iste natus
                </span>
              </H1>

              <P className="mt-6 text-gray-300 max-w-md">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum. occaecat cupidatat non.
              </P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
