import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useRef, useState } from "react";
import styles from "./local.module.scss";
import "@vime/core/themes/default.css";
import { Hls, Player, Video } from "@vime/react";

export default function Watch() {
  const testRef = useRef<HTMLIFrameElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [referer, setReferer] = useState("");
  const [src, setSrc] = useState("");

  const options = {
    headers: {
      Referer: "https://ssbstream.net/e/6m6tnimse821",
    },
  };
  const fetchFile = async () => {
    const res = await graphqlFetch({
      query: `query Test($episodeId:ID!){
  watch(episodeId: $episodeId) {
     vidcdn{
      referrer
      sources {
        file
      }
    }
  }
}`,
      variables: {
        episodeId: "shingeki-no-kyojin-episode-1",
      },
    });
    setReferer(res?.watch?.vidcdn?.referrer);
    setSrc(res?.watch?.vidcdn?.sources[0]?.file);
  };
  useEffect(() => {
    fetchFile();
  }, []);
  return (
    <div className={styles["watch-page"]}>
      <div className="test">
        <Player controls>
          <Hls>
            <source
              data-src={src && `http://localhost:4000/proxy?referer=${referer}&src=${src}`}
              type="application/vnd.apple.mpegurl"
            />
          </Hls>
        </Player>
      </div>
    </div>
  );
}
