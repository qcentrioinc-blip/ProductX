import { H3, H4, P } from "../../../styles/Typography";

const ImageChange = () => {
  return (
    <section className="w-full bg-white py-16 md:py-10">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            <div>
              <H4 className="text-xl font-semibold mb-3">Duisaute</H4>
              <P className="text-[#141414] ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse,
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </P>

              <P className="text-[#141414] text-sm mt-4 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </P>
            </div>

            <div>
              <H4 className="text-xl font-semibold mb-3">Duisaute</H4>
              <P className="text-[#141414] ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse,
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </P>
            </div>

            <div>
              <H4 className="text-xl font-semibold mb-3">1+Million</H4>
              <P className="text-[#141414] ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse,
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </P>
            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-[500px] bg-gray-300 rounded-2xl"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <H3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Lorem ipsum dolor gamis
              consecte ipsum ipsum
              lorem em ipsu
            </H3>

            <P className="text-[#141414] ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse,
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </P>

            <P className="text-[#141414] ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse,
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </P>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ImageChange;