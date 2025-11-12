import { useEffect } from 'react';
import { H2, H4, P } from '../../../styles/Typography';

const ThreeStep = () => {
  const steps = [
    {
      number: "1",
      title: "Duis aute irure dolor in reprehenderit",
      description: "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.",
      bgColor: "bg-black"
    },
    {
      number: "2",
      title: "Duis aute irure dolor in reprehenderit",
      description: "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.",
      bgColor: "bg-gray-900"
    },
    {
      number: "3",
      title: "Duis aute irure dolor in reprehenderit",
      description: "Duis qute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.",
      bgColor: "bg-black"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
     
      // Check each section to see if it's 30% visible
      steps.forEach((_, index) => {
        const sectionTop = index * windowHeight;
        const sectionVisibility = scrollPosition - sectionTop;
        const visibilityPercentage = (sectionVisibility / windowHeight) * 100;
       
        // Change animation when section is 30% visible
        if (visibilityPercentage >= 30 && visibilityPercentage < 70) {
          // You can add any additional logic here if needed
        }
      });
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="relative">
      {/* Header Section - Responsive */}
      <div className="w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <H2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-3">
              Sed ut perspiciatis
            </H2>
            <h3 
              className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold italic"
              style={{ 
                color: '#d97706',
                fontStyle: 'italic',
                fontFamily: 'Georgia, serif'
              }}
            >
              Unde Seduo ut perspiciatis
            </h3>
          </div>
        </div>
      </div>

      {/* Sticky Steps Section */}
      {steps.map((step, index) => (
        <div
          key={index}
          className={`min-h-screen sm:min-h-screen md:min-h-screen lg:h-screen ${step.bgColor} sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-6 py-12 sm:py-16 md:py-20 lg:py-0`}
          style={{ zIndex: index + 1 }}
        >
          <div className="max-w-7xl w-full">
            {/* Mobile/Tablet Layout - Stacked Vertical */}
            <div className="lg:hidden relative flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
              {/* Title */}
              <div className="w-full">
                <H4 className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center px-2">
                  {step.title}
                </H4>
              </div>

              {/* Number */}
              <div className="flex items-center justify-center">
                <div 
                  className="text-6xl sm:text-8xl md:text-9xl font-bold"
                  style={{
                    background: 'linear-gradient(180deg, #a855f7 0%, #d97706 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1'
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Description */}
              <div className="w-full">
                <P className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed text-center px-4 sm:px-6">
                  {step.description}
                </P>
              </div>
            </div>

            {/* Desktop Layout - Three Columns (Hidden on mobile/tablet) */}
            <div className="hidden lg:flex relative items-center justify-center">
              {/* Left Column - Title */}
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2" 
                style={{ width: '280px' }}
              >
                <H4 className="text-white text-lg font-medium leading-relaxed">
                  {step.title}
                </H4>
              </div>

              {/* Middle Column - Gradient Number */}
              <div className="flex items-center justify-center">
                <div 
                  className="text-9xl font-bold"
                  style={{
                    background: 'linear-gradient(180deg, #a855f7 0%, #d97706 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '200px',
                    lineHeight: '1'
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Right Column - Description */}
              <div 
                className="absolute right-0 top-1/2 transform -translate-y-1/2" 
                style={{ width: '420px' }}
              >
                <P className="text-gray-300 text-base leading-relaxed">
                  {step.description}
                </P>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeStep;
