import styles from "./local.module.scss";

export default function Watch() {
  return (
    <div className={styles["watch-page"]}>
      <ul>
        <li>Mushoku Tensei</li>
        <li>Attack on Titan</li>
        <li>Saiki K</li>
        <li>One Punch Man</li>
      </ul>
    </div>
  );
}
