/// <reference types="vite/client" />

interface CardData {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releaseDate: string;
}

interface SearchResultData {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  status: string;
}

interface EpisodeData {
  episodeNum: number;
  episodeId: string;
}

interface IGetSource {
  watch: {
    data: {
      referer: string;
      sources: {
        file: string;
      }[];
    };
  };
}

interface IGetSearchResults {
  search: {
    animeId: string;
    animeTitle: string;
    animeUrl: string;
    animeImg: string;
    status: string;
  }[];
}

interface TopAiring {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  animeUrl: string;
  latestEp: string;
}
interface RecentReleases {
  animeImg: string;
  animeTitle: string;
  episodeId: string;
  episodeNum: string;
  subOrDub: string;
  episodeUrl: string;
}
