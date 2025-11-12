// import { ArrowRight } from "lucide-react";

// const ParaDescription = () => {
//     return (
//         <div className="relative w-full">
//             {/* Top Section - Hand Image with Overlays */}
//             <div className="relative w-full h-[600px]">
//                 {/* Hand Background Image */}
//                 <img
//                     src="/EHRandPMS/Hand.png"
//                     alt="Hand"
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Text Overlay - left */}
//                 <div className="absolute left-12 bottom-0 max-w-2xl h-[300px]">
//                     <div
//                         className="backdrop-blur-sm p-10 rounded-xl border border-neutral-400/50 h-full flex flex-col justify-center items-center"
//                         style={{
//                             backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)',
//                         }}
//                     >
//                         <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
//                             <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
//                                 Sed ut perspiciatis Unde
//                             </span>
//                         </h1>

//                         <h1 className="text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
//                             Seduo ut perspiciatis
//                         </h1>
//                     </div>
//                 </div>

//                 {/* Right Green Card - Extends 50% down */}
//                 <div className="absolute right-12 top-[400px] w-[450px] z-10">
//                     <div className="bg-[#2D9D78] rounded-xl overflow-hidden shadow-2xl">
//                         <div className="p-10">
//                             <p className="text-white text-base leading-relaxed">
//                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                                 nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//                                 officia deserunt mollit anim id est laborum. occaecat cupidatat non.
//                             </p>
//                         </div>

//                         <div className="border-b border-white/50 w-full"></div>
//                         <div className="bg-[#2D9D78] p-4 flex justify-end">
//                             <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all">
//                                 <ArrowRight className="w-6 h-6 text-black" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Middle Section - Light Green with Wave and Cards */}
//             <div className="bg-[#EFF8F5] relative min-h-[600px] flex items-center">
//                 <div className="w-full flex items-center">
//                     {/* Left Side - Wave Image with Text Overlay */}
//                     <div className="w-1/2 relative min-h-[700px] flex items-center">
//                         {/* Wave Background - Starts from left edge */}
//                         <div className="absolute inset-0 left-0">
//                             <img
//                                 src="/EHRandPMS/Wave.png"
//                                 alt="Wave"
//                                 className="w-full h-full object-cover object-left"
//                             />
//                         </div>

//                         {/* Text Content - Centered within wave section */}
//                         <div className="relative z-10 w-full flex flex-col items-center justify-center px-8">
//                             <h1 className="text-5xl font-bold mb-8 text-center">
//                                 <span className="text-[#5FCFA0]">Sed ut perspiciatis</span>{' '}
//                                 <span className="text-[#F4A261]">Unde</span>
//                             </h1>

//                             <button className="bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-all">
//                                 CONTACT US
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Side - 4 Cards Grid - Centered */}
//                     <div className="w-1/2 flex items-center justify-center">
//                         <div className="grid grid-cols-2 gap-10 max-w-2xl px-8">
//                             {/* Card 1 */}
//                             <div>
//                                 <div className="flex items-start gap-4 mb-4">
//                                     <div className="text-[#F4A261] text-4xl font-light">+</div>
//                                     <h3 className="text-2xl font-bold text-black pt-2">
//                                         Duis aute irure
//                                     </h3>
//                                 </div>
//                                 <p className="text-gray-700 text-sm leading-relaxed">
//                                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                                     pariatur. Excepteur sint occaecat cupidatat non proident, su
//                                 </p>
//                             </div>

//                             {/* Card 2 */}
//                             <div>
//                                 <div className="flex items-start gap-4 mb-4">
//                                     <div className="text-[#F4A261] text-4xl font-light">+</div>
//                                     <h3 className="text-2xl font-bold text-black pt-2">
//                                         Duis aute irure
//                                     </h3>
//                                 </div>
//                                 <p className="text-gray-700 text-sm leading-relaxed">
//                                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                                     pariatur. Excepteur sint occaecat cupidatat non proident, su
//                                 </p>
//                             </div>

//                             {/* Card 3 */}
//                             <div>
//                                 <div className="flex items-start gap-4 mb-4">
//                                     <div className="text-[#F4A261] text-4xl font-light">+</div>
//                                     <h3 className="text-2xl font-bold text-black pt-2">
//                                         Duis aute irure
//                                     </h3>
//                                 </div>
//                                 <p className="text-gray-700 text-sm leading-relaxed">
//                                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                                     pariatur. Excepteur sint occaecat cupidatat non proident, su
//                                 </p>
//                             </div>

//                             {/* Card 4 */}
//                             <div>
//                                 <div className="flex items-start gap-4 mb-4">
//                                     <div className="text-[#F4A261] text-4xl font-light">+</div>
//                                     <h3 className="text-2xl font-bold text-black pt-2">
//                                         Duis aute irure
//                                     </h3>
//                                 </div>
//                                 <p className="text-gray-700 text-sm leading-relaxed">
//                                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                                     pariatur. Excepteur sint occaecat cupidatat non proident, su
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* Bottom Section - Stone Image with Text Overlay */}
//             <div className="relative w-full h-[600px]">
//                 {/* Stone Background Image */}
//                 <img
//                     src="/EHRandPMS/Stone.png"
//                     alt="Stone"
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Text Overlay - Bottom Right */}
//                 <div className="absolute right-12 bottom-0 max-w-2xl h-[300px]">
//                     <div
//                         className="backdrop-blur-sm p-10 rounded-xl border border-neutral-400/50 h-full flex flex-col justify-center items-center"
//                         style={{
//                             backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)',
//                         }}
//                     >
//                         <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
//                             <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
//                                 Sed ut perspiciatis Unde
//                             </span>
//                         </h1>

