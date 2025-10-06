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
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-pink-800 leading-tight">
                    Subscribe to our newsletter<br />
                    to stay in touch with the latest.
                </h1>

                <div className="relative">
                    {/* Circles - Mobile: Stack vertically, Tablet+: Horizontal */}
                    <div className="hidden sm:flex justify-between items-center mb-6 sm:mb-8">
                        {items.map((_, index) => (
                            <div
                                key={index}
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-full flex-shrink-0"
                            ></div>
                        ))}
                    </div>

                    {/* Mobile: Vertical timeline */}
                    <div className="sm:hidden space-y-6 mb-8">
                        {items.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                                <div className="w-3 h-3 bg-pink-700 rounded-full flex-shrink-0"></div>
                                <p className="text-base font-semibold text-black">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Horizontal timeline - Hidden on mobile */}
                    <div className="hidden sm:block">
                        {/* Line and Dots Container */}
                        <div className="relative mb-8 sm:mb-10 md:mb-12">
                            {/* Pink Line */}
                            <div className="absolute top-1/2 left-3 right-3 sm:left-4 sm:right-4 md:left-6 md:right-6 h-0.5 bg-pink-700 transform -translate-y-1/3"></div>

                            {/* Pink Dots */}
                            <div className="flex justify-between items-center relative">
                                {items.map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-pink-700 rounded-full flex-shrink-0 z-10 mx-2 sm:mx-3 md:mx-4"
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Labels */}
                        <div className="flex justify-between items-center">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center flex-1 px-1 sm:px-2"
                                >
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black break-words">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
