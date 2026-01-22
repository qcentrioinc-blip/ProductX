import { H2, H4, P } from "../../../styles/Typography";

const features = [
    {
        title: "Deep Azure Expertise",
        description:
            "Built by cloud engineers with decades of experience across AWS, Azure, and GCP. We understand Azure’s complexity so you don’t have to.",
            image:"/AIOptimization/Star.svg",
    },
    {
        title: "Advanced Savings Insights",
        description:
            "Move beyond basic FinOps. Our AI identifies hidden inefficiencies, from SKU optimizations to unused capacity and licensing waste.",
             image:"/AIOptimization/Wallet.svg",
    },
    {
        title: "Performance-Based Pricing",
        description:
            "You only pay a percentage of the savings we deliver. Most customers see ROI within the first month of use.",
             image:"/AIOptimization/PriceTag.svg",
    },
];

const ThreeCardAI = () => {
    return (
        <section className="w-full bg-[#F5F5F5] py-16 px-6 md:px-12 lg:px-20">
            {/* Section Title */}
            <div className="max-w-8xl mx-10 text-center mb-12">
                <H2 className="text-[#254D70]">Why You Should Choose CloudDIET</H2>
            </div>

            {/* Cards Grid */}
            {/* Cards Row */}
            <div className=" flex gap-6 sm:gap-8 pb-8 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 xl:justify-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory ">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-gray-50
                            flex-shrink-0
                            w-[85vw]
                            md:w-[75vw]
                            lg:w-[60vw]
                            xl:w-[28vw]
                            h-[285px]
                            p-8 shadow-lg
                            rounded-lg
                            flex
                            flex-col
                            gap-8
                            opacity-100
                            transition-all
                            duration-300
                            snap-center
                        "
                    >
                        {/* Circle Icon */}
                        <div className=" rounded-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-12 h-12 "
                            />
                            </div>

                        {/* Title */}
                        <H4
                            className="text-gray-900"
                            style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 700,
                                fontStyle: 'normal',
                                fontSize: '24px',
                                lineHeight: '100%',
                                letterSpacing: '0',
                                backgroundColor: '#000000',  
                            }}
                        >
                            {item.title}
                        </H4>


                        {/* Description */}
                        <P
                            className="flex-1"
                            style={{
                                fontFamily: "'Quicksand', sans-serif",
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '18px',
                                lineHeight: '100%',
                                letterSpacing: '0',
                                backgroundColor: '#000000',  
                                color: '#4B5563',
                            }}
                        >
                            {item.description}
                        </P>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default ThreeCardAI;