//                         <h1 className="text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
//                             Seduo ut perspiciatis
//                         </h1>
//                     </div>

//                 </div>

//                 {/* Bottom Left Green Card */}
//                 <div className="absolute left-12 bottom-[520px] w-[450px] z-10">
//                     <div className="bg-[#2D9D78] rounded-xl overflow-hidden shadow-2xl">
//                         <div className="p-10">
//                             <p className="text-white text-base leading-relaxed">
//                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                                 nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//                                 officia deserunt mollit anim id est laborum. occaecat cupidatat non.
//                             </p>
//                         </div>

//                         <div className="border-b border-white/50 w-full"></div>
//                         <div className="bg-[#2D9D78] p-4 flex justify-end">
//                             <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all">
//                                 <ArrowRight className="w-6 h-6 text-black" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ParaDescription;

import { ArrowRight } from "lucide-react";

const ParaDescription = () => {
    return (
        <div className="relative w-full">
            {/* Top Section - Hand Image with Overlays */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-8 sm:mb-12 lg:mb-0">
                {/* Hand Background Image */}
                <img
                    src="/EHRandPMS/Hand.png"
                    alt="Hand"
                    className="w-full h-full object-cover"
                />

                {/* Text Overlay - left (Mobile: Below image, Desktop: Overlay) */}
                <div className="absolute top-70 lg:absolute lg:left-12 lg:bottom-0 max-w-2xl lg:h-[300px] -mt-16 sm:-mt-20 lg:mt-0 mx-4 lg:mx-0 z-20">
                    <div
                        className="backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-xl border border-neutral-400/50 lg:h-full flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)',
                        }}
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center lg:whitespace-nowrap">
                            <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
                                Sed ut perspiciatis Unde
                            </span>
                        </h1>

                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent text-center">
                            Seduo ut perspiciatis
                        </h1>
                    </div>
                </div>
            </div>

            {/* Right Green Card - Mobile: Below text overlay, Desktop: Overlay */}
            <div className="absolute bottom-40 lg:absolute lg:right-12 lg:top-[400px] w-full px-4 lg:w-[450px] lg:px-0 mb-8 sm:mb-12 lg:mb-0 lg:-mt-0 z-10">
                <div className="bg-[#2D9D78] rounded-xl overflow-hidden shadow-2xl">
                    <div className="p-6 sm:p-8 lg:p-10">
                        <p className="text-white text-sm sm:text-base leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                        </p>
                    </div>

                    <div className="border-b border-white/50 w-full"></div>
                    <div className="bg-[#2D9D78] p-4 flex justify-end">
                        <button className="bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-all">
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Middle Section - Light Green with Wave and Cards */}
            <div className="bg-[#EFF8F5] relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center py-12 lg:py-0 mt-0 lg:mt-0">
                <div className="w-full flex flex-col lg:flex-row items-center">
                    {/* Left Side - Wave Image with Text Overlay */}
                    <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[700px] flex items-center mb-12 lg:mb-0">
                        {/* Wave Background - Hidden on mobile */}
                        <div className="absolute inset-0 left-0 hidden lg:block">
                            <img
                                src="/EHRandPMS/Wave.png"
                                alt="Wave"
                                className="w-full h-full object-cover object-left"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
                                <span className="text-[#5FCFA0]">Sed ut perspiciatis</span>{' '}
                                <span className="text-[#F4A261]">Unde</span>
                            </h1>

                            <button className="bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-all text-sm sm:text-base">
                                CONTACT US
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - 4 Cards Grid */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-2xl px-4 sm:px-6 lg:px-8 w-full">
                            {/* Card 1 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A261] text-3xl sm:text-4xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-black pt-1 sm:pt-2 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A261] text-3xl sm:text-4xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-black pt-1 sm:pt-2 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A261] text-3xl sm:text-4xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-black pt-1 sm:pt-2 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A461] text-3xl sm:text-4xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-black pt-1 sm:pt-2 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Stone Image with Text Overlay */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-8 sm:mb-12 lg:mb-0">
                {/* Stone Background Image */}
                <img
                    src="/EHRandPMS/Stone.png"
                    alt="Stone"
                    className="w-full h-full object-cover"
                />

                {/* Bottom Left Green Card - Mobile: Below stone, Desktop: Overlay */}
                <div className="relative lg:absolute lg:left-12 lg:bottom-[520px] w-full px-4 lg:w-[450px] lg:px-0 -mt-16 sm:-mt-20 lg:mt-0 z-10">
                    <div className="bg-[#2D9D78] rounded-xl overflow-hidden shadow-2xl">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <p className="text-white text-sm sm:text-base leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>
                        </div>

                        <div className="border-b border-white/50 w-full"></div>
                        <div className="bg-[#2D9D78] p-4 flex justify-end">
                            <button className="bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-all">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Overlay - Bottom Right (Mobile: Below card, Desktop: Overlay) */}
            <div className="absolute bottom-115 lg:absolute lg:right-12 lg:bottom-0 max-w-2xl lg:h-[300px] mx-4 lg:mx-0 z-20 mb-8 lg:mb-0">
                <div
                    className="backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-xl border border-neutral-400/50 lg:h-full flex flex-col justify-center items-center"
                    style={{
                        backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #5E5E5E 0deg, #666666 360deg)',
                    }}
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center lg:whitespace-nowrap">
                        <span className="bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent">
                            Sed ut perspiciatis Unde
                        </span>
                    </h1>

                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#28B87B] to-[#F99526] bg-clip-text text-transparent text-center">
                        Seduo ut perspiciatis
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ParaDescription;

