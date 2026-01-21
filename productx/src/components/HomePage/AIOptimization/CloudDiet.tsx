import { useState } from "react";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import { ContactUs } from "../../../styles/Button";
 
const CloudDiet = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <section className="relative w-full min-h-[480px] overflow-hidden bg-gradient-to-br from-[#10DC78] via-[#0EC970] to-[#0AB861] px-6 sm:px-8 xl:px-16 py-12 sm:py-16 xl:py-24">
                <div className="mx-auto max-w-8xl px-2 sm:px-4 xl:px-6 relative">
 
                    <div className="grid xl:grid-cols-2 gap-10 xl:gap-12 items-center">
 
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col space-y-6 sm:space-y-7 xl:space-y-8">
 
                            {/* Top Purple Text */}
                            <p
                                className="text-[18px] sm:text-[20px] xl:text-[24px]"
                                style={{
                                    fontFamily: "'Quicksand', sans-serif",
                                    fontWeight: 700,
                                    lineHeight: "110%",
                                    color: "#5551FF",
                                }}
                            >
                               Ready to optimize your Azure spend?
                            </p>
 
                            {/* Main Heading */}
                            <h1
                                className="text-[32px] sm:text-[42px] md:text-[48px] xl:text-[64px]"
                                style={{
                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                    fontWeight: 600,
                                    lineHeight: "110%",
                                    color: "#000000",
                                }}
                            >
                                Start saving with CloudDIET today.
                            </h1>
 
                            {/* CTA Button */}
                            <div>
                                <ContactUs
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setModalOpen(true);
                                    }}
                                    className="!bg-[#F5F5F5] !text-black !py-[14px] !px-[24px] !text-[14px] uppercase hover:!bg-gray-800 hover:!text-white shadow-lg hover:shadow-xl"
                                >
                                    Book Your Demo
                                </ContactUs>
                            </div>
 
                        </div>
 
                        {/* RIGHT CONTENT */}
                        <div className="flex items-center justify-center xl:justify-end mt-6 sm:mt-8 xl:mt-0">
                            <div className="relative mt-20 flex justify-center z-20">
          <div className="px-8 py-4 flex items-center gap-3 ">
           <img src="/ClouddietLogo2.svg" alt="CloudDIET Logo" className="h-28 w-auto" />
 
            <div className="text-white text-6xl font-bricolage font-extrabold">
              Cloud<span className="text-[#1E2440] font-medium">DIET</span>
            </div>
          </div>
        </div>
                        </div>
                    </div>
                </div>
            </section>
 
            <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};
 
export default CloudDiet;