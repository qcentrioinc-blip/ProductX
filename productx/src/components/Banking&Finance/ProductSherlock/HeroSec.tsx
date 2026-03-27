import { Link } from "react-router-dom";
import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";

export default function ContentInfo() {
  return (
    <section className="w-full bg-[#2B68C3] overflow-hidden xl:h-screen relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-0 pt-16 lg:pt-32 pb-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-8 xl:pt-20">

          <H1 className="leading-tight">
           Advanced Anti-Money Laundering Detection
          </H1>

          <P className="text-white/80 max-w-lg md:text-base">
            SHERLOCK monitors transactions and financial messages in real-time to detect suspicious activities and ensure regulatory compliance for financial institutions.
          </P>

          <Link to="/marketplace">
            <ContactUs> Explore SHERLOCK </ContactUs>
          </Link>

          <P className="text-white/80 max-w-sm pt-10 xl:pt-32">
            Risk profiling and KYC verification integrated with core banking systems for end-to-end compliance.
          </P>

        </div>

        {/* BIG IMAGE FOR MD & SMALL SCREENS */}
        <div className="flex justify-center lg:hidden">
          <img
            src="/ProductSherlock/hero.webp"
            alt="big shape"
            className="w-[350px] md:w-[370px]"
          />
        </div>

      </div>


      {/* ================= XL / LG FLOATING IMAGES ================= */}

      {/* LARGE IMAGE */}
      <img
        src="/ProductSherlock/hero.webp"
        alt="big shape"
        className="
        hidden lg:block
        xl:absolute xl:top-16 xl:right-10
        lg:absolute lg:top-20 lg:right-4
        lg:w-[550px] xl:w-[530px]
        z-10
        "
      />

      {/* SMALL TEXT (only lg and xl) */}
      <div
  className="
  hidden lg:block
  xl:absolute xl:bottom-20 xl:left-[46%]
  lg:absolute lg:bottom-16 lg:left-[46%]
  z-20
  bg-[#E6E6E6]
  rounded-xl
  shadow-md
  px-6 py-5
  max-w-[280px]
  relative
  "
>
  {/* Icon Circle */}
  <div className="absolute -top-5 -left-5 w-12 h-12 bg-gray-600 border border-gray-400 rounded-full flex items-center justify-center shadow-md">
    <img className="w-9 h-9"
    src="/ProductSherlock/icon24.svg"
    alt="Create Account"/>
  </div>

  <p className="text-[#2B68C3] text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px]
        font-quicksand
        leading-[120%]">
    Screens SWIFT messages and customer transactions against global watch
    lists automatically.
  </p>
</div>

    </section>
  );
}