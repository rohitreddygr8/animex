export const fetchApi = (input: RequestInfo | URL, init?: RequestInit | undefined) => {
  const API_ENDPOINT = import.meta.env.DEV ? `http://${location.hostname}:7000/api` : "/api";
  return fetch(API_ENDPOINT + input, init);
};
