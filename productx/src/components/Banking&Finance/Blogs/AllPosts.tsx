"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { P, H2 } from "../../../styles/Typography";

const categories = [
  "All Posts",
  "Banking",
  "Lorem ipsum",
  "High Tech",
  "Lorem ipsum 2",
  "Finance",
];

// ⭐ UPDATED → Exactly 25 posts
const posts = [
  { id: 1, title: "Data Analytics for Smarter Finance", description: "How financial institutions use predictive analytics to minimize risks and maximize growth.", author: "Sophia Lee", date: "SEPTEMBER 14, 2025", category: "Finance", image: "/Blogs/img1.jpg" },
  { id: 2, title: "Enterprise Automation Strategies", description: "Automation tools that are helping enterprises reduce operational costs and increase efficiency.", author: "John Carter", date: "SEPTEMBER 17, 2025", category: "Lorem ipsum 2", image: "/Blogs/img2.jpg" },
  { id: 3, title: "Digital Payments: The Future of Banking", description: "From NFC to biometric authentication — digital payments are evolving faster than ever.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "Banking", image: "/Blogs/img3.jpg" },
  { id: 4, title: "Analytics in High Tech", description: "Predictive analytics accelerating tech innovations.", author: "Sophia Lee", date: "SEPTEMBER 14, 2025", category: "High Tech", image: "/Blogs/img4.jpg" },
  { id: 5, title: "Smart Business Automation", description: "Automation tools reshaping business performance.", author: "John Carter", date: "SEPTEMBER 17, 2025", category: "Lorem ipsum", image: "/Blogs/img5.jpg" },
  { id: 6, title: "Modern Banking Transformations", description: "Digital-first banking technologies.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "Banking", image: "/Blogs/img6.jpg" },
  { id: 7, title: "Future of Finance Intelligence", description: "AI tools increasing financial transparency.", author: "Sophia Lee", date: "SEPTEMBER 14, 2025", category: "Finance", image: "/Blogs/img7.jpg" },
  { id: 8, title: "Enterprise Workflow Optimization", description: "Automation impact on enterprise workflows.", author: "John Carter", date: "SEPTEMBER 17, 2025", category: "Lorem ipsum 2", image: "/Blogs/img8.png" },
  { id: 9, title: "Tech Evolution 2025", description: "Emerging technologies dominating this decade.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "High Tech", image: "/Blogs/img9.jpg" },
  { id: 10, title: "Banking 4.0 Technologies", description: "Automation and AI in modern-day banking.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "Banking", image: "/Blogs/img6.jpg" },
  { id: 11, title: "Financial Market Insights", description: "Deep analytics shaping future markets.", author: "Sophia Lee", date: "SEPTEMBER 14, 2025", category: "Finance", image: "/Blogs/img7.jpg" },
  { id: 12, title: "Enterprise System Design", description: "Modern architecture for scalable enterprises.", author: "John Carter", date: "SEPTEMBER 17, 2025", category: "Lorem ipsum 2", image: "/Blogs/img8.png" },
  { id: 13, title: "High Tech Innovations 2025", description: "Breakthrough advancements in automation.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "High Tech", image: "/Blogs/img9.jpg" },
  { id: 14, title: "Modern Transaction Systems", description: "Futuristic payment ecosystems.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "Banking", image: "/Blogs/img6.jpg" },
  { id: 15, title: "Smart Finance Models", description: "Next-generation finance predictions.", author: "Sophia Lee", date: "SEPTEMBER 14, 2025", category: "Finance", image: "/Blogs/img7.jpg" },
  { id: 16, title: "Enterprise Automation 3.0", description: "Reinventing enterprise growth with AI.", author: "John Carter", date: "SEPTEMBER 17, 2025", category: "Lorem ipsum 2", image: "/Blogs/img8.png" },
  { id: 17, title: "Tech Trends Redefined", description: "Transformative technologies reshaping industries.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "High Tech", image: "/Blogs/img9.jpg" },
  { id: 18, title: "Next-Gen Banking Models", description: "AI-centric financial banking systems.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "Banking", image: "/Blogs/img6.jpg" },
  { id: 19, title: "Predictive Finance Analytics", description: "Future-oriented financial intelligence tools.", author: "Sophia Lee", date: "SEPTEMBER 14, 2025", category: "Finance", image: "/Blogs/img7.jpg" },
  { id: 20, title: "Automation for Enterprises", description: "AI-based optimization strategies.", author: "John Carter", date: "SEPTEMBER 17, 2025", category: "Lorem ipsum 2", image: "/Blogs/img8.png" },
  { id: 21, title: "High Tech System Evolution", description: "Systems engineered for advanced industries.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "High Tech", image: "/Blogs/img9.jpg" },
  { id: 22, title: "Banking Intelligence Tools", description: "Finance tech powering next-gen institutions.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "Lorem ipsum", image: "/Blogs/img6.jpg" },
  { id: 23, title: "Insight-Driven Finance", description: "The rise of intelligent finance systems.", author: "Sophia Lee", date: "SEPTEMBER 14, 2025", category: "Lorem ipsum", image: "/Blogs/img7.jpg" },
  { id: 24, title: "Future of Enterprise Scaling", description: "How enterprises scale using AI.", author: "John Carter", date: "SEPTEMBER 17, 2025", category: "Lorem ipsum", image: "/Blogs/img8.png" },
  { id: 25, title: "Digital Banking Evolution", description: "The new era of banking transformation.", author: "Rachel Green", date: "SEPTEMBER 20, 2025", category: "Lorem ipsum", image: "/Blogs/img9.jpg" },
];

export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("Sort By");
  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const POSTS_PER_PAGE = 9;

  const categoryFiltered = useMemo(() => {
    if (activeCategory === "All Posts") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const searchedFiltered = useMemo(() => {
    return categoryFiltered.filter((post) => {
      const text = (post.title + post.description + post.author).toLowerCase();
      return text.includes(searchTerm.toLowerCase());
    });
  }, [categoryFiltered, searchTerm]);

  const sortedPosts = useMemo(() => {
    let arr = [...searchedFiltered];

    if (sortType === "Latest") arr.sort((a, b) => (a.id < b.id ? 1 : -1));
    else if (sortType === "Most Viewed")
      arr.sort((a, b) =>
        a.description.length < b.description.length ? 1 : -1
      );
    else if (sortType === "A - Z") arr.sort((a, b) => a.title.localeCompare(b.title));

    return arr;
  }, [searchedFiltered, sortType]);

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return sortedPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage, sortedPosts]);

  return (
    <section className="w-full  py-10 bg-white">

      {/* ⭐⭐⭐ STICKY TOP BAR (NEW) ⭐⭐⭐ */}
      <div className="sticky top-0 z-50 bg-white pt-4 px-6 md:px-12">

        {/* HEADING + SEARCH */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-6">
          <H2 className="text-[#1A4ABE] font-bold">Sed ut perspiciatis</H2>

          <div className="relative w-full md:w-[300px] xl:w-[500px] flex-none">
            <input
              type="text"
              placeholder="Search posts"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border border-gray-300 rounded-md shadow-2xl py-3 px-6 pr-10"
            />
            <span className="absolute right-4 py-3 text-gray-500">🔍</span>
          </div>
        </div>

        {/* CATEGORIES + SORT */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex overflow-x-scroll flex-nowrap md:overflow-hidden gap-3 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full border flex-none ${
                  activeCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative ml-auto flex-none" ref={sortRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="px-4 py-2 rounded-full border border-gray-400 bg-white flex items-center gap-2"
            >
              {sortType}
              <span>▼</span>
            </button>

            {sortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border z-20">
                {["A - Z", "Latest", "Most Viewed"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSortType(opt);
                      setSortOpen(false);
                      setCurrentPage(1);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      sortType === opt ? "font-semibold" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* GRID (UNCHANGED) */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-6 px-6 md:px-12">
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="overflow-hidden h-[240px] sm:h-[260px] xl:h-[280px]">
              <img
                src={post.image}
                alt="Post"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-4 space-y-2">
              <P className="font-semibold text-gray-900">{post.title}</P>
              <P className="text-gray-600 leading-snug">{post.description}</P>

              <div className="flex items-center justify-between text-gray-500 text-sm pt-1">
                <span>✒ {post.author}</span>
                <span>📅 {post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-10">
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </section>
  );
}
