import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
const MenuIcon = ({ size = 28 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = ({ size = 28 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
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
           {/* <Link
            to="/"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-black hover:text-black/80"
              }`}
          >
            Home
          </Link> */}
          {/* <Link
            to="/platform"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-black hover:text-black/80"
              }`}
          >
            Platform
          </Link> */}

          <Link
            to="/marketplace"
            className={`transition font-bricolage font-[20px] ${isLightNavbar ? "text-black hover:text-black/80" : "text-black hover:text-black/80"
              }`}
          >
            Marketplace
          </Link>

          <Link to="/contact">
            <button
          className={`
            group
            flex items-center justify-center
            w-auto h-[44px] sm:h-[48px]
            px-[20px] sm:px-[24px] py-[10px] sm:py-[12px]
            rounded-[8px]
            font-quicksand font-bold text-[14px] sm:text-[16px]
            bg-[#141414] text-white
            transition-all duration-300 ease-in-out
            border border-transparent
            hover:bg-white hover:text-[#141414]
            hover:border-[#010101]
            hover:border-b-[4px]
            hover:-translate-y-[2px]
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
            
          `}
        >
          <span className="flex items-center gap-[8px]">
              CONTACT US
            <span className="relative flex items-center justify-center w-[20px] sm:w-[23px] h-[20px] sm:h-[23px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <path d="M7 7h10v10" />
                <path d="M7 17L17 7" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </span>
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
        <div className="md:hidden bg-[#efefef] border-t border-white/10 px-6 py-6 space-y-4">
          {/* <Link
            to="/platform"
            className="block text-black  font-quicksand font-bold text-lg"
            onClick={() => setOpen(false)}
          >
            Platform
          </Link> */}
          <Link
            to="/marketplace"
            className="block text-black  font-quicksand font-bold text-lg"
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
