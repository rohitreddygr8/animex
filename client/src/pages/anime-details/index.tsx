import EpisodesList from "@components/EpisodesList";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AnimeDetails, Episode } from "../../types/graphql";
import "./styles.scss";

export default function AnimeDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  //@ts-ignore
  const animeId = state.animeId;
  const [data, setData] = useState<AnimeDetails | null>(null);
  const listRef = useRef<Episode[] | null>(null);

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

  if (data?.episodesList) {
    listRef.current = data?.episodesList as Episode[];
  }

  return (
    <div className="anime-details">
      {listRef.current && <EpisodesList episodesList={listRef.current} />}
    </div>
  );
}
