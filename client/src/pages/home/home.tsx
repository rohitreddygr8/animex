import { BannerCarousel, Carousel } from "@components";
import { useGraphqlQuery } from "@hooks";
import styles from "./home.module.scss";
import LoaderIcon from "@assets/icons/loader.svg";

export default function Home() {
  const homePageQuery = `query homePageQuery {
	  popular {
	    animeId
	    animeTitle
	    animeImg
	    animeUrl
	    releaseDate
	  }
    newSeasons {
      animeId
      animeTitle
      animeImg
      animeUrl
      latestEp
    }
    topAiring {
      animeId
      animeTitle
      animeImg
      animeUrl
      latestEp
    }
	}
	`;

  const { data, isLoading, isError, error } = useGraphqlQuery("homePageQuery", { query: homePageQuery });

  if (isLoading) {
    return (
      <div className={styles.home}>
        {/* <BannerCarousel data={data.topAiring} /> */}
        <section className={styles.section}>
          <p>Popular</p>
          <Carousel data={null} />
        </section>
        <section className={styles.section}>
          <p>New Seasons</p>
          <Carousel data={null} />
        </section>
      </div>
    );
  }

  return (
    <div className={styles.home}>
      {/* <BannerCarousel data={data.topAiring} /> */}
      <section className={styles.section}>
        <p>Popular</p>
        <Carousel data={data.popular} />
      </section>
      <section className={styles.section}>
        <p>New Seasons</p>
        <Carousel data={data.newSeasons} />
      </section>
    </div>
  );
}
