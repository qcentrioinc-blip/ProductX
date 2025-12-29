import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { H2, H4 } from '../../../styles/Typography';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
 

const NewOneFooter = () => {

  const products = [
    { label: "Bankfair", url: "/industries/banking-and-finance/products/bankfair" },
    { label: "Pago", url: "/industries/banking-and-finance/products/pago" },
    { label: "Sherlock", url: "/industries/banking-and-finance/products/sherlock" },
    { label: "Remitree", url: "/industries/banking-and-finance/products/remitree" },
    { label: "Customer Onboarding Solution", url: "/industries/banking-and-finance/products/customer-onboarding-solutions" },
    { label: "Loan Origination System", url: "/industries/banking-and-finance/products/loan-origination-system" },
    { label: "Almanac", url: "/industries/banking-and-finance/products/almanac" },
    { label: "Sams", url: "/industries/banking-and-finance/products/sams" },
    { label: "Internet Banking Solution", url: "/industries/banking-and-finance/products/internet-banking-system" },
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
      <footer className="relative w-full py-20  bg-gray-100 " id="financeContainer  ">
        <div className="max-w-8xl  ">
          <div className="grid grid-cols-1 lg:mx-10 px-4 lg:grid-cols-12 gap-14 relative">
            
            {/* Left Section - Newsletter (7 columns) */}
            <div className="lg:col-span-7 flex flex-col space-y-10">

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

            {/* Vertical Divider */}
            <div className="hidden lg:block absolute top-0 bottom-10 left-[58.33%] w-[1px] bg-black"></div>

            {/* Right Section - Products + Quick Links */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-16 pl-2 lg:pl-8 gap-y-8 lg:py-10">
              
              {/* Products */}
              <div>
                <H4>Products</H4>
                <ul className="space-y-0 font-quicksand">
                  {products.map((item) => (
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