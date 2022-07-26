import { memo, useCallback, useEffect, useState } from "react";
import VideoPlayer from "@components/VideoPlayer";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { Episode, Watch } from "../../types/graphql";
import "./styles.scss";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

function EpisodeButton({ episodeId, episodeNumber }: { episodeId: string; episodeNumber: number }) {
  const [data, setData] = useState<Watch | null>(null);
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
  //@ts-ignore
  const src = data?.data?.sources[0]?.file as string;
  const referer = data?.data?.referer as string;
  const searchParams = createSearchParams({ src: src, referer: referer });

  if (src && referer) {
    navigate(`/watch?${searchParams}`);
  }

  const handleClick = async () => {
    const res = await graphqlFetch({
      query,
      variables: { episodeId },
    });
    setData(res.watch);
  };

  return (
    <div className="episode-btn">
      <button onClick={handleClick}>{episodeNumber}</button>
    </div>
  );
}

function EpisodesList({ episodesList }: { episodesList: Episode[] }) {
  return (
    <div className="episodes-list">
      <p style={{ margin: "1em", color: "white" }}>Episodes:</p>
      {episodesList
        .slice(0)
        .reverse()
        .map((episode) => {
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
