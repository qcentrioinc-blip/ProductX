 
import type { ReactNode } from "react";
import { H1, P } from "../../../styles/Typography";
import { ContactUsAI } from "../../../styles/Button";
import { useParams } from "react-router-dom";

type BuiltForKey="digital-native"|"enterprises"|"smb"

const CONTENT_MAP: Record<
  BuiltForKey,
  {
    heading: string | ReactNode;
    description: string;
    cta: string;
    
    bgImage: string;
  }
> = {

 "digital-native": {
    heading: (<>
    Scale Your SaaS Profitably <br/> {" "} With CloudDIET
    </>),
    description:
      " CloudDIET fixes Azure Functions and scale issues so SaaS teams save costs without hurting performance or customer growth.",
    cta: "Optimize Now",
      bgImage: "/BuiltFor/DigitalNativeBG.png",
  },
  enterprises: {
    heading: (
    <>
      Optimize Multi <br />
      Subscription{" "}
       Azure Costs 
    </>
  ),
    description:
      "CloudDIET profiles your infrastructure usage patterns to automatically cut waste across all Azure subscriptions safely..",
    cta: "Start Your Scan",
        bgImage: "/BuiltFor/BuiltEnter.png",
  },
  smb: {
    heading: "Assured Azure savings for Large enterprises. ",
    description:
      " Cut multi-region Azure waste, keep compliance strong, and protect every critical workload without service risk.",
    cta: "Get Started",
        bgImage: "/BuiltFor/SMBBG.png",
  },
};

export default function TitleSecAI() {
    const { builtForType } = useParams<{ builtForType: BuiltForKey }>();

  const content = CONTENT_MAP[builtForType ?? "enterprises"];
  return (
    <section 
      className="w-full  h-[60vh] md:h-[50vh] xl:h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${content.bgImage})` }}
    >
      {/* DARK OVERLAY (REMOVE IF NOT NEEDED) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-10 xl:px-10 ">
          
          <div className="w-full md:w-[100%] space-y-6">
            <H1 className="text-white leading-tight">
              {content.heading}
            </H1>
            <P   className="text-[#CCCCCC] max-w-xl leading-tight">
             {content.description}
            </P>

            <ContactUsAI>
                  <span className="text-sm font-semibold">{content.cta}</span>
           
            </ContactUsAI>
          
            
          </div>

        </div>
      </div>
    </section>
  );
}
