import { ArrowUpRight, Play } from 'lucide-react';
import { H1, P } from '../../../styles/Typography';

const Overview = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="flex-1 px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
                <H1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8 text-center lg:text-left">
                    Smarter Banking,<br />
                    Simplified with AI
                </H1>

                <P className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit.
                </P>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start">
                    <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                        CONTACT SALES
                        <ArrowUpRight size={20} />
                    </button>

                    <button className="w-full sm:w-auto text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-3 border border-gray-600 hover:border-gray-400 transition-colors">
                        <Play size={16} fill="white" />
                        WATCH OVERVIEW
                    </button>
                </div>
            </div>

            {/* Right Section - Orange Gradient */}
            <div className="flex-1 bg-black flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                <img 
                    src="/Products/Products2/Overview.png" 
                    alt="Banking AI Overview" 
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto object-contain" 
                />
            </div>
        </div>
    );
};

export default Overview;
