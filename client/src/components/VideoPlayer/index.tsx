import { useEffect, useRef, useState } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";

export default function VideoPlayer({ referer, src }: { referer: string; src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);
  const options: VideoJsPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `/proxy?referer=${referer}&src=${src}`,
        type: "application/vnd.apple.mpegurl",
      },
    ],
  };

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, options);
    }
    return () => {
      playerRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src({ src, type: "application/vnd.apple.mpegurl" });
    }
  }, [src]);

  return (
    <div data-vjs-player>
      {referer && src && <video ref={videoRef} className="video-js vjs-big-play-centered" />}
    </div>
  );
}
