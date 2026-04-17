import React from "react";

const supporters = [
  {
    title: "Sanitary Pads Distribution",
    description:
      "We provide free sanitary pads to women in villages and slums through our Feelwow initiative, ensuring menstrual hygiene and health education.",
    icon: "🌸",
  },
  {
    title: "Expanding Education Access",
    description:
      "Funds help us establish more study points and provide essential educational materials to students who cannot afford quality learning resources.",
    icon: "📚",
  },
  {
    title: "Digital Literacy Programs",
    description:
      "Your support allows us to build computer labs and offer internet access to children from economically weaker sections, opening new career opportunities.",
    icon: "💻",
  },
  {
    title: "Events for Empowerment",
    description:
      "We host events like Women’s Day, Holi celebrations, and health awareness programs to build confidence and a sense of belonging among women and kids.",
    icon: "🎉",
  },
  {
    title: "Logistics & Volunteer Support",
    description:
      "Funds help cover transportation, supplies, and meals for volunteers who help us deliver programs directly in underserved communities.",
    icon: "🚚",
  },
  {
    title: "Vending Machine Installations",
    description:
      "We plan to install low-cost sanitary pad vending machines in public areas like stations and slums. Your donations make this innovation possible.",
    icon: "🤖",
  },
];

export default function NeedFund() {
  return (
    <div className="py-20 px-8 mb-16 z-10 relative">
      <h2 className="text-4xl font-bold text-center text-white mb-4">
        Why we need Funds
      </h2>
      <p className="text-center text-white/60 mb-14 max-w-2xl mx-auto">
        Your generous contribution helps us expand our reach and impact. Every donation directly supports our initiatives in education, healthcare, and women empowerment across rural India.
      </p>

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

      <div className="mt-16 max-w-4xl mx-auto bg-linear-to-r from-green-900/20 to-green-800/20 border border-green-700/50 rounded-2xl p-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Make a Difference Today & Choose Payment Method
          </h3>
          <p className="text-white/70 mb-8">
            Whether you can contribute a small amount or a large sum, every donation is impactful. Together, we can transform lives in rural India.
          </p>
          <div className="flex flex-col sm:row gap-4 justify-center items-center flex-wrap">
            <a 
              href="https://wa.me/918368880648?text=I%20want%20to%20donate%20to%20Vinay%20Wings%20Navjeevan%20Foundation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition duration-300 font-semibold shadow-lg shadow-green-600/20"
            >
              Donate via WhatsApp
            </a>
            <a 
              href="mailto:vwnjfoundation@gmail.com?subject=Donation%20Inquiry" 
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full transition duration-300 font-semibold shadow-lg"
            >
              Email for Bank Details
            </a>
            <a 
              href="tel:+918368880648" 
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full transition duration-300 font-semibold shadow-lg"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}