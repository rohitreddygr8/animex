import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link } from "react-router-dom";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles["home-page"]}>
        <h1>Popular anime</h1>
        <Link to="/watch">
          <button className={styles["btn"]}>Watch</button>
        </Link>
      </div>
    </QueryClientProvider>
  );
}
