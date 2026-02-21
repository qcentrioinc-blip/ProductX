import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

interface BuiltForMenuProps {
    isScrolled: boolean;
    showTopBar: boolean;
    handleKeepOpen: () => void;
    handleCloseMenus: () => void;
}

const BuiltForMenu = ({
    isScrolled,
    showTopBar,
    handleKeepOpen,
    handleCloseMenus,
}: BuiltForMenuProps) => {
    const industry = "banking-and-finance";
    const base = `/industries/${industry}`;

    const BuiltForItems = [
        {
            title: "Banks",
            desc: "Praesent eget laoreet arcu, nec iaculis ",
            path: `${base}/built-for/banks`
        },
        {
            title: "Credit Unions",
            desc: "Praesent eget laoreet arcu, nec iaculis ",
            path: `${base}/built-for/credit-union`
        },
        {
            title: "Financial Unions",
            desc: "Praesent eget laoreet arcu, nec iaculis ",
            path: `${base}/built-for/financial-unions`
        },
    ];

    return (
        <div
            onMouseEnter={handleKeepOpen}
            onMouseLeave={handleCloseMenus}
            className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[120px]" : "top-[85px]") : "top-34"}
        translate-y-1 -translate-x-1/2
        bg-white px-24 py-10 shadow-xl z-[9998]
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isScrolled
                    ? "w-[96%] max-w-none rounded-xl"
                    : "w-[88%] max-w-8xl rounded-xl"
                }`}
        >
            <H3>Solutions Built for Financial Institutions</H3>
            <P className="text-gray-700 text-lg mt-2 mb-4">
                Tailored banking platforms for every type of institution 
            </P>
            <hr className="border-gray-300 h-1 mb-8" />
            <div className="grid grid-cols-3 gap-y-4 gap-x-1">
                {BuiltForItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="block cursor-pointer pointer-events-auto hover:bg-gray-100 p-2 rounded-lg transition-colors"
                    >
                        <h3 className="text-lg font-quicksand font-bold text-gray-900 mb-1">{item.title}</h3>
                        <P className="text-gray-600 text-sm leading-snug">{item.desc}</P>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BuiltForMenu;
