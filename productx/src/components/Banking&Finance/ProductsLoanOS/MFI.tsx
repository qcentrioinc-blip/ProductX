import { H4, P } from "../../../styles/Typography"

const CircleIcon = () => (
  <div className="w-14 h-14 rounded-full bg-[#2B68C3] flex items-center justify-center text-white shadow-md">
    ⏳
  </div>
)

const Card = () => (
  <div className="bg-[#F8F8F8] rounded-xl px-4 py-5 w-full text-center shadow">
    <H4 className="font-semibold text-lg my-2 leading-snug">
      Slow Customer<br />Approval Decisions
    </H4>
    <P className="text-sm text-gray-600">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    </P>
  </div>
)

const MFI = () => {
  return (
    <div className="w-full bg-[#EEF3FA] relative overflow-hidden">

      {/* DOTTED BG */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2B68C3 3px, transparent 3px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto py-20 px-6 xl:px-0 relative">

        {/* ── DESKTOP (lg+): original 3-col layout ── */}
        <div className="hidden lg:block">

          {/* TOP BORDER BRACKET */}
          <div className="absolute left-32 right-32 top-6 h-[450px] border-t-4 border-l-4 border-[#464F5D] rounded-tl-[48px] rounded-tr-[48px] border-r-4" />

          <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 items-end relative mt-10">

            {/* LEFT CARD */}
            <div className="relative flex justify-end">
              <div className="absolute left-[34%] -top-10">
                <CircleIcon />
              </div>
              <div className="w-full max-w-lg">
                <Card />
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="flex justify-center relative">
              <img
                src="/LOS/LOSFlow.webp"
                alt="LOS Flow"
                className="w-full"
              />
            </div>

            {/* RIGHT CARD */}
            <div className="relative flex justify-start">
              <div className="absolute left-[50%] -top-10">
                <CircleIcon />
              </div>
              <div className="w-full max-w-xl">
                <Card />
              </div>
            </div>

          </div>
        </div>

        {/* ── MOBILE / MD: card → card → image → card → card ── */}
        <div className="flex flex-col gap-6 max-w-lg justify-center  mx-auto items-center lg:hidden">

          {/* Card 1 */}
          <div className="relative pt-10">
            <div className="absolute left-1/2 -translate-x-1/2 -top-0">
              <CircleIcon />
            </div>
            <Card />
          </div>

           

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/LOS/LOSFlow.webp"
              alt="LOS Flow"
              className="w-full max-w-md"
            />
          </div>
 

          {/* Card 4 */}
          <div className="relative  pt-10">
            <div className="absolute left-1/2 -translate-x-1/2 -top-0">
              <CircleIcon />
            </div>
            <Card />
          </div>

        </div>

      </div>
    </div>
  )
}

export default MFI