import { Link } from "react-router-dom";
import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";

export default function ContentInfo() {
  return (
    <section className="w-full bg-[#2B68C3] overflow-hidden xl:h-screen relative">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-32 pb-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-8 xl:pt-20">

          <H1 className="leading-tight">
            Lorem ipsum dolor
            consectetur adipis
          </H1>

          <P className="text-white/80 max-w-lg md:text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia
          </P>

          <Link to="/marketplace">
            <ContactUs> Explore </ContactUs>
          </Link>

          <P className="text-white/80 max-w-sm pt-10 xl:pt-38">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>

        </div>

        {/* BIG IMAGE FOR MD & SMALL SCREENS */}
        <div className="flex justify-center lg:hidden">
          <img
            src="/images/big-box.png"
            alt="big shape"
            className="w-[350px] md:w-[420px]"
          />
        </div>

      </div>


      {/* ================= XL / LG FLOATING IMAGES ================= */}

      {/* LARGE IMAGE */}
      <img
        src="/images/big-box.png"
        alt="big shape"
        className="
        hidden lg:block
        xl:absolute xl:top-16 xl:right-10
        lg:absolute lg:top-20 lg:right-4
        lg:w-[480px] xl:w-[600px]
        z-10
        "
      />

      {/* SMALL IMAGE (only lg and xl) */}
      <img
        src="/images/small-box.png"
        alt="small shape"
        className="
        hidden lg:block
        xl:absolute xl:bottom-20 xl:left-[42%]
        lg:absolute lg:bottom-16 lg:left-[46%]
        lg:w-[140px] xl:w-[180px]
        z-20
        "
      />

    </section>
  );
}