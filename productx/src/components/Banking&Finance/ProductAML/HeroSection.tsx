import { ContactUs } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";
import Image1 from "/AML/image64.png";
import { useState, useRef, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { ScrollContext } from "../../../context/ScrollContext";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Lorem ipsum dolor, consectetur adipis";

  const images = [
    "/ProductDetailsThree/image67.png",
    "/ProductDetailsThree/image67.png",
    "/ProductDetailsThree/image67.png",
  ];

  const scrollableContainerRefe = useContext(ScrollContext);

  useEffect(() => {
    if (scrollableContainerRefe) {
      (scrollableContainerRefe as any).scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [scrollableContainerRefe]);
  const [isTypingDone, setIsTypingDone] = useState(false);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const controlsLeft = useAnimation();
  const controlsCenter = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const floatAnimation = async (controls: ReturnType<typeof useAnimation>, delay = 0) => {
      await controls.start({
        y: [0, -8, 0],
        transition: { duration: 4, repeat: Infinity, delay, ease: "easeInOut" },
      });
    };
    floatAnimation(controlsLeft, 0);
    floatAnimation(controlsCenter, 1);
    floatAnimation(controlsRight, 0.5);
  }, [controlsLeft, controlsCenter, controlsRight]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;
    const slideWidth = container.offsetWidth * 0.8;
    const newSlide = Math.round(container.scrollLeft / slideWidth);
    setCurrentSlide(newSlide);
  };

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const slideWidth = container.offsetWidth * 0.8;
      container.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-linear-to-b from-[#C1D7F3]  to-[#ffd900d0] mb-12">

      <div className=" px-8 sm:px-12 md:px-16 pt-12 md:pt-36 lg:pt-44 lg:px-16 xl:px-20 flex flex-col xl:flex-row justify-between    items-center gap-8">
        <motion.div
          className="w-full text-(--primary-color) text-center lg:text-center xl:text-left xl:w-full"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <H1 className="font-semibold tracking-tight min-h-[5rem] relative lg:text-6xl xl:text-7xl">
            {typedText}
            {!isTypingDone && (
              <span className="animate-pulse ml-1">|</span>
            )}
          </H1>
        </motion.div>

        {/* Right Text Block */}
        <motion.div
          className="w-full bg-(--secondary-color) rounded-lg md:w-[500px] lg:w-[600px] xl:w-3/5 flex flex-col lg:pt-4 text-center lg:text-center xl:text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        >
          <P className="px-4 lg:pt-2 pt-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia
          </P>
          <motion.div
            className="flex justify-center my-4 px-4 lg:justify-center xl:justify-start"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <ContactUs>Contact Us</ContactUs>
          </motion.div>
        </motion.div>
      </div>

      {/* --- MOBILE SLIDER --- */}
      <div className="lg:hidden mt-6 px-4 pb-10">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="shrink-0 w-[80vw] snap-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* --- DESKTOP IMAGE CLUSTER --- */}
      <div className="relative   hidden mx-auto mt-20 lg:flex justify-center md:px-10 lg:pb-12 pb-4 items-center">
        <motion.img
          src={Image1}
          alt="Left"
          className="w-40 h-40 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-md lg:h-80 xl:w-lg xl:h-80 rounded-lg absolute left-1/2 -translate-x-[105%] xl:-translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
          animate={controlsLeft}
          whileHover={{ rotate: -3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        />

        <motion.img
          src={Image1}
          alt="Center"
          className="w-52 h-52 sm:w-52 sm:h-52 md:w-80 md:h-64 lg:w-xl lg:h-96 xl:w-2xl xl:h-96 rounded-lg relative z-10"
          animate={controlsCenter}
          whileHover={{ rotate: 0, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 80 }}
        />

        <motion.img
          src={Image1}
          alt="Right"
          className="w-40 h-40 sm:w-40 sm:h-40 md:w-60 md:h-52 lg:w-md lg:h-80 xl:w-lg xl:h-80 rounded-lg absolute right-1/2 translate-x-[105%] xl:translate-x-[120%] top-1/2 -translate-y-1/2 z-0"
          animate={controlsRight}
          whileHover={{ rotate: 3, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>
    </div>

  );
};

export default HeroSection;