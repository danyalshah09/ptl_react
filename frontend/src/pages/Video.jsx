import React, { useState, useRef } from 'react';

const videos = [
  {
    id: 1,
    url: "/assets/Videos/face_mela.mp4",
    thumbnail: "/assets/Videos/video_0.jpg",
    fallbackThumbnail: "/assets/images/fallback-hotel.jpg",
    title: "Face Mela Experience"
  },
  {
    id: 2,
    url: "/assets/Videos/video2.mp4",
    thumbnail: "/assets/Videos/video_1.jpg",
    fallbackThumbnail: "/assets/images/fallback-nature.jpg",
    title: "Nature & Mountains"
  },
  {
    id: 3,
    url: "/assets/Videos/birthday.mp4",
    thumbnail: "/assets/Videos/video_2.jpg",
    fallbackThumbnail: "/assets/images/fallback-food.jpg",
    title: "Birthday Celebrations"
  },
  {
    id: 4,
    url: "/assets/Videos/musical_nights.mp4",
    thumbnail: "/assets/Videos/video_3.jpg",
    fallbackThumbnail: "/assets/images/fallback-music.jpg",
    title: "Musical Nights"
  },
  {
    id: 5,
    url: "/assets/Videos/guest_review2.mp4",
    thumbnail: "/assets/Videos/video_4.jpg",
    fallbackThumbnail: "/assets/images/fallback-review.jpg",
    title: "Guest Reviews"
  },
  {
    id: 6,
    url: "/assets/Videos/video1.mp4",
    thumbnail: "/assets/Videos/video_5.jpg",
    fallbackThumbnail: "/assets/images/fallback-lodge.jpg",
    title: "Lodge Experience"
  }
];

const VideoPlayer = ({ video, isError, onPlay, onError, setVideoRef, poster }) => {
  if (isError) {
    return (
      <div className="w-full aspect-video bg-gray-800 flex flex-col items-center justify-center text-gray-400 rounded-lg">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zM12 8a1 1 0 112 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-sm text-center px-4">
          Video temporarily unavailable
        </p>
        <p className="text-xs text-gray-500 mt-1">{video.title}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video
        ref={setVideoRef}
        className="w-full h-full object-cover"
        controls
        preload="metadata"
        poster={poster}
        onPlay={onPlay}
        onError={onError}
      >
        <source src={video.url} type="video/mp4" />
        <source src={video.url.replace('.mp4', '.webm')} type="video/webm" />
        <p className="text-gray-400 p-4">
          Your browser does not support the video tag.
          <a href={video.url} className="text-amber-500 hover:underline ml-1">
            Download video
          </a>
        </p>
      </video>
    </div>
  );
};

const VideoSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [videoErrors, setVideoErrors] = useState({});
  const [thumbnailErrors, setThumbnailErrors] = useState({});
  const videoRefs = useRef({});

  const handlePlay = (videoId) => {
    // Pause all other videos when a new one starts playing
    Object.entries(videoRefs.current).forEach(([id, videoElement]) => {
      if (parseInt(id) !== videoId && videoElement && !videoElement.paused) {
        videoElement.pause();
      }
    });
    setCurrentlyPlaying(videoId);
  };

  const handleVideoError = (videoId, error) => {
    console.warn(`Video ${videoId} failed to load:`, error);
    setVideoErrors(prev => ({
      ...prev,
      [videoId]: true
    }));
  };

  const createPlaceholderImage = (title) => {
    // Create a simple SVG placeholder
    const svg = `
      <svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="450" fill="#374151"/>
        <rect x="350" y="175" width="100" height="100" rx="50" fill="#6B7280"/>
        <polygon points="380,200 380,250 420,225" fill="#374151"/>
        <text x="400" y="290" fill="#9CA3AF" font-family="sans-serif" font-size="18" text-anchor="middle">${title}</text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  const getPosterImage = (video) => {
    // If thumbnail failed to load, try fallback, then placeholder
    if (thumbnailErrors[video.id]) {
      if (video.fallbackThumbnail) {
        return video.fallbackThumbnail;
      }
      return createPlaceholderImage(video.title);
    }
    return video.thumbnail;
  };

  // Create a hidden img element to test thumbnail loading
  const ThumbnailTester = ({ video }) => (
    <img
      src={video.thumbnail}
      alt=""
      style={{ display: 'none' }}
      onError={() => {
        console.warn(`Thumbnail failed for video ${video.id}: ${video.thumbnail}`);
        setThumbnailErrors(prev => ({
          ...prev,
          [video.id]: true
        }));
      }}
      onLoad={() => {
        // Reset error state if thumbnail loads successfully
        setThumbnailErrors(prev => ({
          ...prev,
          [video.id]: false
        }));
      }}
    />
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-500 mb-4">Experience Passu Like Never Before</h2>
          <p className="text-gray-300 text-lg">Watch our videos to explore the magic of Passu Tourist Lodge.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-800"
            >
              <VideoPlayer
                video={video}
                poster={getPosterImage(video)}
                isError={!!videoErrors[video.id]}
                setVideoRef={el => videoRefs.current[video.id] = el}
                onPlay={() => handlePlay(video.id)}
                onError={(e) => handleVideoError(video.id, e)}
              />

              {/* Hidden thumbnail tester */}
              <ThumbnailTester video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;