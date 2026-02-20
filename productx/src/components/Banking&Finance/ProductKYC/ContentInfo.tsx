import { Link } from "react-router-dom";
import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";

export default function Sec_4() {
  return (
    <section className="relative w-full xl:h-auto bg-white py-10 overflow-hidden">
      {/* Vertical line (desktop only) */}
      {/* <div
        className="hidden xl:block absolute top-0 right-0 h-full z-[50]"
        style={{
          width: "92px",
          background: "#FFF2AF",
          opacity: 1,
        }}
      ></div> */}

      {/* Main content container */}
<div className="w-full flex flex-col xl:flex-row xl:items-stretch relative z-10">
        {/* Left text section */}
        <div id="our-process" className="flex-1 w-full flex flex-col justify-center items-center xl:items-start px-6 py-6 md:px-20 xl:mx-10 md:py-8">
          <H2 className="text-[#2B68C3] mb-6 sm:max-w-xl md:max-w-xl">
            Value, purpose, and security
          </H2>
          <P className="mt-4 text-black max-w-xl">
            Diligent delivers measurable business outcomes while ensuring data protection and regulatory compliance across all due diligence operations.
          </P>

          <div
            style={{ borderTop: "0.5px solid #A80040" }}
            className="w-xl my-8 mt-16"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 max-w-xl gap-x-8 gap-y-4 mb-6 md:mb-8 lg:mb-12">
            <div>
              <H4>Significant cost savings</H4>
              <P className="mt-4">
                Over fifty percent reduction in KYC processing costs with automated workflows. 
              </P>
            </div>
            <div>
              <H4> Secure API integrations </H4>
              <P className="mt-4">
                 Connect with core systems, screening engines, and data sources securely. 
              </P>
            </div>
          </div>

          <Link to="/industries/banking-and-finance/products/sherlock#contact-us">
  <ContactUs>View Platform</ContactUs>
</Link>

          {/* Image for <1200px (below contact button) */}
          <div className="xl:hidden mt-10 w-full flex justify-center md:justify-center">
            <img
              src="/ProductDetails4/Sec4_img.png"
              alt="Illustrative"
              className="w-[720px] max-w-full h-auto object-contain md:ml-0"
            />
          </div>
        </div>

        {/* Right image section (desktop only) */}
        <div className="hidden xl:flex flex-1 w-full items-stretch justify-end mb-6 md:mt-0 relative z-[10]">
          <img
            src="/ProductDetails4/Sec4_img.png"
            alt="Illustrative"
            className="w-full h-full object-cover relative z-[10]"
          />
        </div>
      </div>
    </section>
  );
}
