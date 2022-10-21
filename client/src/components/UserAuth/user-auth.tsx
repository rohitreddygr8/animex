import styles from "./user-auth.module.scss";
import { api } from "@utils";
import { useState } from "react";
import ShowPasswordIcon from "@assets/icons/show-password.svg";
import HidePasswordIcon from "@assets/icons/hide-password.svg";
import UsernameIcon from "@assets/icons/username.svg";
import PasswordIcon from "@assets/icons/key.svg";

export const UserAuth = ({ authType }: { authType: "login" | "signup" }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const usernameInputHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.currentTarget.value);
  };

  const passwordInputHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value);
  };

  const togglePasswordVisibility: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setShowPassword((state) => !state);
  };

  const authHandler = async (type: "login" | "signup") => {
    try {
      if (username && password) {
        const res = await api.fetchApi(type == "login" ? "/login" : "/signup", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          credentials: "include",
          headers: { Accept: "text/plain", "Content-Type": "application/json" },
        });
        const t = await res.text();
        alert(t);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={styles.auth}
      // onSubmit={authHandler}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="username">
          <UsernameIcon />
        </label>
        <div className={styles.username}>
          <input type="text" name="username" id="username" value={username} onInput={usernameInputHandler} required />
          <span>Username</span>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">
          <PasswordIcon />
        </label>
        <div className={styles.password}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onInput={passwordInputHandler}
            required
          />
          <span>Password</span>
          <button aria-label={showPassword ? "Hide password" : "Show password"} onClick={togglePasswordVisibility}>
            {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
          </button>
        </div>
      </div>
      <button type="submit" className={styles.loginBtn} onClick={() => authHandler("login")}>
        Login
      </button>
      <span className={styles.signUp}>
        Don't have an account?
        <button type="submit" className={styles.signUpBtn} onClick={() => authHandler("signup")}>
          Sign Up
        </button>
      </span>
    </div>
  );
};
