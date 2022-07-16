export default async function graphqlFetch({
  query,
  variables,
}: {
  query: string;
  variables?: object;
}) {
  const URL = "/graphql";
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const { data } = await response.json();
  return data;
}
