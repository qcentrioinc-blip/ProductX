import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";

export default function Sec_4() {
  return (
    <section className="w-full flex justify-center items-center py-8 md:py-12">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row bg-white mx-auto">
        {/* Left text section */}
        <div className="flex-1 w-full flex flex-col justify-center px-6 py-6 md:px-8 md:py-8">
          <H2 className="text-3xl md:text-4xl lg:text-5xl leading-snug">
            Lorem ipsum dolor,<br />
            consectetur adipis
          </H2>
          <P className="mt-4 text-base md:text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </P>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <H4 className="text-lg md:text-xl">Lorem ipsum adipis</H4>
              <P className="mt-2 text-sm md:text-base">
                Duis aute irure dolor in voluptate velit esse cillum
              </P>
            </div>
            <div>
              <H4 className="text-lg md:text-xl">Lorem ipsum adipis</H4>
              <P className="mt-2 text-sm md:text-base mb-6 md:mb-8 lg:mb-12">
                Duis aute irure dolor in voluptate velit esse cillum
              </P>
            </div>
          </div>
          <ContactUs>CONTACT US</ContactUs>
        </div>

        {/* Right image section */}
        <div className="flex-1 w-full flex items-center justify-center mt-6 md:mt-0">
          <img
            src="/ProductDetails4/Sec4_img.jpg"
            alt="Illustrative"
            className="w-[624px] h-[560px] max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
