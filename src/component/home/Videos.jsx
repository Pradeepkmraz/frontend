import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const Video = () => {
    const videos = ["/Videos1.mp4", "/Videos2.mp4"];

    const videoRef = useRef(null);

    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    // ▶ Play / Pause
    const togglePlay = () => {
        if (!videoRef.current) return;

        setIsPaused(true); // stop auto slide

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

    // Sync video state on change
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
        <div className="group relative shadow-2xl shadow-indigo-600/20 rounded-2xl overflow-hidden w-full max-w-md">

            {/* VIDEO */}
            <video
                ref={videoRef}
                src={videos[currentVideo]}
                className="w-full h-112.5 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                muted={isMuted}
                autoPlay
                playsInline
                onEnded={handleEnded}
            />

            {/* LEFT BUTTON */}
            <button
                onClick={goPrev}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
                ←
            </button>

            {/* RIGHT BUTTON */}
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

            {/* MUTE / UNMUTE */}
            <button
                onClick={toggleMute}
                className="absolute bottom-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
        </div>
    );
};

export default Video;