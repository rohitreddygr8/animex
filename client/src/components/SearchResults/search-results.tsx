import styles from "./search-results.module.scss";
import LoaderIcon from "@assets/icons/loader.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@utils";

export const SearchResults = ({ query, keyword }: { query: string; keyword: string }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery([keyword], () => api.fetchGraphQL({ query, variables: { keyword } }), {
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 1,
  });

  const goToAnimeDetails: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const animeId = e.currentTarget.getAttribute("data-id");
    navigate(`/anime-details/${animeId}`);
  };

  if (isLoading) {
    return (
      <div className={styles.searchResults}>
        <LoaderIcon />
      </div>
    );
  }
  return (
    <div className={styles.searchResults}>
      {!data.search.length ? (
        <p className={styles.noResults}>No results found &nbsp; :(</p>
      ) : (
        data.search.slice(0, 5).map((anime: any) => (
          <div className={styles.result} onPointerDown={goToAnimeDetails} data-id={anime.animeId} key={anime.animeId}>
            <img src={anime.animeImg} />
            <div>
              <p className={styles.title}>{anime.animeTitle}</p>
              <p className={styles.status}>{anime.status}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
