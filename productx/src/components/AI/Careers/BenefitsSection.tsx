import { H1 } from "../../../styles/Typography";

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-8xl mx-10 grid grid-cols-1 md:grid-cols-3 items-center text-center">

        {/* Left Text */}
        <H1 className="text-[#020059] leading-tight">
          Upto 20 <br /> Days
        </H1>

        {/* Center Image Stack */}
        <div className="relative flex justify-center items-center h-[350px] mt-10 md:mt-0">

          {/* Image 3 (bottom-most) */}
          <img
            src="/AI/Careers/img3.jpg"
            alt="img3"
            className="absolute w-100 h-100 object-cover rounded-md shadow-md translate-y-10 opacity-80"
          />

          {/* Image 2 (middle, only 10% visible) */}
          <img
            src="/AI/Careers/img2.jpg"
            alt="img2"
            className="absolute w-100 h-100 object-cover rounded-md shadow-md translate-y-5 opacity-90"
            style={{ clipPath: "inset(90% 0 0 0)" }} // only top 10% visible
          />

          {/* Image 1 (main image) */}
          <img
            src="/AI/Careers/img1.jpg"
            alt="img1"
            className="relative w-100 h-100 object-cover rounded-md shadow-lg z-10"
          />
        </div>

        {/* Right Text */}
        <H1 className="text-[#020059] leading-tight">
          Paid time <br /> off
        </H1>

      </div>
    </section>
  );
}
