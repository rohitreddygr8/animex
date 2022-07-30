import EpisodesList from "@components/EpisodesList";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import "./styles.scss";

export default function AnimeDetails() {
  const [searchParams] = useSearchParams();
  const animeId = searchParams.get("animeId");
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

  const { data, isLoading, isError, error } = useQuery("getDetails " + animeId, () => {
    return graphqlFetch({
      query,
      variables: { animeId },
    });
  });

  if (isError) {
    console.log(error);
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }

  return (
    <div className="anime-details">
      {isLoading && <Loader />}
      {data && <EpisodesList episodesList={data.animeDetails.episodesList} />}
    </div>
  );
}
