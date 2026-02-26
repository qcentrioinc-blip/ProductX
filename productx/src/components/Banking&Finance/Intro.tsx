import { ContactUs } from "../../styles/Button";
import { H2, P } from "../../styles/Typography";

const Intro = () => {
  return (
    <section className="w-full bg-gray-50  py-6 xl:py-10">
      <div className="max-w-8xl mx-auto xl:mx-18 px-4 sm:px-8 lg:px-10 xl:px-0">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <H2 className="mb-6 leading-tight">
              <span className="text-[#2B68C3]">
                Complete banking technology stack{" "}
              </span>
              <span className="text-[#666666]">
                for modern institutions
              </span>
            </H2>

            <P className="text-base md:text-lg text-[#141414] mb-6 leading-relaxed">
              Qnest Banking & Finance is our comprehensive suite of solutions built for financial institutions worldwide. We combine core banking, loan management, payments, compliance, and lending products into one integrated technology ecosystem.
            </P>

            <P className="text-base md:text-lg text-[#141414] mb-8 leading-relaxed">
              We offer specialized products including Bankfair, PAGO, Sherlock, and Remitree. Each solution integrates seamlessly with your infrastructure.
            </P>

            <ContactUs className="inline-flex items-center gap-2">
              View All
            </ContactUs>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex ">
            <img
              src="/ImageSection.png"
              alt="Banking Features"
              className="w-full  lg:max-w-xl h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;