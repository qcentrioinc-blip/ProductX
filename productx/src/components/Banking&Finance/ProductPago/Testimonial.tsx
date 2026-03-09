import { H2, H4, P2 } from "../../../styles/Typography";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
      id: 2,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
      {
      id: 3,
      name: "Duis aute irure dolor in",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
     
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-8xl mx-auto  px-6 lg:px-8 xl:px-20">


        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="font-bold text-gray-900">
            Lorem ipsum dolor, consectetur adipis
          </H2>
        </div>

        {/* Simple 3 Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
         className="bg-white rounded-lg border border-gray-200 shadow-md md:p-4 p-6 lg:p-5 xl:p-6 md:h-[210px] lg:h-[280px] xl:h-[200px]"
            >
              <div className="flex justify-start mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>

              <H4 className="font-semibold mb-2 ">
                {testimonial.name}
              </H4>

              <P2 className="text-black  leading-relaxed ">
                {testimonial.text}
              </P2>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
