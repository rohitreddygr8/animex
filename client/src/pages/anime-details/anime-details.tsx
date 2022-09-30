import styles from "./anime-details.module.scss";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Carousel, EpisodesList, Loader } from "@components";
import { api } from "@utils";
import { useQuery } from "@tanstack/react-query";

export default function AnimeDetails() {
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
    ["anime-details", animeId],
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
          </div>
          <p>{synopsis}</p>
        </div>
      </div>
      <div className={styles.episodesList}>{episodesList && <EpisodesList episodesList={episodesList} />}</div>
      <p>Similar anime</p>
      {/* <Carousel data={}/> */}
    </div>
  );
}
