import Card from "@components/Card";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo, MouseEvent, useEffect, useRef, useState, WheelEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import "./styles.scss";
import ForwardIcon from "@assets/icons/chevron-forward-outline.svg";
import BackIcon from "@assets/icons/chevron-back-outline.svg";

export default function PopularSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
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
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    carouselRef.current?.scrollBy({ left: -e.deltaY * 2 });
  };
  const fetchData = () => {
    return graphqlFetch({
      query,
    });
  };
  const { data, isLoading, isError, error } = useQuery(["popular"], fetchData, {
    refetchOnWindowFocus: false,
  });

  if (isError) {
    console.log(error);
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }
  if (isLoading) {
    return <Loader />;
  }
  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left:
        (carouselRef.current?.scrollWidth as number) /
        (carouselRef.current?.children.length as number),
    });
  };
  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left:
        (-carouselRef.current?.scrollWidth as number) /
        (carouselRef.current?.children.length as number),
    });
  };
  return (
    <section className="popular" aria-label="Popular anime">
      <h3>Popular anime</h3>
      <div className="popular-wrapper">
        <button onClick={scrollLeft} className="left scroll-btn">
          <BackIcon />
        </button>
        <div className="carousel" ref={carouselRef} onWheel={handleWheel}>
          {data.popular.map((anime: any, i: any) => (
            <Card data={anime} key={i} />
          ))}
        </div>
        <button onClick={scrollRight} className="right scroll-btn">
          <ForwardIcon />
        </button>
      </div>
    </section>
  );
}
