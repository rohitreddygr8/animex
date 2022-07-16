import VideoPlayer from "@components/VideoPlayer";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Query } from "../../types/graphql";
import styles from "./local.module.scss";
// import { Query } from "../../types/graphql";

export default function Watch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [referer, setReferer] = useState("");
  const [src, setSrc] = useState("");

  const fetchSource = async (episodeId: string) => {
    const res = await graphqlFetch({
      query: `query Test($episodeId:ID!){
      watch(episodeId: $episodeId) {
         data{
          referer
          sources {
            file
          }
        }
      }
    }`,
      variables: {
        episodeId: episodeId,
      },
    });

    setReferer(res.watch?.data?.referer);
    setSrc(res?.watch?.data?.sources[0]?.file);
  };
  return (
    <div className={styles["watch-page"]}>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          fetchSource(inputRef.current?.value as string);
        }}
      >
        GET
      </button>
      <VideoPlayer referer={referer} src={src} />
    </div>
  );
}
