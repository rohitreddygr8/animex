/// <reference types="vite/client" />
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
