"use client";
import { useState, useEffect } from "react";
import { H2, H3, P } from "../../../styles/Typography";
import { ContactUs } from "../../../styles/Button";
import ContactDrawer from "../Navbar/ContactDrawer";

/* FEATURE BLOCK */
const FeatureBlock = ({ title, content }: { title: string; content: string }) => (
  <div className="flex flex-col items-start w-full">
    <span className="text-5xl font-bold text-[#F99526] mb-8">+</span>
    <H3 className="mb-3">{title}</H3>
    <P className="text-gray-600 text-base leading-relaxed">{content}</P>
  </div>
);

export default function FeatureBlockSec() {
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
      <div className="h-auto bg-white p-6 sm:p-20 lg:p-20">
        <div className="max-w-7xl mx-auto">

          {/* MOBILE / TABLET / iPAD PRO */}
          {!isDesktop && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <H2>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500">
                    Sed ut perspiciatis Unde
                  </span>
                </H2>

                <ContactUs
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDrawerOpen(true);
                  }}
                  className="w-fit transition-transform hover:scale-105 active:scale-95"
                >
                  CONTACT
                </ContactUs>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <FeatureBlock title="Duis aute irure" content="reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                <FeatureBlock title="Duis aute irure" content="reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </div>
            </div>
          )}

          {/* DESKTOP — EXACT ORIGINAL */}
          {isDesktop && (
            <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">

              <div className="lg:w-3/5 flex flex-col items-start">
                <H2 className="mb-10">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500">
                    Sed ut perspiciatis Unde
                  </span>
                </H2>

                <ContactUs
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDrawerOpen(true);
                  }}
                  className="w-fit transition-transform hover:scale-105 active:scale-95"
                >
                  CONTACT
                </ContactUs>
              </div>

              <div className="lg:w-3/5">
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-6 lg:mt-0">
                  <FeatureBlock title="Duis aute irure" content="reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                  <FeatureBlock title="Duis aute irure" content="reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
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
