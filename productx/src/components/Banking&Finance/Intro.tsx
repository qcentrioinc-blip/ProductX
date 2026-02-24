import { ContactUs } from "../../styles/Button";
import { H2 } from "../../styles/Typography";


const Intro = () => {

  return (
    <section className="relative w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-10 overflow-hidden">
      {/* Decorative Images */}
      {/* Vector Line - Top Right */}
      <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 lg:w-56   pointer-events-none">
        <img
          src="/VectorLine.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Star - Bottom Right */}
      {/* <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-0 md:right-0 w-16 sm:w-20 md:w-24 lg:w-32  pointer-events-none md:pb-10">
        <img
          src="/Star.png"
          alt=""
          className="w-full h-auto"
        />
      </div> */}

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 xl:px-0">
        <div className=" max-w-lg lg:max-w-3xl">
          {/* Heading */}
          <H2 className="mb-6 md:mb-8 leading-tight">
            <span className="text-[#2B68C3]">Complete banking technology stack </span>{' '}
            <span className="text-[#666666]">for modern institutions</span>
          </H2>
        </div>

        {/* First Paragraph */}
        <div className="max-w-4xl xl:pr-20">
          <p className="text-sm sm:text-base md:text-lg text-[#141414] mb-4 md:mb-6  leading-relaxed ">
            Qnest Banking & Finance is our comprehensive suite of solutions built for financial institutions worldwide. We combine core banking, loan management, payments, compliance, and lending products into one integrated technology ecosystem. Our platforms are designed by industry practitioners with direct experience in managing AML operations and financial crime risk.
          </p>

          {/* Second Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#141414] mb-8 md:mb-10 leading-relaxed  ">
            We offer specialized products including Bankfair for core banking, PAGO for payments, Sherlock for AML compliance, and Remitree for cross-border remittances. Each solution addresses specific operational challenges while integrating seamlessly with your existing infrastructure. This complete stack helps institutions digitize processes, automate compliance, and scale operations efficiently.
          </p>

          {/* Contact Button */}
          <ContactUs className="inline-flex items-center gap-2">
            View All

          </ContactUs>
        </div>
      </div>
    </section>
  );
};

export default Intro;