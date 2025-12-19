
// import Footer from '../../Footer/Footer';
// import CallToAction from '../../HomePage/LandingPages/CallToAction';
// import Footer from '../../Global/Footer/Footer';
// import CallToAction from '../../HomePage/GlobalLandingPage/CallToAction';
// import AlphabetsSection from './AlphabetsSection';
import HeroSec from './HeroSec';
import AsSec from './AsSec';
import NewOneFooter from '../ProductRemitree/NewOneFooter';
 
import ContactUS from '../ProductRemitree/ContactUS';
import BNFNav from '../BNFnav';
import EHRFooter from '../../HomePage/EHR&PMS/EHRFooter';
import SubFooter from '../../HighTech/AboutHightTech/SubFooter';
 
 
 
// import AlphabetSec from './AlphabetsSection';

interface GlossaryPageProps {
  industry: string;
}

const GlossaryPage = ({ industry }: GlossaryPageProps) => {
  return (
    <>
    <BNFNav/>
      <HeroSec/>
      
      <AsSec/>
   {/* <AlphabetSec/> */}
      {industry === "finance" && (
        <>
           <div className="relative">
      
      <div className=" lg:h-[200vh]"></div>
     
     
       
        <div className="sticky bottom-0 inset-0 z-30">
          <NewOneFooter/>
        </div>
 
         
        <div
          className="absolute inset-0 z-40 pointer-events-none"
         
        >
          <ContactUS/>
        </div>
 
      </div>
        </>
      )}

      {industry === "ehrpms" && <EHRFooter />}
      {industry === "hightech" && <SubFooter />}
 
       
      {/* <NewOneFooter/> */}
       
      
    </>
  );
};

export default GlossaryPage;
