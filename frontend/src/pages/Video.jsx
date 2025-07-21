import React from 'react';

const videos = [
  {
    id: 1,
    url: "/assets/Videos/face_mela.mp4",
    thumbnail: "/assets/Videos/vid_0.jpg",
    fallbackThumbnail: "/assets/images/fallback-hotel.jpg",
    title: "Face Mela Experience"
  },
  {
    id: 2,
    url: "/assets/Videos/video2.mp4",
    thumbnail: "/assets/Videos/vid_1.jpg",
    fallbackThumbnail: "/assets/images/fallback-nature.jpg",
    title: "Nature & Mountains"
  },
  {
    id: 3,
    url: "/assets/Videos/birthday.mp4",
    thumbnail: "/assets/Videos/vid_3.jpg",
    fallbackThumbnail: "/assets/images/fallback-food.jpg",
    title: "Birthday Celebrations"
  },
  {
    id: 4,
    url: "/assets/Videos/musical_nights.mp4",
    thumbnail: "/assets/Videos/vid_4.jpg",
    fallbackThumbnail: "/assets/images/fallback-music.jpg",
    title: "Musical Nights"
  },
  {
    id: 5,
    url: "/assets/Videos/guest_review2.mp4",
    thumbnail: "/assets/Videos/vid_5.jpg",
    fallbackThumbnail: "/assets/images/fallback-review.jpg",
    title: "Guest Reviews"
  },
  {
    id: 6,
    url: "/assets/Videos/video1.mp4",
    thumbnail: "/assets/Videos/vid_6.jpg",
    fallbackThumbnail: "/assets/images/fallback-lodge.jpg",
    title: "Lodge Experience"
  }
];

const VideoPlayer = ({ video }) => {
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video
        className="w-full h-full object-contain"
        controls
        preload="metadata"
        poster={video.thumbnail}
      >
        <source src={video.url} type="video/mp4" />
        {/* <source src={video.url.replace('.mp4', '.webm')} type="video/webm" /> */}
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;