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

 
const  HowWeDoIn = () => {
  const icons = [
    { icon: <LocationCityOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <WeekendOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <TableRowsOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <ConstructionOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <ConstructionOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <LightOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <BarChartOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <DescriptionOutlined fontSize="large" />, label: "Lorem Ipsum" },
    { icon: <ViewInArOutlined fontSize="large" />, label: "Lorem Ipsum" },
  ];
 
  return (
    <>
    <div className="w-screen mt-10 min-h-screen bg-gray-50 px-10">
      {/* Top Section */}
      <div className="flex pt-10 mx-auto flex-wrap max-w-[1360px]">
        <div className="flex-1">
          <p className="text-sm text-gray-500">Quis autem</p>
          <h2 className="text-4xl font-extrabold">Sed ut perspiciatis unde</h2>
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-justify">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
 
      {/* Cards Section */}
      <div className="grid mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {icons.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg bg-white group h-32 flex flex-col p-4 items-start justify-center cursor-pointer"
          >
            {/* Expanding Circle Overlay */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-black  scale-0 group-hover:scale-[50] transition-transform duration-700 ease-out origin-top-left"></div>
 
            {/* Card Content */}
            <div className="relative z-10 flex flex-col space-y-2 text-black group-hover:text-white transition-colors duration-700">
              {item.icon}
              <span className="font-semibold">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
   
    </>
  );
};
 
export default  HowWeDoIn;

 