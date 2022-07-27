import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link } from "react-router-dom";
import Card from "@components/Card";
import PopularPage from "@components/Popular";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles["home-page"]}>
        <h2>Popular anime</h2>
        <PopularPage />
      </div>
    </QueryClientProvider>
  );
}
