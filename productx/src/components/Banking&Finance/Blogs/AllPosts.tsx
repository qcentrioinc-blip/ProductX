import { H2 } from "../../../styles/Typography";

export default function AllPosts({
  currentBlogs,
  currentPage,
  onPageChange,
  getPageNumbers,
}: {
  currentBlogs: any[];
  currentPage: number;
  onPageChange: (page: number) => void;
  getPageNumbers: () => (number | string)[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-10 py-8">
        <H2 className="text-black">All Posts</H2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-300"></div>

              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      {blog.author}
                    </span>

                    <span className="flex items-center">{blog.readTime}</span>
                  </div>

                  <span>{blog.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="px-3 py-2 text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
