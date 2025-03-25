import React, { ReactElement } from "react";
import styles from "./stats.module.css";

export default function StatsComponents(): ReactElement {
  return (
    <ul className={styles.stats}>
      <li>
        <div className={styles.value}>+ 500</div>
        <div className={styles.label}>مدل خودرو </div>
      </li>
      <div className={styles.divider}></div>
      <li>
        <div className={styles.value}>+7,000</div>
        <div className={styles.label}>تحویل موفق</div>
      </li>{" "}
      <div className={styles.divider}></div>
      <li>
        <div className={styles.value}>+ 5</div>
        <div className={styles.label}>استان </div>
      </li>{" "}
    </ul>
  );
}
