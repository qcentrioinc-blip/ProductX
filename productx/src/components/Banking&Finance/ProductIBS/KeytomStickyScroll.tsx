// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { ArrowRightLeft, Wallet, CreditCard, Banknote, CheckCircle2 } from "lucide-react";
// import { clsx, type ClassValue } from "clsx";
 

// // --- 1. Utility Helper (Included inline for single-file usage) ---
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // --- 2. Configuration Data & Mockups ---
// const features = [
//   {
//     id: 1,
//     title: "Instant crypto exchange",
//     description:
//       "Swap crypto to crypto or crypto to euros at Tier-1 exchange rates, with access to over 100 trading pairs — all in one seamless platform.",
//     icon: <ArrowRightLeft className="w-6 h-6 text-white" />,
//     color: "bg-blue-600",
//     highlight: "text-blue-500",
//     // The visual displayed on the phone screen for this step
//     screenMockup: (
//       <div className="flex flex-col items-center justify-center h-full w-full p-6 space-y-6">
//         <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
//             <div className="flex justify-between text-xs text-gray-400">
//                 <span>Pay with</span>
//                 <span>Balance: 2.4 BTC</span>
//             </div>
//             <div className="flex justify-between items-center">
//                 <span className="text-2xl font-bold text-white">BTC</span>
//                 <span className="text-2xl text-white">0.05</span>
//             </div>
//         </div>
        
//         <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50 z-10 -my-3">
//             <ArrowRightLeft className="w-5 h-5 text-white" />
//         </div>

//         <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
//             <div className="flex justify-between text-xs text-gray-400">
//                 <span>Receive</span>
//                 <span>Rate: 1 BTC ≈ €42,000</span>
//             </div>
//              <div className="flex justify-between items-center">
//                 <span className="text-2xl font-bold text-white">EUR</span>
//                 <span className="text-2xl text-white">€2,100</span>
//             </div>
//         </div>

//         <div className="w-full py-3 bg-blue-600 rounded-xl text-center font-medium text-white mt-4">
//             Confirm Exchange
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     title: "Crypto wallet & personal IBAN",
//     description:
//       "Securely store crypto and manage your euro funds with a personal IBAN — all from a single, intuitive interface. Supports BTC, ETH, USDC and more.",
//     icon: <Wallet className="w-6 h-6 text-white" />,
//     color: "bg-purple-600",
//     highlight: "text-purple-500",
//     screenMockup: (
//       <div className="flex flex-col h-full w-full p-6">
//         <div className="text-center mb-6">
//              <div className="text-gray-400 text-sm mb-1">Total Balance</div>
//              <div className="text-3xl font-bold text-white">€ 42,593.00</div>
//              <div className="text-green-400 text-xs mt-1">▲ +2.4% (24h)</div>
//         </div>

//         <div className="space-y-3">
//             <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
//                 <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold">₿</div>
//                     <div>
//                         <div className="text-sm font-medium text-white">Bitcoin</div>
//                         <div className="text-xs text-gray-500">BTC</div>
//                     </div>
//                 </div>
//                 <div className="text-right">
//                     <div className="text-sm text-white">€12,400</div>
//                     <div className="text-xs text-gray-500">0.24 BTC</div>
//                 </div>
//             </div>
//              <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
//                 <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">€</div>
//                     <div>
//                         <div className="text-sm font-medium text-white">Euro</div>
//                         <div className="text-xs text-gray-500">IBAN *4921</div>
//                     </div>
//                 </div>
//                 <div className="text-right">
//                     <div className="text-sm text-white">€30,193</div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     title: "Simple deposits & withdrawals",
//     description:
//       "Top up your wallet, exchange crypto to euros, and withdraw directly to your IBAN. SEPA/SEPA Instant transfers are fully integrated.",
//     icon: <Banknote className="w-6 h-6 text-white" />,
//     color: "bg-emerald-600",
//     highlight: "text-emerald-500",
//     screenMockup: (
//       <div className="flex flex-col items-center justify-center h-full w-full p-6 space-y-6">
//         <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
//              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-900/40">
//                 <CheckCircle2 className="w-8 h-8 text-white" />
//              </div>
//         </div>
//         <div className="text-center space-y-1">
//             <h4 className="text-xl font-bold text-white">Transfer Successful</h4>
//             <p className="text-gray-400 text-sm">You successfully withdrew</p>
//         </div>
//         <div className="text-3xl font-bold text-white">€ 4,000.00</div>
        
