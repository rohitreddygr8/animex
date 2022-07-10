import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./local.module.scss";

export default function Home() {
  const [val, setVal] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:4000");
    socket.onopen = (e) => {
      socket.send("Clark kent");
      socket.onmessage = (e) => {
        console.log(e.data);
      };
    };
    graphqlFetch({
      query: `
              query{
                greet(name:"Kanye West"){
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
