import { H1, H3, P } from "../../../styles/Typography";

const CARDS = [
    {
        number: "01",
        title: "Banks",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
    },
    {
        number: "02",
        title: "Banks",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
    },
    {
        number: "03",
        title: "Banks",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat",
    },
];

const ThreeBank = () => {
    return (
        <div className="relative w-full bg-white py-16 xl:py-24">
            <div className="max-w-7xl xl:mx-auto mx-4 px-4 xl:px-0">

                {/* Header Section */}
                <div className="flex flex-col xl:flex-row justify-left items-start mb-12 xl:mb-12">
                    <div className="flex-1 w-full relative">
                        <H1>
                            <div className="text-[#2B68C3] leading-[1.1]">Consecte</div>
                            <div className="text-gray-600 leading-[1.1]">Con secte adipi</div>
                        </H1>
                    </div>
                    <div className="flex-1 w-full">
                        <P className="text-gray-700 leading-relaxed max-w-5xl">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui
                        </P>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
                    {CARDS.map((card) => (
                        <div
                            key={card.number}
                            className="w-full rounded-2xl p-4 md:p-6 bg-white border border-gray-400"
                        >
                            <div className="flex flex-row items-center gap-6">
                                {/* Number */}
                                <div className="text-[clamp(40px,6vw,56px)] font-bold text-gray-600 flex-shrink-0 leading-none">
                                    {card.number}
                                </div>

                                {/* Title */}
                                <H3 className="text-[#2B68C3] m-0">
                                    {card.title}
                                </H3>
                            </div>

                            {/* Description */}
                            <P className="leading-[150%] text-black mt-6">
                                {card.description}
                            </P>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ThreeBank;