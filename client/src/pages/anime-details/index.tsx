import EpisodesList from "@components/EpisodesList";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AnimeDetails, Episode } from "../../types/graphql";
import "./styles.scss";

export default function AnimeDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
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
  //@ts-ignore
  const animeId = state.animeId;

  const { data, isError, isLoading } = useQuery("getDetails " + animeId, () => {
    return graphqlFetch({
      query,
      variables: { animeId },
    });
  });

  if (isError) {
    return <p>Error!!</p>;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="anime-details">
      {" "}
      <EpisodesList episodesList={data.animeDetails.episodesList} />{" "}
    </div>
  );
}
