import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

interface MegaMenuProps {
    isScrolled: boolean;
    showTopBar: boolean;
    handleKeepOpen: () => void;
    handleCloseMenus: () => void;
}

const MegaMenu = ({ isScrolled, showTopBar, handleKeepOpen, handleCloseMenus }: MegaMenuProps) => {
    const industry = "ehr-and-pms";
    const base = `/industries/${industry}`;

    const megaMenuItems = [
        {
            title: "Physician",
            desc: "Lorem ipsum dolor sit amet, gdjs",
            path: `${base}/physician`,
        },
        {
            title: "Admin",
            desc: "Lorem ipsum dolor sit amet, gdjs",
            path: `${base}/admin`,
        },
        {
            title: "Insurance Coordinator",
            desc: "Lorem ipsum dolor sit amet, gdjs",
            path: `${base}/insurance-coordinator`,
        },
        {
            title: "Receptionist",
            desc: "Lorem ipsum dolor sit amet, gdjs",
            path: `${base}/receptionist`,
        },
        {
            title: "Nurse",
            desc: "Lorem ipsum dolor sit amet, gdjs",
            path: `${base}/nurse`,
        },
    ];

    return (
        <div
            onMouseEnter={() => { handleKeepOpen(); }}
            onMouseLeave={handleCloseMenus}
            className={`fixed left-1/2 ${isScrolled ? (showTopBar ? "top-[145px]" : "top-[90px]") : "top-36"} translate-y-1 -translate-x-1/2 w-[90%] max-w-8xl bg-white px-24 py-10 shadow-xl rounded-lg z-[9998]`}
        >
            <H3>Quisque a sagittis ligula. Nulla facilisi</H3>
            <P className="text-gray-700 text-lg mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</P>
            <hr className="border-gray-300 h-1 mb-8" />
            <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {megaMenuItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <Link to={item.path} className="flex flex-col items-start gap-1 hover:opacity-70 transition-opacity">
                            <h3 className="text-lg font-quicksand font-bold text-gray-900">{item.title}</h3>
                            <P className="text-gray-600 text-sm leading-snug">{item.desc}</P>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
