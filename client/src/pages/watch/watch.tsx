import styles from "./watch.module.scss";
import { Loader, VideoPlayer, CommentSection } from "@components";
import { useParams } from "react-router-dom";
import { api } from "@utils";
import { useQuery } from "@tanstack/react-query";

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
    ["watch", episodeId],
    () =>
      api.fetchGraphQL({
        query,
        variables: { episodeId },
      }),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
    }
  );

  if (isError) {
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {data && <VideoPlayer src={data.watch.data.sources[0].file} />}
      {episodeId && <CommentSection episodeId={episodeId} />}
    </div>
  );
}
