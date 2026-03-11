import { H2, H4, P2 } from "../../../styles/Typography";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Commercial Banks Direct Integration ",
      text: "Connect directly to central bank payment gateways for high-value RTGS transactions. "
    },
    {
      id: 2,
      name: "Credit Unions League Participation ",
      text: "Aggregate transactions through intermediary leagues as single network participants. "
    },
      {
      id: 3,
      name: "All Institution Types Supported ",
      text: "Handle both high-value and low-value payments without intermediaries when needed. "
    },
     
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="font-bold text-gray-900">
            Designed for Banks and Credit Unions 
          </H2>
        </div>

        {/* Simple 3 Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
         className="bg-white rounded-lg border border-gray-200 shadow-md md:p-4 p-6 lg:p-5 xl:p-6 md:h-[210px] lg:h-[260px]"
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
