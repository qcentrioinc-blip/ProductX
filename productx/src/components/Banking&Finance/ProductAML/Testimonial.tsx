import { H2, H4,   P2 } from "../../../styles/Typography";

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
    }
  ];

  return (
    <div className="bg-white py-20">
 <div className="max-w-7xl mx-auto px-6 md:px-10">
  

        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="font-bold text-gray-900">
            Lorem ipsum dolor, consectetur adipis
          </H2>
        </div>

        {/* Simple 3 Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-200    rounded-lg p-6 h-[200px]"
            >
              <div className="flex justify-start mb-4">
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>

              <H4 className="font-semibold mb-2 text-gray-900">
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
