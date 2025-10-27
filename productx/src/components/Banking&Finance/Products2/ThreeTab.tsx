import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const ThreeTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Suwrepher', 'Adipiscing', 'Consecte'];

    const tabContents = [
        {
            title: 'Suwrepher adipiscing',
            text: 'Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Adipiscing consecte',
            text: 'Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Consecte adipiscing',
            text: 'Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];
    
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen">
            <div className="border-b border-gray-800 w-full">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile & Tablet: Horizontal Scrollable Tabs in Single Row */}
                    <div className="lg:hidden overflow-x-auto scrollbar-hide ">
                        <div className="flex min-w-max gap-4">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg font-normal transition-all duration-300 rounded-xl ${
                                        activeTab === index
                                            ? 'bg-gray-600 text-white'
                                            : 'bg-transparent text-white border-2 border-gray-600 hover:bg-gray-800'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Original Tab Navigation (unchanged) */}
                    <div className="hidden lg:flex gap-4">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`px-40 py-12 text-xl font-normal transition-all duration-300 rounded-3xl ${
                                    activeTab === index
                                        ? 'bg-gray-600 text-white'
                                        : 'bg-transparent text-white border-2 border-gray-600 hover:bg-gray-800'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-normal leading-tight">
                            {tabContents[activeTab].title}
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {tabContents[activeTab].text}
                        </p>
                        <button className="bg-white text-black px-8 py-4 rounded hover:bg-gray-200 transition-colors flex items-center gap-2 font-medium">
                            CONTACT US
                            <ArrowUpRight size={20} />
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-end">
                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Business meeting"
                            className="w-full max-w-7xl h-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    )
}

export default ThreeTab;
