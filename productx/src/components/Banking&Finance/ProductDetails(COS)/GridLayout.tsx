import { type ImgHTMLAttributes } from 'react';
import { H2, P } from "../../../styles/Typography";

export default function GridLayout() {
  const img1Url = "/ProductDetails(COS)/img7.jpg";
  const img2Url = "/ProductDetails(COS)/img8.jpg";

  const handleImageError: ImgHTMLAttributes<HTMLImageElement>['onError'] = (e) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://placehold.co/450x300/FEE2E2/B91C1C?text=Image+Error";
  };

  return (
    <div className="w-full min-h-screen px-3 sm:px-6 md:px-10 py-8 sm:py-12 bg-gray-50 flex flex-col items-center ">

      {/* Heading Section */} 
      <div className="text-center mx-auto max-w-[1280px] w-full px-2 sm:px-4">
        <div className="mx-auto max-w-3xl mb-8 sm:mb-10">
          <H2 className="mb-3 sm:mb-4">Lorem ipsum dolor, consect adipis ipsum</H2>
          <P className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor.
          </P>
        </div>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6 mx-auto md:max-w-[960px] lg:max-w-[1280px] w-full items-stretch">

        {/* Left Column */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
          
          {/* Card 1 */}
          <div className="bg-red-200 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col w-full h-auto md:h-[480px] overflow-hidden">
            <H2 className="mb-2 text-xl sm:text-2xl font-semibold">Lorem ipsum</H2>
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
          <div className="bg-gray-300 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col w-full h-auto md:h-[320px]">
            <H2 className="text-xl sm:text-2xl font-semibold mb-2">Lorem ipsum</H2>
            <P className="text-gray-800 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </P>
            <P className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et.
            </P>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">

          {/* Card 2 */}
          <div className="bg-gray-300 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col w-full h-auto md:h-[320px]">
            <H2 className="mb-2 text-xl sm:text-2xl font-semibold">Lorem ipsum</H2>
            <P className="text-gray-800 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </P>
            <P className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et.
            </P>
          </div>
          
          {/* Card 4 */}
          <div className="bg-red-200 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col w-full h-auto md:h-[480px] overflow-hidden">
            <H2 className="mb-2 text-xl sm:text-2xl font-semibold">Lorem ipsum</H2>
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
