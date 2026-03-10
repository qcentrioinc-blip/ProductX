import { H2 } from "../../../styles/Typography"

export default function ThreeCards() {
  return (
    <div className="w-full flex items-center justify-center bg-white">
      {/* Desktop Layout - Responsive */}
      <div className="hidden lg:flex w-full max-w-8xl mx-10 px-10 py-10 flex-col gap-8">
        <H2>Lorem ipsum dolor , consectetur adipis</H2>

        <div className="flex w-full gap-8 h-auto xl:h-[458px]">
          {/* Left Card */}
          <div
            className="flex-1 xl:w-[685px]  border-2 border-[#666666] rounded-lg  p-8 flex flex-col gap-4 relative"
          >
            <div className="w-12 h-12 bg-[#2B68C3] rounded-full shrink-0" />
            <div className="flex flex-col gap-2">
              <h2
                className="font-bold text-2xl text-[#2A2A2A] leading-[140%]"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Duis aute irure dolor in
              </h2>
              <p
                className="text-lg text-[#333333] leading-[150%]"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore
              </p>
            </div>

            <div
              className="mt-auto w-full h-[200px] xl:h-[227px] bg-[#666666] rounded-t-lg mx-auto"
            />
          </div>

          {/* Right Cards */}
          <div className="flex-1   flex flex-col gap-4">
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-lg  border-2 border-[#666666] py-6  px-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-[#2B68C3] rounded-full shrink-0" />
                <div className="flex flex-col gap-2">
                  <h2
                    className="font-bold text-2xl text-[#2A2A2A] leading-[140%]"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Duis aute irure dolor in
                  </h2>
                  <p
                    className="text-lg text-[#333333] leading-[150%]"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Responsive */}
      <div className="lg:hidden w-full px-6 py-12 flex flex-col items-center gap-8 bg-[#F3F3F3]">
        <h1 className="font-bold text-[32px] text-[#2A2A2A] leading-[120%] text-center max-w-full" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Lorem ipsum dolor , consectetur adipis
        </h1>

        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="w-full max-w-md rounded-lg bg-[#E4F0FF] p-6 flex flex-col gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-full shrink-0" />
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl text-[#2A2A2A]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Duis aute irure dolor in
              </h2>
              <p className="text-base text-[#333333]" style={{ fontFamily: "'Quicksand', sans-serif", lineHeight: '150%' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>
            {idx === 0 && (
              <div className="mt-4 w-full h-[200px] bg-white rounded-t-lg mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
