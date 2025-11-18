import { H2, P } from "../../../styles/Typography";

const Partnership = () => {
  const items = ["lorem", "lorem", "lorem", "lorem", "lorem"];

  return (
    <div className="w-full bg-black pt-16 md:pt-32 pb-8">
      <div className="max-w-[872px] w-full text-center mx-auto relative overflow-hidden px-4">
        {/* <h2 className="text-white mb-6 font-bold text-2xl sm:text-3xl md:text-4xl">
          Whom we work with
        </h2> */}
        <H2 className="text-white">
          Whom we work with
        </H2>
          
        <div className="relative overflow-hidden">
          {/* fade overlays */}
          <div className="absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* marquee container */}
          <div className="flex text-white animate-marquee whitespace-nowrap">
            {/* 1st set */}
            {items.map((text, i) => (
              <div
                key={i}
                className="flex-none w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-24 flex items-center justify-center"
              >
                <P className="text-white">
                  {text}
                </P>
              </div>
            ))}
            {/* 2nd set (duplicate for seamless loop) */}
            {items.map((text, i) => (
              <div
                key={`dup-${i}`}
                className="flex-none w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-24 flex items-center justify-center"
              >
                <P>
                  {text}
                </P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
