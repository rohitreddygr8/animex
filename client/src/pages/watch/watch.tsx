import styles from "./watch.module.scss";
import { Loader, VideoPlayer, CommentSection } from "@components";
import { Link, useParams } from "react-router-dom";
import { api } from "@utils";
import { useQuery } from "@tanstack/react-query";

interface IGetSource {
  watch: {
    data: {
      referer: string;
      sources: {
        file: string;
      }[];
    };
  };
}

export const Watch = () => {
  const { episodeId } = useParams();
  const animeId = episodeId
    ?.split("-")
    .splice(0, episodeId.split("-").length - 2)
    .join("-");

  const query = `query getSource($episodeId:ID!){
  watch(episodeId:$episodeId){
    data{
      referer
      sources{
        file
      }
    }
  }
}`;

  const animeQuery = `query getAnimeDetails($animeId:ID){
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
    ["watch", episodeId],
    () =>
      api.fetchGraphQL({
        query,
        variables: { episodeId },
      }),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
    }
  );

  const { data: animeData } = useQuery(
    ["watch", animeId],
    () =>
      api.fetchGraphQL({
        query: animeQuery,
        variables: { animeId },
      }),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
    }
  );

  if (isError) {
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }
  const episodesList = animeData.animeDetails.episodesList;
  const currentEpisode = episodesList.findIndex((ep: any) => ep.episodeId === episodeId);
  const nextEpisode = episodesList[currentEpisode - 1];
  const previousEpisode = episodesList[currentEpisode + 1];
  return (
    <div>
      {isLoading && <Loader />}
      {data && <VideoPlayer src={data.watch.data.sources[0].file} />}
      <div>
        {previousEpisode && parseInt(previousEpisode.episodeNum) && (
          <Link to={`../watch/${previousEpisode.episodeId}`}>
            <button>Previous episode</button>
          </Link>
        )}
        {nextEpisode && parseInt(nextEpisode.episodeNum) < animeData.animeDetails.episodesList.length && (
          <Link to={`../watch/${nextEpisode.episodeId}`}>
            <button>Next episode</button>
          </Link>
        )}
      </div>
      {/* {episodeId && <CommentSection episodeId={episodeId} />} */}
    </div>
  );
};
