"use client"

const Harper = () => {
    return (
        <div className="min-h-screen bg-[#ecf4ff] px-6 md:px-20 py-16">
            {/* Heading - Responsive margins */}
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 text-left ml-4 sm:ml-12 md:ml-24 mb-8 md:mb-0">
                Sed ut perspiciatis Sed ut
            </h1>

            {/* Stage - Responsive container */}
            <div className="relative mx-auto max-w-[1200px] h-[300px] sm:h-[400px] md:h-[560px] rounded-[24px] overflow-visible">

                {/* Harper1 - Center with responsive sizing */}
                <img
                    src="/Products/Products7/Harper1.png"
                    alt="Harper1"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[99%] h-auto object-contain z-10"
                />

                {/* Harper2 - Responsive positioning and sizing */}
                <img
                    src="/Products/Products7/Harper2.png"
                    alt="Harper2"
                    className="absolute 
                        right-[-40px] sm:right-[-80px] md:right-[-160px] 
                        top-1/2 -translate-y-1/2 
                        w-[15%] sm:w-[13%] md:w-[12%] 
                        h-[80%] sm:h-[90%] md:h-[100%] 
                        object-contain z-50"
                />
            </div>
        </div>
    )
}

export default Harper
