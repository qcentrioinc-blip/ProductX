import { H1, P } from "../../../styles/Typography";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#2B68C3] pt-[85px] pb-[35px] overflow-hidden h-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center lg:items-start gap-4">

        {/* === TOP ROW: Heading + Avatars + Paragraph === */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">

          {/* Left: Heading + Avatars */}
          <div className="flex flex-col flex-1 w-full max-w-[700px]">
            <H1 className="mb-6 leading-tight text-white text-center z-20 lg:text-left">
              Lorem ipsum dolor adipis
            </H1>

            {/* Avatar Group */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white"
                  />
                ))}
              </div>
              <P className="text-white/90 z-20">Trusted by 15k+</P>
            </div>

            {/* Paragraph (Visible for Mobile only) */}
            <div className="mt-6 lg:hidden bg-white/90 rounded-xl p-3 shadow-md z-20  xs:max-w-[350px] items-center
            mx-[1px] lg:mx-0 md:px-5">
              <P className="text-start text-[#2B68C3] leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
              </P>
            </div>
          </div>

          {/* Right Paragraph (Visible for 1024px and above) */}
          <div className="hidden lg:flex flex-1 lg:max-w-md">
            <div className="bg-white/90 z-20 rounded-xl p-6 shadow-md mt-20 xl:mt-22 2xl:mt-25 ">
              <P className="leading-relaxed text-[#2B68C3]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
              </P>
            </div>
          </div>
        </div>
{/* === Decorative yellow blur blobs === */}
<div className="absolute top-[-10px] right-[-150px] w-[450px] h-[450px] bg-[#FED600]  opacity-80 blur-[150px] rounded-full  z-0 pointer-events-none"></div>

<div className="absolute bottom-[-120px] left-[-150px] w-[450px] h-[450px] bg-[#FED600] opacity-80 blur-[150px] rounded-full z-0 pointer-events-none"></div>
        {/* === BOTTOM IMAGE SECTION === */}
        <div className="w-full flex justify-center mt-16 relative">
          <div className="relative w-full max-w-7xl sm:pt-30 lg:pt-20 flex justify-center items-center">

            {/* Shape behind dashboard */}  
            <img
              src="/ProductPage9/shape.png"
              alt="shape preview"
              className="absolute top-[80px] sm:top-[230px] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[100%] lg:w-[100%] md:h-[250%] object-cover z-10 pointer-events-none  max-w-none"
            />

            {/* Dashboard Image */}
            <img
              src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png?width=2400&height=1350"
              alt="Dashboard preview"
              className="w-[99%] sm:w-[75%] md:w-[80%] lg:w-full aspect-[16/9] md:h-[500px] rounded-2xl mt-[-60px] border border-gray-200 relative z-20 transition-all duration-300 hover:shadow-2xl md:top-[-40px]"
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient blob */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 opacity-30 blur-3xl -z-10 pointer-events-none" /> */}
    </section>
  );
};

export default HeroSection;
