import { Check } from 'lucide-react';

const ArrowBuilding = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 max-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Left Column - Image */}
      <div className="flex-1 w-full lg:w-auto mb-6 lg:mb-0 flex justify-center lg:justify-start">
        <img 
          src="/Products/Products2/ArrowBuilding.png" 
          alt="Architectural building with an upward arrow" 
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full h-auto object-contain" 
        />
      </div>

      {/* Right Column - Content */}
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Consecte adipiscing<br />
          werdasec ku
        </h1>
        
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt
        </p>
        
        <div className="space-y-3 sm:space-y-4">
          {/* Checklist Item 1 */}
          <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
              <Check size={12} className="text-white sm:w-3.5 sm:h-3.5" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu
            </p>
          </div>
          
          {/* Checklist Item 2 */}
          <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
              <Check size={12} className="text-white sm:w-3.5 sm:h-3.5" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu
            </p>
          </div>
          
          {/* Checklist Item 3 */}
          <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
              <Check size={12} className="text-white sm:w-3.5 sm:h-3.5" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowBuilding;
