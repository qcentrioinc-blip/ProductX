// import { ArrowUpRight } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';

// // Custom useInView hook
// type InViewOptions = {
//   threshold?: number;
//   rootMargin?: string;
// };

// const useInView = (options: InViewOptions = {}) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setInView(entry.isIntersecting);
//     }, {
//       threshold: options.threshold || 0.2,
//       rootMargin: options.rootMargin || '-50px 0px',
//       ...options
//     });

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [options.threshold, options.rootMargin]);

//   return { ref, inView };
// };

// const FirstProduct = () => {

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     rootMargin: '-50px 0px'
//   });

//   return (
//     <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">

//       {/* Top Simple Bar - Platform & Marketplace - WHITE TEXT */}
//       <div
//         className="w-full"
//         style={{
//           borderBottom: '2px solid rgba(255, 255, 255, 0.3)'
//         }}
//       >
//         <div className="max-w-[1600px] mx-auto h-[40px] flex items-center justify-between">
//           {/* Logo on Left */}
//           <div className="flex items-center">
//             <div className="bg-white px-4 py-1 rounded-md">
//               <span className="text-black text-[12px] font-bold">LOGO</span>
//             </div>
//           </div>

//           {/* Platform & Marketplace on Right */}
//           <div className="flex items-center gap-10">
//             <a href="#platform" className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
//               Platform
//             </a>
//             <a href="#marketplace" className="text-white text-[14px] font-medium hover:opacity-80 transition-opacity duration-300">
//               Marketplace
//             </a>
//           </div>
//         </div>
//       </div>


//       {/* Main White Navbar with Rounded Container */}
//       <header className="w-full bg-transparent pt-4 pb-4">
//         <div className="max-w-[1540px] mx-auto">
//           <nav className="relative w-full max-w-[1480px] h-[80px] mx-auto bg-white rounded-[60px] px-4 flex items-center justify-between shadow-lg z-50">

//             {/* Logo Section */}
//             <div className="flex items-center">
//               <div className="bg-[#2A2A2A] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold text-[10px]">
//                 LOGO
//               </div>
//             </div>

//             {/* Desktop Navigation Links - CENTERED */}
//             <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
//               <ul className="flex gap-[36px] list-none items-center">
//                 <li>
//                   <a href="#products" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                     Products
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#about" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#resources" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                     Resources
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#careers" className="text-[#2A2A2A] text-[15px] font-semibold hover:text-black transition-colors duration-300">
//                     Careers
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Right Side - Contact Button */}
//             <div className="hidden lg:flex items-center ml-auto">
//               <button className="bg-black text-white px-7 py-3 rounded-[8px] text-[13px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300">
//                 CONTACT US
//                 <span className="text-[16px]"><ArrowUpRight /></span>
//               </button>
//             </div>

//             {/* Mobile Menu Toggle Button */}
//             <button
//               onClick={toggleMobileMenu}
//               className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
//             >
//               <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//               <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//               <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
//             </button>
//           </nav>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <div
//           className={`lg:hidden bg-white mx-4 rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//             }`}
//         >
//           <ul className="flex flex-col px-5 py-4 space-y-4">
//             <li className="border-b border-gray-300 pb-3">
//               <a href="#products" className="text-gray-800 text-base font-medium hover:text-black">
//                 Products
//               </a>
//             </li>
//             <li className="border-b border-gray-300 pb-3">
//               <a href="#about" className="text-gray-800 text-base font-medium hover:text-black">
//                 About Us
//               </a>
//             </li>
//             <li className="border-b border-gray-300 pb-3">
//               <a href="#resources" className="text-gray-800 text-base font-medium hover:text-black">
//                 Resources
//               </a>
//             </li>
//             <li className="border-b border-gray-300 pb-3">
//               <a href="#careers" className="text-gray-800 text-base font-medium hover:text-black">
//                 Careers
//               </a>
//             </li>
//             <li className="pt-2">
//               <button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-800">
//                 CONTACT US
//                 <span className="text-lg">↗</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </header>

