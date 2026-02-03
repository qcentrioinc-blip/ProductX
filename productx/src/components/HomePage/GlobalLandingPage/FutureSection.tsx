import { H2, P } from "../../../styles/Typography";
import LazyVideo from "../../Global/LazyVideo";

export default function FutureSection() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-0 lg:pt-14 ">

      {/* TOP-RIGHT SHAPE (SECTION LEVEL) */}
      <img
        src="/LandingPage/shape4.png"
        alt="Abstract Shape"
        className="hidden sm:block absolute top-0 right-0 w-[280px] md:w-[340px] lg:w-[450px] z-10"
      />

      <div className="max-w-8xl mx-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">

        {/* LEFT SIDE */}
        <div>
          {/* Breadcrumb */}
          {/* <div className="flex items-center gap-3 mb-2">
            <span className="h-[3px] w-8 bg-gray-400 rounded-full"></span>
            <H4 className="text-blue-600">Quis autem</H4>
          </div> */}

          {/* Heading */}
          <H2 className="leading-tight">
            Digital Growth for All Sectors
          </H2>

          {/* Illustration */}
          <LazyVideo
            src="/Global-Landing-Page/Globe.mp4"
            autoPlay
            loop
            muted
            className="w-full max-w-3xl"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10 lg:mt-80 ">

          {/* Description */}
          <P className="max-w-xl xl:ml-[-90px]">
            Qnest Global supports companies across banking, manufacturing, healthcare, retail, and services. Our teams design AI, CRM, HRM, and cloud solutions that match industry needs and meet compliance requirements.
          </P>

          {/* Second Text Block */}
          <P className="max-w-2xl xl:ml-20">
            From fast‑growing startups to global enterprises, Qnest Global builds stable, scalable systems. We connect data, automate work, and modernize core platforms so each client can operate with better speed, control, and insight.
          </P>

        </div>
      </div>
    </section>
  );
}
