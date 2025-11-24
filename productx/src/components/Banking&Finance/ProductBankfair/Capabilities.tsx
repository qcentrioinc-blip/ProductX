

const Capabilities = () => {
    return (
        <>
            
            <div
                className="relative min-h-screen"
                style={{
                    backgroundImage: "url('/Products/CapabilityBackground.png')",
                    backgroundPosition: "bottom",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="max-w-8xl lg:mx-10 py-20 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-[516px_1fr] gap-10">
                        {/* Left Column - Sticky */}
                        <div className="lg:sticky lg:top-20 lg:h-fit">
                            <div
                                className="space-y-8"
                                style={{
                                    width: '516px',
                                    maxWidth: '100%'
                                }}
                            >
                                {/* Title */}
                                <h1
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                        fontWeight: 700,
                                        fontSize: '40px',
                                        lineHeight: '120%',
                                        letterSpacing: '0%',
                                        color: '#2B68C3',
                                        maxWidth: '402.7060546875px'
                                    }}
                                >
                                    <div style={{ color: '#2B68C3' }}>
                                        Consecte adipiscing
                                    </div>
                                    <div style={{ color: 'gray' }}>
                                        Con secte adipi
                                    </div>
                                </h1>

                                {/* Description */}
                                <p
                                    style={{
                                        fontFamily: "'Quicksand', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '140%',
                                        letterSpacing: '0%',
                                        color: '#141414',
                                        maxWidth: '518px'
                                    }}
                                >
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                {/* List Items */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"
                                            style={{
                                                width: '34px',
                                                height: '34px'
                                            }}
                                        />
                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '100%',
                                                color: '#141414'
                                            }}
                                        >
                                            Duis aute irure
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"
                                            style={{
                                                width: '34px',
                                                height: '34px'
                                            }}
                                        />
                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '100%',
                                                color: '#141414'
                                            }}
                                        >
                                            Duis aute irure
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0"
                                            style={{
                                                width: '34px',
                                                height: '34px'
                                            }}
                                        />
                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '100%',
                                                color: '#141414'
                                            }}
                                        >
                                            Duis aute irure
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Scrollable Cards */}
                        <div
                            className="flex flex-col items-end gap-6"
                            style={{
                                width: '1050px',
                                maxWidth: '100%'
                            }}
                        >
                            {/* Card 01 */}
                            <div
                                style={{
                                    width: '100%',
                                    maxWidth: '971px',
                                    minHeight: '290px',
                                    borderRadius: '16px',
                                    padding: '24px 22px',
                                    backgroundColor: '#F5F5F5',
                                    border: '1px solid #E0E0E0'
                                }}
                            >
                                <div className="flex gap-6">
                                    <div
                                        style={{
                                            fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                            fontWeight: 700,
                                            fontSize: '70px',
                                            lineHeight: '80px',
                                            color: 'gray',
                                            flexShrink: 0
                                        }}
                                    >
                                        01
                                    </div>

                                    <div className="flex-1">
                                        <h3
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                                fontWeight: 600,
                                                fontSize: '32px',
                                                lineHeight: '38px',
                                                color: '#2B68C3',
                                                marginBottom: '32px',
                                                marginTop: '20px'
                                            }}
                                        >
                                            Banks
                                        </h3>

                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '150%',
                                                color: '#3A3A3A',
                                                marginLeft: '190px',

                                            }}
                                        >
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat<br /><br />
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 02 */}
                            <div
                                style={{
                                    width: '100%',
                                    maxWidth: '971px',
                                    minHeight: '290px',
                                    borderRadius: '16px',
                                    padding: '24px 22px',
                                    backgroundColor: '#F5F5F5',
                                    border: '1px solid #E0E0E0'
                                }}
                            >
                                <div className="flex gap-6">
                                    <div
                                        style={{
                                            fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                            fontWeight: 700,
                                            fontSize: '70px',
                                            lineHeight: '80px',
                                            color: 'gray',
                                            flexShrink: 0
                                        }}
                                    >
                                        02
                                    </div>

                                    <div className="flex-1">
                                        <h3
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                                fontWeight: 600,
                                                fontSize: '32px',
                                                lineHeight: '38px',
                                                color: '#2B68C3',
                                                marginBottom: '32px',
                                                marginTop: '20px'
                                            }}
                                        >
                                            Banks
                                        </h3>

                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '15px',
                                                lineHeight: '150%',
                                                color: '#3A3A3A',
                                                marginLeft: '160px'
                                            }}
                                        >
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat<br /><br />
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 03 */}
                            <div
                                style={{
                                    width: '100%',
                                    maxWidth: '971px',
                                    minHeight: '290px',
                                    borderRadius: '16px',
                                    padding: '24px 22px',
                                    backgroundColor: '#F5F5F5',
                                    border: '1px solid #E0E0E0'
                                }}
                            >
                                <div className="flex gap-6">
                                    <div
                                        style={{
                                            fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                            fontWeight: 700,
                                            fontSize: '70px',
                                            lineHeight: '80px',
                                            color: 'gray',
                                            flexShrink: 0
                                        }}
                                    >
                                        03
                                    </div>

                                    <div className="flex-1">
                                        <h3
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                                fontWeight: 600,
                                                fontSize: '32px',
                                                lineHeight: '38px',
                                                color: '#2B68C3',
                                                marginBottom: '32px',
                                                marginTop: '20px',
                                            }}
                                        >
                                            Banks
                                        </h3>

                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '15px',
                                                lineHeight: '150%',
                                                color: '#3A3A3A',
                                                marginLeft: '160px'
                                            }}
                                        >
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat<br /><br />
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 04 */}
                            <div
                                style={{
                                    width: '100%',
                                    maxWidth: '971px',
                                    minHeight: '290px',
                                    borderRadius: '16px',
                                    padding: '24px 22px',
                                    backgroundColor: '#F5F5F5',
                                    border: '1px solid #E0E0E0'
                                }}
                            >
                                <div className="flex gap-6">
                                    <div
                                        style={{
                                            fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                            fontWeight: 700,
                                            fontSize: '70px',
                                            lineHeight: '80px',
                                            color: 'gray',
                                            flexShrink: 0
                                        }}
                                    >
                                        04
                                    </div>

                                    <div className="flex-1">
                                        <h3
                                            style={{
                                                fontFamily: "'Bricolage Grotesque', Arial, sans-serif",
                                                fontWeight: 600,
                                                fontSize: '32px',
                                                lineHeight: '38px',
                                                color: '#2B68C3',
                                                marginTop: '20px',
                                                marginBottom: '32px',
                                        
                                            }}
                                        >
                                            Banks
                                        </h3>

                                        <p
                                            style={{
                                                fontFamily: "'Quicksand', sans-serif",
                                                fontWeight: 400,
                                                fontSize: '15px',
                                                lineHeight: '150%',
                                                color: '#3A3A3A',
                                                marginLeft: '160px'
                                            }}
                                        >
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat<br /><br />
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Capabilities;
