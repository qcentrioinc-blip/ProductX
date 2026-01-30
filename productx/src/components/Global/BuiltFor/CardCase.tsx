import { H2, H4, P } from "../../../styles/Typography";
import {   useParams } from "react-router-dom";
 
 ;
 
const CARD_CONFIG: Record<
  string,
  Record<
    string,
    {
      bg: string;
     
      heading: string;
      cards: {
        id: number;
        title: string;
        desc: string;
        image: string;
      }[];
    }
  >
> = {
  "cloud-finops-ai": {
    enterprises: {
      bg: "#FAFAFA",
   
      heading: " Azure Spend Issues",
      cards: [
        { id: 1, title: "Hidden Waste", desc: "Oversized VMs, storage, and PaaS services cost money across subscriptions you manage" , image:"/BuiltFor/Recycle.svg" },
        { id: 2, title: "Inefficient Planning", desc: "Wrong SKUs, licenses, and purchase options increase bills you cannot easily see. ",image:"/BuiltFor/Danger.svg" },
        { id: 3, title: "No Visibility", desc: "Multi-environment costs hide in configs and usage patterns. ",image:"/BuiltFor/eye.svg" },
      ],
    },
 
    "saas-application-providers": {
    bg: "#FAFAFA",
     
      heading: "SaaS Cost Problems",
      cards: [
        { id: 1, title: "Scale Waste", desc: "App Services and Functions run fixed without auto-scaling in SaaS apps. ", image:"/BuiltFor/BalanceScale.svg" },
        { id: 2, title: "Unused Accounts", desc: "Integration accounts and registries sit idle after CI/CD deployments. ", image:"/BuiltFor/BlockUser.svg" },
        { id: 3, title: "Event Overload", desc: "Event Hubs and messaging provisioned beyond real SaaS traffic needs. ", image:"/BuiltFor/Calender.svg"   },
      ],
    },
 
    "regulated-large-enterprise": {
      bg: "#FAFAFA",
   
      heading: "Industry Struggles Today",
      cards: [
        { id: 1, title: " Cost Visibility", desc: "Fragmented views hide waste across regions, services, and business units. ",image:"/BuiltFor/OpenEye.svg"  },
        { id: 2, title: "Risk Constraints", desc: " Tight uptime, security, and compliance rules block aggressive optimization moves.  " ,image:"/BuiltFor/Danger2.svg" },
        { id: 3, title: " Tool Overload", desc: " Too many dashboards, that show costs but no safe way to reduce spend.",image:"/BuiltFor/performanc.svg"  },
      ],
    },
  },
 
  "banking-and-finance": {
    banks: {
      bg: "#F2F2F2",
 
      heading: "Technology Challenges in Banking",
      cards: [
        { id: 1, title: "Legacy Infrastructure", desc: "Aging systems slow innovation." ,image:"/BuiltFor/Recycle.png" },
        { id: 2, title: "Regulatory Complexity", desc: "Compliance increases operational cost.",image:"/BuiltFor/Recycle.png"  },
        { id: 3, title: "Fraud Risk", desc: "Real-time detection requires advanced systems.",image:"/BuiltFor/Recycle.png"  },
      ],
    },
 
    nbfc: {
      bg: "#F2F2F2",
     
      heading: "NBFC Operational Challenges",
      cards: [
        { id: 1, title: "Rapid Scaling Needs", desc: "Growth without cost overruns is critical.",image:"/BuiltFor/Recycle.png"  },
        { id: 2, title: "Risk Management", desc: "Credit risk requires precision.",image:"/BuiltFor/Recycle.png"  },
        { id: 3, title: "Data Visibility", desc: "Fragmented data reduces insight.",image:"/BuiltFor/Recycle.png"  },
      ],
    },
 
    "credit-union": {
      bg: "#F2F2F2",
      heading: "Credit Union Technology Gaps",
      cards: [
        { id: 1, title: "Limited IT Budgets", desc: "Cost efficiency is essential.",image:"/BuiltFor/Recycle.png"  },
        { id: 2, title: "Member Experience", desc: "Digital expectations are rising." ,image:"/BuiltFor/Recycle.png" },
        { id: 3, title: "Security Concerns", desc: "Protecting member data is critical.",image:"/BuiltFor/Recycle.png" },
      ],
    },
  },
 
  "ehr-and-pms": {
    hospitals: {
      bg: "#EEFDD9",
     
      heading: "Hospital System Challenges",
      cards: [
        { id: 1, title: "Fragmented Systems", desc: "Disconnected platforms slow care delivery." ,image:"/BuiltFor/Recycle.png" },
        { id: 2, title: "Data Interoperability", desc: "Clinical data is siloed.",image:"/BuiltFor/Recycle.png" },
        { id: 3, title: "Operational Inefficiency", desc: "Manual workflows increase cost.",image:"/BuiltFor/Recycle.png" },
      ],
    },
 
    clinics: {
      bg: "#EEFDD9",
     
      heading: "Clinic Management Challenges",
      cards: [
        { id: 1, title: "Administrative Overload", desc: "Staff spend too much time on admin tasks.",image:"/BuiltFor/Recycle.png"  },
        { id: 2, title: "Limited Scalability", desc: "Systems don’t grow with clinics.",image:"/BuiltFor/Recycle.png"  },
        { id: 3, title: "Patient Experience", desc: "Slow processes impact satisfaction.",image:"/BuiltFor/Recycle.png" },
      ],
    },
  },
 
  "high-tech": {
    startups: {
      bg: "#EFEFEF",
       
      heading: "Startup Engineering Challenges",
      cards: [
        { id: 1, title: "Speed vs Stability", desc: "Fast shipping introduces technical debt.",image:"/BuiltFor/Recycle.png"  },
        { id: 2, title: "Cost Visibility", desc: "Cloud spend grows unnoticed.",image:"/BuiltFor/Recycle.png" },
        { id: 3, title: "Scaling Infrastructure", desc: "Systems break under growth.",image:"/BuiltFor/Recycle.png" },
      ],
    },
 
    enterprises: {
      bg: "#EFEFEF",
 
      heading: "Enterprise High-Tech Challenges",
      cards: [
        { id: 1, title: "Complex Architectures", desc: "Large systems are difficult to manage." ,image:"/BuiltFor/Recycle.png" },
        { id: 2, title: "Security at Scale", desc: "Risk increases with complexity.",image:"/BuiltFor/Recycle.png" },
        { id: 3, title: "Operational Efficiency", desc: "Optimization lags innovation.",image:"/BuiltFor/Recycle.png" },
      ],
    },
  },
};
 
