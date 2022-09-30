import styles from "./user-auth.module.scss";
import { api } from "@utils";
import { useEffect, useRef, useState } from "react";
import ShowPasswordIcon from "@assets/icons/show-password.svg";
import HidePasswordIcon from "@assets/icons/hide-password.svg";

export const UserAuth = ({ authType }: { authType: "login" | "signup" }) => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((state) => !state);
  };

  const attemptLogin: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    // try {
    //   if (username && password) {
    //     const res = await fetchApi("/auth", {
    //       method: "POST",
    //       body: JSON.stringify({ username, password }),
    //       headers: { Accept: "text/plain" },
    //     });
    //     const t = await res.text();
    //     console.log(t);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.type = showPassword ? "text" : "password";
    }
  }, [showPassword]);
  return (
    <div className={styles.userAuth} onClick={(e) => e.stopPropagation()}>
      <form action="/api/auth" method="post"></form>
      <input type="text" name="username" className={styles.username} ref={usernameRef} required />
      <div className={styles.password}>
        <input type="password" name="password" ref={passwordRef} required />
        <button className={styles.passwordIcon} onClick={togglePasswordVisibility}>
          {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      </div>
      <button type="submit" onClick={attemptLogin}>
        Login
      </button>
    </div>
  );
};
