import styles from "./styles.module.scss";
import RenderIf from "@components/RenderIf";
import testImgSrc from "@assets/images/maneki-neko.png";

export default function SearchResults({ value }: { value: string }) {
  return (
    <RenderIf isTrue={value !== ""}>
      <div className={styles["search-results"]}>
        <img src={testImgSrc} alt="" />
        <h3>{value}</h3>
        <p>Released: 1995</p>
        <p>Author: Yusuke Murata</p>
        <p>Running</p>
      </div>
    </RenderIf>
  );
}
