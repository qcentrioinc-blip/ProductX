import { H1, H3, P } from "../../../styles/Typography";

const CARDS = [
    {
        number: "01",
        title: "Parameterization",
        description:
            "Configure products, transactions, charges, and collateral types without coding. Define branch-specific holidays, currency setups, and general ledger structures. Modify settings independently without vendor support for faster adaptation to market changes.",
    },
    {
        number: "02",
        title: "Automation",
        description:
            "Automate account creation, transaction processing, and regulatory compliance checks. Streamline member onboarding, lien noting, limit setting, and payroll management. Reduce manual errors while improving operational efficiency across all banking functions.",
    },
    {
        number: "03",
        title: "Scalability ",
        description:
            "Support unlimited branches, multiple currencies, and growing transaction volumes. Add new financial products, modify existing ones, and expand into new regions. Architecture designed to grow with your institution without performance degradation. ",
    },
];

const ThreeBank = () => {
    return (
        <div className="relative w-full bg-white py-16">
            <div className="max-w-7xl xl:mx-auto mx-4 px-4 xl:px-0">

                {/* Header Section */}
                <div className="flex flex-col xl:flex-row justify-left items-start mb-12 xl:mb-12">
                    <div className="flex-1 w-full relative">
                        <H1>
                            <div className="text-[#2B68C3] leading-[1.1]">Complete Core</div>
                            <div className="text-gray-600 leading-[1.1]">Banking Platform </div>
                        </H1>
                    </div>
                    <div className="flex-1 w-full">
                        <P className="text-gray-700 leading-relaxed max-w-5xl">
Bankfair is Qnest’s comprehensive core banking and loan management system designed for financial institutions. It centralizes bank information management, automates processes, and provides extensive parameterization capabilities. The platform supports multi-currency operations, regulatory compliance, and scalable growth across branches.                         </P>
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