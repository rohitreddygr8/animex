import "./styles.scss";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "@components/VideoPlayer";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useQuery } from "react-query";
import Loader from "@components/Loader";

export default function Watch() {
  const [searchParams] = useSearchParams();
  const episodeId = searchParams.get("episodeId");
  const query = `query getSource($episodeId:ID!){
  watch(episodeId:$episodeId){
    data{
      referer
      sources{
        file
      }
    }
  }
}`;
  const { data, isLoading, isError, error } = useQuery(
    "getSearchResults " + episodeId,
    () =>
      graphqlFetch({
        query,
        variables: { episodeId },
      }),
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  if (isError) {
    console.log(error);
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }

  return (
    <div className="watch">
      {isLoading && <Loader />}
      {data && <VideoPlayer src={data.watch?.data?.sources[0]?.file} />}
    </div>
  );
}
