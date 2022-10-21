import styles from "./anime-details.module.scss";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Carousel, EpisodesList, Loader } from "@components";
import { api } from "@utils";
import { useQuery } from "@tanstack/react-query";
import WatchListIcon from "@assets/icons/bookmark-plus.svg";

export const AnimeDetails = () => {
  const { animeId } = useParams();

  const query = `query getAnimeDetails($animeId:ID){
    animeDetails(animeId:$animeId) {
      animeTitle
      animeImg
      animeUrl
      genres
      type
      releasedDate
      status
      synopsis
      episodesList {
      episodeId
      episodeNum
    }
      totalEpisodes
      otherNames
  }
}`;

  const { data, isLoading, isError, error } = useQuery(
    ["watch", animeId],
    () =>
      api.fetchGraphQL({
        query,
        variables: { animeId },
      }),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
    }
  );

  const episodesList = useMemo(() => data?.animeDetails?.episodesList, [data]);

  if (isError) {
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }
  if (isLoading) {
    return <Loader />;
  }
  const { animeImg, animeTitle, synopsis, genres, releasedDate, status } = data.animeDetails;

  const addToWatchList = async () => {
    const res = await api.addToWatchList(animeId as string);
  };

  return (
    <div className={styles.animeDetails}>
      <div className={styles.animeDetailsWrapper}>
        <img className={styles.animeImg} src={animeImg} alt={animeId} />
        <div className={styles.animeInfo}>
          <h2>{animeTitle}</h2>
          <div style={{ display: "flex" }}>
            {genres?.map((genre: string) => {
              return <span key={genre}>{genre}</span>;
            })}
            <h4>{releasedDate}</h4>
            <h4>{status}</h4>
            <button className={styles.watchListBtn} onClick={addToWatchList}>
              <WatchListIcon />
              Add to watch list
            </button>
          </div>
          <p>{synopsis}</p>
        </div>
      </div>
      <div className={styles.episodesList}>{episodesList && <EpisodesList episodesList={episodesList} />}</div>
    </div>
  );
};
