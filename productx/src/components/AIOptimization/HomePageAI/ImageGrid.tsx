import { ArrowRight } from "lucide-react";
import { H2, H3, P } from "../../../styles/Typography";



type Item =
  | {
      title: string;
      description: string;
      image: string;
      video?: never;
      reverse?: boolean;
      cta: string;
    }
  | {
      title: string;
      description: string;
      video: string;
      image?: never;
      reverse?: boolean;
      cta: string;
    };

import { useEffect, useRef, useState } from "react";

function ViewportVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    if (isVisible) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isVisible]);

  return (
    <video
      ref={ref}
      src={isVisible ? src : undefined}
      muted
      loop
      playsInline
      preload="none"
      className="w-full h-full aspect-video object-cover "
    />
  );
}
const items: Item[] = [
  {
    title: "Secure Access",
    description:
      "Provide read-only access to billing and configuration metadata. We never access your data, files, databases, or applications. CloudDIET operates at the Azure control plane level using Resource Manager APIs, ensuring zero performance impact. Your credentials are stored in an HSM-backed vault with a zero-trust security model, and you can revoke access anytime. ",
    cta: "Get Started",
    image: "/AIProduct/CDImage.webp",
  },
  {
    title: "AI Analysis",
    description:
      "Our profiling engine analyzes hundreds of measures to identify misconfigurations, waste, and optimization opportunities across your cloud estate. CloudDIET examines resource configurations, usage metrics, and billing data to pinpoint over-provisioning, unused capacity, and suboptimal SKUs. It builds baselines and trends over days or weeks to surface both immediate and long-term savings opportunities.",
    video: "/Video/RealiseSaving.mp4",
    cta: "Learn More",
    reverse: true,
  },
  {
    title: "Realize Savings",
    description:
      " We provide an assured savings estimate before implementation. Our team helps execute recommended optimizations, and you only pay a percentage of the savings realized. This performance-based model ensures you keep 80-90% of savings while we handle the work. Most customers see positive ROI within the first month of using CloudDIET.",
    video: "/Video/AIAnalysis.mp4",
    cta: "See Results",
  },
];

export default function ImageGrid() {
  return (
    <section className="relative max-w-8xl overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <H2 className="mb-6 text-[#254D70]">How CloudDIET Works For You</H2>
          <P className="mb-14   max-w-sm px-5 md:px-0 md:max-w-lg lg:max-w-2xl xl:mb-20">A secure, four-step process combining AI-powered analysis with engineering expertise to guarantee cloud savings, without ever accessing your data.</P>
        </div>
        <div className="space-y-12 max-w-7xl xl:mx-auto mx-10 pb-10"> 
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 gap-x-20">
              <div className={`${item.reverse ? "md:order-2" : ""}`}>
                <div className="w-full rounded-md overflow-hidden">
  {item.video ? (
    <ViewportVideo src={item.video} />
  ) : (
    <img
      src={item.image}
      alt={item.title}
      width={800}
      height={600}
      decoding="async"
      className="w-full h-full aspect-auto object-fit"
      loading="lazy"
    />
  )}
</div>
              </div>
              <div className={`${item.reverse ? "md:order-1 max-w-xl" : "max-w-xl"}`}>
                <H3 className="mb-3 text-[#254D70]">{item.title}</H3>
                <P className="mb-4  tracking-wide leading-snug">{item.description}</P>
                <div className="flex mt-8 flex-row items-center space-x-2">
                  <a href="https://clouddiet.ai/signup" target="_blank" className="flex items-center gap-2">
                    <P className="font-bold">{item.cta}</P>
                    <span><ArrowRight /></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}