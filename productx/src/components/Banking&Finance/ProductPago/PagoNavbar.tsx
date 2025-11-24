import { useEffect, useState } from "react";

export default function PagoNavbar() {
  const navItems = [
    { label: "Overview", id: "overview" },
    { label: "Benefits", id: "benefits" },
    { label: "Our Process", id: "process" },
    { label: "Use Cases", id: "usecases" },
    { label: "FAQs", id: "faq" },
    { label: "Blogs", id: "blogs" },
  ];

  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get navbar height dynamically
      const navHeight = 120; // Adjust based on your BNFNav + PagoNavbar combined height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      console.log(`Scrolling to: ${id}`, element); // Debug log
    } else {
      console.error(`Element with id "${id}" not found`); // Debug log
    }
  };

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-30 border-b border-gray-200">
      {/* Desktop & Mobile Scrollable Nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-6 lg:gap-10 overflow-x-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              text-sm lg:text-lg whitespace-nowrap pb-2 transition-all duration-200 font-medium
              ${
                activeSection === item.id
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}