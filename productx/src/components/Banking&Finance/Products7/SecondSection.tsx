"use client"

import { H2, P } from "../../../styles/Typography"

/**
 * new SecondSection component that matches the black two-column reference
 */
export default function SecondSection() {
  return (
    <section className="w-full bg-black text-white border-b border-white/10">
      <div
        className="
          mx-auto max-w-[1400px]
          px-4 sm:px-6 md:px-8 lg:px-16
          py-12 sm:py-16 md:py-20 lg:py-24
        "
      >
        <div
          className="
            flex flex-col lg:flex-row lg:items-center lg:justify-between
            gap-8 sm:gap-10 md:gap-16 lg:gap-24
            min-h-0 lg:min-h-[380px]
          "
        >
          {/* Left: Tight multi-line headline */}
          <div className="w-full lg:basis-[50%] lg:max-w-[720px]">
            <H2
              className="
                font-bold font-sans
                text-2xl sm:text-3xl md:text-4xl lg:text-[44px]
                leading-[1.1] sm:leading-[1.08] lg:leading-[1.05]
                text-white
              "
            >
              <span>Sed ut perspiciatisSed ut</span>
              <br className="hidden lg:block" />
              <span>perspiciatisSed ut</span>
              <br className="hidden lg:block" />
              <span>perspiciatis</span>
            </H2>
          </div>

          {/* Right: Long paragraph, light gray and vertically centered */}
          <div className="w-full lg:basis-[50%] lg:max-w-[620px]">
            <P
              className="
                text-sm sm:text-base md:text-lg lg:text-[20px]
                leading-[1.6] sm:leading-[1.55] lg:leading-[1.5]
                text-neutral-300
              "
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </P>
          </div>
        </div>
      </div>
    </section>
  )
}
