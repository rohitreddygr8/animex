import styles from "./navbar.module.scss";
import SearchIcon from "@assets/icons/search.svg";
import { useRef, useState } from "react";
import { useDebounce } from "@hooks";
import { SearchResults, UserAuth } from "@components";
import { Link } from "react-router-dom";
import HeartedIcon from "@assets/icons/heart.svg";
import MenuIcon from "@assets/icons/menu.svg";
import RandomIcon from "@assets/icons/random.svg";

export const Navbar = () => {
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState<"login" | "signup" | null>(null);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const debouncedKeyword = useDebounce<string>({ value: keyword, delay: 400 });
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  const hideResults = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 100);
  };
  const handleFocus = () => {
    setShowResults(true);
  };

  return (
    <div className={styles.navBar}>
      <div>
        <Link to={"/"}>
          <div aria-label="Animex Logo" className={styles.logo}>
            <img src="./animex-5.png" alt="Animex Icon" />
            <p>animex</p>
          </div>
        </Link>
        <div className={styles.options}>
          <button>
            <HeartedIcon />
            Liked
          </button>
          <button>
            <MenuIcon />
            Genre
          </button>
          <button>
            <RandomIcon />
            Random
          </button>
        </div>
      </div>
      <div>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar} ref={searchBarRef}>
            <input type="search" placeholder="Search" onInput={handleInput} onFocus={handleFocus} value={keyword} />
            <button>
              <SearchIcon />
            </button>
          </div>
          {showResults && debouncedKeyword && (
            <SearchResults keyword={debouncedKeyword} setShowResults={setShowResults} />
          )}
        </div>
        <div className={styles.authButtons}>
          {isLoggedIn ? (
            <button className={styles.loginBtn}>Log out</button>
          ) : (
            <>
              <button className={styles.loginBtn} onClick={() => setShowAuthPrompt("login")}>
                Log In
              </button>
              <button className={styles.signupBtn} onClick={() => setShowAuthPrompt("signup")}>
                Sign Up
              </button>
            </>
          )}

          {showAuthPrompt && (
            <div className={styles.authContainer} onClick={() => setShowAuthPrompt(null)}>
              <UserAuth authType={showAuthPrompt} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
