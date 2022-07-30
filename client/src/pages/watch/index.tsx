import "./styles.scss";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "@components/VideoPlayer";

export default function Watch() {
  const [searchParams] = useSearchParams();
  const src = searchParams.get("src");
  const referer = searchParams.get("referer");

  return (
    <div className="watch">{src && referer && <VideoPlayer referer={referer} src={src} />}</div>
  );
}
