"use client";

import { H1, H3, P} from "../../../styles/Typography";
import { useRef, useEffect, useState } from "react";

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const setItemRef0 = (el: HTMLDivElement | null) => { itemRefs.current[0] = el; };
  const setItemRef1 = (el: HTMLDivElement | null) => { itemRefs.current[1] = el; };
  const setItemRef2 = (el: HTMLDivElement | null) => { itemRefs.current[2] = el; };

  return (
    <section ref={sectionRef} className="max-w-8xl mx-10 px-6 md:px-12 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT BLOCK – 60% */}
        <div className="lg:basis-[60%] w-full">
          <H1 
            className="leading-tight text-black max-w-[750px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            Lorem ipsum dolor 
            , consect adipis 
            ipsum
          </H1>

          {/* IMAGE */}
          <div 
            className="mt-26"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
            }}
          >
            <img
              src="/MarketPlace/img9.png"
              alt="Team"
              width={800}
              height={600}
              className="rounded-xl w-full object-cover"
              style={{
                transition: 'all 0.8s ease-out'
              }}
            />
          </div>
        </div>

        {/* RIGHT BLOCK – 40% */}
        <div className="lg:basis-[40%] w-full flex flex-col gap-10 xl:mt-75">

          {/* ITEM 1 */}
          <div 
            ref={setItemRef0}
            className="flex items-start gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s'
            }}
          >
            <div className="w-20 h-10 bg-blue-600 rounded-full" />
            <div>
              <H3 className="text-xl font-semibold text-black mb-6">
                Lorem ipsum dolor consect
              </H3>
              <P className="text-gray-600 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
                irure dolor in reprehenderit in voluptate aute irure dolor in
              </P>
            </div>
          </div>

          {/* ITEM 2 */}
          <div 
            ref={setItemRef1}
            className="flex items-start gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s'
            }}
          >
            <div className="w-20 h-10 bg-blue-600 rounded-full" />
            <div>
              <H3 className="text-xl font-semibold text-black mb-6">
                Lorem ipsum dolor consect
              </H3>
              <P className="text-gray-600 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
                irure dolor in reprehenderit in voluptate aute irure dolor in
              </P>
            </div>
          </div>

          {/* ITEM 3 */}
          <div 
            ref={setItemRef2}
            className="flex items-start gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.0s'
            }}
          >
            <div className="w-20 h-10 bg-blue-600 rounded-full" />
            <div>
              <H3 className="text-xl font-semibold text-black mb-6">
                Lorem ipsum dolor consect
              </H3>
              <P className="text-gray-600 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate velit Duis aute
                irure dolor in reprehenderit in voluptate aute irure dolor in
              </P>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}