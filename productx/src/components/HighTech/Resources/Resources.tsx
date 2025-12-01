import { useState } from "react";
import SubFooter from "../AboutHightTech/SubFooter";
import BlogContent from "./BlogContent";
import BlogHead from "./BlogHead";
import HeroSection from "./HeroSection";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<
    'Case studies' | 'Blogs' | 'News/press Release' | 'Whitepapers'
  >('Case studies');

  return (
    <div>
      <div className="relative overflow-x-hidden">
        <HeroSection />
        <BlogHead activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>

      <BlogContent activeCategory={activeCategory} />

      <SubFooter />
    </div>
  );
};

export default Resources;
