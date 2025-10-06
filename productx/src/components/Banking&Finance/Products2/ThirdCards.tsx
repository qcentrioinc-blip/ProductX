const ThirdCards = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center max-h-screen p-6 sm:p-8 md:p-10 lg:p-12">
      
      {/* Container for the heading */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Sed ut perspiciatis unde
        </h1>
      </div>

      {/* Container for the cards with responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10 lg:mt-12 w-full max-w-7xl">
        {/* These are your four cards */}
        <div className="bg-gray-300 w-full h-20 sm:h-22 lg:h-24 rounded-lg mx-auto max-w-xs lg:max-w-none lg:w-56"></div>
        <div className="bg-gray-300 w-full h-20 sm:h-22 lg:h-24 rounded-lg mx-auto max-w-xs lg:max-w-none lg:w-56"></div>
        <div className="bg-gray-300 w-full h-20 sm:h-22 lg:h-24 rounded-lg mx-auto max-w-xs lg:max-w-none lg:w-56"></div>
        <div className="bg-gray-300 w-full h-20 sm:h-22 lg:h-24 rounded-lg mx-auto max-w-xs lg:max-w-none lg:w-56"></div>
      </div>

    </div>
  )
}

export default ThirdCards;
