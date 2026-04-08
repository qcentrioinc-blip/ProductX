import { ArrowRight } from "lucide-react";
import { H2 } from "../../../styles/Typography";

const Frontier = () => {
    const features = [
        {
            id: 1,
            title: "Azure App Service SKU Optimization",
            description:
                "Identifies over-provisioned or misconfigured App Services, such as Premium plans running underutilized, and recommends cost-effective SKU changes.",
        },
        {
            id: 2,
            title: "Cosmos DB Multi-Master to Read Replica",
            description:
                "Detects Cosmos DB instances configured for expensive multi-master write where read replicas would provide the same availability and disaster recovery.",
        },
        {
            id: 3,
            title: "Reserved Instance Purchase Recommendations",
            description:
                "Analyzes compute usage to recommend Reserved Instance purchases with flexible terms, ensuring optimal discounting and commitment alignment.",
        },
        {
            id: 4,
            title: "Unused Fabric Capacity Identificati",
            description:
                "Finds and recommends pausing Microsoft Fabric capacities with no recent activity or stored data, eliminating unnecessary fixed costs.",
        },
    ];

    return (
        <section className="w-full bg-[#F8F8F8] dark:bg-black  py-12 sm:py-16 md:py-20 lg:py-10 px-4 sm:px-8 xl:px-10">
            <div className="max-w-8xl mx-4 sm:mx-8 md:mx-10 px-2 sm:px-4 xl:px-6">

                <div className="grid xl:grid-cols-[600px_1fr]  gap-12 sm:gap-16 xl:gap-20">

                    {/* LEFT COLUMN – fully responsive */}
                    <div className="flex justify-center xl:block">
                        <div className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-[640px] lg:max-w-[800px] xl:max-w-none xl:min-h-0 xl:h-[540px] overflow-hidden xl:overflow-visible">

                            {/* Heading */}
                            <H2
                                className="relative mb-10  dark:text-white text-[#254D70] sm:mb-12 md:mb-16 text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] text-center xl:text-left"
                                
                            >
                               Real-World Cloud Optimization Measures 
                            </H2>

                            {/* Responsive Decorative Boxes */}
                             
                        </div>
                    </div>

                    {/* RIGHT COLUMN – fully responsive */}
                    <div className="flex justify-center  xl:justify-end lg:my-4">
                        <div className="flex flex-col space-y-8 max-w-xl sm:max-w-2xl">

                            {features.map((feature, index) => (
                                <div key={feature.id}>

                                    <div className="space-y-4 sm:space-y-6 md:space-y-10">

                                        <h3
                                            className="text-[20px] sm:text-[22px] md:text-[24px]"
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                                fontWeight: 700,
                                                color: "#254D70",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>

                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <ArrowRight className="w-10 sm:w-7 md:w-12 h-5 sm:h-6 text-[#0079FF]" />

                                            <p
                                                className="text-[15px] dark:text-white sm:text-[16px] md:text-[18px] leading-[150%]"
                                                 
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Separator only after 1st item on desktop */}
                                    {index === 0 && (
                                        <div className="mt-6 sm:mt-8 hidden xl:block">
                                            <div className="h-[1px] w-2/3 bg-[#D1D1D6]" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Frontier;
