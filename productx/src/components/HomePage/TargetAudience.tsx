import { useState, useEffect, useRef } from "react";

const TargetAudience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const industryRefs = useRef<Array<HTMLDivElement | null>>([]);

  const industries = [
    {
      name: "Banking",
      description:
        "Teamed up with SnapEdit to develop a cutting-edge editing workflow poised for scalable growth and market leadership.",
      percentage: "45%",
      image: "/Image1.jpg",
    },
    {
      name: "Technology",
      description:
        "Revolutionizing tech solutions with innovative approaches to digital transformation and cloud-based infrastructure.",
      percentage: "62%",
      image: "/Image2.jpg",
    },
    {
      name: "Finance",
      description:
        "Streamlining financial operations through automated processes and intelligent data analytics for better decision making.",
      percentage: "78%",
      image: "/Image3.jpg",
    },
    {
      name: "Retail",
      description:
        "Enhancing customer experience with omnichannel solutions and personalized shopping journeys across all touchpoints.",
      percentage: "55%",
      image: "/Image1.jpg",
    },
    {
      name: "Learning",
      description:
        "Transforming education through adaptive learning platforms and immersive digital learning experiences.",
      percentage: "69%",
      image: "/Image2.jpg",
    },
    {
      name: "Supply Chain",
      description:
        "Optimizing supply chain visibility and efficiency through real-time tracking and predictive analytics.",
      percentage: "72%",
      image: "/Image3.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let newIndex = 0;
      industryRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          newIndex = idx;
        }
      });
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      
          <div className="lg:col-span-1 mb-10 lg:mb-0">
            <div className="sticky top-10 pl-2 sm:pl-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                Built <br /> For
              </h1>
            </div>
          </div>

          {/* Middle Column - Industries */}
          <div className="lg:col-span-1 w-full max-w-md ">
            <div className="mb-10">
              <span className="inline-block px-4 py-2 bg-white text-black bg-opacity-10 rounded-full text-xs sm:text-sm mb-4">
                We Focus On
              </span>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Our products are built to empower organizations across
                industries, helping them streamline work
              </p>
            </div>

            <div
              id="industries-section"
              className="space-y-4"
              style={{ minHeight: "20vh" }}
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    industryRefs.current[index] = el;
                  }}
                  className="py-2 sm:py-2"
                >
                  <h2
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-500 ${
                      index === activeIndex
                        ? "text-white opacity-100"
                        : "text-white opacity-30"
                    }`}
                  >
                    {industry.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="lg:col-span-1 w-full max-w-lg mx-auto">
            <div className="sticky top-16">
              <div className="bg-gray-100 overflow-hidden mb-6 rounded-lg">
                <div className="aspect-[4/3] bg-white flex items-center justify-center">
                  <img
                    src={industries[activeIndex]?.image}
                    alt={industries[activeIndex]?.name}
                    className="h-full w-full object-cover transition-opacity duration-700"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  {industries[activeIndex]?.description}
                </p>

                <div className="text-4xl sm:text-4xl md:text-5xl font-bold text-white">
                  {industries[activeIndex]?.percentage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;
