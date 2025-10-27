 
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: '/PBG1.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/1"
    },
    {
      id: 2,
      image: '/PBG2.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/2"
    },
    {
      id: 3,
      image: '/PBG3.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/3"
    },
    {
      id: 4,
      image: '/PBG4.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      
      route: "/industries/banking-and-finance/products/4"
    },
    {
      id: 5,
      image: '/PBG5.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/5" 
    },
    {
      id: 6,
      image: '/PBG6.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/6"
    },
    {
      id: 7,
      image: '/PBG7.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/7"
    },
    {
      id: 8,
      image: '/PBG8.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/8"
    },
    {
      id: 9,
      image: '/PBG9.png',
      title: 'Sed ac facilisis lectus. Ut sed eros vel ipsum rhoncus',
      logo: '/Logo1.png',
      hasContent: true,
      para:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      route: "/industries/banking-and-finance/products/9"
    }
  ];

 return (
    <section className="w-full bg-[#E7E7E7] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-[#2B68C3]">Sed ut perspiciatis</span>
            <br />
            <span className="text-[#666666]">undeSed ut perspiciatis</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              onClick={() => navigate(product.route)}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title || `Product ${product.id}`}
                className="w-full h-full object-cover"
              />

              {/* Content Overlay - Only for first 3 products */}
              {product.hasContent && (
                <>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b  group-hover:from-black/50 group-hover:to-black/60 transition-all duration-500"></div>
                  {/* from-black/20 to-black/40 */}
                  {/* Top Title - Only visible when NOT hovering */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 right-4 sm:right-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                      {product.title}
                    </p>
                  </div>
{/* Logo - Smoothly moves from bottom to top on hover */}
<div
  className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 bg-white rounded px-3 py-2 sm:px-4 sm:py-3 
             transition-all duration-700 ease-in-out 
             group-hover:bottom-auto group-hover:top-4 sm:group-hover:top-6"
>
  <img
    src={product.logo}
    alt="Brand logo"
    className="h-5 sm:h-6 md:h-7 w-auto object-contain"
  />
</div>


                  {/* Center Text - Only visible on hover */}
                  <div className="absolute inset-0 flex items-center text-start p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed text-center max-w-[85%]">
                      {product.para}
                    </p>
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