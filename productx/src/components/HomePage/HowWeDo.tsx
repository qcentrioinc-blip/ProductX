import { useState, useEffect } from "react";
import {
  BusinessCenterOutlined,
  AttachMoneyOutlined,
  LightbulbOutlined,
  CodeOutlined,
} from "@mui/icons-material";

const HowWeDo = () => {
  const [active, setActive] = useState<string>("");

  const cards = [
    {
      id: "business-man",
      label: "Business Man",
      icon: <BusinessCenterOutlined fontSize="large" />,
      desc: "Unlock AI's potential to optimize operations, enhance customer experiences, drive data-informed decisions, and stay competitive in a fast-evolving market.",
    },
    {
      id: "investors",
      label: "Investors",
      icon: <AttachMoneyOutlined fontSize="large" />,
      desc: "Scale effortlessly with adaptable solutions designed to grow alongside your business needs and maximize return on investment.",
    },
    {
      id: "founder",
      label: "Founder",
      icon: <LightbulbOutlined fontSize="large" />,
      desc: "Foster creativity and breakthrough ideas with cutting-edge technologies and unique approaches to transform your vision into reality.",
    },
    {
      id: "developers",
      label: "Developers",
      icon: <CodeOutlined fontSize="large" />,
      desc: "Focus on delivering measurable outcomes that truly create value for industries and communities through robust technical solutions.",
    },
  ];


  useEffect(() => {
    if (window.innerWidth >= 768) return; 

    let index = 0;
    setActive(cards[index].id);

    const interval = setInterval(() => {
      index = (index + 1) % cards.length;
      setActive(cards[index].id);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-screen min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full px-6 lg:px-16 py-12 flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <h2 className="text-lg sm:text-xl font-bricolage font-semibold flex items-center gap-2">
              <span className="inline-block w-8 h-[4px] bg-white rounded-full"></span>
              How We Do
            </h2>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-6">
            Approach That Turns <br />
            <span className="text-gray-400">
              Innovation Into Industry Impact
            </span>
          </h1>
        </div>

        <button className="flex items-center gap-2 border border-gray-600 hover:bg-white hover:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300">
          <span className="text-xs sm:text-sm font-medium">CONTACT US</span>
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

      {/* Cards */}
      <div className="w-full px-6 sm:px-10 lg:px-16 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() =>
                window.innerWidth >= 768 && setActive(card.id) // desktop hover only
              }
              className={`relative flex flex-col items-center justify-center
                aspect-square h-40 sm:h-48 md:h-60 lg:h-72
                border transition-all duration-500 cursor-pointer
                ${
                  active === card.id
                    ? "border-blue-500 border-4 rounded-full"
                    : "border-gray-700 rounded-2xl sm:rounded-3xl hover:rounded-full hover:border-blue-500 hover:border-4"
                }`}
            >
              {/* Background animation */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
                  ${active === card.id ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src="/WhatWeDo/img2.jpg"
                  alt="bg"
                  className="w-full h-full blur-sm opacity-60 animate-spin-slow"
                />
              </div>

              {/* Icon */}
              <span className="mb-3 text-xl sm:text-2xl md:text-3xl">
                {card.icon}
              </span>

              {/* Label */}
              <span
                className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center ${
                  active === card.id ? "text-white" : "text-gray-400"
                }`}
              >
                {card.label}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-8 sm:mt-10 bg-gray-900/50 border border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center">
            {cards.find((c) => c.id === active)?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
