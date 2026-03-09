import { Link } from "react-router-dom";

interface MobileProductsDropdownProps {
    mobileDropdown: null | "products" | "resources" | "builtfor";
    setMobileDropdown: (value: null | "products" | "resources" | "builtfor") => void;
    setMenuOpen: (value: boolean) => void;
}

const MobileProductsDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileProductsDropdownProps) => {
    const industry = "banking-and-finance";
    const base = `/industries/${industry}`;

    const megaMenuItems = [
        {
            title: "Bankfair",
            desc: "Complete core banking & loan management system ",
            img: "/BNFHOME/P1.png",
            path: `${base}/products/bankfair`,
        },
        {
            title: "Conciliare",
            desc: "Advanced reconciliation for financial accuracy",
            img: "/BNFHOME/P2.jpg",
            path: `${base}/products/conciliare`,
        },
        // {
        //     title: "Customer Onboarding Solutions",
        //     desc: "Lorem ipsum dolor sit amet consectetur",
        //     img: "/BNFHOME/P3.jpg",
        //     path: `${base}/products/customer-onboarding-solutions`
        // },
        // {
        //     title: "Internet Banking System",
        //     desc: "Lorem ipsum dolor sit amet consectetur",
        //     img: "/BNFHOME/P4.png",
        //     path: `${base}/products/internet-banking-system`,
        // },
        // {
        //     title: "Loan Origination Sytem",
        //     desc: "Lorem ipsum dolor sit amet consectetur",
        //     img: "/BNFHOME/P5.jpg",
        //     path: `${base}/products/loan-origination-system`,
        // },
        // {
        //     title: "Pago",
        //     desc: "Lorem ipsum dolor sit amet consectetur",
        //     img: "/BNFHOME/P6.jpg",
        //     path: `${base}/products/pago`,
        // },
        // {
        //     title: "Remitree",
        //     desc: "Lorem ipsum dolor sit amet consectetur",
        //     img: "/BNFHOME/P7.jpg",
        //     path: `${base}/products/remitree`,
        // },
        // {
        //     title: "Sams",
        //     desc: "Lorem ipsum dolor sit amet consectetur",
        //     img: "/BNFHOME/P8.jpg",
        //     path: `${base}/products/sams`,
        // },
        {
            title: "KYC & CDD",
            desc: "Digital due diligence and onboarding automation",
            img: "/BNFHOME/P9.jpg",
            path: `${base}/products/kyc`,
        },
    ];

    return (
        <div className="border-b border-gray-200 pb-3">
            <button onClick={() => {
                setMobileDropdown(mobileDropdown === "products" ? null : "products");
            }} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold cursor-pointer">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            {mobileDropdown === "products" && (
                <div className="mt-3 pl-3 space-y-4">
                    {megaMenuItems.map((item, index) => (
                        <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="flex gap-3 items-start py-2">
                            <img src={item.img} className="w-12 h-12 rounded-lg object-cover" loading="eager" alt={item.title} />
                            <div>
                                <h3 className="text-base font-semibold">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileProductsDropdown;
