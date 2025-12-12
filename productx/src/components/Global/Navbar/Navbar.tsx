import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

 
 
 const Navbar = () => {
   return (
     <div>
<header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm">
        <div className="max-w-8xl mx-4 px-6 py-1 flex items-center justify-between">
          <Link to="/">
          <div className="text-white  font-bricolage font-bold text-xl bg-neutral-700 px-4 py-2 rounded">
          
            LOGO
          </div>
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/platform" className="text-white hover:text-gray-300 transition">Platform</Link>
            <Link to="/marketplace" className="text-white hover:text-gray-300 transition">Marketplace</Link>
            <Link to="/contact">
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium  transition flex items-center gap-2">
              CONTACT US <ArrowUpRight size={18} />
            </button>
           </Link>
          </nav>
        </div>
      </header>

     </div>
   )
 }
 
 export default Navbar
 