import React from 'react';
import Navbar from '../component/home/Navbar';
import Footer from '../component/home/Footer';

export default function WomenEmpowerment() {
    return (
        <div className="bg-black text-white overflow-hidden relative min-h-screen">
            {/* Background glowing blobs */}
            <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-purple-950/20 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-pink-950/20 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative z-10">
                <Navbar />
                
                <section className="py-24 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl flex flex-col items-center">
                    <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 text-center">
                        Uplifting <br className="hidden md:block"/> <span className="text-purple-400">Women</span> through Dignity
                    </h1>
                    <p className="max-w-2xl text-center text-white/60 text-lg mb-16 leading-relaxed">
                        True empowerment begins with access to basic needs and education. We provide women with the tools, knowledge, and resources to lead healthy, independent lives.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-2xl">
                                🤝
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Self-Reliance Training</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Beyond healthcare, we offer vocational orientation and community support groups to help women build social and economic resilience.
                            </p>
                            <span className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full uppercase tracking-wider">Vocational Support</span>
                        </div>

                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 text-2xl">
                                📢
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Awareness Workshops</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Regular seminars on legal rights, reproductive health, and financial literacy to ensure women are informed and capable of making their own life choices.
                            </p>
                            <span className="inline-block px-4 py-1.5 bg-pink-500/20 text-pink-400 text-xs font-bold rounded-full uppercase tracking-wider">Community Outreach</span>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </div>
        </div>
    );
}