export default function Cardcase() {
    const { industry, builtForType } = useParams<{
    industry: string;
    builtForType: string;
  }>();
 
  const config =
    CARD_CONFIG[industry ?? ""]?.[builtForType ?? ""];
 
  if (!config) return null;
 
 
  return (
    <section
      className="relative w-full py-10 overflow-hidden"
      style={{ backgroundColor: config.bg }}
    >
      {/* RIGHT-SIDE DIAGONAL IMAGE */}
      <div className=" hidden lg:block absolute top-[-5%] -right-10 h-full w-[17%] pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-right bg-no-repeat animate-rotateScale"
          // style={{
          //   backgroundImage: `url('${config.image}')`,
          //   transform: "rotate(14deg) scale(1.5)",
          //   transformOrigin: "top right",
          // }}
        ></div>
      </div>
 
      {/* CONTENT WRAPPER */}
      <div className="relative max-w-8xl mx-10 md:px-10 xl:pr-40">
        <H2 className="mb-10 text-[#254D70]">{config.heading}</H2>
 
        {/* CARDS GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {config.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-md shadow-sm border border-gray-200 px-8 xl:p-8 flex flex-col min-h-[300px] transition-all duration-300 hover:bg-white hover:shadow-lg"
             
            >
              {/* Placeholder Circle */}
              <div className="w-20 h-20    mt-10">
                <img src={card.image} alt={card.title} className="w-full h-full object-contain p-4" />
              </div>
 
              {/* Title */}
              <H4 className="mt-6">{card.title}</H4>
 
              {/* Description */}
              <P className="leading-relaxed mt-6">{card.desc}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}