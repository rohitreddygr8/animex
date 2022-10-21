import styles from "./navbar.module.scss";
import { useLayoutEffect, useState } from "react";
import { Search, UserAuth } from "@components";
import { Link } from "react-router-dom";
import HeartedIcon from "@assets/icons/heart.svg";
import MenuIcon from "@assets/icons/menu.svg";
import RandomIcon from "@assets/icons/random.svg";
import UserIcon from "@assets/icons/user.svg";
import Logo from "@assets/icons/animex.png";
import { useViewportSize } from "@hooks";
import { api } from "@utils";

export const Navbar = () => {
  const [viewportHeight, viewportWidth] = useViewportSize();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);

  const getAvatar = async () => {
    const url = await api.getRandomAvatar();
    setAvatarSrc(url);
  };

  const hideAuth = () => {
    setShowAuthPrompt(false);
  };

  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
    getAvatar();

    window.onkeydown = (e) => {
      if (e.key === "Escape" && showAuthPrompt) {
        setShowAuthPrompt(false);
      }
    };

    return () => {
      window.onkeydown = null;
    };
  }, []);

  return (
    <div className={styles.navBar}>
      <div>
        <Link to="/">
          <div aria-label="Animex Logo" className={styles.logo}>
            <img src={Logo} alt="Animex Icon" />
            {viewportWidth > 500 && <p>animex</p>}
          </div>
        </Link>
        {viewportWidth > 500 && (
          <div className={styles.options}>
            <Link to="/watch-list">
              <button>
                <HeartedIcon />
                Liked
              </button>
            </Link>
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
        <button onClick={() => setShowAuthPrompt((state) => !state)} className={styles.profilePic}>
          {avatarSrc ? <img src={avatarSrc} alt="" /> : <UserIcon />}
        </button>
        {showAuthPrompt && (
          <div className={styles.authContainer} onClick={hideAuth}>
            <UserAuth authType="signup" />
          </div>
        )}
      </div>
    </div>
  );
};
