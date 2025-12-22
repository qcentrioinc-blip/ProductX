import { ContactUs } from "../../../styles/Button";
import { H2, H3, P } from "../../../styles/Typography";
import { useLocation } from "react-router-dom";

export default function ImgSec() {
  const { pathname } = useLocation();

  type ThemeKey =
    | "/industries/banking-and-finance/built-for"
    | "/industries/ehr-and-pms/built-for"
    | "/industries/high-tech/built-for"
    | "/industries/ai-optimization/built-for";

  const themeConfig: Record<
    ThemeKey,
    {
      bgImage: string;
      cardBg: string;
      cardText: string;
      paraColor: string;
      borderColor: string;
      buttonText: string;
      buttonBg: string;
    }
  > = {
    "/industries/banking-and-finance/built-for": {
      bgImage: "/BuiltFor/img3.jpg",
      cardBg: "bg-[#1A73E8]",
      cardText: "text-white",
      paraColor: "text-[#CCCCCC]",
      borderColor: "border-white",
      buttonText: "text-white",
      buttonBg: "bg-[#141414]",
    },

    "/industries/ehr-and-pms/built-for": {
      bgImage: "/BuiltFor/img3.jpg",
      cardBg: "bg-[#166D48]",
      cardText: "text-white",
      paraColor: "text-[#CCCCCC]",
      borderColor: "border-white",
      buttonText: "text-black",
      buttonBg: "bg-black",
    },

    "/industries/high-tech/built-for": {
      bgImage: "/BuiltFor/img3.jpg",
      cardBg: "bg-[#F99526]",
      cardText: "text-[#F5F5F5]",
      paraColor: "text-[#CCCCCC]",
      borderColor: "border-black",
      buttonText: "text-white",
      buttonBg: "bg-black",
    },

    "/industries/ai-optimization/built-for": {
      bgImage: "/BuiltFor/img3.jpg",
      cardBg: "bg-[#5551FF]",
      cardText: "text-white",
      paraColor: "text-[#CCCCCC]",
      borderColor: "border-white",
      buttonText: "text-black",
      buttonBg: "bg-[#141414]",
    },
  };

  const matchedKey = (Object.keys(themeConfig) as ThemeKey[]).find((key) =>
    pathname.startsWith(key)
  );

  const theme =
    themeConfig[matchedKey as ThemeKey] ||
    themeConfig["/industries/banking-and-finance/built-for"];

  return (
    <section
      className={`relative w-full lg:h-[55vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center lg:block`}
      style={{ backgroundImage: `url(${theme.bgImage})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 h-full">
        {/* LEFT TEXT */}
        <div className="flex flex-col h-full  py-10 xl:pt-32">
          <div className="w-full lg:w-2/3">
            <H2 className="leading-tight text-[#FAFAFA] max-w-4xl">
              Sed ut perspici atis Unde
              Seduo Sed ut pers
            </H2>
          </div>
        </div>
      </div>

      {/* FLOATING CARD RIGHT */}
      <div
        className="relative w-full px-6 md:px-12 pb-12
                    lg:absolute lg:bottom-0 lg:right-0 lg:pb-0 lg:px-0 lg:w-auto
                    lg:max-w-[90rem] lg:mx-auto "
      >
        <div className="flex justify-start lg:justify-end ">
          <div
            className={`
              ${theme.cardBg} ${theme.cardText}
              rounded-md shadow-xl p-6 md:p-10 w-full lg:max-w-md
              lg:rounded-b-none lg:rounded-tr-none
              border-t-[10px] border-l-[10px] ${theme.borderColor}
            `}
          >
            <H3 className="mb-4">UndeSed ut</H3>

            <P className={`mb-6 ${theme.paraColor}`}>
              UndeSed ut perspiciatis UndeSed ut perspiciatis
              UndeSed ut perspiciatis UndeSed ut perspicia
            </P>

            {/* Corrected ContactUs button */}
            
            <ContactUs
              className={`inline-flex items-center gap-2 ${theme.buttonBg} ${theme.buttonText}`}
            >
              CONTACT US
            </ContactUs>
          </div>
        </div>
      </div>
    </section>
  );
}
