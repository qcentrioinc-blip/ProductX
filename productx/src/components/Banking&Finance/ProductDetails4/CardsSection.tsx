import { H2, H4, P } from "../../../styles/Typography";

export default function CardsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-8 lg:px-20">
      {/* Title */}
      <H2 className="text-center mb-10">
        Lorem ipsum dolor , consectetur adipis
      </H2>

      {/* Cards */}
      <div className="flex flex-wrap justify-start md:justify-center gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-gray-200 rounded-lg flex flex-col p-6">
          <div className="w-10 h-10 bg-white rounded-full mb-4"></div>
          <H4 className="font-bold text-lg mt-4">Duis aute irure dolor in</H4>
          <P className="text-sm text-gray-700 mt-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </div>

        {/* Card 2 */}
        <div className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-gray-200 rounded-lg flex flex-col p-6">
          <div className="w-10 h-10 bg-white rounded-full mb-4"></div>
          <H4 className="font-bold text-lg mt-4">Duis aute irure dolor in</H4>
          <P className="text-sm text-gray-700 mt-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </div>

        {/* Card 3 */}
        <div className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-gray-200 rounded-lg flex flex-col p-6">
          <div className="w-10 h-10 bg-white rounded-full mb-4"></div>
          <H4 className="font-bold text-lg mt-4">Duis aute irure dolor in</H4>
          <P className="text-sm text-gray-700 mt-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </div>
      </div>
    </section>
  );
}
