import { useState } from "react";
import { H2, H3, P } from "../../../styles/Typography";
import ContactModal from "../Navbar/ContactModal";
 

export const ContactUsAI = ({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {
   

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) onClick(e);
  };

  return (
    <div className="relative w-full" onClick={handleClick}>
      <button
        className={`
          group
          flex items-center justify-center
          w-full h-[50px]
          px-6
          rounded-xl
          font-quicksand font-medium text-base
          
          bg-[#1F2937] text-white
          hover:bg-[#111827]

          transition-all duration-300
          ${className}
        `}
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </button>
    </div>
  );
};

const ComparePrice = () => {
    const features = [
        { name: "Number of Users", includedStarter: true, includedEnterprise: true },
        { name: "Users Per Page", includedStarter: true, includedEnterprise: true },
        { name: "Includes essential features to get started", includedStarter: true, includedEnterprise: true },
        { name: "More advanced features for increased productivity", includedStarter: true, includedEnterprise: true },
        { name: "Designing & Development", includedStarter: false, includedEnterprise: true },
        { name: "Customizable options to meet your specific needs", includedStarter: false, includedEnterprise: true },
        { name: "Secure data storage", includedStarter: false, includedEnterprise: true },
        { name: "Email Support", includedStarter: false, includedEnterprise: true },
        { name: "24/7 customer support", includedStarter: false, includedEnterprise: true },
    ];
const [modalOpen, setModalOpen] = useState(false);
 

    return (
        <section className="dark:bg-black">
        <div className="min-h-screen max-w-7xl mx-auto    flex flex-col py-10     ">
            {/* Header Section */}
            <div className="w-full flex flex-col   gap-6  ">
                <div className="text-center">
                    <H2 className="text-[#141414] dark:text-white leading-tight md:leading-none mb-3 md:mb-4">
                        Find Your Perfect Plan
                    </H2>
                    <P className="text-[#141414] leading-relaxed md:leading-[34px] text-center max-w-full md:max-w-[758px] mx-auto px-2">
                        Discover the ideal CloudDIET plan to optimize your Azure environment. Our pricing is performance-based, meaning you only pay when we deliver savings.
                    </P>
                </div>

                {/* Pricing Table */}
                <div className="w-full max-w-full  bg-amber-50 dark:bg-slate-800 rounded-3xl md:rounded-[64px] border border-slate-600 overflow-hidden relative">

                    {/* Desktop View - Grid Layout */}
               <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[344px_1fr_1fr] h-auto lg:h-[1063px] overflow-visible p-6    gap-4">

                        {/* Left Column - Compare Plans */}
                        <div className="h-full border-r border-[#E6E9F5] p-6 md:p-[40px] flex flex-col">
                            <div className="h-auto min-h-[120px] flex flex-col justify-start gap-3 md:gap-4 mb-2 border-b border-gray-300">
                                <H3 className=" text-[#252430] dark:text-white   leading-tight">
                                    Compare plans
                                </H3>
                                <P className="text-[#141414] leading-relaxed max-w-[280px]">
                                    Choose your plan according to your organizational scale.
                                </P>
                            </div>

                            <div className="flex-1 flex flex-col justify-between py-4 md:py-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center min-h-[50px] py-2 md:py-0 font-['Quicksand'] font-normal text-sm md:text-base lg:text-[18px] dark:text-white text-[#252430] leading-none border-b border-gray-300">
                                        {feature.name}
                                    </div>
                                ))}
                            </div>
                            {/* Spacer for button alignment */}
                            <div className="h-[60px] mt-6 md:mt-8"></div>
                        </div>

                        {/* Middle Column - Starter */}
                        <div className="h-full p-6 md:p-[40px] border border-gray-400 rounded-[26px] dark:bg-slate-950 bg-white shadow-[0px_26px_40px_0px_#BCCAFF21] flex flex-col relative z-10">
                            <div className="h-auto min-h-[120px] flex flex-col justify-start gap-3 md:gap-4 mb-2 border-b border-gray-300">
                                <H3 className=" text-[#252430] dark:text-white dark:text-white leading-tight">Starter</H3>
                                <P className="text-[#141414] dark:text-gray-300 leading-relaxed">

                                    Ideal for small to mid-sized teams beginning their Azure cost optimization journey.
                                </P>
                            </div>

                            <div className="flex-1 flex flex-col justify-between py-4 md:py-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center justify-center min-h-[50px] py-2 md:py-0 border-b border-gray-300">
                                        {feature.includedStarter ? (
                                            <div className="w-6 h-6 md:w-7 md:h-7">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className="w-full h-full text-emerald-700"
                                                    fill="currentColor"
                                                >
                                                    {/* Scalloped badge shape */}
                                                    <path d="M12 2l2.3 1.4 2.7-.3 1.4 2.3 2.3 1.4-.3 2.7L22 12l-1.4 2.3.3 2.7-2.3 1.4-1.4 2.3-2.7-.3L12 22l-2.3-1.4-2.7.3-1.4-2.3-2.3-1.4.3-2.7L2 12l1.4-2.3-.3-2.7 2.3-1.4 1.4-2.3 2.7.3L12 2z" />

                                                    {/* Check icon */}
                                                    <path
                                                        d="M7 12.5l3 3 7-7"
                                                        fill="none"
                                                        stroke="white"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>

                                        ) : (
                                            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#A8102D] rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 md:mt-8 h-[50px] md:h-[60px]">
<ContactUsAI onClick={() => setModalOpen(true)}>
  Get Started
</ContactUsAI>
                            </div>
                        </div>

                        {/* Right Column - Enterprise */}
                        <div
                           className="h-full p-6 md:p-[40px] rounded-[46px] rounded-br-[52px]  flex flex-col relative overflow-hidden
           transition-all duration-300 ease-out
           bg-[#D6E4F7] dark:bg-transparent
           hover:shadow-[0px_40px_80px_rgba(106,138,255,0.35)]
           hover:border-[#4A6BFF]"
                          style={{
  
  border: "2px solid #185FA5",
  
  
  boxShadow: "0 8px 32px rgba(24,95,165,0.2)",
  zIndex: 10,
  position: "relative",
}}
                        >
                            {/* Decorative Gradient Arc - LEFT side */}
                            <div
                                className="absolute pointer-events-none z-0"
                                style={{
                                    width: '968.66px',
                                    height: '1122.36px',
                                    top: '-59.36px',
                                    left: '-132.17px',
                                    background: 'linear-gradient(180deg, rgba(106, 138, 255, 0.5) 0%, rgba(106, 138, 255, 0.08) 100%)',
                                    borderRadius: '50%',
                                    border: '1px solid transparent',
                                    backgroundClip: 'padding-box',
                                }}
                            />
                            {/* Radial gradient border overlay - LEFT */}
                            <div
                                className="absolute pointer-events-none z-0"
                                style={{
                                    width: '968.66px',
                                    height: '1122.36px',
                                    top: '-59.36px',
                                    left: '-132.17px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(103.58% 103.58% at 50% 50%, rgba(181, 194, 251, 0) 4.69%, #B5C2FB 100%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    padding: '1px',
                                }}
                            />

                            {/* Decorative Gradient Arc - RIGHT side */}
                            <div
                                className="absolute pointer-events-none z-0"
                                style={{
                                    width: '968.66px',
                                    height: '1100px',
                                    top: '-250px',
                                    right: '10px',
                                    background: 'linear-gradient(180deg, rgba(106, 138, 255, 0.56) 0%, rgba(239, 242, 255, 0.2) 100%)',
                                    borderRadius: '50%',
                                    border: '1px solid transparent',
                                    backgroundClip: 'padding-box',
                                }}
                            />
                            {/* Linear gradient border overlay - RIGHT */}
                            <div
                                className="absolute pointer-events-none z-0"
                                style={{
                                    width: '968.66px',
                                    height: '1100px',
                                    top: '-250px',
                                    right: '10px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(257.51deg, #B5C2FB 12.23%, rgba(181, 194, 251, 0) 105.71%)',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    padding: '1px',
                                }}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="absolute top-0 right-0 lg:right-[-32px] lg:top-2 xl:right-[70px] xl:top-[10px]">
                                    <span
                                        className="text-white lg:text-xs xl:text-sm font-medium px-4 py-2 rounded-xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(188, 202, 255, 0.6) 0%, rgba(181, 194, 251, 0.4) 100%)',
                                            border: '1px solid #ffffff',
                                        }}
                                    >
                                        Best offer
                                    </span>
                                </div>

                                <div className="h-auto min-h-[120px] flex flex-col justify-start gap-3 md:gap-4 mb-2 border-b border-[#E7EBFF]/60">
                                    <H3 className=" text-[#252430] dark:text-white leading-tight">Enterprise</H3>
                                    <P className=" text-[#141414] leading-relaxed">
                                        Best for enterprises requiring advanced insights, unlimited subscriptions, and support.
                                    </P>
                                </div>

                                <div className="flex-1 flex flex-col justify-between py-4 md:py-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center justify-center min-h-[50px] py-2 md:py-0 border-b border-[#E7EBFF]/60">
                                            {feature.includedEnterprise ? (
                                                <div className="w-6 h-6 md:w-7 md:h-7">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full text-emerald-700"
                                                        fill="currentColor"
                                                    >
                                                        {/* Scalloped badge shape */}
                                                        <path d="M12 2l2.3 1.4 2.7-.3 1.4 2.3 2.3 1.4-.3 2.7L22 12l-1.4 2.3.3 2.7-2.3 1.4-1.4 2.3-2.7-.3L12 22l-2.3-1.4-2.7.3-1.4-2.3-2.3-1.4.3-2.7L2 12l1.4-2.3-.3-2.7 2.3-1.4 1.4-2.3 2.7.3L12 2z" />

                                                        {/* Check icon */}
                                                        <path
                                                            d="M7 12.5l3 3 7-7"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="2.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>

                                            ) : (
                                                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#A8102D] rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 md:mt-8 h-[50px] md:h-[60px]">
                                   <ContactUsAI onClick={() => setModalOpen(true)}>
  Get Started
</ContactUsAI>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile & Tablet View - Stacked Layout */}
                    <div className="lg:hidden  flex flex-col">

                        {/* Compare Plans Header for Mobile */}
                        <div className="p-10 md:px-16 md:py-6 border-b border-gray-200">
                            <H3 className=" text-[#252430] dark:text-white leading-tight mb-3">
                                Compare plans
                            </H3>
                            <P className="font-['Quicksand'] font-normal text-sm md:text-base text-[#141414] leading-relaxed">
                                Choose your plan according to your organisational plan
                            </P>
                        </div>

                        {/* Starter Plan Card - Mobile */}
                        <div className="p-10 md:px-16 md:py-10 border-b border-[#E6E9F5]">
                            <div className="mb-6">
                                <H3 className=" text-[#252430] dark:text-white leading-tight mb-3">Starter</H3>
                                <P className=" text-[#141414] leading-relaxed mb-6">
                                    Take Your Business to the Next Level Take Your Business to the Next Level
                                </P>
                            </div>

                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4 py-2">
                                        <div className="flex-shrink-0 mt-1">
                                            {feature.includedStarter ? (
                                                <div className="w-6 h-6 md:w-7 md:h-7">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="w-full h-full text-emerald-700"
                                                        fill="currentColor"
                                                    >
                                                        {/* Scalloped badge shape */}
                                                        <path d="M12 2l2.3 1.4 2.7-.3 1.4 2.3 2.3 1.4-.3 2.7L22 12l-1.4 2.3.3 2.7-2.3 1.4-1.4 2.3-2.7-.3L12 22l-2.3-1.4-2.7.3-1.4-2.3-2.3-1.4.3-2.7L2 12l1.4-2.3-.3-2.7 2.3-1.4 1.4-2.3 2.7.3L12 2z" />

                                                        {/* Check icon */}
                                                        <path
                                                            d="M7 12.5l3 3 7-7"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="2.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>

                                            ) : (
                                                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#A8102D] rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                                </div>
                                            )}
                                        </div>
                                        <span className=" text-[#252430]  dark:text-white leading-relaxed">
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                               <ContactUsAI onClick={() => setModalOpen(true)}>
  Get Started
</ContactUsAI>
                            </div>
                        </div>

                        {/* Enterprise Plan Card - Mobile */}
                        <div className="p-10 md:px-16 md:py-10 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white"
                            style={{
                                background: 'linear-gradient(180deg, rgba(106, 138, 255, 0.5) 0%, rgba(106, 138, 255, 0.08) 100%)',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderImageSource: 'radial-gradient(103.58% 103.58% at 50% 50%, rgba(181, 194, 251, 0) 4.69%, #B5C2FB 100%)',
                                borderImageSlice: 1
                            }}>
                            <div className="relative z-10">
                                <div className="absolute top-2 right-2">
                                    <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                        Best offer
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <H3 className=" text-[#252430] dark:text-white leading-tight mb-3">Enterprise</H3>
                                    <P className=" text-[#141414] leading-relaxed mb-6">
                                        Take Your Business to the Next Level Take Your Business to the Next Level
                                    </P>
                                </div>

                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-4 py-2">
                                            <div className="flex-shrink-0 mt-1">
                                                {feature.includedEnterprise ? (
                                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-teal-800 rounded-full flex items-center justify-center">
                                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                                    </div>
                                                ) : (
                                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#A8102D] rounded-full flex items-center justify-center">
                                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-['Quicksand'] font-normal text-sm md:text-base text-[#252430] leading-relaxed">
                                                {feature.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8">
                                   <ContactUsAI onClick={() => setModalOpen(true)}>
  Get Started
</ContactUsAI>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
                  
        </div>
        </section>
    );
};

export default ComparePrice;
