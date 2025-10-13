import { H1, P } from "../../../styles/Typography";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#d4b5f8] to-[#f3d9f5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center lg:items-start gap-12">

        {/* === TOP ROW: Heading + Avatars + Paragraph === */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">

          {/* Left: Heading + Avatars */}
          <div className="flex flex-col flex-1">
            <H1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Lorem ipsum dolor,<br /> consectetur adipis
            </H1>

            {/* Avatar Group */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white"
                  />
                ))}
              </div>
              <P className="z-20">Trusted by 15k+</P>
            </div>

            {/* Mobile view: Right paragraph moves below avatars */}
            <P className="mt-6 lg:hidden leading-relaxed z-20">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </P>
          </div>

          {/* Right: Paragraph (Desktop + Tablet 1000px+) */}
          <div className="hidden lg:flex flex-1 lg:max-w-md">
            <P className="mt-40 leading-relaxed z-20">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </P>
          </div>
        </div>

        {/* === BOTTOM IMAGE SECTION === */}
        <div className="w-full flex justify-center mt-12 pt-8 relative">
          <div className="relative w-full max-w-6xl">

            {/* Shape Image behind dashboard */}
            <img
              src="/ProductPage9/shape.png"
              alt="shape preview"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180%] h-auto max-w-none object-contain z-10 pointer-events-none"
            />

            {/* Dashboard Image */}
            <img
              src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png?width=2400&height=1350"
              alt="Dashboard preview"
              className="w-full rounded-2xl mt-[-100px] shadow-xl border border-gray-200 relative z-20 transition-shadow duration-300 hover:shadow-2xl"
            />

          </div>
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 opacity-30 blur-3xl -z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
