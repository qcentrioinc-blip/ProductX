import { useState } from "react";
import { H2, P } from "../../../styles/Typography";
import ContactDrawer from "../Navbar/ContactDrawer";

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
    image: "/EHR-PMS/Physician/img3.webp",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Cumbersome Charting Processes",
    description:
      "Eliminate slow, manual documentation. Smart templates and auto-populated fields cut charting time in half, letting you complete notes quickly and accurately.",
    image: "/EHR-PMS/Physician/img4.webp",
    cta: "See How",
  },
  {
    id: 3,
    title: "Billing and Coding Errors",
    description:
      "Stop dealing with claim denials from manual errors. Integrated coding suggestions and automated claim scrubbing ensure accurate submissions and faster reimbursements.",
    image: "/EHR-PMS/Physician/img5.webp",
    cta: "Explore Features",
  },
];

const PhysicianOutcomes = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDrawerOpen(true);
                }}
                className="
                  group
    inline-flex items-center justify-center
    px-6 h-12
    rounded-lg
    font-bricolage font-bold text-sm tracking-widest
    bg-[#008280] text-white
    hover:bg-white hover:text-[#008280]
    border-2 border-[#008280]
    transition-all duration-300 ease-in-out
    hover:border-b-[4px]
    hover:-translate-y-[2px]
    shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
    cursor-pointer
                "
              >
                {item.cta}
                <span className="relative flex items-center justify-center w-[20px] h-[20px]">
      
      {/* Default Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17L17 7" />
      </svg>

      {/* Hover Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>

    </span>
              </button>

              <div className="relative h-[240px] rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-contain"
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDrawerOpen(true);
              }}
              className="group
    inline-flex items-center justify-center
    px-6 h-12
    rounded-lg
    font-bricolage font-bold text-sm tracking-widest
    bg-[#008280] text-white
    hover:bg-white hover:text-[#008280]
    border-2 border-[#008280]
    transition-all duration-300 ease-in-out
    hover:border-b-[4px]
    hover:-translate-y-[2px]
    shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
    cursor-pointer"
            >
              {activeOutcome.cta}
              <span className="relative flex items-center justify-center w-[20px] h-[20px]">
      
      {/* Default Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17L17 7" />
      </svg>

      {/* Hover Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>

    </span>
            </button>
          </div>

          {/* Right Images */}
          <div className="flex gap-4 flex-1 h-[560px] transition-all duration-700">
            {outcomes.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`
                    relative overflow-hidden rounded-xl cursor-pointer
                    transition-all duration-700 ease-in-out
                    ${isActive ? "flex-[6]" : "flex-[2]"}
                  `}
                >
                  <div className="absolute inset-0 bg-gray-100" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      absolute inset-0 w-full h-full
                      object-contain
                      transition-transform duration-700
                      ${isActive ? "scale-100" : "scale-105"}
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </section>
  );
};

export default PhysicianOutcomes;
