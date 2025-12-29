import { H2, H3, P } from "../../../styles/Typography";

const Capabilities = () => {
    return (
        <>
            <div
                className="relative min-h-screen"
                style={{
                    // backgroundImage: "url('/Products/CapabilityBackground.png')",
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
            >   
                <div className="max-w-8xl xl:mx-10 mx-4 py-20 px-4">
                    {/* Desktop: Side by Side | Mobile: Stacked */}
                    <div className="grid grid-cols-1 xl:grid-cols-[minmax(400px,516px)_1fr] gap-10 xl:gap-16">
                        
                        {/* Left Column - Sticky on Desktop Only */}
                        <div className="xl:sticky xl:top-20 xl:h-fit">
                            <div className="space-y-6 lg:space-y-8 w-full max-w-[516px]">
                                
                                {/* Title - Responsive Font Size */}
                                <H2
                                    
                                >
                                    <div style={{ color: '#2B68C3' }}>
                                        Consecte 
                                    </div>
                                    <div style={{ color: 'gray' }}>
                                        Con secte adipi
                                    </div>
                                </H2>

                                {/* Description - Responsive Font */}
                                <P
                                    
                                >
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </P>

                                {/* List Items - Responsive Icons & Text */}
                                <div className="flex flex-col gap-3 lg:gap-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div
                                                className="rounded-full bg-gray-300 flex-shrink-0"
                                                style={{
                                                    width: 'clamp(28px, 4vw, 34px)',
                                                    height: 'clamp(28px, 4vw, 34px)'
                                                }}
                                            />
                                            <P
                                                className="leading-[100%]"
                                                
                                            >
                                                Duis aute irure
                                            </P>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Scrollable Cards */}
                        <div className="flex flex-col items-end gap-6 w-full">
                            
                            {/* Card Component (Repeated 4 times) */}
                            {[
                                { number: '01', title: 'Banks' },
                                { number: '02', title: 'Banks' },
                                { number: '03', title: 'Banks' },
                                { number: '04', title: 'Banks' }
                            ].map((card) => (
                                <div
                                    key={card.number}
                                    className="w-full rounded-2xl p-2 sm:p-4 lg:p-4"
                                    style={{
                                        maxWidth: '971px',
                                        minHeight: '290px',
                                        backgroundColor: '#F5F5F5',
                                        border: '1px solid #E0E0E0'
                                    }}
                                >
                                    {/* Desktop Layout: Number + Content Side by Side */}
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        
                                        {/* Card Number - Responsive Size */}
                                        <div
                                            className="font-bold flex-shrink-0"
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                                fontSize: 'clamp(32px, 8vw, 58px)', // Scales 48px to 70px
                                                lineHeight: '1.1',
                                                color: 'gray',
                                            }}
                                        >
                                            {card.number}
                                        </div>

                                        {/* Card Content */}
                                        <div className="flex-1">
                                            <H3 className="text-[#2B68C3] xl:mt-5">
                                               
                                                {card.title}
                                            </H3>

                                            {/* Description - NO LEFT MARGIN on Mobile */}
                                            <p
                                                className="leading-[150%]"
                                                style={{
                                                    fontFamily: "'Quicksand', sans-serif",
                                                    fontWeight: 400,
                                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                                    color: '#3A3A3A',
                                                    // Only add left margin on large screens
                                                    marginLeft: window.innerWidth >= 1024 ? '160px' : '0'
                                                }}
                                            >
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat
                                                <br /><br />
                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Capabilities;
