import { memo, useRef } from "react";
import ForwardIcon from "@assets/icons/chevron-forward-outline.svg";
import BackIcon from "@assets/icons/chevron-back-outline.svg";
import styles from "./carousel.module.scss";
import { Card } from "@components";

export const Carousel = memo(({ data }: { data: any }) => {
  const cardListRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    cardListRef.current?.scrollBy({
      left: cardListRef.current?.offsetWidth,
    });
  };
  const scrollLeft = () => {
    cardListRef.current?.scrollBy({
      left: -cardListRef.current?.offsetWidth,
    });
  };

  return (
    <div className={styles.carousel}>
      <button onClick={scrollLeft} className={styles.scrollBtn}>
        <BackIcon />
      </button>
      <section className={styles.cardList} ref={cardListRef}>
        {data
          ? data.map((anime: any, i: any) => <Card cardData={anime} key={i} />)
          : new Array(20)
              .map(() => {
                console.log("p");

                return 1;
              })
              .map((anime: any, i: any) => <Card cardData={null} key={i} />)}
      </section>
      <button onClick={scrollRight} className={styles.scrollBtn}>
        <ForwardIcon />
      </button>
    </div>
  );
});

Carousel.displayName = "Carousel";
