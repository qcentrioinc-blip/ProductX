import { useEffect, useRef } from "react";
import { H2,   H4, P  } from "../../../styles/Typography";

const logos = [
  "/CompanyLogo/Dell.png",
    "/CompanyLogo/GoogleCloud.png",
    "/CompanyLogo/Infosys.png",
    "/CompanyLogo/Oracle.png",
   "/CompanyLogo/AWS.png",
    "/CompanyLogo/Deloitte.png",
];

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const translateX = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? -1 : 1;

      translateX.current += direction * 1.5;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${translateX.current}px)`;
      }

      lastScrollY.current = currentScrollY;
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="w-full  overflow-hidden pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto xl:px-10   flex flex-col text-center">
         
<div className="relative mb-20 ">
  <div
    className="
      mx-auto
      max-w-7xl
      rounded-3xl
      bg-transparent
      backdrop-blur-xs    border border-gray-100
      shadow-xl
      px-6 py-8
    "
  >
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
      {/* Card 1 */}
      <div className="text-center">
        <H4 className="inline-block px-5 py-3 mb-3 rounded-full bg-white  text-sm font-semibold text-black">
          Lorem ipsum
        </H4>
        <P className="text-white  xl:pl-12 font-medium">
          We onboard users from <br />
          <span className="font-semibold">126+ countries</span>
        </P>
      </div>

      {/* Card 2 */}
      <div className="text-center">
       <H4 className="inline-block  px-5 py-3 mb-3 rounded-full bg-white  text-sm font-semibold text-black">
          Lorem ipsum
        </H4>
        <P className="text-white  xl:pl-12 font-medium">
          We onboard users from <br />
          <span className="font-semibold">126+ countries</span>
        </P>
      </div>

      {/* Card 3 */}
      <div className="text-center">
        <H4 className="inline-block mb-3 rounded-full bg-white  px-5 py-3 text-sm font-semibold text-black">
          Lorem ipsum
        </H4>
        <P className="text-white xl:pl-12  font-medium">
          We onboard users from <br />
          <span className="font-semibold">126+ countries</span>
        </P>
      </div>
    </div>
  </div>
</div>

      <H2 className="  font-semibold text-[#F5F5F5]">
          {/* text-[#020059] */}
          We partnered with
        </H2>

        <div className="relative mt-10 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 transition-transform duration-300 ease-out"
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  min-w-[200px] h-[80px]
                  sm:min-w-[160px] sm:h-[90px]
                  md:min-w-[180px] md:h-[100px]
                  lg:min-w-[200px] lg:h-[110px]
                  xl:min-w-[250px] xl:h-[100px]
                  bg-gray-200 rounded-md
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
