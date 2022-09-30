import styles from "./navbar.module.scss";
import { useState } from "react";
import { Search, UserAuth, UserProfile } from "@components";
import { Link } from "react-router-dom";
import HeartedIcon from "@assets/icons/heart.svg";
import MenuIcon from "@assets/icons/menu.svg";
import RandomIcon from "@assets/icons/random.svg";
import Logo from "@assets/icons/animex.png";
import { useViewportSize } from "@hooks";

export const Navbar = () => {
  const [viewportHeight, viewportWidth] = useViewportSize();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState<"login" | "signup" | null>(null);

  return (
    <div className={styles.navBar}>
      <div>
        <Link to={"/"}>
          <div aria-label="Animex Logo" className={styles.logo}>
            <img src={Logo} alt="Animex Icon" />
            {viewportWidth > 500 && <p>animex</p>}
          </div>
        </Link>
        {viewportWidth > 500 && (
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
        )}
      </div>
      <div>
        <Search />
        {/* {viewportWidth > 500 && (
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
        )} */}
        <UserProfile />
      </div>
    </div>
  );
};
