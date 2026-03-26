import { motion } from "framer-motion";
/* ─── Inlined SVG Assets ─────────────────────────────────────────────── */

// const CirclesSVG = () => (

const CirclesSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="454" height="454" viewBox="0 0 454 454" fill="none">

        {/* Outer ring — dashed stroke so rotation is visible */}
        <circle cx="227" cy="227" r="227" fill="#2B68C3" fillOpacity="0.3" />
        <circle
            cx="227" cy="227" r="220"
            stroke="#2B68C3" strokeOpacity="0.6"
            strokeWidth="2"
            strokeDasharray="18 12"   // ✅ dashes make rotation visible
            fill="none"
        />

        {/* Middle ring — dashed stroke */}
        <circle cx="227" cy="227" r="138" fill="#2B68C3" fillOpacity="0.45" />
        <circle
            cx="227" cy="227" r="131"
            stroke="#5a8fd4" strokeOpacity="0.7"
            strokeWidth="2"
            strokeDasharray="12 10"   // ✅ slightly different gap rhythm
            fill="none"
        />

        {/* Inner solid circle — unchanged */}
        <circle cx="227" cy="227" r="85" fill="#2B68C3" />

        {/* Indicator dot on outer ring — strongest rotation cue */}
        <circle cx="227" cy="7" r="6" fill="#ffffff" fillOpacity="0.85" />  {/* top */}
        <circle cx="447" cy="227" r="4" fill="#ffffff" fillOpacity="0.5" /> {/* right */}

    </svg>
);
//     <svg xmlns="http://www.w3.org/2000/svg" width="454" height="454" viewBox="0 0 454 454" fill="none">
//         <circle cx="227" cy="227" r="227" fill="#2B68C3" fillOpacity="0.3" />
//         <circle cx="227" cy="227" r="138" fill="#2B68C3" fillOpacity="0.45" />
//         <circle cx="227" cy="227" r="85" fill="#2B68C3" />
//     </svg>
// );

const SolutionsSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 60 60" fill="none">
        <g clipPath="url(#sol)">
            <path d="M3.51562 30C3.51562 15.3964 15.3964 3.51562 30 3.51562C35.4922 3.51562 40.73 5.18098 45.1402 8.27191H41.733C40.7623 8.27191 39.9752 9.05894 39.9752 10.0297C39.9752 11.0005 40.7623 11.7875 41.733 11.7875H49.9704C50.9412 11.7875 51.7282 11.0005 51.7282 10.0297V1.79238C51.7282 0.821601 50.9412 0.0345703 49.9704 0.0345703C48.9996 0.0345703 48.2126 0.821601 48.2126 1.79238V6.16805C43.0063 2.16785 36.6691 0 30 0C21.9867 0 14.4531 3.12059 8.78672 8.78672C3.12059 14.4531 0 21.9867 0 30C0 35.2642 1.39113 40.451 4.02305 44.9998C4.34883 45.563 4.93922 45.8775 5.54613 45.8775C5.84496 45.8775 6.14777 45.8012 6.42492 45.6409C7.26516 45.1547 7.55215 44.0794 7.06605 43.239C4.7434 39.2248 3.51562 34.6467 3.51562 30Z" fill="white" />
            <path d="M55.9785 15.0002C55.4922 14.1599 54.4166 13.873 53.5766 14.3592C52.7364 14.8454 52.4494 15.9208 52.9355 16.7611C55.2581 20.7751 56.4859 25.3531 56.4859 30C56.4859 44.6036 44.6051 56.4844 30.0015 56.4844C24.5098 56.4844 19.2729 54.8186 14.8632 51.7281H18.2685C19.2393 51.7281 20.0263 50.9411 20.0263 49.9703C20.0263 48.9995 19.2393 48.2125 18.2685 48.2125H10.0313C9.06047 48.2125 8.27344 48.9995 8.27344 49.9703V58.2076C8.27344 59.1784 9.06047 59.9654 10.0313 59.9654C11.002 59.9654 11.7891 59.1784 11.7891 58.2076V53.8276C16.9952 57.8291 23.3316 60 30.0015 60C38.0148 60 45.5484 56.8794 51.2148 51.2133C56.8809 45.5469 60.0015 38.0133 60.0015 30C60.0015 24.7356 58.6104 19.5488 55.9785 15.0002Z" fill="white" />
            <path d="M45.0473 25.4535C45.168 25.0031 45.1049 24.5234 44.8716 24.1196L42.5279 20.0602C42.0425 19.2195 40.9675 18.9314 40.1267 19.4168L38.5327 20.3371C37.2375 19.1892 35.7371 18.3221 34.1006 17.7758V15.9375C34.1006 14.9667 33.3136 14.1797 32.3428 14.1797H27.6553C26.6845 14.1797 25.8975 14.9667 25.8975 15.9375V17.7757C24.2609 18.322 22.7605 19.1891 21.4652 20.337L19.8713 19.4167C19.0306 18.9311 17.9554 19.2192 17.4702 20.06L15.1264 24.1195C14.641 24.9602 14.9291 26.0353 15.7698 26.5207L17.3633 27.4407C17.1938 28.2802 17.1083 29.1364 17.1083 29.9999C17.1083 30.8633 17.1937 31.7197 17.3633 32.559L15.7698 33.4791C14.9291 33.9645 14.641 35.0395 15.1264 35.8802L17.4702 39.9397C17.9556 40.7805 19.0305 41.0686 19.8713 40.5831L21.4652 39.6628C22.7605 40.8108 24.2608 41.6777 25.8975 42.2241V44.0625C25.8975 45.0333 26.6845 45.8203 27.6553 45.8203H32.3428C33.3136 45.8203 34.1006 45.0333 34.1006 44.0625V42.2243C35.7371 41.678 37.2375 40.8109 38.5327 39.663L40.1267 40.5833C40.9674 41.0687 42.0425 40.7805 42.5279 39.94L44.8716 35.8805C45.1047 35.4768 45.1679 34.9969 45.0473 34.5466C44.9267 34.0963 44.6321 33.7124 44.2283 33.4793L42.6347 32.5591C42.8041 31.7198 42.8895 30.8636 42.8895 30C42.8895 29.1364 42.8041 28.2802 42.6347 27.4409L44.2283 26.5207C44.632 26.2877 44.9267 25.9037 45.0473 25.4535ZM29.9989 34.6875C27.4101 34.6875 25.3114 32.5888 25.3114 30C25.3114 27.4112 27.4101 25.3125 29.9989 25.3125C32.5877 25.3125 34.6864 27.4112 34.6864 30C34.6864 32.5888 32.5877 34.6875 29.9989 34.6875Z" fill="white" />
        </g>
        <defs>
            <clipPath id="sol"><rect width="60" height="60" fill="white" /></clipPath>
        </defs>
    </svg>
);

const HandSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44" viewBox="0 0 36 49" fill="none">
        <path d="M36 31.092C36 31.092 35.9585 36.7583 35.9585 38.2199C35.9585 41.0587 34.2633 46.6691 34.2633 46.6691C34.2633 46.6691 34.1532 47.1038 33.8759 47.7713C33.7288 48.1254 33.262 49 31.9012 49C30.7555 49 17.2346 49 12.9869 49C11.8002 49 11.0751 48.1643 11.0751 48.1643L1.91814 36.2658C0.752324 35.1179 0.752324 33.2395 1.91814 32.0916C3.08404 30.9436 4.99197 30.9436 6.15769 32.0916L9.60098 34.8071C9.60098 34.8071 10.0444 35.0982 10.5217 35.0982C11.3248 35.0982 12.0225 34.4713 12.0225 33.6836C12.0225 32.8958 12.0172 13.7165 12.0172 13.7165C12.0172 12.093 13.3662 10.7648 15.015 10.7648C16.6639 10.7648 18.0128 12.093 18.0128 13.7165V24.0241C18.0126 24.0269 18.0112 24.0293 18.0112 24.0322C18.0112 24.0972 18.0646 24.1498 18.1305 24.1498C18.1891 24.1498 18.2355 24.1075 18.2458 24.0528C18.7 22.9891 19.7703 22.237 21.0107 22.237C22.6595 22.237 24.0085 23.5652 24.0085 25.1887V27.0434C24.0085 27.051 24.012 27.0582 24.0169 27.0653C24.0335 27.1085 24.0751 27.1394 24.1247 27.1394C24.1702 27.1394 24.2086 27.113 24.2277 27.0756L24.2317 27.0736C24.672 25.9805 25.7444 25.1887 27.0063 25.1887C28.6551 25.1887 30.0041 26.5168 30.0041 27.9674V29.9203C30.0039 29.9236 30.0022 29.9263 30.0022 29.9295C30.0022 29.9944 30.0557 30.047 30.1216 30.047C30.1735 30.047 30.2165 30.014 30.233 29.9686C30.2383 29.9657 30.2418 29.9641 30.2455 29.9624C30.2404 29.9594 30.2387 29.9499 30.2502 29.924C30.7121 28.8772 31.7739 28.1403 33.0019 28.1403C34.6511 28.1404 36 29.4686 36 31.092ZM20.5007 19.8104C20.6697 19.7949 20.8398 19.787 21.011 19.787C21.7691 19.787 22.488 19.9471 23.1455 20.2223C24.2403 18.6484 24.8833 16.7474 24.8833 14.7001C24.8833 9.29641 20.4181 4.9 14.9299 4.9C9.44177 4.9 4.97662 9.29641 4.97662 14.7001C4.97662 18.1443 6.79483 21.1734 9.53139 22.9215L9.53061 19.7668C8.2536 18.4479 7.46493 16.6664 7.46493 14.7004C7.46493 10.641 10.8071 7.35038 14.9299 7.35038C19.0526 7.35038 22.3948 10.6411 22.3948 14.7004C22.3948 16.5762 21.6751 18.2824 20.5006 19.5811L20.5007 19.8104ZM9.53275 28.3901L9.53217 25.7198C5.37154 23.736 2.48831 19.549 2.48831 14.7002C2.48831 7.94527 8.06941 2.4501 14.9299 2.4501C21.7898 2.4501 27.3716 7.94527 27.3716 14.7002C27.3716 17.2852 26.5492 19.682 25.1554 21.6606C25.4687 22.017 25.7391 22.411 25.95 22.8395C26.2939 22.7736 26.6475 22.739 27.0071 22.739C27.1392 22.739 27.2668 22.7579 27.3969 22.7672C28.9495 20.4491 29.8599 17.6787 29.8599 14.7001C29.8599 6.59461 23.1628 0 14.9299 0C6.69773 0 0 6.59461 0 14.7001C0 20.9302 3.9636 26.254 9.53275 28.3901Z" fill="white" />
    </svg>
);

/* ─── Layout Constants ───────────────────────────────────────────────── */
const CX = 550, CY = 260;
const IW = 100, IH = 100;
const PW = 150, PH = 58;
const GAP = 12;

const L_ICON_X = 10;
const L_PILL_X = L_ICON_X + IW + GAP;     // 172
const L_CONN_X = L_PILL_X + PW;           // 322
const L_ICON_RX = L_ICON_X + IW;

const R_CONN_X = CX + (CX - L_CONN_X);    // 778
const R_PILL_X = R_CONN_X;
const R_ICON_X = 1100 - L_ICON_X - IW;      // 940

const YS = [80, 250, 420];

// ✅ ADD new index-aware functions
const leftPath = (y: number, i: number) => {
    if (i === 1) {
        // CENTER — keep straight
        return `M ${L_ICON_RX},${y} C ${L_ICON_RX + 140},${y} ${CX - 20},${y} ${CX},${CY}`;
    }
    // TOP (i=0) curves DOWN, BOTTOM (i=2) curves UP
    const cp2y = i === 0 ? CY - 90 : CY + 90;
    return `M ${L_ICON_RX},${y} C ${L_ICON_RX + 280},${y} ${CX - 60},${cp2y} ${CX},${CY}`;
};

const rightPath = (y: number, i: number) => {
    if (i === 1) {
        // CENTER — keep straight
        return `M ${R_ICON_X},${y} C ${R_ICON_X - 140},${y} ${CX + 20},${y} ${CX},${CY}`;
    }
    // TOP (i=0) curves DOWN, BOTTOM (i=2) curves UP
    const cp2y = i === 0 ? CY - 90 : CY + 90;
    return `M ${R_ICON_X},${y} C ${R_ICON_X - 280},${y} ${CX + 60},${cp2y} ${CX},${CY}`;
};


