import { Plus } from "lucide-react";
import { ContactUs } from "../../../styles/Button";
import { H2, H3, P } from "../../../styles/Typography";

export default function CTAEHR() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-8xl xl:mx-10 px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 items-start">
        {/* Left CTA */}
        <div className="space-y-4">
          <H2 className="text-[#008280]">
            Sed ut perspiciatis
          </H2>
          <ContactUs>Contact Us</ContactUs>
          
        </div>

        {/* Feature 1 */}
        <div className="flex  flex-col gap-4">
          <div className="flex-shrink-0   flex items-start justify-start text-orange-400">
            <Plus size={44} />
          </div>
          <div>
            <H3>Duis aute irure</H3>
           <P className="mt-1 max-w-md leading-relaxed">
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
            </P>
          </div>
        </div>

        {/* Feature 2 */}
         <div className="flex  flex-col gap-4">
          <div className="flex-shrink-0   flex items-start justify-start text-orange-400">
            <Plus size={44} />
          </div>
          <div>
            <H3>Duis aute irure</H3>
           <P className="mt-1 max-w-md leading-relaxed">
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su
            </P>
          </div>
        </div>
      </div>
    </section>
  );
}
