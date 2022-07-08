export default async function graphqlFetch({ query, args }: { query: string; args?: object }) {
  const URL = import.meta.env.PROD ? `/api` : `http://localhost:4000/api`;
  return fetch(URL, {
    method: "POST",
    mode: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, args }),
  })
    .then((res) => res.json())
    .then((res) => res?.data);
}
