import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./local.module.scss";

export default function Home() {
  const [val, setVal] = useState("");

  useEffect(() => {
    graphqlFetch({
      query: `
              query{
                greet(name:"Niga"){
                  name
                }
              }
    `,
    }).then((res) => {
      setVal(res?.greet?.name);
    });
  }, []);

  return (
    <div className={styles["home-page"]}>
      <h1>Popular anime</h1>
      <h3>{val}</h3>
      <Link to="/watch">
        <button className={styles["btn"]}>Watch</button>
      </Link>
    </div>
  );
}
