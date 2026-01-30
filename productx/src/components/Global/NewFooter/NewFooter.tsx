import { useState, useRef } from "react";
import { H4, Li, P } from "../../../styles/Typography";


import { toast } from "react-toastify";

// Preload hero assets on hover for faster visual loading
const preloadAssets = () => {
  const dashImg = new Image();
  dashImg.src = '/AIOptimization/dashboardfinal.webp';
};


export default function NewFooter() {
  const [email, setEmail] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-[#8C8C8C]");
  const hasPreloaded = useRef(false);

  const handlePreload = () => {
    if (!hasPreloaded.current) {
      hasPreloaded.current = true;
      preloadAssets();
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevents page reload
    handleSubmit();
  };

  const isTypingEmailValid = (value: string) => {
    const parts = value.split('@');

    // No @ yet → neutral
    if (parts.length === 1) return null;

    // More than one @ → invalid
    if (parts.length > 2) return false;

    const [, domain] = parts;

    // User just typed `@` → GREEN
    if (domain === '') return true;

    // Trailing dot is invalid
    if (domain.endsWith('com.')) return false;

    // Allow partial or full domain (letters + single dot)
    if (!/^[a-zA-Z]+(\.[a-zA-Z]*)?$/.test(domain)) return false;

    return true;
  };


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setButtonColor("bg-[#8C8C8C]");
      return;
    }

    if (isTypingEmailValid(value)) {
      setButtonColor("bg-green-500");
    } else if (value.includes('@')) {
      setButtonColor("bg-red-500"); // ❌ invalid structure
    } else {
      setButtonColor("bg-[#8C8C8C]");
    }
  };





  const isFullyValidEmail = (value: string) => {
    return /^[^\s@]+@[a-zA-Z]+\.(com|in|net|org|co|io)$/.test(value);
  };


  const handleSubmit = () => {
    if (!isFullyValidEmail(email)) {
      toast.error("Please enter a valid email address");
      setButtonColor("bg-[#8C8C8C]"); // ✅ reset to gray
      return;
    }

    toast.success("Submitted successfully");
    setEmail("");
    setButtonColor("bg-[#8C8C8C]"); // ✅ reset to gray
  };



  return (
    <footer className="bg-black text-white  py-10 lg:py-20 ">
      <div className="max-w-8xl lg:mx-10 px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 space-x-16   pb-8">
          {/* Logo & Description */}
          <div className="max-w-sm space-y-8">
            <div className=" h-12 rounded-sm font-quickstand  mb-6 flex items-center justify-start    ">
              < a href="/"><img src="/WhiteQnestLogo.webp" alt="Logo" className="w-full h-10" /></a>
            </div>
            <P className="  text-gray-300">
              We are more than a technology provider; we <br /> are your strategic partner in progress.
            </P>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <span className="cursor-pointer"><img src="/GlobalTwitter.png" w-14 h-14 alt="" /> </span>
              <span className="cursor-pointer"><img src="/GlobalInsta.png" w-14 h-14 alt="" /> </span>
              <span className="cursor-pointer"><img src="/GlobalLinkedIn.png" w-14 h-14 alt="" /> </span>
            </div>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="flex lg:hidden flex-row items-center lg:items-center gap-4"
          >

            <H4 className="text-gray-300 mb-4">Stay Up to date</H4>
            <P className="text-gray-300 text-sm mb-4">
              Subscribe to our insights, our monthly look at the critical issues facing global businesses.
            </P>
            <div className=" flex lg:hidden flex-row items-center lg:items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}

                className="w-full px-4 py-4 font-quickstand text-[16px] rounded-lg bg-transparent border border-gray-500 text-sm focus:outline-gray-500"
              />
              <button
                type="submit"

                className={`${buttonColor} text-white px-6 py-3 font-quicksand text-md rounded-xl text-sm transition-colors duration-300`}
              >
                Subscribe
              </button>
            </div>
          </form>
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
                  rel="noopener noreferrer"
                  onMouseEnter={handlePreload}
                  onFocus={handlePreload}
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
            <form
              onSubmit={handleFormSubmit}
              className="flex md:hidden lg:flex lg:flex-row flex-col items-start lg:items-center gap-4"
            >

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-4 font-quickstand text-[16px] rounded-lg bg-transparent border border-gray-500 text-sm focus:outline-none"
              />

              <button
                type="submit"

                className={`${buttonColor} text-white px-6 py-3 font-quicksand text-md rounded-xl text-sm transition-colors duration-300`}
              >
                Subscribe
              </button>


            </form>
          </div>



        </div>


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start text-xs text-gray-300 gap-4   pt-6">
          <P className="text-gray-300">2026 Qnest Global. All rights reserved</P>

          {/* <div className="flex flex-none gap-4">
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Security Policy</span>
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Privacy Policy</span>
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Terms of service</span>
            <span className="font-quickstand md:text-[16px] text-[12px] hover:text-white hover:underline cursor-default">Cookie Policy</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}



