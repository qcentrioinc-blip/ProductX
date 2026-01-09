import { H4, Li, P } from "../../../styles/Typography";

 

export default function NewFooter() {
  return (
    <footer className="bg-black text-white  py-10 lg:py-20 ">
      <div className="max-w-8xl lg:mx-10 px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 space-x-16   pb-8">
          {/* Logo & Description */}
          <div className="max-w-sm space-y-8">
            <div className="w-14 h-10 rounded-sm font-quickstand bg-gray-300 mb-6 flex  py-6 items-center justify-center text-black  text-sm">
              < a href="/">LOGO</a>
            </div>
            <P className="  text-gray-300">
              We are more than a technology provider; we <br/> are your strategic partner in progress.
            </P>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <span className="cursor-pointer"><img src="/GlobalTwitter.png" w-14 h-14 alt=""/> </span>
          <span className="cursor-pointer"><img src="/GlobalInsta.png" w-14 h-14 alt=""/> </span>
              <span className="cursor-pointer"><img src="/GlobalLinkedIn.png" w-14 h-14 alt=""/> </span>
            </div>
          </div>
           <div className="hidden md:flex lg:hidden flex-col mt-16">
            <H4 className="text-gray-300 mb-4">Stay Up to date</H4>
            <P className="text-gray-300 text-sm mb-4">
              Subscribe to our insights, our monthly look at the critical issues facing global businesses.
            </P>
            <div className="hidden md:flex lg:hidden flex-row items-center lg:items-center gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 font-quickstand text-[16px] rounded-lg bg-transparent border border-gray-500 text-sm focus:outline-gray-500"
              />
              <button className="bg-[#8C8C8C]  text-gray-300 px-6 py-3 rounded-xl text-sm">SUBMIT</button>
            </div>
            </div>
        </div>
    <hr className="my-4 md:my-10 bg-[#858585] w-full"></hr>
        {/* Middle Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-0 py-4 md:py-10">
          {/* Industries */}
          <div>
            <H4 className="text-gray-300 mb-4">Industries</H4>
            <ul className="space-y-3 text-gray-300 text-sm ">
              <a href="/industries/high-tech" target="_blank" ><Li className="mb-3 hover:text-white hover:underline">High Tech</Li></a>
              
              <a href="/industries/banking-and-finance" target="_blank"><Li className="mb-3 hover:text-white hover:underline">Banking and Finance</Li></a> 
              <a href="/industries/ehr-and-pms" target="_blank"><Li className="mb-3 hover:text-white hover:underline">EHR-PMS</Li></a> 
              <a href="/industries/ai-optimization" target="_blank"> <Li className="mb-3 hover:text-white hover:underline">AI-Optimization</Li></a>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <H4 className="text-gray-300 mb-4">Quick Links</H4>
            <ul className="space-y-3 text-gray-300 text-sm ">
              <Li className="hover:text-white hover:underline cursor-default">Industries</Li>
              <Li className="hover:text-white hover:underline cursor-default">Products</Li>
              <Li className="hover:text-white hover:underline cursor-default">Resources</Li>
              <Li className="hover:text-white hover:underline cursor-default">Company</Li>
            </ul>
          </div>

          {/* Contact Sales */}
          <div>
            <H4 className="text-gray-300 mb-4">Contact Sales</H4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <Li className="hover:text-white hover:underline cursor-default">info@abc.com</Li>
              <Li className="hover:text-white hover:underline cursor-default">040-7418529630</Li>
            </ul>
          </div>

          {/* Stay up to date */}
          <div className="hidden lg:flex flex-col ">
            <H4 className="text-gray-300 mb-4">Stay Up to date</H4>
            <P className="text-gray-300 text-sm mb-4">
              Subscribe to our insights, our monthly look at the critical issues facing global businesses.
            </P>
            <div className="flex md:hidden lg:flex lg:flex-row flex-col items-start lg:items-center gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 font-quickstand text-[16px] rounded-lg bg-transparent border border-gray-500 text-sm focus:outline-none"
              />
              <button className="bg-[#8C8C8C]  text-gray-300 px-6 py-3 rounded-xl text-sm">SUBMIT</button>
            </div>
          </div>
          
           
           
        </div>
        

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start text-xs text-gray-300 gap-4   pt-6">
          <P>2025 Abc Technologies. All rights reserved</P>

          <div className="flex flex-none gap-4">
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Security Policy</span>
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Privacy Policy</span>
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Terms of service</span>
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
