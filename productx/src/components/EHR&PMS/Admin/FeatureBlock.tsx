"use client";
import { useState, useEffect } from "react";
import { H2, H3, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
import ContactDrawer from "../Navbar/ContactDrawer";

/* FEATURE BLOCK */
type FeatureBlockContent = {
  heading: string;
  cta:string;
  features: {
    title: string;
    content: string;
  }[];
};

type FeatureBlockSecProps = {
  content: FeatureBlockContent;
};


const FeatureBlock = ({ title, content }: { title: string; content: string }) => (
  <div className="flex flex-col items-start w-full">
    <span className="text-6xl font-bold text-[#F99526] mb-8">+</span>
    <H3 className="mb-3">{title}</H3>
    <P className=" text-base leading-relaxed">{content}</P>
  </div>
);

export default function FeatureBlockSec({ content }: FeatureBlockSecProps) {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1280);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <div className="h-auto bg-[#F4F4F4] px-4 py-10 ">
        <div className="max-w-7xl xl:px-0 px-4 xl:mx-auto">

          {/* MOBILE / TABLET / iPAD PRO */}
          {!isDesktop && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <H2 className="text-[#008280]">
  {content.heading}
</H2>


                <ContactUs
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDrawerOpen(true);
                  }}
                  className="w-fit transition-transform hover:scale-105 active:scale-95"
                >
                {content.cta}
                </ContactUs>
              </div>

             <div className="flex flex-col sm:flex-row gap-8">
  {content.features.map((item, index) => (
    <FeatureBlock
      key={index}
      title={item.title}
      content={item.content}
    />
  ))}
</div>

            </div>
          )}

          {/* DESKTOP — EXACT ORIGINAL */}
          {isDesktop && (
            <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">

              <div className="lg:w-3/5 flex flex-col items-start">
                <H2 className="text-[#008280]">
  {content.heading}
</H2>


                <ContactUs
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDrawerOpen(true);
                  }}
                  className="w-fit mt-4 transition-transform hover:scale-105 active:scale-95"
                >
               {content.cta}
                </ContactUs>
              </div>

              <div className="lg:w-3/5">
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mt-6 lg:mt-0">
  {content.features.map((item, index) => (
    <FeatureBlock
      key={index}
      title={item.title}
      content={item.content}
    />
  ))}
</div>

              </div>

            </div>
          )}

        </div>
      </div>

      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
