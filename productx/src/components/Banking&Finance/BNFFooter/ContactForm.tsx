// import { useEffect, useRef, useState } from "react";

// /* ================= CONTACT ================= */

// const ContactSection = ({ triggerRef }: { triggerRef: React.RefObject<HTMLDivElement> }) => {
//   return (
//     <section
//       ref={triggerRef}
//       className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-6"
//     >
//       <div className="max-w-3xl w-full">
//         <h1 className="text-5xl font-semibold mb-10">Contact</h1>

//         <form className="space-y-8">
//           <input className="w-full bg-transparent border-b border-white/40 py-3" placeholder="Name" />
//           <input className="w-full bg-transparent border-b border-white/40 py-3" placeholder="Email" />
//           <textarea className="w-full bg-transparent border-b border-white/40 py-3" placeholder="Message" />
//           <button className="mt-6 bg-white text-black px-6 py-3 rounded-md">
//             Send message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// /* ================= FOOTER ================= */

// const FooterReveal = ({ progress }: { progress: number }) => {
//   return (
//     <section
//       className="relative w-full overflow-hidden bg-white"
//       style={{
//         height: `${progress * 100}vh`
//       }}
//     >
//       <div
//         className="absolute inset-0"
//         style={{
//           opacity: progress,
//           transform: `translateY(${(1 - progress) * 40}px)`
//         }}
//       >
//         <footer className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-3 gap-16">
//           <div>
//             <h4 className="font-semibold mb-2">Updates?</h4>
//             <p className="text-sm mb-4 text-gray-500">Sign in to our newsletter.</p>
//             <input className="border px-4 py-2 rounded-md w-full" placeholder="jane@framer.com" />
//           </div>
//           <div className="grid grid-cols-2 gap-12">
//             <ul className="space-y-2 font-medium">
//               <li>Home.</li>
//               <li>Projects.</li>
//               <li>About.</li>
//               <li>Blog.</li>
//             </ul>
//             <ul className="space-y-2 font-medium">
//               <li>X.</li>
//               <li>IG.</li>
//               <li>BE.</li>
//               <li>DB.</li>
//             </ul>
//           </div>
//           <div className="text-sm text-gray-500">
//             <p>Copyright 2025 moro.</p>
//             <p>Privacy policy.</p>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// /* ================= PARENT ================= */

// const ContactFooterReveal = () => {
//   const contactRef = useRef<HTMLDivElement | null>(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!contactRef.current) return;

//       const rect = contactRef.current.getBoundingClientRect();
//       const vh = window.innerHeight;

//       // Start revealing footer when contact bottom enters viewport
//       const start = rect.bottom - vh;
//       const end = rect.bottom;

//       const p = (vh - start) / (end - start);
//       setProgress(Math.min(Math.max(p, 0), 1));
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <main className="w-full overflow-x-hidden">
//       <ContactSection triggerRef={contactRef} />
//       <FooterReveal progress={progress} />
//     </main>
//   );
// };

// export default ContactFooterReveal;
