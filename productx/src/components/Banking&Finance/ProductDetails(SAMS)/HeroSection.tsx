import React from 'react';
import { ContactUs } from '../../../styles/Button';
import { H1, P } from '../../../styles/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
// Assuming all images use the same src for this example
const carouselImages = [
  { id: 1, src: "/SAMS/img1.png", alt: "Dashboard 1" },
  { id: 2, src: "/SAMS/img1.png", alt: "Dashboard 2" },
  { id: 3, src: "/SAMS/img1.png", alt: "Dashboard 3" },
];
 
const HeroSection: React.FC = () => {
  // react-slick settings for the mobile/mid-range carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
 
  return (
    <section className="relative w-full flex flex-col items-center bg-transparent overflow-hidden">
      {/* Entire Hero Section Container */}
      <div className="relative w-full flex flex-col">
 
        {/* Pink Background - Sizes remain unchanged */}
<div
  className="relative w-full flex flex-col items-start md:items-start pb-[25vh] md:pb-[30vh] lg:pb-[35vh] xl:pb-[40vh]"
  style={{
    background: `
      linear-gradient(to bottom, #d7e6ff, #7aa8ff, #1f4fff),
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.8) 0px,
        rgba(255,255,255,0.8) 0.5px,
        transparent 1px,
        transparent 145px
      )
    `,
    backgroundBlendMode: "overlay"
  }}
>
 
          {/* Accent circles (unchanged) */}
          <div className="absolute top-0 right-0 w-[320px] h-[320px] rounded-full border-[6px] border-[#7087e933] opacity-50 translate-x-1/4 -translate-y-1/4 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] md:border-[10px] xl:border-[12px] md:opacity-70"></div>
          <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full border-[5px] border-[#FED60033] opacity-50 translate-x-1/4 -translate-y-1/4 sm:w-[350px] sm:h-[350px] md:w-[550px] md:h-[550px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] md:border-[8px] xl:border-[8px] md:opacity-70"></div>
 
          {/* Main Content (unchanged) */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-4 sm:mx-6 lg:mx-10 xl:mx-20 mt-8 md:mt-12 lg:mt-20 xl:mt-24 py-8 sm:py-12 lg:py-16 flex flex-col items-center md:items-start gap-4 sm:gap-6 lg:gap-8 text-center md:text-left">
            <H1 className="text-gray-900 ">
              Lorem ipsum dolor , consectetur adipis
            </H1>
            <P className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt mollit anim id est laborum.
            </P>
            <ContactUs className="mt-3 sm:mt-6 lg:mt-8">CONTACT US</ContactUs>
          </div>
 
          {/* ------------------- Images Section (Carousel vs. Desktop Scroll) ------------------- */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-full px-4 sm:px-6 lg:px-12 xl:px-16">
 
            {/* Carousel (visible up to 'xl' breakpoint) */}
            <div className="xl:hidden mx-auto w-full max-w-[800px] sm:max-w-full"
                 style={{ paddingBottom: '30px' }}
            >
              <Slider {...carouselSettings}>
                {carouselImages.map((image) => (
                  <div key={image.id} className="p-2 sm:p-4 md:p-6">
                    {/* Targeting 678px-767px:
                      We set the base (mobile) ratio to be taller (3:2 aspect-video = 66.66% height).
                      We then use 'sm:pt-[XX%]' to decrease the height (increase the width of the ratio)
                      for screens >= 640px, effectively making the image smaller in height
                      in the desired 678px-767px range.
                    */}
                    <div className="relative w-full pt-[66.66%] sm:pt-[56.25%] md:pt-[56.25%] lg:pt-[56.25%]"> {/* pt-[56.25%] is 16:9, making it shorter than 3:2 */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
  
            <div className="
              hidden xl:flex
              gap-6 lg:gap-12 xl:gap-16
              overflow-x-auto xl:overflow-x-visible
              justify-start xl:justify-center
              snap-x snap-mandatory scroll-smooth
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
            ">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src="/SAMS/img1.png"
                  alt={`Dashboard ${i}`}
                  className="flex-shrink-0 rounded-lg shadow-md
                    w-[450px] h-[250px]
                    sm:w-[450px] sm:h-[320px]
                    md:w-[550px] md:h-[390px]
                    lg:w-[550px] lg:h-[390px]
                    xl:w-[400px] xl:h-[480px]
                    object-cover"
                />
              ))}
            </div>
          </div>
        </div>
 
        {/* White Background Section (unchanged) */}
        <div className="w-full bg-[#FED600] h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh]" />
      </div>
    </section>
  );
};
 
export default HeroSection;