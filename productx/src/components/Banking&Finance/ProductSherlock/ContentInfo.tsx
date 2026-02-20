import { Link } from "react-router-dom";
import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";

export default function Sec_4() {
  return (
    <section className="relative w-full xl:h-auto flex flex-col xl:flex-row bg-[#f4f4f4] overflow-hidden">
      {/* Vertical line (desktop only) */}
      <div
        className="hidden xl:block absolute top-0 right-0 h-full z-[50]"
        style={{
          width: "92px",
          // background: "#FFF2AF",
          opacity: 1,
        }}
      ></div>

      {/* Left text section */}
      <div id="our-process" className="w-full xl:w-1/2 flex flex-col justify-center items-start px-6 py-10 md:px-20 xl:pl-[calc((100vw-80rem)/2)] xl:pr-16 md:py-16 bg-[#f4f4f4]">
        <div className="max-w-2xl">
          <H2 className="text-[#2B68C3] mb-6 sm:max-w-xl md:max-w-4xl">
            Lorem ipsum dolor, consectetur adipis
          </H2>
          <P className="mt-4 text-black max-w-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. An officia
            deserunt mollit anim id est laborum.
          </P>

          <div
            style={{ borderTop: "0.5px solid #A80040" }}
            className="w-full max-w-xl my-8 mt-16"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 max-w-xl gap-x-8 gap-y-4 mb-6 md:mb-8 lg:mb-12">
            <div>
              <H4>Lorem ipsum adipis</H4>
              <P className="mt-4">
                Duis aute irure dolor in voluptate velit esse cillum
              </P>
            </div>
            <div>
              <H4>Lorem ipsum adipis</H4>
              <P className="mt-4">
                Duis aute irure dolor in voluptate velit esse cillum
              </P>
            </div>
          </div>

          <Link to="/industries/banking-and-finance/products/sherlock#contact-us">
            <ContactUs>CONTACT US</ContactUs>
          </Link>
        </div>

        {/* Image for <1200px (below contact button) */}
        <div className="xl:hidden mt-10 w-full flex justify-center md:justify-start">
          <img
            src="/ProductDetails4/Sec4_img.png"
            alt="Illustrative"
            className="w-[720px] max-w-full h-auto object-contain md:ml-0"
          />
        </div>
      </div>

      {/* Right image section (desktop only) */}
      <div className="hidden xl:block w-1/2 relative">
        <img
          src="/ProductDetails4/Sec4_img.png"
          alt="Illustrative"
          className="absolute top-20 inset-0 w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
