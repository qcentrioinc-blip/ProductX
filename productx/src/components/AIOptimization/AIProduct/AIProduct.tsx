// NO LAZY LOADING - All components load immediately for consistent scroll restoration
import { memo, Suspense, lazy } from 'react';
import HeroCombined from "./HeroComp/HeroCombined";
import DeferredLoader from "../../Global/DeferredLoader";
// Lazy load middle components
const CTA = lazy(() => import("./CTA"));
const Onboarding = lazy(() => import('./Onboarding'));
const Firm = lazy(() => import('./Firm'));
const ImageGrid = lazy(() => import('../HomePageAI/ImageGrid'));
const FeatureCards = lazy(() => import("../HomePageAI/Features"));


const AIProduct = () => {
  
  return (
    <div className="relative">
      <div id='landingpage'>
        <HeroCombined />  
      </div>

      <Suspense fallback={null}>
        <CTA />
        <Onboarding />
        <Firm />
        <ImageGrid />
        <FeatureCards />
        {/* <CostOptimization /> */}
        {/* <Timeline /> */}
      </Suspense>

      {/* Defer loading of lower sections to clear critical path latency and reduce TBT */}
      <DeferredLoader
        loader={() => import("./CostOptimization")}
        delay={1500}
      />
      <DeferredLoader
        loader={() => import("../HomePageAI/Timeline")}
        delay={2500}
      />
      <DeferredLoader
        loader={() => import("../../Banking&Finance/HWD")}
        delay={3000}
      />
      <DeferredLoader
        loader={() => import('./UseCases')}
        delay={3500}
      />
      <DeferredLoader
        loader={() => import("../../Banking&Finance/ProductSherlock/FAQ")}
        delay={4000}
      />
      <DeferredLoader
        loader={() => import("../../HomePage/AIOptimization/AIBlogs")}
        delay={4500}
      />
    </div>
  );
};

export default memo(AIProduct);