"use client"

import { H2, P } from "../../../styles/Typography"

export default function SecondSection() {
  return (
    <section className="w-full flex items-center justify-center bg-white">
      {/* Desktop/Laptop */}
      <div className="hidden lg:flex w-full max-w-8xl mx-10 px-10 py-20 items-center justify-center">
        <div className="flex w-full justify-between items-center  gap-20 xl:gap-32">
          <H2
            className="font-bold text-[#2B68C3] m-0 shrink-0 max-w-2xl"
           
          >
        Sed ut perspiciatisSed ut perspiciatisSed ut perspiciatis
          </H2>
          <P
             className="leading-snug"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </P>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden w-full px-6 py-12 md:px-16 md:py-20 flex flex-col items-start justify-center">
        <h2
          className="mb-8 md:mb-10 text-[32px] md:text-[40px] font-bold leading-[110%] md:leading-[120%]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            color: '#F5F5F5'
          }}
        >
          Sed ut perspiciatisSed ut perspiciatisSed ut perspiciatis
        </h2>
        <p
          className="text-[16px] md:text-[20px] leading-[150%] md:leading-[120%]"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            color: '#CCCCCC'
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
      </div>
    </section>
  )
}
