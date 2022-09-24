import styles from "./episodes-list.module.scss";
import { memo } from "react";
import { Link } from "react-router-dom";

export const EpisodesList = memo(({ episodesList }: { episodesList: EpisodeData[] }) => {
  return (
    <>
      <p className={styles.episodesTag}>Episodes:</p>
      <div className={styles.episodesList}>
        {episodesList
          .slice()
          .reverse()
          .map((episode: any) => {
            const episodeNum = Number(episode.episodeNum);
            return (
              <Link to={`/watch/${episode.episodeId}`} key={episode.episodeId}>
                <button className={styles.episodeBtn}>{episode.episodeNum}</button>
              </Link>
            );
          })}
      </div>
    </>
  );
});

EpisodesList.displayName = "EpisodesList";
