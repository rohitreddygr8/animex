import Card from "@components/Card";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useRef, WheelEvent, MouseEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./styles.scss";
import ForwardIcon from "@assets/icons/chevron-forward-outline.svg";
import BackIcon from "@assets/icons/chevron-back-outline.svg";

export default function NewSeasonsSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const query = `query getNewSeasons {
  newSeasons {
    animeId
    animeTitle
    animeImg
    animeUrl
    latestEp
  }
}`;
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    carouselRef.current?.scrollBy({ left: -e.deltaY * 2 });
  };
  const fetchData = () => {
    return graphqlFetch({
      query,
    });
  };
  const { data, isLoading, isError, error } = useQuery(["newSeasons"], fetchData, {
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
    <section className="new-seasons" aria-label="New seasons">
      <h3>New seasons</h3>
      <ForwardIcon />
      <div className="popular-wrapper">
        <button onClick={scrollLeft} className="left scroll-btn">
          <BackIcon />
        </button>
        <div className="carousel" ref={carouselRef} onWheel={handleWheel}>
          {data.newSeasons.map((anime: any, i: any) => (
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
