'use client';

import React from 'react';
import { H1, P } from '../../../styles/Typography';
 

const AdminHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative floating elements */}
     
      
      {/* Main content container */}
      <div className="container mx-10 px-6 py-12 lg:pt-20 ">
        <div className="grid lg:grid-cols-2 gap-4 items-center min-h-[80vh]">
          
          {/* Left content */}
          <div className="space-y-8 z-10 max-w-3xl">
            {/* Main heading with blue accent circle */}
            <div className="relative ">
<H1 className="text-[#008280] max-w-none w-full">
  Complete Control Over Clinic Operations
</H1>

                 
            </div>

            {/* Description text with emoji */}
            <div className="flex items-start gap-2 max-w-2xl tracking-wide">
              <P className="font-medium ">
               Streamline scheduling, billing, and reporting from one powerful dashboard. Simplify daily tasks and boost efficiency.
              </P>
              
            </div>

            {/* CTA Button */}
            <div>
              <button
        className="
          group
          flex items-center justify-center
          w-auto h-[48px]
          px-[24px] py-[12px]
          rounded-[8px]
          border border-black
          font-quicksand font-bold text-[16px]
          bg-white text-black
        
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-[#008280] hover:text-white
         "
      >
     Get Started
        <span className="flex items-center gap-2">
         
          <span className="relative flex items-center w-[20px] h-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              <path d="M7 7h10v10" />
              <path d="M7 17L17 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </span>
      </button>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative z-10">
          
              {/* Image container - leave space for the actual image */}
              <div className="relative w-full  pt-10 rounded-3xl overflow-hidden  flex items-center justify-center">
                <img
                  src="/EHR-PMS/Admin/AdminImage.png"
                  alt="Admin Hero"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              
                 
              </div>

              {/* Decorative elements around image */}
               
            
          </div>

        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default AdminHeroSection;