import { useState, useEffect } from "react";
import JoinModal from "./JoinModal";

const Hero = () => {

    const images = [
        "/IMG-20250201-WA0029.jpg",
        "/IMG-20250201-WA0043.jpg",
        "/IMG-20250814-WA0003.jpg",
        "/IMG20250504180028.jpg",
        "/IMG-20260106-WA0015.jpg",
        "/IMG-20260126-WA0026.jpg",
    ];

    const handleNext = () => {
        setIsPaused(true);
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(true);
    };

    const handlePrev = () => {
        setIsPaused(true);

        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(sliderImages.length - 2);
        } else {
            setCurrentIndex((prev) => prev - 1);
            setIsTransitioning(true);
        }
    };

    const sliderImages = [...images, images[0]];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (currentIndex === sliderImages.length - 1) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 700);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, sliderImages.length]);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <>
            <section id="home" className='flex flex-col items-center pt-4'>

                <div className="flex flex-wrap items-center justify-center p-1.5 mt-32 rounded-full border border-indigo-900 text-xs">
                    <div className="flex items-center">
                        <img className="size-7 rounded-full border border-indigo-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                        <img className="size-7 rounded-full border border-indigo-900 -translate-x-2" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                        <img className="size-7 rounded-full border border-indigo-900 -translate-x-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop" alt="userImage3" />
                    </div>
                    <p className="-translate-x-2 text-xs text-slate-600 dark:text-slate-200">Join community of 1m+ founders </p>
                </div>

                <h2 className="text-4xl md:text-7xl/20 text-center max-w-4xl mt-2 text-slate-50 bg-clip-text leading-tight px-4">
                    Vinay Wings <br />
                    Navjeevan Foundation
                </h2>
                <p className="text-slate-50 text-sm md:text-base/7 text-center max-w-162.5 mt-3 px-4">
                    Powered by The Vinay Enterprises.
                    Come with Learn and Earn.
                </p>

                <div className="flex gap-4 mt-10">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-base px-8 py-3 rounded-lg transition shadow-lg shadow-indigo-600/20 cursor-pointer'
                    >
                        <span>Join Us</span>
                    </button>

                    <button className='flex items-center gap-2 text-slate-50 text-xs md:text-base px-8 py-3 rounded-lg transition cursor-pointer'>
                        <span>Follow us</span>
                        <div className="relative flex size-3.5 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
                        </div>
                    </button>
                </div>
                <div className="relative mt-12 w-full max-w-4xl px-4 overflow-hidden">
                    {/* Slider */}
                    <div
                        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {sliderImages.map((img, index) => (
                            <div key={index} className="relative w-full shrink-0 overflow-hidden rounded-xl group">
                                <img
                                    src={img}
                                    className="w-full max-h-100 object-cover transition-all duration-500 group-hover:scale-105"
                                    alt="slider"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            </div>

                        ))}
                    </div>

                    {/* LEFT BUTTON */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur p-2 rounded-full"
                    >
                        ←
                    </button>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur p-2 rounded-full"
                    >
                        →
                    </button>
                </div>
                <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </section>
        </>
    )
}


export default Hero;