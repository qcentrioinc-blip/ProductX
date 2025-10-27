import { Link } from "react-router-dom";

export default function  PlatformNavbar() {
  const navItems = [
    'Overview',
    'Benefits',
    'Process',
    'Usecases',
    'Blog'
  ];

  return (
     
      <div className="max-w-8xl bg-gray-200   px-16">
        <div className="flex flex-wrap items-center gap-4 py-8  sm:gap-8 md:gap-12">
          {navItems.map((item, index) =>
            item === "Blogs" ? (
              <Link
                key={index}
                to="/blogs"
                className=" text-lg sm:text-lg"
              >
                {item}
              </Link>
            ) : (
              <span
                key={index}
                className=" text-lg sm:text-lg cursor-pointer"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div> 
  );
}
