// src/components/StyledVideoPlayer.tsx

import { useState, useRef, useEffect } from "react";

interface StyledVideoPlayerProps {
  src: string;
  poster?: string;
  autoPlayCount?: number;
  className?: string;
}

export function StyledVideoPlayer({
  src,
  poster,
  autoPlayCount = 3,
  className = "",
}: StyledVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      const newCount = playCount + 1;
      setPlayCount(newCount);

      if (newCount < autoPlayCount) {
        video.play();
      } else {
        setIsPlaying(false);
      }
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [playCount, autoPlayCount]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`relative aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-lg group ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        playsInline
        muted
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button Overlay */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-white/90 hover:bg-white border-2 border-gray-300 flex items-center justify-center shadow-lg transition-all hover:scale-110 cursor-pointer"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          // Pause Icon
          <svg
            className="w-6 h-6 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          // Play Icon - Larger and shifted left for centering
          <svg
            className="w-8 h-8 text-gray-800 ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}