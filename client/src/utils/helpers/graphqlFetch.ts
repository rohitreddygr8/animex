export default async function graphqlFetch({ query }: { query: string }) {
  const URL = import.meta.env.PROD ? `/api` : `http://localhost:4000/api`;
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((res) => res?.data);
}
