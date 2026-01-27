import { Suspense, lazy } from 'react';
import FeatureCards from "../HomePageAI/Features"
import AIBlogs from "../../HomePage/AIOptimization/AIBlogs"
import FaqSection from "../../Banking&Finance/ProductSherlock/FAQ"
import HWD from "../../Banking&Finance/HWD"
import Timeline from "../HomePageAI/Timeline"
import CostOptimization from "./CostOptimization"
import TextSec from "./CTA"
import HeroCombined from "./HeroComp/HeroCombined"

const FeaturesCombined = lazy(() => import("./FeaturesComp/FeaturesCombined"));

const AIProduct = () => {
  return (
    <div className="relative">
      <HeroCombined />
      {/* <CTA/> */}
      <TextSec />
      <Suspense fallback={<div className="w-full min-h-screen bg-[#0A0A0B]" />}>
        <FeaturesCombined />
      </Suspense>
      <FeatureCards />
      <CostOptimization />
      <Timeline />
      {/* <Testimonial /> */}
      <div id="usecases">
        <HWD />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <div id="blogs">
        <AIBlogs />
      </div>
      {/* <AIFooter /> */}
    </div>
  );
};

export default AIProduct;