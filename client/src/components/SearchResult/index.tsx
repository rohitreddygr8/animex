import { createSearchParams, Link } from "react-router-dom";
import { Search } from "../../types/graphql";
import styles from "./styles.module.scss";

export default function TemplateResult({ anime }: { anime: Search }) {
  const searchParams = String(createSearchParams({ animeId: anime.animeId as string }));
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{ pathname: "/anime-details", search: searchParams }}
    >
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
