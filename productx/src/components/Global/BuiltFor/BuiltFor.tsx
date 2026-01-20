import { useLocation  } from "react-router-dom";

import InsightThought from "../../Banking&Finance/InsightThought";
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
import BuiltForIntro from "./BuiltForIntro";
import Cardcase from "./CardCase";
import GradientCardsSection from "./GradientCards";
import ImgSec from "./ImgSec";
import SplitFeature from "./SplitFeature";
import TextSec from "./TextSec";

import BNFNav from "../../Banking&Finance/BNFnav";
import AINavbar from "../../AIOptimization/Navbar/AINavbar";
import EHRNavbar from "../../EHR&PMS/Navbar/EHRNavbar";
import HighTechNavbar from "../../HighTech/Navbar/HighTechNavbar";

import EHRFooter from "../../HomePage/EHR&PMS/EHRFooter";
import FooterHT from "../../HighTech/FooterHT";
import AIFooter from "../../HomePage/AIOptimization/AIFooter";
import TitleSectionSwitcher from "./TitleSectionSwitcher";
import BlogCarousel from "../../HomePage/EHR&PMS/BlogCarousel";
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs";
import ContactUS from "../../Banking&Finance/ProductRemitree/ContactUS";
import ContactSecHT from "../../HighTech/ContactSecHT";

export const BuiltFor = () => {
  const { pathname } = useLocation();
 
 
  const getNavbar = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <BNFNav />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AINavbar />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRNavbar />;
    if (pathname.startsWith("/industries/high-tech")) return <HighTechNavbar />;
    return null;
  };

 
  const getFooter = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <NewOneFooter />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <EHRFooter />;
    if (pathname.startsWith("/industries/high-tech")) return <FooterHT />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AIFooter />;
    return null;
  };
 
  const getInsightandThoughts = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <InsightThought />;
    if (pathname.startsWith("/industries/ehr-and-pms")) return <BlogCarousel />;
    if (pathname.startsWith("/industries/high-tech")) return <InsightThought />;
    if (pathname.startsWith("/industries/cloud-finops-ai")) return <AIBlogs  />;
    return null;
  };

  const getContactForm = () => {
    if (pathname.startsWith("/industries/banking-and-finance")) return <ContactUS />;
    if (pathname.startsWith("/industries/high-tech")) return <ContactSecHT />;
    return null;
  };

  return (
    <div>
      {/* Navbar */}
      {getNavbar()}

    <TitleSectionSwitcher />
<TextSec />
<Cardcase />
<BuiltForIntro />
<GradientCardsSection />
<SplitFeature />
<ImgSec />

      {getInsightandThoughts()}
      {getContactForm()}
      {getFooter()}
    </div>
  );
};
