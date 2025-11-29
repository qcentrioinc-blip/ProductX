import { ArrowRight } from "lucide-react";

const Frontier = () => {
    const features = [
        {
            id: 1,
            title: "Frontier intelligence, tailored to You and business",
            description:
                "Make your AI your own. Train, distill, fine-tune, and build with the world's best open source models.",
        },
        {
            id: 2,
            title: "Frontier intelligence, tailored to You and business",
            description:
                "Make your AI your own. Train, distill, fine-tune, and build with the world's best open source models.",
        },
        {
            id: 3,
            title: "Frontier intelligence, tailored to You and business",
            description:
                "Make your AI your own. Train, distill, fine-tune, and build with the world's best open source models.",
        },
        {
            id: 4,
            title: "Frontier intelligence, tailored to You and business",
            description:
                "Make your AI your own. Train, distill, fine-tune, and build with the world's best open source models.",
        },
    ];

    return (
        <section className="w-full bg-[#F8F8F8] py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-8 lg:px-16">
            <div className="max-w-8xl mx-4 sm:mx-8 md:mx-10 px-2 sm:px-4 lg:px-6">

                <div className="grid lg:grid-cols-[480px_1fr] gap-12 sm:gap-16 lg:gap-20">

                    {/* LEFT COLUMN – fully responsive */}
                    <div className="flex justify-center lg:block">
                        <div className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-none md:h-[540px]">

                            {/* Heading */}
                            <h1
                                className="relative mb-10 sm:mb-12 md:mb-16 text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px]"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700,
                                    lineHeight: "110%",
                                    color: "#10DC78",
                                    zIndex: 50,
                                }}
                            >
                                Lorem ipsum dolor sit <br className="hidden sm:block" /> amet, consectetur
                            </h1>

                            {/* Responsive Decorative Boxes */}
                            {/* Box 1 */}
                            <div
                                className="absolute rounded-lg hidden md:block"
                                style={{
                                    width: "109px",
                                    height: "291.39px",
                                    top: "150px",
                                    left: "0px",
                                    backgroundColor: "#EAE9FF",
                                }}
                            />

                            {/* Box 2 */}
                            <div
                                className="absolute rounded-lg hidden md:block"
                                style={{
                                    width: "110px",
                                    height: "97.99px",
                                    top: "22px",
                                    left: "100px",
                                    backgroundColor: "#EAE9FF",
                                }}
                            />

                            {/* Box 3 */}
                            <div
                                className="absolute rounded-lg hidden md:block"
                                style={{
                                    width: "110px",
                                    height: "97.99px",
                                    top: "220px",
                                    left: "260px",
                                    backgroundColor: "#EAE9FF",
                                }}
                            />

                            {/* Box 4 */}
                            <div
                                className="absolute rounded-lg hidden md:block"
                                style={{
                                    width: "110px",
                                    height: "97.99px",
                                    top: "545px",
                                    left: "77px",
                                    backgroundColor: "#EAE9FF",
                                }}
                            />

                            {/* Box 5 */}
                            <div
                                className="absolute rounded-lg hidden md:block"
                                style={{
                                    width: "110px",
                                    height: "97.99px",
                                    top: "545px",
                                    left: "295px",
                                    backgroundColor: "#EAE9FF",
                                }}
                            />

                            {/* Box 6 Large */}
                            <div
                                className="absolute rounded-lg hidden md:block"
                                style={{
                                    width: "328px",
                                    height: "97.99px",
                                    top: "448px",
                                    left: "77px",
                                    backgroundColor: "#EAE9FF",
                                }}
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN – fully responsive */}
                    <div className="flex justify-start lg:justify-end">
                        <div className="flex flex-col space-y-8 max-w-xl sm:max-w-2xl">

                            {features.map((feature, index) => (
                                <div key={feature.id}>

                                    <div className="space-y-4 sm:space-y-5 md:space-y-6">

                                        <h3
                                            className="text-[20px] sm:text-[22px] md:text-[24px]"
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                                fontWeight: 700,
                                                color: "#020059",
                                            }}
                                        >
                                            {feature.title}
                                        </h3>

                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <ArrowRight className="w-6 sm:w-7 md:w-8 h-5 sm:h-6 text-[#5551FF]" />

                                            <p
                                                className="text-[15px] sm:text-[16px] md:text-[18px] leading-[150%]"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    color: "#141414",
                                                }}
                                            >
                                                Make your AI your own. Train, distill, fine-tune, and build with
                                                <br className="hidden sm:block" />
                                                the world's best open source models.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Separator only after 1st item on desktop */}
                                    {index === 0 && (
                                        <div className="mt-6 sm:mt-8 hidden md:block">
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
