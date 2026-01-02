import { H2, H4, P } from "../../../styles/Typography";

const features = [
    {
        title: "Azure Cost Savings",
        description:
            "CloudDIET checks your Azure setup, finds waste in resources and plans, and suggests fixes to cut costs by 30% on average. ",
    },
    {
        title: "​Safe Setup Help",
        description:
            "We use read-only access to check billing and configs only, and help make changes to get savings fast. ",
    },
    {
        title: "Guaranteed Money Back",
        description:
            "Pay only a share of what you save, with targets of 60-70% cuts in six weeks across your Azure accounts. ",
    },
];

const ThreeCardAI = () => {
    return (
        <section className="w-full bg-[#5551FF] py-16 px-6 md:px-12 lg:px-20">
            {/* Section Title */}
            <div className="max-w-8xl mx-10 text-center mb-12">
                <H2 className="text-white"> Cloud Savings Across All Industries</H2>
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
                            p-8
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
                        <div className="w-12 h-12 bg-gray-300 rounded-full" />

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
                                backgroundColor: '#000000', // Preserved from original
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
                                backgroundColor: '#000000', // Preserved from original
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
