import "./styles.scss";
import { useParams, useSearchParams } from "react-router-dom";
import VideoPlayer from "@components/VideoPlayer";
import graphqlFetch from "@utils/helpers/graphqlFetch";
import { useQuery } from "@tanstack/react-query";
import Loader from "@components/Loader";

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

export default function Watch() {
  const { episodeId } = useParams();
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
    ["getSearchResults " + episodeId],
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
