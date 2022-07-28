import Card from "@components/Card";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo, useEffect, useRef, useState, WheelEvent, WheelEventHandler } from "react";
import { useQuery } from "react-query";
import { Popular } from "../../types/graphql";
import "./styles.scss";

function PopularPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    scrollRef.current?.scrollTo({ left: -e.deltaY * 2 + scrollRef.current.scrollLeft });
  };
  // const handleLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   scrollRef.current?.scrollTo({ left: scrollRef.current.scrollLeft - 48 });
  // };
  // const handleRight = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   scrollRef.current?.scrollTo({ left: scrollRef.current.scrollLeft + 48 });
  // };
  return (
    <>
      <h3>Popular anime</h3>
      <div className="popular" ref={scrollRef} onWheel={handleWheel}>
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
    </>
  );
}

export default memo(PopularPage);
