import { useState, useRef } from "react";
import featureVideo from "../../../assets/videos/feature_video.mp4";
import { PlayIcon, PauseIcon } from "lucide-react";

export const VideoFeature = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setShowControls(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleMouseMove = () => {
    setShowControls(true);

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    }
  };

  return (
    <div className="mt-16">
      <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-white">
          {showControls && (
            <button
              onClick={handlePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 flex items-center justify-center transition-opacity duration-300 z-10"
            >
              {isPlaying ? (
                <PauseIcon className="w-6 h-6" />
              ) : (
                <PlayIcon className="w-6 h-6" />
              )}
            </button>
          )}

          <div className="flex items-center justify-center mt-2 h-full">
            <video
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              ref={videoRef}
              src={featureVideo}
              onEnded={handleVideoEnd}
              className="rounded-2xl object-cover shadow-2xl cursor-pointer"
              alt="Video about feature"
              onClick={handlePlayPause}
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};
