 
import { useRef } from "react";
 

export default function GradientText() {
  const ref = useRef(null);

   
 
  return (
    <div ref={ref} className="relative h-[200vh] hidden sm:flex bg-[#ACCAEF]">
      {/* Add keyframe animation */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animated-gradient-text {
          background: linear-gradient(-20deg,#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa);
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* STICKY SECTION */}
      <div className="sticky top-0 h-screen flex items-center justify-center  ">
        
        
   
      
          <h2 className="animated-gradient-text max-w-7xl text-center    mx-10 text-5xl  pl-20 leading-snug font-bold font-bricolage">
            Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor , consectetur
          adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum dolor ,
          consectetur adipis Lorem ipsum dolor , consectetur adipis Lorem ipsum
          dolor , consectetur adipis
          </h2>
         
      </div>
    </div>
  );
}