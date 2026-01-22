import { useState } from "react";
import { H4, Li, P } from "../../../styles/Typography";

 
import { toast } from "react-toastify";




export default function NewFooter() {
  const [email, setEmail] = useState("");
 
const handleSubmit = () => {
  if (!email.trim()) {
    toast.error("Please enter your email");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address");
    return;
  }

  toast.success("Submitted successfully");
  setEmail("");
};


  return (
    <footer className="bg-black text-white  py-10 lg:py-20 ">
      <div className="max-w-8xl lg:mx-10 px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 space-x-16   pb-8">
          {/* Logo & Description */}
          <div className="max-w-sm space-y-8">
            <div className="w-36 h-12 rounded-sm font-quickstand bg-gray-300 mb-6 flex  p-2 items-center justify-center text-black  text-sm">
              < a href="/"><img src="../logo.svg" alt="Logo" className="w-30 h-10"/></a>
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
           <div className="    flex lg:hidden flex-col mt-16">
            <H4 className="text-gray-300 mb-4">Stay Up to date</H4>
            <P className="text-gray-300 text-sm mb-4">
              Subscribe to our insights, our monthly look at the critical issues facing global businesses.
            </P>
            <div className=" flex lg:hidden flex-row items-center lg:items-center gap-4">
            <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}

                className="w-full px-4 py-4 font-quickstand text-[16px] rounded-lg bg-transparent border border-gray-500 text-sm focus:outline-gray-500"
              />
             <button onClick={handleSubmit}>SUBMIT</button>
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
              <li>
    <a
      href="/industries/cloud-finops-ai"
      className="inline-block hover:text-white hover:underline"
      target="_blank"
    >
      Cloud FinOps AI
    </a>
  </li>
              <a href="/comingsoon" target="_blank"><Li className="mb-3 hover:text-white ">High Tech</Li></a>
              
              <a href="/comingsoon" target="_blank"><Li className="mb-3 hover:text-white ">Banking and Finance</Li></a> 
              <a href="/comingsoon" target="_blank"><Li className="mb-3 hover:text-white ">EHR-PMS</Li></a> 
             
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <H4 className="text-gray-300 mb-4">Quick Links</H4>
            <ul className="space-y-3 font-quicksand text-gray-300 text-sm">
  <li>
    <a
      href="/platform"
      className="inline-block hover:text-white hover:underline"
    >
      Platform
    </a>
  </li>

  <li>
    <a
      href="/comingsoon"
      className="inline-block hover:text-white hover:underline"
    >
      Marketplace
    </a>
  </li>
</ul>

          </div>

          {/* Contact Sales */}
          <div>
  <H4 className="text-gray-300 mb-4">Contact Sales</H4>
  <ul className="space-y-3 text-gray-300 text-sm">
    <Li>
      <span className="inline-block hover:text-white hover:underline cursor-pointer">
        info@abc.com
      </span>
    </Li>
    <Li>
      <span className="inline-block hover:text-white hover:underline cursor-pointer">
        040-7418529630
      </span>
    </Li>
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
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-4 py-4 font-quickstand text-[16px] rounded-lg bg-transparent border border-gray-500 text-sm focus:outline-none"
/>

<button
  onClick={handleSubmit}
  className="bg-[#8C8C8C] text-gray-300 px-6 py-3 rounded-xl text-sm"
>
  SUBMIT
</button>


            </div>
          </div>
          
           
           
        </div>
        

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start text-xs text-gray-300 gap-4   pt-6">
          <P className="text-gray-300">2026 Qnest Global. All rights reserved</P>

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
