import Card from "@components/Card";
import Loader from "@components/Loader";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo, useEffect, useState } from "react";
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

  return (
    <div className="popular">
      {data.popular.map((obj: any, i: any) => (
        <Card data={obj} key={i} />
      ))}
    </div>
  );
}

export default memo(PopularPage);
