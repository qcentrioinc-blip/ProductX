import { H4, P } from "../../../styles/Typography";

export default function GlassyFeatures() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-8xl mx-auto xl:px-10 flex justify-center">
        <div
          className="
            w-full max-w-7xl
            rounded-3xl
            bg-transparent
            backdrop-blur-xs
            border border-gray-100
            shadow-xl
            px-6 py-8
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">

            <div className="text-center">
              <H4 className="inline-block px-5 py-3 mb-3 rounded-full bg-white text-sm font-semibold text-black">
                AI-Powered Profiling
              </H4>
              <P className="mx-auto font-medium text-white">
                Analyzes resource configuration,<br /> usage, and costs.
              </P>
            </div>

            <div className="text-center">
              <H4 className="inline-block px-5 py-3 mb-3 rounded-full bg-white text-sm font-semibold text-black">
                Expert Recommendations
              </H4>
              <P className="mx-auto font-medium text-white">
                Actionable insights from <br /> cloud engineering veterans.
              </P>
            </div>

            <div className="text-center">
              <H4 className="inline-block px-5 py-3 mb-3 rounded-full bg-white text-sm font-semibold text-black">
                Guaranteed Savings
              </H4>
              <P className="mx-auto font-medium text-white">
                Pay only a share <br /> of realized savings.
              </P>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
