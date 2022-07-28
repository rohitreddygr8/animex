import styles from "./styles.module.scss";
import PopularPage from "@components/Popular";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <PopularPage />
    </div>
  );
}
