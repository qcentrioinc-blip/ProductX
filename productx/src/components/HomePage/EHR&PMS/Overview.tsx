import React from "react";
import { H4EHR, P } from "../../../styles/Typography";

type OverviewItem = {
  title: string;
  description: string;
  image:string;
};

const items: OverviewItem[] = [
  {
    title: "Truly Unified",
    description:
      "Our platform integrates clinical, administrative, and financial workflows into one seamless platform.   ",
  image:"/EHRIcons/HandsTogether.svg",
},
  {
    title: "Exceptional Support",
    description:
      "We provide 24/7/365 support with rapid response and zero server downtime for your practice.   ",
   image:"/EHRIcons/UserHeadset.svg",
},
  {
    title: "Proven Efficiency",
    description:
      "Unified Clinicapp streamlines documentation and billing for faster workflows and revenue. ",
   image:"/EHRIcons/Tachometer.svg",
},
];

const Overview: React.FC = () => {
  return (
    <section className="w-full bg-[#EEEEEE] py-10 px-4 xl:px-0">
      <div className="xl:mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-md   p-6"
            >
              {/* Left Circle */}
           

              {/* Text Content */}
              <div className="flex flex-col space-y-4">
                   <img className="h-12 w-12 shrink-0 rounded-full overflow-visible " src={item.image} />
                <H4EHR className="mb-2">{item.title}</H4EHR>
                <P className="max-w-md">{item.description}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
