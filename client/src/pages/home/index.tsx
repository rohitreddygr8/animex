import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link } from "react-router-dom";
import styles from "./local.module.scss";

export default function Home() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles["home-page"]}>
        <h1
          onClick={() => {
            window.open("www.youtube.com");
          }}
        >
          Popular anime
        </h1>
        <Link to="/watch">
          <button className={styles["btn"]}>Watch</button>
        </Link>
      </div>
    </QueryClientProvider>
  );
}
