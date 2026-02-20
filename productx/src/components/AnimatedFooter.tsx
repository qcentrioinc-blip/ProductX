"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/img1.jpg", left: "8%", top: "40%" },
  { src: "/img2.jpg", left: "20%", top: "48%" },
  { src: "/img3.jpg", left: "32%", top: "55%" },
  { src: "/img4.jpg", left: "45%", top: "52%" },
  { src: "/img5.jpg", left: "60%", top: "50%" },
  { src: "/img6.jpg", left: "75%", top: "45%" },
  { src: "/img7.jpg", left: "88%", top: "38%" },
];

export default function FooterWaveSection() {
  return (
    <section className="relative w-full h-screen bg-[#efefef] overflow-hidden pt-16 pb-0">
      
      {/* ================= Footer Content ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm relative z-20">
        <div>
          <h4 className="font-semibold mb-4">Sitemap</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>Projects</li>
            <li>About us</li>
            <li>Sustainability</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Koningslinde 31</li>
            <li>7131 MP Lichtenvoorde</li>
            <li>Netherlands</li>
            <li>+31 (0)544 760 120</li>
            <li>info@company.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Socials</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div className="md:text-right">
          <p className="text-gray-500">Copyright © CFI 2026</p>
        </div>
      </div>

      {/* ================= Floating Images ================= */}
      <div className="relative h-[320px] mt-10 z-20">
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
    </section>
  );
}