//       <div className='px-4 sm:px-6 lg:px-8 py-16'>

//         {/* Background geometric pattern */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-96 h-96 border border-gray-700/30 rotate-12 rounded-lg"></div>
//           <div className="absolute top-40 right-20 w-64 h-64 border border-gray-600/20 -rotate-12 rounded-lg"></div>
//           <div className="absolute bottom-32 left-32 w-80 h-80 border border-gray-700/30 rotate-45 rounded-lg"></div>
//           <div className="absolute bottom-20 right-40 w-48 h-48 border border-gray-600/20 -rotate-45 rounded-lg"></div>
//           <div className="absolute top-1/3 left-1/3 w-72 h-72 border border-gray-700/20 rotate-6 rounded-lg"></div>
//         </div>

//         <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
//           {/* Testimonial avatars */}
//           <div className="mb-16 flex items-center gap-3">
//             <div className="flex -space-x-3">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"></div>
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-white"></div>
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-red-500 border-2 border-white"></div>
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white"></div>
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white"></div>
//             </div>
//             <span className="text-gray-300 text-sm ml-4">Trusted already by 12k+</span>
//           </div>

//           {/* Main heading */}
//           <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 leading-tight">
//             Smarter Banking. Simplified.
//           </h1>

//           {/* Subtitle */}
//           <p className="text-gray-400 text-center text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
//             Bankfair streamlines core banking and loan management—making operations faster,
//             efficient, and hassle-free.
//           </p>

//           {/* CTA Button */}
//           <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-3 mb-16">
//             BOOK A FREE DEMO
//             <ArrowUpRight className="w-5 h-5" />
//           </button>

//           {/* Dashboard Preview with SCROLL-TRIGGERED Animation */}
//           <div
//             ref={ref}
//             className="w-full max-w-6xl mx-auto"
//             style={{ perspective: '1200px' }}
//           >
//             <motion.div
//               className="relative"
//               initial={{
//                 transform: "perspective(1200px) translateY(-21.28px) scale(1.0532) rotateX(12.77deg)"
//               }}
//               animate={inView ? {
//                 transform: "perspective(1200px) translateY(0px) scale(1) rotateX(0deg)"
//               } : {
//                 transform: "perspective(1200px) translateY(-21.28px) scale(1.0532) rotateX(12.77deg)"
//               }}
//               transition={{
//                 duration: 2.5,
//                 ease: [0.25, 0.1, 0.25, 1],
//                 delay: 0.3
//               }}
//               style={{
//                 willChange: 'transform',
//                 opacity: 1
//               }}
//             >
//               <img
//                 src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png?width=2400&height=1350"
//                 alt="Banking Dashboard Interface"
//                 className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700/50"
//                 style={{
//                   display: 'block',
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: 'inherit',
//                   objectPosition: 'center',
//                   objectFit: 'contain'
//                 }}
//               />
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 -z-10 blur-xl scale-105"></div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Additional decorative elements */}
//         <div className="absolute top-1/4 left-8 w-2 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-60"></div>
//         <div className="absolute bottom-1/4 right-8 w-2 h-20 bg-gradient-to-t from-purple-500 to-transparent rounded-full opacity-60"></div>
//         <div className="absolute top-1/2 left-16 w-1 h-12 bg-gradient-to-b from-green-400 to-transparent rounded-full opacity-40"></div>
//         <div className="absolute bottom-1/3 right-16 w-1 h-14 bg-gradient-to-t from-pink-400 to-transparent rounded-full opacity-40"></div>
//       </div>
//     </div>
//   );
// };

// export default FirstProduct;


import { ArrowUpRight } from 'lucide-react';
import { motion, useInView as useFramerInView } from 'framer-motion';
import { useRef, } from 'react';

