import { useState, useEffect } from "react"; // <-- Re-added useEffect
import { Link } from "react-router-dom";
import { ContactUsDark } from "../../styles/Button";

const BNFNav = () => {
  
  const [isScrolled, setIsScrolled] = useState(true); // <-- Re-added isScrolled

  // For demo purposes - replace with useParams in your actual code
  const industry = "banking-and-finance";
  const base = industry ? `/industries/${industry}` : "";

  type NavItem = {
    name: string;
    path: string;
    scroll?: boolean;  
  };

  const navItems: NavItem[] = [
    { name: "Products", path: `${base}?scroll=products`, scroll: true }, // <-- Fixed scroll: true
    { name: "About Us", path: `${base}/about-us` },
    { name: "Resources", path: `${base}/resources` },
    { name: "Careers", path: `${base}/careers` }
  ];

  // Re-added scroll effect for the Top Bar to disappear and Main Nav to adjust
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
    <div
  className={`absolute top-0 left-0 w-full 
  bg-white/10 backdrop-blur-lg
  border-b border-white/20
  z-50 px-4 sm:px-6 md:px-8 pt-3 pb-1 
  flex justify-between transition-all duration-300`}
>

        {/* Logo - Left */}
        <Link to="/" className="flex items-center">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
            <span className="text-gray-800 font-bricolage text-sm sm:text-base">LOGO</span>
          </div>
        </Link>

        {/* Platform & Marketplace - Right */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            to="/platform" 
            className="text-white font-medium text-sm sm:text-base hover:text-white/80 transition"
          >
            Platform
          </Link>
          <Link 
            to="/marketplace" 
            className="text-white font-medium text-sm sm:text-base hover:text-white/80 transition"
          >
            Marketplace
          </Link>
        </div>
      </div>

      {/* Main Navigation - This will float over hero and then fix to top-0 */}
      <nav
        className={` absolute left-1/2 transform  top-20 -translate-x-1/2 w-[95%] max-w-6xl 
        z-[60] bg-white/90 backdrop-blur-md rounded-full shadow-lg px-6 py-3 
        flex items-center justify-between transition-all duration-300
        ${isScrolled ? "top-10" : "top-10"} `}  >
        {/* Logo */}
        <Link to="/industries/banking-and-finance" className="flex items-center gap-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex justify-center items-center rounded-full text-xs font-semibold">
            LOGO
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden font-quickstand md:flex items-center gap-6 lg:gap-10 absolute left-1/2 transform -translate-x-1/2">
         {navItems.map((item) => (
          <li key={item.name}>
            {item.scroll ? (
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("productsSection")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                   
                }}
                className="text-gray-800 font-quickstand text-[20px] font-bold hover:text-gray-600 transition"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.path}
                className="text-gray-800 font-quickstand text-[20px] font-bold hover:text-gray-600 transition"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
        </ul>

        {/* Contact Button - Desktop */}
        <Link to={`${base}/contactform`}>
           <ContactUsDark>Contact Us</ContactUsDark>
        </Link>

      
       
      </nav>

       
    </>
  );
};

export default BNFNav;