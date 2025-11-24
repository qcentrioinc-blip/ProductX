import { H1, H2, H3, P } from "../../../styles/Typography";

const FiveCards = () => {
    const smallCards = [
        {
            title: "Lorem Ipsum",
            description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
        },
        {
            title: "Lorem Ipsum",
            description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
            image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
        },
        {
            title: "Lorem Ipsum",
            description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
            image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
        },
        {
            title: "Lorem Ipsum",
            description: "Duis qute irure dolor in reprehenderit in reprehenderit Duis qute irure dolor in",
            image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=100&h=100"
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <H1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
                    Sed ut perspiciatis unde
                </H1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
                    {/* Left Section - 4 Small Cards */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {smallCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 text-black rounded-lg p-4 sm:p-6 md:p-7 lg:p-9 flex flex-col"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-500 rounded-lg mb-3 sm:mb-4"></div>
                                <H3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">{card.title}</H3>
                                <P className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                    {card.description}
                                </P>
                            </div>
                        ))}
                    </div>

                    {/* Right Section - Large Card */}
                    <div className="lg:col-span-6 mt-4 sm:mt-6 lg:mt-0">
                        <div className="bg-gray-200 text-black rounded-lg p-4 sm:p-6 md:p-7 lg:p-8 h-full flex flex-col">
                            <H2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                                Conse adipiscing werdas
                            </H2>
                            <P className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                                Duis qute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt
                            </P>
                            <div className="flex-1 bg-gray-300 rounded-lg mt-2 sm:mt-4 min-h-32 sm:min-h-40 md:min-h-48"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiveCards;
