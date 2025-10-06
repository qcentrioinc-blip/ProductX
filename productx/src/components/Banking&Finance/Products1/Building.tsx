"use client"

import { useState } from "react"
import { Typography, Chip } from "@mui/material"
import { motion } from "motion/react";

type FilterKey = "All" | "Lorem" | "Consectetur" | "Accusamus" | "Sed ut" | "Aspernatur";

type ContentData = {
  [key in FilterKey]: {
    paragraphs: string[];
    stats: string[];
    image: string;
    title: string;
  };
};

const Building = () => {
  const contentData: ContentData = {
    All: {
      paragraphs: [
        "This is the overview for 'All' projects. It shows a summary of everything happening across all sectors, providing a comprehensive look at our entire portfolio.",
        "From coastal resorts to urban developments, our work spans various domains. This section highlights the breadth and diversity of our architectural and engineering achievements.",
      ],
      stats: ["45%", "0.5x", "2x"],
      image: "/Building.jpg",
      title: "SERENITY SUITES - COASTAL RESORT",
    },
    Lorem: {
      paragraphs: [
        "Content for 'Lorem'. This focuses on our residential projects. We blend modern aesthetics with functional design to create comfortable and inspiring living spaces.",
        "Our team pays meticulous attention to detail, ensuring every aspect of the project, from materials to layout, meets the highest standards of quality.",
      ],
      stats: ["80%", "1.2x", "3x"],
      image: "/Building.jpg",
      title: "SERENITY SUITES - COASTAL RESORT",
    },
    Consectetur: {
      paragraphs: [
        "Here is the specific content for 'Consectetur'. This details our commercial ventures, including office buildings and retail spaces designed for productivity and engagement.",
        "We prioritize sustainable building practices and innovative technology to create environmentally friendly and efficient commercial hubs.",
      ],
      stats: ["65%", "0.9x", "2.5x"],
      image: "/Building.jpg",
      title: "SERENITY SUITES - COASTAL RESORT",
    },
    Accusamus: {
      paragraphs: [
        "This section is all about 'Accusamus', which covers our hospitality projects. We design hotels and resorts that offer unforgettable experiences.",
      ],
      stats: ["95%", "1.8x", "5x"],
      image: "/Building.jpg",
      title: "SERENITY SUITES - COASTAL RESORT",
    },
    "Sed ut": {
      paragraphs: [
        "The 'Sed ut' filter shows our public and institutional projects, such as museums, libraries, and government buildings that serve the community.",
        "Functionality, accessibility, and civic pride are the core principles that guide our design process for these important public spaces.",
      ],
      stats: ["30%", "0.4x", "1.5x"],
      image: "/Building.jpg",
      title: "SERENITY SUITES - COASTAL RESORT",
    },
    Aspernatur: {
      paragraphs: [
        "Finally, 'Aspernatur' highlights our experimental and futuristic designs. This is where we push the boundaries of conventional architecture.",
      ],
      stats: ["50%", "2.5x", "10x"],
      image: "/Building.jpg",
      title: "SERENITY SUITES - COASTAL RESORT",
    },
  }
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All")
  const filters: FilterKey[] = ["All", "Lorem", "Consectetur", "Accusamus", "Sed ut", "Aspernatur"];

  const currentContent = contentData[activeFilter]


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="sm:text-5xl lg:text-[40px] md:text-5xl font-bold text-[#2A2A2A] mb-6" style={{ fontFamily: 'Bricolage Grotesque' }}>Itaque earum rerum hic</h1>
        <p className="sm:text-2xl lg:text-[20px] text-[#141414] max-w-2xl mx-auto mb-12" style={{ fontFamily: 'Quicksand' }}>
          From fast-moving startups to structured enterprises, Taskos adapts to your team's real-world workflows — not
          the other way around.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-[16px] font-medium transition-all duration-200 ${activeFilter === filter
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow-sm border border-gray-200"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - 50/50 Split */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Side - Building Image (50%) */}
        <div className="lg:w-1/2 relative">
          <motion.div className="h-full relative overflow-hidden"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}

          >
            <img
              src={currentContent.image}
              alt={currentContent.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6">
              <Typography
                variant="h6"
                className="text-white font-bold tracking-wide"
                sx={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                SERENITY SUITES - COASTAL RESORT
              </Typography>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Content (50%) */}
        {/* <div className="lg:w-1/2 bg-white p-3 lg:p-6 flex flex-col justify-center">
          
          <div className="flex gap-2 mb-8">
            <Chip label={activeFilter} size="small" className="bg-gray-100 text-gray-700" />
          </div>

          
          <div className="space-y-6">
            {currentContent.paragraphs.map((paragraph, index) => (
              <Typography key={index} variant="body1" className="text-gray-700 leading-relaxed">
                {paragraph}
              </Typography>
            ))}
          </div>

          <hr className="my-12 border-b border-gray-400" />
          
          <div className="flex gap-12">
            {currentContent.stats.map((stat, index) => (
              <div key={index}>
                <Typography variant="h2" className="text-5xl font-bold text-gray-900">
                  {stat}
                </Typography>
              </div>
            ))}
          </div>
        </div> */}

        <div className="lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col">
          <div>
            <div className="flex gap-2 mb-8">
              <Chip label={activeFilter} size="small" className="bg-gray-100 text-gray-700" />
            </div>

            <div className="space-y-6">
              {currentContent.paragraphs.map((paragraph, index) => (
                <Typography key={index} variant="body1" className="text-gray-700 leading-relaxed">
                  {paragraph}
                </Typography>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-12 lg:pt-0">
            <hr className="lg:mb-12 border-b border-gray-400" />

            <div className="flex gap-8 lg:gap-12 mt-4 lg:mt-0">
              {currentContent.stats.map((stat, index) => (
                <div key={index}>
                  <Typography variant="h2" className="text-5xl font-medium text-gray-900">
                    {stat}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Building
