import { Link } from "react-router-dom";

export default function PagoNavbar() {
  const navItems = [
    "Products",
    "Benefits",
    "Who is it for",
    "Our Process",
    "Use Cases",
    "Blogs",
  ];

  return (
    // hidden below md
    <section className="hidden md:block bg-white shadow-lg w-full py-2">
      <div className="max-w-8xl mx-10 lg:mx-20 px-4 sm:px-6 md:py-6 ">
        <div className="flex items-center  flex-nowrap gap-10 lg:gap-8">
          {navItems.map((item, index) =>
            item === "Blogs" ? (
              <Link
                key={index}
                to="/blogs"
                className="text-black text-sm lg:text-lg whitespace-nowrap"
              >
                {item}
              </Link>
            ) : (
              <span
                key={index}
                className="text-black text-sm lg:text-lg cursor-pointer whitespace-nowrap"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
