// import { H2, H4, P } from "../../../styles/Typography";

// export default function InnovationCards() {
//   const cards = [
//     {
//       img: "/Global-Landing-Page/card1.webp",
//       badge: "See How We Deliver",
//       title: "Outcome-Driven Results for Clear Business Wins",
//       desc: "Every engagement begins with clear goals, agreed metrics, and realistic timelines, to drive performance, revenue, and competitive edge.",
//     },
//     {
//       img: "/Global-Landing-Page/card2.webp",
//       badge: "Learn About Our Approach",
//       title: "People-First Collaboration Aligns Tech with Teams",
//       desc: "We engage stakeholders, involve them in decisions, and craft solutions that fit workflows, ease change, and boost adoption.",
//     },
//     {
//       img: "/Global-Landing-Page/card3.webp",
//       badge: "Explore Our Services",
//       title: "Trusted Reliability in Every System We Build",
//       desc: "We deliver secure, stable platforms with proven practices, constant monitoring, and fast response to keep operations safe amid growth.",
//     },
//   ];

//   return (
//     <section className="w-full py-16 px-4 sm:px-6 bg-[#F5F5F5]">
//       <div className="max-w-8xl mx-10">

//         {/* Heading */}
//         <H2 className="mb-10 leading-tight">
//           Innovation at Qnest Global turns <br className="hidden xl:block" />
//           technology change into <br className="hidden xl:block" />
//           business value
//         </H2>

//         {/* ================= MOBILE + TABLET (CAROUSEL) ================= */}
//         <div className="xl:hidden">
//           <div
//             className="
//               flex gap-6
//               overflow-x-auto
//               snap-x snap-mandatory
//               pb-4
//               -mx-4 px-4
//               scrollbar-hide
//             "
//           >
//             {cards.map((card, i) => (
//               <div
//                 key={i}
//                 className="
//                   snap-center
//                   relative
//                   h-[520px]
//                   w-[85%]
//                   max-w-[360px]
//                   flex-shrink-0
//                   rounded-xl
//                   overflow-hidden
//                   shadow-lg
//                 "
//               >
//                 {/* Image */}
//                 <img
//                   src={card.img}
//                   alt=""
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/60" />

//                 {/* Content */}
//                 <div className="relative h-full flex flex-col justify-between p-6 text-white">
//                   {/* Top */}
//                   <div>
//                     <span className="inline-block bg-white/20 backdrop-blur border border-white px-4 py-2 rounded-full text-sm mb-4">
//                       {card.badge}
//                     </span>
//                     <H4>{card.title}</H4>
//                   </div>

//                   {/* Bottom */}
//                   <P className="text-white">{card.desc}</P>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= DESKTOP (HOVER ANIMATION) ================= */}
//         <div className="hidden xl:grid grid-cols-3 gap-8">
//           {cards.map((card, i) => (
//             <div
//               key={i}
//               className="group relative h-[600px] rounded-xl overflow-hidden shadow-lg"
//             >
//               {/* Image */}
//               <img
//                 src={card.img}
//                 alt=""
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//               {/* Content */}
//               <div className="relative h-full p-8 text-white overflow-hidden">
//                 {/* Badge */}
//                 <span className="inline-block bg-white/30 backdrop-blur border border-white px-6 py-2 rounded-full">
//                   {card.badge}
//                 </span>

//                 {/* Title (bottom → slightly top) */}
//                 <H4
//                   className="
//                     absolute left-8 right-8
//                     bottom-10
//                     transition-transform duration-700 ease-out
//                     translate-y-0
//                     group-hover:-translate-y-[400px]
//                   "
//                 >
//                   {card.title}
//                 </H4>

//                 {/* Description */}
//                 <P
//                   className="
//                     absolute left-8 right-8 bottom-8
//                     text-white
//                     opacity-0 translate-y-12
//                     transition-all duration-600 ease-out delay-150
//                     group-hover:opacity-100
//                     group-hover:translate-y-0
//                   "
//                 >
//                   {card.desc}
//                 </P>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Utilities */}
//       <style>{`
//         ::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }

// InnovationCards.jsx

