import React from 'react';
import Navbar from '../component/home/Navbar';
import Footer from '../component/home/Footer';

export default function Education() {
    return (
        <div className="bg-black text-white overflow-hidden relative min-h-screen">
            {/* Background glowing blobs */}
            <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-blue-950/20 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-indigo-950/20 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative z-10">
                <Navbar />
                
                <section className="py-24 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl flex flex-col items-center">
                    <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 text-center">
                        Empowering Minds <br className="hidden md:block"/> Through <span className="text-blue-400">Education</span>
                    </h1>
                    <p className="max-w-2xl text-center text-white/60 text-lg mb-16 leading-relaxed">
                        We believe that education is the most powerful tool for breaking the cycle of poverty. By equipping underprivileged students with essential literacy and free computer skills, we prepare them for the modern world.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-2xl">
                                💻
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Digital Literacy Lab</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                We run state-of-the-art computer labs teaching fundamental IT skills, internet navigation, and software utilization to bridge the rural digital divide.
                            </p>
                            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">Free Access</span>
                        </div>

                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-2xl">
                                📚
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Grassroots Coaching</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Daily outdoor schooling programs for students from 1st to 7th grade. We bring quality education directly into the village, eliminating travel barriers.
                            </p>
                            <span className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">1200+ Students</span>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </div>
        </div>
    );
}
