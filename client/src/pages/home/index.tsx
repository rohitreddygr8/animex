import "./styles.scss";
import PopularSection from "@components/PopularSection";
import NewSeasonsSection from "@components/NewSeasonsSection";

export default function Home() {
  return (
    <div className="home">
      <PopularSection />
      <NewSeasonsSection />
    </div>
  );
}
