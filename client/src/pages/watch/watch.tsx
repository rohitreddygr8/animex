import styles from "./watch.module.scss";
import { useGraphqlQuery } from "@hooks";
import { Loader, VideoPlayer } from "@components";
import { useParams } from "react-router-dom";

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

  const { data, isLoading, isError, error } = useGraphqlQuery("getSearchResults " + episodeId, {
    query,
    variables: { episodeId },
  });

  if (isError) {
    return <p style={{ backgroundColor: "red", color: "white" }}>Error</p>;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {data && <VideoPlayer src={data.watch.data.sources[0].file} />}
    </div>
  );
}
