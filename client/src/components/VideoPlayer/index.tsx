import "./styles.scss";
import { memo, useEffect, useRef } from "react";
import { Hls, LoadingScreen, MenuItem, Player, Scrim, Settings, Spinner, Ui } from "@vime/react";
import useLocalStorage from "@utils/hooks/useLocalStorage";

function VideoPlayer({ src }: { src: string }) {
  const playerRef = useRef<HTMLVmPlayerElement | null>(null);
  const [volume, setVolume] = useLocalStorage({ key: "animex-player-volume" });
  const handleVolume = (e: CustomEvent<number>) => {
    setVolume(String(e.detail));
  };
  useEffect(() => {
    if (!volume) {
      setVolume(String(playerRef.current?.volume));
    }
    if (volume && playerRef.current) {
      playerRef.current.volume = +volume;
    }
  }, [volume]);

  return (
    <div className="wrapper">
      <div className="video-player">
        <Player controls ref={playerRef} onVmVolumeChange={handleVolume}>
          <Hls version="latest">
            <source data-src={src} type="application/vnd.apple.mpegurl" />
          </Hls>
          <Settings>
            <MenuItem label="Quality" />
          </Settings>
        </Player>
      </div>
    </div>
  );
}

export default memo(VideoPlayer);
