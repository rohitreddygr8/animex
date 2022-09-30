import styles from "./user-profile.module.scss";
import UserIcon from "@assets/icons/user.svg";
import DiceIcon from "@assets/icons/dice.svg";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";

export const UserProfile = () => {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);

  const getAvatar = async () => {
    const url = await api.getRandomAvatar();
    setAvatarSrc(url);
  };

  useEffect(() => {
    getAvatar();
  }, []);
  return (
    <div className={styles.userProfile}>
      <button onClick={() => setShowOptions(true)}>{avatarSrc ? <img src={avatarSrc} alt="" /> : <UserIcon />}</button>
      <div className={[styles.options, showOptions && styles.show].join(" ")}>
        <div className={styles.user}>
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt=""
              onClick={() => {
                setShowOptions(false);
              }}
            />
          ) : (
            <UserIcon />
          )}
          <button onClick={getAvatar}>
            <DiceIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
