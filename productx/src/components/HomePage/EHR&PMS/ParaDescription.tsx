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
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[800px] lg:mb-0">
                {/* Hand Background Image */}
                <img
                    src="/EHRandPMS/Hand.png"
                    alt="Hand"
                    className="w-full h-full object-cover"
                />

                {/* Text Overlay - Top Left */}
                <div className="absolute top-8 left-4 sm:top-12 sm:left-8 lg:top-16 lg:left-16 max-w-xl lg:max-w-2xl z-20">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight whitespace-nowrap">
                        Sed ut perspiciatis Unde Seduo
                    </h1>
                    <p className="text-white/90 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 leading-relaxed max-w-lg">
                        Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                    </p>
                </div>

                {/* Rectangle Background Image with Dashboard Cards Overlay */}
                <div className="absolute top-[65%] left-[-2%] top -translate-y-1/2 z-10">
                    {/* Rectangle Background */}
                    <div className="relative">
                        <img
                            src="/EHRandPMS/Rectangle.png"
                            alt="Dashboard Background"
                            className="w-full max-w-xs sm:max-w-md lg:max-w-2xl rounded-lg shadow-xl"
                        />

                        {/* Dashboard Cards Image Overlay on Rectangle */}
                        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 lg:p-6">
                            <img
                                src="/EHRandPMS/Calender.png"
                                alt="Healthcare Dashboard"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Green Card - Positioned at bottom right area */}
                <div className="absolute bottom-8 right-4 sm:bottom-4 sm:right-8 lg:bottom-8 lg:right-16 w-full max-w-xs sm:max-w-sm lg:max-w-lg z-10">
                    <div className="bg-[#2D9D78] rounded-xl overflow-hidden shadow-2xl">
                        <div className="p-2 sm:p-4 lg:p-6">
                            <h2 className="text-mg sm:text-lg lg:text-xl font-bold text-white mb-4">
                                Sed ut perspiciatis Unde Seduo ut perspiciatis
                            </h2>
                            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>
                        </div>

                        <div className="border-t border-white/20 w-full"></div>
                        <div className="bg-[#2D9D78] p-4 flex justify-end">
                            <button className="bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-all">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section - Light Green with Wave, Circular Image and Cards */}
            <div className="bg-[#EFF8F5] relative min-h-[400px] sm:min-h-[500px] lg:min-h-[800px] flex items-center py-12 lg:py-0 overflow-hidden">
                <div className="w-full flex flex-col lg:flex-row items-center relative">
                    {/* Left Side - Wave Image with Text Overlay and Circular Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[900px] flex items-start mb-12 lg:mb-0">
                        {/* Wave Background - Positioned at TOP LEFT */}
                        <div className="absolute top-0 left-[-10%] w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-100 z-10">
                            <img
                                src="/EHRandPMS/Wave.png"
                                alt="Wave"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Content - Positioned at Top Left next to wave */}
                        <div className="relative z-30 w-full flex flex-col items-start justify-start px-4 sm:px-6 lg:px-12 pt-12 lg:pt-24 ml-32">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 text-left">
                                <span className="text-[#5FCFA0]">Sed ut perspiciatis</span>{' '}
                                <span className="text-[#F4A261]">Unde</span>
                            </h1>

                            <button className="bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition-all text-sm sm:text-base shadow-lg">
                                CONTACT US
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>

                        {/* Single Circular Decorative Image - Centered on Left */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 sm:w-44 lg:w-48 xl:w-48 h-auto z-20">
                            <img
                                src="/EHRandPMS/circular.png"
                                alt="Decorative circular"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side - 4 Cards Grid */}
                    <div className="w-full lg:w-1/2 flex items-start justify-start lg:justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-2xl px-4 sm:px-6 lg:px-12 w-full">
                            {/* Card 1 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A261] text-4xl sm:text-5xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black pt-2 sm:pt-3 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words pl-0">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A261] text-4xl sm:text-5xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black pt-2 sm:pt-3 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words pl-0">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A261] text-4xl sm:text-5xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black pt-2 sm:pt-3 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words pl-0">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="break-words">
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="text-[#F4A261] text-4xl sm:text-5xl font-light flex-shrink-0">+</div>
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black pt-2 sm:pt-3 break-words">
                                        Duis aute irure
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words pl-0">
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, su
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Stone Image with Gradient Overlay */}
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
                {/* Stone Background Image with Gradient Overlay - Right to Left */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 2.26%, rgba(1, 98, 57, 0.7) 62.16%, rgba(0, 122, 70, 0.7) 100%), url('/EHRandPMS/Stone.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                {/* Top Left Green Card with Text and Arrow */}
                <div className="absolute sm:left-8 top-0 sm:top-0 lg:top-[-30%] lg:left-16 w-full max-w-xs sm:max-w-sm lg:max-w-md z-20">
                    <div className="bg-[#2D9D78] rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-6 sm:p-8 lg:p-10">
                            <p className="text-white text-sm sm:text-base leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                            </p>
                        </div>

                        <div className="border-t border-white/30 w-full"></div>
                        <div className="bg-[#2D9D78] p-4 sm:p-5 flex justify-end">
                            <button className="bg-white rounded-full p-3 hover:bg-gray-100 transition-all">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D9D78]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - White Text Heading and Three Paragraphs */}
                <div className="absolute top-24 right-4 sm:top-32 sm:right-8 lg:top-40 lg:right-16 max-w-md lg:max-w-lg xl:max-w-xl space-y-6 sm:space-y-8 lg:space-y-10 z-20">
                    {/* Main Heading */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                            Sed ut perspiciatis Unde Seduo
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                        </p>
                    </div>

                    {/* Separator Line */}
                    <div className="border-t border-white/40 w-full"></div>

                    {/* Second Paragraph */}
                    <div>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                        </p>
                    </div>

                    {/* Separator Line */}
                    <div className="border-t border-white/40 w-full"></div>

                    {/* Third Paragraph */}
                    <div>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla deserunt mollit anim id est laborum. occaecat cupidatat non
                        </p>
                    </div>
                </div>

                {/* Bottom Left - Gradient Text Box */}
                <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 lg:bottom-16 lg:left-16 w-full max-w-xs sm:max-w-sm lg:max-w-lg z-20">
                    <div className="bg-gradient-to-br from-[#1A4D3E]/70 to-[#2D5F4E]/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-xl border border-white/10">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-[#5FCFA0] to-[#F4A261] bg-clip-text text-transparent whitespace-nowrap">
                                Sed ut perspiciatis Unde
                            </span>
                        </h2>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mt-1">
                            <span className="bg-gradient-to-r from-[#5FCFA0] to-[#F4A261] bg-clip-text text-transparent">
                                Seduo ut perspiciatis
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ParaDescription;

