import styles from "./video-player.module.scss";
import HlsPlayer from "react-hls-player";
import { useEffect, useRef, useState } from "react";
import LoaderIcon from "@assets/icons/loader.svg";

export const VideoPlayer = ({ src }: { src: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const { current: player } = playerRef;

  let loadingTimeout: NodeJS.Timeout | null = null;
  useEffect(() => {
    if (player) {
      player.onprogress = () => {
        setIsLoading(true);
      };

      player.onwaiting = () => {
        loadingTimeout = setTimeout(() => {
          setIsLoading(true);
        }, 500);
      };
      player.onplaying = () => {
        if (loadingTimeout) {
          clearTimeout(loadingTimeout);
        }
        setIsLoading(false);
      };
    }

    return () => {
      if (player) {
        player.onprogress = null;
      }
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      {/* {isLoading && (
        <div className={styles.loader}>
          <LoaderIcon />
        </div>
      )} */}
      <HlsPlayer src={src} controls playerRef={playerRef} className={styles.videoPlayer} />
    </div>
  );
};
