import React from "react";

const supporters = [
  {
    title: "NGOs",
    description:
      "Non-governmental organizations can collaborate with us for outreach, funding, and on-ground implementation of health and education programs.",
    icon: "🌐",
  },
  {
    title: "Corporates & CSR",
    description:
      "Companies can support our mission through Corporate Social Responsibility (CSR) initiatives, helping scale impact with technology, resources, and grants.",
    icon: "💼",
  },
  {
    title: "Individuals",
    description:
      "Every individual can make a difference by donating, volunteering, or spreading awareness about menstrual hygiene and digital literacy.",
    icon: "🙋‍♀️",
  },
  {
    title: "Educational Institutions",
    description:
      "Schools and colleges can partner with us to set up study points, computer labs, and organize health workshops.",
    icon: "🏫",
  },
  {
    title: "Government Bodies",
    description:
      "Government departments can join hands to promote digital inclusion and menstrual hygiene through schemes and joint initiatives.",
    icon: "🏛️",
  },
  {
    title: "International Organizations",
    description:
      "Global health and education organizations can offer technical expertise, tools, and funding to expand our programs across underserved regions.",
    icon: "🌍",
  },
];

export default function Support() {
  return (
    <div id="impact" className="py-20 px-8 z-10 relative">
      <h2 className="text-4xl font-bold text-center text-white mb-14">
        Who Can Support Us
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {supporters.map((item, index) => (
          <div
            key={index}
            className='bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 space-y-3 hover:bg-white/10 hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-300'
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-4">
              <span className="text-2xl">{item.icon}</span>
              {item.title}
            </h3>

            <p className="text-gray-200 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}