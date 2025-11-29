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
            <div className="relative z-10 max-w-8xl mx-10 px-4 lg:px-6 py-16">

                {/* Small Headers at Top */}
                <div className="mt-44 ">
                    <h2
                        style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 600,
                            fontSize: "42px",
                            color: "#F5F5F5",
                        }}
                    >
                        Sed ut perspiciatis
                    </h2>

                    <h3
                        className=""
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 600,
                            fontStyle: "italic",
                            fontSize: "40px",
                            lineHeight: "100%",
                            color: "#F99526",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Unde Seduo ut perspiciatis
                    </h3>
                </div>

                <div className="space-y-32">

                    {/* First Section - ROCK SOLID TECHNOLOGY (Text Left, Image Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Left Side - Title Text */}
                        <div className="flex items-center whitespace-nowrap mt-0 lg:mt-44" style={{ zIndex: 10 }}>
                            <h1
                                className="font-semibold uppercase text-[72px] leading-[120%] tracking-[0px]"
                                style={{
                                    fontFamily: "Bricolage Grotesque, sans-serif",
                                    background: "var(--title-dark, #F5F5F5)",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                ROCK SOLID TECHONOLOGY
                            </h1>

                        </div>

                        {/* Right Side - Image Only */}
                        <div className="flex justify-end">
                            <div
                                style={{
                                    width: "405px",
                                    height: "448.3318px",
                                    borderRadius: "8px",
                                    opacity: 1,
                                    position: "relative", // or "absolute" if needed
                                    top: "0px", // Change only if you want absolute positioning
                                    left: "-280px",
                                }}
                                className="overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/HighTech/HomePage/DoctorGirl.png"
                                    alt="Professional woman"
                                    className="w-full h-full object-cover"
                                    style={{ borderRadius: "8px" }}
                                />
                            </div>
                        </div>

                    </div>

                    {/* Second Section - TOP QUALITY PRODUCTS (Image Left, Text Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Image with Text Overlay */}
                        <div className="flex justify-start">
                            <div
                                className="relative overflow-visible"
                                style={{
                                    width: "405px",
                                    height: "448.331787109375px",
                                    borderRadius: "8px",
                                    opacity: 1,
                                    transform: "rotate(0deg)",
                                    position: "relative",
                                    // top: "4450.9px",
                                    left: "190px",
                                    boxShadow: "0 25px 60px rgba(147, 51, 234, 0.4)"
                                }}
                            >
                                {/* Image */}
                                <img
                                    src="/HighTech/HomePage/EngineerGirl.png"
                                    alt="Engineer with tablet"
                                    className="w-full h-full object-cover"
                                    style={{
                                        borderRadius: "8px"
                                    }}
                                />

                                {/* Text Overlay - Positioned Over Image */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        zIndex: 10
                                    }}
                                >
                                    <h2
                                        className="text-center whitespace-nowrap"
                                        style={{
                                            fontFamily: "Bricolage Grotesque, sans-serif",
                                            fontWeight: 600,
                                            fontStyle: "normal",
                                            fontSize: "72px",
                                            lineHeight: "120%",
                                            letterSpacing: "0%",
                                            textTransform: "uppercase",
                                            background: "#F5F5F5",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            position: "relative", // or "absolute" if needed
                                            left: "110px", // Change only if you want absolute positioning
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
                            <h2
                                className="whitespace-nowrap"
                                style={{
                                    zIndex: 10,
                                    fontFamily: "Bricolage Grotesque, sans-serif",
                                    fontWeight: 600,
                                    fontStyle: "normal",
                                    fontSize: "72px",
                                    lineHeight: "120%",
                                    position: "relative", // or "absolute" if needed
                                    left: "280px",
                                    letterSpacing: "0%",
                                    textTransform: "uppercase",
                                    background: "#F5F5F5",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                TOP QUALITY PRODUCTS
                            </h2>
                        </div>


                        {/* Right Side - Image Only */}
                        <div className="flex justify-start">
                            <div
                                className="rounded-xl overflow-hidden"
                                style={{
                                    width: "405px",
                                    height: "448.3318px",
                                    borderRadius: "8px",
                                    position: "relative",
                                    // top: "5009.98px",
                                    // left: "736px",
                                    opacity: 1,
                                    transform: "rotate(0deg)",
                                    boxShadow: "0 25px 80px rgba(59, 130, 246, 0.3)"
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
                        <p
                            className="mb-8"
                            style={{
                                fontFamily: "Bricolage Grotesque, sans-serif",
                                fontWeight: 700,
                                fontStyle: "normal",
                                fontSize: "26px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                color: "#D1D5DB" // equivalent to text-gray-300
                            }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            occaecat cupidatat non.
                        </p>

                        <a
                            href="/industries/high-tech/contactform"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all hover:bg-gray-100"
                            style={{
                                background: "#FFFFFF",
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: "Quicksand, sans-serif",
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                    letterSpacing: "4%",
                                    textTransform: "uppercase",
                                    verticalAlign: "middle",
                                    color: "#2A2A2A",
                                    margin: 0,
                                }}
                            >
                                BOOK A FREE DEMO
                            </h2>
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
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default RockTech;
