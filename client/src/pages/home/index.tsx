import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./local.module.scss";

export default function Home() {
  useEffect(() => {
    graphqlFetch({
      query: `
              query {
                love
              }
    `,
    }).then((res) => {});
  }, []);

  return (
    <div className={styles["home-page"]}>
      <h1>Popular anime</h1>
      <Link to="/watch">
        <button className={styles["btn"]}>Watch</button>
      </Link>
    </div>
  );
}
