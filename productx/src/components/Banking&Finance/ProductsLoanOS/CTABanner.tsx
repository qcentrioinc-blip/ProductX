import { H2, P } from "../../../styles/Typography";

export default function CTABanner() {
  return (
    <section className="w-full flex justify-center  h-screen py-10 bg-white">
      <div className="relative w-full  bg-[#2B68C3] overflow-hidden">

        {/* hollow circle */}
        <div className="absolute -left-40 top-[-100px] w-[600px] h-[600px] border-[80px] border-[#4F8CE7] rounded-full opacity-70"></div>

        <div className="relative flex flex-col lg:flex-row items-center">

          {/* LEFT SECTION */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center py-20">

            {/* curved dark rectangle */}
            <img
              src="/Rectangleban.svg"
              alt=""
              className="absolute left-0 top-0 h-full w-[520px] object-contain z-0"
            />

            <div className="relative z-10 text-white max-w-[340px] ml-10">

              <H2 className="text-3xl lg:text-4xl leading-tight font-bold">
                Sed ut pers <br /> piciatis Sed ut
              </H2>

              <P className="mt-5 text-sm opacity-90">
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat
              </P>

              <div className="mt-6 border-t border-white/40 w-40"></div>

              <button className="mt-6 flex items-center gap-4 text-white font-semibold">
                <span className="w-10 h-10 rounded-full bg-white"></span>
                Sed ut pers
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full  h-[550px]">

            <img
              src="/bannerLOAN.png"
              alt="Team"
              className="absolute inset-0 w-full h-full object-cover"
            />

          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="absolute bottom-0 right-0 flex items-center w-full lg:w-[55%]">

          <div className="bg-[#193763] w-16 h-16 rounded-full absolute -top-8 left-6"></div>

          <div className="bg-white w-full py-5 pl-24 pr-6">
            <P className="text-gray-800 font-semibold text-lg">
              Sed ut perspiciatis Sed ut
            </P>
          </div>

        </div>

      </div>
    </section>
  );
}