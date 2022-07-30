import "./styles.scss";
import { memo } from "react";
import { Hls, Player } from "@vime/react";

function VideoPlayer({ referer, src }: { referer: string; src: string }) {
  return (
    <div className="wrapper">
      <div className="video-player">
        <Player controls>
          <Hls version="latest">
            <source data-src={`${src}`} type="application/vnd.apple.mpegurl" />
          </Hls>
        </Player>
      </div>
    </div>
  );
}

export default memo(VideoPlayer);
