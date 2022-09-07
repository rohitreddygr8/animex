import "./styles.scss";
import { Link } from "react-router-dom";

export default function Card({ data }: { data: any }) {
  return (
    <Link style={{ textDecoration: "none" }} to={{ pathname: `/anime-details/${data.animeId}` }}>
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(-1turn, hsl(0, 0%, 5%) 20%, transparent 80% ) , url(${data.animeImg})`,
        }}
      >
        <div>
          <p className="title">{data?.animeTitle}</p>
          {/* <p className="release-date">{data?.releaseDate}</p> */}
        </div>
      </div>
    </Link>
  );
}
