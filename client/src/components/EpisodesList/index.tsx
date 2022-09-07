import "./styles.scss";
import { memo } from "react";
import { Link } from "react-router-dom";

function EpisodeButton({ episodeId, episodeNumber }: { episodeId: string; episodeNumber: number }) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/watch/${episodeId}`}>
      <div className="episode-btn">
        <button>{episodeNumber}</button>
      </div>
    </Link>
  );
}

function EpisodesList({ episodesList }: { episodesList: any }) {
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
