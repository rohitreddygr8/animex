import styles from "./styles.module.scss";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { ReactElement } from "react";
import SideBar from "@components/SideBar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <SideBar />
      <Footer />
    </>
  );
}
