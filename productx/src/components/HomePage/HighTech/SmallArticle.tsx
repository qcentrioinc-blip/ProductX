import { H2, H4, P } from "../../../styles/Typography";

const SmallArticle = () => {
  return (
    <div className="w-full bg-black min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <H2 className="text-white text-4xl font-bold mb-4">
            Sed ut perspiciatis
          </H2>
          <h3 
            className="text-4xl font-bold italic"
            style={{ 
              color: '#d97706',
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif'
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>
        </div>

        {/* Horizontal Dotted Line with Navigation Arrows */}
        <div className="relative mb-16">
          {/* Dotted Line */}
          <div 
            className="w-full"
            style={{
              borderTop: '2px dashed rgba(255, 255, 255, 0.3)',
              height: '1px'
            }}
          />
          
          {/* Navigation Arrows - Right Side */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-4">
            {/* Up Arrow Button */}
            <button 
              className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>

            {/* Down Arrow Button */}
            <button 
              className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
              aria-label="Next testimonial"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="mb-16">
          <P className="text-white text-2xl lg:text-3xl leading-relaxed font-normal max-w-4xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
          </P>
        </div>

        {/* Author Info Section */}
        <div className="flex flex-col gap-6">
          {/* Profile Image - Circle */}
          <div 
            className="w-20 h-20 rounded-full bg-gray-300"
          />

          {/* Name and Title */}
          <div className="mb-4">
            <H4 className="text-white text-xl font-medium mb-1">
              Abcdefgh, Qnest CEO, Newyork - US
            </H4>
          </div>

          {/* Company Logo */}
          <div 
            className="bg-gray-600 text-white px-6 py-3 rounded w-fit font-bold text-sm"
          >
            LOGO
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmallArticle;
