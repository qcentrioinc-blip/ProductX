"use client";
 
import { useState, useMemo, useRef, useEffect } from "react";
import { P } from "../../../styles/Typography";
 
// using window.location instead of next/navigation to avoid missing type declarations
 
 
const categories = [
  "All Posts",
  "Banking",
  "Lorem ipsum",
  "High Tech",
  "Lorem ipsum 2",
  "Finance",
];
 
// ⭐ FULL MOCK POSTS
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
      "How financial institutions use predictive analytics to minimize risks and maximize growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Finance",
    image: "/Blogs/img7.jpg",
  },
  {
    id: 20,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs and increase efficiency.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum 2",
    image: "/Blogs/img8.png",
  },
  {
    id: 21,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "High Tech",
    image: "/Blogs/img9.jpg",
  },
  {
    id: 22,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img6.jpg",
  },
  {
    id: 23,
    title: "Data Analytics for Smarter Finance",
    description:
      "How financial institutions use predictive analytics to minimize risks and maximize growth.",
    author: "Sophia Lee",
    date: "SEPTEMBER 14, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img7.jpg",
  },
  {
    id: 24,
    title: "Enterprise Automation Strategies",
    description:
      "Automation tools that are helping enterprises reduce operational costs and increase efficiency.",
    author: "John Carter",
    date: "SEPTEMBER 17, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img8.png",
  },
  {
    id: 25,
    title: "Digital Payments: The Future of Banking",
    description:
      "From NFC to biometric authentication — digital payments are evolving faster than ever.",
    author: "Rachel Green",
    date: "SEPTEMBER 20, 2025",
    category: "Lorem ipsum",
    image: "/Blogs/img9.jpg",
  },
];
 
 
 
 
export default function BlogGridSection() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
 
  const [pathname, setPathname] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    setPathname(window.location.pathname);
    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const currentSection = pathname?.split("/").filter(Boolean).pop();
 
  const filterOptions = [
    { label: "White Papers", key: "whitepapers" },
    { label: "News", key: "news" },
    { label: "Blogs", key: "blogs" },
    { label: "Events", key: "events" },
  ];
 
  const filteredFilterOptions = filterOptions.filter(
    (opt) => opt.key !== currentSection
  );
 
  // ⭐ NEW filter dropdown
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);
 
  // ⭐ Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
 
  const POSTS_PER_PAGE = 9;
 
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All Posts") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);
 
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
 
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage, filteredPosts]);
 
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
 
  return (
    <section className="w-full px-6 md:px-12 py-10 bg-white">
 
      {/* FILTER BAR */}
      <div
        className="
          flex items-center gap-3 mb-8
          overflow-x-auto snap-x snap-mandatory scrollbar-hide
          md:flex-wrap md:overflow-visible
        "
      >
        {/* Category pills */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentPage(1);
            }}
            className={`
              px-5 py-2 rounded-full border transition-all text-sm shrink-0 snap-start
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {cat}
          </button>
        ))}
 
        {/* ⭐ FILTER ICON (Right side) */}
        <div className="ml-auto relative" ref={filterRef}>
          <button
            className="
              p-2 rounded-full
              hover:bg-gray-100 transition cursor-pointer
            "
            onClick={(e) => {
              e.stopPropagation();
              setFilterOpen(!filterOpen);
            }}
          >
            {/* Custom SVG filter icon */}
            {/* <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="3 4 21 4 14 13 14 20 10 22 10 13 3 4" />
            </svg> */}
            <img src="/Events/icon.png" alt="Filter" />
          </button>
 
          {/* ⭐ Dropdown */}
          {filterOpen && (
        <div className="absolute mt-2  right-1 w-40 bg-white border rounded-md shadow-lg z-50">
          {filteredFilterOptions.map((item) => (
            <div
              key={item.key}
              onClick={() =>
                (window.location.href = `/industries/banking-and-finance/${item.key}`)
              }
              className="px-4 py-2  text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
        </div>
      </div>
 
      {/* GRID */}
      <div
        className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            className="
              bg-white rounded-md overflow-hidden shadow-sm
              transition-transform duration-300 hover:scale-[1.02]
            "
          >
            <div className="overflow-hidden h-[240px] sm:h-[260px] xl:h-[280px]">
              <img
                src={post.image}
                alt="Post"
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  hover:scale-110
                "
              />
            </div>
 
            <div className="p-4 space-y-2">
              <P className="font-semibold text-gray-900">{post.title}</P>
 
              <P className="text-gray-600 leading-snug">
                {post.description}
              </P>
 
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
              onClick={() => goToPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-md border
                ${
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
