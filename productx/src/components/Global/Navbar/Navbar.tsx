import { ArrowUpRight, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <div className="text-white font-bricolage font-bold text-lg sm:text-xl bg-neutral-700 px-3 sm:px-4 py-2 rounded">
              LOGO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/platform"
              className="text-white hover:text-gray-300 transition text-sm lg:text-base"
            >
              Platform
            </Link>
            <Link
              to="/marketplace"
              className="text-white hover:text-gray-300 transition text-sm lg:text-base"
            >
              Marketplace
            </Link>
            <Link to="/contact">
              <button className="bg-white text-black px-4 py-2 rounded-md font-medium transition flex items-center gap-2 text-sm lg:text-base hover:bg-gray-100">
                CONTACT US <ArrowUpRight size={18} />
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-neutral-800 rounded transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <Link
                to="/platform"
                className="text-white hover:text-gray-300 transition py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Platform
              </Link>
              <Link
                to="/marketplace"
                className="text-white hover:text-gray-300 transition py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-white text-black px-4 py-3 rounded-md font-medium transition flex items-center justify-center gap-2 hover:bg-gray-100">
                  CONTACT US <ArrowUpRight size={18} />
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}

export default Navbar
