import { H2, H3, P } from "../../../styles/Typography";

export default function GridSecClinic() {
  return (
    <section className="w-full  text-white pb-16 ">
      
      <div className="max-w-8xl  lg:mx-14 mx-4 lg:px-10  px-4  pt-6 rounded-xl bg-[#008280]     ">

        {/* Heading */}
        <H2 className="text-left xl:text-center xl:py-10">    
          Sed ut perspiciatis Unde Sed ut
        </H2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 pb-16 items-start gap-4 md:gap-12 xl:gap-20">

          {/* LEFT IMAGE */}
          <div className="flex justify-end   mt-10 xl:py-10">
            <img
              src="/EHR-PMS/LandingPage/img1.jpg"
              alt="doctor and patient"
              className="w-full lg:h-[500px] rounded-md object-cover"
            />
          </div>

          {/* RIGHT FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2    gap:4 xl:gap-10  ">

            {[
              {
                title: "Duis aute irure",
                text: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su"
              },
              {
                title: "Duis aute irure",
                text: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su"
              },
              {
                title: "Duis aute irure",
                text: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su"
              },
              {
                title: "Duis aute irure",
                text: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, su"
              },
            ].map((f, idx) => (
              <div key={idx} className="flex flex-col  space-y-4 gap-3">
                
                {/* Plus Icon */}
                <span className="text-orange-400 text-7xl font-bold">+</span>

                {/* Title */}
                <H3 className="font-semibold">
                  {f.title}
                </H3>

                {/* Text */}
                <P className=" text-white/90 leading-relaxed">
                  {f.text}
                </P>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