/* ─── Sub-Components ─────────────────────────────────────────────────── */
const IconBox = () => (
    <div style={{
        width: IW, height: IH, flexShrink: 0,
        backgroundColor: "#0f0f0f",
        borderRadius: 14,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
    }}>
        <motion.div
            animate={{ rotate: 360 }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
            <SolutionsSVG />
        </motion.div>
    </div>
);

const Pill = () => (
    <div style={{
        width: PW, height: PH, flexShrink: 0,
        position: "relative",
        top: "80px",
        backgroundColor: "#ffffff",
        border: "1.5px solid #c8d6ea",
        borderRadius: 40,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700, fontSize: 13.5, color: "#1a3468",
        lineHeight: 1.45, textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
    }}>
        Branch<br />Overcrowding
    </div>
);

// const ConnectorLines = () => (
//     <svg
//         viewBox="0 0 1100 520"
//         style={{
//             position: "absolute", inset: 0,
//             width: "100%", height: "100%",
//             pointerEvents: "none", zIndex: 1,
//             overflow: "visible",
//         }}
//     >
//         {YS.map((y, i) => (
//             <g key={i}>

//                 {/* ── LEFT SIDE ── */}

//                 {/* Blue tube — connects right edge of left icon to center */}
//                 <path
//                     d={leftPath(y, i)}
//                     stroke="#1e56a0"
//                     strokeWidth="10"
//                     fill="none"
//                     strokeLinecap="round"
//                 />
//                 {/* White dashes on top */}
//                 <path
//                     d={leftPath(y, i)}
//                     stroke="white"
//                     strokeWidth="2.8"
//                     strokeDasharray="7 6"
//                     fill="none"
//                     strokeLinecap="round"
//                 />
//                 {/* Arrowhead touching right edge of left icon */}
//                 <polygon
//                     points={`${L_ICON_RX},${y - 8} ${L_ICON_RX + 20},${y} ${L_ICON_RX},${y + 8}`}
//                     fill="#1e56a0"
//                 />

//                 {/* ── RIGHT SIDE ── */}

//                 {/* Blue tube — connects left edge of right icon to center */}
//                 <path
//                     d={rightPath(y, i)}
//                     stroke="#1e56a0"
//                     strokeWidth="10"
//                     fill="none"
//                     strokeLinecap="round"
//                 />
//                 {/* White dashes on top */}
//                 <path
//                     d={rightPath(y, i)}
//                     stroke="white"
//                     strokeWidth="2.8"
//                     strokeDasharray="7 6"
//                     fill="none"
//                     strokeLinecap="round"
//                 />
//                 {/* Arrowhead touching left edge of right icon */}
//                 <polygon
//                     points={`
//             ${R_ICON_X},${y - 8}
//             ${R_ICON_X - 20},${y}
//             ${R_ICON_X},${y + 8}
//           `}
//                     fill="#1e56a0"
//                 />

//             </g>
//         ))}
//     </svg>
// );

const ConnectorLines = () => (
    <svg
        viewBox="0 0 1100 520"
        style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            pointerEvents: "none", zIndex: 1,
            overflow: "visible",
        }}
    >
        {YS.map((y, i) => (
            <g key={i}>

                {/* ── LEFT SIDE ── */}

                {/* Layer 1 — Static blue tube */}
                <path
                    d={leftPath(y, i)}
                    stroke="#1e56a0"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Layer 2 — Static dotted overlay */}
                <path
                    d={leftPath(y, i)}
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="2.5"
                    strokeDasharray="3 11"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Layer 3 — ✅ ONLY ONE moving pulse */}
                <motion.path
                    d={leftPath(y, i)}
                    stroke="rgba(255,255,255,0.95)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="0.18 0.82"
                    animate={{ strokeDashoffset: [0, 1] }}
                    transition={{
                        duration: 1.6,
                        delay: i * 0.45,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.5,
                    }}
                />

                {/* ❌ REMOVED — faint trailing pulse was the culprit */}

                <polygon
                    points={`${L_ICON_RX},${y - 8} ${L_ICON_RX + 20},${y} ${L_ICON_RX},${y + 8}`}
                    fill="#1e56a0"
                />

                {/* ── RIGHT SIDE ── */}

                {/* Layer 1 — Static blue tube */}
                <path
                    d={rightPath(y, i)}
                    stroke="#1e56a0"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Layer 2 — Static dotted overlay */}
                <path
                    d={rightPath(y, i)}
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="2.5"
                    strokeDasharray="3 11"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Layer 3 — ✅ ONLY ONE moving pulse */}
                <motion.path
                    d={rightPath(y, i)}
                    stroke="rgba(255,255,255,0.95)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="0.18 0.82"
                    animate={{ strokeDashoffset: [0, 1] }}
                    transition={{
                        duration: 1.6,
                        delay: i * 0.45,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.5,
                    }}
                />

                {/* ❌ REMOVED — faint trailing pulse was the culprit */}

                <polygon
                    points={`
                        ${R_ICON_X},${y - 8}
                        ${R_ICON_X - 20},${y}
                        ${R_ICON_X},${y + 8}
                    `}
                    fill="#1e56a0"
                />

            </g>
        ))}
    </svg>
);
/* ─── Roadmap Component ──────────────────────────────────────────────── */
const Roadmap = () => (
    <div style={{
        backgroundColor: "#eef2f9",
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "'Inter','Segoe UI',Arial,sans-serif",
    }}>

        {/* Title */}
        <h1 style={{ margin: "0 0 52px", fontSize: 44, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1 }}>
            <span style={{ color: "#2B68C3" }}>Sed ut perspi </span>
            <span style={{ color: "#111827" }}>ciatis</span>
        </h1>

        {/* Canvas */}
        <div style={{ position: "relative", width: 1100, height: 520 }}>

            {/* ✅ STEP 1 — Add Lines HERE (first child, zIndex: 1) */}
            <ConnectorLines />

            <motion.div
                style={{
                    position: "absolute",
                    left: CX - 227,
                    top: CY - 227,
                    zIndex: 2,
                    pointerEvents: "none",
                    transformOrigin: "227px 227px", // ✅ rotate around SVG center point
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <CirclesSVG />
            </motion.div>

            {/* Hand icon */}
            <motion.div
                style={{
                    position: "absolute",
                    left: CX - 16,
                    top: CY - 22,
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <HandSVG />
            </motion.div>

            {/* ✅ STEP 4 — LEFT ICON BOXES (place here) */}
            {YS.map((y, i) => (
                <div key={`li${i}`} style={{
                    position: "absolute",
                    left: L_ICON_X,        // ✅ 55px from left
                    top: y - IH / 2,       // ✅ centered at row Y
                    zIndex: 5,
                }}>
                    <IconBox />
                </div>
            ))}

            {/* ✅ STEP 5 — LEFT PILLS ABOVE LINE (place here) */}
            {YS.map((y, i) => (
                <div key={`lp${i}`} style={{
                    position: "absolute",
                    left: L_PILL_X,              // ✅ 147px (right of icon + gap)
                    top: y - IH / 2 - 10 - PH,  // ✅ above icon top by 10px + pill height
                    zIndex: 6,
                }}>
                    <Pill />
                </div>
            ))}

            {/* ✅ STEP 6 — RIGHT ICON BOXES (place here) */}
            {YS.map((y, i) => (
                <div key={`ri${i}`} style={{
                    position: "absolute",
                    left: R_ICON_X,        // ✅ 967px (mirrored)
                    top: y - IH / 2,       // ✅ centered at row Y
                    zIndex: 5,
                }}>
                    <IconBox />
                </div>
            ))}

            {/* ✅ STEP 7 — RIGHT PILLS ABOVE LINE (place here) */}
            {YS.map((y, i) => (
                <div key={`rp${i}`} style={{
                    position: "absolute",
                    left: R_PILL_X,              // ✅ 801px (mirrored)
                    top: y - IH / 2 - 10 - PH,  // ✅ above icon top by 10px + pill height
                    zIndex: 6,
                }}>
                    <Pill />
                </div>
            ))}

        </div>
    </div>
);

export default Roadmap;