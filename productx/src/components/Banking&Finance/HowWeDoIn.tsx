import { useNavigate } from "react-router-dom";
import { H2 } from "../../styles/Typography";
import {
  LocationCityOutlined,
  WeekendOutlined,
  TableRowsOutlined,

  ConstructionOutlined,
  LightOutlined,
  BarChartOutlined,
  DescriptionOutlined,
  ViewInArOutlined,
} from "@mui/icons-material";


const HowWeDoIn = () => {

  const navigate = useNavigate();
  const products = [
    {
      icon: <LocationCityOutlined fontSize="large" />,
      label: "Digital Banking Platform",
      description: "Next-gen core banking solution",
      route: "/industries/banking-and-finance/products/1"
    },
    {
      icon: <WeekendOutlined fontSize="large" />,
      label: "Payment Solutions",
      description: "Integrated payment processing",
      route: "/industries/banking-and-finance/products/2"
    },
    {
      icon: <TableRowsOutlined fontSize="large" />,
      label: "Wealth Management",
      description: "Portfolio management tools",
      route: "/industries/banking-and-finance/products/3"
    },
    {
      icon: <ConstructionOutlined fontSize="large" />,
      label: "Risk Analytics",
      description: "AI-powered risk assessment",
      route: "/industries/banking-and-finance/products/4"
    },
    {
      icon: <LightOutlined fontSize="large" />,
      label: "Trading Platform",
      description: "Real-time trading solutions",
      route: "/industries/banking-and-finance/products/5"
    },
    {
      icon: <BarChartOutlined fontSize="large" />,
      label: "Financial Analytics",
      description: "Business intelligence tools",
      route: "/industries/banking-and-finance/products/6"
    },
    {
      icon: <DescriptionOutlined fontSize="large" />,
      label: "Regulatory Compliance",
      description: "Automated compliance tools",
      route: "/industries/banking-and-finance/products/7"
    },
    {
      icon: <ViewInArOutlined fontSize="large" />,
      label: "Customer Experience",
      description: "Omnichannel banking solutions",
      route: "/industries/banking-and-finance/products/8"
    },
    {
      icon: <ViewInArOutlined fontSize="large" />,
      label: "User Experience",
      description: "Customer-centric design",
      route: "/industries/banking-and-finance/products/9"
    },
  ];

  return (
    <>
    <div className="w-full  min-h-screen bg-gray-300 px-10" id="who-is-it-for">
      {/* Top Section */}
      <div className="flex pt-10 mx-auto flex-wrap max-w-[1360px]">
        <div className="flex-1">
          <p className="text-sm text-gray-500">Quis autem</p>
          {/* <h2 className="text-4xl font-extrabold">Sed ut perspiciatis unde</h2> */}
          <H2>Sed ut perspiciatis unde</H2>
        </div>
        <div className="flex-1">
          {/* <p className="text-gray-700 text-justify">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> */}
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg bg-white group h-32 flex flex-col p-4 items-start justify-center cursor-pointer"
              onClick={() => navigate(product.route)}
            >
              {/* Expanding Circle Overlay */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-black  scale-0 group-hover:scale-[50] transition-transform duration-700 ease-out origin-top-left"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col space-y-3 text-black group-hover:text-white transition-colors duration-700">
                {product.icon}
                <div>
                  <h3 className="font-semibold">{product.label}</h3>
                  <p className="text-sm opacity-80 mt-1">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowWeDoIn;

