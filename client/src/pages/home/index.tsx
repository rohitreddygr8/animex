import styles from "./styles.module.scss";
import PopularSection from "@components/PopularSection";
import NewSeasonsSection from "@components/NewSeasonsSection";

export default function Home() {
  return (
    <div className={styles.home}>
      <PopularSection />
      <NewSeasonsSection />
    </div>
  );
}
