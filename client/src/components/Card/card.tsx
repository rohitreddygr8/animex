import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import HeartedIcon from "@assets/icons/heart.svg";
import NotHeartedIcon from "@assets/icons/not-hearted.svg";
import { useState } from "react";

export const Card = ({ cardData }: { cardData: CardData | null }) => {
  const [isHearted, setIsHearted] = useState(false);
  const toggleIsHearted: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsHearted((state) => !state);
  };

  if (!cardData) {
    return <div className={styles.card}></div>;
  }

  const { animeId, animeTitle, animeImg, releaseDate } = cardData;
  return (
    <Link to={`/anime-details/${animeId}`}>
      <div className={styles.card}>
        <button
          aria-label={isHearted ? "Add to list" : "Remove from list"}
          className={styles.heart}
          onClick={toggleIsHearted}
        >
          {isHearted ? <HeartedIcon /> : <NotHeartedIcon />}
        </button>
        <p className={styles.title}>{animeTitle}</p>
        <p className={styles.releaseDate}>{releaseDate}</p>
        <img src={animeImg} alt={animeTitle} />
      </div>
    </Link>
  );
};
