import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useMemo, useState } from "react";
import { createSearchParams, Link } from "react-router-dom";
import { Popular } from "../../types/graphql";
import "./styles.scss";

export default function Card({ data }: { data: Popular }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      state={{ animeId: data.animeId }}
      to={"/anime-details"}
    >
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(-1turn, hsl(0, 0%, 5%), transparent), url(${data.animeImg})`,
        }}
      >
        <div>
          <p className="title">{data?.animeTitle}</p>
          <p className="release-date">{data.releaseDate}</p>
        </div>
      </div>
    </Link>
  );
}
