import { memo } from "react";
// import Onboarding from "../Onboarding";
// import Firm from "../Firm";
// import ImageGrid from "../../HomePageAI/ImageGrid";

const FeaturesCombined = () => {
    return (
        <section
            className="relative"
            style={{
                backgroundImage: "url('/AIProduct/CloudBg.png')",
                contain: 'layout paint' // Optimization to isolate layout recalculations
            }}
        >
            {/* <Onboarding /> */}
            {/* <Firm /> */}
            {/* <ImageGrid /> */}
        </section>
    );
};

export default memo(FeaturesCombined);
