import { useEffect,    useState } from "react";
import { H1, P } from "../../../styles/Typography";

import ContactModal from "../Navbar/ContactModal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
// import FloatingLines from "../../HomePage/AIOptimization/AIFooterBackground";


const FinalHero = () => {


  // const heroRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 400, 1);
      setOpacity(1 - progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
 
  return (
    <section className="relative  overflow-hidden"  style={{ opacity }}>
     
     
       <div className="relative  lg:pt-36 xl:pt-32 z-10 mx-10 max-w-8xl xl:px-10 py-20
                flex flex-col items-center justify-center  ">
 
         
            <div className=" text-center ">
             <H1
  className="
    text-center
    pt-10
    
    leading-tight
    bg-gradient-to-b
    from-[#8DC1FB]
    to-[#FFFFFF]
    bg-clip-text
    text-transparent
  "
>
  AI-Powered Cloud Cost <br /> Optimization Platform
</H1>


              <P className="mt-6 mx-auto max-w-4xl  text-center text-white/90">
  CloudDIET profiles, analyzes, and optimizes your Azure, AWS, and Google Cloud spend, ensuring faster ROI with guaranteed savings and no data access. Our performance-based pricing means you only pay for the savings we deliver, with most customers seeing returns within the first month.
              </P>
 
              <div className="mt-8    flex flex-flex-row  item-center gap-4 justify-center">
           <button className=" group
          flex items-center justify-center
          w-52 h-[48px]
          px-[24px] py-[12px]
          rounded-[8px]
          font-quicksand   text-[16px]
          bg-transparent text-white
        border-white border-2
          shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
          transition-all duration-300
          hover:bg-white hover:text-black" onClick={() => setModalOpen(true)}>
            Request A Demo
            <span className="flex items-center gap-4">
                       
                      <span className="relative flex items-center w-[20px] h-[20px]">
                        <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                        <ArrowRight  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </span>
                    </span>
          </button>
 
               <a
  href="https://login.clouddiet.app/clouddiet.app/b2c_1a_signup_signin/oauth2/v2.0/authorize?response_type=code+id_token&redirect_uri=https%3A%2F%2Fclouddiet.app%2F.auth%2Flogin%2Faad%2Fcallback&client_id=b72bae63-25f0-4f12-ad69-e7460b1e2e39&scope=openid+offline_access+https%3A%2F%2Fclouddiet.app%2F0a443360-f8c7-4662-9872-51296650b772%2Fuser_impersonation&response_mode=form_post&nonce=425c124478134932abe392d72d55c611_20260120063213&state=redir%3D%252F"
  target="_blank"   
  rel="noopener noreferrer"
  className="group
            flex items-center justify-center
            w-44 h-[48px]
            px-[24px] py-[12px]
            rounded-[8px]
            font-quicksand font-bold text-[16px]
            bg-white text-black
          
            shadow-[0_6px_2px_-4px_rgba(14,14,44,0.1)]
            transition-all duration-300
            hover:bg-white hover:text-[#254D70]
            ${className}
          "
        >Login
          <span className="flex items-center gap-2">
         
            <span className="relative flex items-center w-[20px] h-[20px]">
              <ArrowUpRight className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowRight className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </span>

 </a>
              </div>
            </div>
 
           
          </div>
       <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
     
 
    </section>
  );
};
 
export default FinalHero;