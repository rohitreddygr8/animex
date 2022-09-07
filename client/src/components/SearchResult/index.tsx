import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function TemplateResult({ anime }: { anime: any }) {
  return (
    <Link style={{ textDecoration: "none" }} to={{ pathname: `/anime-details/${anime.animeId}` }}>
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
