import Card from "@components/Card";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Popular } from "../../types/graphql";
import "./styles.scss";

function PopularPage() {
  const query = `query getPopular {
  popular {
    animeId
    animeTitle
    animeImg
    animeUrl
    releaseDate
  }
}
`;
  const { data, isError, isLoading } = useQuery(
    "popular",
    () => {
      return graphqlFetch({
        query,
      });
    },
    { refetchOnWindowFocus: false }
  );

  if (isError) {
    return <p>Error!!</p>;
  }
  if (isLoading) {
    return <Loader />;
  }
  const scrollRef = useRef<HTMLDivElement | null>(null);
  if (scrollRef.current) {
    scrollRef.current.onwheel = (e) => {
      scrollRef.current?.scrollTo({ left: e.deltaY * 2 + scrollRef.current.scrollLeft });
    };
  }

  const handleLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    scrollRef.current?.scrollTo({ left: scrollRef.current.scrollLeft - 48 });
  };
  const handleRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    scrollRef.current?.scrollTo({ left: scrollRef.current.scrollLeft + 48 });
  };
  return (
    <div className="popular" ref={scrollRef}>
      {/* <button className="scroll-btn left" onClick={handleLeft}>
        L
      </button> */}
      {data.popular.map((obj: any, i: any) => (
        <Card data={obj} key={i} />
      ))}
      {/* <button className="scroll-btn right" onClick={handleRight}>
        R
      </button> */}
    </div>
  );
}

export default memo(PopularPage);
