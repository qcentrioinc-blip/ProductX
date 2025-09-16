import { useState } from "react";

const HowWeDo = () => {
  const [active, setActive] = useState<string | null>("impactful");

  const cards = [
    { id: "impactful", label: "Impactful", icon: "💼", desc: "Unlock AI's potential to optimize operations, enhance customer experiences, drive data-informed decisions, and stay competitive in a fast-evolving market." },
    { id: "scalable", label: "Scalable", icon: "💰", desc: "Scale effortlessly with adaptable solutions designed to grow alongside your business needs." },
    { id: "innovative", label: "Innovative", icon: "💡", desc: "Foster creativity and breakthrough ideas with cutting-edge technologies and unique approaches." },
    { id: "impact-centric", label: "Impact-Centric", icon: "</>", desc: "Focus on delivering measurable outcomes that truly create value for industries and communities." },
  ];

  return (
    <div className="max-w-[1285px] mb-16 sm:mb-24 md:mb-32 mx-auto bg-white px-4 sm:px-6 lg:px-0">
      {/* Header Section */}
      <div className="relative mx-2 sm:mx-6 md:mx-10 pt-8 sm:pt-12 md:pt-20 px-4 sm:px-8 md:px-20">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="flex flex-col gap-4 sm:gap-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 sm:w-16 border-t-2 border-dotted border-blue-400"></div>
              <span className="text-sm text-gray-600 whitespace-nowrap">
                <h3>How We Do</h3>
              </span>
              <div className="w-12 sm:w-16 border-t-2 border-dotted border-blue-400"></div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Approach That Turns{" "}
                <span className="text-gray-700">
                  Innovation Into Industry Impact
                </span>
              </h2>
            </div>

            <div className="mt-4">
              <button className="w-full sm:w-[180px] h-12 sm:h-10 bg-black text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 font-medium hover:bg-gray-800 transition-colors">
                CONTACT US
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="absolute left-10 top-20 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 border-t-2 border-dotted border-blue-400"></div>
              <span className="text-sm text-gray-600 whitespace-nowrap">
                <h3>How We Do</h3>
              </span>
            </div>

            <div>
              <h2 className="text-5xl gap-2 font-extrabold leading-2.5">
                Approach That Turns <br />
                <span className="text-gray-700">
                  Innovation Into Industry Impact
                </span>
              </h2>
            </div>
          </div>

          {/* Right side contact button */}
          <div className="absolute right-20 top-20">
            <button className="w-[180px] h-10 bg-black text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 font-medium hover:bg-gray-800 transition-colors">
              CONTACT US
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12 sm:h-24 md:h-32 lg:h-48"></div>

      {/* Black Box Section */}
      <div className="bg-black relative w-full max-w-[1145px] mx-auto rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center"
           style={{ 
             height: 'auto',
             minHeight: '400px',
           }}>
        
        {/* Mobile Cards Layout */}
        <div className="block sm:hidden w-full">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActive(card.id)}
                className={`relative flex flex-col items-center justify-center w-full h-32 border transition-all duration-500 cursor-pointer ${
                  active === card.id
                    ? "border-blue-500 rounded-full"
                    : "border-gray-600 rounded-xl"
                }`}
              >
                {active === card.id && (
                  <div className="absolute inset-0 rounded-full animate-spin-slow bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3),_transparent_70%)]"></div>
                )}

                <span className="text-2xl relative z-10">
                  {card.icon}
                </span>
                <p
                  className={`mt-2 text-xs font-medium relative z-10 text-center ${
                    active === card.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Cards Layout */}
        <div className="hidden sm:block md:hidden w-full">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActive(card.id)}
                className={`relative flex flex-col items-center justify-center w-full h-40 border transition-all duration-500 cursor-pointer ${
                  active === card.id
                    ? "border-blue-500 rounded-full"
                    : "border-gray-600 rounded-xl"
                }`}
              >
                {active === card.id && (
                  <div className="absolute inset-0 rounded-full animate-spin-slow bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3),_transparent_70%)]"></div>
                )}

                <span className="text-3xl relative z-10">
                  {card.icon}
                </span>
                <p
                  className={`mt-3 text-sm font-medium relative z-10 text-center ${
                    active === card.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Medium Screen Cards Layout */}
        <div className="hidden md:block lg:hidden w-full">
          <div className="grid grid-cols-4 gap-4 mb-8">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActive(card.id)}
                className={`relative flex flex-col items-center justify-center w-full h-36 border transition-all duration-500 cursor-pointer ${
                  active === card.id
                    ? "border-blue-500 rounded-full"
                    : "border-gray-600 rounded-xl"
                }`}
              >
                {active === card.id && (
                  <div className="absolute inset-0 rounded-full animate-spin-slow bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3),_transparent_70%)]"></div>
                )}

                <span className="text-3xl relative z-10">
                  {card.icon}
                </span>
                <p
                  className={`mt-3 text-sm font-medium relative z-10 text-center ${
                    active === card.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Cards Layout - Keep Original */}
        <div className="hidden lg:flex justify-between w-full mb-12">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActive(card.id)}
              className={`relative flex flex-col items-center justify-center w-52 h-52 border transition-all duration-500 cursor-pointer ${
                active === card.id
                  ? "border-blue-500 rounded-full"
                  : "border-gray-600 rounded-xl"
              }`}
            >
              {active === card.id && (
                <div className="absolute inset-0 rounded-full animate-spin-slow bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3),_transparent_70%)]"></div>
              )}

              <span className="text-4xl relative z-10">
                {card.icon}
              </span>
              <p
                className={`mt-4 text-lg font-medium relative z-10 ${
                  active === card.id ? "text-white" : "text-gray-400"
                }`}
              >
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Description Box */}
        <div className="w-full bg-[#111] text-gray-300 text-center py-4 sm:py-6 px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-3xl border border-gray-700">
          <p className="text-xs sm:text-sm leading-relaxed">
            {cards.find((c) => c.id === active)?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
