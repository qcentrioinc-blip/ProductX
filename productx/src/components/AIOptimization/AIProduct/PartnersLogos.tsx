import { H2 } from "../../../styles/Typography";

const logos = [
  "/CompanyLogo/Dell.png",
  "/CompanyLogo/GoogleCloud.png",
  "/CompanyLogo/Infosys.png",
  "/CompanyLogo/Oracle.png",
  "/CompanyLogo/AWS.png",
  "/CompanyLogo/Deloitte.png",
];

export default function PartnersLogos() {
  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-8xl mx-auto xl:px-10 text-center">

        <H2 className="font-semibold text-[#F5F5F5]">
          We partnered with
        </H2>

        <div className="relative mt-14 overflow-hidden">
          <div className="flex gap-10">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  min-w-[200px] h-[90px]
                  sm:min-w-[160px] sm:h-[90px]
                  md:min-w-[180px] md:h-[100px]
                  lg:min-w-[200px] lg:h-[110px]
                  xl:min-w-[250px] xl:h-[110px]
                  bg-white/10 backdrop-blur-lg
                  border border-white/20
                  rounded-xl shadow-xl
                "
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
