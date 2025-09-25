import { motion } from 'framer-motion';
 
const InsightThought = () => {
 
    return (
        <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-0" id='blogs'>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-12">Insights and Thoughts</h1>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* First Card */}
                <motion.div
                    className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="aspect-[4/3] relative overflow-hidden group">
                        <img
                            src="https://framerusercontent.com/images/Jm14NVS1DWCTSNRjQLkBTLtEKok.jpg?scale-down-to=1024&width=6…"
                            alt="Modern architectural interior"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Moving Text Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="overflow-hidden">
                                <motion.div
                                    className="text-white text-lg font-semibold whitespace-nowrap px-1"
                                    animate={{
                                        x: [80, -80]
                                    }}
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
                    <div className="p-4 sm:p-6">
                        <p className="text-sm text-muted-foreground mb-3">Sedut perspiciatis</p>
                        <h3 className="text-base sm:text-lg font-medium text-foreground mb-4 leading-relaxed">
                            At vero eos et accusamus et iusto odio dignissimos ducimus
                        </h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span>Author</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>JANUARY 19, 2024</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
 
                {/* Second Card */}
                <motion.div
                    className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="aspect-[4/3] relative overflow-hidden group">
                        <img
                            src="https://framerusercontent.com/images/MDtFSJaF3MhabVjn223xx2IMk.jpg?scale-down-to=1024&width=400…"
                            alt="Modern architectural interior"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Moving Text Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="overflow-hidden">
                                <motion.div
                                    className="text-white text-lg font-semibold whitespace-nowrap px-1"
                                    animate={{
                                        x: [80, -80]
                                    }}
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
                    <div className="p-4 sm:p-6">
                        <p className="text-sm text-muted-foreground mb-3">Sedut perspiciatis</p>
                        <h3 className="text-base sm:text-lg font-medium text-foreground mb-4 leading-relaxed">
                            At vero eos et accusamus et iusto odio dignissimos ducimus
                        </h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span>Author</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2z"
                                    />
                                </svg>
                                <span>JANUARY 18, 2024</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
 
                {/* Third Card */}
                <motion.div
                    className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="aspect-[4/3] relative overflow-hidden group">
                        <img
                            src="https://framerusercontent.com/images/v1ltoVHr1qjuj63noI3YsrEqSNg.jpg?scale-down-to=1024&width=3…"
                            alt="Modern living room interior"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Moving Text Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="overflow-hidden">
                                <motion.div
                                    className="text-white text-lg font-semibold whitespace-nowrap px-1"
                                    animate={{
                                        x: [80, -80]
                                    }}
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
                    <div className="p-4 sm:p-6">
                        <p className="text-sm text-muted-foreground mb-3">Sedut perspiciatis</p>
                        <h3 className="text-base sm:text-lg font-medium text-foreground mb-4 leading-relaxed">
                            At vero eos et accusamus et iusto odio dignissimos ducimus
                        </h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span>Author</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>DECEMBER 5, 2023</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
 
export default InsightThought;
 
 