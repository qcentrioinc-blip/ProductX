"use client";

import { useState } from "react";
// import { H1, H2, P } from "../../../styles/Typography";
import Image2 from "/Image2.jpg";

import HeroSection from "./HeroSection";
import FeaturedBlogs from "./FeaturedBlogs";
import AllPosts from "./AllPosts";

export default function Blogs() {
  const mockBlogs = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 6,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 7,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 8,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "7 mins",
      category: "AUGUST 14,2024",
    },
    {
      id: 9,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024",
    },
    ...Array.from({ length: 21 }, (_, i) => ({
      id: i + 10,
      title: "Lorem Ipsum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "10 mins",
      category: "AUGUST 14,2024",
    })),
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const totalPages = Math.ceil(mockBlogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = mockBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      pageNumbers.push(1);

      if (currentPage > 3) pageNumbers.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pageNumbers.push(i);

      if (currentPage < totalPages - 2) pageNumbers.push("...");

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <>
      <HeroSection Image2={Image2} />

      <FeaturedBlogs />

      <AllPosts
        currentBlogs={currentBlogs}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        getPageNumbers={getPageNumbers}
      />
    </>
  );
}
