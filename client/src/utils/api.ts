import { getRandomInt } from "./random";

class ApiAdaptor {
  API_ENDPOINT = import.meta.env.DEV ? `http://${location.hostname}:4000/api` : "/api";

  fetchApi = (relativeUrl: string, init?: RequestInit | undefined) =>
    fetch(this.API_ENDPOINT + relativeUrl, { credentials: "include", ...init });

  fetchGraphQL = async ({ query, variables }: { query: string; variables?: object }) => {
    const res = await this.fetchApi("/graphql", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const { data } = await res.json();
    return data;
  };

  getComments = async (episodeId: string) => {
    const res = await this.fetchApi(`/comments?episodeId=${episodeId}`);
    const data = await res.json();
    return data;
  };

  getRandomAvatar = async () => {
    const seed = getRandomInt(1, 1000);
    const res = await fetch(`https://avatars.dicebear.com/api/adventurer-neutral/${seed}.svg`);
    const data = await res.blob();
    const imgSrc = URL.createObjectURL(data);
    return imgSrc;
  };

  addToWatchList = async (animeId: string) => {
    const res = await this.fetchApi("/watch-list", { body: animeId, method: "POST" });
    alert(await res.status);
  };

  removeFromWatchList = async (animeId: string) => {
    const res = await this.fetchApi("/watch-list", { body: animeId, method: "DELETE" });
    alert(await res.text());
  };

  getWatchList = async () => {
    const res = await this.fetchApi(`/watch-list`);
    const data = await res.text();
    return data;
  };
}

export const api = new ApiAdaptor();
