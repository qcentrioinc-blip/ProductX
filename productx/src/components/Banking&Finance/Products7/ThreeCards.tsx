const ThreeCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        Lorem ipsum dolor , consectetur adipis
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 md:gap-8">
        {/* Card 1 - Large Left Card */}
        <div className="bg-[#e4efff] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 md:row-span-2">
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-full mb-6 sm:mb-7 md:mb-8"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4">
            Duis aute irure dolor in
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>

        {/* Card 2 - Top Right Card */}
        <div className="bg-[#e4efff] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-full mb-6 sm:mb-7 md:mb-8"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4">
            Duis aute irure dolor in
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>

        {/* Card 3 - Bottom Right Card */}
        <div className="bg-[#e4efff] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-full mb-6 sm:mb-7 md:mb-8"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-3.5 md:mb-4">
            Duis aute irure dolor in
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
