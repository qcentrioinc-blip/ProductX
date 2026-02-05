import { Link } from "react-router-dom";

interface MobileResourcesDropdownProps {
    mobileDropdown: null | "products" | "resources" | "builtfor";
    setMobileDropdown: (value: null | "products" | "resources" | "builtfor") => void;
    setMenuOpen: (value: boolean) => void;
}

const MobileResourcesDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileResourcesDropdownProps) => {
    const industry = "ehr-and-pms";
    const base = `/industries/${industry}`;

    const resourceItems = [
        {
            title: "Case Studies",
            desc: "Real implementations and outcomes from our EHR deployments.",
            path: `${base}/case-studies`,
        },
        {
            title: "Blogs",
            desc: "Best practices and updates from our product teams.",
            path: `${base}/blogs`,
        },
    ];

    return (
        <div className="border-b border-gray-200 pb-3">
            <button onClick={() => {
                setMobileDropdown(mobileDropdown === "resources" ? null : "resources");
            }} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold cursor-pointer">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "resources" ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            {mobileDropdown === "resources" && (
                <div className="mt-3 pl-3 space-y-4">
                    {resourceItems.map((item, index) => (
                        <Link key={index} to={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
                            <h3 className="text-base font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileResourcesDropdown;
