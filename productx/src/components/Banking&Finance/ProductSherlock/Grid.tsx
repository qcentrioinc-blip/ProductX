import { H4, P } from "../../../styles/Typography";

export default function Grid() {
  const features = [
    {
      title: "Lorem ipsum adipis",
      desc: "Duis aute irure dolor in oluptate velit esse cillum voluptate velit esse cillum",
    },
    {
      title: "Lorem ipsum adipis",
      desc: "Duis aute irure dolor in oluptate velit esse cillum voluptate velit esse cillum",
    },
    {
      title: "Lorem ipsum adipis",
      desc: "Duis aute irure dolor in oluptate velit esse cillum voluptate velit esse cillum",
    },
    {
      title: "Lorem ipsum adipis",
      desc: "Duis aute irure dolor in oluptate velit esse cillum voluptate velit esse cillum",
    },
  ];

  return (
    <section className="w-full pb-10 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="relative bg-[#F4F4F4] rounded-3xl p-10 md:p-14">

          {/* Vertical divider */}
          <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-px bg-gray-400 -translate-x-1/2"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16">

            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-5">

                {/* Blue circle */}
                <div className="w-12 h-12 rounded-full bg-[#2B68C3] flex-shrink-0"></div>

                {/* Text */}
                <div>
                  <H4 className="mb-2 text-gray-900">
                    {item.title}
                  </H4>

                  <P className="max-w-md">
                    {item.desc}
                  </P>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}