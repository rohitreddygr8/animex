import styles from "./search-results.module.scss";
import { memo } from "react";
import { useGraphqlQuery } from "@hooks";
import { useNavigate } from "react-router-dom";
import LoaderIcon from "@assets/icons/loader.svg";

export const SearchResults = memo(
  ({ keyword, setShowResults }: { keyword: string; setShowResults: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const navigate = useNavigate();
    const query = `query getSearchResults($keyword:String!){
  search(keyword:$keyword){
    animeId
    animeTitle
    animeUrl
    animeImg
    status
  }
}`;

    const hideResults = () => {
      setShowResults(false);
    };

    const goToAnimeDetails: React.MouseEventHandler<HTMLDivElement> = (e) => {
      const animeId = e.currentTarget.id;
      hideResults();
      navigate(`/anime-details/${animeId}`);
    };

    const { data, isLoading } = useGraphqlQuery(keyword, { query, variables: { keyword } });

    return (
      <div className={styles.searchResults}>
        {isLoading ? <LoaderIcon /> : !data?.search?.length && <p className={styles.noResults}>No results found</p>}
        {data &&
          data.search?.slice(0, 5).map((anime: any) => (
            <div className={styles.result} onClick={goToAnimeDetails} id={anime.animeId} key={anime.animeId}>
              <img src={anime.animeImg} />
              <div>
                <p className={styles.title}>{anime.animeTitle}</p>
                <p className={styles.status}>{anime.status}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
);

SearchResults.displayName = "SearchResults";
