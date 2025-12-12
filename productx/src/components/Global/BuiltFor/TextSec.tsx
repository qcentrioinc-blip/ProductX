import { H2, H4, P } from "../../../styles/Typography";

export default function TextSec() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-8xl mx-10 ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <H4 className="mb-3">
              UndeSed
            </H4>

            <H2 className="leading-snug">
              UndeSed ut perspiciatis
            </H2>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <P className="leading-relaxed">
              UndeSed ut perspiciatis UndeSed ut perspiciatis 
              UndeSed ut perspiciatis UndeSed ut perspiciatis
            </P>
          </div>

        </div>
      </div>
    </section>
  );
}
