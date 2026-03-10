import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

interface ResourcesMenuProps {
    isScrolled: boolean;
    showTopBar: boolean;
    handleKeepOpen: () => void;
    handleCloseMenus: () => void;
}

const ResourcesMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus }: ResourcesMenuProps) => {
    const industry = "banking-and-finance";
    const base = `/industries/${industry}`;

    const resourceItems = [
        // {
        //     title: "Newsletter",
        //     desc: "Stay updated with curated insights and announcements.",
        //     path: `${base}/news`
        // },
        // {
        //     title: "Case Studies",
        //     desc: "Upcoming webinars, conferences, and live sessions.",
        //     path: `${base}/events`
        // },
        // {
        //     title: "Whitepapers",
        //     desc: "Deep technical insights and strategic research.",
        //     path: `${base}/whitepapers`
        // },
        {
            title: "Blogs",
            desc: "Expert commentary, tips, and industry knowledge.",
            path: `${base}/blogs`
        },
        {
            title: "Glossary",
            desc: "Expert commentary, tips, and industry knowledge.",
            path: `${base}/glossary`
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
            <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
            <P className="text-gray-700 text-lg mt-2 mb-4">
                Comprehensive tools and insights for success.
            </P>
            <hr className="border-gray-300 h-1 mb-8" />
            <div className="grid grid-cols-2 gap-y-4 gap-x-1">
                {resourceItems.map((res, index) => (
                    <Link key={index} to={res.path} className="block hover:bg-gray-100 p-2 rounded-lg transition-colors">
                        <h3 className="text-lg font-quicksand font-bold text-gray-900 mb-1">{res.title}</h3>
                        <P className="text-gray-600 text-sm leading-snug">{res.desc}</P>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ResourcesMenu;
