import { Close } from "@mui/icons-material";
import styles from "./page.module.css";

export const Notify = ({ cross, showCross }) => {
  return (
    <div className={styles.notify}>
      <div className={styles.notifyText}>
        Sign up and get 20% off to your first order. Sign Up Now
        <Close className={styles.cross} onClick={() => showCross(!cross)} />
      </div>
    </div>
  );
};
