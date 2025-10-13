import { type ImgHTMLAttributes } from 'react';
import { H1, P } from '../../../styles/Typography';
import { ContactUs } from '../../../styles/Button';

const handleImageError: ImgHTMLAttributes<HTMLImageElement>['onError'] = (e) => {
  const target = e.target as HTMLImageElement;
  target.onerror = null;
  target.src = "https://placehold.co/300x400/CCCCCC/333333?text=Placeholder";
};

export default function HeroSection() {
  const images = [
    "/ProductDetails(COS)/img1.png", // Large center-left image
    "/ProductDetails(COS)/img2.png", // Top-right small image
    "/ProductDetails(COS)/img3.png"  // Bottom-right small image
  ];

  return (
    <section className="w-full min-h-[800px] flex items-center justify-center bg-white relative pt-[100px] pb-12">
      <div className="w-full flex flex-col md:flex-row items-center px-2 sm:px-8 py-10 bg-white max-w-[1280px] mx-auto gap-10">
        
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-8">
          <H1 className="mb-6">
            Lorem ipsum dolor, consectetur adipis
          </H1>
          <P className="mb-8 max-w-md text-center md:text-left mx-auto md:mx-0">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </P>
          <div className="w-fit mx-auto md:mx-0">
            <ContactUs>CONTACT US</ContactUs>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2">
          
          {/* Mobile layout: hidden above md */}
          <div className="flex flex-col md:hidden gap-4">
            {/* Row 1: img1 and img2 side-by-side */}
            <div className="flex gap-4 justify-center ml-[30px] mr-[30px]">
              <img
                src={images[0]}
                alt="Image 1"
                onError={handleImageError}
                className="w-1/2 h-auto object-contain shadow-xl rounded-lg"
              />
              <img
                src={images[1]}
                alt="Image 2"
                onError={handleImageError}
                className="w-1/2 h-auto object-contain shadow-xl rounded-lg"
              />
            </div>

            {/* Row 2: img3 centered */}
            <div className="flex justify-center items-center">
              <img
                src={images[2]}
                alt="Image 3"
                onError={handleImageError}
                className="w-2/3 h-auto object-contain shadow-xl rounded-lg"
              />
            </div>
          </div>

          {/* Desktop/tablet layout: hidden below md */}
          <div className="hidden md:grid grid-cols-[auto_auto] items-center justify-center gap-6">
            {/* Large main image spanning two rows */}
            <div className="row-span-2">
              <img
                src={images[0]}
                alt="Main image"
                onError={handleImageError}
                className="max-w-[340px] max-h-[480px] w-full h-auto object-contain shadow-xl rounded-lg"
              />
            </div>
            
            {/* Top small image */}
            <img
              src={images[1]}
              alt="Top image"
              onError={handleImageError}
              className="max-w-[220px] max-h-[300px] w-full h-auto object-contain shadow-xl rounded-lg"
            />

            {/* Bottom small image */}
            <img
              src={images[2]}
              alt="Bottom image"
              onError={handleImageError}
              className="max-w-[220px] max-h-[300px] w-full h-auto object-contain shadow-xl rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
