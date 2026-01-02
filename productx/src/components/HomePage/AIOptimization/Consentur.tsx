import { H2 } from "../../../styles/Typography";

const Consentur = () => {
    return (
        <div>
            {/* ========== BOTTOM SECTION (Blue Bar with Cards) ========== */}
            <div className="w-full bg-[#000B5E] py-10 sm:py-12 px-4 sm:px-8 xl:px-16">
                <div className="max-w-8xl mx-4 sm:mx-10 px-0 sm:px-2 xl:px-4">
                    <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 xl:gap-10">
                        {/* Left Text */}
                        <H2
                            className="mb-6 xl:mb-0 text-white"
                            
                        >
                          Our Partners  
                        </H2>

                        {/* Right Cards Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full xl:w-auto">
                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="w-full h-[56px] sm:h-[64px] xl:h-[70px] xl:w-[186px] rounded-lg bg-[#3E3E3E] opacity-100"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consentur;