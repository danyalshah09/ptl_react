import React, { useState, useRef } from 'react';

const videos = [
  {
    id: 1,
    url: "/assets/Videos/face_mela.mp4",
    thumbnail: "https://source.unsplash.com/800x450/?hotel,luxury"
  },
  {
    id: 2,
    url: "/assets/Videos/video2.mp4",
    thumbnail: "https://source.unsplash.com/800x450/?nature,mountains"
  },
  {
    id: 3,
    url: "/assets/Videos/birthday.mp4",
    thumbnail: "https://source.unsplash.com/800x450/?food,cuisine"
  },
  {
    id: 4,
    url: "/assets/Videos/musical_nights.mp4",
    thumbnail: "https://source.unsplash.com/800x450/?food,cuisine"
  },
  {
    id: 5,
    url: "/assets/Videos/guest_review2.mp4",
    thumbnail: "https://source.unsplash.com/800x450/?food,cuisine"
  },
  {
    id: 6,
    url: "/assets/Videos/video1.mp4",
    thumbnail: "https://source.unsplash.com/800x450/?food,cuisine"
  }
];

const VideoSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const videoRefs = useRef({});

  const handlePlay = (videoId) => {
    // Pause all other videos when a new one starts playing
    Object.entries(videoRefs.current).forEach(([id, videoElement]) => {
      if (parseInt(id) !== videoId && !videoElement.paused) {
        videoElement.pause();
      }
    });
    setCurrentlyPlaying(videoId);
  };

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
              className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <video
                ref={el => videoRefs.current[video.id] = el}
                className="w-full aspect-video object-contain bg-black"
                poster={video.thumbnail}
                controls
                preload="metadata"
                onPlay={() => handlePlay(video.id)}
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;