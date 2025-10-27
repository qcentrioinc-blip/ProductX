import { H1, P } from "../../../styles/Typography";
import Image1 from "/ProductDetailsThree/image67.png";
import Slider from "react-slick";
// Ensure these CSS files are accessible and loaded in your entry file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

// Type for the image objects
interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { id: 1, src: Image1, alt: "Product detail screenshot 1" },
  { id: 2, src: Image1, alt: "Product detail screenshot 2" },
  { id: 3, src: Image1, alt: "Product detail screenshot 3" },
];


const HeroSection = () => {
    // react-slick settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // 👇 These two settings enable the auto-scroll feature
        autoplay: true,
        autoplaySpeed: 3000, 
    };

    return (
        <section className="relative w-full bg-white pt-32 pb-10 px-4 text-center overflow-x-hidden">
            {/* Text Content */}
            <div className="max-w-3xl mx-auto">
                <H1 className="text-gray-900">
                    Lorem ipsum dolor , <br /> consectetur adipiscing
                </H1>
                <P className="text-gray-600 mt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit.
                </P>
                <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
                    BOOK A DEMO
                </button>
            </div>

            {/* Images Container */}
            <div className="relative max-w-8xl mx-auto mt-6 overflow-hidden">

                {/* --- MOBILE CAROUSEL (Show only on screens smaller than 'sm') --- */}
                <div 
                    className="sm:hidden mx-auto w-full max-w-sm"
                    // Inline style fix to ensure dots have room to render without being cut off
                    style={{ paddingBottom: '30px' }} 
                >
                    <Slider {...settings}>
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="p-2"
                            >
                                {/* Aspect Ratio Container (4:3 ratio: pt-[75%]) to maintain aspect ratio */}
                                <div className="relative w-full pt-[75%]">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* --- DESKTOP/TABLET STATIC IMAGES (Original Code - Hidden on small screens) --- */}
                <div className="hidden sm:flex justify-center items-center">
                    
                    {/* Left Image */}
                    <img
                        src={Image1}
                        alt="Left"
                        className="w-50 h-50 sm:w-62 sm:h-62 md:w-80 md:h-72 lg:w-lg lg:h-80 rounded-lg shadow-md absolute left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"
                    />

                    {/* Center Image */}
                    <img
                        src={Image1}
                        alt="Center"
                        className="w-65 h-65 sm:w-77 sm:h-77 md:w-100 md:h-84 lg:w-2xl lg:h-96 rounded-lg shadow-2xl relative z-10"
                    />

                    {/* Right Image */}
                    <img
                        src={Image1}
                        alt="Right"
                        className="w-50 h-50 sm:w-62 sm:h-62 md:w-80 md:h-72 lg:w-lg lg:h-80 rounded-lg shadow-md absolute right-1/4 translate-x-1/2 top-1/2 -translate-y-1/2 z-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;