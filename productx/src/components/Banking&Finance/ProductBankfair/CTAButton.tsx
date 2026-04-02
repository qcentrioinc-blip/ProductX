interface CTAButtonProps {
  label: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = () => {
  return (
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
      <ContactUs className="hidden xl:block gap-2 whitespace-nowrap shrink-0">
        Contact Us
      </ContactUs>
    </Link>
  );
};

export default function Section() {
  return (
    <section className="bg-[#F4F5FC] py-10">
      <div className="max-w-7xl mx-auto xl:px-0 px-6">
        <div className="grid xl:grid-cols-2 gap-10 items-center">

          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row justify-between sm:space-x-8 space-y-6 sm:space-y-0 min-h-[420px]">
            <div className="flex flex-col justify-between">
              <div>
                <button className="border text-[#2B68C3] border-[#141414] font-quicksand text-[18px] xl:text-[22px] px-6 py-2 rounded-full mb-6">
                  Duis jhgfgb aute
                </button>

                <p className="text-[16px] font-quicksand mb-8 max-w-full xl:max-w-xs">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                </p>
              </div>

              <div>
                <H4 className="text-2xl font-semibold mb-4">
                  Gain Instant ain <br className="lg:hidden block" /> In Operational
                </H4>
                <CTAButton label="CONTACT US" />
              </div>
            </div>

            <img
              src=""
              alt="img"
              className="w-full sm:w-[300px] sm:h-full xl:h-[500px] h-[220px] bg-gray-200 object-cover rounded-xl flex-shrink-0"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-start items-start">
            <H1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Itaque earum <br />
              <span className="text-[#2B68C3]">tenetur a sapiente</span>
            </H1>

            <P className="mb-8 max-w-3xl xl:max-w-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>

            {/* ACCORDION */}
            <div className="space-y-4 w-full">
              <AccordionItem
                title="Gain Instant ain In Operational"
                content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                defaultOpen
              />
              <AccordionItem
                title="Gain Instant ain In Operational"
                content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// AccordionItem.tsx
import { useState } from "react";
import { H1, H4, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<Props> = ({
  title,
  content,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl p-5 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex font-bricolage text-[18px] xl:text-[24px] justify-between items-center text-left font-medium"
      >
        <span className="pr-4">{title}</span>
        <span className="text-xl flex-shrink-0">{open ? "-" : "+"}</span>
      </button>

      {open && (
        <P className="mt-3 text-sm">
          {content}
        </P>
      )}
    </div>
  );
};