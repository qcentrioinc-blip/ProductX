// import { H1, P } from "../../styles/Typography";
// import { ContactUsDark } from "../../styles/Button";
// import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // <div className="relative h-[600px] sm:h-screen min-h-[500px] sm:max-h-[800px] w-full overflow-hidden">
    <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-screen  bg-[#efefef] min-h-[500px] max-h-[900px] overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Video/LandingBnf.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Content Container */}
      {/* <div className="relative h-full flex items-center justify-start md:mx-10 px-4 sm:px-6 md:px-0 lg:px-8"> */}
      {/* <div className="w-full max-w-4xl text-left"> */}

      {/* <H1 className="font-bold lg:mt-24 text-white mb-4 md:mb-6 leading-tight animate-[slideInLeft_0.8s_ease-out]">
            Shaping the Future
            <br />
            Across B and F
          </H1> */}

      {/* <P className="text-white/90 mb-6 pr-6 sm:pr-0 sm:mb-8 sm:max-w-xl animate-[slideInLeft_1s_ease-out_0.2s_both]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </P> */}

      {/* <Link to="/industries/banking-and-finance/contactform">
            <ContactUsDark className="absolute botto-10">EXPLORE SOLUTIONS</ContactUsDark>
          </Link> */}
      {/* </div> */}
    </div>

    /* Keyframe animations */
    /* <style>{`
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes scaleIn {
        from {
          transform: scale(1.1);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
    `}</style> */
    // </div>
  );
};

export default HeroSection;
