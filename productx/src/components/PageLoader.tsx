const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[99999999] flex flex-col items-center justify-center">
      <img 
        src="/logo.svg" 
        alt="Loading..." 
        className="w-50 h-50 animate-[bounce_1s_infinite]" 
      />
      
      <style>{`
         @keyframes bounce_1s {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;