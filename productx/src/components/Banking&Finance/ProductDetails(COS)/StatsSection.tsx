import { H2, P } from "../../../styles/Typography";

export default function StatsSection() {
  return (
    <section className="bg-black text-white py-16 px-8 lg:px-20 flex flex-col lg:flex-row md:items-center items-center lg:justify-between justify-center">
      {/* Left content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <H2 className="mb-4">
          Lorem ipsum dolor sit amet
        </H2>
        <P className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip. Ut enim
        </P>
      </div>

      {/* Right stats */}
      <div className="lg:w-1/2 flex justify-between ml-0 lg:ml-10 gap-6">
        <div className="text-center">
          <span className="text-5xl font-bold">100+</span>
          <P className="text-gray-400">quis nostrud</P>
        </div>
        <div className="text-center">
          <span className="text-5xl font-bold">4x</span>
          <P className="text-gray-400">quis nostrud</P>
        </div>
        <div className="text-center">
          <span className="text-5xl font-bold">85%</span>
          <P className="text-gray-400">quis nostrud</P>
        </div>
      </div>
    </section>
  );
}
