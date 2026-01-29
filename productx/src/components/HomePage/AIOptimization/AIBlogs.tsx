// import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const AIBlogs = () => {
  const blogs = [
    {
      id: 1,
      tag: "AI Blogs ",
      title: "CloudDIET uncovers savings others miss.",
      image: "/AI-CloudFinOps/HomePage/GroupPeople.webp",
    },
    {
      id: 2,
      tag: "Tech Blogs",
      title: "Accelerating Financial Modeling with Our AI.",
      image: "/AI-CloudFinOps/HomePage/Blog2.webp",
    },
    {
      id: 3,
      tag: "Solutions Blogs ",
      title: "CloudDIET profiler to authenticate to Azure.",
      image: "/AI-CloudFinOps/HomePage/Blog1.webp",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#0A0A0B] text-white py-20 sm:py-24 xl:py-28 px-4 sm:px-6 xl:px-16">
      <div className="mx-auto max-w-8xl px-0 sm:px-4 xl:px-6">

        {/* GRID: Stacks on mobile, side-by-side on large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-12 sm:gap-16 xl:gap-24">

          {/* ========== LEFT COLUMN ========== */}
          <div className="flex flex-col justify-between gap-12 xl:gap-0">
            {/* Main Heading */}
            <div>
              <h1
                className="text-[30px] sm:text-[40px] xl:text-[48px] leading-[110%]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#F5F5F5",
                }}
              >
                Stay Ahead with
                <br className="hidden xl:block" />
                Cloud Insights 
              </h1>
            </div>

            {/* Bottom Section */}
            <div className="space-y-6 sm:space-y-8 xl:space-y-8">
              {/* Section Title */}
              <h2
                className="uppercase text-[32px] sm:text-[40px] xl:text-[48px]"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 600,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "white",
                }}
              >
                Our 
                <br className="hidden xl:block" />
                Resources
              </h2>

              {/* View All Button */}
              <a href="/industries/ai-optimization/resources/whyclouddiet/clouddiet">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-white text-[#2A2A2A] rounded-lg hover:bg-gray-100 transition-colors uppercase cursor-pointer"
                  style={{
                    width: "157px",
                    height: "48px",
                    gap: "8px",
                    borderRadius: "8px",
                    paddingTop: "12px",
                    paddingRight: "24px",
                    paddingBottom: "12px",
                    paddingLeft: "24px",
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0.04em",
                  }}
                >
                  VIEW ALL
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </a>
            </div>
          </div>

          {/* ========== RIGHT COLUMN ========== */}
          <div className="flex flex-col">
            {/* Top Description */}
            <p
              className="text-[16px] sm:text-[18px] xl:text-[22px]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 400,
                lineHeight: "130%",
                letterSpacing: "0%",
                color: "#CCCCCC",
              }}
            >
              Explore expert articles on Azure optimization, FinOps best practices, and real-world savings strategies. Learn how CloudDIET's AI-driven profiling and advanced cost intelligence help reduce waste and maximize your cloud ROI.
            </p>

            {/* Divider */}
            <div className="mt-8 sm:mt-10 xl:mt-12 h-[0.5px] w-full bg-[#FFE9C5]" />

            {/* Blog Cards */}
            <div className="mt-8 sm:mt-10 xl:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-0 xl:gap-0">
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`flex flex-col md:pr-5 lg:pr-8 xl:pr-10 ${index > 0 ? "md:pl-5 lg:pl-8 xl:pl-10 md:border-l md:border-[#5551FF]/50" : "md:pl-0 xl:pl-0"
                    }`}
                >
                  {/* Blog Tag */}
                  {/* <span
                    className="text-[14px] mb-3 sm:mb-4 block"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 400,
                      color: "#0AC276",
                    }}
                  >
                    {blog.tag}
                  </span> */}

                  {/* Card */}
                  <div className="flex flex-col">
                    {/* Image */}
                    <div
                      className="relative overflow-hidden w-full sm:w-[190px] md:w-full lg:w-[210px] xl:w-[223px] h-[150px] sm:h-[160px] md:h-[150px] rounded-[8px]"
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      {/* Overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[8px]"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 57.3%, #000000 93.25%)",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-4 flex flex-col justify-between min-h-[110px]">
                      <h3
                        className="text-[18px] sm:text-[20px] xl:text-[26px]"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontWeight: 700,
                          lineHeight: "100%",
                          color: "#CCCCCC",
                        }}
                      >
                        {blog.title}
                      </h3>

                      <a href="/industries/ai-optimization/resources/whyclouddiet/clouddiet">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 self-start mt-3 cursor-pointer"
                          style={{
                            fontFamily: "'Nunito Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "120%",
                            color: "#0079FF",
                          }}
                        >
                          Read Now
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 3L11 8L6 13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBlogs;
