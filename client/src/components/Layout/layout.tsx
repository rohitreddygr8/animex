import { ReactNode } from "react";
import styles from "./layout.module.scss";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.layout}>
			{children}
			<footer className={styles.footer}>
				<p>Made by rohitman47 🐼</p>
			</footer>
		</div>
	);
};
