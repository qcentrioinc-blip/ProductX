"use client"

import { H2, P } from "../../../styles/Typography"

export default function SecondSection() {
  return (
    <section className="w-full flex items-center justify-center bg-white">
      {/* Desktop/Laptop */}
      <div className="hidden xl:flex w-full max-w-8xl mx-10 px-10 py-10 items-center justify-center">
        <div className="flex w-full justify-between items-center   gap-10">
          <H2
            className="font-bold text-[#2B68C3] m-0 shrink-0 max-w-2xl"
           
          >
   LOS for Retail and Corporate Lending Operations 
          </H2>
          <P
             className="leading-snug "
          >
            LOS digitizes the entire loan application and approval process with features like e-loan applications, pre-approved offers, and document configuration. The system includes e-verification, OCR capabilities for scanning government IDs, and configurable score parameters. Multi-level approval workflows ensure proper authorization while group lending support and customer management tools enhance operational efficiency for financial institutions.
          </P>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="xl:hidden w-full px-6 py-6  md:px-16 md:py-20 flex flex-col items-start justify-center">
        <H2 className="text-[#2B68C3]"
        >
          LOS for Retail and Corporate Lending Operations 
        </H2>
        <P className=" pt-4 max-w-full"
        >
         LOS digitizes the entire loan application and approval process with features like e-loan applications, pre-approved offers, and document configuration. The system includes e-verification, OCR capabilities for scanning government IDs, and configurable score parameters. Multi-level approval workflows ensure proper authorization while group lending support and customer management tools enhance operational efficiency for financial institutions.
        </P>
      </div>
    </section>
  )
}
