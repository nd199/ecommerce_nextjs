import React from "react";
import styles from "./blackbox.module.css";

const BlackBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.boxInner}>
        <div className={styles.brand1}>VERSACE</div>
        <div className={styles.brand2}>ZARA</div>
        <div className={styles.brand3}>GUCCI</div>
        <div className={styles.brand4}>ALLEN SOLLY</div>
        <div className={styles.brand5}>Calvin Klein</div>
      </div>
    </div>
  );
};

export default BlackBox;
