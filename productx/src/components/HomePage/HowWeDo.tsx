import  { useState } from "react";

// import { WorkOutline, AttachMoneyOutlined, ChairOutlined, CodeOutlined } from "@mui/icons-material";

const HowWeDo = () => {
  const [active, setActive] = useState<string | null>("impactful");

  const cards = [
    { id: "impactful", label: "Impactful", icon: "💼", desc: "Unlock AI’s potential to optimize operations, enhance customer experiences, drive data-informed decisions, and stay competitive in a fast-evolving market." },
    { id: "scalable", label: "Scalable", icon: "💰", desc: "Scale effortlessly with adaptable solutions designed to grow alongside your business needs." },
    { id: "innovative", label: "Innovative", icon: "💡", desc: "Foster creativity and breakthrough ideas with cutting-edge technologies and unique approaches." },
    { id: "impact-centric", label: "Impact-Centric", icon: "</>", desc: "Focus on delivering measurable outcomes that truly create value for industries and communities." },
  ];

  return (
    <div className="max-w-[1285px] mb-32 mx-auto bg-white">
      {/* Header Section */}
      <div className="relative mx-10 pt-20 px-20">
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

      {/* Spacer */}
      <div className="h-48"></div>

      {/* Black Box Section */}
      <div className="bg-black  relative h-[475px] w-[1145px] mx-auto rounded-xl p-12 flex flex-col items-center">
        {/* Top Row - Cards */}
        <div className="flex justify-between w-full mb-12">
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
              {/* Rotating BG Effect for Active */}
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
        <div className="w-full absolute  bottom-20 bg-[#111] text-gray-300 text-center py-6 px-8 rounded-3xl border border-gray-700">
          <p className="text-sm leading-relaxed">
            {cards.find((c) => c.id === active)?.desc}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default HowWeDo;
