import { Link } from "react-router-dom";

export default function BankFinanceNavbar() {
  const navItems = [
    'Products',
    'Benefits',
    'Who is it for',
    'Our Process',
    'Use Cases',
    'Blogs'
  ];

  return (
    <section className="bg-black text-white w-screen py-2">
      <div className="max-w-8xl bg-neutral-800 mx-20 px-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="flex flex-wrap items-center  sm:gap-8 md:gap-12">
          {navItems.map((item, index) =>
            item === "Blogs" ? (
              <Link
                key={index}
                to="/blogs"
                className="text-white text-lg sm:text-lg"
              >
                {item}
              </Link>
            ) : (
              <span
                key={index}
                className="text-white text-lg sm:text-lg cursor-pointer"
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
