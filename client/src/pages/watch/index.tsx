import styles from "./styles.module.scss";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import { AnimeDetails, Episode } from "../../types/graphql";
import VideoPlayer from "@components/VideoPlayer";

export default function Watch() {
  const { state } = useLocation();
  //@ts-ignore
  const src = state.src;
  //@ts-ignore
  const referer = state.referer;
  console.log(src, referer);

  return (
    <div className={styles["watch"]}>
      {src && referer && <VideoPlayer referer={referer} src={src} />}
    </div>
  );
}
