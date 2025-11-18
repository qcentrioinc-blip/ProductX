import { H2, H4, P } from "../../../styles/Typography";



export default function CardsSection() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-white pt-10 pb-20 px-6 sm:px-8 lg:px-28">
      {/* Inline style for hiding scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      {/* Top Navigation */}
      <nav className="w-full overflow-x-auto scrollbar-hide mb-16">
        <div className="flex items-center xl:justify-start justify-center gap-6 sm:gap-8 lg:gap-12 min-w-max px-2">
  {["Overview", "Benefits", "Use Cases", "Our Process", "Blogs"].map(
    (label) => {
      // const isBlog = label === "Blogs";

      return (
        <a
          key={label}
          href={ `#${label.toLowerCase().replace(" ", "-")}`}
          className="text-gray-800 hover:text-black relative transition-colors duration-300 whitespace-nowrap
                     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full"
        >
          {label}
        </a>
      );
    }
  )}
</div>

      </nav>

      {/* Title */}
      <H2 className="text-center mb-16">
        Lorem ipsum dolor , consectetur adipis
      </H2>

      {/* Cards */}
      <div className="flex flex-wrap justify-start md:justify-center gap-6 w-full max-w-8xl">
        {/* Card 1 */}
        <div className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-[#E6E6E6] rounded-lg flex flex-col p-6 px-10">
          <div className="w-12 h-12 bg-white rounded-full mb-4"></div>
          <H4 className="mt-4">Duis aute irure dolor in</H4>
          <P className="font-bold text-gray-800 mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </div>

        {/* Card 2 */}
        <div className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-[#E6E6E6] rounded-lg flex flex-col p-6 px-10">
          <div className="w-12 h-12 bg-white rounded-full mb-4"></div>
          <H4 className="mt-4">Duis aute irure dolor in</H4>
          <P className="font-bold text-gray-800 mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </div>

        {/* Card 3 */}
        <div className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:w-[505px] h-[217px] bg-[#E6E6E6] rounded-lg flex flex-col p-6 px-10">
          <div className="w-12 h-12 bg-white rounded-full mb-4"></div>
          <H4 className="font-bold text-lg mt-4">Duis aute irure dolor in</H4>
          <P className="font-bold text-gray-800 mt-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </P>
        </div>
      </div>
    </section>
  );
}
