'use client';
const ResourceDetail = () => {
    return (
        <>
            <section className="w-full bg-white mt-16">
                {/* Top section with background pattern */}
                <div className="relative">
                    {/* ✅ Background grid pattern - fills this whole block */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundImage: `url('/AIOptimization/AIResourceBack.png')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'top center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.80, // Very light - almost invisible
                        }}
                    />
                    <div className="relative mx-4 sm:mx-6 lg:mx-10 lg:max-w-8xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-24">
                        {/* Content wrapper */}
                        <div className="relative z-10 top-0 lg:top-40">
                            {/* Heading */}
                            <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
                                <h2
                                    style={{
                                        fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                        fontWeight: 700,
                                        fontStyle: 'normal',
                                        fontSize: 'clamp(32px, 5vw, 72px)', // small on mobile, 72px on large
                                        lineHeight: '100%',
                                        letterSpacing: '0',
                                        color: 'var(--Primary-AI-Optimization, #020059)',
                                    }}
                                    className="
                    font-semibold
                    leading-[1]
                    text-[30px] sm:text-[40px] lg:text-[56px]
                    lg:whitespace-nowrap
                  "
                                >
                                    We are Available on the
                                    <br />
                                    Google Cloud Resources
                                </h2>
                            </div>

                            {/* Image card */}
                            <div className="lg:max-w-8xl">
                                <div
                                    className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                                    style={{
                                        borderRadius: '20px',
                                    }}
                                >
                                    <div className="w-full bg-[#0056ff]">
                                        <img
                                            src="/AIOptimization/ResourceDetail.png"
                                            alt="Abstract yellow flower on blue water"
                                            className="w-full h-[220px] sm:h-[320px] lg:h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text content section - NO background pattern */}
                <div className="mx-4 sm:mx-6 lg:mx-10 max-w-4xl lg:max-w-5xl xl:max-w-6xl relative top-0 lg:top-30 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24 mb-12">
                    <div className="space-y-8">
                        {/* Intro paragraph */}
                        <div className="space-y-4">
                            <p
                                className="text-sm sm:text-base lg:text-lg"
                                style={{
                                    fontFamily: "'Quicksand', system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    lineHeight: '140%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                We are pleased to offer a HIPAA-compliant Business Associate agreement (BAA) to enable customers across the healthcare industry to work with us to develop secure custom models that meet their specific business needs. Company
                            </p>

                            <div className="flex flex-wrap items-center gap-2">
                                <span
                                    className="text-sm sm:text-base font-semibold text-gray-900"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Share:
                                </span>
                            </div>

                            <p
                                className="text-sm sm:text-base lg:text-lg"
                                style={{
                                    fontFamily: "'Quicksand', system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    lineHeight: '140%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                For healthcare providers, insurers, and technology partners, compliance is not just a legal requirement, it's a cornerstone of trust and reliability. That's why we at Cohere are pleased to offer a HIPAA-compliant Business Associate agreement (BAA) to enable customers across the healthcare industry to work with us to develop secure custom models that meet their specific business needs.
                            </p>
                        </div>

                        {/* What is HIPAA */}
                        <div className="space-y-4">
                            <h3
                                className="font-semibold text-xl sm:text-2xl lg:text-[32px]"
                                style={{
                                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                    fontWeight: 600,
                                    fontStyle: 'normal',
                                    lineHeight: '120%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                What is HIPAA?
                            </h3>

                            <p
                                className="text-sm sm:text-base lg:text-lg"
                                style={{
                                    fontFamily: "'Quicksand', system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    lineHeight: '140%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                The Health Insurance Portability and Accountability Act (HIPAA) sets federal standards in the United States for securing health information (PHI). It applies to covered entities like insurance companies, doctors, and clinics who directly collect and handle PHI to provide healthcare services. It also applies to "Business Associates," like technology providers, that need to use or disclose PHI in order to perform services on behalf of HIPAA-regulated customers.
                            </p>
                        </div>

                        {/* Steps Section */}
                        <div className="space-y-4">
                            <p
                                className="text-sm sm:text-base lg:text-lg"
                                style={{
                                    fontFamily: "'Quicksand', system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    lineHeight: '140%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                Steps to setting up a BAA with Cohere for custom model development
                            </p>
                            <ol className="space-y-3 list-decimal list-inside">
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Contact your dedicated account team at{' '}
                                    <a href="mailto:support@cohere.com" className="text-blue-600 hover:underline">
                                        support@cohere.com
                                    </a>{' '}
                                    to discuss your use case
                                </li>
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    After a review of the use case, HIPAA-related compliance checks, and an agreement on commercial matters, Cohere will provide a BAA to discuss the custom model development process and the transmission of HIPAA-regulated data to Cohere for the purpose of developing a custom model and deploying it
                                </li>
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Once the custom model is developed, it is deployed in your own private deployment environment.
                                </li>
                            </ol>
                        </div>

                        {/* Benefits Section */}
                        <div className="space-y-4">
                            <h3
                                className="text-lg sm:text-xl lg:text-2xl"
                                style={{
                                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                    fontWeight: 700,
                                    fontStyle: 'bold',
                                    lineHeight: '120%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                Benefits of LLM customization with Cohere
                            </h3>
                            <ul className="space-y-2 list-disc list-inside">
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Robust security measures: Your model is designed with multiple layers of security, including encryption, access controls, and regular audits
                                </li>
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Data protection: We implement strict protocols to ensure that PHI is handled, stored, and transmitted securely
                                </li>
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Compliance monitoring: We conduct regular updates ensure ongoing adherence to HIPAA regulations
                                </li>
                            </ul>
                            <p
                                className="text-sm sm:text-base lg:text-lg"
                                style={{
                                    fontFamily: "'Quicksand', system-ui, sans-serif",
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                    lineHeight: '140%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                Learn more about Cohere's customization offerings.
                            </p>
                        </div>

                        {/* Other Offerings Section */}
                        <div className="space-y-4">
                            <h3
                                className="text-lg sm:text-xl lg:text-2xl"
                                style={{
                                    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                                    fontWeight: 700,
                                    fontStyle: 'bold',
                                    lineHeight: '120%',
                                    letterSpacing: '0',
                                    color: '#000000',
                                }}
                            >
                                Other Cohere offerings for HIPAA-regulated
                            </h3>
                            <ul className="space-y-3">
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Private deployments: Cohere deployments without customization, including private deployments of North and Cohere models, are suitable for HIPAA-regulated entities. No BAA is required because they don't require transmitting PHI (or any other customer data).
                                </li>
                                <li
                                    className="text-sm sm:text-base lg:text-lg"
                                    style={{
                                        fontFamily: "'Quicksand', system-ui, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: 'normal',
                                        lineHeight: '140%',
                                        letterSpacing: '0',
                                        color: '#000000',
                                    }}
                                >
                                    Managed cloud LLM/AI platforms: Cohere's models hosted or accessed through cloud AI platforms (e.g., Amazon Bedrock, Amazon SageMaker, Microsoft Azure, and GCI Generative AI Service) are suitable for HIPAA-regulated entities. Customers must request to enter into a BAA with the cloud provider, which will be subject to the provider's own internal review and checks. For more information, we recommend reaching out directly to the third party provider. Please also note that a BAA is required with Cohere as Cohere does not use or receive PHI (or any other customer data) for this type of deployment.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResourceDetail;
