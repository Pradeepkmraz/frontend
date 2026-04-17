import React from 'react';
import Navbar from '../component/home/Navbar';
import Footer from '../component/home/Footer';

export default function Healthcare() {
    return (
        <div className="bg-white dark:bg-black text-slate-900 dark:text-white overflow-hidden relative min-h-screen transition-colors duration-300">
            {/* Background glowing blobs */}
            <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-emerald-500/5 dark:bg-emerald-950/20 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-teal-500/5 dark:bg-teal-950/20 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative z-10">
                <Navbar />
                
                <section className="py-24 px-6 md:px-16 lg:px-24 mx-auto max-w-7xl flex flex-col items-center">
                    <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 text-center text-slate-900 dark:text-white">
                        Community <br className="hidden md:block"/> <span className="text-emerald-600 dark:text-emerald-400">Healthcare</span> Initiatives
                    </h1>
                    <p className="max-w-2xl text-center text-slate-600 dark:text-white/60 text-lg mb-16 leading-relaxed">
                        Access to fundamental health resources shouldn't be a luxury. Through targeted interventions and our flagship Feelwow awareness brand, we restore dignity and wellness to rural communities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
                        <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 shadow-lg">
                            <div className="w-14 h-14 bg-white/10 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10 flex items-center justify-center mb-6 text-2xl">
                                🌸
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Feelwow Menstrual Health</h3>
                            <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-6">
                                We manufacture and distribute thousands of free, high-quality sanitary napkins every month, actively breaking taboos and educating women on foundational hygiene practices.
                            </p>
                            <span className="inline-block px-4 py-1.5 bg-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-bold rounded-full uppercase tracking-wider">30,000+ Distributed</span>
                        </div>

                        <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 shadow-lg">
                            <div className="w-14 h-14 bg-white/10 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10 flex items-center justify-center mb-6 text-2xl">
                                🩺
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Rural Wellness Camps</h3>
                            <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-6">
                                Organizing mobile medical units that deliver essential preventative screenings, nutritional counseling, and maternal care directly to remote populations.
                            </p>
                            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">Active Outreach</span>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </div>
        </div>
    );
}
