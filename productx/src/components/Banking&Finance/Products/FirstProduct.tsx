import { ArrowUpRight } from 'lucide-react';

const FirstProduct = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 mt-10">
      {/* Background geometric pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 border border-gray-700/30 rotate-12 rounded-lg"></div>
        <div className="absolute top-40 right-20 w-64 h-64 border border-gray-600/20 -rotate-12 rounded-lg"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 border border-gray-700/30 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 right-40 w-48 h-48 border border-gray-600/20 -rotate-45 rounded-lg"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 border border-gray-700/20 rotate-6 rounded-lg"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Testimonial avatars */}
        <div className="mb-16 flex items-center gap-3">
          <div className="flex -space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-red-500 border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white"></div>
          </div>
          <span className="text-gray-300 text-sm ml-4">Trusted already by 12k+</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 leading-tight">
          Smarter Banking. Simplified.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-center text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Bankfair streamlines core banking and loan management—making operations faster, 
          efficient, and hassle-free.
        </p>

        {/* CTA Button */}
        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-3 mb-16">
          BOOK A FREE DEMO
          <ArrowUpRight className="w-5 h-5" />
        </button>

        {/* Dashboard Preview */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="relative">
            <img 
              src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png?width=2400&height=1350" 
              alt="Banking Dashboard Interface"
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700/50"
            />
            {/* Subtle glow effect around the dashboard */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 -z-10 blur-xl scale-105"></div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-8 w-2 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 right-8 w-2 h-20 bg-gradient-to-t from-purple-500 to-transparent rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-16 w-1 h-12 bg-gradient-to-b from-green-400 to-transparent rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-16 w-1 h-14 bg-gradient-to-t from-pink-400 to-transparent rounded-full opacity-40"></div>
    </div>
  );
};

export default FirstProduct;