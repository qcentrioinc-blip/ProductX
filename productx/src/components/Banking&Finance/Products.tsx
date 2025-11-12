import { useNavigate } from "react-router-dom";
import { H2, P } from "../../styles/Typography";
const Products = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: '/PBG1.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/1"
    },
    {
      id: 2,
      image: '/PBG2.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/2"
    },
    {
      id: 3,
      image: '/PBG3.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/3"
    },
    {
      id: 4,
      image: '/PBG4.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',

      route: "/industries/banking-and-finance/products/4"
    },
    {
      id: 5,
      image: '/PBG5.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/5"
    },
    {
      id: 6,
      image: '/PBG6.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/6"
    },
    {
      id: 7,
      image: '/PBG7.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/7"
    },
    {
      id: 8,
      image: '/PBG8.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/8"
    },
    {
      id: 9,
      image: '/PBG9.png',
      title: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      logo: '/Logo1.png',
      hasContent: true,
      para: 'Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique Sed ac faucibus lectus. Ut sed eros vel sapien tristique ',
      route: "/industries/banking-and-finance/products/9"
    }
  ];

  return (
    <section className="w-full bg-[#E7E7E7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-8xl md:px-0  md:mx-10 px-4 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <H2 className="  font-bold leading-tight">
            <span className="text-[#2B68C3]">Sed ut perspiciatis</span>
            <br />
            <span className="text-[#666666]">undeSed ut perspiciatis</span>
          </H2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative aspect-[4/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => navigate(product.route)}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title || `Product ${product.id}`}
                className="w-full h-full object-cover"
              />

              {product.hasContent && (
                <>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Title (Visible before hover) */}
                  <div className="absolute top-4 left-4 sm:top-6 md:left-6 md:pr-10 lg:pr-44 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <P className="text-white">{product.title}</P>
                  </div>

                  {/* Logo box - slides up on hover */}
                  <div
                    className="absolute left-4 sm:left-6 bottom-6  md:w-[200px] rounded   py-4  sm:py-3
                   transition-all duration-700 ease-in-out transform
                   group-hover:-translate-y-75"
                  >
                    <img
                      src={product.logo}
                      alt="Brand logo"
                      className="h-5 sm:h-6 md:h-16 w-full"
                    />
                  </div>

                  {/* Hover Text - Follows logo upward smoothly */}
                  <div
                    className="absolute bottom-[-100%] left-0  w-full px-6 text-white text-sm sm:text-base opacity-0
                   group-hover:bottom-12 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                  >
                    <P className="text-white max-w-[100%]">{product.para}</P>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;