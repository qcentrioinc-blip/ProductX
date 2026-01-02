import { H2, P } from "../../../styles/Typography";

const CTA = () => {
  return (
    <section className="px-4 sm:px-6  xl:px-10  pt-12 lg:pt-32">
      <div className="mx-10 max-w-8xl">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_1fr] gap-12 items-center">

          {/* Column 1: Heading */}
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 border border-gray-300 rounded-full text-sm">
              Duis aute
            </span>

            <H2 className="leading-tight  ">
              Lorem ipsum dolor, consecte
            </H2>
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0" />
                <P className="leading-tight pt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                </P>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-10">
            {[3, 4].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0" />
                <P className="leading-tight pt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                </P>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
