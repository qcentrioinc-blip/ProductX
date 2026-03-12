import { Link } from "react-router-dom";
import { ContactUs } from "../../../styles/Button";
import { H2, H4, P } from "../../../styles/Typography";

export default function ContentInfo() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-10 xl:px-0">

        {/* Two Column Layout */}
        <div className="relative flex flex-col lg:flex-row gap-16 items-stretch">

          {/* Vertical Divider (Desktop Only) */}
          {/* <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-[#2B68C3] -translate-x-1/2" /> */}

          {/* LEFT SECTION */}
          <div className="flex-1 lg:pr-16">
            <H2 className="text-[#2B68C3] mb-6 max-w-3xl">
              Zero code policy configuration engine
            </H2>

            <P className="mt-4 text-black max-w-3xl">
              Automatically identify connected parties and ultimate beneficial
              owners based on configured thresholds and entity types.
            </P>

            <div
              style={{ borderTop: "0.2px solid #2B68C3" }}
              className="w-full max-w-xl my-14"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mb-10">
              <div>
                <H4>Significant cost savings</H4>
                <P className="mt-4">
                  Over fifty percent reduction in KYC processing costs with automated workflows.
                </P>
              </div>

              <div>
                <H4>Security & Integrations</H4>
                <P className="mt-4">
                  Connect with core systems, screening engines, and data sources securely.
                </P>
              </div>
            </div>

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
              <ContactUs>CONTACT US</ContactUs>
            </Link>
          </div>

         {/* RIGHT SECTION (IMAGE) */}
<div className="flex-1 flex">
  <div className="relative w-full h-full">

    <img
      src="/Img2.webp"
      alt="section visual"
      className="w-full h-full object-cover rounded-lg"
    />

  </div>
</div>

        </div>
      </div>
    </section>
  );
}