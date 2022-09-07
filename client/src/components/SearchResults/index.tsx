import "./styles.scss";
import RenderIf from "@components/RenderIf";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo } from "react";
import SearchResult from "@components/SearchResult";
import { useQuery } from "@tanstack/react-query";
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

  const {
    data: res,
    isLoading,
    isError,
    error,
  } = useQuery(["getSearchResults " + keyword], () =>
    graphqlFetch({ query, variables: { keyword } })
  );
  const data: IGetSearchResults = res;

  if (isError) {
    console.log(error);
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }

  return (
    <RenderIf isTrue={keyword !== ""}>
      <div className="search-wrapper">
        {isLoading && <Loader />}
        {data && data.search.length === 0 && <p className="no-results">No results found</p>}
        <div className="search-results">
          {data &&
            data.search
              ?.slice(0, 5)
              .map((anime: any, i: number) => <SearchResult anime={anime} key={i} />)}
        </div>
      </div>
    </RenderIf>
  );
}

export default memo(SearchResults);
