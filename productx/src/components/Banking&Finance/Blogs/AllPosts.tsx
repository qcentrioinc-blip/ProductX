"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { P, H2 } from "../../../styles/Typography"; // ⭐ Make sure H2 is available

const categories = [
  "All Posts",
  "Banking",
  "Lorem ipsum",
  "High Tech",
  "Lorem ipsum 2",
  "Finance",
];

// ⭐ FULL MOCK POSTS (UNCHANGED)
const posts = [
  {
    id: 1,
    title: "Data Analytics for Smarter Finance",
    description:
      "How financial institutions use predictive analytics to minimize risks and maximize growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Finance",
    image: "/Blogs/img1.jpg",
  },
  {
    id: 2,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs and increase efficiency.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum 2",
    image: "/Blogs/img2.jpg",
  },
  {
    id: 3,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Banking",
    image: "/Blogs/img3.jpg",
  },
  {
    id: 4,
    title: "Data Analytics for Smarter Finance",
    description:
      "How financial institutions use predictive analytics to minimize risks and maximize growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "High Tech",
    image: "/Blogs/img4.jpg",
  },
  {
    id: 5,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs and increase efficiency.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img5.jpg",
  },
  {
    id: 6,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Banking",
    image: "/Blogs/img6.jpg",
  },
  {
    id: 7,
    title: "Data Analytics for Smarter Finance",
    description:
      "How financial institutions use predictive analytics to minimize risks and maximize growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Finance",
    image: "/Blogs/img7.jpg",
  },
  {
    id: 8,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs and increase efficiency.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum 2",
    image: "/Blogs/img8.png",
  },
  {
    id: 9,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "High Tech",
    image: "/Blogs/img9.jpg",
  },

  // ⭐ DUPLICATE SET (UNCHANGED)
  {
    id: 10,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Banking",
    image: "/Blogs/img6.jpg",
  },
  {
    id: 11,
    title: "Data Analytics for Smarter Finance",
    description:
      "How financial institutions use predictive analytics to minimize risks and maximize growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Finance",
    image: "/Blogs/img7.jpg",
  },
  {
    id: 12,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs and increase efficiency.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum 2",
    image: "/Blogs/img8.png",
  },
  {
    id: 13,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "High Tech",
    image: "/Blogs/img9.jpg",
  },
  {
    id: 14,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Banking",
    image: "/Blogs/img6.jpg",
  },
  {
    id: 15,
    title: "Data Analytics for Smarter Finance",
    description:
      "How financial institutions use predictive analytics to minimize risks and maximize growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Finance",
    image: "/Blogs/img7.jpg",
  },
  {
    id: 16,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs and increase efficiency.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum 2",
    image: "/Blogs/img8.png",
  },
  {
    id: 17,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "High Tech",
    image: "/Blogs/img9.jpg",
  },
  {
    id: 18,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Banking",
    image: "/Blogs/img6.jpg",
  },
  {
    id: 19,
    title: "Data Analytics for Smarter Finance",
    description:
      "How financial institutions use predictive analytics to minimize risks.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Finance",
    image: "/Blogs/img7.jpg",
  },
  {
    id: 20,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum 2",
    image: "/Blogs/img8.png",
  },
  {
    id: 21,
    title: "Digital Payments: The Future of Banking",
    description:
      "NFC, biometric authentication, and modern banking trends.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "High Tech",
    image: "/Blogs/img9.jpg",
  },
  {
    id: 22,
    title: "Digital Payments: The Future of Banking",
    description:
      "Evolution of digital transactions.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img6.jpg",
  },
  {
    id: 23,
    title: "Data Analytics for Smarter Finance",
    description:
      "Predictive analytics for financial growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img7.jpg",
  },
  {
    id: 24,
    title: "Enterprise Automation Strategies",
    description:
      "Impact of automation in organizations.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img8.png",
  },
  {
    id: 25,
    title: "Digital Payments: The Future of Banking",
    description:
      "Next-gen payment systems.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img9.jpg",
  },
];

export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);

  // ⭐ ADDED: search state
  const [searchTerm, setSearchTerm] = useState("");

  // ⭐ SORT DROPDOWN
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("Most Relevant");
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

  // ⭐ FILTER by category
  const categoryFiltered = useMemo(() => {
    if (activeCategory === "All Posts") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // ⭐ ADDED: search filtering (title + desc + author)
  const searchedFiltered = useMemo(() => {
    return categoryFiltered.filter((post) => {
      const text = (post.title + post.description + post.author).toLowerCase();
      return text.includes(searchTerm.toLowerCase());
    });
  }, [categoryFiltered, searchTerm]);

  // ⭐ SORTING
  const sortedPosts = useMemo(() => {
    let arr = [...searchedFiltered];

    if (sortType === "Recently Viewed") {
      arr.sort((a, b) => (a.id < b.id ? 1 : -1));
    } else if (sortType === "Top") {
      arr.sort((a, b) => (a.title.length < b.title.length ? 1 : -1));
    } else {
      arr.sort((a, b) => a.title.localeCompare(b.title));
    }

    return arr;
  }, [searchedFiltered, sortType]);

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return sortedPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage, sortedPosts]);

  return (
    <section className="w-full px-6 md:px-12 py-10 bg-white">
      
      {/* ⭐ SEARCH AND HEADING - Kept the previous correct implementation */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
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
            className="w-full border border-gray-300  rounded-md shadow-2xl py-3 px-6 pr-10"
          />
          <span className="absolute right-4 py-3 text-gray-500">🔍</span>
        </div>
      </div>

      {/* ✅ MODIFIED: FILTER BAR 
        - Used flex-wrap on the main container so the sort button can wrap.
        - The category buttons are kept in a separate div with flex-nowrap and overflow-x-scroll.
      */}
      <div className="flex flex-wrap gap-3 mb-6">
        
        {/* Category Buttons Wrapper - Allows horizontal scrolling, prevents wrapping */}
        <div className="flex overflow-x-scroll flex-nowrap md:overflow-hidden gap-3 pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              // flex-none prevents the buttons from shrinking
              className={`px-4 py-2 rounded-full border transition-all flex-none ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SORT DROPDOWN - This is now directly inside the `flex flex-wrap` parent. 
          The `ml-auto` pushes it to the right, and because the parent can wrap, 
          if the category buttons take up the full width, the sort dropdown will 
          wrap to the next line.
        */}
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
              {["Recently Viewed", "Most Relevant", "Top"].map((opt) => (
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

      {/* GRID (UNCHANGED) */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
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

      {/* PAGINATION (UNCHANGED) */}
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