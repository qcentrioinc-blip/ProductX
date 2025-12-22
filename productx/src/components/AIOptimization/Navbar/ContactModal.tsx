import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Modal, Slide, Backdrop } from "@mui/material";

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
        onClose();
        // Reset form
        setFormData({ name: "", phone: "", email: "" });
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
                }
            }}
        >
            <Slide direction="down" in={open} timeout={500}>
                <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[90vh] bg-white outline-none rounded-3xl shadow-2xl overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-all z-10"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Form Container with Scroll */}
                    <div className="h-full scrollbar-hide overflow-y-auto px-8 py-12 md:px-16 md:py-16 lg:px-24 lg:py-20">
                        {/* Header */}
                        <div className="mb-12">
                            <p
                                className="font-quicksand text-xl mb-12"
                                style={{ color: '#2ECC71' }}
                            >
                                TO: QNEST GLOBAL
                            </p>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* First Line: HEY QNEST!* MY NAME IS [NAME] * */}
                                <div
                                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                                >
                                    <span className="whitespace-nowrap">HEY <span>QNEST</span>!*</span>
                                    <span className="whitespace-nowrap">MY NAME IS</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="[NAME]"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[180px] flex-1 max-w-[400px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                                    />
                                    <span className="text-[#E74C3C]">*</span>
                                </div>

                                {/* Second Line: MY PHONE NUMBER IS [PHONE] * AND MY */}
                                <div
                                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                                >
                                    <span className="whitespace-nowrap">MY PHONE NUMBER IS</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="[PHONE]"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[200px] flex-1 max-w-[350px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                                    />
                                    <span className="text-[#E74C3C]">*</span>
                                    <span className="whitespace-nowrap">AND MY</span>
                                </div>

                                {/* Third Line: EMAIL IS [EMAIL] * SEE YOU SOON */}
                                <div
                                    className="flex flex-wrap items-baseline gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                                >
                                    <span className="whitespace-nowrap">EMAIL IS</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="[EMAIL]"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="border-b-4 border-[#2ECC71] outline-none bg-transparent px-2 pb-2 min-w-[250px] flex-1 max-w-[450px] placeholder:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                                    />
                                    <span className="text-[#E74C3C]">*</span>
                                    <span className="whitespace-nowrap">SEE YOU SOON</span>
                                </div>

                                {/* Send Button */}
                                <div className="pt-8">
                                    <button
                                        type="submit"
                                        className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center gap-3 hover:bg-gray-900 transition-all group"
                                        style={{ fontFamily: "'Arial', sans-serif", letterSpacing: "1px" }}
                                    >
                                        SEND
                                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Slide>
        </Modal>
    );
};

export default ContactModal;
