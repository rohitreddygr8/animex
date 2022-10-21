import { ReactNode } from "react";
import { Navbar } from "@components";
import styles from "./layout.module.scss";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <footer className={styles.footer}>
        <p>Made by rohitman47 🐼</p>
      </footer>
    </div>
  );
};
