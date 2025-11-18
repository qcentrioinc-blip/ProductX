import { type ImgHTMLAttributes } from 'react';
import { H2, H3, P } from "../../../styles/Typography";

export default function GridLayout() {
  const img1Url = "/ProductDetails(COS)/img7.png";
  const img2Url = "/ProductDetails(COS)/img8.png";

  const handleImageError: ImgHTMLAttributes<HTMLImageElement>['onError'] = (e) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/450x300/FEE2E2/B91C1C?text=Image+Error";
  };

  return (
    <div className="w-full min-h-screen p-10 bg-gray-50 flex flex-col">

      {/* Heading Section */} 
      <div className="text-center mx-auto max-w-[1280px] w-full px-2 sm:px-4">
        <div className="mx-auto max-w-4xl mb-8 sm:mb-10">
          <H2 className="mb-3 sm:mb-4 text-[#A80040]">Lorem ipsum dolor, consect adipis ipsum</H2>
          <P className=" text-center text-[#2A2A2A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor.
          </P>
        </div>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 mx-auto md:max-w-[960px] lg:max-w-[1230px] w-full items-stretch">

        {/* Left Column */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
          
          {/* Card 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col w-full h-auto md:h-[480px] overflow-hidden">
            <H3 className="mb-2 font-semibold">Lorem ipsum</H3>
            <P className="mb-4 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod.
            </P>
            <div className="mt-auto">
              <img
                src={img1Url}
                alt="Illustrative Pink"
                className="w-full h-full rounded-md shadow-inner object-contain"
                onError={handleImageError}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F5DDA9] p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col w-full h-auto md:h-[320px]">
            <H3 className="text-xl sm:text-2xl font-semibold mb-5">Lorem ipsum</H3>
            <P className="text-gray-800 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </P>
            <P className="text-gray-800 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </P>
            <P className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </P>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">

          {/* Card 2 */}
          <div className="bg-[#F5DDA9] p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col w-full h-auto md:h-[320px]">
            <H3 className="text-xl sm:text-2xl font-semibold mb-5">Lorem ipsum</H3>
            <P className="text-gray-800 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </P>
            <P className="text-gray-800 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </P>
            <P className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </P>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#B5B5B5] flex flex-col w-full h-auto md:h-[480px] overflow-hidden">
            <H3 className="mb-2 text-xl sm:text-2xl font-semibold">Lorem ipsum</H3>
            <P className="mb-4 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod.
            </P>
            <div className="mt-auto">
              <img
                src={img2Url}
                alt="Illustrative Pink 2"
                className="w-full h-full rounded-md shadow-inner object-contain"
                onError={handleImageError}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
