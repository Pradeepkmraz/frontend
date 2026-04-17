import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JoinModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted!");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                    />

                    {/* Floating Modal Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ 
                            opacity: 1, 
                            y: [0, -10, 0], 
                            scale: 1,
                            transition: { 
                                duration: 0.5,
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }
                        }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white/5 border border-white/10 backdrop-blur-md text-white w-full max-w-md rounded-3xl p-8 shadow-[0_0_40px_rgba(99,102,241,0.2)]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>

                        <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-2 text-center text-indigo-100">
                            Join Us
                        </h2>
                        <p className="text-center text-white/50 text-sm mb-6">Become a hero in the Navjeevan community.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder:text-white/30"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder:text-white/30"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder:text-white/30"
                            />

                            <textarea
                                name="address"
                                placeholder="Address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                                className="bg-white/5 border border-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder:text-white/30 resize-none"
                            />

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:scale-[1.02] text-white font-medium py-3 rounded-xl mt-2 transition-all duration-300"
                            >
                                Submit Request
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default JoinModal;