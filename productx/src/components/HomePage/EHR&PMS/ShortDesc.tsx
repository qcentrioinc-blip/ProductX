const ShortDesc = () => {
  return (
    <div className="bg-[#EFF8F4] py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-8 leading-tight">
          <span className="text-[#3D7A5E]">Sed ut perspiciatis</span>{' '}
          <span className="text-[#C4A853]">Unde</span>{' '}
          <span className="text-[#B8985F]">Seduo ut perspiciatis</span>
        </h1>

        {/* Description Paragraph 1 */}
        <p className="text-gray-800 text-md md:text-lg leading-relaxed mb-6 max-w-6xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          laborum. occaecat cupidatat non.
        </p>

        {/* Description Paragraph 2 */}
        <p className="text-gray-800 text-md md:text-lg leading-relaxed mb-12 max-w-6xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          laborum. occaecat cupidatat non.
        </p>

        {/* Contact Us Button */}
        <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-gray-800 transition-all text-base">
          CONTACT US
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShortDesc;
