import { useNavigate } from "react-router-dom";
import { H2, P } from "../../styles/Typography";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const products = [
    {
      id: 1,
      image: '/PBG1.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/1"
    },
    {
      id: 2,
      image: '/PBG2.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/2"
    },
    {
      id: 3,
      image: '/PBG3.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/3"
    },
    {
      id: 4,
      image: '/PBG4.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
     
      route: "/industries/banking-and-finance/products/4"
    },
    {
      id: 5,
      image: '/PBG5.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/5"
    },
    {
      id: 6,
      image: '/PBG6.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/6"
    },
    {
      id: 7,
      image: '/PBG7.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/7"
    },
    {
      id: 8,
      image: '/PBG8.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/8"
    },
    {
      id: 9,
      image: '/PBG9.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para:'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/9"
    }
  ];

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scroll") === "products") {
      const target = document.getElementById("productsSection");
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section className="w-full bg-[#E7E7E7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-8xl md:px-0 md:mx-10 px-4 sm:px-8 lg:px-8">

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <H2 className="font-bold leading-tight">
            <span className="text-[#2B68C3]">Sed ut perspiciatis</span><br />
            <span className="text-[#666666]">undeSed ut perspiciatis</span>
          </H2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg 
                       p-3 rounded-full hidden sm:flex"
          >
            ←
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg 
                       p-3 rounded-full hidden sm:flex"
          >
            →
          </button>

          {/* Products Slider */}
          <div
            id="productsSection"
            ref={sliderRef}
            className="flex gap-6 md:gap-10 overflow-x-auto scroll-smooth scrollbar-hide scrollbar-hide::-webkit-scrollbar no-scrollbar pb-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative aspect-[4/3] w-[280px] sm:w-[330px] md:w-[360px] 
                           flex-shrink-0 rounded-lg overflow-hidden shadow-md
                           hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                onClick={() => navigate(product.route)}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {product.hasContent && (
                  <>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Title */}
                    <div className="absolute top-4 left-4 sm:top-6 md:left-6 md:pr-10 opacity-100 
                                    group-hover:opacity-0 transition-opacity duration-300">
                      <P className="text-white">{product.title}</P>
                    </div>

                    {/* Logo sliding */}
                    <div className="absolute left-4 sm:left-6 bottom-6 w-[200px] rounded-md py-3 
                                    transition-all duration-700 ease-in-out transform 
                                    group-hover:-translate-y-50">
                      <img src={product.logo} className="h-6 md:h-14 w-full" />
                    </div>

                    {/* Hover Description */}
                    <div className="absolute bottom-[-100%] left-0 w-full px-6 text-white 
                                    opacity-0 group-hover:bottom-12 group-hover:opacity-100
                                    transition-all duration-700 ease-in-out">
                      <P className="text-white">{product.para}</P>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
