"use client";

import { motion } from "framer-motion";
import { H4, P } from "../styles/Typography";

const images = [
  { src: "/bg_image.webp", left: "8%", top: "-10%" },
  { src: "/Audit.png", left: "20%", top: "10%" },
  { src: "/Audit.webp", left: "32%", top: "20%" },
  { src: "/BNFBG.jpg", left: "45%", top: "24%" },
  { src: "/Building.jpg", left: "60%", top: "18%" },
  { src: "/ContactPic.png", left: "75%", top: "10%" },
  { src: "/digitalnative.webp", left: "88%", top: "-20%" },
];

export default function FooterWaveSection() {
  return (
    <section className="relative w-full h-full bg-[#efefef] overflow-hidden py-16">
      
      {/* ================= Footer Content ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm relative z-20">
        <div>
          <H4 className="font-semibold mb-4">Industries</H4>
          <ul className="space-y-2 text-black hover:cursor-pointer">
            <a href="/industries/cloud-finops-ai" target="_blank"><li className="mb-3 hover:text-gray-600 hover:underline ">Cloud Finops AI</li></a>
            <a href="/industries/ehr-and-pms" target="_blank"><li className="mb-3 hover:text-gray-600 hover:underline ">Unified Healthcare</li></a>
            <a href="/industries/banking-and-finance" target="_blank"><li className="mb-3 hover:text-gray-600 hover:underline ">Banking and Finance</li></a>
            
            
          </ul>
        </div>

        <div>
          <H4 className="font-semibold mb-4">Quick Links</H4>
          <ul className="space-y-2 text-black hover:cursor-pointer">
            <li>
                <a
                  href="/marketplace"
                  className="inline-block hover:text-gray-600 hover:underline"
                >
                  Marketplace
                </a>
              </li>
            <li>
                <a
                  href="/platform"
                  className="inline-block hover:text-gray-600 hover:underline"
                >
                  Platform
                </a>
              </li>
            
          </ul>
        </div>

        <div>
          <H4 className="font-semibold mb-4">Contact</H4>
          <ul className="space-y-2 text-black hover:cursor-pointer">
            <li className="hover:text-gray-600 hover:underline">sales@qnest.com</li>
            
          </ul>
        </div>

        <div className="md:text-right">
          <P className="text-black">Copyright © CFI 2026</P>
        </div>
      </div>

      {/* ================= Floating Images ================= */}
      <div className="relative h-[320px] mt-10 z-20 hidden xl:block">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="absolute w-28 h-28 object-cover rounded-md shadow-md"
            style={{ left: img.left, top: img.top }}
          />
        ))}
      </div>

      {/* ================= Curve Images ================= */}
      <div className="hidden xl:block">

      {/* Top Curve */}
      <img
        src="/kycShape1.png"
        alt=""
        className="absolute bottom-32 left-0 w-full z-0 pointer-events-none select-none"
      />

      {/* Bottom Curve */}
      <img
        src="/kycShape2.png"
        alt=""
        className="absolute bottom-0 left-0 w-full z-0 pointer-events-none select-none"
      />
      </div>
    </section>
  );
}