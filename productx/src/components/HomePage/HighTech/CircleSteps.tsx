// const CircleSteps = () => {
//   const steps = [
//     {
//       // Purple sphere - top right
//       text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
//       position: 'right',
//       bgGradient: 'linear-gradient(90deg, #B8A0D8 0%, #8B7AB8 20%, #7B52AB 45%, #5F3C8E 70%, #3D2456 85%, #000000 100%)',
//       sphereGradient: 'radial-gradient(circle at 30% 30%, #B366FF 0%, #8338EC 40%, #5F2BA8 70%, #3D1970 100%)'
//     },
//     {
//       // Orange sphere - left
//       text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
//       position: 'left',
//       bgGradient: 'linear-gradient(90deg, #000000 0%, #4A2B1A 15%, #8B5A2B 35%, #D4853D 60%, #E89D4D 100%)',
//       sphereGradient: 'radial-gradient(circle at 35% 35%, #FFB366 0%, #F99526 35%, #D47520 60%, #8B4513 85%, #3D1F0F 100%)'
//     },
//     {
//       // Dark sphere - right
//       text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
//       position: 'right',
//       bgGradient: 'linear-gradient(90deg, #D0D0D0 0%, #9B9B9B 25%, #6B6B6B 45%, #3A3A3A 70%, #1A1A1A 85%, #000000 100%)',
//       sphereGradient: 'radial-gradient(circle at 30% 30%, #4A4A4A 0%, #252525 35%, #111111 60%, #030008 85%, #000000 100%)'
//     },
//     {
//       // Gray/White sphere - left
//       text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
//       position: 'left',
//       bgGradient: 'linear-gradient(90deg, #000000 0%, #4B4B4B 15%, #7B7B7B 35%, #9B9B9B 55%, #BABABA 80%, #D0D0D0 100%)',
//       sphereGradient: 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #E8E8E8 25%, #D7D7D7 45%, #AFAFAF 70%, #7A7A7A 100%)'
//     }
//   ];

import { H2, P } from "../../../styles/Typography";

//   return (
//     <div className="w-full bg-black overflow-hidden">
//       {/* Header Section */}
//       <div className="text-center py-16 bg-black">
//         <h2 className="text-white text-5xl font-bold mb-4">
//           Sed ut perspiciatis
//         </h2>
//         <h3 
//           className="text-5xl font-bold italic"
//           style={{ 
//             color: '#d97706',
//             fontStyle: 'italic',
//             fontFamily: 'Georgia, serif'
//           }}
//         >
//           Unde Seduo ut perspiciatis
//         </h3>
//       </div>

//       {/* Steps Section with Horizontal Stripes */}
//       <div className="relative">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="relative flex items-center"
//             style={{
//               height: '164px',
//               background: step.bgGradient
//             }}
//           >
//             {/* Text Content - Centered */}
//             <div className="w-full flex justify-center items-center px-12">
//               <p 
//                 className="text-white font-semibold text-center max-w-2xl"
//                 style={{ 
//                   fontSize: '22px',
//                   lineHeight: '1.4',
//                   textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
//                 }}
//               >
//                 {step.text}
//               </p>
//             </div>

//             {/* 3D Sphere - Positioned Left or Right */}
//             <div
//               className="absolute"
//               style={{
//                 width: '164px',
//                 height: '164px',
//                 borderRadius: '50%',
//                 background: step.sphereGradient,
//                 left: step.position === 'left' ? '69.05px' : 'auto',
//                 right: step.position === 'right' ? '69.05px' : 'auto',
//                 top: '0',
//                 boxShadow: step.position === 'left' 
//                   ? '15px 10px 30px rgba(0, 0, 0, 0.5), inset -10px -10px 20px rgba(0, 0, 0, 0.3), inset 5px 5px 15px rgba(255, 255, 255, 0.1)'
//                   : '-15px 10px 30px rgba(0, 0, 0, 0.5), inset 10px -10px 20px rgba(0, 0, 0, 0.3), inset -5px 5px 15px rgba(255, 255, 255, 0.1)'
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CircleSteps;


