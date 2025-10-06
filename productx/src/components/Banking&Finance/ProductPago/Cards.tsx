const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse"
    }
  ];

  return (
    <div className="min-h-full  flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className=" w-full max-w-7xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-gray-200 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8 "
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;