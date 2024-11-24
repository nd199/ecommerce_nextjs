import { Close } from "@mui/icons-material";
import styles from "./page.module.css";

export const Notify = ({ cross, showCross }) => {
  return (
    <div className={styles.notify}>
      <div>Sign up and get 20% off to your first order. Sign Up Now</div>
      <div className={styles.cross} onClick={() => showCross(!cross)}>
        <Close />
      </div>
    </div>
  );
};
