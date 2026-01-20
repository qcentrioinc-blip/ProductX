import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';
import { useLocation } from "react-router-dom";


const HWD = () => {
  const location = useLocation();
  const path = location.pathname;

  const isEHR = path.startsWith("/industries/ehr-and-pms");
  const isBanking = path.startsWith("/industries/banking-and-finance");
  const isHighTech = path.startsWith("/industries/high-tech");
  const isAI = location.pathname === "/industries/cloud-finops-ai";
  const COLORS = {
    ehr: {
      topBg: "#F5F5F5",
      bottomBg: "#B4E7CE",
      headingColor: "#166D48",
      textcolor: "#000000",
      CheckColor: "#A80040"


    },
    banking: {
      topBg: "#F5F5F5",
      bottomBg: "#C1D7F3",
      headingColor: "#2B68C3",
      textcolor: "#000000",
      CheckColor: "#A80040"
    },
    hightech: {
      topBg: "#141414",
      bottomBg: "#E7D6FF",
      headingColor: "#5B3FD1",
      textcolor: "#CCCCCC",
      CheckColor: "#A80040"
    },
    ai: {
      topBg: "#F5F5F5",
      bottomBg: "#0AC276",
      headingColor: "#020059",
      textcolor: "#141414",
      CheckColor: "#5551FF"

    }
  };

  const CARD_CONTENT = {
    ai: [
      {
        title: "Major Azure Cost Reduction",
        image:"/UseCase1.png",
        description:
          "A mature cloud team saved millions annually through advanced optimization and reserved instance strategies.",
        points: [
          "Identified $1.6M in savings via optimized Azure Reserved Instance purchases.",
          "Found an additional $3.8M through unique CloudDIET profiling and engineering insights.",
          "Recommended moving Azure Functions from Dedicated plan to Elastic Premium for scalability. ",
          "Disabled Defender for Storage on backup accounts, eliminating unnecessary high transaction costs. ",
          "Implemented 3-year Synapse RIs, achieving an 81% blended discount on runtime costs. ",
        ],
      },
     
      {
        title: " Retain Savings Long-Term",
        image:"/UseCase2.png",
        description:
          " CloudDIET helped a tech firm maintain 8x ROI with continuous optimization and secure profiling.",
        points: [

          "Used read-only access to analyze billing metadata and resource configurations only. ",
          "Targeted 60-70% savings in under six weeks using effort-based categorization. ",
          "Leveraged AI to identify unused messaging buses and unlinked integration accounts. ",
          "Optimized licensing and commercial terms across IaaS and PaaS service deployments.",
          "Ensured full customer control and zero access to sensitive data or workloads. ",
        ],
      },
       {
        title: "Multi-Cloud Waste Elimination",
          image:"/UseCase3.png",
        description:
          "An enterprise reduced cloud waste by 30% without compromising project outcomes or performance.",
        points: [
          "Profiled hundreds of resource configurations across AWS, Azure, and Google Cloud. ",
          "Identified and corrected over-provisioned App Services and misconfigured scale-out rules.",
          "Optimized Cosmos DB from expensive multi-master to cost-effective read replicas. ",
          "Recommended tier changes for Azure Files from Hot to Transaction Optimized. ",
          "Provided ongoing AI-driven measures to retain 80-90% of savings long-term.",
        ],
      },
    ],

    banking: [
      {
        title: "Fraud Detection Modernization",
        image: "/UseCase1.png",
        description:
          "Advanced analytics reduced fraud losses while improving customer trust.",
        points: [
          "Real-time transaction anomaly detection.",
          "Reduced false positives by 35%.",
          "Improved regulatory reporting accuracy.",
          "Scalable fraud pipelines.",
        ],
      },
      {
        title: "Cost-Efficient Core Banking",
        image: "/UseCase2.png",
        description:
          "Legacy systems optimized for modern banking workloads.",
        points: [
          "Reduced infrastructure costs by 28%.",
          "Improved batch processing times.",
          "Optimized storage and compute usage.",
          "Improved disaster recovery posture.",
        ],
      },
      {
        title: "Compliance Automation",
        image: "/UseCase3.png",
        description:
          "Automated compliance reduced risk and operational overhead.",
        points: [
          "Policy-as-code implementation.",
          "Continuous compliance monitoring.",
          "Audit preparation time reduced by 60%.",
          "Improved governance visibility.",
        ],
      },
    ],
  };



  let cards;

  if (isAI) cards = CARD_CONTENT.ai;
  else if (isBanking) cards = CARD_CONTENT.banking;
  else cards = CARD_CONTENT.ai; // fallback





  let palette;
  if (isEHR) palette = COLORS.ehr;
  else if (isBanking) palette = COLORS.banking;
  else if (isHighTech) palette = COLORS.hightech;
  else if (isAI) palette = COLORS.ai;
  else palette = COLORS.banking;

  const { topBg, bottomBg, headingColor, textcolor, CheckColor } = palette;

  const bottomTextColor = isAI ? "#F5F5F5" : textcolor;


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as Easing },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  const CardContent = ({ title, description, points, image }: { title: string; description: string; points: string[]; image: string }) => (
    <section>
      {/* Top Section */}
      <div className="py-6 px-4 pb-12 md:p-8" style={{ backgroundColor: topBg }}>
     <div className="w-18 h-18 rounded-full mb-2 overflow-hidden">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-contain p-2"
  />
</div>


        
        <h4
          className="mb-4 text-[16px] md:text-[20px] lg:text-[24px] font-bricolage font-bold"
          style={{ color: headingColor }}
        >
          {title}
        </h4>

        <p style={{ color: textcolor }} >{description}</p>
      </div>

      {/* Bottom Section */}
      <div
        className="pl-6 pr-10 py-10 xl:py-18"
        style={{ backgroundColor: bottomBg }}
      >
        <ul className="space-y-4">
          {points.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <Check size={25} style={{ color: CheckColor }} />
              <p style={{ color: bottomTextColor }}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <div className="w-full relative bg-white flex flex-col items-center py-10 sm:py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1360px] w-full">

        {/* HEADINGS */}
        <div className="flex flex-col space-y-4 sm:space-y-6 mb-10">
          <motion.h1
            className="font-medium text-2xl text-[#2A2A2A]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-1 rounded-full bg-gray-400"></div>
              {/* {"Quis autim".split(" ").map((word, wordIndex) => (
                <span key={wordIndex}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={itemVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))} */}
              Your Success
            </div>
          </motion.h1>

          <motion.h2
            className="text-[#2A2A2A] font-bricolage font-semibold text-[24px] md:text-[32px] lg:text-[64px] leading-none"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* {"Real-World Customer Success Stories ".split("").map((char, i) => (
              <motion.span key={i} variants={itemVariants}>
                {char}
              </motion.span>
            ))} */}
            Real-World  Use Cases
          </motion.h2>
        </div>

        {/* CARDS — MOBILE CAROUSEL / DESKTOP GRID */}
        <div
          className="
    flex gap-6 overflow-x-auto snap-x snap-mandatory
    xl:overflow-visible xl:grid
    xl:grid-cols-3
    sm:gap-14
    pb-4
    scrollbar-hide
  "
        >

          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="relative rounded-md overflow-hidden shadow-lg snap-center flex-shrink-0
               w-[85%] md:w-[50%] xl:w-auto min-h-[420px] xl:min-h-[600px]"
              style={{ backgroundColor: bottomBg }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CardContent {...card} />
            </motion.div>
          ))}

        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HWD;