//         <div className="w-full bg-white/5 rounded-xl p-4 space-y-3 mt-4">
//             <div className="flex justify-between text-sm">
//                 <span className="text-gray-400">To</span>
//                 <span className="text-white">John Doe (SEPA)</span>
//             </div>
//             <div className="flex justify-between text-sm">
//                 <span className="text-gray-400">Fee</span>
//                 <span className="text-white">€ 0.00</span>
//             </div>
//              <div className="flex justify-between text-sm">
//                 <span className="text-gray-400">Date</span>
//                 <span className="text-white">May 20, 10:42 AM</span>
//             </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     title: "Virtual cards with auto-conversion",
//     description:
//       "Issue virtual cards linked to your crypto accounts. Spend fiat or crypto online and offline via your phone, with automatic conversion.",
//     icon: <CreditCard className="w-6 h-6 text-white" />,
//     color: "bg-rose-600",
//     highlight: "text-rose-500",
//     screenMockup: (
//       <div className="flex flex-col items-center justify-center h-full w-full relative">
//         {/* Background Card */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-36 bg-gray-800 rounded-xl transform -rotate-6 opacity-50" />
        
//         {/* Foreground Card */}
//         <div className="relative w-56 h-36 bg-gradient-to-br from-rose-600 to-orange-600 rounded-xl shadow-2xl flex flex-col justify-between p-4 z-10 transform hover:scale-105 transition-transform duration-300">
//             <div className="flex justify-between items-start">
//                 <span className="font-bold italic text-white text-lg">Keytom</span>
//                 <CreditCard className="text-white/80 w-5 h-5" />
//             </div>
//             <div>
//                 <div className="flex gap-2 mb-2">
//                     <div className="w-8 h-5 bg-white/20 rounded flex items-center justify-center">
//                         <div className="w-4 h-3 border border-white/40 rounded-sm"></div>
//                     </div>
//                 </div>
//                 <div className="text-white font-mono text-sm tracking-widest">•••• 8832</div>
//                 <div className="flex justify-between items-end mt-1">
//                     <span className="text-[10px] text-white/80">EXP 12/28</span>
//                     <span className="text-[10px] text-white/80 font-bold">VISA</span>
//                 </div>
//             </div>
//         </div>

//         <div className="mt-12 w-full px-8">
//              <div className="flex justify-between items-center text-sm text-white mb-2">
//                 <span>Spending Limit</span>
//                 <span>€850 / €1000</span>
//              </div>
//              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
//                 <div className="w-[85%] h-full bg-rose-500 rounded-full" />
//              </div>
//         </div>
//       </div>
//     ),
//   },
// ];

// // --- 3. Sub-Component: Text Item (Right Side) ---
// const FeatureItem = ({
//   feature,
//   index,
//   setInView,
// }: {
//   feature: typeof features[0];
//   index: number;
//   setInView: (i: number) => void;
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     margin: "-50% 0px -50% 0px" // Trigger exactly when element hits the center horizontal line
//   });

//   useEffect(() => {
//     if (isInView) setInView(index);
//   }, [isInView, index, setInView]);

