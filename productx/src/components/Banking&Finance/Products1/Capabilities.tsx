const Capabilities = () => {
    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-24">
                {/* Left Column - Responsive: Not sticky on mobile/tablet, sticky on desktop */}
                <div className="lg:sticky lg:top-12 lg:h-fit">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {/* Header */}
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-6 sm:w-7 md:w-8 h-1 bg-[#ededed] mt-2 sm:mt-2.5 md:mt-3"></div>
                                <div className="flex-1">
                                    <p className="text-sm sm:text-base md:text-[18px] text-[#090909] font-medium" style={{ fontFamily: "Inter" }}>
                                        Capabilities
                                    </p>
                                </div>
                            </div>

                            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-[40px] font-bold text-[#2A2A2A] leading-tight" style={{ fontFamily: "Switzer" }}>
                                At vero eos et accusamus et iusto odio dignissimos
                            </h1>
                            <p className="text-sm sm:text-base md:text-[16px] text-[#53535C] leading-relaxed font-bold" style={{ fontFamily: "Switzer" }}>
                                Adapts to shifting priorities and real workflows — keeping projects aligned, teams accountable, and
                                decisions clear.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-2 sm:space-y-3 flex flex-col items-start">
                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f5f5f5] border border-gray-300 rounded-full w-fit">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#666] flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#666]"></div>
                                </div>
                                <span className="text-[#333] font-medium text-xs sm:text-sm" style={{ fontFamily: "Inter" }}>
                                    Built with team logic
                                </span>
                            </div>

                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f5f5f5] border border-gray-300 rounded-full w-fit">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-[#333] font-medium text-xs sm:text-sm" style={{ fontFamily: "Inter" }}>
                                    Adapts as work evolves
                                </span>
                            </div>

                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f5f5f5] border border-gray-300 rounded-full w-fit">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span className="text-[#333] font-medium text-xs sm:text-sm" style={{ fontFamily: "Inter" }}>
                                    Insights without setup
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Normal scrolling cards */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Dynamic Workload Balancing Card */}
                    <div className="bg-[#fbfbfb] border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
                        <div className="flex gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="2" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Dynamic Workload Balancing</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    Tasks are automatically distributed based on each member's bandwidth, so no one's overbooked or
                                    underused.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Context-Aware Task Views Card */}
                    <div className="bg-[#fbfbfb] border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
                        <div className="flex gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Context-Aware Task Views</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    Switch seamlessly between project views — from team-wide timelines to individual to-dos — all tied to
                                    real context.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Built-In Decision Intelligence Card */}
                    <div className="bg-[#fbfbfb] border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
                        <div className="flex gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Built-In Decision Intelligence</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    AI analyzes patterns in your team's workflows to recommend next actions, assign owners, and flag
                                    inefficiencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Collaborative Task Canvas Card */}
                    <div className="bg-[#fbfbfb] border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
                        <div className="flex gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Collaborative Task Canvas</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    Each task has its own collaborative thread with notes, comments, and file sharing — no need to switch
                                    tools.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise-Ready Structure Card */}
                    <div className="bg-[#fbfbfb] border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
                        <div className="flex gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Enterprise-Ready Structure</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    From small teams to enterprise org charts, structure tasks across departments, assign roles, and
                                    maintain clarity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Analytics Dashboard Card */}
                    <div className="bg-[#fbfbfb] border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
                        <div className="flex gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Advanced Analytics Dashboard</h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    Get real-time insights into team productivity, project bottlenecks, and resource allocation with detailed analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;
