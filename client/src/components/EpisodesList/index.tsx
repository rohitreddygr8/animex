import { memo, useCallback, useEffect, useState } from "react";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { Episode, Watch } from "../../types/graphql";
import "./styles.scss";
import { createSearchParams, useNavigate } from "react-router-dom";

function EpisodeButton({ episodeId, episodeNumber }: { episodeId: string; episodeNumber: number }) {
  const navigate = useNavigate();
  const searchParams = String(createSearchParams({ episodeId }));

  const handleClick = async () => {
    navigate({ pathname: "/watch", search: searchParams });
  };

  return (
    <div className="episode-btn">
      <button onClick={handleClick}>{episodeNumber}</button>
    </div>
  );
}

function EpisodesList({ episodesList }: { episodesList: Episode[] }) {
  const list = [...episodesList].reverse();
  return (
    <div className="episodes-list">
      <p style={{ margin: "1em", color: "white", fontFamily: "Satoshi" }}>Episodes:</p>
      {list.map((episode) => {
        const episodeNum = Number(episode?.episodeNum);
        return (
          <EpisodeButton
            episodeId={episode?.episodeId as string}
            episodeNumber={episodeNum}
            key={episodeNum}
          />
        );
      })}
    </div>
  );
}
export default memo(EpisodesList);
