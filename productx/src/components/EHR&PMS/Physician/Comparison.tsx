import { H2, H4  , P } from "../../../styles/Typography";

const Comparison = () => {
  const leftItems = [
    {
      number: 1,
      title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute"
    },
    {
      number: 2,
      title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute"
    },
    {
      number: 3,
      title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute"
    }
  ];

  const rightItems = [
    {
      number: 1,
      title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute"
    },
    {
      number: 2,
      title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute"
    },
    {
      number: 3,
      title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 ">
      <div className="max-w-8xl xl:mx-10 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <H2 className="text-[#166D48] mb-2">
            Sed ut perspiciatis Unde Seduo ut
          </H2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-20">
          {/* Left Column */}
          <div className="bg-[#EEDCC1] rounded-xl p-8 md:p-10  lg:p-12 shadow-sm">
            {/* Icon Circle */}
            <div className="w-12 h-12 md:w-14 md:h-14 mt-16 bg-white rounded-full mb-6"></div>

            {/* Main Title */}
            <H4   className="text-gray-800 font-semibold text-xl md:text-2xl mb-4 leading-tight">
              Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit
            </H4 >

            {/* Subtitle */}
            <P className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute
            </P>

            {/* Numbered List */}
            <div className="space-y-14 py-10">
              {leftItems.map((item) => (
                <div key={item.number} className="flex gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-semibold text-sm">
                      {item.number}
                    </span>
                  </div>
                  
                  {/* Text */}
                  <P className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                    {item.title}
                  </P>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#EEDCC1] rounded-xl p-8 md:p-10 lg:p-12 shadow-sm">
            {/* Icon Circle */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white mt-16 rounded-full mb-6"></div>

            {/* Main Title */}
            <H4   className="text-gray-800 font-semibold text-xl md:text-2xl mb-4 leading-tight">
              Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit
            </H4        >

            {/* Subtitle */}
            <P className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute
            </P>

            {/* Numbered List */}
            <div className="space-y-14 py-10">
              {rightItems.map((item) => (
                <div key={item.number} className="flex gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-semibold text-sm">
                      {item.number}
                    </span>
                  </div>
                  
                  {/* Text */}
                  <P className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                    {item.title}
                  </P>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;