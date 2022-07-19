import styles from "./styles.module.scss";
import SearchIcon from "@assets/icons/search.svg";
import { ChangeEvent, useState } from "react";
import SearchResults from "@components/SearchResults";
import debounce from "@utils/helpers/debounce";
import testImgSrc from "@assets/images/maneki-neko.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debounce(fetchResults, 1000, e.target.value);
  };
  const fetchResults = async (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div className={styles["nav-bar"]}>
        <Link to="/">
          <div className={styles["logo"]}>
            <img src={testImgSrc} alt="Logo" />
            <h1>Animex</h1>
          </div>
        </Link>
        <div className={styles["search"]}>
          <div className={styles["search-bar"]}>
            <input type="text" placeholder="Search" onInput={handleInput} value={searchValue} />
            <button>
              <SearchIcon />
            </button>
          </div>
          <SearchResults value={searchValue} />
        </div>
      </div>
    </>
  );
}
