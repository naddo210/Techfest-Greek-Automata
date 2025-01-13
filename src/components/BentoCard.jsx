import React, { useState } from "react";

const BentoCard = ({ src, videoSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative size-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Display Image or Video */}
      {isHovered ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={src}
          alt={title}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      )}

      {/* Content */}
      <div className="relative z-10 p-5 text-blue-50">
        <h1 className="text-lg font-bold">{title}</h1>
        {description && <p className="mt-2 text-sm">{description}</p>}
      </div>
    </div>
  );
};

// Test the BentoCard Component
const TestBentoCard = () => {
  return (
    <div className="flex flex-wrap gap-8 p-8 bg-gray-900">
      <BentoCard
        src="img/web_development.avif"
        videoSrc="/videos/hero-3.mp4"
        title="Web Development"
        description="Starting At 8:20 AM - Room No: 601"
      />
      <BentoCard
        src="img/blind_coding.jpg"
        videoSrc="videos/blind_coding.mp4"
        title="Blind Coding"
        description="Starting At 8:20 AM - Room No: 301"
      />
      <BentoCard
        src="img/ludo.avif"
        videoSrc="videos/ludo.mp4"
        title="Ludo"
        description="Starting At 8:20 AM - Room No: 508"
      />
    </div>
  );
};

export default TestBentoCard;
