
import { Link } from "react-router-dom";
import { H3, P } from "../../../styles/Typography";

interface BuiltForMenuProps {
  isScrolled: boolean;
  handleKeepOpen: () => void;
  handleCloseMenus: () => void;
}

const BuiltForMenu = ({ isScrolled, handleKeepOpen, handleCloseMenus }: BuiltForMenuProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  const builtForItemsAI = [
    {
      title: "Enterprise IT Teams",
      desc: "IT and Cloud Infrastructure Teams",
      path: `${base}/built-for/enterprises`,
    },
    {
      title: "SaaS Application Providers",
      desc: "SaaS and Application Providers",
      path: `${base}/built-for/saas-application-providers`,
    },
    {
      title: "Regulated Large Enterprises",
      desc: " Multi-Region Enterprises with Regulated or Mission-Critical Systems",
      path: `${base}/built-for/regulated-large-enterprise`,
    },
  ];

  return (
    <div
      onMouseEnter={() => { handleKeepOpen(); }}
      onMouseLeave={handleCloseMenus}
      className={`fixed left-1/2 ${isScrolled ? "top-[76px]" : "top-34"}
translate-y-1 -translate-x-1/2
bg-gray-50 px-24 py-10 shadow-xl z-[9998]
transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
${isScrolled
          ? "w-[96%] max-w-none rounded-xl"
          : "w-[90%] max-w-7xl rounded-xl"
        }`}
    >
      <H3>Engineered for Every Azure Environment</H3>
      <P className="text-gray-700 text-lg mt-2 mb-4">CloudDIET is the AI optimization platform built for any organization's scale, complexity, and compliance needs.</P>
      <hr className="border-gray-300 h-1 mb-8" />
      <div className="grid grid-cols-3 gap-y-4 gap-x-1">
        {builtForItemsAI.map((item, index) => (
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
