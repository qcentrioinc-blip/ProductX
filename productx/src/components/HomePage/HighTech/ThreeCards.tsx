import { H2, H4, P } from "../../../styles/Typography";

const ThreeCards = () => {
  const cards = [
    {
      title: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      icon: "circle"
    },
    {
      title: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      icon: "circle"
    },
    {
      title: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.",
      icon: "circle"
    }
  ];

  return (
    <div className="w-full bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Purple dot with text */}
        <div className="flex items-center gap-4 mb-16">
          <div 
            className="w-4 h-4 rounded-full"
            style={{ background: '#8338EC' }}
          />
          <P className="text-white text-lg">
            Duis qute irure dolor in reprehenderit
          </P>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <H2 className="text-white text-5xl font-bold mb-4">
            Sed ut perspiciatis
          </H2>
          <h3 
            className="text-4xl font-bold italic"
            style={{ 
              color: '#d97706',
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif'
            }}
          >
            Unde Seduo ut perspiciatis
          </h3>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8"
              style={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Circle Icon */}
              <div 
                className="w-16 h-16 rounded-full mb-6"
                style={{ 
                  background: '#D1D5DB'
                }}
              />

              {/* Card Text */}
              <H4 
                className="text-black font-bold leading-relaxed"
                style={{ 
                  fontSize: '20px',
                  lineHeight: '1.5'
                }}
              >
                {card.title}
              </H4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
