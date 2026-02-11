import { useState } from "react";
import { H2, P } from "../../../styles/Typography";
 
type Outcome = {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
};
 
const outcomes: Outcome[] = [
  {
    id: 1,
    title: "Lost Patient Information",
    description:
      "Never scramble for missing charts or labs again. Every piece of patient data, history, medications, results is unified in one accessible, secure profile.",
    image: "/EHRIcons/PhysicianOutcomes1.webp",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Cumbersome Charting Processes",
    description:
      "Eliminate slow, manual documentation. Smart templates and auto-populated fields cut charting time in half, letting you complete notes quickly and accurately.",
    image: "/EHRIcons/PhysicianOutcomes2.webp",
    cta: "See How",
  },
  {
    id: 3,
    title: "Billing and Coding Errors",
    description:
      "Stop dealing with claim denials from manual errors. Integrated coding suggestions and automated claim scrubbing ensure accurate submissions and faster reimbursements.",
     image: "/EHRIcons/PhysicianOutcomes3.webp",
    cta: "Explore Features",
  },
];
 
const PhysicianOutcomes = () => {
  const [activeId, setActiveId] = useState<number>(1);
 
  const activeOutcome =
    outcomes.find((item) => item.id === activeId) || outcomes[0];
 
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl xl:mx-auto">
        {/* Section Heading */}
        <div className="flex justify-center mb-12 text-[#008280]">
          <H2>Physician Pain Points Solved</H2>
        </div>
 
        {/* ================= MOBILE / TABLET ================= */}
        <div className="flex flex-col gap-12 lg:hidden">
          {outcomes.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <H2 className="text-[#008280] text-2xl font-bold">
                {item.title}
              </H2>
 
              <P className="text-[#141414]">
                {item.description}
              </P>
 
              <button
                className="
                  w-fit
                  px-6 py-3
                  rounded-lg
                  bg-black text-white
                  font-bold
                  transition-all duration-300
                  hover:bg-[#008280]
                "
              >
                {item.cta}
              </button>
 
              <div className="relative h-[240px] rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
 
        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex gap-10">
          {/* Left Text */}
          <div className="w-[30%]">
            <H2 className="text-[#008280] mb-4 text-3xl font-bold">
              {activeOutcome.title}
            </H2>
 
            <P className="mb-6 text-[#141414]">
              {activeOutcome.description}
            </P>
 
            <button
              className="
                group flex items-center gap-3
                px-6 py-3
                rounded-lg
                bg-black text-white
                font-bold
                transition-all duration-300
                hover:bg-[#008280]
              "
            >
              {activeOutcome.cta}
            </button>
          </div>
 
          {/* Right Images */}
          <div className="flex gap-4 flex-1 h-[560px]">
            {outcomes.map((item) => {
              const isActive = activeId === item.id;
 
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`
                    relative overflow-hidden rounded-xl cursor-pointer
                    transition-all duration-700 ease-in-out
                    ${isActive ? "flex-[4]" : "flex-[1]"}
                  `}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      transform: isActive ? "scale(1)" : "scale(1.06)",
                    }}
                  />
 
                  <div className="absolute inset-0 bg-black/20" />
 
                   
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default PhysicianOutcomes;