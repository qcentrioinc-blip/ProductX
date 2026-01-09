const ComparePrice = () => {
    const features = [
        { name: "Number of Users", includedStarter: true, includedEnterprise: true },
        { name: "Users Per Page", includedStarter: true, includedEnterprise: true },
        { name: "Includes essential features to get started", includedStarter: true, includedEnterprise: true },
        { name: "More advanced features for increased productivity", includedStarter: true, includedEnterprise: true },
        { name: "Designing & Development", includedStarter: false, includedEnterprise: true },
        { name: "Customizable options to meet your specific needs", includedStarter: false, includedEnterprise: true },
        { name: "Secure data storage", includedStarter: false, includedEnterprise: true },
        { name: "Email Support", includedStarter: false, includedEnterprise: true },
        { name: "24/7 customer support", includedStarter: false, includedEnterprise: true },
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center py-12 gap-[32px]">
            {/* Header Section */}
            <div className="w-[1320px] flex flex-col items-center gap-[32px]">
                <div className="text-center">
                    <h1 className="font-['Bricolage_Grotesque'] font-semibold text-[64px] text-[#F5F5F5] leading-none mb-4">
                        Find Your Perfect Plan
                    </h1>
                    <p className="font-['Outfit'] font-light text-[24px] text-[#CCCCCC] leading-[34px] text-center max-w-[658px] mx-auto">
                        Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted
                    </p>
                </div>

                {/* Pricing Table */}
                <div className="w-[1320px] h-[1063px] bg-white rounded-[64px] border border-[#E6E9F5] grid grid-cols-[344px_488px_488px] overflow-hidden relative">

                    {/* Left Column - Compare Plans */}
                    <div className="h-full border-r border-[#E6E9F5] p-[40px] flex flex-col">
                        <div className="h-[120px] flex flex-col justify-start gap-4 mb-2 border-b border-gray-300">
                            <h2 className="font-['Bricolage_Grotesque'] font-semibold text-[32px] text-[#252430] leading-none">
                                Compare plans
                            </h2>
                            <p className="font-['Quicksand'] font-normal text-[18px] text-[#141414] leading-none max-w-[280px]">
                                Choose your plan according to your organisational plan
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col justify-between py-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center h-[50px] font-['Quicksand'] font-normal text-[18px] text-[#252430] leading-none border-b border-gray-300">
                                    {feature.name}
                                </div>
                            ))}
                        </div>
                        {/* Spacer for button alignment */}
                        <div className="h-[60px] mt-8"></div>
                    </div>

                    {/* Middle Column - Starter */}
                    <div className="h-full p-[40px] border border-[#E7EBFF] rounded-[26px] bg-white shadow-[0px_26px_40px_0px_#BCCAFF21] flex flex-col relative z-10">
                        <div className="h-[120px] flex flex-col justify-start gap-4 mb-2 border-b border-gray-300">
                            <h3 className="font-['Bricolage_Grotesque'] font-semibold text-[32px] text-[#252430] leading-none">Starter</h3>
                            <p className="font-['Quicksand'] font-normal text-[18px] text-[#141414] leading-tight">
                                Take Your Business to the Next Level Take Your<br />
                                Take Your Business to the Next Level Take Your
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col justify-between py-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center justify-center h-[50px] border-b border-gray-300 ">
                                    {feature.includedStarter ? (
                                        <div className="w-6 h-6 bg-teal-800 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 bg-[#A8102D] rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 h-[60px]">
                            <button className="w-full bg-[#1F2937] hover:bg-[#111827] text-white font-medium py-3.5 px-6 rounded-xl transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Enterprise */}
                    <div className="h-full p-[40px] border border-[#E7EBFF] rounded-[26px] bg-white shadow-[0px_26px_40px_0px_#BCCAFF21] flex flex-col relative overflow-hidden group">
                        {/* Background Image / Decoration */}
                        <div
                            className="absolute top-[-59.36px] left-[-132.17px] w-[968.66px] h-[1122.36px] pointer-events-none z-0"
                            style={{
                                background: 'linear-gradient(180deg, rgba(106, 138, 255, 0.5) 0%, rgba(106, 138, 255, 0.08) 100%)',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderImageSource: 'radial-gradient(103.58% 103.58% at 50% 50%, rgba(181, 194, 251, 0) 4.69%, #B5C2FB 100%)',
                                borderImageSlice: 1
                            }}
                        />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="absolute top-0 right-25">
                                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/40">
                                    Best offer
                                </span>
                            </div>

                            <div className="h-[120px] flex flex-col justify-start gap-4 mb-2 border-b border-white">
                                <h3 className="font-['Bricolage_Grotesque'] font-semibold text-[32px] text-[#252430] leading-none">Enterprise</h3>
                                <p className="font-['Quicksand'] font-normal text-[18px] text-[#141414] leading-tight">
                                    Take Your Business to the Next Take Your<br />
                                    Take Your Business to the Next Take Your
                                </p>
                            </div>

                            <div className="flex-1 flex flex-col justify-between py-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center justify-center h-[50px] border-b border-white">
                                        {feature.includedEnterprise ? (
                                            <div className="w-6 h-6 bg-teal-800 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 bg-[#A8102D] rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 h-[60px]">
                                <button className="w-full bg-[#1F2937] hover:bg-[#111827] text-white font-medium py-3.5 px-6 rounded-xl transition-colors">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ComparePrice;
