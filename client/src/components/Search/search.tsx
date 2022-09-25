import styles from "./search.module.scss";
import { useState, useRef, useEffect } from "react";
import { useDebounce, useGraphqlQuery } from "@hooks";
import SearchIcon from "@assets/icons/search.svg";
import CrossIcon from "@assets/icons/cross.svg";
import LoaderIcon from "@assets/icons/loader.svg";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(false);
  const debouncedKeyword = useDebounce<string>({ value: keyword, delay: 400 });
  const query = `query getSearchResults($keyword:String!){
  search(keyword:$keyword){
    animeId
    animeTitle
    animeUrl
    animeImg
    status
  }
}`;

  const { data, isLoading } = useGraphqlQuery(
    debouncedKeyword,
    { query, variables: { keyword: debouncedKeyword } },
    { cacheTime: 1000 * 5 }
  );

  const clearInput = () => {
    setKeyword("");
    setShowResults(false);
  };

  const focusHandler = () => {
    setShowResults(true);
  };

  const blurHandler = () => {
    setShowResults(false);
  };

  const inputHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const goToAnimeDetails: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const animeId = e.currentTarget.id;
    clearInput();
    setShowResults(false);
    navigate(`/anime-details/${animeId}`);
  };

  return (
    <div role="search" className={styles.search}>
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search"
          onInput={inputHandler}
          onBlur={blurHandler}
          onFocus={focusHandler}
          value={keyword}
        />
        <button onClick={clearInput}>{keyword ? <CrossIcon /> : <SearchIcon />}</button>
      </div>
      {keyword && showResults && (
        <div className={styles.searchResults}>
          {isLoading ? <LoaderIcon /> : !data?.search?.length && <p className={styles.noResults}>No results found</p>}
          {data &&
            data.search?.slice(0, 5).map((anime: any) => (
              <div className={styles.result} onPointerDown={goToAnimeDetails} id={anime.animeId} key={anime.animeId}>
                <img src={anime.animeImg} />
                <div>
                  <p className={styles.title}>{anime.animeTitle}</p>
                  <p className={styles.status}>{anime.status}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
