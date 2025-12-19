import { H2, H4, P } from '../../../styles/Typography';

const testimonials = [
  {
    company: "ShareChat",
    logo: "/AIProduct/ShareChat.png",
    quote: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.We onboard users from",
    name: "ABCDEF",
    role: "Director of Cloud Platform"
  },
  {
    company: "ShareChat",
    logo: "/AIProduct/ShareChat.png",
    quote: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.We onboard users from",
    name: "ABCDEF",
    role: "Director of Cloud Platform"
  },
  {
    company: "ShareChat",
    logo: "/AIProduct/ShareChat.png",
    quote: "We onboard users from 126+ countries — whether you hold a passport or a residence permit we've got you covered.We onboard users from",
    name: "ABCDEF",
    role: "Director of Cloud Platform"
  }
];

export default function Testimonial() {
  return (
    <section className="w-full bg-gradient-to-br from-[#3532fd] via-[#4f49f8] to-[#7e7aef] py-16 px-6">
      <div className="max-w-8xl mx-10">
        {/* Title */}
        <H2 className="text-white font-bold text-center mb-12">
          Lorem ipsum dolor sit amet Lorem
        </H2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 ">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="relative pb-12">
              {/* White Card */}
              <div className="bg-white rounded-lg  h-[70vh]  lg:h-[85vh] w-[29vw] p-8 pb-20 shadow-sm flex flex-col  text-center">
                {/* Stylish Green Quote Marks */}
                <div className="relative mb-6 items-center flex justify-center"> 
                  <img  src="/AIProduct/Quotes.png" alt="Quote Mark" className="  my-12 left-0 w-16 h-12"/>
                </div>

                {/* Company Logo and Name */}
                <div className="flex flex-col items-center gap-3 mb-10">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company} 
                    className="h-14 object-contain" 
                  />
                </div>

                {/* Quote Text */}
                <P className="text-[#2A2A2A] leading-relaxed   tracking-wider px-6">
                  {testimonial.quote}
                </P>
              </div>

              {/* Overlapping Circle Avatar - attached to bottom of card */}
              <div className="absolute left-1/2 -translate-x-1/2   transform -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-gray-300 shadow-lg"></div>
              </div>

              {/* Name and Role (positioned below the circle) */}
              <div className="text-center mt-16  text-white">
                <H4 className="font-bold mb-2">{testimonial.name}</H4>
                <p className="text-lg font-quicksand">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}