import { H2, H4, P } from "../../../styles/Typography";

export default function FutureSection() {
  return (
    <section className="relative w-full bg-[#F5F5F5] py-10 xl:py-0 xl:pt-14 ">

      {/* TOP-RIGHT SHAPE (SECTION LEVEL) */}
      <img
        src="/LandingPage/shape4.jpg"
        alt="Abstract Shape"
        className="absolute top-0 right-0 w-[280px] md:w-[340px] lg:w-[450px] z-10"
      />

      <div className="max-w-8xl mx-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">

        {/* LEFT SIDE */}
        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[3px] w-8 bg-gray-400 rounded-full"></span>
            <H4 className="text-blue-600">Quis autem</H4>
          </div>

          {/* Heading */}
          <H2 className="leading-tight">
            Shaping the Future
            Every Sector.
          </H2>

          {/* Illustration */}
          <img
            src="/LandingPage/globe.png"
            alt="People walking on globe"
            className="w-full max-w-xl"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10 xl:mt-40">

          {/* Description */}
          <P className="max-w-xl xl:ml-[-90px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            occaecat cupidatat non proident,cfewrce ewcde gergdgge egeehhrev gehscer.
          </P>

          {/* Second Text Block */}
          <P className="max-w-2xl xl:ml-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </P>

        </div>
      </div>
    </section>
  );
}
