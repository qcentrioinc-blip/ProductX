import { motion } from 'framer-motion';
import { H3 } from '../../styles/Typography';
import { Link } from 'react-router-dom';
 
const InsightThought = () => {
    return (
        <div className="bg-[#E7E7E7] py-12 sm:py-16" id='blogs'>
            <div className="max-w-8xl mx-10 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8 sm:mb-12">
                    <H3 className="text-[#2B68C3]">Consecte adipiscing</H3>
                    <Link to="/industries/banking-and-finance/blogs">
                    <button className="bg-white px-6 py-2 rounded-md text-sm font-medium hover:shadow-md transition-shadow flex items-center gap-2">
                        VIEW ALL
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    </Link>
                </div>
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* First Card */}
                    <motion.div
                        className="bg-white rounded-lg overflow-hidden shadow-md border-16 border-white cursor-pointer"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="aspect-[4/3] relative overflow-hidden group">
                            <img
                                src="https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024"
                                alt="Modern architectural interior"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="overflow-hidden">
                                    <motion.div
                                        className="text-white text-lg font-semibold whitespace-nowrap px-1"
                                        animate={{ x: [80, -80] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    >
                                        READ DETAILS • READ DETAILS
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-600 mb-3">Lorem ipsum</p>
                            <h3 className="text-md  font-medium text-gray-900 mb-4 leading-relaxed">
                                Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>Author</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>AUGUST 19,2025</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        className="bg-white rounded-lg overflow-hidden shadow-md border-16 border-white cursor-pointer"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="aspect-[4/3] relative overflow-hidden group">
                            <img
                                src="https://framerusercontent.com/images/MDtFSJaF3MhabVjn223xx2IMk.jpg?scale-down-to=1024"
                                alt="Modern architectural interior"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="overflow-hidden">
                                    <motion.div
                                        className="text-white text-lg font-semibold whitespace-nowrap px-1"
                                        animate={{ x: [80, -80] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    >
                                        READ DETAILS • READ DETAILS
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-600 mb-3">Lorem ipsum</p>
                            <h3 className="text-md  font-medium text-gray-900 mb-4 leading-relaxed">
                                Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>Author</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>AUGUST 19,2025</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        className="bg-white rounded-lg overflow-hidden shadow-md border-16 border-white cursor-pointer"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="aspect-[4/3] relative overflow-hidden group">
                            <img
                                src="https://framerusercontent.com/images/v1ltoVHr1qjuj63noI3YsrEqSNg.jpg?scale-down-to=1024"
                                alt="Modern living room interior"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="overflow-hidden">
                                    <motion.div
                                        className="text-white text-lg font-semibold whitespace-nowrap px-1"
                                        animate={{ x: [80, -80] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    >
                                        READ DETAILS • READ DETAILS
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-600 mb-3">Lorem ipsum</p>
                            <h3 className="text-md font-medium text-gray-900 mb-4 leading-relaxed">
                                Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span>Author</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>AUGUST 19,2025</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default InsightThought;
