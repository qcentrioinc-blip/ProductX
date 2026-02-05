import React from 'react';
import { H2, H3, P } from '../../../styles/Typography';

// Define the structure for a single feature item
interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

// Mock data for the features
const MOCK_FEATURES: FeatureItem[] = [
  { 
    id: 1, 
    title: 'Clock In & Access', 
    description: 'Log in once as an Admin to immediately see your clinic’s live status, appointments, and pending tasks on the main dashboard.' 
  },
  { 
    id: 2, 
    title: ' Filter & Manage', 
    description: 'Use filters like date, provider, and appointment status to quickly find and manage any patient visit or schedule detail.' 
  },
  { 
    id: 3, 
    title: 'Track & Assign', 
    description: 'Monitor patient flow in real-time and assign tasks or update room statuses directly from the centralized to-do list.' 
  },
];

// --- Sub-Component for each Feature Point ---

const FeaturePointProps: React.FC<FeatureItem> = ({ title, description }) => (
  // Changed to a vertical flex container (flex-col) to stack elements
  <div className="flex flex-col py-4 last:border-b-0">
    
    {/* Circle Placeholder - Now at the top */}
    <div className="mb-2">
      <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-inner flex items-center justify-center">
        {/* Optional: Add an Icon or number here */}
      </div>
    </div>

    {/* Text Content Section - Stacked Layout (below the icon) */}
    <div className="flex flex-col"> 
      <H3 className=" text-[#008280] mt-4 mb-2 leading-tight">
        {title}
      </H3>
      <P className="  leading-snug mt-1 xl:max-w-xl" >
        {description}
      </P>
    </div>
  </div>
);

// --- Main Application Component ---

const FeaturePoint: React.FC = () => {
  // Placeholder image URL

  return (
    <div className="h-auto  bg-[#F9F9F9] py-10">
      
      {/* Content Wrapper */}
      <div className="max-w-8xl mx-20">
        
        {/* Title Section */}
        <div className="mb-10 lg:mb-16 ">
          <H2 className=" text-[#008280] leading-snug">
          Gain Instant Operational Insight
          </H2>
           
        </div>
        
        {/* Main Content Layout:
          - Mobile (default): Image stacks above features (flex-col).
          - Tablet (sm) & Desktop (lg): Switches to side-by-side (sm:flex-row) and ensures heights match (sm:items-stretch).
        */}
<div className="flex flex-col xl:flex-row xl:space-x-16 xl:items-stretch items-start">
          
          {/* LEFT SECTION: Image Container */}
<div className="xl:w-1/2 w-full mb-10 xl:mb-0">
            <img 
              src="/EHR-PMS/Careers/img6.png"
              alt="A smiling woman working at a computer station"
              // Fallback image source in case the placeholder fails
             
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300"
              style={{ aspectRatio: '1 / 1' }} 
            />
          </div>
          
          {/* RIGHT SECTION: Features List - Now set to match height and have a tight design */}
<div className="xl:w-1/2 w-full flex flex-col justify-between">
            {MOCK_FEATURES.map(item => (
              <FeaturePointProps 
                key={item.id} 
                id={item.id}
                title={item.title} 
                description={item.description} 
              />
            ))}
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default FeaturePoint;
