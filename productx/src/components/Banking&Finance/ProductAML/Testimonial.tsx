import { H2, H4, P2 } from "../../../styles/Typography";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Risk Management & Compliance",
      text: "Integrates liquidity risk, interest rate risk, and regulatory reporting in one platform. ",
      icon: "/AML/Risk.svg"
    },
    {
      id: 2,
      name: "Liquidity Forecasting & Planning",
      text: "Manages dynamic and structural liquidity with stress testing and ratio analysis. ",
      icon: "/AML/Liquidity.svg"
    },
      {
      id: 3,
      name: " Strategic Analytics",
      text: "Provides scenario simulation, duration analysis, and predictive insights for capital planning. ",
      icon: "/AML/ChartUp.svg"
    },
     
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto  px-6 lg:px-10 xl:px-0">


        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="font-bold text-gray-900">
         Complete Asset Liability Management Platform
          </H2>
        </div>

        {/* Simple 3 Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
         className="bg-white rounded-lg   border border-gray-200 shadow-md md:p-4 p-6 lg:p-5 xl:p-6 md:h-[230px] lg:h-[300px] xl:h-[240px]"
            >
             <div className="flex justify-start mb-4">
  <div className="w-16 h-16 rounded-full flex bg-[#2B68C3] items-center justify-center">
    <img
      src={testimonial.icon}
      alt={testimonial.name}
      className="w-10 h-10 object-contain"
    />
  </div>
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
