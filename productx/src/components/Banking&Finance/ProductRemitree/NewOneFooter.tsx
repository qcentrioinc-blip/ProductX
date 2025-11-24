
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
 

const NewOneFooter = () => {
  return (
 
     <>
      <div 
        className='lg:relative lg:h-[700px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>
    
          <footer className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          
          {/* Left Section - Newsletter (7 columns) */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            {/* Orange 8-pointed Star/Asterisk Icon */}
            <div className="w-[80px] h-[80px]">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* 8-pointed asterisk star */}
                <g transform="translate(100, 100)">
                  {/* Vertical */}
                  <rect x="-15" y="-85" width="30" height="170" fill="#FF8C00" rx="8"/>
                  {/* Horizontal */}
                  <rect x="-85" y="-15" width="170" height="30" fill="#FF8C00" rx="8"/>
                  {/* Diagonal 1 */}
                  <rect x="-15" y="-85" width="30" height="170" fill="#FF8C00" rx="8" transform="rotate(45)"/>
                  {/* Diagonal 2 */}
                  <rect x="-15" y="-85" width="30" height="170" fill="#FF8C00" rx="8" transform="rotate(-45)"/>
                </g>
              </svg>
            </div>

            {/* Newsletter Heading - Exact matching */}
            <div className="space-y-0">
              <h2 className="text-[#2563EB] text-[48px] md:text-[54px] font-bold leading-[1.2] tracking-tight">
                Subscribe to our newsletter
              </h2>
              <h3 className="text-[#2563EB] text-[48px] md:text-[54px] font-bold leading-[1.2] tracking-tight">
                to stay in touch with the latest.
              </h3>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-5 mt-2">
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full max-w-[500px] px-7 py-[18px] rounded-full border-[1.5px] border-gray-400 focus:outline-none focus:border-gray-500 text-[16px] placeholder:text-gray-500"
              />
              <button className="bg-black text-white px-10 py-4 rounded-xl font-bold text-[15px] tracking-wide flex items-center gap-3 hover:bg-gray-900 transition-colors">
                SUBMIT
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Vertical Divider - Exact positioning */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[58.33%] w-[1px] bg-gray-300"></div>

          {/* Right Section - Links (5 columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 lg:pl-8">
            
            {/* Products Column */}
            <div>
              <h3 className="text-black text-[20px] font-bold mb-5">Products</h3>
              <ul className="space-y-[10px]">
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Bankfair
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Pago
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Sherlock
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Remitree
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Customer Onboarding Solution
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Loan Origination System
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Almanac
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Sams
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Conciliare
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Internet Banking Solution
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-black text-[20px] font-bold mb-5">Quick Links</h3>
              <ul className="space-y-[10px]">
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Careers
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Resources
                </li>
                <li className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors">
                  • Contact
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media & Policies */}
        <div className="mt-20 pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            
            {/* Social Media Icons - Exact sizing */}
            <div className="flex items-center gap-7">
              <a
                href="#"
                className="hover:opacity-60 transition-opacity"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-[24px] h-[24px] text-black" />
              </a>
              <a
                href="#"
                className="hover:opacity-60 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram className="w-[24px] h-[24px] text-black" />
              </a>
              <a
                href="#"
                className="hover:opacity-60 transition-opacity"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-[24px] h-[24px] text-black" />
              </a>
            </div>

            {/* Policy Links - Exact spacing */}
            <div className="flex items-center gap-8">
              <a href="#" className="text-black text-[15px] hover:text-gray-600 transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="text-black text-[15px] hover:text-gray-600 transition-colors whitespace-nowrap">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
      </div>
    
    </>
    
  
  );
};

export default NewOneFooter;
