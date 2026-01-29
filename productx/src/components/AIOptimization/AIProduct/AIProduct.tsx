import { Suspense, lazy, memo } from 'react';
import HeroCombined from "./HeroComp/HeroCombined";
import TextSec from "./CTA";
import UseCases from './UseCases';

// Lazy load below-the-fold components for faster initial render
const Onboarding = lazy(() => import('./Onboarding'));
const Firm = lazy(() => import('./Firm'));
const ImageGrid = lazy(() => import('../HomePageAI/ImageGrid'));
const FeatureCards = lazy(() => import("../HomePageAI/Features"));
const CostOptimization = lazy(() => import("./CostOptimization"));
const Timeline = lazy(() => import("../HomePageAI/Timeline"));
const HWD = lazy(() => import("../../Banking&Finance/HWD"));
const FaqSection = lazy(() => import("../../Banking&Finance/ProductSherlock/FAQ"));
const AIBlogs = lazy(() => import("../../HomePage/AIOptimization/AIBlogs"));

// Minimal loading placeholder - same background as page
const LoadingPlaceholder = () => (
  <div className="w-full min-h-[50vh] bg-[#0A0A0B]" />
);

const AIProduct = () => {
  return (
    <div className="relative">
      {/* Critical above-the-fold content - loads immediately */}
      <HeroCombined />
      <TextSec />

      {/* Below-the-fold content - lazy loaded */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <Onboarding />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Firm />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <ImageGrid />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <FeatureCards />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <CostOptimization />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Timeline />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <HWD />
      </Suspense>
       <Suspense fallback={<LoadingPlaceholder />}>
         <UseCases/>
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <div id="faq">
          <FaqSection />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <div id="blogs">
          <AIBlogs />
        </div>
      </Suspense>
    </div>
  );
};

export default memo(AIProduct);