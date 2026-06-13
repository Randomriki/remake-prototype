import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = 'https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = videoSrc;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full scale-105"
      />
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-wine-900/40 to-wine-900" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default BackgroundVideo;
