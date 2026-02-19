import { H2, H4 } from '../../../styles/Typography';
import { Link } from 'react-router-dom';

// Inline SVGs to avoid loading heavy icon libraries
const FaXTwitter = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
);
const FaInstagram = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
);
const FaLinkedinIn = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
);
const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);
const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);


const NewOneFooter = () => {

  const products = [
    { label: "Bankfair", url: "/industries/banking-and-finance/products/bankfair" },
    // { label: "Pago", url: "/industries/banking-and-finance/products/pago" },
    { label: "Sherlock", url: "/industries/banking-and-finance/products/sherlock" },
    // { label: "Remitree", url: "/industries/banking-and-finance/products/remitree" },
    // { label: "Customer Onboarding Solution", url: "/industries/banking-and-finance/products/customer-onboarding-solutions" },
    // { label: "Loan Origination System", url: "/industries/banking-and-finance/products/loan-origination-system" },
    // { label: "Almanac", url: "/industries/banking-and-finance/products/almanac" },
    // { label: "Sams", url: "/industries/banking-and-finance/products/sams" },
    // { label: "Internet Banking Solution", url: "/industries/banking-and-finance/products/internet-banking-system" },
  ];

  const quickLinks = [
    { label: "AboutUs", url: "/industries/banking-and-finance/aboutus" },
    { label: "Careers", url: "/industries/banking-and-finance/careers" },

    { label: "Blogs", url: "/industries/banking-and-finance/contactform" },
    { label: "News Letter", url: "/industries/banking-and-finance/contactform" },
    { label: "White Papers", url: "/industries/banking-and-finance/contactform" },
    { label: "Events", url: "/industries/banking-and-finance/contactform" },

    { label: "Contact", url: "/industries/banking-and-finance/contactform" },
    { label: "Platform", url: "/platform" },
    { label: "Market Place", url: "/marketplace" },
  ];





  return (
    <div
      className='lg:relative  lg:h-full'

    >


      <div className='relative z-50'>
        <footer className="relative w-full py-20  bg-gray-100 overflow-hidden" id="financeContainer">
          <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 xl:gap-14 relative">

              {/* Left Section - Newsletter (7 columns) */}
              <div className="lg:col-span-7 flex flex-col space-y-10 lg:border-r lg:border-black lg:pr-10">

                {/* Star Image */}
                <div className="w-[80px] h-[80px]">
                  <img
                    src="/BNFFooter/FooterStar.png"
                    alt="Footer Star"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Newsletter Heading */}
                <div className="space-y-0">
                  <H2 className='text-[#2B68C3]'>
                    Subscribe to our newsletter
                  </H2>
                </div>

                {/* Newsletter Form */}
                <div className="space-y-5 mt-2">
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    className="w-full max-w-[500px] font-quicksand px-7 py-4 rounded-full border-1 border-black focus:outline-none focus:border-black text-[16px] placeholder:text-black"
                  />
                  <Link to="/industries/banking-and-finance">
                    <button
                      className="
                      group
                      flex items-center justify-center
                      w-auto h-[44px] sm:h-[48px]
                      px-[20px] sm:px-[44px] py-[10px] sm:py-[12px]
                      rounded-[8px]
                      font-quicksand font-bold text-[14px] sm:text-[14px]
                      bg-[#141414] text-white
                      transition-all duration-300 ease-in-out
                      border border-transparent
                      hover:bg-white hover:text-[#141414]
                      hover:border-[#010101]
                      hover:border-t-[1px] hover:border-r-[1px] hover:border-b-[4px] hover:border-l-[1px]
                      hover:-translate-y-[2px]
                      shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
                    "
                    >
                      SUBMIT
                      <span className="flex items-center gap-[8px]">
                        <span
                          className="
                          relative flex items-center justify-center
                          w-[20px] sm:w-[23.5px] h-[20px] sm:h-[23.5px] p-[4px] sm:p-[5px]
                        "
                        >
                          <ArrowUpRight
                            className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                          />
                          <ArrowRight
                            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />
                        </span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Vertical Divider - Moved to border-r on left column */}

              {/* Right Section - Products + Quick Links */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:gap-x-8 xl:gap-x-16 pl-2 lg:pl-10 gap-y-8 lg:py-10">

                {/* Products */}
                <div>
                  <H4>Products</H4>
                  <ul className="space-y-0 font-quicksand">
                    {products.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.url}
                          className="text-black text-[18px] leading-[1.6] hover:text-gray-600 cursor-pointer hover:underline transition-colors"
                        >
                          • {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <H4>Quick Links</H4>
                  <ul className="space-y-0 font-quicksand">
                    {quickLinks.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.url}
                          className="text-black text-[15px] leading-[1.6] hover:text-gray-600 cursor-pointer transition-colors"
                        >
                          • {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex  flex-col-reverse lg:flex-col font-quicksand items-start  lg:space-y-10 gap-8">

                  {/* Socials */}
                  <div className="flex lg:-ml-4 items-start gap-7">
                    <a href="#" className="hover:opacity-60 transition-opacity">
                      <FaXTwitter className="w-[24px] h-[24px] text-black" />
                    </a>
                    <a href="#" className="hover:opacity-60 transition-opacity">
                      <FaInstagram className="w-[24px] h-[24px] text-black" />
                    </a>
                    <a href="#" className="hover:opacity-60 transition-opacity">
                      <FaLinkedinIn className="w-[24px] h-[24px] text-black" />
                    </a>
                  </div>

                  <div className="flex-col md:flex-row flex lg:-ml-6  items-start lg:items-center  lg:gap-8">
                    <a href="/industries/banking-and-finance/policy" className="text-black text-[14px] lg:text-[18px] font-quicksand whitespace-nowrap">
                      Terms and Conditions
                    </a>
                    <a href="/industries/banking-and-finance/policy" className="text-black text-[14px] lg:text-[18px] font-quicksand whitespace-nowrap">
                      Cookies Policy
                    </a>
                    <a href="/industries/banking-and-finance/policy" className="text-black text-[14px] lg:text-[18px] font-quicksand whitespace-nowrap">
                      Privacy Policy
                    </a>

                  </div>
                </div>
              </div>
            </div>



          </div>
          {/* Bottom Pattern Image - no extra spacing */}
          <img
            src="/BNFFooter/BottomPattern.png"
            className="w-full h-16  absolute bottom-0 object-cover block"
            alt=""
          />
        </footer>
      </div>


    </div>

  );
};

export default NewOneFooter;