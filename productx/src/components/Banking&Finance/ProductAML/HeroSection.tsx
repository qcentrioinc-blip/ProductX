import { Link } from "react-router-dom";
import { H1, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-100 py-16 relative overflow-hidden">
      <div className="max-w-full  lg:pt-24 px-6 mx-auto xl:px-20">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <H1 className="text-[#2B68C3] leading-tight">
            Lorem ipsum dolor, <br />
            consectetur adipis
          </H1>
        </div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] bg-[#2B68C3] rounded-2xl overflow-hidden min-h-[520px]">

          {/* Left Image */}
          <div className="relative w-full h-full">
            <img
              src="/AML/image73.png"
              alt="hero image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between p-4  lg:p-6 xl:p-16 text-white">

            {/* White floating card */}
            <div className="bg-gray-100 text-[#141414] p-6 rounded-xl shadow-md ">
              <P className="leading-relaxed max-w-2xl">
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia
              </P>

              <Link
                                         to="#contact-us"
                                         onClick={(e) => {
                                             const el = document.getElementById("contact-us");
                                             if (el) {
                                                 e.preventDefault();
                                                 el.scrollIntoView({ behavior: "smooth" });
                                             }
                                         }}
                                     >
                         <ContactUs className="w-full mt-4 flex items-center justify-center gap-2 text-black">
                           CONTACT US
                         </ContactUs>
                         </Link>
            </div>

            {/* Bullet points */}
            <div className="space-y-10 mt-10">

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0 mt-1" />
                <P className="text-[#CCCCCC] max-w-full leading-normal">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia
                </P>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0 mt-1" />
                <P className="text-[#CCCCCC] max-w-[420px] leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia
                </P>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Exclude decoration */}
      <div className="hidden lg:block absolute  right-0 top-[27%] xl:right-8 xl:top-52">
        <img
          src="/AML/Exclude.svg"
          alt="exclude shape"
          className="w-[120px] xl:w-[200px]"
        />
      </div>
    </section>
  );
}