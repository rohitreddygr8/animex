import { BannerCarousel, Carousel } from "@components";
import styles from "./home.module.scss";
import LoaderIcon from "@assets/icons/loader.svg";
import { useQuery } from "@tanstack/react-query";
import { api } from "@utils";

export default function Home() {
  const query = `query homePageQuery {
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
    recentReleases {
      episodeId
      episodeNum
      subOrDub
      animeImg
      episodeUrl
      animeTitle
    }
	}
	`;

  const { data, isLoading } = useQuery(["homePageQuery"], () => api.fetchGraphQL({ query }), {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <LoaderIcon />
      </div>
    );
  }

  return (
    <div className={styles.home}>
      {<BannerCarousel data={data.recentReleases.slice(0, 12)} />}
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
