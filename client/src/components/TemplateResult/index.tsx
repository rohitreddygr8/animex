import { createSearchParams, Link } from "react-router-dom";
import { Search } from "../../types/graphql";
import styles from "./styles.module.scss";

export default function TemplateResult({ anime }: { anime: Search }) {
  return (
    <Link to={"/anime-details"} state={{ animeId: anime.animeId }}>
      <div className={styles["result"]}>
        <img src={anime.animeImg as string} alt={anime.animeTitle as string} />
        <div>
          <p className={styles["title"]}>{anime.animeTitle}</p>
          <p className={styles["status"]}>{anime.status}</p>
        </div>
      </div>
    </Link>
  );
}
