import EpisodesList from "@components/EpisodesList";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import "./styles.scss";

export default function AnimeDetails() {
  const { animeId } = useParams();
  const query = `query getAnimeDetails($animeId:ID){
    animeDetails(animeId:$animeId) {
      animeId
      animeTitle
      animeImg
      animeUrl
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
    ["getDetails " + animeId],
    () =>
      graphqlFetch({
        query,
        variables: { animeId },
      }),
    { refetchOnMount: false, refetchOnWindowFocus: false }
  );
  const episodesList = useMemo(() => data?.animeDetails?.episodesList, [data]);

  if (isError) {
    console.log(error);
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }

  return (
    <div className="anime-details">
      {isLoading && <Loader />}
      {episodesList && <EpisodesList episodesList={episodesList} />}
    </div>
  );
}
