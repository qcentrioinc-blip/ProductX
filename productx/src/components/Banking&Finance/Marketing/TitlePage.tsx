import { useState } from "react";
import { H1, H4 } from "../../../styles/Typography";

export default function MarketplaceHero() {
  const [search, setSearch] = useState("");

  return (
    <section className="relative w-full min-h-screen bg-[#E7EFFF] py-20 flex items-center justify-center overflow-hidden">

      {/* Decorative Left Image */}
      <img
        src="/MarketPlace/img1.png"
        alt="Decorative left"
        className="
          absolute z-0
          top-0 left-0
          w-[160px] sm:w-[220px] md:w-[300px] lg:w-[350px] xl:w-[400px] 
          h-auto
        "
      />

      {/* Decorative Right Image */}
      <img
        src="/MarketPlace/img2.png"
        alt="Decorative right"
        className="
          absolute z-0
          bottom-0 right-0
          w-[160px] sm:w-[220px] md:w-[300px] lg:w-[350px] xl:w-[400px]
          h-auto scale-x-[-1]
        "
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <H1 className="text-[#2B68C3] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
          Lorem ipsum dolor sit amet
        </H1>

        <H4 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        </H4>

        {/* Search Input */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <input
            type="text"
            placeholder="Search for products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full px-5 py-4 sm:py-5 rounded-lg bg-white border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400
              shadow-lg text-sm sm:text-base
            "
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            🔍
          </button>
        </div>
      </div>
    </section>
  );
}
