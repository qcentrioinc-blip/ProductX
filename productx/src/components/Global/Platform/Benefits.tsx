 
import { CheckCircle } from 'lucide-react';
import {  H2,P } from '../../../styles/Typography';

const Benefits = () => {
  const benefits = [
    {
      title: "Lorem ipsum dolor, consectetur adipis consec",
      items: [
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit"
      ],
      metric: "8x",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute"
    },
    {
      title: "Lorem ipsum dolor, consectetur adipis consec",
      items: [
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Duis aute irure dolor in reprehenderit in voluptate velit"
      ],
      metric: "70+",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit Duis aute"
    }
  ];

  return (
    <div className="bg-gray-200 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <H2 className="font-bold leading-tight">
            <span className="text-blue-600">Lorem ipsum dolor, consectetur</span>
            <br />
            <span className="text-gray-600">adipis conse</span>
          </H2>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Title */}
              <H2 className=" font-semibold text-gray-800 mb-6">
                {benefit.title}
              </H2>

              {/* Checklist Items */}
              <div className="space-y-4 mb-8">
                {benefit.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Metric Section */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-6xl text-outline sm:text-7sxl lg:text-8xl font-bold  text-blue-600 leading-none">
                  {benefit.metric}
                </div>
                <P className="text-sm sm:text-base text-gray-700 flex-1 leading-relaxed">
                  {benefit.description}
                </P>
              </div>
            </div>
          ))}
        </div>

        {/* Dotted Line Connector (visible on larger screens) */}
        {/* <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="100" height="2" className="opacity-50">
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="#60A5FA"
              strokeWidth="2"
              strokeDasharray="6,6"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Benefits;