import { memo, useCallback, useEffect, useState } from "react";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { Episode, Watch } from "../../types/graphql";
import "./styles.scss";
import { createSearchParams, useNavigate } from "react-router-dom";

function EpisodeButton({ episodeId, episodeNumber }: { episodeId: string; episodeNumber: number }) {
  const navigate = useNavigate();
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

  const handleClick = async () => {
    try {
      const res = await graphqlFetch({
        query,
        variables: { episodeId },
      });
      const src = res.watch?.data?.sources[0]?.file as string;
      const referer = res.watch?.data?.referer as string;
      if (src && referer) {
        console.log(src);

        const searchParams = String(createSearchParams({ src, referer }));
        navigate({ pathname: "/watch", search: searchParams });
      }
    } catch (e) {
      console.log(e);
    }
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
