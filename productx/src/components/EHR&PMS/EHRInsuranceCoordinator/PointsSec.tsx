
const PointsSec = () => {

  // Data for orbiting labels around the central image
  const orbitPoints = [
    { label: "Duis aute", pos: "top-[15%] left-[5%] md:left-[15%]" },
    { label: "Duis aute", pos: "top-[5%] right-[15%] md:right-[25%]" },
    { label: "Duis aute", pos: "bottom-[40%] left-[-10%] md:left-[5%]" },
    { label: "Duis aute", pos: "bottom-[20%] right-[-5%] md:right-[10%]" },
  ];

  return (
    <div className="bg-[#fcfcfc] font-bricolage text-[#1a1a1a]">

      {/* 2. Orbiting Section */}
      <section className="relative mx-auto mt-20 flex min-h-[600px] max-w-6xl items-center justify-center overflow-hidden pt-24">
        
        {/* Decorative Concentric Rings */}
        <div className="absolute h-[350px] w-[350px] rounded-full border border-gray-300 md:h-[450px] md:w-[450px]"></div>
        <div className="absolute h-[350px] w-[350px] rounded-full border border-gray-300 md:h-[550px] md:w-[550px]"></div>
        
        {/* Central Portrait Container */}
        <div className="relative z-10 h-[320px] w-[320px] md:h-[700px] md:w-[700px]">
          {/* Soft Glow behind person */}
          <div className="absolute inset-0 scale-50 rounded-full border border-teal-200/60 bg-teal-200/60 blur-[80px]"></div>
          <img 
            src="/EHR-PMS/InsuranceCoordinator/Img3.png" 
            alt="Central Professional"
            className="relative z-10 h-full w-full object-contain"
          />
        </div>

        {/* Orbiting Points (Responsive Positioning) */}
        <div className="absolute inset-0 z-20 mx-auto max-w-4xl">
          {orbitPoints.map((item, idx) => (
            <div 
              key={idx} 
              className={`absolute flex items-center gap-3 ${item.pos} transition-transform hover:scale-110`}
            >
              {/* Label - Switches order based on side of the image */}
              <span className="text-base font-semibold md:text-xl text-[#1a1a1a] drop-shadow-sm">
                {item.label}
              </span>
              <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#ebd978] shadow-[0_0_10px_rgba(235,217,120,0.6)]"></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PointsSec;