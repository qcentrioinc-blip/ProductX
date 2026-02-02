// NO LAZY LOADING - All components load immediately for consistent scroll restoration
import { memo } from 'react';
import HeroCombined from "./HeroComp/HeroCombined";
import TextSec from "./CTA";
import UseCases from './UseCases';
import HWD from "../../Banking&Finance/HWD";
import Firm from './Firm';
import ImageGrid from '../HomePageAI/ImageGrid';
import FeatureCards from "../HomePageAI/Features";
import CostOptimization from "./CostOptimization";
import Timeline from "../HomePageAI/Timeline";
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ";
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs";
import Onboarding from './Onboarding';

const AIProduct = () => {
  return (
    <div className="relative">
      <div id='landingpage'>
        <HeroCombined />
      </div>
      
      <TextSec />
      <Onboarding />
      <Firm />
      <ImageGrid />
      <FeatureCards />
      <CostOptimization />
      <Timeline />
      <HWD />
      <UseCases />
      <FaqSection />
      <AIBlogs />
    </div>
  );
};

export default memo(AIProduct);