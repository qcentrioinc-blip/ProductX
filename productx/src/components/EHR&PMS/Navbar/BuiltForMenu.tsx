import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

interface BuiltForMenuProps {
    isScrolled: boolean;
    showTopBar: boolean;
    handleKeepOpen: () => void;
    handleCloseMenus: () => void;
}

const BuiltForMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus }: BuiltForMenuProps) => {
    const industry = "ehr-and-pms";
    const base = `/industries/${industry}`;

    const BuiltForItems = [
        {
            title: "Long Term Care",
            desc: "Streamline resident care, compliance, and billing for nursing facilities and senior living. ",
            path: `${base}/built-for/long-term-care`,
        },
        {
            title: "Home Healthcare",
            desc: "Empower field clinicians with mobile tools for documentation, scheduling, and visit-based billing. ",
            path: `${base}/built-for/home-healthcare`,
        },
        {
            title: "Clinics and Hospitals",
            desc: "Unify inpatient and outpatient workflows with scalable tools for any practice size. ",
            path: `${base}/built-for/clinics-and-hospitals`,
        },
    ];

    return (
        <div
            onMouseEnter={() => {
                handleKeepOpen();
            }}
            onMouseLeave={handleCloseMenus}
            className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[140px]" : "top-[85px]") : "top-36"}
translate-y-1 -translate-x-1/2
bg-white px-24 py-10 shadow-xl z-[9998]
transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
${isScrolled
                    ? "w-[96%] max-w-none rounded-xl"
                    : "w-[90%] max-w-7xl rounded-xl"
                }`}
        >
            <H3>Built for Your Specialty</H3>
            <P className="text-gray-700 text-lg mt-2 mb-4">Discover how our unified platform adapts to your specific clinical and administrative workflows.</P>
            <hr className="border-gray-300 h-1 mb-8" />
            <div className="grid grid-cols-3 gap-y-4 gap-x-1">
                {BuiltForItems.map((item, index) => (
                    <Link key={index} to={item.path} className="block cursor-pointer pointer-events-auto hover:bg-gray-100 p-2 rounded-lg transition-colors">
                        <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BuiltForMenu;
