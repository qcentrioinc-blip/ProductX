interface MobileFeaturesDropdownProps {
  mobileDropdown: null | "features" | "resources" | "builtfor";
  setMobileDropdown: (value: null | "features" | "resources" | "builtfor") => void;
  setMenuOpen: (value: boolean) => void;
}

const MobileFeaturesDropdown = ({ mobileDropdown, setMobileDropdown, setMenuOpen }: MobileFeaturesDropdownProps) => {
  const industry = "cloud-finops-ai";
  const base = `/industries/${industry}`;

  const megaMenuItems = [
    {
      title: "AI Features",
      desc: "Intelligent agents that automate complex workflows.",
      img: "/AIOptimization/Resource1.png",
      path: `${base}/features`,
    },
    // {
    //   title: "Process Automation",
    //   desc: "End-to-end automation for repetitive business tasks.",
    //   img: "/AIOptimization/Resource2.png",
    //   path: `${base}/process-automation`,
    // },
  ];

  return (
    <div className="border-b border-gray-200 pb-3">
      <button onClick={() => setMobileDropdown(mobileDropdown === "features" ? null : "features")} className="w-full text-left flex justify-between items-center text-gray-800 text-lg font-semibold">
        Features
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === "features" ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {mobileDropdown === "features" && (
        <div className="mt-3 pl-3 space-y-4">
          {megaMenuItems.map((item, index) => (
            <a key={index} href={item.path} onClick={() => setMenuOpen(false)} className="flex gap-3 items-start py-2">
              <img src={item.img} className="w-12 h-12 rounded-lg object-cover" loading="eager" alt={item.title} />
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileFeaturesDropdown;
