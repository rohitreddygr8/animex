import styles from "./styles.module.scss";
import RenderIf from "@components/RenderIf";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Search } from "../../types/graphql";
import useDebounce from "@utils/hooks/useDebounce";
import TemplateResult from "@components/TemplateResult";

function SearchResults({ keyword }: { keyword: string }) {
  const [results, setResults] = useState<Search[] | null>(null);
  const debouncedValue = useDebounce<string>({ value: keyword, delay: 300 });
  const query = `query getSearchResults($keyword:String!){
  search(keyword:$keyword){
    animeId
    animeTitle
    animeUrl
    animeImg
    status
  }
}`;
  const getData = useCallback(async () => {
    const res = await graphqlFetch({ query, variables: { keyword } });
    setResults(res.search);
  }, [keyword]);
  useEffect(() => {
    if (debouncedValue) {
      getData();
    }
  }, [debouncedValue]);

  return (
    <RenderIf isTrue={keyword !== ""}>
      <div className={styles["search-results"]}>
        {results?.slice(0, 5).map((anime: Search, i) => (
          <TemplateResult anime={anime} key={i} />
        ))}
      </div>
    </RenderIf>
  );
}

export default SearchResults;
