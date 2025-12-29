import { H2, H3, P } from "../../../styles/Typography";

export default function SplitSection() {
  return (
    <section className="w-full  text-white">
      
      {/* OUTER WRAPPER WITH RESPONSIVE PADDING */}
      <div className="max-w-8xl mx-10 bg-[#156644] rounded-md absolute top-[125vh] md:top-[75vh] lg:top-[65vh] xl:top-[120vh] px-6 md:px-12 lg:px-20 py-10">

        {/* TOP HEADING */}
        <H2 className="leading-tight ">
          Sed ut perspiciatis Unde Seduo
        </H2>

        <P className="mt-4 max-w-2xl  leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
        </P>

        {/* MAIN WHITE CONTAINER */}
        <div className="mt-10 md:mt-14 bg-white rounded-xl p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT SIDE CONTENT */}
            <div className="flex flex-col gap-8">

              {/* TITLE BOX */}
              <div className="bg-[#E8E0C9] p-5 md:p-6 rounded-md">
                <H3 className="text-[#156644] text-xl md:text-2xl">
                  Sed ut perspiciatis Unde <br /> Seduo ut
                </H3>
              </div>

              {/* DESCRIPTION + BUTTON (same box) */}
              <div className="bg-[#E8E0C9] p-5 md:p-6 rounded-md flex flex-col gap-6">
                <P className="text-[#156644] text-sm md:text-base leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                </P>

                {/* Button aligned right */}
                <div className="flex justify-end">
                  <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow text-[#156644] text-xl">
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE — FULL HEIGHT */}
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src="/EHR-PMS/LandingPage/img2.png"
                alt="EHR Dashboard"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