const FirstProduct = () => {
 

 

  const ref = useRef(null);
  const isInView = useFramerInView(ref, { 
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image - Draxora1 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/Products/Draxora1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

     

     

      <div className="relative lg:pt-44 z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          
          {/* Trusted by 15K+ Section */}
          <div className="mb-12 flex items-center gap-4 trusted-section">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
            </div>
            <span 
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                color: '#FFFFFF'
              }}
            >
              Trusted by 15K+
            </span>
          </div>

          {/* Content Container */}
          <div
            className="content-container"
            style={{
              width: '886px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '100px'
            }}
          >
            {/* Main Heading */}
            <h1
              className="main-heading"
              style={{
                width: '886px',
                height: '77px',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: '64px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              Smarter Banking, Simplified
            </h1>

            {/* Subtitle */}
            <p
              className="subtitle-text"
              style={{
                width: '886px',
                height: '50px',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FAFAFA',
                overflow: 'hidden'
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>

            {/* CTA Button */}
            <button
              className="cta-button hover:brightness-110"
              style={{
                width: '296.5px',
                height: '48px',
                gap: '8px',
                borderRadius: '12px',
                paddingTop: '12px',
                paddingRight: '24px',
                paddingBottom: '12px',
                paddingLeft: '24px',
                background: '#FED600',
                color: '#000000',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              EXPLORE OUR SOLUTIONS
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Dashboard Preview with CircleLight Behind */}
          <div
            ref={ref}
            className="w-full max-w-6xl mx-auto relative dashboard-container"
            style={{ perspective: '1200px' }}
          >
            {/* CircleLight Background Image */}
            <img
              src="/Products/CircleLight.png"
              alt="Circle Light"
              className="absolute circle-light"
              style={{
                width: '700px',
                height: '700px',
                bottom: '-250px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 0,
                opacity: 0.8
              }}
            />

            {/* Dashboard Image with Animation */}
            <motion.div
              className="relative z-10"
              initial={{
                rotateX: 12.77,
                y: -21.28,
                scale: 1.0532
              }}
              animate={isInView ? {
                rotateX: 0,
                y: 0,
                scale: 1
              } : {
                rotateX: 12.77,
                y: -21.28,
                scale: 1.0532
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1200
              }}
            >
              <img
                src="https://framerusercontent.com/images/kH2dYUYz6bTbR4cjVTdgUbxd3jk.png?width=2400&height=1350"
                alt="Banking Dashboard Interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style >{`
        @media (max-width: 1023px) {
          /* Trusted Section */
          .trusted-section {
            margin-bottom: 2rem !important;
          }

          .trusted-section > div > div {
            width: 2rem !important;
            height: 2rem !important;
          }

          .trusted-section span {
            font-size: 14px !important;
          }

          /* Content Container */
          .content-container {
            width: 100% !important;
            max-width: 90% !important;
            padding: 0 20px !important;
            margin-bottom: 60px !important;
          }

          /* Main Heading */
          .main-heading {
            width: 100% !important;
            height: auto !important;
            font-size: 36px !important;
            line-height: 110% !important;
          }

          /* Subtitle */
          .subtitle-text {
            width: 100% !important;
            height: auto !important;
            font-size: 16px !important;
            line-height: 140% !important;
            overflow: visible !important;
          }

          /* CTA Button */
          .cta-button {
            width: 100% !important;
            max-width: 280px !important;
            font-size: 12px !important;
            padding: 12px 20px !important;
          }

          /* CircleLight */
          .circle-light {
            width: 350px !important;
            height: 350px !important;
            bottom: -120px !important;
          }

          /* Dashboard Container */
          .dashboard-container {
            padding: 0 20px !important;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          /* Tablet Adjustments */
          .main-heading {
            font-size: 48px !important;
          }

          .subtitle-text {
            font-size: 18px !important;
          }

          .circle-light {
            width: 500px !important;
            height: 500px !important;
            bottom: -180px !important;
          }
        }

        @media (max-width: 639px) {
          /* Mobile - Extra small screens */
          .main-heading {
            font-size: 32px !important;
          }

          .subtitle-text {
            font-size: 14px !important;
          }

          .circle-light {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FirstProduct;




