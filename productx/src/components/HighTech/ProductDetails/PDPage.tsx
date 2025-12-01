import TitleSec from './TitleSec'
import StepsSec from './StepsSec.tsx'
import ProductSec from './ProductSec.tsx'
import CardsSec from './CardSec.tsx'
import Highlights from './Highlights.tsx'
import FeatureCards from './FeatureCards.tsx'
import HWD from '../../Banking&Finance/HWD.tsx'
import SubFooter from '../Careers/SubFooter.tsx'
import FaqSection from '../../Banking&Finance/ProductSherlock/FAQ.tsx'
import CTA from '../AboutHightTech/CTA.tsx'

 


const PDPage = () => {
  return (
    <>
    
        <TitleSec/>
        <CTA/>
        <StepsSec/>
        <ProductSec/>
        <CardsSec/>
        <Highlights/>
        <FeatureCards/>
        <HWD/>
        <FaqSection/>
        <SubFooter/>

        </>
  
  )
}
export default PDPage;
