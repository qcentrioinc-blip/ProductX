const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor gamis consecte ipsum ipsum lorem",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    },
  ];

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-gray-200 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
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
