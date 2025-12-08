import { H2, H4, P } from "../../../styles/Typography";

const features = [
    {
        title: "We onboard users",
        description:
            "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
    },
    {
        title: "We onboard users",
        description:
            "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
    },
    {
        title: "We onboard users",
        description:
            "We onboard users from 126+ countries — whether you hold a passport or a residence permit we’ve got you covered.",
    },
];

const ThreeCardAI = () => {
    return (
        <section className="w-full bg-[#5551FF] py-16 px-6 md:px-12 lg:px-20">
            {/* Section Title */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <H2 className="text-white">Lorem ipsum dolor sit amet Lorem</H2>
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="
        bg-gray-50
        w-[403.91px]
        h-[285px]
        p-8
        rounded-lg
        flex
        flex-col
        gap-8
        opacity-100
        transition-all
        duration-300
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
                                fontStyle: 'normal',        // bold via fontWeight
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
                                fontStyle: 'normal',        // "Regular"
                                fontSize: '18px',
                                lineHeight: '100%',
                                letterSpacing: '0',
                                backgroundColor: '#000000',
                                color: '#4B5563',           // same as text-gray-700
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
