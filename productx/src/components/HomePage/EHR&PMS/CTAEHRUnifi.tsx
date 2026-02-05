import React from "react";
import { H2, P } from "../../../styles/Typography";
import ContactDrawer from "../../EHR&PMS/Navbar/ContactDrawer";

const CTAEHRUnifi: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Content */}
          <div className="flex flex-col justify-center bg-[#008280] px-6 py-16 text-white sm:px-10 lg:px-16">
            <span className="mb-4 font-quicksand text-md">
              Generate any kind of
            </span>

            <H2 className="mb-6 leading-tight">
              Sed ut perspiciatis
              <br />
              Unde Seduo utSed
            </H2>

            <P className="mb-8 max-w-xl leading-relaxed text-white/80">
              Generate any kind of website — business, portfolio, blog, or
              store — using Readdy’s AI website builder. Start with text,
              Generate any kind of website — business, portfolio, blog, or
              store — using Readdy’s AI website builder. Start with text.
            </P>

            <button
              onClick={() => setDrawerOpen(true)}
              className="
                group flex items-center justify-center
                w-52 h-[48px]
                rounded-[8px]
                border border-white
                font-quicksand font-bold text-[16px]
                bg-[#008280] text-white
                transition-all duration-300
                hover:bg-white hover:text-black
              "
            >
              CONTACT US
              <span className="ml-3 relative w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[420px] lg:min-h-full">
            <img
              src="/EHRIcons/CTAEHR.webp"
              alt="EHR landscape"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </div>
      </section>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default CTAEHRUnifi;
