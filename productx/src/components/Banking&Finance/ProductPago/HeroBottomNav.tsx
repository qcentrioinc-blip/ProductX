import { useEffect, useState, useMemo, useRef } from "react";

type NavItem = {
  label: string;
  id: string;
};

export default function HeroBottomNavbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [showGlobalNav, setShowGlobalNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const isUp = currentY < lastScrollY.current;

      // Simplify: adhere to scroll direction matching TopBar logic
      // If scrolling up or at top, show stack (top: 124px).
      // If scrolling down, sticky to top (top: -1px).
      setShowGlobalNav(currentY <= 50 || isUp);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0
      }

    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);
  return (
    <nav
      id="hero-bottom-nav"
      className={`bg-white shadow-md w-full sticky z-[10000] border-b border-gray-200 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${showGlobalNav ? "top-[124px] delay-300" : "top-[-1px] delay-500"
        }`}
    >
      <div className="max-w-8xl lg:mx-10  px-4 lg:px-12 scrollbar-hide::-webkit-scrollbar scrollbar-hide font-bricolage     py-4 flex gap-10 overflow-x-auto">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              text-sm lg:text-lg whitespace-nowrap  
              ${activeSection === item.id
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
