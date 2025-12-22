import { useEffect, useState, useMemo } from "react";

type NavItem = {
  label: string;
  id: string;
};

export default function HeroBottomNavbar() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navItems: NavItem[] = useMemo(
    () => {
      const isBankfair = currentPath.includes("/industries/banking-and-finance/products/bankfair");
      
      return [
        { label: "Overview", id: "overview" },
        { label: "Benefits", id: "benefits" },
        ...(isBankfair ? [] : [{ label: "Our Process", id: "process" }]),
        { label: "Use Cases", id: "usecases" },
        { label: "FAQs", id: "faq" },
        { label: "Blogs", id: "blogs" },
      ];
    },
    [currentPath]
  );

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);
  return (
    
      <nav className="bg-white shadow-md w-full sticky -top-1 z-60 border-b border-gray-200">
      <div className="max-w-8xl lg:mx-10  px-4 lg:px-12 scrollbar-hide::-webkit-scrollbar scrollbar-hide font-bricolage     py-4 flex gap-10 overflow-x-auto">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              text-sm lg:text-lg whitespace-nowrap  
              ${
                activeSection === item.id
                  ? "border-b-4 border-blue-400 font-semibold text-black"
                  : "text-gray-700"
              }
            `}  
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
