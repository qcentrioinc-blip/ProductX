import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const NewOneFooter = () => {
  return (
    <>
      <div
        className='lg:relative lg:h-[700px]'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className='lg:fixed lg:bottom-0 lg:h-[700px] lg:w-full lg:pointer-events-none'>

          <footer className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">

                {/* Left Section */}
                <div className="lg:col-span-7 flex flex-col space-y-10">

                  {/* Orange Icon */}
                  <div className="w-[80px] h-[80px]">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <g transform="translate(100, 100)">
                        <rect x="-15" y="-85" width="30" height="170" fill="#FF8C00" rx="8" />
                        <rect x="-85" y="-15" width="170" height="30" fill="#FF8C00" rx="8" />
                        <rect x="-15" y="-85" width="30" height="170" fill="#FF8C00" rx="8" transform="rotate(45)" />
                        <rect x="-15" y="-85" width="30" height="170" fill="#FF8C00" rx="8" transform="rotate(-45)" />
                      </g>
                    </svg>
                  </div>

                  {/* Headings */}
                  <div className="space-y-0">
                    <h2 className="text-[#2563EB] text-[48px] md:text-[54px] font-bold leading-[1.2] tracking-tight">
                      Subscribe to our newsletter
                    </h2>
                    <h3 className="text-[#2563EB] text-[48px] md:text-[54px] font-bold leading-[1.2] tracking-tight">
                      to stay in touch with the latest.
                    </h3>
                  </div>

                  {/* Input + Submit */}
                  <div className="space-y-5 mt-2">
                    <input
                      type="email"
                      placeholder="Enter your mail"
                      className="w-full max-w-[500px] px-7 py-[18px] rounded-full border-[1.5px] border-gray-400 focus:outline-none text-[16px] placeholder:text-gray-500"
                    />
                    <button className="bg-black text-white px-10 py-4 rounded-xl font-bold text-[15px] tracking-wide flex items-center gap-3 hover:bg-gray-900 transition-colors">
                      SUBMIT
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block absolute top-0 bottom-0 left-[58.33%] w-[1px] bg-gray-300"></div>

                {/* Right Section - Links (5 columns) */}
                <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-8">

                  {/* Top: Products + Quick Links (2 columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">

                    {/* Products Column */}
                    <div>
                      <h3 className="text-black text-[20px] font-bold mb-5">Products</h3>
                      <ul className="space-y-[10px]">
                        <li className="text-black text-[15px] leading-[1.6]">• Bankfair</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Pago</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Sherlock</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Remitree</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Customer Onboarding Solution</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Loan Origination System</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Almanac</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Sams</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Conciliare</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Internet Banking Solution</li>
                      </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                      <h3 className="text-black text-[20px] font-bold mb-5">Quick Links</h3>
                      <ul className="space-y-[10px]">
                        <li className="text-black text-[15px] leading-[1.6]">• Careers</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Resources</li>
                        <li className="text-black text-[15px] leading-[1.6]">• Contact</li>
                      </ul>
                    </div>

                  </div>

                  {/* Icons Row */}
                  <div className="flex items-center gap-7 mt-4">
                    <FaXTwitter className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-60" />
                    <FaInstagram className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-60" />
                    <FaLinkedinIn className="w-[24px] h-[24px] text-black cursor-pointer hover:opacity-60" />
                  </div>

                  {/* Privacy + Cookies */}
                  <div className="flex items-center gap-10 mt-2">
                    <a href="#" className="text-black text-[15px] hover:text-gray-600">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-black text-[15px] hover:text-gray-600">
                      Cookies Policy
                    </a>
                  </div>
                </div>

              </div>

              {/* ❌ Removed bottom bar completely */}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default NewOneFooter;
