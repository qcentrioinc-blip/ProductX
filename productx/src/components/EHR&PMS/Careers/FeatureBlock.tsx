import React from 'react';
import { H1, H3, P } from '../../../styles/Typography';
import { ContactUs } from '../../../styles/Button';

// --- Utility Components ---

// A reusable component for the feature blocks on the right side.
interface FeatureBlockProps {
  title: string;
  content: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, content }) => (
  <div className="flex flex-col items-start w-full">
    {/* Orange Plus Icon */}
    <span className="text-3xl font-bold text-orange-500 mb-4">+</span>
    
    {/* Title */}
    <H3 className=" mb-3">
      {title}
    </H3>
    
    {/* Content */}
    <P className="text-gray-600 text-base leading-relaxed">
      {content}
    </P>
  </div>
);

// --- Main Application Component ---

const FeatureBlockSec: React.FC = () => {
  return (
    <div className="h-auto bg-white p-6 sm:p-10 lg:p-20">
      
      {/* Main Responsive Container:
        - On mobile (default), it's a column layout (stacking).
        - On large screens (lg), it switches to a row layout.
        - Uses gap for spacing between the left and right sections.
      */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
        
        {/* LEFT SECTION: Title and Button */}
        <div className="lg:w-3/5 flex flex-col items-start">
          
          {/* Gradient Title: 
            - Use bg-clip-text and text-transparent for the gradient effect.
            - Font size adjusts for responsiveness (text-3xl up to text-6xl).
          */}
          <H1 className=" mb-10 ">
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500"
            >
              Sed ut perspiciatis Unde
            </span>
          </H1>
          
          {/* Contact Button */}
          <ContactUs>CONTACT US</ContactUs>
        </div>
        
        {/* RIGHT SECTION: Feature Blocks Container */}
        <div className="lg:w-3/5">
          {/* Features Layout:
            - On mobile (default), blocks stack (flex-col).
            - On small screens (sm), blocks go side-by-side (sm:flex-row).
            - Added margin-top (mt-6) for visual separation on mobile before sm breakpoint.
          */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-6 lg:mt-0">
            
            <FeatureBlock 
              title="Duis aute irure"
              content="reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            
            <FeatureBlock 
              title="Duis aute irure"
              content="reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FeatureBlockSec;
