import styles from "./styles.module.scss";
import PopularPage from "@components/Popular";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <h2>Popular anime</h2>
      <PopularPage />
    </div>
  );
}
