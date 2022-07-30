import { useEffect, useRef } from "react";
import { createSearchParams, Link } from "react-router-dom";
import { NewSeasons, Popular } from "../../types/graphql";
import "./styles.scss";

export default function Card({ data }: { data: Popular | NewSeasons }) {
  const searchParams = String(new URLSearchParams({ animeId: data.animeId as string }));
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{ pathname: "/anime-details", search: searchParams }}
    >
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(-1turn, hsl(0, 0%, 5%), transparent), url(${data.animeImg})`,
        }}
      >
        <div>
          <p className="title">{data?.animeTitle}</p>
          {/* <p className="release-date">{data?.releaseDate}</p> */}
        </div>
      </div>
    </Link>
  );
}
