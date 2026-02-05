import { H2, P } from "../../../styles/Typography";

const ImageShowcaseSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1580281657521-6b63bce89d8b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600",
  ];

  // We double the images to create a seamless infinite loop
  const scrollImages = [...images, ...images];

  return (
    <section className="bg-[#008280] py-20 px-4">
      <div className="max-w-8xl mx-auto lg:mx-16">
        <div className="relative bg-white rounded-[32px] py-16 overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 px-6 sm:px-10">
            <H2 className="text-[#008280] mb-4">Sed ut perspiciatis</H2>
            <P className="text-[#141414] leading-relaxed mb-40">
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, su
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </P>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative w-full overflow-hidden">
            {/* The "Track" container:
                - flex: layout images side by side
                - animate-marquee: the custom animation defined below
            */}
            <div className="flex w-max animate-marquee  hover:pause-animation transition-all">
              {scrollImages.map((src, index) => (
                <div 
                  key={index} 
                  className="w-64 h-64 sm:w-80 sm:h-80 mx-3 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0"
                >
                  <img
                    src={src}
                    alt={`Showcase ${index}`}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CSS for Performance & Animation */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
              will-change: transform;
            }
            .hover\\:pause-animation:hover {
              animation-play-state: paused;
            }
          `}} />
          
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;