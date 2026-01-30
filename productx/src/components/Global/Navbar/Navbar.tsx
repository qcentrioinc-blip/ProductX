import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLightNavbar = location.pathname.startsWith('/platform') || location.pathname.startsWith('/marketplace');


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg">
      <div className="max-w-8xl mx-4 px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="text-[#010101] font-bricolage font-light text-xl  px-2   rounded">

            <img className="h-10 w-full" src="/WhiteQnestLogo.webp" />
          </div>
        </Link>

        {/* Desktop nav (unchanged) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/platform"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-white hover:text-black/80" : "text-white hover:text-gray-300"
              }`}
          >
            Platform
          </Link>

          <Link
            to="/marketplace"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-white hover:text-black/80" : "text-white hover:text-gray-300"
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
          {open ? <X size={28} /> : <Menu size={28} />}
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
