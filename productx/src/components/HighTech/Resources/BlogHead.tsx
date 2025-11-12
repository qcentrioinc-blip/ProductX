import React, { useState } from 'react';
import { H2 } from '../../../styles/Typography';

// Define the available button categories
type Category = 'Case studies' | 'Blogs' | 'News/press Release';




const BlogHead: React.FC = () => {
  // State to track the active category (defaulting to 'Case studies')
  const [activeCategory, setActiveCategory] = useState<Category>('Case studies');

  // Define the new active gradient for the background (Used in renderButton)
  const activeGradient = 'bg-gradient-to-r  from-[#F99526] to-[#8338EC]';
  
  // NOTE: 'caseStudyGradient' and 'isCaseStudyButton' have been removed as they were unused.

  // Helper function to render a button based on its active state
  // Removed the unused 'isCaseStudyButton' parameter
  const renderButton = (category: Category) => {
    const isActive = activeCategory === category;

    // Base classes for all buttons
    const baseClasses = "w-full sm:w-auto px-10 py-3 text-lg font-light font-bricolage transition duration-300 transform hover:scale-[1.02] shadow-lg";

    // Dynamic classes based on active state
    let dynamicClasses = '';

    if (isActive) {
      // Active State Styling: Linear Gradient, rounded-md, no border
      dynamicClasses = `rounded-full px-10 text-white ${activeGradient}`;
    } else {
      // Inactive State Styling: Rounded-full, thin border, transparent background, white text
      dynamicClasses = `rounded-full border border-white  text-white bg-transparent hover:bg-white/10`;
    }

    return (
      <button
        key={category}
        type="button"
        className={`${baseClasses} ${dynamicClasses}`}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    );
  };
  return (
    <header className=" w-full overflow-hidden bg-black text-white">
      {/* Background Gradient/Simulated Wave Pattern (Left Side) */}
      
      
      

      {/* Content Container */}
      <div className="relative z-10 max-w-8xl    lg:mx-10 py-6 md:py-16   px-4  ">
        
        {/* Headings */}
        <div className="pb-20 text-center items-center justify-center flex flex-col md:text-left">
          <H2 className=" mb-2">
            Sed ut perspiciatis
          </H2>
          <h2 className="text-2xl md:text-4xl playfair italic text-[#F99526]">
            Unde Sedwo ut perspiciatis
          </h2>
        </div>

        {/* Navigation/Filter Buttons */}
        <div className="flex flex-col font-bricolage   sm:flex-row items-center justify-center md:justify-start gap-4">
          {renderButton('Case studies')}
          {renderButton('Blogs')}
          {renderButton('News/press Release')}
        </div>
      </div>
    </header>
  );
};

export default BlogHead;