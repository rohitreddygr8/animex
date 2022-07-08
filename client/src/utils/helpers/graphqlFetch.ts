export default async function graphqlFetch({ query, args }: { query: string; args?: object }) {
  return fetch(`/api`, {
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
