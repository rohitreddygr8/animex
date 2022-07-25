import styles from "./styles.module.scss";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { AnimeDetails, Episode } from "../../types/graphql";
import VideoPlayer from "@components/VideoPlayer";

export default function Watch() {
  const [searchParams] = useSearchParams();
  const src = searchParams.get("src");
  const referer = searchParams.get("referer");

  return (
    <div className={styles["watch"]}>
      {src && referer && <VideoPlayer referer={referer} src={src} />}
    </div>
  );
}
