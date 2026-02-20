import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
const MenuIcon = ({ size = 28 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = ({ size = 28 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLightNavbar = location.pathname.startsWith('/platform') || location.pathname.startsWith('/marketplace')|| location.pathname.startsWith('/contact');
 

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg">
      <div className="max-w-8xl mx-4 px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        
        <Link to="/">
          <div className="text-[#010101] font-bricolage font-light text-xl  px-2   rounded">

            <img className="h-10 w-full" src="/QnestLogo.svg" />
          </div>
        </Link>

        {/* Desktop nav (unchanged) */}
        <nav className="hidden md:flex items-center gap-8">
           <Link
            to="/"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-white hover:text-gray-300"
              }`}
          >
            Home
          </Link>
          <Link
            to="/platform"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-white hover:text-gray-300"
              }`}
          >
            Platform
          </Link>

          <Link
            to="/marketplace"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-white hover:text-gray-300"
              }`}
          >
            Marketplace
          </Link>

          <Link to="/contact">
            <button
              className={`px-4 py-2 rounded-md font-medium transition flex items-center gap-2 ${isLightNavbar
                ? "bg-black text-white hover:bg-black/90"
                : "bg-white text-black hover:bg-white/90"
                }`}
            >
              CONTACT US <ArrowUpRight size={18} />
            </button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile / Tablet menu */}
      {open && (
        <div className="md:hidden bg-neutral-900 border-t border-white/10 px-6 py-6 space-y-4">
          <Link
            to="/platform"
            className="block text-white text-lg"
            onClick={() => setOpen(false)}
          >
            Platform
          </Link>
          <Link
            to="/marketplace"
            className="block text-white text-lg "
            onClick={() => setOpen(false)}
          >
            Marketplace
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="max-w-5xl bg-white text-black px-2 py-1 rounded-md font-medium flex items-center justify-start gap-2">
              CONTACT US <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
