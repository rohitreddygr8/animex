import styles from "./styles.module.scss";
import RenderIf from "@components/RenderIf";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search } from "../../types/graphql";
import useDebounce from "@utils/hooks/useDebounce";
import TemplateResult from "@components/TemplateResult";
import { useQuery } from "react-query";
import Loader from "@components/Loader";

function SearchResults({ keyword }: { keyword: string }) {
  const query = `query getSearchResults($keyword:String!){
  search(keyword:$keyword){
    animeId
    animeTitle
    animeUrl
    animeImg
    status
  }
}`;

  const fetchData = useMemo(() => {
    return graphqlFetch({ query, variables: { keyword } });
  }, [keyword]);

  const { data, isLoading } = useQuery("getSearchResults " + keyword, () => fetchData);

  return (
    <RenderIf isTrue={keyword !== ""}>
      <div className={styles["search-results"]}>
        {isLoading && <Loader />}
        {data && data.search.length === 0 && (
          <p style={{ textAlign: "center", margin: "0.5em" }}>No results found</p>
        )}
        {data &&
          data.search
            ?.slice(0, 5)
            .map((anime: Search, i: number) => <TemplateResult anime={anime} key={i} />)}
      </div>
    </RenderIf>
  );
}

export default memo(SearchResults);
