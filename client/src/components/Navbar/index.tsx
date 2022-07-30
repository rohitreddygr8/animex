import "./styles.scss";
import SearchIcon from "@assets/icons/search.svg";
import { useRef, useState } from "react";
import SearchResults from "@components/SearchResults";
import testImgSrc from "@assets/images/maneki-neko.png";
import Logo from "@assets/icons/logo.svg";
import { Link } from "react-router-dom";
import useDebounce from "@utils/hooks/useDebounce";

export default function Navbar() {
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const debouncedKeyword = useDebounce<string>({ value: keyword, delay: 400 });
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  const hideResults = () => {
    setShowResults(false);
  };
  const handleFocus = () => {
    setShowResults(true);
  };
  return (
    <>
      <div className="nav-bar">
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="logo">
            <Logo />
            {/* <h1>Animex</h1> */}
          </div>
        </Link>

        <div className="search" ref={searchBarRef}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              onInput={handleInput}
              onFocus={handleFocus}
              value={keyword}
            />
            <button>
              <SearchIcon />
            </button>
          </div>
          <div className="results" onClick={hideResults}>
            {showResults && debouncedKeyword && <SearchResults keyword={debouncedKeyword} />}
          </div>
        </div>
      </div>
    </>
  );
}
