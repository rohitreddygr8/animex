import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useGraphqlQuery = (
  querykey: string,
  query: { query: string; variables?: object },
  options?: Omit<UseQueryOptions<any, unknown, any, string[]>, "initialData" | "queryFn" | "queryKey">
) => {
  const fetchGraphQL = async (query: { query: string; variables?: object }) => {
    const API_ENDPOINT = import.meta.env.DEV ? `http://${location.hostname}:4000/api/graphql` : "/api/graphql";

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });
      const { data } = await res.json();
      return data;
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };
  return useQuery([querykey], () => fetchGraphQL(query), {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    ...options,
  });
};
