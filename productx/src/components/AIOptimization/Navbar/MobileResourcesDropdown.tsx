


interface MobileResourcesDropdownProps {
  mobileDropdown: null | "features" | "resources" | "builtfor";
  setMobileDropdown: (value: null | "features" | "resources" | "builtfor") => void;
  setMenuOpen: (value: boolean) => void;
}

const MobileResourcesDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileResourcesDropdownProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  const resourceItemsAI = [
    {
      title: "Case Studies",
      desc: "Real-world AI Optimization success stories and ROI metrics.",
      path: `${base}/resources`,
    },
    {
      title: "Newsletters",
      desc: "Latest trends in AI, automation, and machine learning.",
      path: `${base}/newsletter`,
    },
    {
      title: "Whitepapers",
      desc: "Real-world AI Optimization success stories and ROI metrics.",
      path: `${base}/whitepaper`,
    },
    {
      title: "Glossary",
      desc: "Real-world AI Optimization success stories and ROI metrics.",
      path: `${base}/glossary`,
    },
  ];

  return (
    <div className="border-b border-gray-200 pb-3">
      <button onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold">
        Resources
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "resources" ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {mobileDropdown === "resources" && (
        <div className="mt-3 pl-3 space-y-4">
          {resourceItemsAI.map((item, index) => (
            <a key={index} href={item.path} onClick={() => setMenuOpen(false)} className="block py-1">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileResourcesDropdown;
