import { useState } from "react";
import ContactModal from "../../AIOptimization/Navbar/ContactModal";
import { ContactUs } from "../../../styles/Button";
import { H2 } from "../../../styles/Typography";
 
const CloudDiet = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <section className="relative w-full  overflow-hidden bg-[#fafafa] dark:bg-black px-6 sm:px-8 xl:px-0 py-12 sm:py-16 xl:py-10">
                <div className="max-w-full px-[40px] md:px-[60px] xl:px-[160px] relative">
 
                    <div className="grid xl:grid-cols-2 gap-10 xl:gap-12 items-center">
 
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col space-y-6 sm:space-y-7 xl:space-y-8">
 
                            {/* Top Purple Text */}
                            <p
                                className="font-quadran text-[20px]"
                                style={{
                                   
                                    lineHeight: "110%",
                                    color: "#00AA72",
                                }}
                            >
                               Ready to optimize your Azure spend?
                            </p>
 
                            {/* Main Heading */}
                            <H2
                                
                                
                            >
                                Start saving with CloudDIET today.
                            </H2>
 
                            {/* CTA Button */}
                            <div>
                                <ContactUs
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setModalOpen(true);
                                    }}
                                    className="!bg-[#00AA72] !text-[#F5F5F5] !py-[14px] !px-[24px] !text-[14px] uppercase hover:!bg-gray-800 hover:!text-white shadow-lg hover:shadow-xl"
                                >
                                    Book Your Demo
                                </ContactUs>
                            </div>
 
                        </div>
 
                        {/* RIGHT CONTENT */}
                        <div className="flex items-center justify-center xl:justify-end mt-6 sm:mt-8 xl:mt-0">
                            <div className="relative xl:mt-20 flex justify-center z-20">
          <div className="px-8 py-4 flex items-center gap-3 ">
           {/* <img src="/ClouddietLogo2.svg" alt="CloudDIET Logo" className="h-28 w-auto" /> */}

            <div className="text-black  dark:text-[#00AA72] text-6xl font-quadran font-medium">
              Cloud<span className=" font-medium">DIET</span>
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