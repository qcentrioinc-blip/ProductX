const NewsLetter = () => {
    const items = [
        "Consecte",
        "Adipiscing",
        "Adipiscing",
        "Consecte",
        "Consecte",
        "Consecte"
    ];

    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-6xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-pink-800 leading-tight">
                    Subscribe to our newsletter<br />
                    to stay in touch with the latest.
                </h1>

                {/* Horizontal Timeline - All Screen Sizes */}
                <div className="overflow-x-auto scrollbar-hide pb-4">
                    <div className="min-w-max px-2">
                        {/* Circles Row */}
                        <div className="flex justify-between items-center mb-6 sm:mb-8 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                            {items.map((_, index) => (
                                <div
                                    key={index}
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-300 rounded-full flex-shrink-0"
                                ></div>
                            ))}
                        </div>

                        {/* Line and Dots Container */}
                        <div className="relative mb-8 sm:mb-10 md:mb-12">
                            {/* Pink Line */}
                            <div className="absolute top-1/2 left-8 right-8 sm:left-10 sm:right-10 md:left-12 md:right-12 lg:left-16 lg:right-14 h-0.5 bg-pink-700 transform -translate-y-1/2"></div>

                            {/* Pink Dots */}
                            <div className="flex justify-between items-center relative gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-8 sm:px-10 md:px-12 lg:px-14">
                                {items.map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-pink-700 rounded-full flex-shrink-0 z-10"
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Labels Row */}
                        <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center flex-shrink-0 min-w-[60px] sm:min-w-[80px] md:min-w-[96px] lg:min-w-[112px]"
                                >
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black whitespace-nowrap">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default NewsLetter;
