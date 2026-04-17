import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-white/10 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{ 
                        opacity: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : 90,
                        scale: theme === 'light' ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-amber-500"
                >
                    <Sun size={20} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ 
                        opacity: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : -90,
                        scale: theme === 'dark' ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-indigo-400"
                >
                    <Moon size={20} />
                </motion.div>
            </div>
        </motion.button>
    );
};

export default ThemeToggle;
