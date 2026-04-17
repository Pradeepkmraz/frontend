import React from 'react'
import { BookOpen, Users, Heart, Monitor, Package, GraduationCap } from 'lucide-react';

const Mission = () => {

    const featuresData = [
        {
            icon: <BookOpen className='text-white' size={24} />,
            title: " Education",
            description: "Providing free computer knowledge and essential education to underprivileged students"
        },
        {
            icon: <Users className='text-white' size={24} />,
            title: "Women Empowerment",
            description: "Empowering women with knowledge, digital tools, and healthcare awareness."
        },
        {
            icon: <Heart className='text-white' size={24} />,
            title: "Menstrual Hygiene",
            description: "Distributing free sanitary pads through Feelwow and educating women on menstrual health."
        },
        {
            icon: <Monitor className='text-white' size={24} />,
            title: "Computer Lab",
            description: "Providing essential computer, internet knowledge, and social media training to students, equipping them with the tools they need to succeed in the digital world."
        },
        {
            icon: <Package className='text-white' size={24} />,
            title: "Sanitary Pad Distribution",
            description: "Monthly distribution of free sanitary pads to women in need, with a focus on raising awareness about menstrual hygiene and health."
        },
        {
            icon: <GraduationCap className='text-white' size={24} />,
            title: "Educating Students",
            description: "Teaching students from 1st to 7th standard at local government grounds, providing education closer to home to eliminate barriers like travel."
        }
    ];

  return (
      <>
          <section id="our-work" className="py-20 px-4 flex flex-col justify-center items-center gap-6">
              {/* <button className='px-4 h-8 border border-gray-800 text-slate-200 text-xs rounded-lg'>Features</button> */}
              <h2 className="text-3xl md:text-[40px]/12 font-medium text-gray-100 max-w-lg text-center leading-tight">Our work and mission.</h2>
              <p className='text-base/7 text-gray-200 max-w-xl text-center'>Streamline operations, boost productivity, and scale effortlessly - all powered by intelligent automation.</p>
              <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {featuresData.map((feature, index) => (
                      <div key={index} className='bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 space-y-3 hover:bg-white/10 hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-300'>
                          {feature.icon}
                          <p className='font-medium text-lg text-gray-100'>{feature.title}</p>
                          <p className='text-sm/5 text-gray-200'>{feature.description}</p>
                      </div>
                  ))}
              </div>
          </section>
      </>
  )
}

export default Mission
