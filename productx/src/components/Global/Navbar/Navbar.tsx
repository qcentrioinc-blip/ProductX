"use client"

import type React from "react"
import "@fontsource/quicksand/400.css";
import { Search, ArrowUpRight, X, ChevronRight, ArrowRight, ChevronDown, ChevronUp, Menu } from "lucide-react"
import { useState, useEffect, useContext, useRef, useCallback } from "react"
import { useNavigate, Link } from 'react-router-dom';
import { ScrollContext } from "../../../context/ScrollContext";
import { H2, P } from "../../../styles/Typography"
// import { ContactUs } from "../../styles/Button"


type SolutionsTab = "Banking and Finance" | "EHS and PMS" | "High Tech"



const Navbar = () => {
  const navigate = useNavigate();
  const navbarRef = useRef<HTMLElement>(null);
  const scrollContext = useContext(ScrollContext);

  // State for dropdowns
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [activeSolutionsTab, setActiveSolutionsTab] = useState<SolutionsTab>("Banking and Finance")
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for dynamic styling
  const [navStyle, setNavStyle] = useState('light'); // 'light' or 'dark'

  const lightStyle = { bg: "bg-transparent", text: "text-white", btnBg: "bg-white", btnText: "text-black", border: "border-white" };
  const darkStyle = { bg: "bg-black", text: "text-white", btnBg: "bg-white", btnText: "text-black", border: "border-gray-700" };

  const currentStyle = navStyle === 'dark' ? darkStyle : lightStyle;

  // Global background detection logic
  const checkBackgroundColor = useCallback(() => {
    if (!navbarRef.current) return;

    const navbarHeight = navbarRef.current.offsetHeight;
    const checkPointX = window.innerWidth / 2;
    const checkPointY = navbarHeight + 5; // Check 5px below the navbar

    const element = document.elementFromPoint(checkPointX, checkPointY);
    if (!element) return;

    const bgColor = window.getComputedStyle(element).backgroundColor;
 
    if (bgColor === 'rgb(255, 255, 255)' || bgColor === 'rgb(249, 250, 251)' /* gray-50 */) {
      setNavStyle('dark');
    } else {
      setNavStyle('light');
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContext;
    if (!scrollContainer) return;

    // Initial check
    checkBackgroundColor();

    scrollContainer.on('scroll', checkBackgroundColor);
    return () => scrollContainer.off('scroll', checkBackgroundColor);
  }, [scrollContext, checkBackgroundColor]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest("[data-dropdown]")) {
        setIsIndustriesOpen(false)
        setIsSolutionsOpen(false)
        setIsResourcesOpen(false)
        setClickedDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const handleIndustriesHover = () => {
    if (clickedDropdown !== "industries") {
      setIsIndustriesOpen(true)
    }
  }

  const handleSolutionsHover = () => {
    if (clickedDropdown !== "solutions") {
      setIsSolutionsOpen(true)
    }
  }

  const handleResourcesHover = () => {
    if (clickedDropdown !== "resources") {
      setIsResourcesOpen(true)
    }
  }

  const handleDropdownLeave = () => {
    if (!clickedDropdown) {
      setTimeout(() => {
        const hoveredElement = document.querySelector(":hover")
        if (!hoveredElement?.closest("[data-dropdown]")) {
          setIsIndustriesOpen(false)
          setIsSolutionsOpen(false)
          setIsResourcesOpen(false)
        }
      }, 100)
    }
  }

  const handleIndustriesClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (clickedDropdown === "industries") {
      setIsIndustriesOpen(false)
      setClickedDropdown(null)
    } else {
      setIsIndustriesOpen(true)
      setIsSolutionsOpen(false)
      setIsResourcesOpen(false)
      setClickedDropdown("industries")
    }
  }

  const handleSolutionsClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (clickedDropdown === "solutions") {
      setIsSolutionsOpen(false)
      setClickedDropdown(null)
    } else {
      setIsSolutionsOpen(true)
      setIsIndustriesOpen(false)
      setIsResourcesOpen(false)
      setClickedDropdown("solutions")
    }
  }

  const handleResourcesClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (clickedDropdown === "resources") {
      setIsResourcesOpen(false)
      setClickedDropdown(null)
    } else {
      setIsResourcesOpen(true)
      setIsIndustriesOpen(false)
      setIsSolutionsOpen(false)
      setClickedDropdown("resources")
    }
  }

  const solutionsData = {
    "Banking and Finance": [
      { name: "Remitree", description: "Enables banks to setup single window to process all their Inward" },
      { name: "Pago", description: "Enables banks to setup single window to process all their Inward" },
      { name: "Loan Fingertip", description: "Enables banks to setup single window to process all their Inward" },
      { name: "Almanac", description: "Enables banks to setup single window to process all their Inward" },
      { name: "Conciliare", description: "Enables banks to setup single window to process all their Inward" },
      { name: "Sherlock", description: "Enables banks to setup single window to process all their Inward" },
      { name: "Claims Simplified", description: "Enables banks to setup single window to process all their Inward" },
      { name: "Relier", description: "Enables banks to setup single window to process all their Inward" },
    ],
    "EHS and PMS": [
      { name: "SafetyFirst", description: "Comprehensive environmental health and safety management solution" },
      { name: "ComplianceTracker", description: "Track and manage regulatory compliance across all operations" },
      { name: "RiskAssess", description: "Advanced risk assessment and mitigation planning tools" },
      { name: "IncidentManager", description: "Streamlined incident reporting and investigation system" },
    ],
    "High Tech": [
      { name: "TechStack", description: "Modern technology stack management and optimization" },
      { name: "DevOps Pro", description: "Complete DevOps pipeline automation and monitoring" },
      { name: "CloudSync", description: "Multi-cloud synchronization and management platform" },
      { name: "DataFlow", description: "Real-time data processing and analytics solution" },
    ],
  }

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-500 ${currentStyle.bg} ${currentStyle.border} backdrop-blur-lg`}
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <div className="px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between w-full">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <Link to="/" className={`${currentStyle.btnBg} ${currentStyle.btnText} px-3 sm:px-4 py-2 text-lg sm:text-xl rounded-md flex items-center`}>
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>

              {/* Desktop Navigation Menu */}
              <div className={`hidden lg:flex items-center space-x-8 text-[16px] font-[quicksand] font-normal leading-[100%] tracking-[0] text-center ${currentStyle.text}`}>
                <div
                  className={`flex items-center space-x-1 cursor-pointer transition-colors relative ${currentStyle.text} hover:underline`}
                  data-dropdown
                  onMouseEnter={handleIndustriesHover}
                  onMouseLeave={handleDropdownLeave}
                  onClick={handleIndustriesClick}
                >
                  <span>Industries</span>
                  <span>{isIndustriesOpen ? <ChevronUp className={currentStyle.text} /> : <ChevronDown className={currentStyle.text} />}</span>
                </div>

                <div
                  className={`flex items-center space-x-1 cursor-pointer transition-colors relative ${currentStyle.text} hover:underline`}
                  data-dropdown
                  onMouseEnter={handleSolutionsHover}
                  onMouseLeave={handleDropdownLeave}
                  onClick={handleSolutionsClick}
                >
                  <span>Solutions</span>
                  <span>{isSolutionsOpen ? <ChevronUp className={currentStyle.text} /> : <ChevronDown className={currentStyle.text} />}</span>
                </div>
                <span className={`cursor-pointer transition-colors ${currentStyle.text} hover:underline`}>Platforms</span>
                <span className={`cursor-pointer transition-colors ${currentStyle.text} hover:underline`}>Company</span>
                <div
                  className={`flex items-center space-x-1 cursor-pointer transition-colors relative ${currentStyle.text} hover:underline`}
                  data-dropdown
                  onMouseEnter={handleResourcesHover}
                  onMouseLeave={handleDropdownLeave}
                  onClick={handleResourcesClick}
                >
                  <span>Resources</span>
                  <span>{isResourcesOpen ? <ChevronUp className={currentStyle.text} /> : <ChevronDown className={currentStyle.text} />}</span>
                </div>
              </div>
            </div>

            {/* Right Section - Search and Contact */}
            <div className="flex items-center space-x-2">
              {/* Search Button */}
              <button className={`p-2 rounded-full transition-colors ${currentStyle.btnBg} ${currentStyle.btnText} border ${currentStyle.border}`}>
                <Search className={`w-4 h-4 sm:w-5 sm:h-5 ${currentStyle.btnText}`} />
              </button>

              {/* Contact Us Button - Hidden on mobile, shown on tablet+ */}
              <button
                className={`hidden sm:flex items-center ${currentStyle.btnBg} ${currentStyle.btnText} px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm font-medium gap-2 border ${currentStyle.border} shadow-sm hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 cursor-pointer`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate('/Contact')}
              >
                <span className="transition-colors duration-300">CONTACT US</span>
                {isHovered ? (
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 ${currentStyle.btnText}`} />
                ) : (
                  <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${currentStyle.btnText}`} />
                )}
              </button>
              {/* <ContactUs>CONTACT US</ContactUs> */}

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-full transition-colors ${currentStyle.btnBg} ${currentStyle.btnText} border ${currentStyle.border}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className={`w-5 h-5 ${currentStyle.btnText}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsIndustriesOpen(!isIndustriesOpen)
                    setIsSolutionsOpen(false)
                    setIsResourcesOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-left text-gray-800 font-medium hover:text-gray-600"
                >
                  <span>Industries</span>
                  {isIndustriesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {isIndustriesOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <div className="text-sm text-gray-700">High Tech</div>
                    <div className="text-sm text-gray-700">Banking and Finance</div>
                    <div className="text-sm text-gray-700">EHR and PMS</div>
                  </div>
                )}

                <button
                  onClick={() => {
                    setIsSolutionsOpen(!isSolutionsOpen)
                    setIsIndustriesOpen(false)
                    setIsResourcesOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-left text-gray-800 font-medium hover:text-gray-600"
                >
                  <span>Solutions</span>
                  {isSolutionsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {isSolutionsOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <div className="space-y-2">
                      {Object.keys(solutionsData).map((category) => (
                        <div key={category} className="text-sm text-gray-700 font-medium">{category}</div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-gray-800 font-medium hover:text-gray-600 cursor-pointer">Platforms</div>
                <div className="text-gray-800 font-medium hover:text-gray-600 cursor-pointer">Company</div>

                <button
                  onClick={() => {
                    setIsResourcesOpen(!isResourcesOpen)
                    setIsIndustriesOpen(false)
                    setIsSolutionsOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-left text-gray-800 font-medium hover:text-gray-600"
                >
                  <span>Resources</span>
                  {isResourcesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {isResourcesOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                    <div className="text-sm text-gray-700">Blogs</div>
                    <div className="text-sm text-gray-700">Glossary</div>
                    <div className="text-sm text-gray-700">Whitepapers</div>
                    <div className="text-sm text-gray-700">News</div>
                    <div className="text-sm text-gray-700">Events</div>
                  </div>
                )}
              </div>

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 text-sm font-medium gap-2">
                  <span>CONTACT US</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Dropdowns - Keep exactly the same */}
      {isIndustriesOpen && (
        <div
          className="hidden lg:block fixed top-[73px] left-0 w-full bg-white border-b border-gray-200 z-40 shadow-sm"
          data-dropdown
          onMouseEnter={() => setIsIndustriesOpen(true)}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                {/* <h2 className="text-2xl font-normal text-black mb-2">Quisque a sagittis ligula. Nulla facilisi</h2> */}
                <H2 className="text-black mb-2">Quisque a sagittis ligula. Nulla facilisi</H2>

                <P className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</P>
              </div>

              <div className="border-b border-gray-200 mb-8"></div>

              <div className="grid grid-cols-3 gap-8 relative">

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-black">Banking and Finance</h3>
                  <P className="text-gray-600 text-sm leading-relaxed">
                    Praesent eget laoreet arcu, nec iaculis massa.
                  </P>
                  <Link
                    to="/industries/banking-and-finance"
                    className="flex items-center space-x-2 text-sm text-black hover:text-gray-600 transition-colors group"
                    onClick={() => setIsIndustriesOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-black">High Tech</h3>
                  <P className="text-gray-600 text-sm leading-relaxed">
                    Praesent eget laoreet arcu, nec iaculis massa.
                  </P>
                  <Link
                    to="/industries/high-tech"
                    className="flex items-center space-x-2 text-sm text-black hover:text-gray-600 transition-colors group"
                    onClick={() => setIsIndustriesOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-black">EHR and PMS</h3>
                  <P className="text-gray-600 text-sm leading-relaxed">
                    Praesent eget laoreet arcu, nec iaculis massa.
                  </P>
                  <Link
                    to="/industries/ehr-and-pms"
                    className="flex items-center space-x-2 text-sm text-black hover:text-gray-600 transition-colors group"
                    onClick={() => setIsIndustriesOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {isSolutionsOpen && (
        <div
          className="hidden lg:block fixed top-[73px] left-0 w-full bg-white border-b border-gray-200 z-40 shadow-sm"
          data-dropdown
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="px-6 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                {/* <h2 className="text-2xl font-normal text-black">View Marketplace</h2> */}
                <H2 className="text-black">View Marketplace</H2>
                <button className="flex items-center bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium space-x-2 hover:bg-gray-900">
                  <span>VIEW</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="border-b border-gray-200 mb-6"></div>

              <div className="flex gap-0">
                <div className="w-80 bg-gray-100 rounded-l-lg">
                  {Object.keys(solutionsData).map((tab) => (
                    <div key={tab} className="relative">
                      <button
                        onClick={() => setActiveSolutionsTab(tab as SolutionsTab)}
                        className={`w-full text-left px-6 py-4 text-base font-medium transition-colors border-b border-gray-200 last:border-b-0 ${activeSolutionsTab === tab
                          ? "bg-gray-100 text-black"
                          : "bg-gray-100 text-gray-700 hover:text-black hover:bg-gray-50"
                          }`}
                      >
                        {tab}
                      </button>
                      {activeSolutionsTab === tab && (
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex-1 bg-gray-50 rounded-r-lg p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {solutionsData[activeSolutionsTab].map((solution, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 hover:shadow-sm transition-shadow cursor-pointer border border-gray-100"
                      >
                        <h3 className="font-medium text-black mb-2 text-base">{solution.name}</h3>
                        <P className="text-sm text-gray-600 leading-relaxed">{solution.description}</P>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isResourcesOpen && (
        <div
          className="hidden lg:block fixed top-[73px] left-0 w-full bg-white border-b border-gray-200 z-40 shadow-sm"
          data-dropdown
          onMouseEnter={() => setIsResourcesOpen(true)}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                {/* <h2 className="text-2xl font-normal text-black mb-2">Quisque a sagittis ligula. Nulla facilisi</h2> */}
                <H2 className="text-black mb-2">Quisque a sagittis ligula. Nulla facilisi</H2>

                <P className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</P>
              </div>

              <div className="border-b border-gray-200 mb-8"></div>

              <div className="grid grid-cols-2 gap-16 relative">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-black">Blogs</h3>
                    <P className="text-gray-600 text-sm leading-relaxed">
                      Praesent eget laoreet arcu, nec iaculis massa.
                    </P>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-black">Glossary</h3>
                    <P className="text-gray-600 text-sm leading-relaxed">
                      Praesent eget laoreet arcu, nec iaculis massa.
                    </P>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-black">Whitepapers</h3>
                    <P className="text-gray-600 text-sm leading-relaxed">
                      Praesent eget laoreet arcu, nec iaculis massa.
                    </P>
                  </div>
                </div>

                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-black">News</h3>
                    <P className="text-gray-600 text-sm leading-relaxed">
                      Praesent eget laoreet arcu, nec iaculis massa.
                    </P>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-black">Events</h3>
                    <P className="text-gray-600 text-sm leading-relaxed">
                      Praesent eget laoreet arcu, nec iaculis massa.
                    </P>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;