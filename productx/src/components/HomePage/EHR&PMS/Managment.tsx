import { motion } from "framer-motion";

const cards = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Unde Seduo ut",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Management Excellence",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    title: "Operational Clarity",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Strategic Insight",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
];

export default function Managment() {
  return (
    <div className="relative bg-gray-50">
      <div className="h-[200vh]" />

      {cards.map((card, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={index}
            className="sticky top-0 h-screen flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-[90%] max-w-6xl bg-white rounded-2xl shadow-xl p-10"
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-emerald-700">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </section>
        );
      })}

      <div className="h-[200vh]" />
    </div>
  );
}