//   return (
//     <div
//       ref={ref}
//       className={cn(
//         "min-h-[80vh] flex flex-col justify-center px-8 py-16 transition-all duration-500",
//         isInView ? "opacity-100 blur-0 scale-100" : "opacity-30 blur-sm scale-95"
//       )}
//     >
//       <div className="flex items-center gap-4 mb-6">
//         <span className={cn("text-6xl font-bold opacity-20", feature.highlight)}>0{feature.id}</span>
//         <div className={cn("p-3 rounded-xl shadow-lg", feature.color)}>
//             {feature.icon}
//         </div>
//       </div>
//       <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
//         {feature.title}
//       </h3>
//       <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
//         {feature.description}
//       </p>
//     </div>
//   );
// };

// // --- 4. Main Component ---
// export default function KeytomStickyScroll() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="relative w-full bg-[#050505] font-sans selection:bg-blue-500/30">
      
//       {/* Grid Layout */}
//       <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row">

//         {/* --- LEFT COLUMN (Sticky Phone) --- */}
//         <div className="hidden lg:flex flex-1 h-screen sticky top-0 items-center justify-center overflow-hidden p-10">
          
//           {/* Ambient Background Glow */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div
//               className={cn(
//                 "w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-colors duration-1000 ease-in-out",
//                 features[activeIndex].color
//               )}
//             />
//           </div>

//           {/* Phone Mockup Frame */}
//           <div className="relative z-10 w-[320px] h-[650px] bg-black border-[10px] border-[#1a1a1a] rounded-[45px] shadow-2xl overflow-hidden ring-1 ring-white/10 transform transition-transform duration-700">
            
//             {/* Dynamic Screen Content Container */}
//             <div className="relative w-full h-full bg-[#0f0f11]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -50, scale: 0.95 }}
//                   transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
//                   className="absolute inset-0 w-full h-full"
//                 >
//                    {/* Status Bar (Fake) */}
//                    <div className="absolute top-0 w-full h-12 flex justify-between px-6 items-end pb-2 z-20 bg-gradient-to-b from-black/50 to-transparent">
//                         <div className="text-xs text-white font-medium">9:41</div>
//                         <div className="flex gap-1.5">
//                             <div className="w-4 h-2.5 rounded-[1px] border border-white/40 relative">
//                                 <div className="absolute inset-0 bg-white/80 w-[80%]"></div>
//                             </div>
//                         </div>
//                    </div>

//                    {/* Render Active Screen */}
//                    <div className="pt-14 h-full">
//                      {features[activeIndex].screenMockup}
//                    </div>

//                 </motion.div>
//               </AnimatePresence>

//               {/* Bottom Navigation (Fake) */}
//               <div className="absolute bottom-0 w-full h-20 bg-[#0f0f11]/90 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-6 z-20">
//                  {features.map((item, idx) => (
//                     <div 
//                         key={idx} 
//                         className={cn(
//                             "flex flex-col items-center gap-1 transition-colors duration-300",
//                             idx === activeIndex ? item.highlight : "text-gray-600"
//                         )}
//                     >
//                         <div className="w-6 h-6 flex items-center justify-center">
//                             {React.cloneElement(item.icon as React.ReactElement <any>, { 
//                                 className: cn("w-5 h-5", idx === activeIndex ? "opacity-100" : "opacity-50") 
//                             })}
//                         </div>
//                     </div>
//                  ))}
//               </div>
              
//               {/* Home Indicator */}
//               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-30" />
//             </div>
//           </div>
//         </div>

//         {/* --- RIGHT COLUMN (Scrolling Text) --- */}
//         <div className="flex-1 relative z-10">
//           {/* Spacer to ensure first item hits center when phone locks */}
//           <div className="hidden lg:block h-[15vh]" />
          
//           <div className="flex flex-col pb-20 lg:pb-0">
//             {features.map((feature, index) => (
//               <FeatureItem
//                 key={feature.id}
//                 feature={feature}
//                 index={index}
//                 setInView={setActiveIndex}
//               />
//             ))}
//           </div>
          
//           <div className="hidden lg:block h-[15vh]" />
//         </div>

//       </div>
//     </section>
//   );
// }