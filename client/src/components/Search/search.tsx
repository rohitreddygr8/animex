import styles from "./search.module.scss";
import { useState } from "react";
import { useDebounce } from "@hooks";
import SearchIcon from "@assets/icons/search.svg";
import CrossIcon from "@assets/icons/cross.svg";
import { SearchResults } from "@components";

export const Search = () => {
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

  const clearInput = () => {
    setKeyword("");
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

  return (
    <div role="search" className={styles.search}>
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search"
          onBlur={blurHandler}
          onInput={inputHandler}
          onFocus={focusHandler}
          value={keyword}
        />
        <button onClick={clearInput}>{keyword ? <CrossIcon /> : <SearchIcon />}</button>
      </div>
      {debouncedKeyword && showResults && <SearchResults query={query} keyword={debouncedKeyword} />}
    </div>
  );
};