/*
Add to your index.html <head>:
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet" />
*/
import { motion } from "framer-motion";
const InnovationCards = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 xl:px-16">

      {/* Overall Container */}
      <div className="max-w-8xl mx-auto flex flex-col gap-6 xl:gap-[30px]">

        {/* ══════ ROW 1: Heading + Approach Card ══════ */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 xl:gap-[30px]">

          {/* ── Left: Label + Heading ── */}
          <div className="flex flex-col gap-3 w-full lg:flex-1 lg:min-w-0">

            {/* Dash + Label */}
            {/* <div className="flex items-center gap-3">
              <div className="w-[32px] h-[3px] bg-gray-400 rounded-full flex-shrink-0" />
              <span
                className="text-[#2B68C3] text-[18px] sm:text-[20px] xl:text-[24px] font-medium leading-none"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Quis autem
              </span>
            </div> */}

            {/* Heading */}
            <h2
              className="text-[#2A2A2A] text-[36px] sm:text-[44px] lg:text-[42px] xl:text-[55px] font-semibold leading-none tracking-normal m-0 w-full xl:w-[647px]"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              Driving business value through innovation.
            </h2>
          </div>

          {/* ── Right: Our Approach Card ── */}
          <div className="relative flex flex-col justify-center w-full lg:w-[48%] xl:w-[626px] xl:h-[198px] flex-shrink-0 rounded-[30px] bg-[#E7E3D7] p-5 xl:pt-[20px] xl:pr-[30px] xl:pb-[20px] xl:pl-[30px] gap-4 xl:gap-[21px]">

            {/* Dark Circle */}
            {/* <div className="absolute top-4 right-4 xl:top-[20px] xl:right-[30px] w-[38px] h-[38px] xl:w-[46px] xl:h-[46px] rounded-full bg-[#424242] flex-shrink-0" /> */}

            {/* Our Approach Title */}
            <span
              className="text-[#2B68C3] text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-none block pr-12 xl:pr-0 xl:w-[160px]"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              Our Approach
            </span>

            {/* Paragraph */}
            <p
              className="text-[#141414] text-[13px] sm:text-[14px] xl:text-[16px] font-normal leading-[155%] m-0 w-full xl:w-[526px]"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              We engage stakeholders throughout the journey, involving them in
              key decisions to ensure alignment and ownership. Our solutions fit
              real workflows, ease change, and drive stronger adoption across
              teams.
            </p>
          </div>
        </div>

        {/* ══════ ROW 2: Bottom Row ══════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[593px_1fr_1fr] xl:grid-cols-[750px_1fr_360px_360px] gap-3 xl:gap-[10px] xl:p-[10px]">

          {/* ── Bottom Left Card ── */}
          <div className="relative w-full h-[420px] sm:h-[400px] lg:h-[454px] xl:h-[454px] rounded-[30px] bg-[#E7E3D7] overflow-hidden sm:col-span-2 lg:col-span-1 flex flex-col justify-between p-5 xl:p-0">

            {/* ── MOBILE & TABLET LAYOUT (Similar to Desktop) ── */}
            <div className="relative flex flex-col h-full xl:hidden overflow-hidden">

              {/* ✅ Heading Badge */}
              <div className="absolute top-[20px] left-[20px] flex items-center bg-white rounded-full px-[15px] py-[10px] h-[46px] w-fit z-20">
                <span
                  className="text-[#2B68C3] text-[18px] sm:text-[20px] font-semibold leading-none"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  How We Deliver
                </span>
              </div>

              {/* ✅ Image Card - adjusted for mobile */}
              <div className="absolute top-[70px] right-[10px] w-[140px] h-[180px] sm:w-[180px] sm:h-[230px] rounded-[20px] overflow-hidden z-20 shadow-lg">
                <img
                  src="/howwe.webp"
                  alt="How we deliver"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ✅ Pill Buttons Marquee - Moves Right to Left */}
              <div className="absolute top-[120px] left-0 w-full overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[10px] w-max"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[10px] pr-[10px]">
                      {["QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM"].map((text, j) => (
                        <div
                          key={j}
                          className="flex items-center border border-[#2B68C3] rounded-full px-[15px] py-[8px] h-[40px] whitespace-nowrap"
                        >
                          <span
                            className="text-[#2B68C3] text-[14px] font-semibold tracking-widest"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                          >
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Large Text Marquee - Moves Left to Right */}
              <div className="absolute top-[180px] left-0 w-full overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[20px] w-max"
                >
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[20px] pr-[20px]">
                      {["QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM"].map((text, j) => (
                        <span
                          key={j}
                          className="text-[#2B68C3] text-[20px] font-bold tracking-widest whitespace-nowrap"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Bottom Description */}
              <p
                className="absolute bottom-[20px] left-[20px] right-[20px] text-[#141414] text-[13px] sm:text-[14px] font-normal leading-[155%] m-0 z-20"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Every engagement begins with clear goals, agreed metrics, and
                realistic timelines, to drive performance, revenue, and
                competitive edge.
              </p>
            </div>



            <div className="hidden xl:block w-full h-full relative overflow-hidden">

              {/* ✅ Heading Badge - Static top left */}
              <div className="absolute top-[20px] left-[21px] flex items-center bg-white rounded-full px-[20px] py-[15px] h-[60px] w-[229px] z-0">
                <span
                  className="text-[#2B68C3] text-[24px] font-semibold leading-none block w-[190px]"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  How We Deliver
                </span>
              </div>

              {/* ✅ Image Card - z-10 always in FRONT */}
              <div className="absolute top-[84px] left-[500px] w-[214px] h-[271px] rounded-[20px] overflow-hidden z-10">
                <img
                  src="/howwe.webp"
                  alt="How we deliver"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ✅ Pill Buttons - Infinite RIGHT → LEFT Marquee, BEHIND image */}
              <div className="absolute top-[160px] left-0 w-[500px] overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}           // moves right to left
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[16px] w-max"
                >
                  {/* Duplicate TWICE for seamless infinite loop */}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[16px] pr-[16px]">
                      {["QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM"].map((text, j) => (
                        <div
                          key={j}
                          className="flex items-center border border-[#2B68C3] rounded-full px-[28px] py-[14px] h-[56px] whitespace-nowrap"
                        >
                          <span
                            className="text-[#2B68C3] text-[18px] font-semibold tracking-widest"
                            style={{ fontFamily: "Quicksand, sans-serif" }}
                          >
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Large Text - Infinite LEFT → RIGHT Marquee, BEHIND image */}
              <div className="absolute top-[240px] left-0 w-[500px] overflow-hidden z-0">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}           // moves left to right
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="flex gap-[40px] w-max"
                >
                  {/* Duplicate TWICE for seamless infinite loop */}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-[40px] pr-[40px]">
                      {["QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM", "QUIS AUTEM"].map((text, j) => (
                        <span
                          key={j}
                          className="text-[#2B68C3] text-[28px] font-bold tracking-widest whitespace-nowrap"
                          style={{ fontFamily: "Quicksand, sans-serif" }}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ✅ Bottom Description - STATIC, no animation */}
              <p
                className="absolute top-[380px] left-0 right-0 mx-10 w-[542px] text-left text-[#141414] text-[16px] font-normal leading-[155%] m-0 z-0"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                Every engagement begins with clear goals, agreed metrics, and
                realistic timelines, to drive performance, revenue, and
                competitive edge.
              </p>

            </div>

          </div>

          {/* ── Spacer — xl only, pushes images to right ── */}
          <div className="hidden xl:block" />

          {/* ── First Image ── */}
          <div className="w-full h-[260px] sm:h-[380px] lg:h-[454px] xl:h-[454px] rounded-[30px] overflow-hidden">
            <img
              src="/Global-Landing-Page/card1.webp"
              alt="Woman working with laptop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ── Second Image ── */}
          <div className="w-full h-[260px] sm:h-[380px] lg:h-[454px] xl:h-[454px] rounded-[30px] overflow-hidden">
            <img
              src="/Global-Landing-Page/card2.webp"
              alt="Two men reviewing tablet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationCards;



