import EpisodeButton from "@components/EpisodeButton";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimeDetails } from "../../types/graphql";
import "./styles.scss";

export default function AnimeDetailsPage() {
  const [searchParams] = useSearchParams();
  const animeId = searchParams.get("anime-id");
  const [data, setData] = useState<AnimeDetails | null>(null);
  const getAnimeDetails = async (animeId: string) => {
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
    const res = await graphqlFetch({
      query,
      variables: { animeId },
    });
    setData(res.animeDetails);
  };

  const memoizedAnimeDetails = useMemo(() => getAnimeDetails, [animeId]);

  useEffect(() => {
    if (animeId) {
      memoizedAnimeDetails(animeId);
    }
  }, [animeId]);

  return (
    <div className="anime-details">
      <div className="episodes-list">
        <p style={{ margin: "1em", color: "white" }}>Episodes:</p>
        {data?.episodesList
          ?.slice(0)
          .reverse()
          .map((episode) => {
            return (
              <EpisodeButton
                episodeId={episode?.episodeId as string}
                episodeNumber={Number(episode?.episodeNum)}
                key={Number(episode?.episodeNum)}
              />
            );
          })}
      </div>
    </div>
  );
}
