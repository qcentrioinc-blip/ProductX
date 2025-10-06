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
                    {/* Mobile & Tablet: Responsive Tab Navigation */}
                    <div className="lg:hidden">
                        <div className="flex flex-col sm:flex-row overflow-x-auto">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-6 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-lg font-normal transition-colors flex-shrink-0 min-w-0 w-full sm:w-auto ${
                                        activeTab === index
                                            ? 'bg-gray-600 text-white'
                                            : 'bg-black text-white hover:bg-gray-900'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Original Tab Navigation (unchanged) */}
                    <div className="hidden lg:flex">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(index)}
                                className={`px-44 py-12 text-xl font-normal transition-colors ${
                                    activeTab === index
                                        ? 'bg-gray-600 text-white'
                                        : 'bg-black text-white hover:bg-gray-900'
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
        </div>
    )
}

export default ThreeTab;
