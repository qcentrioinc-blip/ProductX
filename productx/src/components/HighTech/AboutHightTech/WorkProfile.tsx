import { useEffect } from 'react';

const WorkProfile = () => {
 // const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 1,
      number: "1",
      title: "ROCK SOLID TECHNOLOGY",
      description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
      image: "/AboutUs/High2.png",
      bgColor: "bg-[#F99526]",
      textColor: "text-black"
    },
    {
      id: 2,
      number: "2",
      title: "ROCK SOLID TECHNOLOGY",
      description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
      image: "/AboutUs/High1.png",
      bgColor: "bg-[#230053]",
      textColor: "text-white"
    },
    {
      id: 3,
      number: "3",
      title: "ROCK SOLID TECHNOLOGY",
      description: "This should be a statement about Rock Solid Technology and what it can bring to customers. Morbi non metus eget nibh viverra. This should be a statement about Rock Solid Technology and what it can bring to customers.",
      image: "/AboutUs/High3.png",
      bgColor: "bg-[#5C5C5C]",
      textColor: "text-[#F99526]"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check each section to see if it's 30% visible
      sections.forEach((_, index) => {
        const sectionTop = index * windowHeight;
        const sectionVisibility = scrollPosition - sectionTop;
        const visibilityPercentage = (sectionVisibility / windowHeight) * 100;
        
        // Change image when section is 30% visible
        if (visibilityPercentage >= 30 && visibilityPercentage < 70) {
          //(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="relative ">


      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`h-screen ${section.bgColor} sticky top-0 flex items-center justify-between px-6 sm:px-12 lg:px-24`}
          style={{ zIndex: index + 1 }}
        >
          
            <div className="max-w-8xl mx-auto px-6 flex items-center justify-between w-full">
  {/* Left Side – Number */}
  <div className="flex-shrink-0">
    <h1
      className={`text-[10rem] sm:text-[12rem] lg:text-[14rem] font-bold ${section.textColor} opacity-90 leading-none`}
    >
      {section.number}
    </h1>
  </div>

  {/* Right Side – Title, Paragraph, Image */}
  <div className="flex flex-col items-start justify-center text-left space-y-6 max-w-2xl">
    <h2
      className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${section.textColor} tracking-wide`}
    >
      {section.title}
    </h2>
    <p
      className={`text-sm sm:text-base ${section.textColor} leading-relaxed`}
    >
      {section.description}
    </p>

    <img
      src={section.image}
      alt={section.title}
      className="w-96 h-96 mt-6 rounded-xl object-cover shadow-lg"
    />
  </div>
</div>

          </div>
       
      ))}
    </div>
  );
};

export default WorkProfile;

