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
            title: "Almanac",
            desc: "Asset liability management with predictive analytics and reporting",
            img: "/BNFHOME/P1.png",
            path: `${base}/products/almanac`,
        },
        {
            title: "Bankfair",
            desc: "Complete core banking & loan management system",
            img: "/BNFHOME/P1.png",
            path: `${base}/products/bankfair`,
        },
        {
            title: "Conciliare",
            desc: "Advanced reconciliation for financial accuracy",
            img: "/BNFHOME/P2.jpg",
            path: `${base}/products/conciliare`,
        },
         {
            title: "Internet Banking System",
            desc: "Secure online banking with real-time account access",
            img: "/BNFHOME/P3.jpg",
            path: `${base}/products/internet-banking-system`
        },
        {
            title: "KYC & CDD",
            desc: "Digital due diligence and onboarding automation",
            img: "/BNFHOME/P9.jpg",
            path: `${base}/products/kyc`,
        },
          // {
        //     title: "Internet Banking Solutions",
        //     desc: "Secure online banking with real-time account access  ",
        //     img: "/BNFHOME/P9.jpg",
        //     path: `${base}/products/internet-banking-solutions`,
        // },
        {
            title: "Loan Origination System",
            desc: "Digital loan processing with e-verification and approvals",
            img: "/BNFHOME/P5.jpg",
            path: `${base}/products/loan-origination-system`,
        },
        {
            title: "Pago",
            desc: "Complete payment and settlement system for banks",
            img: "/BNFHOME/P6.jpg",
            path: `${base}/products/pago`,
        },
        {
            title: "Remitree",
            desc: "Cross-border remittance middleware bridging core banking with Swift",
            img: "/BNFHOME/P7.jpg",
            path: `${base}/products/remitree`,
        },
        {
            title: "Sherlock",
            desc: "Advanced anti-money laundering detection and compliance system",
            img: "/BNFHOME/P4.png",
            path: `${base}/products/sherlock`,
        },
    ];

    return (
        <div className="border-b border-gray-200 scrollbar-hide pb-3">
            <button
                onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")}
                className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold cursor-pointer py-2"
            >
                Products
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180" : ""}`}
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {mobileDropdown === "products" && (
                <div
                    className="mt-2 pl-3 pr-2 space-y-1 scrollbar-hide  overflow-y-auto overscroll-contain"
                    style={{ maxHeight: "55vh" }}
                >
                    {megaMenuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="flex gap-3 items-start py-2 border-b border-gray-100 last:border-0"
                        >
                            <img
                                src={item.img}
                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                                loading="eager"
                                alt={item.title}
                            />
                            <div>
                                <h3 className="text-base font-semibold">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileProductsDropdown;