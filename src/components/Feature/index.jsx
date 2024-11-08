import { useState, useRef } from "react";
import drawing from "../../assets/images/features/mdi_drawing.png";
import draw from "../../assets/images/features/mdi_draw.png";
import brush from "../../assets/images/features/mdi_brush.png";
import featureVideo from "../../assets/images/features/feature_video.mp4";
import { PlayIcon, PauseIcon } from "lucide-react";

export const Feature = () => {
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
    
    // Limpa o timeout anterior se existir
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    // Define novo timeout apenas se o vídeo estiver reproduzindo
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
    <div className="bg-white font-graphik py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <p className="text-lg text-gray-600">
            Most calendars are designed for teams. Slate is designed for
            freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <img src={drawing} alt="OpenType features" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              OpenType features
            </h3>
            <p className="text-gray-600">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <img src={draw} alt="Design with real data" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Design with real data
            </h3>
            <p className="text-gray-600">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src={brush}
                alt="Fastest way to take action"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fastest way to take action
            </h3>
            <p className="text-gray-600">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div
            className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
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

              <video
                ref={videoRef}
                src={featureVideo}
                onEnded={handleVideoEnd}
                className="rounded-2xl w-full h-full object-cover"
                onClick={handlePlayPause}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

