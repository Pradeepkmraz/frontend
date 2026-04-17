import { motion } from "framer-motion";

const Logo = () => {
    return (
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-indigo-900 shadow-[0_0_10px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:scale-110 transition-all duration-300 shrink-0">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Branding Text */}
            <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    Vinay Wings
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-semibold mt-1">
                    Foundation
                </span>
            </div>
        </div>
    );
};

export default Logo;
