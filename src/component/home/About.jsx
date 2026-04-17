import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const About = () => {
    const videos = ["/Videos1.mp4", "/Videos2.mp4"];

    const videoRef = useRef(null);

    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    // ▶ Play / Pause
    const togglePlay = () => {
        if (!videoRef.current) return;

        setIsPaused(true);

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    // 🔊 Mute / Unmute
    const toggleMute = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // ➡ Next Video
    const goNext = () => {
        setIsPaused(true);
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    // ⬅ Previous Video
    const goPrev = () => {
        setIsPaused(true);
        setCurrentVideo((prev) =>
            prev === 0 ? videos.length - 1 : prev - 1
        );
    };

    // 🎬 Auto slide ONLY when video ends
    const handleEnded = () => {
        if (!isPaused) {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }
    };

    // Sync video behavior
    useEffect(() => {
        if (!videoRef.current) return;

        videoRef.current.muted = isMuted;

        if (isPlaying) {
            videoRef.current.play().catch(() => { });
        } else {
            videoRef.current.pause();
        }
    }, [currentVideo]);

    return (
        <div id="about" className="flex flex-col items-center">
            <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20 px-6 md:px-16 lg:px-24 xl:px-32">

                {/* TEXT CONTENT */}
                <div className="text-base max-w-lg">
                    <h2 className="text-2xl uppercase font-bold text-slate-400 tracking-wide">
                        What we do?
                    </h2>

                    <div className="w-20 h-1 mt-2 rounded-full bg-linear-to-r from-indigo-600 to-indigo-300"></div>

                    <div className="mt-8 space-y-4">
                        <p className="text-slate-200">
                            Vinaywings Navjeevan Foundation, founded by Nitu Yadav, is on a
                            mission to empower women and uplift economically disadvantaged
                            students by providing free computer knowledge and essential
                            education.
                        </p>

                        <p className="text-slate-200">
                            Our commitment extends beyond education into the critical realm of
                            health and hygiene. Through our Feelwow brand, we distribute free
                            sanitary pads to raise awareness about menstrual health among
                            illiterate women living below the poverty line.
                        </p>

                        <p className="text-slate-200">
                            With compassion at our core, we strive to bring dignity, knowledge,
                            and opportunity to those who need it most.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-10 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all bg-linear-to-r from-indigo-600 to-indigo-500 py-4 px-10 rounded-full text-white font-medium"
                    >
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff"
                            />
                        </svg>
                    </a>
                </div>

                {/* VIDEO SECTION */}
                <div className="group relative w-full md:w-1/2 shadow-2xl shadow-indigo-600/20 rounded-2xl overflow-hidden">

                    <video
                        ref={videoRef}
                        src={videos[currentVideo]}
                        className="w-full h-112.5 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                        muted={isMuted}
                        autoPlay
                        playsInline
                        onEnded={handleEnded}
                    />

                    {/* LEFT */}
                    <button
                        onClick={goPrev}
                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                        ←
                    </button>

                    {/* RIGHT */}
                    <button
                        onClick={goNext}
                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                        →
                    </button>

                    {/* PLAY / PAUSE */}
                    <button
                        onClick={togglePlay}
                        className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full"
                    >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    {/* MUTE */}
                    <button
                        onClick={toggleMute}
                        className="absolute bottom-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
                </div>

            </section>
        </div>
    );
};

export default About;