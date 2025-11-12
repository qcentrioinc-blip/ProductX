import { H2, H3, P } from "../../../styles/Typography";

const OnePoint = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-purple-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Title */}
          <div>
            <H2 className="text-white text-6xl font-bold leading-tight">
              Duis aute iru dolor
            </H2>
          </div>

          {/* Right Side - Timeline with Circle Markers */}
          <div className="relative">
            
            {/* First Section */}
            <div className="relative pb-32">
              {/* Circle Marker */}
              <div 
                className="w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center absolute left-0 top-0"
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Vertical Dotted Line */}
              <div 
                className="absolute left-6 top-12 bottom-0 w-0.5"
                style={{
                  borderLeft: '2px dotted rgba(255, 255, 255, 0.3)',
                  transform: 'translateX(-1px)'
                }}
              />

              {/* Content - Right of Circle */}
              <div className="ml-20">
                <H3 className="text-white text-2xl font-bold mb-4">
                  Duis aute iru dolor
                </H3>
                <P className="text-gray-300 text-base leading-relaxed mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. occaecat cupidatat non.
                </P>
                
                {/* Button */}
                <button 
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  BOOK A FREE DEMO
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Second Section */}
            <div className="relative">
              {/* Circle Marker */}
              <div 
                className="w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center absolute left-0 top-0"
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Horizontal Line Below */}
              <div 
                className="absolute left-0 top-12 w-full h-px"
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)'
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePoint;
