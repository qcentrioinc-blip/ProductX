import React from 'react';
import { H2EHR, H3EHR, P } from '../../../styles/Typography';
import {
  FEATURE_POINT_CONTENT,
  type FeatureItem,
  type UserRole,
} from './FeaturePointContent';

interface FeaturePointProps {
  role: UserRole; // admin | insuranceCoordinator
}

// --- Feature Item Component ---
const FeatureItemCard: React.FC<FeatureItem> = ({ title, description, image }) => (
  <div className="flex flex-col py-4 last:border-b-0">
    <div className="flex flex-col">
      <div className="flex flex-col px-6 lg:px-6 items-start gap-3 mb-2">
        <img
          src={image}
          alt={title}
          className="w-8 h-8 object-contain"
        />
        <H3EHR className="text-[#008280] leading-tight">
          {title}
        </H3EHR>
      
      <P className="leading-snug mt-1 lg:max-w-xl">
        {description}
      </P>
      </div>
    </div>
  </div>
);

// --- Main Component ---
const FeaturePoint: React.FC<FeaturePointProps> = ({ role }) => {
  const content = FEATURE_POINT_CONTENT[role];

  return (
    <div className="h-auto bg-[#F9F9F9] dark:bg-[#141414] py-10">
      <div className="max-w-7xl px-6 lg:mx-auto lg:px-6">
        
        {/* Title */}
        <div className="mb-10 lg:mb-16">
          <H2EHR className="text-[#008280] dark:text-white leading-snug">
            {content.pageTitle}
          </H2EHR>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-16 lg:items-stretch items-start">
          
          {/* Image */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <img
              src={content.heroImage}
              alt="Feature visual"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>

          {/* Feature List */}
          <div className="lg:w-1/2 w-full flex flex-col justify-between">
            {content.features.map(item => (
              <FeatureItemCard key={item.id} {...item} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturePoint;