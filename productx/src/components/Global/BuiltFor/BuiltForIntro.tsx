import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import { useLocation } from "react-router-dom";

const BuiltForIntro = () => {
  const { pathname } = useLocation();

  type IntroConfig = {
    sectionBg: string;
    headingPrimary: string;
    headingSecondary: string;
    ParaColor: string;
    buttonBg: string;
    buttonText: string;
  };

  const introConfig: Record<string, IntroConfig> = {
    "/industries/ehr-and-pms/built-for": {
      sectionBg: "bg-[#F4F8FF]",
      headingPrimary: "text-[#166D48]",
      headingSecondary: "text-[#166D48]",
      ParaColor: "text-[#141414]",
      buttonBg: "bg-[#F99526]",
      buttonText: "text-[#166D48]",
    },
    "/industries/banking-and-finance/built-for": {
      sectionBg: "bg-[#F2F2F2]",
      headingPrimary: "text-[#2B68C3]",
      headingSecondary: "text-[#2A2A2A]",
      ParaColor: "text-[#141414]",
      buttonBg: "bg-[#141414]",
      buttonText: "text-white",
    },
    "/industries/high-tech/built-for": {
      sectionBg: "bg-black",
      headingPrimary: "text-[#F5F5F5]",
      headingSecondary: "text-[#F99526]",
      ParaColor: "text-[#CCCCCC]",
      buttonBg: "bg-white",
      buttonText: "text-[#8338EC]",
    },
    "/industries/ai-optimization/built-for": {
      sectionBg: "bg-[#FFFFFF]",
      headingPrimary: "text-[#020059]",
      headingSecondary: "text-[#020059]",
      ParaColor: "text-[#141414]",
      buttonBg: "bg-[#0AC276]",
      buttonText: "text-white",
    },
  };

  const config =
    introConfig[pathname] || introConfig["/industries/banking-and-finance"];

  return (
    <section
      className={`relative w-full py-10 lg:py-20 overflow-hidden ${config.sectionBg}`}
    >
      <div className="relative max-w-8xl md:px-0 md:mx-10 px-4 sm:px-8 lg:px-8">
        <div className="max-w-4xl">
          <H1 className="mb-6 md:mb-8 leading-tight">
            <span className={config.headingPrimary}>Sed ut perspiciatis</span>{" "}
            <span className={config.headingSecondary}>
              Unde Seduo ut perspiciatis
            </span>
          </H1>

          <P className={`mb-4 md:mb-6 leading-relaxed max-w-xl md:max-w-3xl ${config.ParaColor}`}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur…  Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur… 
            cillum dolore eu fugiat nulla pariatur… 
          </P>

          <P className={`mb-8 md:mb-10 leading-relaxed max-w-xl md:max-w-3xl ${config.ParaColor}`}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur…  Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur… 
            cillum dolore eu fugiat nulla pariatur… 
          </P>

          <ContactUs
            className={`inline-flex items-center gap-2 ${config.buttonBg} ${config.buttonText}`}
          >
            CONTACT US
          </ContactUs>
        </div>
      </div>
    </section>
  );
};

export default BuiltForIntro;
