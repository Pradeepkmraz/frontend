import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";


export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setMegaOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setMegaOpen(false);
        }, 300);
    };

    return (
        <nav className="flex items-center justify-between p-3 md:px-16 lg:px-24 xl:px-32 w-full py-4 bg-black text-white sticky top-0 z-40">
            <Link to="/">
                <Logo />
            </Link>
            <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:absolute max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 text-sm`}>
                <Link to="/" onClick={() => setMobileOpen(false)} className="hover:text-gray-300 transition-colors">Home</Link>
                <a href="/#about" onClick={() => setMobileOpen(false)} className="hover:text-gray-300 transition-colors">About</a>
                <div
                    className="relative group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                        Our Work <ChevronDown size={16} />
                    </button>

                    <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-0 w-64 bg-slate-900 text-white shadow-xl rounded-xl p-4 transition-all duration-300 ease-out pointer-events-none ${megaOpen ? "opacity-100 translate-y-0 visible pointer-events-auto" : "opacity-0 -translate-y-2 invisible"}`}>
                        <div className="flex flex-col gap-3">
                            <Link to="/education" onClick={() => setMobileOpen(false)} className="hover:text-indigo-400 cursor-pointer transition-colors text-sm">Education</Link>
                            <Link to="/healthcare" onClick={() => setMobileOpen(false)} className="hover:text-indigo-400 cursor-pointer transition-colors text-sm">Healthcare</Link>
                            <Link to="/women-empowerment" onClick={() => setMobileOpen(false)} className="hover:text-indigo-400 cursor-pointer transition-colors text-sm">Women Empowerment</Link>
                        </div>
                    </div>
                </div>
                <a href="/#impact" onClick={() => setMobileOpen(false)} className="hover:text-indigo-400 transition-colors">Impact</a>
                <a href="/#our-work" onClick={() => setMobileOpen(false)} className="hover:text-indigo-400 transition-colors">Stories</a>
                <a href="/#contact" onClick={() => setMobileOpen(false)} className="hover:text-indigo-400 transition-colors">Contact</a>

                <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
            <a href="/#contact" className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm transition cursor-pointer">
                Contact us
            </a>

            <button id="open-menu" onClick={() => setMobileOpen(true)}
                className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                </svg>
            </button>
        </nav>
    );
}
