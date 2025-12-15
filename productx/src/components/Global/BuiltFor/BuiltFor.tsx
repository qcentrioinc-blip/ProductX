import { useLocation } from 'react-router-dom';
import InsightThought from "../../Banking&Finance/InsightThought";
import NewOneFooter from "../../Banking&Finance/ProductRemitree/NewOneFooter";
import BuiltForIntro from "./BuiltForIntro";
import Cardcase from "./CardCase";
import GradientCardsSection from "./GradientCards";
import ImgSec from "./ImgSec";
import SplitFeature from "./SplitFeature";
import TextSec from "./TextSec";
import TitleSectionSwitcher from "./TitleSectionSwitcher";
import BNFNav from '../../Banking&Finance/BNFnav';
import AINavbar from '../../AIOptimization/Navbar/AINavbar';
import EHRNavbar from '../../EHR&PMS/Navbar/EHRNavbar';
import HighTechNavbar from '../../HighTech/Navbar/HighTechNavbar';

// Import navbars

export const BuiltFor = () => {
  const { pathname } = useLocation();

  // Get navbar component based on route
  const getNavbarComponent = () => {
    if (pathname.startsWith('/industries/banking-and-finance')) return <BNFNav/>;
    if (pathname.startsWith('/industries/ai-optimization')) return <AINavbar />;
    if (pathname.startsWith('/industries/ehr-and-pms')) return <EHRNavbar />;
    if (pathname.startsWith('/industries/high-tech')) return <HighTechNavbar />;
    return null;
  };

  const NavbarComponent = getNavbarComponent();

  return (
    <div>
      {/* Render navbar if exists */}
      {NavbarComponent}
      
      {/* Rest of your components */}
      <TitleSectionSwitcher/>
      <TextSec/>
      <Cardcase/>
      <BuiltForIntro/>
      <GradientCardsSection/>
      <SplitFeature/>
      <ImgSec/>
      <InsightThought/>
      <NewOneFooter/>
    </div>
  );
};
