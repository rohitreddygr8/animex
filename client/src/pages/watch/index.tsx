import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useRef, useState } from "react";
import styles from "./local.module.scss";

export default function Watch() {
  const testRef = useRef<HTMLIFrameElement>(null);
  const [val, setVal] = useState("");
  useEffect(() => {
    graphqlFetch({
      query: `query Test($episodeId:ID!){
  watch(episodeId: $episodeId) {
    vidcdn {
      referrer
      sources {
        file
      }
    }
  }
}`,
      variables: {
        episodeId: "one-piece-episode-9",
      },
    }).then((res) => {
      console.log(res?.watch?.vidcdn);
      setVal(res?.watch?.vidcdn?.referrer);
    });

    (window as any).open_alias = window.open;
    window.open = function () {
      return null;
    };
    if (testRef.current) {
      testRef.current.setAttribute("sandbox", "allow-same-origin allow-scripts allow-fullscreen");
    }
  }, []);
  return (
    <div className={styles["watch-page"]}>
      <div className="test">
        <iframe
          src={val}
          ref={testRef}
          style={{ border: 0, width: "100%", height: "100%", position: "absolute" }}
        ></iframe>
      </div>
    </div>
  );
}
