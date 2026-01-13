 
import { H2, P } from "../../../styles/Typography";

export default function Timeline() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-16">
      {/* Heading */}
      <div className="max-w-8xl mx-auto text-center mb-10">
        <H2 className="  font-bold text-[#020059] mb-4">
    Unique Visibility 
        </H2>
        <P className=" max-w-3xl mx-auto">
        Our data-rich profiling provides unique visibility into resource configuration and utilization. This supports precise optimization recommendations and enables you to make informed, cost-saving decisions. 
        </P>
      </div>

      {/* Heatmap Image */}
      <div className="relative w-full overflow-x-auto">
        <div className="min-w-[900px] max-w-7xl mx-auto">
          <img
            src="/AIProduct/Timeline.png"
            alt="Timeline"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
