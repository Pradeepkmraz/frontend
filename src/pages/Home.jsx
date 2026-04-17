import React from 'react'
import Navbar from '../component/home/Navbar'
import Hero from '../component/home/Hero'
import About from '../component/home/About'
import Mission from '../component/home/Mission'
import FuturePlans from '../component/home/FuturePlans'
import Support from '../component/home/Support'
import NeedFund from '../component/home/NeedFund'
import ContactUs from '../component/home/ContactUs'
import Footer from '../component/home/Footer'

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden relative min-h-screen">
      {/* Optional decorative blurred gradients behind everything */}
      <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-indigo-950/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-purple-950/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Mission />
        <FuturePlans />
        <Support />
        <NeedFund />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}

export default Home
