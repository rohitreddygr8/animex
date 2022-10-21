import styles from "./search.module.scss";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "@hooks";
import SearchIcon from "@assets/icons/search.svg";
import CrossIcon from "@assets/icons/cross.svg";
import LoaderIcon from "@assets/icons/loader.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@utils";

export const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [pointerOnResults, setPointerOnResults] = useState(false);
  const debouncedKeyword = useDebounce<string>({ value: keyword, delay: 400 });
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const query = `query getSearchResults($keyword:String!){
  search(keyword:$keyword){
    animeId
    animeTitle
    animeUrl
    animeImg
    status
  }
}`;

  const { data, isLoading } = useQuery(
    ["search", debouncedKeyword],
    () => api.fetchGraphQL({ query, variables: { keyword: debouncedKeyword } }),
    {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 1,
      enabled: Boolean(debouncedKeyword),
    }
  );

  const clearInput = () => {
    setKeyword("");
  };

  const focusHandler = () => {
    setShowResults(true);
  };

  const inputHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const goToAnimeDetails: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setShowResults(false);
    setPointerOnResults(false);
    const animeId = e.currentTarget.getAttribute("data-id");
    navigate(`/anime-details/${animeId}`);
  };

  const blurHandler = () => {
    if (!pointerOnResults) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    if (resultsRef.current) {
      resultsRef.current.onpointerenter = () => {
        setPointerOnResults(true);
      };
      resultsRef.current.onpointerleave = () => {
        setPointerOnResults(false);
      };
    }

    return () => {
      if (resultsRef.current) {
        resultsRef.current.onpointerenter = null;
        resultsRef.current.onpointerleave = null;
      }
    };
  });

  return (
    <div role="search" className={styles.search}>
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search"
          onInput={inputHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          value={keyword}
        />
        <button onClick={clearInput}>{keyword ? <CrossIcon /> : <SearchIcon />}</button>
      </div>
      {showResults && data && (
        <div className={styles.searchResults} ref={resultsRef}>
          {!data.search.length ? (
            <p className={styles.noResults}>No results found &nbsp; :(</p>
          ) : (
            data.search.slice(0, 5).map((anime: any) => (
              <div className={styles.result} onClick={goToAnimeDetails} data-id={anime.animeId} key={anime.animeId}>
                <img src={anime.animeImg} />
                <div>
                  <p className={styles.title}>{anime.animeTitle}</p>
                  <p className={styles.status}>{anime.status}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {showResults && debouncedKeyword && isLoading && (
        <div className={styles.searchResults}>
          <LoaderIcon />
        </div>
      )}
    </div>
  );
};
