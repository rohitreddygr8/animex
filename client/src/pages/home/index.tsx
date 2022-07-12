import graphqlFetch from "@utils/helpers/graphqlFetch";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link } from "react-router-dom";
import styles from "./local.module.scss";

export default function Home() {
  const queryClient = new QueryClient();
  graphqlFetch({
    query: `query Test($keyword:String!,$page:Int!){
  search(keyword:$keyword,page:$page){
    animeTitle
    animeUrl
    animeImg
  }
}`,
    variables: {
      keyword: "Attack",
      page: 1,
    },
  }).then((res) => {
    console.log(res);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles["home-page"]}>
        <h1>Popular anime</h1>
        <Link to="/watch">
          <button className={styles["btn"]}>Watch</button>
        </Link>
      </div>
    </QueryClientProvider>
  );
}
