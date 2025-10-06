import { ArrowRight } from 'lucide-react';

const NewFooter = () => {
    return (
        <footer className="min-h-screen bg-[#f5f5f5] px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 relative overflow-hidden flex items-center">
            {/* Background Circles - Hidden on mobile, visible from tablet up */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="absolute top-1/2 left-[8%] -translate-y-1/2 w-64 h-64 rounded-full bg-gray-200 opacity-40"></div>
                <div className="absolute top-1/2 left-[28%] -translate-y-1/2 w-48 h-48 rounded-full bg-gray-200 opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-gray-200 opacity-40"></div>
                <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-56 h-56 rounded-full bg-gray-200 opacity-40"></div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto relative z-10">
                {/* Mobile & Tablet: Stack layout | Desktop: 14-column grid */}
                <div className="flex flex-col gap-12 sm:gap-14 lg:gap-0 lg:grid lg:grid-cols-14 lg:items-start">
                    
                    {/* Newsletter Section */}
                    <div className="lg:col-span-3">
                        <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-2 leading-tight">Updates?</h3>
                        <p className="text-gray-500 text-[14px] sm:text-[15px] mb-6 sm:mb-8 leading-relaxed">Sign in to our newsletter.</p>

                        <div className="mb-2">
                            <label className="text-gray-500 text-[13px] block mb-2">Email.</label>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="jane@framer.com"
                                    className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-[14px] text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                                <button className="bg-black text-white px-3.5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                                    <ArrowRight className="w-[18px] h-[18px]" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Site Map Section */}
                    <div className="lg:col-span-1 lg:col-start-8">
                        <h4 className="text-gray-500 text-[13px] font-medium mb-4">Site map.</h4>
                        <nav className="space-y-2">
                            {/* Home Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Home.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Home.</span>
                                </span>
                            </a>

                            {/* Projects Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Projects.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Projects.</span>
                                </span>
                            </a>

                            {/* About Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">About.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">About.</span>
                                </span>
                            </a>

                            {/* Blog Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Blog.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Blog.</span>
                                </span>
                            </a>

                            {/* Connect Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Connect.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">Connect.</span>
                                </span>
                            </a>
                        </nav>
                    </div>

                    {/* Social Section */}
                    <div className="lg:col-span-3">
                        <h4 className="text-gray-500 text-[13px] font-medium mb-4">Social.</h4>
                        <nav className="space-y-2">
                            {/* X Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">X.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">X.</span>
                                </span>
                            </a>

                            {/* IG Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">IG.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">IG.</span>
                                </span>
                            </a>

                            {/* BE Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">BE.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">BE.</span>
                                </span>
                            </a>

                            {/* DB Link */}
                            <a href="#" className="block relative overflow-hidden h-[28px] group">
                                <span className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">DB.</span>
                                    <span className="block text-gray-900 text-[20px] font-semibold leading-[28px] h-[28px]">DB.</span>
                                </span>
                            </a>
                        </nav>
                    </div>

                    {/* Footer Info Section */}
                    <div className="lg:col-span-3">
                        <div className="text-gray-500 text-[13px] space-y-1 leading-relaxed">
                            <p>Made by Tom D.</p>
                            <p>Last updated 9/17/24.</p>
                            <p>Copyright 2025 moro. All rights reserved.</p>
                        </div>

                        <div className="mt-6 sm:mt-8 space-y-1.5">
                            <a href="#" className="block text-gray-500 text-[13px] hover:text-gray-900 transition-colors">Terms of service.</a>
                            <a href="#" className="block text-gray-500 text-[13px] hover:text-gray-900 transition-colors">Privacy policy.</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default NewFooter;
