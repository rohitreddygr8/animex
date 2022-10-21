import { useQuery } from "@tanstack/react-query";
import { api } from "@utils";
import styles from "./watch-list.module.scss";
export const WatchList = () => {
  const { data, isLoading, isError, error } = useQuery(["watch-list"], () => api.getWatchList(), {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
  });

  return (
    <div className={styles.watchList}>
      {data &&
        (data as string).split(",").map((anime) => (
          <>
            <p>{anime}</p>
            <br />
          </>
        ))}
    </div>
  );
};
