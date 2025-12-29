import { H2, H3, P } from "../../../styles/Typography";

export default function GridSection() {
  return (
    <section className="w-full  text-white py-16 md:py-20">
      
      <div className="max-w-8xl mx-10 p-16 rounded-md bg-[#156644] absolute -top-[30vh] md:-top-[25vh] xl:-top-[50vh] ">

        {/* Heading */}
        <H2 className="text-left mb-12 md:mb-16">
          Sed ut perspiciatis Unde Sed ut
        </H2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="flex justify-end ">
            <img
              src="/EHR-PMS/LandingPage/img1.jpg"
              alt="doctor and patient"
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* RIGHT FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

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
              <div key={idx} className="flex flex-col gap-3">
                
                {/* Plus Icon */}
                <span className="text-orange-400 text-6xl font-bold">+</span>

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
