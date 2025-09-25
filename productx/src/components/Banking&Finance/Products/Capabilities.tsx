const Capabilities = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Column - Added custom scrollbar styling to hide straight lines */}
                <div className="h-screen overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="space-y-6">
                            <p className="text-sm text-gray-600 font-medium">Capabilities</p>
                            <h1 className="text-xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                                At vero eos et accusamus et iusto odio dignissimos
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed font-bold">
                                Adapts to shifting priorities and real workflows — keeping projects aligned, teams accountable, and
                                decisions clear.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 px-3 py-3 rounded-xl border border-gray-300">
                                <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                </div>
                                <span className="text-gray-700 font-medium">Built with team logic</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-3 rounded-xl border border-gray-300">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">Adapts as work evolves</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-3 rounded-xl border border-gray-300">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Insights without setup
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Removed scrolling and height constraints to make cards static */}
                <div className="space-y-6">
                    {/* Dynamic Workload Balancing Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="2" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dynamic Workload Balancing</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Tasks are automatically distributed based on each member's bandwidth, so no one's overbooked or
                                    underused.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Context-Aware Task Views Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Context-Aware Task Views</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Switch seamlessly between project views — from team-wide timelines to individual to-dos — all tied to
                                    real context.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Built-In Decision Intelligence Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Built-In Decision Intelligence</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    AI analyzes patterns in your team's workflows to recommend next actions, assign owners, and flag
                                    inefficiencies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Collaborative Task Canvas Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Task Canvas</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Each task has its own collaborative thread with notes, comments, and file sharing — no need to switch
                                    tools.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise-Ready Structure Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Ready Structure</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    From small teams to enterprise org charts, structure tasks across departments, assign roles, and
                                    maintain clarity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capabilities
