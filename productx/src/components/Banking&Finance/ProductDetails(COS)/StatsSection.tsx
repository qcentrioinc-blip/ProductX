import { H2, P } from "../../../styles/Typography";
import CountUp from "../CountUp"

export default function StatsSection() {
  return (
    <section className="bg-black text-white py-20 xl:py-24 px-8 lg:px-20 flex flex-col lg:flex-row md:items-center items-center lg:justify-between justify-center">
      
      {/* Left content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <H2 className="mb-4">Lorem ipsum dolor sit amet</H2>
        <P className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation.
        </P>
      </div>

      {/* Right stats */}
      <div className="xl:w-1/3 flex justify-between ml-0 gap-6">

        {/* 100+ */}
        <div className="text-center">
          <span className="text-5xl font-bold flex items-center justify-center">
            <CountUp
              from={0}
              to={100}
              direction="up"
              duration={1}
              className="count-up-text"
            />
            +
          </span>
          <P className="text-gray-400 mt-4">quis nostrud</P>
        </div>

        {/* 4x */}
        <div className="text-center">
          <span className="text-5xl font-bold flex items-center justify-center">
            <CountUp
              from={0}
              to={4}
              direction="up"
              duration={1}
              className="count-up-text"
            />
            x
          </span>
          <P className="text-gray-400 mt-4">quis nostrud</P>
        </div>

        {/* 85% */}
        <div className="text-center">
          <span className="text-5xl font-bold flex items-center justify-center">
            <CountUp
              from={0}
              to={85}
              direction="up"
              duration={1}
              className="count-up-text"
            />
            %
          </span>
          <P className="text-gray-400 mt-4">quis nostrud</P>
        </div>

      </div>
    </section>
  );
}
