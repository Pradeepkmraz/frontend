import React, { useState } from "react";

const cards = [
  {
    title: "Sanitary Pad Vending Machine",
    description:
      "We plan to install sanitary pad vending machines in women's toilets at railway stations, metro points, villages, and slum localities. These machines will provide sanitary pads at little to no cost, ensuring women have a reliable option during their menstrual cycle and eliminating the need for unsafe substitutes.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800",
    icon: "🤖",
  },
  {
    title: "Expanding Study Points",
    description:
      "We will expand our study points to educate as many students as possible, bringing education closer to home and eliminating barriers like distance for underprivileged children.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800",
    icon: "📚",
  },
  {
    title: "Computer Lab",
    description:
      "We will establish a dedicated computer lab for below poverty line students, allowing them to harness the power of the internet and social media to showcase their talents and explore a wide range of career opportunities.",
    image:
      "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=2070",
    icon: "💻",
  },
];

export default function FuturePlans() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="py-16 px-6 z-10 relative">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Our Future Plans
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {cards.map((card, index) => {
          const isExpanded = expanded[index];
          const shortText = card.description.slice(0, 120);

          return (
            <div
              key={index}
              className='bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 space-y-3 hover:bg-white/10 hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-300'
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
                <span>{card.icon}</span>
                {card.title}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed">
                {isExpanded ? card.description : `${shortText}...`}
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-purple-400 font-medium ml-1"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
