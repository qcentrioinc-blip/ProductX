import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

interface ResourcesMenuProps {
    isScrolled: boolean;
    showTopBar: boolean;
    handleKeepOpen: () => void;
    handleCloseMenus: () => void;
}

const ResourcesMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus }: ResourcesMenuProps) => {
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
        <div
            onMouseEnter={() => { handleKeepOpen(); }}
            onMouseLeave={handleCloseMenus}
            className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[145px]" : "top-[90px]") : "top-36"} translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-white px-24 py-10 shadow-xl rounded-lg z-[9998]`}
        >
            <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
            <P className="text-gray-700 text-lg mt-2 mb-4">Comprehensive tools and insights for success.</P>
            <hr className="border-gray-300 h-1 mb-8" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-1">
                {resourceItems.map((res, index) => (
                    <Link key={index} to={res.path} className="block">
                        <h3 className="text-lg font-quicksand font-semibold text-gray-900 mb-1">{res.title}</h3>
                        <p className="text-gray-600 text-sm leading-snug">{res.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ResourcesMenu;
