 import { useState } from "react";
import { H2 } from "../../../styles/Typography";
const AllPosts = () => {

     const mockBlogs = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 5,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 6,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 7,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 8,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "7 mins",
      category: "AUGUST 14,2024"
    },
    {
      id: 9,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "5 mins",
      category: "AUGUST 14,2024"
    },
    // Add more mock data for additional pages
    ...Array.from({ length: 21 }, (_, i) => ({
      id: i + 10,
      title: "Lorem Ipsum",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      author: "Author",
      readTime: "10 mins",
      category: "AUGUST 14,2024"
    }))
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const totalPages = Math.ceil(mockBlogs.length / blogsPerPage);

  // Calculate the blogs to show on current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = mockBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }

      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };
  return (
     <section className="bg-white h-full w-full">
        <div className="mx-10 py-8">
          <H2 className="text-black ">All Posts</H2>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg overflow-hidden">
                {/* Blog Image Placeholder */}
                <div className="w-full h-48 bg-gray-300"></div>

                {/* Blog Content */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {blog.description}
                  </p>

                  {/* Blog Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {blog.author}
                      </span>

                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {blog.readTime}
                      </span>
                    </div>

                    <span className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            {getPageNumbers().map((pageNumber, index) => (
              pageNumber === '...' ? (
                <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber as number)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {pageNumber}
                </button>
              )
            ))}
          </div>


        </div>
      </section>
  )
}

export default AllPosts
