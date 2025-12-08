

const SecondSection = () => {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white py-12 px-8 sm:px-12 md:px-22 border-t border-gray-200 relative">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <h2
                    className="text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left"
                    style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 600,
                        fontSize: '48px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#166D48'
                    }}
                >
                    Duis aute
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 flex-1 justify-center md:justify-start w-full md:w-auto">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                            style={{
                                padding: '32px 82px',
                                borderRadius: '8px'
                            }}
                        >
                            <span className="text-gray-300 font-semibold text-xl">Logo</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default SecondSection
