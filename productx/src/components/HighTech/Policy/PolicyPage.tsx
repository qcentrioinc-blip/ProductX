import BNFNav from "../../Banking&Finance/Navbar/BNFnav";
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
// import ContactSecHT from "../ContactSecHT";
// import FooterHT from "../FooterHT";
import PolicySec from "./PolicySec";


const PolicyPage = () => {
  return (
    <div>
      <BNFNav/>
        <PolicySec/>
        {/* <ContactSecHT/> */}
        {/* DESKTOP */}
     <div className="hidden lg:block relative">
       {/* Footer sits at bottom, ContactUS scrolls over it */}
       <div id="contact-us">
         <ContactUS />
       </div>
       <NewOneFooter />
     </div>
     
     {/* MOBILE */}
     <div className="lg:hidden">
       <ContactUS />
       <NewOneFooter />
     </div>
     
    </div>
  )
}

export default PolicyPage;