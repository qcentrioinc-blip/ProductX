import { H2 } from "../../../styles/Typography";
const LogoBox = ({ title }: { title: string }) => (
  <div className="flex-shrink-0 bg-transparent border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm px-16 py-8">
    <span className="text-gray-400 font-semibold text-xl whitespace-nowrap">{title}</span>
  </div>
);

export const Logos = () => {
  const titles = ["Logo 1", "Logo 2", "Logo 3", "Logo 4"];

  return (
    <div className="bg-transparent py-20 max-w-8xl mx-10 xl:px-10  overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
        
        <H2 className="text-[#04531A] leading-tight text-center md:text-left shrink-0 z-20">
          Duis aute
        </H2>

        {/* Outer Container */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          
          {/* Moving Track */}
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {/* We render the same list twice inside this div */}
            <div className="flex gap-10 pr-10">
              {titles.map((t, i) => <LogoBox key={`set1-${i}`} title={t} />)}
            </div>
            <div className="flex gap-10 pr-10">
              {titles.map((t, i) => <LogoBox key={`set2-${i}`} title={t} />)}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly half of the track's width */
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          /* 10s is fast, 20s is slow. Current: 10s for 'little fast' */
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};