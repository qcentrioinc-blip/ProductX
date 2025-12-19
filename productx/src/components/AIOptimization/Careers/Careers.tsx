"use client";

import { H1 } from "../../../styles/Typography";


export default function Careers() {
  return (
    <section className="w-full h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">

      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(50% 50% at 50% 50%, rgba(255, 249, 243, 0.5) 0%, rgba(200, 255, 215, 0.5) 100%)]">
        <img
          src="/AI/Careers/bg_img.jpg"
          alt="Radial Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative text-center max-w-3xl mx-auto">
        
        
        {/* Main Heading */}
        <H1 className="leading-snug text-[#0AC276] mb-10">
          Lorum ipsum dolor sit <br className="hidden sm:block" />
          <span className="text-white">amet, consecutor </span>
        </H1>

        {/* Button */}
                <button
         
          className="
            inline-flex 
            items-center 
            justify-center 
            px-6 sm:px-8 
            py-3 
            bg-[#0AC276] 
            text-black 
            rounded-lg 
            shadow-lg 
            hover:bg-green-600 
            transition 
            duration-300 
            transform 
            hover:scale-[1.02]
          "
        >
          SUBMIT APPLICATION
          <svg
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>

      </div>

    </section>
  );
}
