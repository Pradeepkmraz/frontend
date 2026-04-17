import React from 'react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-slate-50 dark:bg-black/40 border-t border-black/5 dark:border-white/10 backdrop-blur-lg pt-12 px-6 pb-8 text-slate-900 dark:text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 flex-wrap mb-8">
                <div>
                    <div className="font-['Playfair_Display'] text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
                        <span className="text-indigo-600 dark:text-indigo-400">V</span>inaywings
                    </div>
                    <p className="text-slate-600 dark:text-white/80 text-sm mt-2 max-w-sm leading-relaxed mb-6">
                        Navjeevan Foundation — Bringing new life through education & dignity. Empowering women and educating students across rural India.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/vwnj_foundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300" title="Instagram">
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                        <a href="https://wa.me/918368880648" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300" title="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </a>
                        <a href="https://facebook.com/Vinay-Wings-Navjeevan-Foundation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300" title="Facebook">
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="mailto:vwnjfoundation@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300" title="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </a>
                    </div>
                </div>
                
                <div className="flex gap-8 flex-wrap">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-white font-semibold mb-1">Links</h4>
                        <a href="/#about" className="text-white/50 text-sm hover:text-indigo-400 transition-colors duration-200">About Us</a>
                        <a href="/#our-work" className="text-white/50 text-sm hover:text-indigo-400 transition-colors duration-200">Our Work</a>
                        <a href="/#impact" className="text-white/50 text-sm hover:text-indigo-400 transition-colors duration-200">Impact Stories</a>
                        <a href="/#contact" className="text-white/50 text-sm hover:text-indigo-400 transition-colors duration-200">Contact</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-white font-semibold mb-1">Get Involved</h4>
                        {["Volunteer", "Donate", "Partner With Us"].map((l) => (
                            <a key={l} href="#" className="text-white/50 text-sm hover:text-indigo-400 transition-colors duration-200">
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto border-t border-white/5 pt-6 text-center text-white/30 text-xs md:text-sm">
                © {new Date().getFullYear()} Vinaywings Navjeevan Foundation · Founded by Nitu Yadav · All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
