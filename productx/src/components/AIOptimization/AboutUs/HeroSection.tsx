import { ContactUsAI } from "../../../styles/Button";
import { H1, P } from "../../../styles/Typography";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[65vh] lg:h-[70vh] xl:h-screen overflow-hidden">

      {/* Keyframe animations */}
      <style>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes image-glow {
          0%, 100% {
            filter: drop-shadow(0 0 30px rgba(186, 121, 255, 0.5))
                    drop-shadow(0 0 60px rgba(186, 121, 255, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 50px rgba(186, 121, 255, 0.8))
                    drop-shadow(0 0 80px rgba(25, 169, 209, 0.5));
          }
        }
        
        .slide-in {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .fade-in-delay-1 {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.3s forwards;
        }
        
        .fade-in-delay-2 {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.6s forwards;
        }
        
        .glow-blob {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        
        .image-glow {
          animation: image-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010207] via-[#010416] to-[#1a044d]"></div>

      {/* Soft glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px]  bg-[#ba79ff] opacity-30 blur-[180px] top-[-150px] left-[-100px]"></div>
        <div className="absolute w-[400px]    bg-[#19a9d1] opacity-30 blur-[160px] bottom-[-100px] right-[0]"></div>
        <div className="absolute w-[300px]  bg-[#0057ff] opacity-20 blur-[200px] top-[200px] left-[40%]"></div>
      </div>

      <div className="relative max-w-8xl lg:mx-10 px-4 py-24 flex flex-col xl:flex-row items-start   xl:justify-start gap-12">

        {/* LEFT TEXT SECTION */}
        <div className="xl:mt-44  lg:mt-28 px-2  xl:ml-4 text-white">
          <H1 className="font-bold leading-tight slide-in">
            <span className="text-[#00ff88]">Lorem ipsum dolor </span>  <br /> 
            sit amet, consectetur
          </H1>

          <P className="text-gray-300 mt-6 max-w-lg fade-in-delay-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing  Lorem ipsum dolor sit amet, 
          </P>

       <ContactUsAI className="my-6">Get Started</ContactUsAI>
        </div>

        {/* RIGHT IMAGE SECTION with glowing background */}
        <div className="  -right-32 xl:mt-44  -bottom-44 md:-bottom-52 lg:-bottom-96 xl:bottom-[-110px] absolute flex justify-center items-end lg:justify-end">
          {/* Glowing background blob behind image */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="glow-blob w-[300px] h-[300px]  lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-[#ba79ff] via-[#19a9d1] to-[#0057ff] opacity-30 blur-[120px] rounded-full"></div>
          </div>
          
          <img
            src="/AIAbout/AIHero.png"
            alt="Futuristic Person"
            className="  lg:max-w-2xl  w-[350px] md:w-[450px] lg:w-full object-contain image-glow relative z-10"
          />
        </div>

      </div>
    </section>
  );
}