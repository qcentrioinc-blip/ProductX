const RockTech = () => {
    return (
        <div className="relative w-full bg-black overflow-hidden">
            {/* Background Wave Image - Starts Left Top, Ends Right Bottom */}
            <div
                className="absolute w-full z-0"
                style={{
                    top: '0',
                    left: '0',
                    height: '90%',
                    width: '100%',
                    backgroundImage: 'url(/HighTech/HomePage/VerticalWave.png)',
                    backgroundSize: '95% 100%',
                    backgroundPosition: '20% 20%',
                    backgroundRepeat: 'no-repeat',
                    opacity: '0.9'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">

                {/* Small Headers at Top */}
                <div className="mt-48">
                    <div className="text-3xl font-medium tracking-wide text-white mb-2">
                        Sed ut perspiciatis
                    </div>
                    <div
                        className="text-3xl font-bold italic"
                        style={{
                            color: '#d97706',
                            fontFamily: 'Georgia, serif'
                        }}
                    >
                        Unde Seduo ut perspiciatis
                    </div>
                </div>

                <div className="space-y-32">

                    {/* First Section - ROCK SOLID TECHNOLOGY (Text Left, Image Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Left Side - Title Text */}
                        <div className="flex items-center whitespace-nowrap mt-0 lg:mt-44" style={{zIndex: 10}}>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-relaxed tracking-relaxed text-white">
                                ROCK SOLID TECHONOLOGY
                            </h1>
                        </div>

                        {/* Right Side - Image Only */}
                        <div className="flex justify-end">
                            <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/HighTech/HomePage/DoctorGirl.png"
                                    alt="Professional woman"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Section - TOP QUALITY PRODUCTS (Image Left, Text Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Image with Text Overlay */}
                        <div className="flex justify-start">
                            <div
                                className="relative w-72 h-72 rounded-2xl overflow-visible"
                                style={{ boxShadow: '0 25px 60px rgba(147, 51, 234, 0.4)' }}
                            >
                                {/* Image */}
                                <img
                                    src="/HighTech/HomePage/EngineerGirl.png"
                                    alt="Engineer with tablet"
                                    className="w-full h-full object-cover rounded-2xl"
                                />

                                {/* Text Overlay - Positioned Over Image */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        zIndex: 10
                                    }}
                                >
                                    <h2
                                        className="text-4xl lg:text-5xl font-bold leading-relaxed tracking-relaxed text-white text-center whitespace-nowrap"
                                        style={{
                                            textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)',
                                            zIndex: 10
                                        }}
                                    >
                                        TOP QUALITY PRODUCTS
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Empty (Text now on image) */}
                        <div></div>
                    </div>


                    {/* Third Section - TOP QUALITY PRODUCTS (Text Left, Image Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Title Text */}
                        <div className="flex items-center justify-end">
                            <h2 className="text-4xl lg:text-5xl font-bold leading-relaxed tracking-relaxed text-white whitespace-nowrap" style={{ zIndex: 10}}>
                                TOP QUALITY PRODUCTS
                            </h2>
                        </div>

                        {/* Right Side - Image Only */}
                        <div className="flex justify-start">
                            <div
                                className="w-72 h-84 rounded-2xl overflow-hidden"
                                style={{
                                    boxShadow: '0 25px 80px rgba(59, 130, 246, 0.3)',
                                    marginLeft: '-80px'
                                }}
                            >
                                <img
                                    src="/HighTech/HomePage/Scientist.png"
                                    alt="Scientist with AR glasses"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Bottom Section - Description and Button */}
                    <div className="pt-12 max-w-2xl">
                        <p className="text-lg leading-relaxed text-gray-300 mb-8">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                        </p>
                        <button
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm rounded-xl transition-all hover:bg-gray-100"
                        >
                            BOOK A FREE DEMO
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RockTech;