const CircleSteps = () => {
  const steps = [
    {
      // Purple sphere - top right
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'right',
      bgGradient: 'linear-gradient(90deg, #B8A0D8 0%, #8B7AB8 20%, #7B52AB 45%, #5F3C8E 70%, #3D2456 85%, #000000 100%)',
      sphereGradient: 'radial-gradient(circle at 30% 30%, #B366FF 0%, #8338EC 40%, #5F2BA8 70%, #3D1970 100%)'
    },
    {
      // Orange sphere - left
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'left',
      bgGradient: 'linear-gradient(90deg, #000000 0%, #4A2B1A 15%, #8B5A2B 35%, #D4853D 60%, #E89D4D 100%)',
      sphereGradient: 'radial-gradient(circle at 35% 35%, #FFB366 0%, #F99526 35%, #D47520 60%, #8B4513 85%, #3D1F0F 100%)'
    },
    {
      // Dark sphere - right
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'right',
      bgGradient: 'linear-gradient(90deg, #D0D0D0 0%, #9B9B9B 25%, #6B6B6B 45%, #3A3A3A 70%, #1A1A1A 85%, #000000 100%)',
      sphereGradient: 'radial-gradient(circle at 30% 30%, #4A4A4A 0%, #252525 35%, #111111 60%, #030008 85%, #000000 100%)'
    },
    {
      // Gray/White sphere - left
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      position: 'left',
      bgGradient: 'linear-gradient(90deg, #000000 0%, #4B4B4B 15%, #7B7B7B 35%, #9B9B9B 55%, #BABABA 80%, #D0D0D0 100%)',
      sphereGradient: 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #E8E8E8 25%, #D7D7D7 45%, #AFAFAF 70%, #7A7A7A 100%)'
    }
  ];

  return (
    <div className="w-full bg-black overflow-hidden">
      {/* Header Section - Responsive only for mobile/tablet */}
      <div className="text-center py-8 sm:py-12 md:py-14 lg:py-16 bg-black px-4 lg:px-0">
        <H2 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4">
          Sed ut perspiciatis
        </H2>
        <h3 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic"
          style={{ 
            color: '#d97706',
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif'
          }}
        >
          Unde Seduo ut perspiciatis
        </h3>
      </div>

      {/* Steps Section with Horizontal Stripes */}
      <div className="relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex items-center h-48 sm:h-44 md:h-40 lg:h-[164px]"
            style={{
              background: step.bgGradient
            }}
          >
            {/* Text Content - Responsive padding and font size */}
            <div className="w-full flex justify-center items-center px-4 sm:px-8 md:px-10 lg:px-12">
              <P
                className="text-white font-semibold text-center max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg lg:text-[22px]"
                style={{ 
                  lineHeight: '1.4',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {step.text}
              </P>
            </div>

            {/* 3D Sphere - Desktop only (hidden on mobile/tablet) */}
            <div
              className="absolute hidden lg:block"
              style={{
                width: '164px',
                height: '164px',
                borderRadius: '50%',
                background: step.sphereGradient,
                left: step.position === 'left' ? '69.05px' : 'auto',
                right: step.position === 'right' ? '69.05px' : 'auto',
                top: '0',
                boxShadow: step.position === 'left' 
                  ? '15px 10px 30px rgba(0, 0, 0, 0.5), inset -10px -10px 20px rgba(0, 0, 0, 0.3), inset 5px 5px 15px rgba(255, 255, 255, 0.1)'
                  : '-15px 10px 30px rgba(0, 0, 0, 0.5), inset 10px -10px 20px rgba(0, 0, 0, 0.3), inset -5px 5px 15px rgba(255, 255, 255, 0.1)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleSteps;

