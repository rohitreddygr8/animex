import styles from "./navbar.module.scss";
import { useState } from "react";
import { Search, UserAuth } from "@components";
import { Link } from "react-router-dom";
import HeartedIcon from "@assets/icons/heart.svg";
import MenuIcon from "@assets/icons/menu.svg";
import RandomIcon from "@assets/icons/random.svg";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState<"login" | "signup" | null>(null);

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
        <Search />
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
