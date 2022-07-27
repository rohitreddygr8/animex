import Card from "@components/Card";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { memo, useEffect, useState } from "react";
import { Popular } from "../../types/graphql";
import "./styles.scss";

function PopularPage() {
  const [data, setData] = useState<Popular[] | null>(null);
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
  const getData = async () => {
    try {
      const res = await graphqlFetch({ query });
      setData(res.popular);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="popular">
      {data?.map((obj, i) => (
        <Card data={obj} key={i} />
      ))}
    </div>
  );
}

export default memo(PopularPage);
